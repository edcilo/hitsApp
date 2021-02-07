import AuthRepository from "./authRepository";

export default ($axios) => ({
  auth: AuthRepository($axios),
})
