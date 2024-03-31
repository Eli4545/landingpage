import Navbar from './Components/Navbar';
import Myfigure from './Components/Myfigure';
import Section from './Components/Section';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <main className='flex justify-between'>
      <Section/>
      <Myfigure/>
    </main>
    </>
  );
}

export default App;
