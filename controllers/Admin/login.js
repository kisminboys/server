const { Admin } = require("../../models");
const { jwtHelper, passHelper } = require("../../helpers");

module.exports = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!admin) {
      throw { status: 400, message: "invalid account" };
    } else if (passHelper.comparePassword(req.body.password, admin.password)) {
      res
        .status(200)
        .json({
          access_token: jwtHelper.encode({ id: admin.id, email: admin.email }),
        });
    } else {
      throw { status: 400, message: "invalid account" };
    }
  } catch (error) {
    next(error);
  }
};

/**
 * requirement
 * req.body.email
 * req.body.password
 */
