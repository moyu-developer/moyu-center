import request from 'src/common/tools/request'

const getApiWorkV1DeleteId = (allParams, options) => {

  
  
  
  const {
    
      
        id,
      
    
    
    ...data
  } = allParams
  

  
  return request({
    url: `/work/v1/delete/${id}`,
    method: 'GET',
    params: {
      
    },
    data: data,
    ...options
  })
}

export default getApiWorkV1DeleteId