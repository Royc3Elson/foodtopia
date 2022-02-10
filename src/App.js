import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login, Register } from './components'

// import PrivateRoute from "./utils/PrivateRoute"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;