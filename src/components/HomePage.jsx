import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../images/pexels1.jpg';
import Image2 from '../images/pexels2.jpg';
import Image3 from '../images/pexels3.jpg';

const NavBar = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white shadow">
      <div className="flex items-center h-16 bg-white px-4 border-b">
        <div className="flex items-center">
          <img 
            src="https://www.communitylab.com.mx/Logo.png" 
            alt="Community LAB Logo" 
            className="mr-2 h-10" 
          />
          <span className="text-2xl">Nombre de la Empresa</span>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <nav className="flex space-x-4">
            <NavLink to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Inicio</NavLink>
            <NavLink to="/SolutionsPage" className="text-gray-700 hover:text-blue-500 transition duration-300">Busco Soluciones</NavLink>
            <NavLink to="/ContributePage" className="text-gray-700 hover:text-blue-500 transition duration-300">Brindo Soluciones</NavLink>
           
          </nav>

          
        </div>
        </div>

<div className="flex-grow p-4">
  <Slider {...sliderSettings} className="h-96 w-full">
    <div>
      <img src={Image} alt="Imagen 1" />
    </div>
    <div>
      <img src={Image2} alt="Imagen 2" />
    </div>
    <div>
      <img src={Image3} alt="Imagen 3" />
    </div>
    {/* Puedes agregar más elementos si es necesario */}
  </Slider>
</div>
</div>
);
};

export default NavBar;