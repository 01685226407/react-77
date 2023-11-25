import React, { useState } from 'react';
import {Drawer, Menu} from 'antd';
import {MenuOutlined} from "@ant-design/icons";
export default function Navbar() {
    const [openMenu,setOpenMenu] = useState(false);
  return (
    
    <div style={{height: '100vh',backgroundColor:"rgb(0,150,255)"}}>
    <div style={{
        backgroundColor:'darkorange',
        height:60,
        paddingLeft:12}}
        className='menuIcon '
        >
        <MenuOutlined style={{color:'white', fontSize:30}} onClick={()=>{
            setOpenMenu(true);
        }}/>
    </div>
    <span className='headerMenu'>
        <AppMenu/>
    </span>
        
        <Drawer 
            placement='left'
            open ={openMenu}
            onClose={()=>{
                setOpenMenu(false)
            }}
            closable={false} 
            
            bodyStyle={{backgroundColor:"darkorange"}}

            >
            <AppMenu isInline />
        </Drawer>
    </div>
  )
}
function AppMenu({isInline = false}){
    return(
        <Menu 
        style={{backgroundColor: "darkorange", color:'white',fontSize:24, border:'none'}}
        mode={isInline?"inline":"horizontal"}
        items={[
            {
                label: "Home",
                key: "home",
            },
            {
                label: "Contact",
                key: "contact",
            },
            {
                label: "About Us",
                key: "about",
            },
            {
                label: "Login",
                key: "login",
            }
        ]}>
        </Menu>
    )
}
