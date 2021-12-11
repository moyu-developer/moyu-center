import request from 'src/common/tools/request'

const getApiUsersV1Info = (allParams, options) => {

  
  
  

  
  return request({
    url: `/users/v1/info`,
    method: 'GET',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default getApiUsersV1Info