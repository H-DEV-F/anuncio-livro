import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // ajuste o caminho conforme necessário

const Layout = () => (
    <>
        <NavBar />
        <main className="pt-20" 
            style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/background-image.png')`
                    }}>
            <Outlet />
        </main>
    </>
);

export default Layout;
