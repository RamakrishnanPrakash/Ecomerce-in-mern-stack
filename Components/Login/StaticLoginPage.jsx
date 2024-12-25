import { useState } from "react";
import { RegisterCard } from "./RegisterCard";
import { LoginCard } from "./LoginCard";
export const StaticLoginPage = ({ loginPage, removeLoginPage }) => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [registerOrLogin, setRegisterOrLogin] = useState(true);
  return (
    <>
      {" "}
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
    </>
  );
};
