import { Link, Outlet } from "react-router-dom";

function Layout (){
return(
    <div>
        <h1>I am Layout</h1>
        <ul>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
                <Link to="/file1">
                File
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
        <h1>I am Layout Div</h1>
            <Outlet></Outlet>
        </div>
    </div>
)
}
export default Layout;