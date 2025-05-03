import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Data de lançamento
const targetDate = new Date("2025-06-15T00:00:00");

const images = [
    "/images/image1.png"
];

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
            <motion.h1
                className="text-4xl font-bold text-center cursor-pointer"
                initial={{ opacity: 1 }}
                whileHover={{
                    scale: 1.01,
                    opacity: 0.9
                }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                A Ponte: O Caminho para o conhecimento
            </motion.h1>

            <div className="text-center">
                <p className="text-xl mb-2">Contagem do Desafio:</p>
                <div className="flex gap-4 text-3xl font-mono justify-center">
                    <span>{String(timeLeft.days).padStart(2, "0")}d</span>
                    <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
                    <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
                    <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(59,130,246,0.2)] border border-blue-300/10 scroll-mt-24 backdrop-blur-md"
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <motion.img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-[400px] object-cover cursor-pointer"
                            whileHover={{ scale: 1.05, opacity: 0.9 }}
                            transition={{ duration: 0.3 }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr></hr>

            <div>
                <motion.h1
                    className="text-5xl font-bold text-center cursor-pointer"
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
            </div>
        </div>
    );
};

export default HomePage;