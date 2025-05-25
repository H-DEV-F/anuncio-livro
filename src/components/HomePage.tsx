import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 pt-10 pb-12 space-y-10 text-white">
            <p className="text-center cursor-pointer font-custom-playerfair mb-12">
                <span className="text-[22px] sm:text-[25px] md:text-[35px] lg:text-[55px]">PONTES</span>
                <span className="text-[17px] sm:text-[20px] md:text-[25px] lg:text-[35px] sm:ml-2 ml-1.5 md:ml-2 lg:ml-4">PARA NOVA</span>
                <span className="text-[22px] sm:text-[25px] md:text-[35px] lg:text-[55px] sm:ml-2 ml-1.5 md:ml-2 lg:ml-4">REALIDADE</span>
            </p>
            <hr></hr>

            <div style={{ marginBottom: '75px' }}>
                <motion.h1
                    className="text-[35px] sm:text-5xl md:text-5xl lg:text-6xl text-center text-white/90 max-w-[70%] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] mx-auto cursor-pointer font-custom-playerfair"
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.3, opacity: 0.9 }}
                    transition={{ duration: 0.5 }}
                >
                    <NavLink to="/app/desafio">O MAIOR DESAFIO DE TODOS OS TEMPOS</NavLink>
                </motion.h1>

            </div>
        </div>
    );
};

export default HomePage;