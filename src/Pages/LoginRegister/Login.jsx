import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../PrivetRouter/PrivetRouter";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { singInUser,googleLoginUser,githubLoginUser } = useContext(AuthContext);
  console.log(googleLoginUser);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

//-----------------google-----//
const provider = new GoogleAuthProvider()
const handelGoogleLogin=()=>{
    googleLoginUser(provider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error =>{console.log(error)})


}
//------------------grithib------//
const providers = new GithubAuthProvider()
const handelGithubLogin=()=>{
    githubLoginUser(providers)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{console.log(error)})

}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
              <h2 className="mb-4">
                Dont have an account please{" "}
                <Link className=" text-red-600" to="/register">
                  Register
                </Link>
              </h2>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className=" flex justify-around mb-4">
            <button onClick={handelGoogleLogin} className="btn ">
              {" "}
              <FcGoogle /> Gmail
            </button>
            <button onClick={handelGithubLogin} className="btn"> <FaGithub/> github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
