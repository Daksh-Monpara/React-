import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import View from './Pages/View';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/add' element={<Add />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
