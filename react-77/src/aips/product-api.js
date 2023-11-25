import axiosClient from "./base";

const getProduct =(config)=>{
    return axiosClient.get("/product", config);
}

const createProduct = (data,config)=>{
    return axiosClient.post("/product",data,config);
}
const updateProduct = (id,data,config)=>{
    return axiosClient.put(`/product/${id}`,data, config);
}
const deleteProduct = (id,config)=>{
    return axiosClient.delete(`/product/${id}`,config);
}

export {getProduct,createProduct,updateProduct,deleteProduct};