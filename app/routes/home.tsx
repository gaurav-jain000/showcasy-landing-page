import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Showcasy" },
    { name: "description", content: "Welcome to Showcasy!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <section className="min-h-[100vh] grid place-items-center bg-gradient-to-br from-stone-800 via-stone-700 to-stone-950">
        <div className=" border rounded-xl bg-gray-100/10 p-8 border-gray-100/20 w-1/4">
          <div className="prose prose-lg max-w-full prose-headings:my-3 text-center">
            <h1 className="text-gray-200">Showcasy</h1>
            <p className="text-gray-200 text-base">
              Welcome to showcasy! <br /> We are glad to have you here.
            </p>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <Button>Let's get started!</Button>
          </div>
        </div>
      </section>
    </>
  );
}
