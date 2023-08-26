import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provides/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {

  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 
  const from = location.state?.from?.pathname || "/";

  const handleGooglesignIn = () => {
    googleSignIn()
    .then(result =>{
 const loggedInUser = result.user;
 console.log(loggedInUser)
 const saveUser = { name:loggedInUser.name, email:loggedInUser.email };
 fetch("http://localhost:5000/users", {
  method: "POST",
  Headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(saveUser),

})
.then((res) => res.json())
.then((data) => {
if (data.insertedId) {
 
  navigate(from, { replace: true });
}
})


    })
    
  }

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center ">
        <button onClick={handleGooglesignIn} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
      </div>
    </div>
  );
};

export default SocialLogin;
