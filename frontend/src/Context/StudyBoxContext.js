import { createContext, useReducer } from 'react'
import studyBoxReducer from '../Reducers/studyBoxReducer'


export const StudyBoxContext = createContext()


export const StudyBoxContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(studyBoxReducer, {
        studybox: null
    })


    return (
        <StudyBoxContext.Provider value={{state, dispatch}}>
                {children}
        </StudyBoxContext.Provider>
    )
}