// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormularioCadastro from "./components/Form";
import Layout from "./Layout";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="cadastro" element={<FormularioCadastro />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    </Router>
);

export default App;
