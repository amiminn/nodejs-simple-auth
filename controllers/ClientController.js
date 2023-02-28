import Client from "../model/ClientModel.js";
import randomstring from "randomstring";
import * as h from "./helpers/helper.js";

export const store = async (req, res) => {
  try {
    let cari = await Client.findOne({
      where: {
        namaClient: req.body.namaClient,
      },
    });

    if (cari) {
      res.status(400).json(h.fail("Client name telah digunakan"));
    } else {
      Client.create({
        namaClient: req.body.namaClient,
        clientId: randomstring.generate(16),
        clientSecret: randomstring.generate(40),
      });

      res.json(h.success("create new client success"));
    }
  } catch (error) {
    res.status(400).json(h.fail("Oops sepertinya ada kesalahan input"));
  }
};
