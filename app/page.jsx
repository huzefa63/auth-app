import { signInAction } from "@/actions/handlers";

export default function Home() {
  return (
    <div>
      <h1>hello from me</h1>
      <h1>testing auth</h1>
      <form action={signInAction}>
        <button className="px-5 py-2 text-black bg-white">signIn</button>
      </form>
    </div>
  );
}
