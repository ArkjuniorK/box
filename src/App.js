import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import { AnimationProvider } from "./source/animation";
import Fb from "./firebase";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Background from "./component/Background";
import Services from "./views/Services";
import Button from "./component/Button";
import Input from "./component/Input";
import {
  getDatabase,
  ref,
  push,
  child,
  set,
  query,
  equalTo,
  onValue,
  orderByChild,
  remove,
} from "firebase/database";
import { UserContext, UserProvider } from "./source/user";

const Login = ({ onClose }) => {
  const [user, id, setUser, setId] = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    // post data to db
    const db = getDatabase(Fb);
    const data = query(
      ref(db, "users"),
      orderByChild("email"),
      equalTo(form.email)
    );

    onValue(data, function (snps) {
      const temp = snps.val();
      const idData = Object.keys(temp)[0];

      if (form.password === temp[idData].password) {
        // set user and id data
        setUser(temp[idData]);
        setId(idData);

        // then close overlay
        onClose();
      }

      setMsg("Wrong Password!");
    });
  }

  return (
    <div className="  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden">
      <Background
        position=" left-0"
        translateX={-8}
        translateY={19}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0"
        translateX={9}
        translateY={-2}
        divideX={700}
        divideY={500}
      />
      <div className="flex relative bg-red-100 items-center justify-between p-6 ">
        <span className=" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl">
          login
        </span>
        <Button onClick={onClose} icon="close"></Button>
      </div>
      <form
        onSubmit={loginUser}
        className="bg-light-200 p-9 flex flex-col space-y-5"
      >
        <Input
          placeholder={"Email"}
          icon={"email"}
          value={form.email}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type={"email"}
        />
        <Input
          placeholder={"Password"}
          icon={"lock"}
          value={form.password}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type={"password"}
        />
        {msg.length !== 0 && (
          <span className="text-center uppercase font-semibold font-quicksand">
            {msg}
          </span>
        )}
        <div className="flex justify-end space-x-4 pt-6">
          <Button title={"Reset"} type={"button"} />
          <Button
            disabled={!form.password}
            title={"Login"}
            icon={"login"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

const Edit = ({ onClose }) => {
  const [user, id, setUser, setId] = useContext(UserContext);
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  async function deleteUser(e) {
    e.preventDefault();

    const db = getDatabase(Fb);
    await set(ref(db, "users/" + id), null);
    setUser({});
    setId("");
    setForm({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });

    onClose();
  }

  async function editUser(e) {
    e.preventDefault();

    // post data to db
    const db = getDatabase(Fb);
    await set(ref(db, "users/" + id), {
      ...form,
    });

    // after success then assign data
    // to user and id context
    setUser(form);

    // then close overlay
    onClose();
  }

  useEffect(() => {
    setForm(user);

    return () => {
      setForm({
        fullname: "",
        username: "",
        email: "",
        password: "",
      });
    };
  }, []);

  return (
    <div className="  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden">
      <Background
        position=" left-0"
        translateX={-11}
        translateY={25}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0"
        translateX={1}
        translateY={-2}
        divideX={700}
        divideY={500}
      />
      <div className="flex relative bg-red-100 items-center justify-between p-6 ">
        <span className=" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl">
          edit
        </span>
        <Button onClick={onClose} icon="close"></Button>
      </div>
      <form
        onSubmit={editUser}
        className="bg-light-200 p-9 flex flex-col space-y-5"
      >
        <Input
          placeholder={"Fullname"}
          icon={"person"}
          value={form.fullname}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, fullname: e.target.value };
            });
          }}
          type={"text"}
        />
        <Input
          placeholder={"Username"}
          icon={"face"}
          value={form.username}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
          type={"text"}
        />
        <Input
          placeholder={"Email"}
          icon={"email"}
          value={form.email}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type={"email"}
        />
        <Input
          placeholder={"Password"}
          icon={"lock"}
          value={form.password}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type={"password"}
        />
        <div className="flex justify-end space-x-4 pt-6">
          <Button onClick={deleteUser} title={"Delete"} type={"button"} />
          <Button
            disabled={!form.password}
            title={"Edit"}
            icon={"login"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

const SignIn = ({ onClose }) => {
  const [user, id, setUser, setId] = useContext(UserContext);
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  async function signUpUser(e) {
    e.preventDefault();

    // post data to db
    const db = getDatabase(Fb);
    const key = push(child(ref(db), "users")).key;
    await set(ref(db, "users/" + key), {
      ...form,
    });

    // after success then assign data
    // to user and id context
    setId(key);
    setUser(form);

    // then close overlay
    onClose();
  }

  useEffect(() => {
    return () => {
      setForm({
        fullname: "",
        username: "",
        email: "",
        password: "",
      });
    };
  }, []);

  return (
    <div className="  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden">
      <Background
        position=" left-0"
        translateX={-11}
        translateY={25}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0"
        translateX={1}
        translateY={-2}
        divideX={700}
        divideY={500}
      />
      <div className="flex relative bg-red-100 items-center justify-between p-6 ">
        <span className=" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl">
          sign up
        </span>
        <Button onClick={onClose} icon="close"></Button>
      </div>
      <form
        onSubmit={signUpUser}
        className="bg-light-200 p-9 flex flex-col space-y-5"
      >
        <Input
          placeholder={"Fullname"}
          icon={"person"}
          value={form.fullname}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, fullname: e.target.value };
            });
          }}
          type={"text"}
        />
        <Input
          placeholder={"Username"}
          icon={"face"}
          value={form.username}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
          type={"text"}
        />
        <Input
          placeholder={"Email"}
          icon={"email"}
          value={form.email}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type={"email"}
        />
        <Input
          placeholder={"Password"}
          icon={"lock"}
          value={form.password}
          onChange={(e) => {
            setForm((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type={"password"}
        />
        <div className="flex justify-end space-x-4 pt-6">
          <Button title={"Reset"} type={"button"} />
          <Button
            disabled={!form.password}
            title={"Sign In"}
            icon={"login"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

const Overlay = ({ onClose, onLogin, onSignin, onEdit }) => {
  if (onLogin || onSignin || onEdit) {
    return (
      <>
        <div className="w-full flex justify-center items-center h-full fixed bg-dark z-40 bg-opacity-50">
          {onSignin ? (
            <SignIn onClose={onClose} />
          ) : onLogin ? (
            <Login onClose={onClose}></Login>
          ) : onEdit ? (
            <Edit onClose={onClose} />
          ) : (
            ""
          )}
        </div>
      </>
    );
  } else {
    return "";
  }
};

// context for all components
// so it will only react on those context without creating multiple useEffect
// on each component
const App = () => {
  const [onLogin, setOnLogin] = useState(false);
  const [onSignin, setOnSignin] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  return (
    <AnimationProvider>
      <UserProvider>
        <Overlay
          onClose={() => {
            setOnLogin(false);
            setOnSignin(false);
            setOnEdit(false);
          }}
          onLogin={onLogin}
          onSignin={onSignin}
          onEdit={onEdit}
        ></Overlay>
        <div
          id="bg"
          className="z-0 relative overflow-x-hidden transition-all duration-500 ease-in-out h-full"
        >
          {/* navigation bar */}
          <Navbar
            signin={() => {
              setOnSignin(true);
            }}
            login={() => {
              setOnLogin(true);
            }}
            edit={() => {
              setOnEdit(true);
            }}
          />

          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          {/* footer */}
          <Footer />
        </div>
      </UserProvider>
    </AnimationProvider>
  );
};

export default App;
