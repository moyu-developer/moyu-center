import request from 'src/common/tools/request'

const putApiWorkV1ChangeId = (allParams, options) => {

  
  
  
  const {
    
      
        id,
      
    
    
    ...data
  } = allParams
  

  
  return request({
    url: `/work/v1/change/${id}`,
    method: 'PUT',
    params: {
      
    },
    data: data,
    ...options
  })
}

export default putApiWorkV1ChangeId