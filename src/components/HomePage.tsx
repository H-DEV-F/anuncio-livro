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
            <p className="text-5xl text-center cursor-pointer font-custom-playerfair" style={{ marginBottom: "50px" }}>
                <span className="text-5xl">PONTES </span>
                <span className="text-3xl">PARA A NOVA </span>
                <span className="text-5xl">REALIDADE</span>
            </p>

            <div className="text-center" style={{ marginBottom: "5px" }}>
                <p className="text-xl mb-2">Contagem do Desafio:</p>
                <div className="flex gap-4 text-3xl font-mono justify-center">
                    <span>{String(timeLeft.days).padStart(2, "0")}d</span>
                    <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
                    <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
                    <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
            </div>
            <hr></hr>

            <div style={{ marginBottom: '75px' }}>
                <motion.h1
                    className="text-5xl text-center text-white/90 max-w-[400px] cursor-pointer font-custom-playerfair"
                    initial={{ opacity: 1 }}
                    whileHover={{
                        scale: 1.2,
                        opacity: 0.6
                    }}
                    transition={{ duration: 1 }}
                >
                    <NavLink to="/app/desafio">O MAIOR DESAFIO DE TODOS OS TEMPOS</NavLink>
                </motion.h1>
            </div>
            {/* <div className="font-custom-playerfair">
                <motion.h1
                    className="text-5xl font-bold text-center cursor-pointer font-custom-playerfair"
                    initial={{ opacity: 1 }}
                    whileHover={{
                        scale: 1.0,
                        opacity: 1
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Sobre
                </motion.h1>
                <br></br>
                <p className="text-lg text-gray-500 leading-relaxed text-center max-w-4xl mx-auto px-4">
                    Este livro é resultado de uma longa jornada de aprendizados, experiências e reflexões acumuladas ao longo dos anos. Em suas páginas,
                    você encontrará conteúdos ricos e transformadores, com ensinamentos que visam fortalecer sua caminhada pessoal, espiritual e emocional.
                    Cada capítulo foi cuidadosamente elaborado para oferecer clareza, sabedoria e inspiração, convidando você a colocar em prática valores
                    que promovem o autoconhecimento e a mudança real.
                </p>
            </div> */}
        </div>
    );
};

export default HomePage;