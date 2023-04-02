import React from "react";
import homeStyles from '../assets/css/Home.module.css'



const MainNav = () => {
  return (
    <>
      <nav>
        <ul className={homeStyles.menu_wrapper}>
          <a><li className={homeStyles.menu_item}>Item</li></a>
          <a><li className={homeStyles.menu_item}>Item</li></a>
          <a><li className={homeStyles.menu_item}>Item</li></a>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
