import React from "react";

const MainContent = () => {
  return (
    <>
      <main>
        <div className="left">
          <h1>
            YOUR FEET <br /> DESERVE <br /> THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
            HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE
            HERE TO HELP YOU WITH OUR <br /> SHOES.
          </p>

          <div className="buttons">
            <button id="shop">Shop Now</button>
            <button id="category">Category</button>
          </div>

          <h5>Also Available on</h5>

          <img src="/images/flipkart.png" alt="" />
          <img src="/images/amazon.png" alt="" />
        </div>

        <div className="right">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
};

export default MainContent;
