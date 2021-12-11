import request from 'src/common/tools/request'

const getApiUsersList = (allParams, options) => {

  
  
  

  
  return request({
    url: `/users/list`,
    method: 'GET',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default getApiUsersList