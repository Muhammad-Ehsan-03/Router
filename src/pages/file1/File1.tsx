import { useContext, useEffect, useState } from "react";
import { studentContext } from "../../StudentContext";
import { useDispatch, useSelector } from "react-redux";

function File1() {
  const { user, setUser }: any = useContext(studentContext);

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
      <h1>Count : {count}</h1>
      <h1>Student Portal Home Page</h1>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setUser({
                      id: 2,
                      email: "lindsay.ferguson@reqres.in",
                      first_name: "Lindsay",
                      last_name: "Ferguson",
                    });
                  }}
                >
                  Change
                </button>
              </td>
            </tr>
          </tbody>
        }
      </table>
    </div>
  );
}
export default File1;
