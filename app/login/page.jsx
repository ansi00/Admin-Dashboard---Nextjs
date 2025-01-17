import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
