import React from "react";

import { Link, NavLink } from "react-router-dom";
import { Container, ModalFooter, Navbar } from "react-bootstrap";
import { MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
<div className="footer">

    <MDBFooter  className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-google'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </section>

    <section className=''>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <i className='fas fa-gem me-3'></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Laravel
              </a>
            </p>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <i className='fas fa-home me-3'></i> New York, NY 10012, US
            </p>
            <p>
              <i className='fas fa-envelope me-3'></i>
              info@example.com
            </p>
            <p>
              <i className='fas fa-phone me-3'></i> + 01 234 567 88
            </p>
            <p>
              <i className='fas fa-print me-3'></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 :DDD

    </div>
  </MDBFooter>

</div>


// <nav class="navbar navbar-fixed-bottom footer mt-5 navbar-light bg-light">
//   <a class="navbar-brand" href="#">Fixed Footer</a>
// </nav>

    // <div className="navbar-fixed-bottom row-fluid" id="footer">
    //   <div className="navbar-inner">

    //       <ModalFooter className=" ">
    //         <Container className="d-flex navbar-inner ">
    //           <Navbar.Brand className="p-2 mr-auto" href="#">
    //             <img
    //               src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22358%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20358%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180f892f714%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180f892f714%22%3E%3Crect%20width%3D%22358%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22133.6875%22%20y%3D%2298.7%22%3E358x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    //               alt=""
    //               width="30"
    //               height="30"
    //               className="d-inline-block align-top"
    //             />
    //             Navbar Offcanvas
    //           </Navbar.Brand>

    //           <Container className="d-flex  justify-content-end">
    //             <a href="https://mail.google.com" className="p-2">
    //               <img
    //                 src="https://img2.freepng.ru/20180805/zvr/kisspng-gmail-image-google-photos-computer-icons-bspec-bocconi-students-private-equity-club-milano-5b670af0b0d545.0046359715334796647243.jpg"
    //                 alt=""
    //                 width="30"
    //                 height="30"
    //                 className="d-inline-block align-top"
    //               />
    //             </a>
    //             <a href="https://youtube.com" className="p-2">
    //               <img
    //                 src="https://p1.hiclipart.com/preview/501/124/941/arrow-graphic-design-youtube-logo-youtube-play-buttons-symbol-red-material-property-rectangle-png-clipart-thumbnail.jpg"
    //                 alt=""
    //                 width="30"
    //                 height="30"
    //                 className="d-inline-block align-top"
    //               />
    //             </a>
    //             <a
    //               href="https://en.wikipedia.org/wiki/Instagram"
    //               className="p-2"
    //             >
    //               <img
    //                 src="https://vectorified.com/images/transparent-instagram-icon-26.jpg"
    //                 alt=""
    //                 width="30"
    //                 height="30"
    //                 className="d-inline-block align-top"
    //               />
    //             </a>
    //             <a href="https://vectorified.com" className="p-2">
    //               <img
    //                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22358%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20358%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180f892f714%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180f892f714%22%3E%3Crect%20width%3D%22358%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22133.6875%22%20y%3D%2298.7%22%3E358x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    //                 alt=""
    //                 width="30"
    //                 height="30"
    //                 className="d-inline-block align-top"
    //               />
    //             </a>
    //           </Container>
    //         </Container>
    //       </ModalFooter>
      
    //   </div>
    // </div>
  );
};
