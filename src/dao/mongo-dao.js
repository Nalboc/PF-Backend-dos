export default class MongoDao {
  constructor(model) {
    this.model = model;
  }
  create = async (body) => {
    try {
      return await this.model.create(body);
    } catch (e) {
      throw new Error(e);
    }
  };
  getAll = async () => {
    try {
      return await this.model.find({});
    } catch (e) {
      throw new Error(e);
    }
  };
  getById = async (id) => {
    try {
      return await this.model.findById(id);
    } catch (e) {
      throw new Error(e);
    }
  };
  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, { new: true });
    } catch (e) {
      throw new Error(e);
    }
  };
  delete = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(e);
    }
  };
}
