import client from "./client";

const register = (userinfo) => client.post("/users", userinfo);

export default { register };
