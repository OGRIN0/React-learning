import {assets} from '../assests/assets_frontend/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*-------Left Side-------*/}
      <div>
      <img className="mb-5 w-40 " src={assets.logo} alt=""/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae, sed impedit sint expedita ipsum vel voluptatibus ipsam. Minima, autem quasi? Optio similique debitis error. Mollitia possimus repellat quam voluptates?</p>
      </div>
              {/*-------Center Side------*/}

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy policy</li>
        </ul>
      </div>
              {/*-------Right Side-------*/}

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+918012325600</li>
            <li>alberteinstein2274@gmail.com</li>
        </ul>
      </div>
    </div>
    <div>
       {/*------Copyright Text------*/}
       <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Medico - All Right Reserved.</p>
       </div>
    </div>
    </div>
  )
}

export default Footer
