import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';
import MainOutlet from './Main/MainOutlet';
import HomePage from './Main/HomePage';
import LoginPage from './Login/LoginPage';
import Signup from './Login/Signup';
import { getQuery } from './API/GetQuery';
import ScreenShotPage from './Main/ScreenShotPage';
import AllUsers from './Main/AllUsers';


function App() {

  // useEffect(()=> {
  //   apiData()
  // },[])

  const apiData = async () => {
    console.log("api callling ....");
    try{
    const data = await getQuery(`http://localhost:8888/saveDailyActivity`);
    console.log(data);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/desktime" element={<MainOutlet />} >
            <Route path="" element={<MainPage />} />
            <Route path="screenshot" element={<ScreenShotPage />} />
            <Route path="users" element={<AllUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
