import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

{/* <Image src="../../public/images/agendaIcon.jpg" layout="fill"/> */}

  return (
    <div className={classes.card}>
      <div id={classes.test} className={classes.welcome}>
        <h1>AGENDA</h1>
        {/* <img src="images/agendaIcon.jpg" /> */}
        <Image src="/agendaIcon.jpg" height="200" width="200"/>
        <p>Make a todo list and start getting task into it!!</p>
      </div>
      <div className={classes.form}>
      <h1>SIGN IN</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.inputblock}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              
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
    </div>
  );
};

export default AuthForm;
