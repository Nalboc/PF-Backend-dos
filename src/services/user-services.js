import { UserDao } from "../dao/user-dao.js";
import { createHash } from "../utils/user-utils.js";

class UserService {
  constructor(dao) {
    this.dao = dao;
  }

  createWithHash = async (body) => {
    try {
      const { password } = body;
      console.log(password);
      const response = await UserDao.create({
        ...body,
        password: createHash(password),
      });
      console.log(response);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  };
}
export const userService = new UserService(UserDao);
