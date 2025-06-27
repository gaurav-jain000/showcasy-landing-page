import { RightArrowIcon, TopRightArrowIcon } from "~/components/icons";
import type { Route } from "./+types/home";
import { ThemeButton } from "~/components/theme-buttons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { ThumbnailCarousel } from "~/components/thumbnail-carousel";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  popUpAnimationVariant,
  slideLeftAnimationVariant,
  slideUpAnimationVariant,
} from "~/lib/animations";

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
      {/* Hero section */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y gap-2 grid place-items-center"
      >
        <div className="flex flex-col gap-2">
          <span className="body-28 font-medium">Hello, I&apos;m Ivan.</span>
          <h1 className="theme-h1 flex-wrap gap-x-[1em] font-bold">
            Designing digital product with emphasis on{" "}
            <motion.span
              variants={slideLeftAnimationVariant}
              className=" text-neutral-400 inline-block"
            >
              visual
            </motion.span>{" "}
            <motion.span
              variants={slideLeftAnimationVariant}
              className=" text-neutral-400 inline-block"
            >
              design
            </motion.span>
          </h1>
          <div className="flex sm:items-end justify-between gap-6 pt-4 md:pt-8 max-sm:flex-col-reverse">
            <motion.div
              variants={popUpAnimationVariant}
              initial="initial"
              animate="animate"
              className=""
            >
              <ThemeButton className="body-22 font-semibold">
                Let&apos;s Talk
              </ThemeButton>
            </motion.div>
            <motion.p
              variants={slideLeftAnimationVariant}
              className="text-neutral-700 body-22"
            >
              A multidisciplinary designer harnessing the power of design to{" "}
              <br className="hidden lg:block" />
              achieve online goals.
            </motion.p>
          </div>
        </div>
      </motion.section>
      {/* Selected Works */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y"
      >
        <div className="flex items-center justify-between mb-9 w-full">
          <motion.h2 variants={slideUpAnimationVariant} className="theme-h5">
            Selected Works
          </motion.h2>
          <ThemeButton
            variant="outline"
            className="max-sm:hidden body-16 font-semibold"
          >
            View All Works
          </ThemeButton>
        </div>
        <div className="grid gap-8 lg:gap-10">
          {[
            {
              title: "Sportly",
              featured_img_url: "/works/image%208.webp",
              category: "Mobile App Design",
              full_page_url: "/",
            },
            {
              title: "Payrole",
              featured_img_url: "/works/payrole%201.webp",
              category: "Website Design",
              full_page_url: "/",
            },
            {
              title: "Wepay",
              featured_img_url: "/works/image%2010.webp",
              category: "Mobile App Design",
              full_page_url: "/",
            },
            {
              title: "Estatery",
              featured_img_url: "/works/Estatery%201.webp",
              category: "Website Design",
              full_page_url: "/",
            },
          ].map((work) => (
            <motion.div
              variants={popUpAnimationVariant}
              initial="initial"
              whileInView={"animate"}
              viewport={{ margin: "-200px 0px -200px 0px" }}
              className="flex flex-col gap-5"
              key={work.title}
            >
              <div className="aspect-[1.28/1] lg:aspect-[2.06/1] bg-gradient-to-br from-neutral-100 to-neutral-200 w-full rounded-2xl overflow-hidden">
                <img
                  src={work.featured_img_url}
                  alt={work.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="space-y-2">
                  <h3 className="body-22 font-semibold">{work.title}</h3>
                  <p className="body-18 text-neutral-500">{work.category}</p>
                </div>
                <Link to={work.full_page_url}>
                  <ThemeButton variant="outline" withIcon={false}>
                    <RightArrowIcon className="size-[1.5em]!" />
                  </ThemeButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <ThemeButton
          variant="outline"
          className="sm:hidden body-16 font-semibold mt-8 w-full"
        >
          View All Works
        </ThemeButton>
      </motion.section>
      {/* About Me */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y flex items-end"
      >
        <div className="flex flex-col gap-8">
          <motion.h2
            variants={popUpAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-200px 0px -200px 0px" }}
            className="theme-h2"
          >
            {"A visual designer focused on creating emotional digital experience"
              .split(" ")
              .map((word, w_index) => (
                <span className="inline-block" key={word + w_index}>
                  {word.split("").map((letter, l_index) => (
                    <motion.span
                      variants={slideUpAnimationVariant}
                      viewport={{ margin: "-200px 0px -200px 0px" }}
                      className="inline-block"
                      key={letter + l_index}
                    >
                      {letter === " " ? <>&nbsp;</> : letter}
                    </motion.span>
                  ))}
                  &nbsp;
                </span>
              ))}
          </motion.h2>
          <motion.p
            variants={slideUpAnimationVariant}
            className="body-18 text-neutral-600 max-w-[700px]"
          >
            Concentrate on your primary objective which is expanding your
            business, and leave it to me to ensure that your business is
            efficiently portrayed in the digital realm and distinguishes itself
            from the rivals.
          </motion.p>
          <ul className="grid grid-cols-2 gap-y-6 sm:hidden">
            {["UIUX", "BRANDING", "MOBILE APP", "WEBSITE DESIGN"].map(
              (skill) => (
                <motion.li
                  variants={slideUpAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ margin: "-100px 0px -100px 0px" }}
                  key={skill}
                  className="text-neutral-500 whitespace-nowrap even:text-end"
                >
                  {skill}
                </motion.li>
              )
            )}
          </ul>
          <ThemeButton
            variant="outline"
            className="body-16 font-semibold sm:w-fit"
          >
            About Me
          </ThemeButton>
        </div>
        <ul className="flex flex-col items-end gap-5 max-sm:hidden">
          {["UIUX", "BRANDING", "MOBILE APP", "WEBSITE DESIGN"].map((skill) => (
            <motion.li
              variants={slideLeftAnimationVariant}
              key={skill}
              className="text-neutral-500 whitespace-nowrap"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>
      {/* Clients/Brands Logos Section */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="uni-padding-y"
      >
        <Carousel
          plugins={[AutoScroll({ stopOnInteraction: false })]}
          opts={{ loop: true }}
        >
          <CarouselContent className="-ml-6 lg:-ml-16">
            {[
              "/client-logos/Django.png",
              "/client-logos/DojoToolkit.png",
              "/client-logos/Pipefy.png",
              "/client-logos/Portal.png",
              "/client-logos/Rackspace.png",
              "/client-logos/Teamwork.png",
            ].map((client_logo) => (
              <CarouselItem
                key={client_logo}
                className="pl-6 lg:pl-16 basis-1/3 md:basis-1/4 xl:basis-1/6"
              >
                <div className="size-full grid place-items-center">
                  <img
                    src={client_logo}
                    alt={client_logo}
                    className="h-18! w-auto! object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
            {[
              "/client-logos/Django.png",
              "/client-logos/DojoToolkit.png",
              "/client-logos/Pipefy.png",
              "/client-logos/Portal.png",
              "/client-logos/Rackspace.png",
              "/client-logos/Teamwork.png",
            ].map((client_logo) => (
              <CarouselItem
                key={client_logo}
                className="pl-6 lg:pl-16 basis-1/3 md:basis-1/4 xl:basis-1/6"
              >
                <div className="size-full grid place-items-center">
                  <img
                    src={client_logo}
                    alt={client_logo}
                    className="h-18! w-auto! object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.section>
      {/* Testimonials */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y relative"
      >
        {/* <div className="absolute size-16 border-t-2 border-s-2 border-neutral-950 top-0 left-4 md:left-8"></div>
        <div className="absolute size-16 border-b-2 border-e-2 border-neutral-950 bottom-0 right-4 md:right-8"></div> */}
        <ThumbnailCarousel />
      </motion.section>
      {/* Awards & Recognition */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y grid md:grid-cols-3 max-md:gap-y-10"
      >
        <div className="flex flex-col justify-between">
          <motion.h2 variants={slideLeftAnimationVariant} className="theme-h5">
            Awards & <br className="max-md:hidden" /> Recognition
          </motion.h2>
          {/* <p className="body-14 text-neutral-400">
            Started in 2020 and here <br /> I am now...
          </p> */}
        </div>
        <div className="md:col-span-2 space-y-6">
          {[
            {
              id: "ar-101",
              title: "Honorable Mention",
              desc: "2022 - Awwards",
            },
            {
              id: "ar-102",
              title: "Site of The Day",
              desc: "2022 - CSS Winners",
            },
            {
              id: "ar-103",
              title: "Best UI Design",
              desc: "2022 - CSS Design Awards",
            },
            {
              id: "ar-104",
              title: "Site of The Day",
              desc: "2022 - Awwards",
            },
          ].map((ar) => (
            <motion.div
              variants={popUpAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-50px 0px -50px 0px" }}
              className="flex items-center justify-between border-b border-neutral-200 pb-6"
              key={ar.id}
            >
              <div className="">
                <h3 className="body-22 font-semibold">{ar.title}</h3>
                <p className="body-18 text-neutral-700">{ar.desc}</p>
              </div>
              <ThemeButton className="" variant="secondary" withIcon={false}>
                <TopRightArrowIcon className="" />
              </ThemeButton>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Insights */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="maximus uni-padding-y"
      >
        <div className="flex items-center justify-between mb-9 w-full">
          <h2 className="theme-h5">Insights</h2>
          <ThemeButton
            variant="outline"
            className="max-sm:hidden body-16 font-semibold"
          >
            View All Insights
          </ThemeButton>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              title:
                "Mastering the Art of Color Theory: A Visual Designer's Guide",
              featured_img_url:
                "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
              full_page_url: "/",
            },
            {
              title:
                "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
              featured_img_url:
                "https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Explore the realm of user experience (UX) design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive and engaging for users.",
              full_page_url: "/",
            },
            {
              title:
                "The Power of Typography in Visual Design: Enhancing Communication and Impact",
              featured_img_url:
                "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions. This blog post will cover typography fundamentals, font pairing, contrasts, and much more.",
              full_page_url: "/",
            },
          ].map((insight) => (
            <Link to={insight.full_page_url} key={insight.title}>
              <motion.div
                variants={popUpAnimationVariant}
                viewport={{ margin: "-100px 0px -100px 0px" }}
                className="flex flex-col gap-5"
              >
                <div className="aspect-[1.05/1] md:aspect-[1/1.21] bg-gradient-to-br from-neutral-100 to-neutral-200 w-full rounded-2xl overflow-hidden">
                  <img
                    src={insight.featured_img_url}
                    alt={insight.title}
                    className="size-full object-cover"
                  />{" "}
                </div>
                <div className="flex gap-2 flex-col">
                  <h3 className="body-22 font-semibold line-clamp-3 pe-4">
                    {insight.title}
                  </h3>
                  <p className="body-18 text-neutral-700 line-clamp-2">
                    {insight.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <ThemeButton
          variant="outline"
          className="sm:hidden body-16 font-semibold mt-8 w-full"
        >
          View All Insights
        </ThemeButton>
      </motion.section>
      {/* Let's rock together section */}
      <motion.section
        variants={slideUpAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-200px 0px -200px 0px" }}
        className="uni-padding-y border-t border-neutral-200"
      >
        <div className="maximus flex flex-col gap-6 items-center text-center">
          <motion.span
            variants={slideUpAnimationVariant}
            className="body-28 font-medium block"
          >
            Have an Idea?
          </motion.span>
          <motion.h2 variants={slideUpAnimationVariant} className="theme-h1">
            Let&apos;s rock <span className="text-neutral-400">together</span>
          </motion.h2>
          <div className="flex items-center gap-10 max-w-fit pt-8">
            {[
              {
                title: "ABOUT ME",
                url: "/",
              },
              {
                title: "WORKS",
                url: "/",
              },
              {
                title: "INSIGHTS",
                url: "/",
              },
            ].map((link) => (
              <Link
                to={link.url}
                key={link.title}
                className="underline body-14 font-medium hover:text-neutral-400 duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
