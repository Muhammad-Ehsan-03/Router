import { Link, Outlet } from "react-router-dom";

function StudentLayout (){
return(
    <div>
        <h1>Student Portal</h1>

        <Link to="/teacher-layout"><button className="btn btn-success">Teacher Portal</button></Link>
        <br></br>

        <ul>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
                <Link to="/file2">
                File2
                </Link>
            </li>
            <li>
                <Link to="/file3">
                File3
                </Link>
            </li>
        </ul>
        <div className="container">
            <Outlet></Outlet>
        </div>
    </div>
)
}
export default StudentLayout;