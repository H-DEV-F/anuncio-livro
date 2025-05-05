import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LandingPage = () => {
    const urlImage = "/images/background-image.jpg";
    const [clicked, setClicked] = useState(false)
    const [showFirstText, setShowFirstText] = useState(false)
    const [showSecondText, setShowSecondText] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setClicked(true)

        setTimeout(() => {
            setShowFirstText(true)
        }, 1000)

        setTimeout(() => {
            setShowFirstText(false)
            setShowSecondText(true)
        }, 4000)

        setTimeout(() => {
            setShowSecondText(false)
            navigate('/app')
        }, 8000)
    }

    return (
        <div
            className="h-screen flex items-center justify-center relative bg-gray-900"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${urlImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <AnimatePresence>
                {!clicked && (
                    <motion.button
                        initial={{ y: -100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1.2 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        onClick={handleClick}
                        className="px-1 py-4 text-white text-[40px] md:text-[60px] lg:text-[80px] font-medium tracking-widest border border-none hover:text-white-600 transition font-custom-playerfair"
                    >
                        INICIAR
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Animação do primeiro texto */}
            <AnimatePresence>
                {showFirstText && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute top-1/4 w-[200px] md:w-[300px] lg:w-[400px] text-center"
                    >
                        <h1 className="text-white text-[60px] md:text-[40px] lg:text-[60px] font-bold font-custom-playerfair">
                            O MAIOR DESAFIO DE TODOS OS TEMPOS
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animação do segundo texto */}
            <AnimatePresence>
                {showSecondText && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute top-1/4 w-[200px] md:w-[300px] lg:w-[400px] text-center"
                    >
                        <h2 className="text-white text-[60px] md:text-[40px] lg:text-[60px] font-semibold font-custom-playerfair">
                            UM PRÊMIO DE 5.000,00 REAIS
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botões fixos da base */}
            <motion.button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute bottom-6 left-6 px-4 py-2 text-white text-[20px] font-medium tracking-widest border border-none transition hover:text-white-600 font-custom-playerfair"
            >
                Loja
            </motion.button>

            <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute bottom-6 right-6 px-4 py-2 text-white text-[20px] font-medium tracking-widest border border-none transition hover:text-white-600 font-custom-playerfair"
            >
                <NavLink to="https://www.amazon.com.br/">
                    Canais
                </NavLink>
            </motion.button>
        </div>
    )
}

export default LandingPage;