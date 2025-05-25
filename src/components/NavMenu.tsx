import { NavLink } from "react-router-dom";

const NavMenu = () => (
    <nav className="w-full backdrop-blur-sm bg-white/10 py-4 px-6 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span>
                <span className="text-[12px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-bold text-white">PONTES </span>
                <span className="text-[8px] sm:text-[15px] md:text-[20px] lg:text-[25px] text-white">PARA NOVA </span>
                <span className="text-[12px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-bold text-white">REALIDADE</span>
            </span>
            <div className="space-x-4">
                <NavLink  to="/app">
                <button type="submit" className="rounded-md border border-grey-600 px-4 py-2 text-sm font-semibold text-white bg-transparent hover:bg-white hover:text-black/80 transition-colors">
                                Inicio
                </button></NavLink >
            </div>
        </div>
    </nav>
);

export default NavMenu;