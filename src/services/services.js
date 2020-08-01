import axios from "axios";

axios.defaults.baseURL =
  "https://yalantis-react-school-api.yalantis.com/api/task0/users";

export default {
  async getUsers() {
    try {
      const data = await axios.get("/");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
