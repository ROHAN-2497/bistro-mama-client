import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = user=>{
fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method: 'PATCH',
})
.then(res => res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount){
        refetch();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:`{user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
    }
})
  }
  const handleDelete =user => {};
  return (
    <div>
      <Helmet>
        <title>Bistro Mama | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Role </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-ghost  bg-orange-500-600 text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
