import MongoDao from "./mongo-dao.js";
import { UserModel } from "../models/user.model.js";

class UserDaoMongo extends MongoDao {
  constructor(model) {
    super(model);
  }
}

export const UserDao = new UserDaoMongo(UserModel);
