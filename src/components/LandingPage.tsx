import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LandingPage = () => {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setClicked(true)
        setTimeout(() => {
            navigate('/app')
        }, 800)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900"
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/background-image.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <AnimatePresence>
                {!clicked && (
                    <motion.button
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        onClick={handleClick}
                        className="px-10 py-4 text-white text-xl font-bold rounded-xl border border-none underline hover:text-white-600 transition"
                    >
                        INICIAR
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LandingPage;