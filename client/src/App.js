import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreatePet from './components/CreatePet';
import Display from './components/Display';
import Edit from './components/Edit';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <div class="img-area"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display/>}/>  
          <Route path="/pets/new" element={<CreatePet/>}/>  
          <Route path="/pets/edit/:id" element={<Edit/>}/>  
          <Route path="/pets/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
