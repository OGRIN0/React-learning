import { useState } from 'react';
import { assets } from '../assests/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-green relative">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="Doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="About">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="Contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 relative">
        {token ? (
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="" />
              <img className="w-4.5" src={assets.dropdown_icon} alt="" />
            </div>
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate('my-profile')}className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className="hover:text-black cursor-pointer">My Appointment</p>
                
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => {
                    setToken(false);
                    navigate('/');
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white rounded-full font-light hidden md:block px-3 py-1.5 text-lg"
          >
            Create an Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
