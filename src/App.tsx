import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useUserContext from './hooks/useUserContext';
import Navigation from './components/navigation/NavigationContainer';
import HotelDetails from './components/feed/HotelDetails';
import FavouritesContainer from './components/FavouritesContainer';
import CreateHotelForm from './components/CreateHotelForm';

function App() {
  const userContext = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={userContext?.user ? <Home /> : <Signup />} />
          <Route
            path="login"
            element={userContext?.user ? <Navigate to="/" /> : <Login />}
          />

          <Route path="/favourites" element={<FavouritesContainer />} />
          <Route path="/h/:hotelId" element={<HotelDetails />} />
          <Route path="/create" element={<CreateHotelForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
