import LoginForm from "@/components/LoginForm";

import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Login</h1>

      <LoginForm onSend={loginAction} />
    </div>
  );
}
