import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="col">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="footer_logo w-20 h-20 mb-4" />
                    <h1 className="text-xl font-bold mb-9">Stoop Sale</h1>
                    <p className="footer_about mt-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt, 
                        doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore. 
                        Fugiat, illum!
                    </p>
                </div>
                <div className="col">
                    <h3 className="text-lg font-semibold">Office <div className="bottom_line"><span></span></div></h3>
                    <p>2841 Romines Mill Road</p>
                    <p>Plano</p>
                    <p>Texas, ZIP 75074, United States</p>
                    <p className="footer_email">xxxxxxxxxxx@gamil.com</p>
                    <h4 className="mt-4">+1 - 214595xxxx</h4>
                </div>
                <div className="col">
                    <h3 className="text-lg font-semibold">Links <div className="bottom_line"><span></span></div></h3>
                    <ul className="mt-4">
                        <li><Link to={"/"} className="hover:underline">HOME</Link></li>
                        <li><Link to={"/"} className="hover:underline">ABOUT</Link></li>
                        <li><Link to={"/"} className="hover:underline">SERVICE</Link></li>
                        <li><Link to={"/"} className="hover:underline">CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="text-lg font-semibold">Newsletter <div className="bottom_line"><span></span></div></h3>
                    <form className="mt-4 flex items-center">
                        <ion-icon className="icon" name="mail"></ion-icon>
                        <input type="email" placeholder="Enter your email" required className="p-2 rounded-l-md" />
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md"><ion-icon className="icon_right" name="arrow-round-forward"></ion-icon></button>
                    </form>
                    <div className="social_icons flex space-x-4 mt-4">
                        <ion-icon className="social_icon text-2xl" name="logo-facebook"></ion-icon>
                        <ion-icon className="social_icon text-2xl" name="logo-whatsapp"></ion-icon>
                        <ion-icon className="social_icon text-2xl" name="logo-twitter"></ion-icon>
                        <ion-icon className="social_icon text-2xl" name="logo-instagram"></ion-icon>
                    </div>
                </div>
            </div>
            <hr className="my-8 border-gray-600" />
            <p className="text-center text-gray-400">Stoop Sale Ⓒ 2024 - All Rights Reserved</p>
        </footer>
    );
};

export default Footer;

