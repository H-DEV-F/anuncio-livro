// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormularioDesafio from "./components/ChallangePage";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage"; // ✅ Importar a landing

const App = () => (
    <Router>
        <Routes>
            {/* LandingPage fora do layout principal */}
            <Route path="/" element={<LandingPage />} />

            {/* Demais rotas agrupadas sob o layout padrão */}
            <Route path="/app" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="desafio" element={<FormularioDesafio />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    </Router>
);

export default App;
