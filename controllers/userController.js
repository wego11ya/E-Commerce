const getAllUsers = async (req, res) => {
  res.send("get all users");
};
const getSingleUser = async (req, res) => {
  res.send("get single user");
};
const showCurentUser = async (req, res) => {
  res.send("show current user");
};
const updateUser = async (req, res) => {
  res.send("update user");
};
const updateUserPassword = async (req, res) => {
  res.send("update user password");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurentUser,
  updateUser,
  updateUserPassword,
};
