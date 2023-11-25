import axios from 'axios';
// trong create truyền vào 1 object
const axiosClient = axios.create({
    baseURL: "http://localhost:3004/",
});

axios.interceptors.request.use(
  // đánh chặn. add token cho header khi chưa gọi API đến backend.
  function (config) {
    const token = localStorage.getItem("access-token");
    if(token){
      // theo backend
      config.headers["access-token"] = token;
    }
    
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });
axios.interceptors.response.use(function (response) {
    console.log("original response", response);
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
export default axiosClient;