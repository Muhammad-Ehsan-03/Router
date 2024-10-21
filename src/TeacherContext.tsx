import { createContext, useState } from 'react';
import StudentLayout from './pages/student-layout/StudentLayout';

export const studentContext = createContext();

function StudentConext() {
    const [user, setUser] = useState({});

    return (
        <studentContext.Provider value={{ user, setUser }}>
            <StudentLayout/>
        </studentContext.Provider>
    )
}
export default StudentConext;