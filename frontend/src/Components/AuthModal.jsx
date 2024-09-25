import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const AuthModal = () => {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 flex"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="bg-reddit_dark text-reddit_text self-center w-3/4 sm:w-1/2 md:w-1/4 mx-auto p-5 rounded-xl border border-reddit_dark-brightest ">
        {modalType === "login" && <h1 className="text-2xl mb-5">Log In</h1>}

        {modalType === "register" && (
          <h1 className="text-2xl mb-5">Register</h1>
        )}

        {modalType === "register" && (
          <label>
            <span className="text-reddit_text-darker text-sm">E-mail:</span>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mb-3  w-full "
            />
          </label>
        )}

        <label>
          <span className="text-reddit_text-darker text-sm">Username:</span>
          <Input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            className="mb-3  w-full "
          />
        </label>

        <label>
          <span className="text-reddit_text-darker text-sm">Password:</span>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="mb-3 w-full "
          />
        </label>

        <Button className="w-full py-2 mb-3" style={{ borderRadius: ".3rem" }}>
          {modalType === "login" ? "Log In" : "Sign Up"}
        </Button>

        {modalType === "login" && (
          <div>
            New to Reddit ?{" "}
            <button
              className="text-blue-600"
              onClick={() => setModalType("register")}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        )}

        {modalType === "register" && (
          <div>
            Already have an account ?{" "}
            <button
              className="text-blue-600"
              onClick={() => setModalType("login")}
            >
              {" "}
              Log In{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
