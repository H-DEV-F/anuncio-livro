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
                        initial={{ y: -100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1.2 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        onClick={handleClick}
                        className="px-1 py-4 text-white text-[80px] font-medium tracking-widest rounded-xl border border-none hover:text-white-600 transition font-custom-playerfair"
                    >
                        INICIAR
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LandingPage;