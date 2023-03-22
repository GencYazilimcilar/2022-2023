import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardConsumer from "../contextApi/cardContextApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../root/firebase_config";
import { useNavigate } from "react-router-dom";
function Navi() {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  return (
    <CardConsumer>
      {(values) => {
        const { card, dispatch } = values;
        return (
          <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand
                onClick={() => {
                  navigate("/");
                }}
              >
                Marketing
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto flex-grow-1 pe-3  justify-content-end">
                  {card.length > 0 && (
                    <NavDropdown
                      title="Card"
                      id="basic-nav-dropdown"
                      className="mx-5"
                    >
                      {Object.keys(card).map((item) => (
                        <>
                          <NavDropdown.Item>
                            <Link
                              to={"/product/" + card[item].id}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {card[item].count > 1 && (
                                <span className="badge text-bg-success mx-1">
                                  {card[item].count}
                                </span>
                              )}
                              {card[item].title}
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </>
                      ))}
                      <NavDropdown.Item>
                        <div className="row">
                          <div className="col-md-5">
                            <button
                              onClick={() => {
                                navigate("/card-details");
                              }}
                              className="btn btn-primary"
                            >
                              Card
                            </button>
                          </div>
                          <div className="col-md-5">
                            <button
                              onClick={() => {
                                dispatch({ type: "DELETE_CARD" });
                              }}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  {user ? (
                    <Navbar.Brand className="mx-3">
                      <Button
                        onClick={() => {
                          logout();
                        }}
                      >
                        Çıkış Yap
                      </Button>
                    </Navbar.Brand>
                  ) : (
                    <Link
                      to="/login"
                      className="mx-3"
                      style={{ textDecoration: "none" }}
                    >
                      <Navbar.Brand>Giriş Yap</Navbar.Brand>
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }}
    </CardConsumer>
  );
}

export default Navi;
//<Nav.Link href="#home">Home</Nav.Link>
