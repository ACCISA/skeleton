import axios from "axios";
import {
  Button,
  Label,
  TextInput,
  Alert,
} from "flowbite-react";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const signIn = useSignIn();
  const [password, setPassword] = useState("");
  const [invalidCred, setInvalidCred] = useState(false);
  const { user, setUser, root, setRoot } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const handleLogin = (ev) => {
    ev.preventDefault();
    axios
      .post("/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        const data = res.data.userDoc
        console.log(data)
        signIn({
          token: res.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { data},
        });

        console.log(res);
        setUser(username);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        setInvalidCred(true);
      });
  };


  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center -mt-8">
        <form className="flex flex-col gap-4 w-1/6" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput
              value={username}
              onChange={(ev) => {
                setInvalidCred(false);
                setUsername(ev.target.value);
              }}
              id="email1"
              type="text"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              id="password1"
              type="password" 
              required={true}
              value={password}
              onChange={(ev) => {
                setInvalidCred(false);
                setPassword(ev.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            {/* <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label> */}
          </div>
          {invalidCred && (
            <Alert color="failure">
              <span>
                <span className="font-medium">Alert!</span> Invalid Credentials.
              </span>
            </Alert>
          )}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
}