import React from "react";
import { Footer, LoginHeader, Input, Loading } from "../../components/index";


const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <LoginHeader/>
      <form className=" flex-1 flex flex-col items-center justify-center">
        <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <h2 className="mb-4 text-lg font-bold">Login</h2>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            className="hover:bg-rose-800 text-base bg-rose-900 text-white rounded-lg px-6 py-2"
            type="submit"
          >
            Entrar
          </button>
          <span className="hover:underline cursor-pointer text-red-950 m-3">Criar Conta</span>
          <Loading/>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default Login;


