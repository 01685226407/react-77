import React from 'react'
import { getProduct } from '../aips/product-api';

export default function useProductList() {
    const [data, setData] = React.useState([]);
    const getData = async ()=>{
        try {
            const response = await getProduct({});
            setData(response.data);
            
        } catch (error) {
            
        }
    };
    React.useEffect(()=>{
        getData();
    },[]);
  return [data,getData];
}
