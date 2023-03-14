import React from "react";
import { HiFingerPrint } from "react-icons/hi";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <section className='header-body'>
      <figure class="hover-rotate">
        <img src={logo} alt="Rick and Morty logo" />
        <p>
          Thanks for visiting. This site uses the 
          <a
            role="button"
            className="btn btn-link"
            href="https://rickandmortyapi.com/"
          >
             https://rickandmortyapi.com/ <HiFingerPrint />
          </a>
          Click the link to check it out ... but be quick Rick and Morty protect
          it.
        </p>
      </figure>
    </section>
  );
};

export default Header;
