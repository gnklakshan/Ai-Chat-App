import axios from "axios";

// Register a new user
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("/user/login", {
    email,
    password,
  });
  if (response.status !== 200) {
    throw new Error("Failed to login");
  }
  return response.data;
};
