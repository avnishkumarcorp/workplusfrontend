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
import { useDispatch, useSelector } from "react-redux"

function App() {
  // const currentUserRole = useSelector(
  //   (prev) => prev?.auth.currentUser?.data?.roles
  // )
  // const adminRole = currentUserRole.includes("ADMIN")

  // {authStatus ? <MainPage /> : <Navigate to="/erp/login" />}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/desktime" element={<MainOutlet />}>
            <Route path="" element={<MainPage />} />
            <Route path="screenshot" element={<ScreenShotPage />} />
            <Route path="reports" element={<AllReportsUser />}>
              <Route path="" element={<ReportsPage />} />
              <Route path=":useremail" element={<SingleUserMonthlyReport />} />
            </Route>

            <Route path="users" element={<AllUsers />} />
            <Route path="users/:useremail" element={<SingleUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
