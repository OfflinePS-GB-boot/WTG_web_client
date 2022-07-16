import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import MainPage from './Pages/Main/MainPage';
// import EventsPage from './Pages/EventsPage/EventsPage';
// import AboutPage from './Pages/AboutUsPage/AboutUsPage';
// import LocationsPage from './Pages/LocationsPage/LocationsPage';
// import RoutesPage from './Pages/RoutesPage/RoutesPage';
// import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
// import Modal from './components/Modal/Modal';
import Footer from './components/Footer';
import './App.scss';
import { useState } from 'react';

function App() {

  // const [modalActive, setModalActive] = useState(true);

  return (
      <>
        <Header />
        {/* <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/locations' element={<LocationsPage />} />
        <Route path='/routes' element={<RoutesPage />} />
        <Route path='/aboutUs' element={<AboutPage />} />        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>  */}
      <Footer />
      
    
      </>
     
    
  
  );
}

export default App;
