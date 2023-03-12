
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';
import CodeChallenge from './Components/CodeChallenge';
import Profile from './Components/Profile';
import ProductPage from './Components/ProductPage';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute Component={Homepage} />} />
        <Route path="/product" element={<ProtectedRoute Component={ProductPage} />} />
        <Route path="/cart" element={<ProtectedRoute Component={Cart} />} />
        <Route path="/profile" element={<ProtectedRoute Component={Profile} />} />
        <Route path='/codechallenge' element={<CodeChallenge />} />
        <Route path='/cartt' element={<Cart />} />



        {/* <Route exact element={<ProtectedRoute />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />


        </Route> */}

      </Routes>


      {/* <Routes>
        <Route path="/login" component={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <ProtectedRoute path="/" component={<Homepage />} />
        <ProtectedRoute path="/product" component={<ProductPage />} />
        <ProtectedRoute path="/cart" component={<Cart />} />
        <ProtectedRoute path="/profile" component={<Profile />} />


      </Routes> */}
    </div>
  );
}

export default App;
