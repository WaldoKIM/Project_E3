/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

function NucleoIcons() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("demo-icons");
    return function cleanup() {
      document.body.classList.remove("demo-icons");
    };
  });
  return (
    <>
      <header>
        <h1>&#40;주&#41; 이쓰리 홈페이지</h1>
        <p>
          Built with{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            nucleoapp.com
          </a>
        </p>
      </header>
      
    </>
  );
}

export default NucleoIcons;
