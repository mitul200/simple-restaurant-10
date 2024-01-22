import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../PrivetRouter/PrivetRouter";

const Register = () => {
    const {creatUser} = useContext(AuthContext)
    console.log(creatUser)

    const handelRegister =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value 
        console.log(email, password);
        creatUser(email , password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error =>console.error(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <h2 className="mb-4"> Already have an account Please <Link className=" text-red-600" to='/login'>Login</Link></h2>
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;