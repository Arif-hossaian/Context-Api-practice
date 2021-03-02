import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicNav from "./BasicNav"

const App = () => {
  const [state, setstate] = useState({
    user: {
      name: "Arif hossain",
      email: "arif@gmail.com",
      languages: ["C prgm", "C ++", "Python"],
    },
    isAuthenticated: true,
  });

  const login = () => {
    setstate({ isAuthenticated: true });
  };

  const logout = () => {
    setstate({ isAuthenticated: false });
  };

  const addToShowCase = (item) => {
    const user = { ...state.user };
    user.languages.push(item);
    setstate({ user });
  };
  return (
    <>
      <Container>
          <Row>
              <Col md={12}>
                  <h1 className="my-2">
                      Context api practice
                  </h1>
                  <hr/>
                  <BasicNav
                  isAuthenticated={state.isAuthenticated}
                  user={state.user}
                  login={state.login}
                  logout={state.logout}
                 />
              </Col>
          </Row>
      </Container>
    </>
  );
};

export default App;
