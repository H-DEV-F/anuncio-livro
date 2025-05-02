import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // ajuste o caminho conforme necessário

const Layout = () => (
    <>
        <NavBar />
        <main className="pt-20" 
            style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/images/imagem3.jpg')`
                    }}>
            <Outlet />
        </main>
    </>
);

export default Layout;
