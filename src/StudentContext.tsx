import { createContext, useState } from "react";
import TeacherLayout from "./pages/teacher-layout/TeacherLayout";

export const teacherContext = createContext();

function TeacherConext() {
    const [user, setUser] = useState({});
    
    return (
        <teacherContext.Provider value={{ user, setUser }}>
            <TeacherLayout/>
        </teacherContext.Provider>
    )
}
export default TeacherConext;