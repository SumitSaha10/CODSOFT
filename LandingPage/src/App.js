import './App.css';
import Features from './components/Features';
import Growth from './components/Growth';
import Learn from './components/Learn';
import LearnTech from './components/LearnTech';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Features />
      <Quote />
      <Learn />
      <LearnTech />
      <Growth />
    </div>
  );
}

export default App;
