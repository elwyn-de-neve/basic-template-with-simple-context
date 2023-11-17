import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login } = useContext(AuthContext);

    function handleLogin(event) {
        event.preventDefault();
        login();
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input value={email} onChange={(event)=> setEmail(event.target.value)} type="email"/>
                </label>
                <label>
                    Password:
                    <input value={password} onChange={(event)=> setPassword(event.target.value)} type="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;