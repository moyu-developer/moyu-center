import request from 'src/common/tools/request'

const postApiUsersRegister = (allParams, options) => {

  
  
  

  
  return request({
    url: `/users/register`,
    method: 'POST',
    params: {
      
    },
    data: allParams,
    ...options
  })
}

export default postApiUsersRegister