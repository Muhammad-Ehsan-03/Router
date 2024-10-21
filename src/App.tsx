import { BrowserRouter, Route, Routes } from 'react-router-dom'
import File1 from "./pages/file1/File1"
import File2 from "./pages/file2/File2"
import File3 from "./pages/file3/File3"
import Other1 from "./pages/other/Other1"
import Other2 from "./pages/other2/Other2"
import Other3 from "./pages/other3/Other3"
import StudentLayout from './pages/student-layout/StudentLayout'
import TeacherLayout from './pages/teacher-layout/TeacherLayout'
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<StudentLayout/>}>
    <Route path="file1" index element= {<File1/>}></Route>
    <Route path="file2" element= {<File2/>}></Route>
    <Route path="file3" element= {<File3/>}></Route>
    </Route>
    <Route  path="/teacher-layout" element={<TeacherLayout/>}>
    <Route path="other1" index element= {<Other1/>}></Route>
    <Route path="other2" element= {<Other2/>}></Route>
    <Route path="other3" element= {<Other3/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
