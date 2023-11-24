const User = require("../Models/userModel");

exports.getUser = async (req, res) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: user });
  } catch (error) {
    console.log(error.message);
  }
};
