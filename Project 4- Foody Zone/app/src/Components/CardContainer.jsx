import React from "react";
import { BASE_URL } from "../App";

const CardContainer = ({ data }) => {
  return (
    <div
      id="cardContainer"
      className="bg-[url('images/bg.png')] bg-cover min-h-[calc(100vh-170px)]"
    >
      <div
        id="FoodCards"
        className="flex flex-wrap gap-[20px] justify-center items-center pt-[80px]"
      >
        {data?.map(({ name, image, text, price }) => (
          <div className="foodCard w-[340px] h-[167px] mb-[32px] " key={name}>
            <img src={BASE_URL + image} alt="image" />

            <div
              id="foodinfo"
              className=" text-white flex flex-col justify-around"
            >
              <h1 className="text-[12px] font-semibold">{name}</h1>
              <p className="text-[12px]">{text}</p>
              <button className="bg-red-600 text-[14px] self-end">
                ${price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
