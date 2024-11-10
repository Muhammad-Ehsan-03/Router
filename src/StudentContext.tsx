import { createContext, useState } from 'react';
import StudentLayout from './pages/student-layout/StudentLayout';

export const studentContext = createContext();

function StudentConext() {
    const [user, setUser] = useState({
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Ehsan",
        last_name: "Lawson"
    });

    return (
        <studentContext.Provider value={{ user, setUser }}>
            <StudentLayout/>
        </studentContext.Provider>
    )
}
export default StudentConext;