import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

export * from 'axios'

export * from './options'

export enum NextEntry {
  DEFAULT,
  CUSTOM
}

export interface GotResult <T = unknown> {
  code: number,
  data: T,
  message: string
}

export interface GotRequestOptions {
  request?: (request: AxiosRequestConfig) => AxiosRequestConfig,
  response?: (response: AxiosResponse) => any,
  handleError: <E = any>(error: E) => void
}

class GotAxios {

  private axios!: AxiosInstance

  constructor (private readonly options: AxiosRequestConfig, private readonly handle: GotRequestOptions) {
    if (options) {
      this.init()
    } else {
      throw new Error(`can not find 'options' property is not found`)
    }
  }

  private init () {
    this.axios = axios.create({
      ...this.options,
      baseURL: this.options.baseURL,
      /** @name 超时时间3s */
      timeout: this.options.timeout || 3000,
      headers: {
        ...(this.options.headers || {})
      }
    })
    
    /** 创建过滤器 */
    this.createInterceptor()
  }

  private createInterceptor () {

    this.axios.interceptors.request.use((request) => {
      console.log(`正在发送请求 --> ${request.url}`)
      if (this.handle.request) {
        const config = this.handle.request(request)
        return config ? config : request
      }
      return request
    })

    this.axios.interceptors.response.use((response) => {
      if (this.handle.response) {
        try {
          const res = this.handle.response(response)
          return res || response.data
        } catch (error) {
          this.handle.handleError(response)
        }
        
      } else {
        if (/^(2|3)\d{2}$/.test(String(response.status))) {
          return response.data
        } else {
          return Promise.reject(response)
        }
      }
    }, this.handle?.handleError)
  }


  /**
   * 获取请求时
   * @returns AxiosInstance
   */
  getRequestInstance () {
    return this.axios
  }
  
}

export default GotAxios