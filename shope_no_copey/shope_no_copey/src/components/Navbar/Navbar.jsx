
import { Navbar, Container, Nav, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BasicExample } from "./ButtonCustom";

export const Nawbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" text="dark" xs="auto">
      <Container>
        <Link variant="link" to="/">
          <Navbar.Brand>
            <img
              src="https://react-bootstrap.github.io/logo.svg"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top  "
            />
            React-Bootstrap
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" xs="auto" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex-lg justify-content-end "
          xs="auto"
        >
          <Nav className="d-flex justify-content-end flex-fill bd-highlight flex-row">

          <BasicExample />
           

            <Link
            style={{border: 'none'}}
              type="button"
              className="btn position-relative"
              variant="link"
              to="user"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="M11.875 36.625Q10.583 36.625 9.667 35.708Q8.75 34.792 8.75 33.542Q8.75 32.25 9.667 31.333Q10.583 30.417 11.833 30.417Q13.125 30.417 14.042 31.333Q14.958 32.25 14.958 33.542Q14.958 34.833 14.042 35.729Q13.125 36.625 11.875 36.625ZM28.542 36.625Q27.25 36.625 26.333 35.708Q25.417 34.792 25.417 33.542Q25.417 32.25 26.333 31.333Q27.25 30.417 28.5 30.417Q29.792 30.417 30.708 31.333Q31.625 32.25 31.625 33.542Q31.625 34.833 30.708 35.729Q29.792 36.625 28.542 36.625ZM9.958 9.417 14.333 18.542H26.208Q26.208 18.542 26.208 18.542Q26.208 18.542 26.208 18.542L31.208 9.417Q31.208 9.417 31.208 9.417Q31.208 9.417 31.208 9.417ZM8.583 6.625H33.125Q34.417 6.625 34.792 7.458Q35.167 8.292 34.625 9.25L28.875 19.542Q28.458 20.292 27.708 20.792Q26.958 21.292 26.042 21.292H13.5L11.333 25.292Q11.333 25.292 11.333 25.292Q11.333 25.292 11.333 25.292H31.625V28.083H11.583Q9.792 28.083 8.958 26.75Q8.125 25.417 8.958 23.917L11.458 19.292L5.25 6.125H1.958V3.333H7.042ZM14.333 18.542H26.208Q26.208 18.542 26.208 18.542Q26.208 18.542 26.208 18.542Z" />
              </svg>

              <Badge pill bg="danger" className="d-inline-block align-top ">
                +1
              </Badge>
            </Link>
            <Link
            style={{border: 'none'}}
              type="button"
              className="btn position-relative"
              variant="link"
              to="auth"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path d="M20 19.958Q17.25 19.958 15.438 18.146Q13.625 16.333 13.625 13.583Q13.625 10.833 15.438 9.021Q17.25 7.208 20 7.208Q22.75 7.208 24.562 9.021Q26.375 10.833 26.375 13.583Q26.375 16.333 24.562 18.146Q22.75 19.958 20 19.958ZM6.667 33.333V29.167Q6.667 27.625 7.437 26.479Q8.208 25.333 9.458 24.75Q12.167 23.5 14.771 22.854Q17.375 22.208 20 22.208Q22.625 22.208 25.208 22.854Q27.792 23.5 30.542 24.75Q31.792 25.375 32.562 26.5Q33.333 27.625 33.333 29.167V33.333ZM9.458 30.542H30.542V29.167Q30.542 28.583 30.208 28.042Q29.875 27.5 29.375 27.25Q26.833 26 24.604 25.5Q22.375 25 20 25Q17.625 25 15.375 25.5Q13.125 26 10.625 27.25Q10.083 27.5 9.771 28.042Q9.458 28.583 9.458 29.167ZM20 17.208Q21.542 17.208 22.583 16.167Q23.625 15.125 23.625 13.583Q23.625 12.042 22.583 11Q21.542 9.958 20 9.958Q18.458 9.958 17.417 11Q16.375 12.042 16.375 13.583Q16.375 15.125 17.417 16.167Q18.458 17.208 20 17.208ZM20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583Q20 13.583 20 13.583ZM20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Q20 30.542 20 30.542Z" />
              </svg>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
