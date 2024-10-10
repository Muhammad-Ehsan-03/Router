import { Link, Outlet } from "react-router-dom";

function Layout2 (){
    
return (
    <div>
        <h1>I am Layout 2</h1>
        <ul>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
           <li>
            <Link to="/other">
            Other1
            </Link>
           </li>
            <li>
                <Link to="/other2">
                Other2
                </Link>
            </li>
            <li>
                <Link to="/other3">
                Other3
                </Link>
            </li>
        </ul>
        <div className="container2">
        <h1>I am Layout2 Div</h1>
            <Outlet></Outlet>
        </div>
    </div>
)
}
export default Layout2;