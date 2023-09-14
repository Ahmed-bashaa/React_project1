import React from "react";
import Img1 from "../src/poert1.png";
import Img2 from "../src/port2.png";
import Img3 from "../src/port3.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Aport() {
  return (
    <>
      <div>
        <div className=" d-flex flex-column text-center pt-5">
          <h2 className="Font_size2">PORTFOLIO COMPONENT</h2>
          <div className="d-flex text-center justify-content-center align-items-center mb-3">
            <div _ngcontent-qeg-c6="" className="line Contact me-3"></div>
            <i _ngcontent-qeg-c6="" className=" Star2 fa-solid fa-star"></i>
            <div _ngcontent-qeg-c6="" className="line Contact ms-3"></div>
          </div>
        </div>
        {/*  */}

        <div className="container mb-5 ">
          <div className="row g-5">
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image "
                src={Img1}
                alt=""
                srcset=""
              />

              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog ">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img1}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image"
                src={Img2}
                alt=""
                srcset=""
              />
              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image"
                src={Img3}
                alt=""
                srcset=""
              />
              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img3}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image"
                src={Img1}
                alt=""
                srcset=""
              />
              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img1}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image"
                src={Img2}
                alt=""
                srcset=""
              />
              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal5"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-4 IMAGS Containe">
              <img
                className="w-100 img-fluid image"
                src={Img3}
                alt=""
                srcset=""
              />
              <div
                className="overlay "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                <i className="Icons text-white fa-solid fa-plus fa-6x"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal6"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <img
                      className="w-100 img-fluid image "
                      src={Img3}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
