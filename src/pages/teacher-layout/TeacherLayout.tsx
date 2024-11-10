import { Link, Outlet } from "react-router-dom";

function TeacherLayout (){
    
return (
    <div>
        <h1>Teacher Portal</h1>
        <br/>
        <Link to="/"><button className="btn btn-success">Student Portal</button></Link>
        <br></br>
        <ul>
            <li>
                <Link to="">
                Home
                </Link>
            </li>
            <li>
                <Link to="other2">
                Other2
                </Link>
            </li>
            <li>
                <Link to="other3">
                Other3
                </Link>
            </li>
        </ul>
        <div className="container2">
            <Outlet></Outlet>
        </div>
    </div>
)
}
export default TeacherLayout;