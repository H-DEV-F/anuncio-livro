import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu"; // ajuste o caminho conforme necessário

const Layout = () => (
    <>
        <NavMenu />
        <main
            className="pt-20"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/background-image.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Outlet />
        </main>
    </>
);

export default Layout;
