import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

export enum NextEntry {
  DEFAULT,
  CUSTOM
}

export interface ReturnInterceptorsMiddleware<R = undefined> {
  entry: NextEntry,
  res?: R
}

export type AxiosRequestInterceptorsMiddleware = <R = undefined>(res) => Promise<ReturnInterceptorsMiddleware<R>>

export type AxiosResponseInterceptorsMiddleware = <R = undefined>(res) => Promise<ReturnInterceptorsMiddleware<R>>

export interface AxiosInitialOptions {
  request: AxiosRequestInterceptorsMiddleware,
  response: AxiosResponseInterceptorsMiddleware,
  disabledInterceptors: Array<'request' | 'response'>
}

class Axios {

  private axios: AxiosInstance

  constructor (private readonly options: AxiosRequestConfig, private readonly config?: AxiosInitialOptions) {
    if (options) {
      this.init()
    } else {
      throw new Error(`can not find 'options' property is not found`)
    }
  }

  private init () {
    this.axios = axios.create({
      /** @name 超时时间3s */
      timeout: 3000 | this.options.timeout,
      headers: this.options.headers || {
        'Content-Type': 'application/json'
      }
    })
  }

  private createInterceptor () {
    if (this.config.disabledInterceptors.indexOf('request') === -1) {

      this.axios.interceptors.request.use(async(request) => {

        
      })
    }


    if (this.config.disabledInterceptors.indexOf('response') === -1) {

      this.axios.interceptors.response.use(() => {

      })
    }
  }


  /**
   * 获取请求时
   * @returns AxiosInstance
   */
  getRequestInstance () {
    return this.axios
  }
  
}

export default Axios