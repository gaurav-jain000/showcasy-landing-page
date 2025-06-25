import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  CrossIcon,
  RightArrowIcon,
  MenuIcon,
  TopRightArrowIcon,
} from "./icons";
import { ThemeButton } from "./theme-buttons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "./ui/drawer";
import { navLinksArr } from "~/lib/shared";
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Drawer direction="top" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <header
          className="py-5 flex items-center justify-between maximus relative z-50"
          style={{ pointerEvents: "all" }}
        >
          <Logo theme={isMenuOpen ? "dark" : "light"} />
          <div className="flex gap-4 items-center">
            <ThemeButton
              className={`body-14 font-semibold max-sm:hidden ${
                isMenuOpen ? "text-neutral-50! hover:text-neutral-950!" : null
              }`}
              variant="outline"
            >
              Let&apos;s Talk
            </ThemeButton>
            {isMenuOpen ? (
              <DrawerClose>
                <ThemeButton
                  className={`body-14 ${
                    isMenuOpen
                      ? "text-neutral-50! hover:text-neutral-950!"
                      : null
                  }`}
                  variant="outline"
                  withIcon={false}
                >
                  <CrossIcon className="duration-300" />
                </ThemeButton>
              </DrawerClose>
            ) : (
              <DrawerTrigger>
                <ThemeButton
                  className="body-14"
                  variant="outline"
                  withIcon={false}
                >
                  <MenuIcon className="duration-300" />
                </ThemeButton>
              </DrawerTrigger>
            )}
            <DrawerContent className="data-[vaul-drawer-direction=top]:max-h-[100vh] h-screen rounded-none! bg-neutral-950 z-10!">
              <div className="maximus mx-auto w-full mt-20 lg:mt-30 grow flex flex-col gap-4 sm:gap-10 justify-between h-full 2xl:max-h-[777px]!">
                <Separator className="bg-neutral-800" />
                <ul className="flex flex-col gap-4 sm:gap-8 justify-between grow">
                  {navLinksArr.map((link, link_index) => (
                    <li key={link.title}>
                      <DrawerClose asChild>
                        <Link
                          to={link.url}
                          className="theme-h2 text-neutral-50 flex items-center justify-between"
                        >
                          <span>
                            {link.title}{" "}
                            <span className="text-neutral-500 body-22 font-normal">
                              ({(link_index + 1).toString().padStart(2, "0")})
                            </span>
                          </span>
                          <ThemeButton
                            className={`body-14 max-sm:hidden ${
                              isMenuOpen
                                ? "text-neutral-50! hover:text-neutral-950!"
                                : null
                            }`}
                            variant="outline"
                            withIcon={false}
                          >
                            <RightArrowIcon className="text-2xl" />
                          </ThemeButton>
                        </Link>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
                <Separator className="bg-neutral-800" />
                <DrawerFooter className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-40 px-0! py-0 sm:pb-4 grow">
                  <div className="flex flex-col gap-2 sm:gap-4 2xl:justify-between lg:col-span-2">
                    <h3 className="body-22 text-neutral-500 font-semibold">
                      Follow me.
                    </h3>
                    <div className="max-sm:flex max-sm:flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:justify-between gap-y-2 gap-x-8 text-neutral-50">
                      {[
                        { title: "INSTAGRAM", url: "#" },
                        { title: "BEHANCE", url: "#" },
                        { title: "TWITTER", url: "#" },
                        { title: "DRIBBBLE", url: "#" },
                      ].map((link) => (
                        <DrawerClose key={link.title} asChild>
                          <Button
                            variant={"ghost"}
                            asChild
                            className="px-0! size-auto! py-0! hover:bg-trasparent justify-start hover:text-white body-18 font-medium"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer me"
                            >
                              {link.title}
                              <TopRightArrowIcon className="size-[1.6em]" />
                            </a>
                          </Button>
                        </DrawerClose>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-4 2xl:justify-between max-sm:pb-2">
                    <h3 className="body-22 text-neutral-500 font-semibold">
                      Stay connected w/ me.
                    </h3>
                    <div className="">
                      <form className="flex items-center border-b border-b-neutral-50">
                        <input
                          type="text"
                          className="px-0 py-4 placeholder:text-neutral-500 body-14 font-normal text-neutral-50 caret-neutral-200 outline-0 border-0 grow"
                          placeholder="Enter your email"
                        />
                        <Button
                          type="submit"
                          variant="ghost"
                          className="text-white hover:bg-transparent rounded-none size-auto! px-0! py-0!"
                        >
                          <TopRightArrowIcon className="size-[2em]!" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </div>
        </header>
        <DrawerPortal />
        <DrawerOverlay className="hidden z-10!" />
      </Drawer>
    </>
  );
}

export function Logo({
  theme = "light",
  className,
}: {
  theme?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={`font-bold text-3xl ${
        theme === "dark" ? "text-neutral-50" : null
      } ${className}`}
    >
      <span className="text-neutral-400">show</span>casy.
    </Link>
  );
}
