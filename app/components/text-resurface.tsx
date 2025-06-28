import { motion } from "framer-motion";

export default function TextResurface({
  children,
  delay = 0.0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span className={`inline-block relative ${className}`}>
      <span className="opacity-0">{children}</span>
      <motion.span
        variants={{
          initial: {
            y: "101%",
          },
          animate: {
            transition: {
              duration: 0.6,
              delay: 0.4 + delay,
              type: "spring",
            },
            y: "0%",
          },
        }}
        className="absolute inset-0 -z-10"
      >
        {children}
      </motion.span>
      <span className="absolute inset-0 translate-y-[calc(100%+0.1em)] bg-white -z-10" />
    </motion.span>
  );
}
