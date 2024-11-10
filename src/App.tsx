import { BrowserRouter, Route, Routes } from 'react-router-dom'
import File1 from "./pages/file1/File1"
import File2 from "./pages/file2/File2"
import File3 from "./pages/file3/File3"
import Other1 from "./pages/other/Other1"
import Other2 from "./pages/other2/Other2"
import Other3 from "./pages/other3/Other3"
import GlobalContext from './GlobalContext'
import StudentContext from './StudentContext'
import TeacherContext from './TeacherContext'
import { Provider } from 'react-redux'
import { store } from './pages/store/store'
function App() {

  return (
    <GlobalContext>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentContext />}>
            <Route index element={<File1 />}></Route>
            <Route path="file2" element={<File2 />}></Route>
            <Route path="file3" element={<File3 />}></Route>
          </Route>
          <Route path="/teacher-layout" element={<TeacherContext />}>
            <Route index element={<Other1 />}></Route>
            <Route path="other2" element={<Other2 />}></Route>
            <Route path="other3" element={<Other3 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </GlobalContext>
  )
}

export default App
