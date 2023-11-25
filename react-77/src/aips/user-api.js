import axiosClient from "./base";


const getUser =(config)=>{

    return axiosClient.get("/user", config);
} 
// {
//     params:{
//         limit: 10,
//         offset: 0,
//         name: "abc",
//     }
//data là object user
const createUser =(data, config)=>{

    return axiosClient.post("/user",data, config);
} 
const updateUser =(id,data, config)=>{

    return axiosClient.put(`/user/${id}`,data, config);
} 
const deleteUser =(id,config)=>{

    return axiosClient.delete(`/user/${id}`,config);
} 

export {getUser,createUser,deleteUser,updateUser};
