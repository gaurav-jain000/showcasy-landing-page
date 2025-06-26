import { socialLinksArr } from "~/lib/shared";
import { Logo } from "./header";
import { ThemeButton } from "./theme-buttons";
import { Button } from "./ui/button";
import { TopRightArrowIcon } from "./icons";
import StayConnected from "./stay-connected";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-50! uni-padding-y">
      <div className="maximus flex flex-col gap-10 lg:gap-[72px]">
        <div className="space-y-8 lg:space-y-16">
          <div className="space-y-2">
            <div className="">
              <Logo theme="dark" />
            </div>
            <p className="body-22 text-neutral-200">
              A stunning digital designer portfolio website template for you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socialLinksArr.map((link) => (
              <a href={link.url} key={link.title}>
                <ThemeButton
                  variant="outline"
                  withIcon={false}
                  className="w-full border-neutral-600 hover:bg-neutral-700"
                >
                  {link.title}
                </ThemeButton>
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-40 ">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <h3 className="body-22 text-neutral-500 font-semibold">
              Page List
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:justify-between gap-y-20 gap-x-8 text-neutral-50">
              <div className="flex flex-col gap-4 items-start">
                {[
                  {
                    title: "Home v1",
                    url: "/",
                  },
                  {
                    title: "Home v2",
                    url: "/",
                  },
                  {
                    title: "Home v3",
                    url: "/",
                  },
                ].map((link) => (
                  <Link
                    to={link.url}
                    key={link.title}
                    className="hover:text-neutral-300 duration-300 hover:underline underline-offset-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 items-start">
                {[
                  {
                    title: "About v1",
                    url: "/",
                  },
                  {
                    title: "About v2",
                    url: "/",
                  },
                  {
                    title: "About v3",
                    url: "/",
                  },
                ].map((link) => (
                  <Link
                    to={link.url}
                    key={link.title}
                    className="hover:text-neutral-300 duration-300 hover:underline underline-offset-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 items-start">
                {[
                  {
                    title: "Works v1",
                    url: "/",
                  },
                  {
                    title: "Works v2",
                    url: "/",
                  },
                  {
                    title: "Works v3",
                    url: "/",
                  },
                ].map((link) => (
                  <Link
                    to={link.url}
                    key={link.title}
                    className="hover:text-neutral-300 duration-300 hover:underline underline-offset-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 items-start">
                {[
                  {
                    title: "Insights",
                    url: "/",
                  },
                  {
                    title: "Contacts",
                    url: "/",
                  },
                ].map((link) => (
                  <Link
                    to={link.url}
                    key={link.title}
                    className="hover:text-neutral-300 duration-300 hover:underline underline-offset-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <StayConnected className="gap-8" />
        </div>
        <div className="body-16 text-neutral-400 text-center">
          &copy; 2025 All Rights <br className="sm:hidden" /> Reserved.
          Developed by{" "}
          <a
            href="https://gaurav-jain.vercel.app"
            target="_blank"
            rel="me"
            className="text-neutral-200 hover:text-neutral-400 underline"
          >
            Gaurav
          </a>
        </div>
      </div>
    </footer>
  );
}
