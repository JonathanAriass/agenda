import { useRef } from "react";
import Link from "next/link";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className={classes.card}>
      <h1>AGENDA</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.inputblock}>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            required
            ref={emailInputRef}
            placeholder="email"
          />
        </div>
        <div className={classes.inputblock}>
          <label htmlFor="password">Your Password</label>
          <input
            id="password"
            type="password"
            required
            ref={passwordInputRef}
            placeholder="password"
          />
        </div>
        <button>log in</button>
      </form>
      <Link href="/createacc">Create account</Link>
    </div>
  );
};

export default AuthForm;
