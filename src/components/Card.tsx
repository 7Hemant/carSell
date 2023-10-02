import image from "../assets/car.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGasPump } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { BsSpeedometer } from "react-icons/bs";
const Card = () => {
  return (
    <div className="p-4 shadow bg-transparent rounded-[20px]">
      <div className="rounded ">
        <img
          src={image}
          alt="car"
          className="rounded-[20px] max-h-[200px] w-full"
        />
      </div>
      <div>
        <div className="flex w-full justify-between">
          <h1>Car Name</h1>
          <p>Year</p>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <div className="text-blue-500 flex items-center">
            <GoPeople /> <span className="text-black ml-2">4 people</span>
          </div>
          <div className="text-blue-500 flex items-center">
            {" "}
            <BiGasPump />
            <span className="text-black ml-2"> Hybrid</span>
          </div>
          <div className="text-blue-500 flex items-center">
            <BsSpeedometer />{" "}
            <span className="text-black ml-2">6.1km/1 letre</span>
          </div>
          <div className="text-blue-500 flex items-center">
            {" "}
            <GiSteeringWheel />{" "}
            <span className="text-black ml-2">Automatic</span>
          </div>
        </div>
        <hr />
        <div className="flex w-full justify-between items-center mt-2">
          <h1>Price </h1>
          <div>
            <button className="bg-blue-300 p-2 rounded-md mr-3">
              <AiOutlineHeart />
            </button>
            <button className="bg-blue-500 rounded-md  px-2 py-1 text-white">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
