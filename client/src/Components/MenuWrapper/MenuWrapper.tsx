import React from "react";
import Menu from "../Menu/Menu";

type PropsType = {
  children: React.ReactNode
}

const MenuWrapper: React.FC<PropsType> = ({ children }) => {
  return (
    <div className='row'>
      <div className='menuUser-sm-hiden col-sm-3 col-md-2'><Menu /></div>

      <div className='col-12 col-sm-9 col-md-10'>
        {children}
      </div>
    </div>
  );
}

export default MenuWrapper;
