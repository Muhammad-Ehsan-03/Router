import { useContext, useState } from "react";
import { studentContext } from "../../StudentContext";
import { useSelector, useDispatch } from "react-redux";

function File3() {
    const { user, setUser } :any= useContext(studentContext);
    const count = useSelector((counter:number) =>{
        return counter
      })

    
      const dispatcher = useDispatch();
    return (
        <div>
            <button
        className="btn btn-success"
        onClick={() => {
          dispatcher({type:"Increment"});
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatcher( {type : "Decrement" })}
        >
        Decrement
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatcher( {type : "Double" })}
        >
        Double
      </button>
<h3>Count : {count}</h3>
            <h1>Student Portal Page 3</h1>
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
export default File3;