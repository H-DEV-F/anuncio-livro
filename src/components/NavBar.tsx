import { NavLink } from "react-router-dom";

const NavBar = () => (
    <nav className="w-full backdrop-blur-sm bg-white/10 py-4 px-6 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="text-xl font-bold text-white">A Ponte</span>
            <div className="space-x-4">
                <NavLink  to="/" className="text-white hover:text-gray-200">Início</NavLink >
                <NavLink  to="/cadastro" className="text-white hover:text-gray-200">Cadastro</NavLink >
            </div>
        </div>
    </nav>
);

export default NavBar;