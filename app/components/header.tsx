import { Link } from "react-router";
import { Button } from "./ui/button";
import { LeftArrowIcon, MenuIcon } from "./icons";
import { ThemeButton } from "./theme-buttons";

export default function Header() {
  return (
    <header className="py-5 flex items-center justify-between maximus">
      <Logo />
      <div className="flex gap-4 items-center">
        <ThemeButton
          className="body-14 font-semibold max-sm:hidden"
          variant="outline"
        >
          Let&apos;s Talk
        </ThemeButton>
        <ThemeButton className="body-14" variant="outline" withIcon={false}>
          <MenuIcon />
        </ThemeButton>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <Link to="/" className="font-bold text-3xl">
      <span className="text-neutral-400">show</span>casy.
    </Link>
  );
}
