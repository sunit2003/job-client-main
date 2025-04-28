import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    
  
  
    const [field,setfield]=React.useState("")
    const [place,setPlace]=React.useState("")
    const [Comp,setComp]=React.useState("")
    
    return(
        <UserContext.Provider value={{field,setfield,place,setPlace,Comp,setComp}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;