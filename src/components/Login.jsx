import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
    };

    return (
        <div className="hero bg-base-200 rounded-xl py-8">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form 
                onSubmit={handleLogin}
                className="card-body">
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
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="p-5 text-center">New to this website? Please <Link to="/register" className="font-bold">Register</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;
