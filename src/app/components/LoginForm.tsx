"use client";
import { useState } from "react";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {!isLogin ? (
        <form className="flex flex-col">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="flex flex-col">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      )}
      {!isLogin ? (
        <button onClick={() => setIsLogin((prev) => !prev)}>
          Don't have an account? Register now!
        </button>
      ) : (
        <button onClick={() => setIsLogin((prev) => !prev)}>
          Already have an account? Login now!
        </button>
      )}
    </>
  );
};

export default LoginForm;
