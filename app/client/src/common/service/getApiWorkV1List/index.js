import request from 'src/common/tools/request'

const getApiWorkV1List = (allParams, options) => {

  
  
  

  
  return request({
    url: `/work/v1/list`,
    method: 'GET',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default getApiWorkV1List