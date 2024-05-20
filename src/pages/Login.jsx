import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, pass);
    if (
      email.toLowerCase() === "admin@site.com" &&
      pass.toLowerCase() === "admin"
    ) {
      login({ email, pass });
    } else {
      alert("Kullanıcı bilgileri yanlış");
    }
  };

  return (
    <div className="loginDiv">
      <div className="h-[500px] w-2/3 sm:[475px] lg:w-[30%] bg-white p-5 flex flex-col justify-between gap-5 m-10 rounded-xl ">
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className="w-[6px] bg-slate-600 h-[30px] "></span>
          <h1 className="text-[25px] sm:[32px] font-freeman uppercase">
            Smyye Store
          </h1>
          <span className="w-[6px] bg-slate-600 h-[30px]"></span>
        </div>
        <div className="text-center my-6">
          <h3 className="font-bold font-freeman text-[18px]">SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 hover:cursor-pointer">
            <label
              className="hover:after:content-[`admin@aa.com`]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="login-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              className="login-input"
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col items-center font-light my-4 ">
            <button className="w-[50%] rounded-xl p-1 bg-cyan-500 font-freeman text-white my-4  ">
              Sign In
            </button>
            <p>
              <span className="text-[15px]"> Forgot your password? </span>
              <span className="text-cyan-500 text-[11px] underline">
                Reset Password
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
