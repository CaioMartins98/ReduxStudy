import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";

// import { Container } from './styles';

function Login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const nameUser = name;
    localStorage.setItem('user', JSON.stringify(nameUser))
    dispatch(changeUser(nameUser));
    
  };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(name));
  // }, []);
  return (
    <>
      <Form>
        <h1 className="mt-4">Login</h1>
        <Row className="align-itmes-center">
          <Col sm={6} className="my-1">
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col sm={6}>
            <Button onClick={handleLogin}>Login</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Login;
