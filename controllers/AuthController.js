import bcrypt from "bcryptjs";
import User from "../model/UserModel.js";
import randomstring from "randomstring";
import jwt from "jsonwebtoken";
import * as h from "./helpers/helper.js";
import * as dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  const nm = req.body.username;
  const pw = req.body.password;

  const user = await User.findOne({
    where: {
      username: nm,
    },
  });

  if (!user) {
    res.status(400).json(h.err("user tidak ditemukan."));
  } else {
    const success = bcrypt.compareSync(req.body.password, user.password);
    if (!success) {
      res.status(400).json(h.fail("password salah"));
    } else {
      var token =
        "Bearer " +
        jwt.sign(
          {
            id: user.id,
          },
          process.env.SECRET,
          {
            expiresIn: 86400, //24h expired
          }
        );

      res.json({
        user: user,
        token,
      });
    }
  }
};

export const signup = async (req, res) => {
  try {
    let cari = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (cari) {
      res.status(400).json(h.fail("username telah digunakan"));
    } else {
      let data = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 12),
        token: randomstring.generate(40),
      };

      const user = await User.create(data);
      res.json(h.success("register success"));
    }
  } catch (error) {
    res.status(400).json(h.fail("Oops sepertinya ada kesalahan input"));
  }
};
