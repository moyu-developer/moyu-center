import request from 'src/common/tools/request'

const getApiUsersId = (allParams, options) => {

  
  
  
  const {
    
      
        id,
      
    
    
    ...data
  } = allParams
  

  
  return request({
    url: `/users/${id}`,
    method: 'GET',
    params: {
      
    },
    data: data,
    ...options
  })
}

export default getApiUsersId