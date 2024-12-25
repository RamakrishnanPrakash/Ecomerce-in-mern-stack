import { useState } from "react";

import { RegisterCard } from "./RegisterCard";
import { LoginCard } from "./LoginCard";

export const LoginPage = ({ loginPage, removeLoginPage }) => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [registerOrLogin, setRegisterOrLogin] = useState(true);

  return (
    <div
      className={
        loginPage
          ? ` block   w-[100vw]   min-h-[100vh] 
          backdrop-blur-3xl bg-trasparent fixed top-[70px]  left-0  z-20 `
          : ` w-[100vw] h-[100vh]  backdrop-blur-3xl bg-trasparent fixed top-[70px] -left-[1500px] z-20 hidden`
      }>
      {registerOrLogin ? (
        <div className="flex  justify-center items-start mt-[100px]  w-full h-full container mx-auto ">
          <LoginCard
            passwordIcon={passwordIcon}
            setPasswordIcon={setPasswordIcon}
            setRegisterOrLogin={setRegisterOrLogin}
            removeLoginPage={removeLoginPage}></LoginCard>
        </div>
      ) : (
        <div className="flex  justify-center items-start mt-[10px]  w-full h-full container mx-auto ">
          <RegisterCard
            passwordIcon={passwordIcon}
            setPasswordIcon={setPasswordIcon}
            setRegisterOrLogin={setRegisterOrLogin}
            removeLoginPage={removeLoginPage}></RegisterCard>
        </div>
      )}
    </div>
  );
};
