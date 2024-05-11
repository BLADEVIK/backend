const getUsers = (request, response) => {};
const getUser = (request, response) => {
  response.status(200);
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id} `);
};
const createUser = (request, response) => {};
const updateUser = (request, response) => {};
const deleteUser = (request, response) => {};
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
