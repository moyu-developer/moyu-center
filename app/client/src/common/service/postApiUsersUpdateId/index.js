import request from "src/common/tools/request";

const postApiUsersUpdateId = (allParams, options) => {
  const {
    id,

    ...data
  } = allParams;

  return request({
    url: `/users/update/${id}`,
    method: "POST",
    params: {},
    data,
    ...options,
  });
};

export default postApiUsersUpdateId;
