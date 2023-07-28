import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import Sidebar from "./components/Sidebar";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from "./components/EditUser";
import EditStudent from "./components/EditStudent";
import UserContextComponent from './components/context/UserContextComponent'
import UserStudent from "./components/context/UserStudent";         

function App() {

  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
      {/* <Topbar/> */}
       <Routes>
          <Route path="/dashboard" element={<UserContextComponent>
                                              <UserStudent>
                                                <Dashboard/>
                                              </UserStudent>
                                            </UserContextComponent>}/>
          <Route path='/add-student' element={<UserStudent> <AddStudent/> </UserStudent>}/>
          <Route path='/edit-user/:id' element={<UserContextComponent>  <EditUser/> </UserContextComponent>}/>
          <Route path='/edit-student/:id' element={<UserStudent> <EditStudent/> </UserStudent>}/>
          <Route path='/add-teacher' element={<UserContextComponent>  <AddTeacher/> </UserContextComponent>}/>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>

  </>
}

export default App;