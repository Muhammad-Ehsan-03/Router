import { useContext } from "react";
import { studentContext } from "../../StudentContext";

function File2() {
    const { user }:any = useContext(studentContext);
    return (
        <div>
            
            <h1>Student Portal Page 2</h1>
            <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}
export default File2;