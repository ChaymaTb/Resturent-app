import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Login from './components/Login';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="description/:id" element={<Description/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logIn" element={<Login/>} />
        <Route path='/bookTable' element={<BookTable />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
