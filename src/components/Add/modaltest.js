import React, { useState } from "react";

import Modal from "react-modal";
import Portal from './portal.js';

import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";

Modal.setAppElement("#root");

export default function Modaltest() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
    setIsOpen(!isOpen);
    }

    return (    
    <div>
        <button onClick={toggleModal}>로그인</button>

        <Modal className="modalxx"
        isOpen={isOpen}
        onRequestClose={toggleModal}        
        portalClassName={"modalx"}
        contentLabel="My dialog"
        >
        <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/e3/warning.png").default + ")",            
        }}
      >
         <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6"> 
              <Card className="card-register">
              <div>보&nbsp;안&nbsp;철&nbsp;저</div>        
                <h3 className="title mx-auto">로그인</h3>
                <div className="social-line text-center">                  
                </div>
                <Form className="register-form">
                  <label>아이디</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-badge" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="아이디를 입력하세요" type="text" />
                  </InputGroup>
                  <label>비밀번호</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="비밀번호를 입력하세요" type="password" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="success"
                    type="button"
                  >
                    로그인
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    비밀번호를 잊으셨나요?
                  </Button>
                </div>
              </Card>               
              <div className="col text-center">
                <Button
                  className="btn-round"
                  onClick={toggleModal}
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  메인 화면으로 돌아가기
                </Button>
              </div>                                
        </Col>
          </Row>
        </Container>   
      </div>{" "}        
        </Modal>
        
    </div>
    
);
}


{/*
export default function Modaltest() {    

    return (
        <>      
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
);
}
*/}