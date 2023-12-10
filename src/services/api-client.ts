import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b62209c53bea471e8e2f8d68decf3aae",
  },
});
