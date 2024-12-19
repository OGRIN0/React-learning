import { useNavigate } from "react-router-dom";
import { assets } from "../assests/assets_frontend/assets";

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10  mt-10"> {/* Added mt-10 for margin-top */}
      {/*-----left side----*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p className="text-xl font-semibold text-white">Book Appointment</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            With 100+ Trusted Doctors
          </p>
        </div>
        <button onClick={() => { navigate('/login'); scrollTo(0, 0);}}
        className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 
        hover:scale-105 hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 ease-in-out">Create account</button>
      </div>
      {/*----right side----*/}
      <div className="flex-1 flex justify-end items-end">
        <img
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px] absolute bottom-0  max-w-md"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
