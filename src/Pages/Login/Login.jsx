import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/Authprovider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {
  const {loginUser} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      if(user.accessToken){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Logged In Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      }
    })
    .catch(err => console.log(err))
    form.reset()
}

const handleCaptcha = (e) =>{
 const user_captcha_value = e.target.value;
 if(validateCaptcha(user_captcha_value)){
    setDisabled(false)
 }
 else{
    setDisabled(true)
 }
}

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | login</title>
      </Helmet>
      <div className="max-w-7xl py-36 mx-auto min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate/>
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" disabled={disabled} type="submit" value="Login Now" />
              </div>
            </form>
            <p className='text-sky-300 text-center mb-5'>New Here ? <Link to='/signup'>Crete a Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
