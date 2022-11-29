import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useUserContext from './hooks/useUserContext';
import Navigation from './components/navigation/NavigationContainer';
import HotelDetails from './components/feed/HotelDetails';
import FavouritesContainer from './components/FavouritesContainer';
import CreateHotelForm from './components/CreateHotelForm';
import EditContainer from './components/feed/EditContainer';

function App() {
  const userContext = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={userContext?.user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/favourites" element={<FavouritesContainer />} />
          <Route path="/h/:hotelId" element={<HotelDetails />} />
          <Route path="/create" element={<CreateHotelForm />} />
          <Route path="/edit/:hotelId" element={<EditContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
