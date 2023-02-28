import Client from "../model/ClientModel.js";

export default async function (req, res, next) {
  if (
    req.headers["client-id"] == null &&
    req.headers["client-secret"] == null
  ) {
    res.status(400).json({
      success: false,
      msg: "akses ditolak",
    });
  } else {
    const clientValid = await Client.findOne({
      where: {
        clientId: req.headers["client-id"],
        clientSecret: req.headers["client-secret"],
        status: 1,
      },
    });

    if (clientValid) {
      next();
    } else {
      res.status(400).json({
        success: false,
        msg: "client tidak ditemukan",
      });
    }
  }
}
