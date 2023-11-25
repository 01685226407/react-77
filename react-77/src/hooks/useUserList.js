import React, { useEffect } from 'react'
import { getUser } from '../aips/user-api';

export default function useUserList() {
  //đây là 1 custome hook
  const [data, setData] = React.useState([]);
  const [totalData, setToltalData] = React.useState(0);
  const getData = async (page = 1)=>{
    try{
      const response = await getUser({
        params:{
          _page: page,
          _limit: 5,
        },
        
      });
      // lúc đầu data là 1 mảng rỗng. sau khi call API thì setData lại để có dữ liệu.
      setData(response.data);
      console.log("new response ", response);
      setToltalData(Number(response.headers["x-total-count"]))
    }catch(error){

    }
  };
  React.useEffect(()=>{
    getData();
  },[]);
  return [data, getData, totalData];
  // không return ra giao diện mà return ra dữ liệu
}
