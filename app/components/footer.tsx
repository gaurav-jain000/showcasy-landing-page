import { socialLinksArr } from "~/lib/shared";
import { Logo } from "./header";
import { ThemeButton } from "./theme-buttons";
import StayConnected from "./stay-connected";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  popUpAnimationVariant,
  slideUpAnimationVariant,
} from "~/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={slideUpAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ margin: "-230px 0px -230px 0px" }}
      className="bg-neutral-950 text-neutral-50! uni-padding-y"
    >
      <div className="maximus flex flex-col gap-10 lg:gap-[72px]">
        <div className="space-y-8 lg:space-y-16">
          <motion.div variants={slideUpAnimationVariant} className="space-y-2">
            <div className="">
              <Logo theme="dark" />
            </div>
            <p className="body-22 text-neutral-200">
              A stunning digital designer portfolio website template for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socialLinksArr.map((link) => (
              <motion.a
                variants={slideUpAnimationVariant}
                href={link.url}
                key={link.title}
              >
                <ThemeButton
                  variant="outline"
                  withIcon={false}
                  className="w-full border-neutral-600 hover:bg-neutral-700"
                >
                  {link.title}
                </ThemeButton>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-40">
          <motion.div
            variants={popUpAnimationVariant}
            className="flex flex-col gap-8 lg:col-span-2"
          >
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
          </motion.div>
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
          <motion.svg
            variants={popUpAnimationVariant}
            className="inline-block text-neutral-200 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.237.589a1.75 1.75 0 0 0-2.474 0L8.296 3.056h-3.49a1.75 1.75 0 0 0-1.75 1.75v3.489L.59 10.763a1.75 1.75 0 0 0 0 2.474l2.468 2.468v3.489c0 .966.783 1.75 1.75 1.75h3.488l2.468 2.467a1.75 1.75 0 0 0 2.474 0l2.468-2.468h3.49a1.75 1.75 0 0 0 1.75-1.75v-3.489l2.466-2.467a1.75 1.75 0 0 0 0-2.474l-2.466-2.467v-3.49a1.75 1.75 0 0 0-1.75-1.75h-3.49z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
        </div>
      </div>
    </motion.footer>
  );
}
