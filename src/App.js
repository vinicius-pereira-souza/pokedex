import { HashRouter  as Router, Routes, Route} from 'react-router-dom'
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Home from './pages/Home';
import PokeDados from './pages/PokeDados';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <Router basename='/'>
      <Logo/>
      <Form/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pokemon/:id" element={<PokeDados/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
