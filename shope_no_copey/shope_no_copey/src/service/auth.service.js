import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const API_URL = "http://localhost:5000/api/";
const register = (username, email, password) => {
    try {
        
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
    } catch (error) {
        console.log(error)
    }
};
const login = async (email, password) => {
try {
  console.log(email, password)
    const response = await axios
    .post(API_URL + "login", {
        email,
        password,
    });
if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
}
cookies.set('GG', response.data.JWT , { path: '/' });
return response.data;
} catch (error) {
    console.log(error)
}
};
const logout = () => {
  localStorage.removeItem("user");
};
export  const authService = {
  register,
  login,
  logout,
};
