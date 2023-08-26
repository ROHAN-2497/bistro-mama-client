import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Share/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          const saveUser = { name:data.name, email:data.email };
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
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Profile Update...",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        })
        .catch((error) => console.log(error));
      })
    });
  
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 font-bold pl-4 mt-2">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500 font-bold pl-4 mt-2">
                    PhotoURL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 font-bold pl-4 mt-2">
                    email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-bold pl-4 mt-2">
                    password is be requried
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-bold pl-4 mt-2">
                    password must be 6 charecter
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 font-bold pl-4 mt-2">
                    password must be less then 20
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 font-bold pl-4 mt-2">
                    password must be one uppercase one lowerCase One uniuqe keys
                    one number{" "}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                Already Registret ?{" "}
                <Link to="/login" className="text-blue-600 font-medium">
                  Go to Login
                </Link>
                <SocialLogin></SocialLogin>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
