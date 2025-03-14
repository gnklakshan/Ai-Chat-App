import axios from "axios";

// Register a new user
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("/user/login", {
    email,
    password,
  });
  console.log(response);
  if (response.status !== 200) {
    throw new Error("Failed to login");
  }
  return response.data;
};

// Login an existing user by checking the auth status with available cookies
export const checkAuthStatus = async () => {
  const response = await axios.get("/user/auth-status");
  console.log(response);
  if (response.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await response.data;
  return data;
};
