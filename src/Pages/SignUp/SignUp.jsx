import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "User Created Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            // updateUser(user.name, user.photo)
            // .then()
            // .catch()
            // // navigate('/)
        }
      })
      .catch((err) => console.log(err));
    form.reset();
  };

  return (
    <>
    <Helmet>
      <title>Bistro Boss | Sign up</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Sign Up Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className='text-sky-300 text-center mb-5'>Already have an account ? <Link to='/login'>Log In</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
