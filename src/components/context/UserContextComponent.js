import React ,{useState}from 'react'
export const UserContext = React.createContext()

function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:'Divya',
          email:'divya@gmail.com',
          mobile:'9910910901',
          age:'22',
          subject:'TAMIL'
        },
        {
          name:'Naga',
          email:'naga@gmail.com',
          mobile:'9019019001',
          age:'27',
          subject:'ENGLISH'
        },
        {
          name:'Ashwin',
          email:'ashwin@gmail.com',
          mobile:'8918902091',
          age:'25',
          subject:'MATHS'
        }
      ])

  return <>
  <UserContext.Provider value={{users,setUsers}}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserContextComponent