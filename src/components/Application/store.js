import React, { useState, createContext } from 'react'

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {

    const [personalDetail, setPersonalDetail] = useState({ 
        firstName: undefined, 
        lastName: undefined, 
        email: undefined, 
        phoneNumeber: undefined 
    })
    const [educationDetail, setEducationDetail] = useState({  
        faculty: undefined, 
        branch: undefined, 
        resume: undefined, 
        university: undefined 
    })
    const [jobDetail, setJobDetail] = useState({ 
        team: undefined, 
        position1: undefined, 
        position2: undefined, 
        startDate: undefined , 
        endDate: undefined  
    })

    const store = {
        personalDetail: [personalDetail, setPersonalDetail],
        educationDetail: [educationDetail, setEducationDetail],
        jobDetail: [jobDetail, setJobDetail],
    }
    console.log(store)
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}