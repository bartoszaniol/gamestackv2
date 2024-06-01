import LoginForm from "./components/LoginForm";

export default async function Home() {
  "use client";
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-[2] flex justify-center items-center">
        Start stacking up your games now!
      </div>
      <div className="flex-1 flex justify-center items-center flex-col">
        <div className="text-3xl">Log in</div>
        <LoginForm />
      </div>
    </div>
  );
}
