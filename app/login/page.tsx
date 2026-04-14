export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Login</h1>

      <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black py-28 px-10 overflow-auto flex flex-col items-center justify-between">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border border-black"
        />

        <button className="bg-black text-white rounded-xl px-10 py-2">
          Entrar
        </button>
      </div>
    </div>
  );
}
