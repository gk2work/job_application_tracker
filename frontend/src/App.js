import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Sidebar from './components/Layout/Sidebar/Sidebar';
//import Applications from './components/Applications/Application';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="app-layout">
      <Sidebar />
      <div className="content-section">
      </div>
    </div>
  </div>
  );
}

export default App;
