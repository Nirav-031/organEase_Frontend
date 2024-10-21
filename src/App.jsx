import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import SearchOrgan from './components/SearchOrgan';
import RegisterDonor from './components/RegisterDonor';
import RegisterRecipient from './components/RegisterRecipient';
import ViewDonor from './components/ViewDonor';
import HospitalProfile from './components/HospitalProfile';
import Reports from './components/Reports';
import Notifications from './components/Notifications';
function App()
{
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='app' element={<Dashboard/>}>
          <Route path='home' element={<Home />}></Route>
          <Route path='searchOrgan' element={<SearchOrgan />}></Route>
          <Route path='registerDonor' element={<RegisterDonor />}></Route>
          <Route path='registerrecipient' element={<RegisterRecipient />}></Route>
          <Route path='viewDonor' element={<ViewDonor />}></Route>
          <Route path='report' element={<Reports />}></Route>
          <Route path='notification' element={<Notifications />}></Route>
          <Route path='HospitalProfile' element={<HospitalProfile/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
  </>
}

export default App;