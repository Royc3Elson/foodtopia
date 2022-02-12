import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Login, Register } from './components'
import { Book, Menu} from './pages'

// import PrivateRoute from "./utils/PrivateRoute"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="book" element={<Book />} />
            <Route path="menu" element={<Menu />} />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;