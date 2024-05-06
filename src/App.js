import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import MainPage from "./Main/MainPage"
import MainOutlet from "./Main/MainOutlet"
import HomePage from "./Main/HomePage"
import LoginPage from "./Login/LoginPage"
import Signup from "./Login/Signup"
import ScreenShotPage from "./Main/ScreenShotPage"
import AllUsers from "./Main/AllUsers"
import SingleUserPage from "./Main/SingleUserPage"
import ReportsPage from "./Main/ReportsPage"
import AllReportsUser from "./Main/AllReportsUser"
import SingleUserMonthlyReport from "./Main/SingleUserMonthlyReport"
import { useSelector } from "react-redux"

function App() {
  const authStatus = useSelector((state) => state.auth.isAuth)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/workplus"
            element={authStatus ? <MainOutlet /> : <Navigate to="/login" />}
          >
            <Route path="" element={<MainPage />} />
            <Route
              path="screenshot"
              element={
                authStatus ? <AllUsers /> : <Navigate to="/login" />
              }
            />
             <Route
              path="screenshot/:useremail"
              element={
                authStatus ? <ScreenShotPage /> : <Navigate to="/login" />
              }
            />
            <Route path="reports" element={<AllReportsUser />}>
              <Route path="" element={<ReportsPage />} />
              <Route path=":useremail" element={<SingleUserMonthlyReport />} />
            </Route>

            <Route path="users" element={<AllUsers />} />
            <Route path="users/:useremail" element={<SingleUserPage />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
