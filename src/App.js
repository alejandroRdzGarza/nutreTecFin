import './App.css';
import Hero from './components/Hero/Hero';
import HeroUser from './components/HeroUser/HeroUser';
import HeroRegister from './components/HeroRegister/HeroRegister';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Survey from './components/Survey/Survey';
import Diet from './components/Diet/Diet';
import Rutina from './components/Rutina/Rutina';
import Header from './components/Header/Header';
import HeroLogin from './components/HeroLogin/HeroLogin';
import Profile from './components/Profile/Profile';
import Videogame from './components/Videogame/Videogame';
import Prueba from './components/Prueba/Prueba';
import PruebaRegistro from './components/PruebaRegistro/Pruebaregistro';
import PerfilMedico from './components/PerfilMedico/PerfilMedico';
import HeroMedico from './components/HeroMedico/HeroMedico';
import HeaderMedico from './components/HeaderMedico/HeaderMedico';
import ProgramsMedic from './components/ProgramsMedic/ProgramsMedic';
import Pacientes from './components/Pacientes/Pacientes';
import DynamicTable from './components/DynamicTable/DynamicTable';
import ModificarDatos from './components/ModificarDatos/ModificarDatos';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={[
            <Hero/>,
            <Testimonials/>,
            <Join/>,
            <Footer/>
          ]}/>
          <Route path="/index_user" element={[
            <HeroUser/>,
            <Programs/>,
            <Footer/>
          ]}/>
          <Route path="/index_medico" element={[
            <HeroMedico/>,
            <ProgramsMedic/>,
            <Footer/>
          ]}/>
          <Route path="/register" element={[
            <HeroRegister/>,
            <Footer/>
          ]}/>
          <Route path="/login" element={[
            <HeroLogin/>,
            <div/>,
            <Footer/>
          ]}/>
          <Route path="/survey" element={[
            <Header/>,
            <Survey/>,
            <Footer/>
          ]}/>
          <Route path="/dieta" element={[
            <Header/>,
            <Diet/>,
            <Footer/>
          ]}/>
          <Route path="/rutina" element={[
            <Header/>,
            <Rutina/>,
            <Footer/>
          ]}/>
          <Route path="/profile" element={[
            <Header/>,
            <Profile/>,
            <Footer/>
          ]}/>
          <Route path="/videojuego" element={[
            <Header/>,
            <Videogame/>,
            <Footer/>
          ]}/>
          <Route path="/prueba" element={[
            <PruebaRegistro/>,
          ]}/>
          <Route path="/prueba2" element={[
            <Prueba/>,
          ]}/>
          <Route path="/profile_arnold" element={[
            <HeaderMedico/>,
            <PerfilMedico/>,
            <Footer/>
          ]}/>
          <Route path="/pacientes" element={[
            <HeaderMedico/>,
            <Pacientes/>,
            <Footer/>
          ]}/>
          <Route path="/cuestionarios" element={[
            <HeaderMedico/>,
            <DynamicTable/>,
            <Footer/>
          ]}/>
          <Route path="/modificarDatos" element={[
            <HeaderMedico/>,
            <ModificarDatos/>,
            <Footer/>
          ]}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;