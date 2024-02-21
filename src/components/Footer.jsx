import React from "react";
import Capture  from '../assets/Capture.png';

function Footer() {
    return (
      <div className="footer flex items-center justify-center ">
        <div>
          <p>© 2024 Copyright:</p>
          <a href="" className=" dark:text-neutral-400">React Rangers</a>
        </div>
        <div>
          <img src={Capture} alt="" className="object-contain h-auto max-h-12" />
        </div>
      </div>
    );
  }
  
  
  
  
export default Footer;
