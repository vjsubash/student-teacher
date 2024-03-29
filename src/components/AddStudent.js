import React, {useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserStudent';
// import UserStudent from './context/UserStudent'

function AddStudent() {
  let context = useContext(UserContext)
  let [name,setName] = useState("")
  let [age,setAge] = useState("")
  let [mobile,setMobile] = useState("")
  let [address,setAddress] = useState("")
  let [standard,setStandard] = useState("")
  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...context.users]
    newArray.push({
      name,
      age,
      mobile,
      address,
      standard
    })
    context.setUsers(newArray)
    navigate('/dashboard')
  }

  return <div className='container'>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add Student</h1>
            </div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Standard</Form.Label>
        <Form.Control type="text" placeholder="Enter Standard" onChange={(e)=>setStandard(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default AddStudent