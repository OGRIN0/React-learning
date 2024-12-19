import { assets } from '../assests/assets_frontend/assets';

const Header = () => {
  return (
    <div className='relative flex flex-col md:flex-row flex-wrap bg-primary rounded-lg md:px-10 lg:px-20'>
      {/* -------Left Side------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto md:py-[10vw]'>
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
          Book Appointment<br />With Trusted Doctors
        </p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="Group" />
          <p>
            Browse through our extensive list of doctors,<br /> schedule an appointment.
          </p>
        </div>
        <a 
          href="#speciality" 
          className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          style={{ whiteSpace: 'nowrap' }}
        >
          Book appointment
          <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* -------Right Side------ */}
      <div className="md:w-1/2 relative">
        <img
          className='w-full md:w-[75%] h-auto rounded-lg md:absolute bottom-0 right-0'
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
