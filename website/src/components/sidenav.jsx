import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
    console.log('state changed')
  };

  return (
    <div>
      <AiOutlineMenu onClick={handlenav} className="absolute top-4 right-4 z-[99] md:hidden"/>
      {
         nav ? (
            <div></div>
         )

         :(
            <div></div>
         )
      }
    </div>
  );
};

export default Sidenav;
