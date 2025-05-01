import { Router } from "express";
import { userService } from "../services/user-services.js";
import { UserDao } from "../dao/user-dao.js";
const route = Router();

route.get("/", async (req, res) => {
  try {
    const users = await UserDao.getAll();
    res.json({ mensaje: "TODOS LOS USUARIOS", payload: users });
  } catch (e) {
    res.json({ mensaje: "error mostrando usuarios", error: e });
  }
});
route.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    const respuesta = await userService.createWithHash(newUser);
    res.json({ mensaje: "CREAR USUARIO", payload: respuesta });
  } catch (e) {
    res.json({
      mensaje: "Error creando usuario",
      error: e,
    });
  }
});
route.put("/modify/:id", async (req, res) => {
  try {
    const ID = req.params.id;
    const body = req.body;
    console.log(body);
    const respuesta = await UserDao.update(ID, body);
    console.log(respuesta);
    res.json({ mensaje: "MODIFICAR USUARIO", payload: respuesta });
  } catch (e) {
    res.json({ mensaje: "error modificando usuario", error: e });
  }
});
route.delete("/delete", async (req, res) => {
  try {
    const id = req.body;
    const respuesta = await UserDao.delete(id, { _id: id });
    res.json({ mensaje: "BORRAR USUARIO", payload: respuesta });
  } catch (e) {
    res.json({ mensaje: "error borrando usuario", error: e });
  }
});
export default route;
