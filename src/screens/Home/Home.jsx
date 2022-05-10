import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.scss'
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logIn, signUp } from "../../servises/firebase";

export const Home = ({ isSignUp }) => {
  const [error, setError] = useState("");
  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      }
    } catch (e) {
      console.log(e.name);
      setError(e.message);
    }
  };
  return (
    <>
      <div className="auth" >
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
          Авторизуйтесь
        </h4>
        <LoginForm onSubmit={handleSubmit} />
       <div style={{ textAlign: "center", marginTop: "20px", color: 'red'}}> {error && <h5>{ }</h5>}</div>
        <div className="login" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Link to={isSignUp ? "/" : "/signup"}>
            {isSignUp ? "to Login" : "Зарегистрироваться?"}
          </Link>
        </div>
      </div>
    </>
  );
};
