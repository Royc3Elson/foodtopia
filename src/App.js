import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Login, Register } from './components'

// import PrivateRoute from "./utils/PrivateRoute"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;