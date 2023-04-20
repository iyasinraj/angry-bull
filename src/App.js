import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Topics from './components/Topics/Topics';
function App() {
  return (
    <div className='main'>
      <main className='mainsection'>
        <Navbar></Navbar>
        <Topics></Topics>
      </main>
      <Sidebar></Sidebar>

    </div>
  );
}

export default App;
