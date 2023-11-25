import axios from 'axios';
import React from 'react'
import { getUser } from '../apis/user-api';

export default function Api() {
    const getData = async () => {
       
            try { 
                const response = await getUser({
                params:{
                    limt: 10,
                    offset: 0,
                },
            });
            } catch (error) {
                console.log("erro");
            }
            
       
        console.log(response);
        // const response = await axios.request({
        //   url: "http://localhost:3004/user",
        //   method: "GET",
        // });
    
        // const axiosClient = axios.create({
        //   baseURL: "http://localhost:3004",
        // });
        // const response = await axiosClient.get("user");
      };
      useEffect(() => {
        getData();
      }, []);
  return (
    <div>Api</div>
  )
}
