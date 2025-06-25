import { LeftArrowIcon } from "~/components/icons";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { ThemeButton } from "~/components/theme-buttons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Showcasy" },
    { name: "description", content: "Welcome to Showcasy!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

// Optional props - { loaderData }: Route.ComponentProps
export default function Home() {
  return (
    <>
      <section className="maximus py-[40px] md:py-[72px] gap-2 min-h-screen grid place-items-center">
        <div className="flex flex-col gap-2">
          <span className="body-28 font-medium">Hello, I&apos;m Ivan.</span>
          <h1 className="theme-h1 leading-[1em] font-bold">
            Designing digital product with emphasasis on{" "}
            <span className="text-neutral-400">visual design</span>
          </h1>
          <div className="flex sm:items-end justify-between gap-6 pt-4 md:pt-8 max-sm:flex-col-reverse">
            <ThemeButton className="body-22 font-semibold">
              Let&apos;s Talk
            </ThemeButton>
            <p className="text-neutral-700 body-22">
              A multidisciplinary designer harnessing the power of design to{" "}
              <br className="hidden lg:block" />
              achieve online goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
