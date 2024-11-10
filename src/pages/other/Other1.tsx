import axios from "axios";
import { useContext, useEffect} from "react";
import { teacherContext } from "../../TeacherContext";

function Other1() {

    const { user, setUser } :any = useContext(teacherContext);
    let backendBaseUrl = "https://reqres.in/";
    useEffect(() => {
        const userRequest = axios.get(backendBaseUrl + "api/users", {
            params: {
                page: 1
            }
        });
        userRequest.then((response) => {
            setUser(response.data.data);
        })
    },
        []);        
    return (
        <div>
            <h1>Teacher Portal Home Page</h1>
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
                    user.map((emp: any) => (
                        <tbody>
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.last_name}</td>
                                <td>{emp.email}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}
export default Other1;