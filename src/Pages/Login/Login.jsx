import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';



const Login = () => {
    const [disabled, setDisabled] = useState(true)
const captchaRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
}

const handleCaptcha = () =>{
 const user_captcha_value = captchaRef.current.value;
 if(validateCaptcha(user_captcha_value)){
    setDisabled(false)
 }
 else{
    setDisabled(true)
 }
}

  return (
    <div>
      <div className="max-w-7xl pt-36 mx-auto min-h-screen bg-base-200">
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
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="captcha"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleCaptcha} className="btn btn-active btn-ghost">Validate Captcha</button>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" disabled={disabled} type="submit" value="Login Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
