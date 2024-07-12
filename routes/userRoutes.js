const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  showCurentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router.route("/").get(getAllUsers);
router.route("/showMe").get(showCurentUser);
router.route("/updateUser").patch(updateUser);
router.route("/updateUserPassword").patch(updateUserPassword);
router.route("/:id").get(getSingleUser);

module.exports = router;
