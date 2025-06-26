import { popUpAnimationVariant } from "~/lib/animations";
import { TopRightArrowIcon } from "./icons";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function StayConnected({ className }: { className?: string }) {
  return (
    <motion.div
      variants={popUpAnimationVariant}
      className={`flex flex-col gap-2 sm:gap-4 ${className}`}
    >
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
    </motion.div>
  );
}
