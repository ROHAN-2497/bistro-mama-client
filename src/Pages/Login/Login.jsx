import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provides/AuthProvider';
import SocialLogin from '../Share/SocialLogin/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
   
    const from = location.state?.from?.pathname || "/";

   useEffect(() =>{
    loadCaptchaEnginge(6); 
   }, [])
     
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
        })
        Swal.fire({
          title: 'User Login Successfull.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from, { replace: true });
    }

    const handleValidateCaptcha = (e) =>{
     const user_captcha_value = e.target.value; 
     if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
     }
     else{
        setDisabled(true)
     }
    }

  return (
    
    <div className="hero min-h-screen bg-base-200">
        <Helmet>
  <title>Bistro | Login</title>
</Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                // className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                type="text" 
                name="captcha" 
                placeholder="Type Here"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>New Here? <Link to='/signup' className='text-blue-500 font-medium'>Create a New Account</Link></p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
