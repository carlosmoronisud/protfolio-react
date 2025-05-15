import Header from './components/Header/Header'; 
import About from './Sections/About/Index';


import './App.css';
import './index.css';
import Footer from './components/Footer/index';
import SkillsAccordion from './Sections/Projects/Accordion';

function App() {
  
  return (
    <>
      <Header />      
      <About />      
      <SkillsAccordion/>
       <Footer />
    </>
  );
}

export default App;
