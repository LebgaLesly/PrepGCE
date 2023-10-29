import { StudyBoxContext } from "../Context/StudyBoxContext";
import { useContext } from "react";


export const useStudyBoxContext = () => {
    const context = useContext(StudyBoxContext)

    if (!context) {
        throw Error('useStudyBoxContext must be used inside an StudyBoxContextProvider')
    }

    return context
}