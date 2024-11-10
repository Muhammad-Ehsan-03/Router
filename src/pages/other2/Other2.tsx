import { useContext } from "react";
import { teacherContext } from "../../TeacherContext";

function Other2 () {

    const { user} :any = useContext(teacherContext);
    return (
        <div>
             <h1>Teacher Portal Page 2</h1>
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
export default Other2;