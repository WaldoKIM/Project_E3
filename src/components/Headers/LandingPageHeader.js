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
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/main_test.jpg").default + ")",
            //"url(" + require("assets/img/daniel-olahh.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>우리의 삶을 위한 지속가능한 환경 개선,
              <br />
              &#40;주&#41;이쓰리가 함께 합니다</h1>
            <h3>대한민국 으뜸 종합 환경 IT 솔루션 기업, &#40;주&#41;이쓰리에 오신 걸 환영합니다</h3>
            <br />
            {/*
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            */}
            <Button className="btn-round" color="neutral" type="button" outline>
              회사소개 바로가기
      </Button>
                  

          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
