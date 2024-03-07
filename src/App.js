import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';
import MainOutlet from './Main/MainOutlet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/desktime" element={<MainOutlet />} >
            <Route path="" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
