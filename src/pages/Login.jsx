import { useState } from "react";
import logo_2 from "../assets/logo_2.png";

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleSwitchForm = () => {
    setHasAccount(!hasAccount);
  };
  return (
    <div>
      <div className="absolute bg-black bg-opacity-5 top-[20px] flex flex-col gap-4 items-center w-full h-full pt-5">
        <div className="max-w-[700px] min-w-[500px] flex flex-row items-center justify-start gap-2">
          <img className="h-[40px]" src={logo_2} alt="Web chat" />
          <h1 className="text-white text-xl font-light">MESSENGER APP</h1>
        </div>
        <form
          className="z-10 max-w-[700px] min-w-[500px] p-5 bg-white flex flex-col gap-5 items-center border rounded-md border-gray-300 shadow-md"
          action=""
        >
          <h1 className="text-2xl font-normal mt-5">
            Welcome To Messenger App!
          </h1>
          <span className="text-sm text-slate-400 font-medium">
            To use our services you must be a registered user
          </span>
          <h1 className="text-2xl">{hasAccount ? "Login" : "Register"}</h1>
          <div className="w-[300px] flex flex-col">
            {!hasAccount && (
              <>
                <label htmlFor="">Your Full Name</label>
                <input
                  className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-3"
                  type="text"
                />
              </>
            )}
            <label htmlFor="">Username</label>
            <input
              className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-3"
              type="text"
            />
            <label htmlFor="">Password</label>
            <input
              className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-3"
              type="password"
            />

            <button className="text-white bg-[#506ea2] h-[35px] mt-6 rounded-sm">
              {hasAccount ? "Login" : "Register"}
            </button>
          </div>
          <div className="text-sm font-medium mb-8">
            {hasAccount
              ? "Don't have an account yet?"
              : "Already have an account?"}{" "}
            <a
              className="no-underline text-slate-400 hover:cursor-pointer"
              onClick={handleSwitchForm}
            >
              {hasAccount ? "Register" : "Login"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
