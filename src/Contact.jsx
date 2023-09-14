import React from "react";

export default function Contact() {
  return (
    <div>
      <div className=" d-flex flex-column text-center pt-5">
        <h2 className="Font_size2">CONATCT SECTION</h2>
        <div className="d-flex text-center justify-content-center align-items-center mb-3">
          <div _ngcontent-qeg-c6="" className="line Contact me-3"></div>
          <i _ngcontent-qeg-c6="" className=" Star2 fa-solid fa-star"></i>
          <div _ngcontent-qeg-c6="" className="line Contact ms-3"></div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="container-fluid">
          <div class="row g-3 ">
            <form class="pt-5 d-flex align-items-center flex-column">
              <div class="col-lg-6 my-4">
                <input
                  type="text"
                  placeholder="userName "
                  className="form-control"
                />
              </div>

              <div class="col-lg-6 my-4">
                <input
                  type="text"
                  placeholder="userAge "
                  className="form-control"
                />
              </div>

              <div className="col-lg-6 my-4">
                <input
                  type="email"
                  placeholder="userEmail "
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 my-4">
                <input
                  type="password"
                  placeholder=" userPassword "
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 my-4">
                <button type="submit" className="align-self-start  btn1 ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
