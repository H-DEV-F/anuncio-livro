import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

// Data de lançamento
const targetDate = new Date("2025-06-15T00:00:00");

const HomePage = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        const totalSeconds = Math.max(0, Math.floor(diff / 1000));
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const seconds = totalSeconds % 60;
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 pt-24 pb-12 space-y-10 text-white">
            <p className="text-center cursor-pointer font-custom-playerfair mb-12">
                <span className="text-[22px] sm:text-[25px] md:text-[35px] lg:text-[55px]">PONTES</span>
                <span className="text-[17px] sm:text-[20px] md:text-[25px] lg:text-[35px] sm:ml-2 ml-1.5 md:ml-2 lg:ml-4">PARA A NOVA</span>
                <span className="text-[22px] sm:text-[25px] md:text-[35px] lg:text-[55px] sm:ml-2 ml-1.5 md:ml-2 lg:ml-4">REALIDADE</span>
            </p>

            <div className="text-center" style={{ marginBottom: "5px" }}>
                <p className="text-[20px] md:text-[25px] lg:text-[30px] mb-2">Contagem para o Desafio:</p>
                <div className="flex gap-4 font-mono justify-center mt-5">
                    <span className="text-[20px] md:text-[30px] lg:text-[35px]">{String(timeLeft.days).padStart(2, "0")}d</span>
                    <span className="text-[20px] md:text-[30px] lg:text-[35px]">{String(timeLeft.hours).padStart(2, "0")}h</span>
                    <span className="text-[20px] md:text-[30px]1 lg:text-[35px]">{String(timeLeft.minutes).padStart(2, "0")}m</span>
                    <span className="text-[20px] md:text-[30px] lg:text-[35px]">{String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
            </div>
            <hr></hr>

            <div style={{ marginBottom: '75px' }}>
                <motion.h1
                    className="text-[35px] sm:text-5xl md:text-5xl lg:text-6xl text-center text-white/90 max-w-[70%] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] mx-auto cursor-pointer font-custom-playerfair"
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, opacity: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    <NavLink to="/app/desafio">O MAIOR DESAFIO DE TODOS OS TEMPOS</NavLink>
                </motion.h1>

            </div>
        </div>
    );
};

export default HomePage;