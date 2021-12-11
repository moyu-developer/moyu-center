import request from 'src/common/tools/request'

const postApiUsersLogin = (allParams, options) => {

  
  
  

  
  return request({
    url: `/users/login`,
    method: 'POST',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default postApiUsersLogin