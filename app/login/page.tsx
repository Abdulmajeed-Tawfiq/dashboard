import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/LoginForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
