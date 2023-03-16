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
function Navi() {
  const [user] = useAuthState(auth);
  const [localCard, setLocalCard] = React.useState(undefined);
  const [control, setControl] = React.useState(false);
  React.useEffect(() => {
    setControl(!control);
  }, []);
  const setCard = (card, dispatch) => {
    let gecici = {};
    card.forEach((item) => {
      let count =
        gecici[item.title] !== undefined ? gecici[item.title].count + 1 : 1;
      gecici[item.title] = { ...item, count: count };
    });
    setLocalCard(gecici);
    dispatch({ type: "SET_CARD_CONTROL", payload: false });
    setControl(false);
  };
  return (
    <CardConsumer>
      {(values) => {
        const { card, cardControl, dispatch } = values;
        return (
          <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand>Marketing</Navbar.Brand>
              {(cardControl || control) && setCard(card, dispatch)}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1 pe-3 ">
                  {card.length > 0 && localCard != undefined && (
                    <NavDropdown
                      title="Card"
                      id="basic-nav-dropdown"
                      className="mx-5"
                    >
                      {Object.keys(localCard).map((item) => (
                        <>
                          <NavDropdown.Item>
                            <Link
                              to={"/product/" + localCard[item].id}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {localCard[item].count > 1 && (
                                <span className="badge text-bg-success mx-1">
                                  {localCard[item].count}
                                </span>
                              )}
                              {localCard[item].title}
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </>
                      ))}
                      <NavDropdown.Item>
                        <div className="row">
                          <div className="col-md-5">
                            <button
                              onClick={() => {}}
                              className="btn btn-primary"
                            >
                              Card
                            </button>
                          </div>
                          <div className="col-md-5">
                            <button
                              onClick={() => {
                                dispatch({ type: "DELETE_CARD" });
                                setLocalCard(undefined);
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
                      <Button onClick={()=>{logout()}}>Çıkış Yap</Button>
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
