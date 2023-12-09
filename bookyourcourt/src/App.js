
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Page/Home'
import Login from './Page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCourt from './Page/AddCourt';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/addNewcourt" element={<AddCourt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

