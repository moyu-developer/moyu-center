import request from 'src/common/tools/request'

const postApiWorkV1Create = (allParams, options) => {

  
  
  

  
  return request({
    url: `/work/v1/create`,
    method: 'POST',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default postApiWorkV1Create