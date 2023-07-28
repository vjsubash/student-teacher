import React ,{useState}from 'react'
export const UserContext = React.createContext()

function UserStudent({children}) {
    let [users,setUsers] = useState([
        {
          name:'priya',
          age:'12',
          mobile:'9910910901',
          address:'34G,Chennai',
          standard:'8th'
        },
        {
          name:'Naga',
          age:'15',
          mobile:'9019019001',
          address:'Trichy',
          standard:'10th'
        },
        {
          name:'Ashwin',
          age:'16',
          mobile:'8918902091',
          address:'Pudukkottai',
          standard:'12th'
        }
      ])
  return <>
  <UserContext.Provider value={{users,setUsers}}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserStudent