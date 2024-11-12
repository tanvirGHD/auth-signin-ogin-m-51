import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
            
        })

    }


    return (
        <div className="hero bg-base-200 rounded-xl py-8">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form 
                onSubmit={handleRegister}
                className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">User Name</span>
                </label>
                <input
                    type="text"
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
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="p-5 text-center">Already have an account? Please <Link to="/login" className="font-bold">Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;