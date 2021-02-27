import React from 'react';
import Routes from './Routes/Routes';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;