import React from "react";
import "./Home.css";
import book from "../images/book.png";
import watch from "../images/watch.png";
import warn from "../images/warn.png";
import study from "../images/study.png";
import ads from "../images/ads.png";
import razorpay from "../images/Frame 12537.png";

function Home() {
  return (
    <div className="container">
      <div>
        <h1>
          Access curated courses worth ₹ 18,500 at just{" "}
          <span className="blue-text">₹ 99</span> per year!
        </h1>
        <ul className="promotion">
          <li>
            <div className="options">
              <div className="oicons">
                <img src={book} />
              </div>
              <div className="itext">
                <span className="blue-text">100+</span> Job relevant courses
              </div>
            </div>
          </li>
          <li>
            <div className="options">
              <div className="oicons">
                <img src={watch} />
              </div>
              <div className="itext">
                <span className="blue-text">20,000+</span> Hours of content
              </div>
            </div>
          </li>
          <li>
            <div className="options">
              <div className="oicons">
                <img src={study} />
              </div>
              <div className="itext">
                <span className="blue-text">Exclusive</span> webinar access
              </div>
            </div>
          </li>
          <li>
            <div className="options">
              <div className="oicons">
                <img src={study} />
              </div>
              <div className="itext">
                Scholarship worth <span className="blue-text">₹94,500</span>
              </div>
            </div>
          </li>
          <li>
            <div className="options">
              <div className="oicons">
                <img src={ads} />
              </div>
              <div className="itext">
                <span className="blue-text">Ad Free</span> learning experience
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="card">
          <div className="card-title">
            <div>
              <div className="numbers">1</div>
              <div className="top-title-color">Sign Up</div>
            </div>
            <div>
              <div className="numbers">2</div>
              <div className="top-title-color">Subscribe</div>
            </div>
          </div>
          <div className="card-content">
            <b>Select your subscription plan</b>
            <div className="card-content-cols">
              <div className="cols col-fade">
                <div>
                  <button className="radio-button" inputMode="radio"></button>
                  <div className="col-text">12 Months Subscription</div>
                </div>
                <div>
                  Total <b>₹99</b> <div className="small">₹8 /Mo</div>
                </div>
              </div>
              <div className="cols col-dark">
                <div>
                  <button className="radio-button" inputMode="radio"></button>
                  <div className="col-text">
                    <b>12 Months Subscription</b>
                  </div>
                </div>
                <div>
                  Total <b>₹179</b>
                  <div className="small">₹15 /Mo</div>
                </div>
              </div>
              <div className="cols">
                <div>
                  <button className="radio-button" inputMode="radio"></button>
                  <div className="col-text">
                    <b>6 Months Subscription</b>
                  </div>
                </div>
                <div>
                  Total <b>₹149</b> <div className="small">₹25 /Mo</div>
                </div>
              </div>
              <div className="cols">
                <div>
                  <button className="radio-button" inputMode="radio"></button>
                  <div className="col-text">
                    <b>3 Months Subscription</b>
                  </div>
                </div>
                <div>
                  Total <b>₹99</b> <div className="small">₹33 /Mo</div>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="card-down">
              <div>Subscription fee </div>
              <div>₹18,500 </div>
            </div>
            <div className="card-footer">
              <div className="cols new-cols col-darker">
                <div>
                  Limited time offer
                  <br />
                  offer valid till 25th March 2023
                  <div className="warn-img">
                    <img src={warn} />
                  </div>
                </div>
                <div>-₹18,500</div>
              </div>
              <div className="footer">
                <div>Total (Incl. of 18% GST)</div>
                <div className="footer-p">₹149</div>
              </div>
              <div className="footer-buttons">
                <div className="fot-col"></div>
                <div className="fot-col"></div>
              </div>
              <div className="d">
                <img src={razorpay} />
              </div>
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              paddingBlock: "2rem",
            }}
          >
            <div style={{ flex: "1", textAlign: "center" }}>signup</div>
            <div style={{ flex: "1", textAlign: "center" }}>signIn</div>
          </div>
          <div style={{ textAlign: "center", color: "black" }}>
            Select Your Subscription Plan
          </div>
          <div style={{ color: "black" }}>
            <div
              style={{
                marginInline: "1rem",
                marginBlockStart: "2rem",
                border: "1px solid grey",
                padding: "0.5rem",
                borderRadius: "0.2rem",
              }}
            >
              <div style={{ fontSize: "10px", marginLeft: "3rem" }}>
                offerexp
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: "1", textAlign: "center" }}>
                  <input type="radio" />
                </div>
                <div style={{ flex: "4" }}>mid</div>
                <div style={{ flex: "1" }}>right</div>
              </div>
            </div>
            <div
              style={{
                marginInline: "1rem",
                marginBlockStart: "2rem",
                border: "1px solid grey",
                padding: "0.5rem",
                borderRadius: "0.2rem",
              }}
            >
              <div style={{ fontSize: "10px", marginLeft: "3rem" }}>
                offerexp
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: "1", textAlign: "center" }}>
                  <input type="radio" />
                </div>
                <div style={{ flex: "4" }}>mid</div>
                <div style={{ flex: "1" }}>right</div>
              </div>
            </div>
            <div
              style={{
                marginInline: "1rem",
                marginBlockStart: "2rem",
                border: "1px solid grey",
                padding: "0.5rem",
                borderRadius: "0.2rem",
              }}
            >
              <div style={{ fontSize: "10px", marginLeft: "3rem" }}>
                offerexp
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: "1", textAlign: "center" }}>
                  <input type="radio" />
                </div>
                <div style={{ flex: "4" }}>mid</div>
                <div style={{ flex: "1" }}>right</div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
