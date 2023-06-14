import React from "react";
import oilImg from "../assets/images/oil.jpg";
import dalImg from "../assets/images/dal.jpg";
import riceImg from "../assets/images/rice.jpeg";
import snacksImg from "../assets/images/snacks.jpg";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
const Index = () => {
  return (
    <div className="">
      <div class="container">
        <h1>Welcome to Aananda Mart</h1>
        <p>We provide quality products and services since August 19, 2019</p>

        <h2>Our Products</h2>
        <ul class="product-list">
          <li>
            <img src={snacksImg} alt="Snacks" />
            <h3>Snacks</h3>
            <p>Delicious snacks for all occasions</p>
          </li>

          <li>
            <img src={riceImg} alt="Rice" />
            <h3>Rice</h3>
            <p>High-quality rice varieties</p>
          </li>
          <li>
            <img src={dalImg} alt="Dal" />
            <h3>Dal & Pulses</h3>
            <p>Fresh and nutritious lentils</p>
          </li>
          <li>
            <img src={oilImg} alt="Cooking Oil" />
            <h3>Cooking Oil</h3>
            <p>Pure and healthy cooking oil</p>
          </li>
        </ul>
      </div>

      <footer className="text-center text-lg-start bg-white text-muted footer ">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Aananda Mart
                </h6>
                <p></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="white-color">
                  <FaLocationArrow />
                  Chandragiri-&, Kathmandu, Nepal
                </p>
                <p className="white-color">
                  <FaEnvelope />
                  info@aanandart.com
                </p>
                <p className="white-color">
                  <FaPhone />+ 977 9803031010
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="/">
            Aananda Mart
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
