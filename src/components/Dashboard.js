import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {UserContext} from './context/UserContextComponent'
function Dashboard() {
  let context = useContext(UserContext)
  let navigate = useNavigate()

  let handleDelete = (i)=>{
    let newUsers = [...context.users]
    newUsers.splice(i,1)
    context.setUsers(newUsers)
  }
  
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">TEACHERS</h1>
            </div>
            
      </div>
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Age</th>
          <th>Subject</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          context.users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.age}</td>
              <td>{e.subject}</td>
              <td>
                <Button variant='primary' onClick={()=>{navigate(`/edit-user/${i}`)}}>
                  {/* <Link to={`/edit-user/${i}`}>Edit</Link> */}
                  Edit
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
        
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">STUDENTS</h1>
            </div>

      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Standard</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          context.users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.mobile}</td>
              <td>{e.address}</td>
              <td>{e.standard}</td>
              <td>
                <Button variant='primary' onClick={()=>{navigate(`/edit-student/${i}`)}}>
                  {/* <Link to={`/edit-user/${i}`}>Edit</Link> */}
                  Edit
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
      
  </>
}

export default Dashboard