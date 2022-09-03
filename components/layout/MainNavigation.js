import Link from "next/link";
import AuthForm from "../Auth/AuthForm";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <div className={classes.logo}>AGENDA</div>
        <div className={classes.container}>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={classes.image} data-stellar-background-ratio="0.6">
        {/* Componente que sea de login como un recuadro  */}
        <AuthForm />
      </div>
    </header>
  );
}

export default MainNavigation;
