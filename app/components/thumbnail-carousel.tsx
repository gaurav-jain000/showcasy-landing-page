import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    client_name: "Toby Brossman",
    content:
      "Working with Ivan was an absolute pleasure. His ability to translate abstract ideas into stunning visuals exceeded my expectations. From start to finish, Ivan maintained clear communication and delivered outstanding results ahead of schedule. I look forward to collaborating with him again.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=120&h=120&fit=crop",
    client_profession: "Founder of Pipefy",
  },
  {
    client_name: "Richard Jonas",
    content:
      "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Ivan for anyone looking for a talented and professional designer.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=120&h=120&fit=crop",
    client_profession: "CEO of Teamwork",
  },
  {
    client_name: "Fredy Jonathan",
    content:
      "Ivan's design work completely transformed the way our product is perceived by customers. His fresh perspective and refined aesthetics helped us elevate our brand image. I appreciate his patience, insight, and commitment throughout the process.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&fit=crop",
    client_profession: "CEO of Dojo",
  },
  {
    client_name: "Nina Patel",
    content:
      "Ivan brought a rare mix of technical understanding and creative flair to our Django project. His designs improved user engagement noticeably, and his ability to iterate on feedback quickly kept our timelines on track.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=120&h=120&fit=crop",
    client_profession: "Manager at Django",
  },
  {
    client_name: "Lucas Meyer",
    content:
      "Exceptional work! Ivan understood our goals at Portal from day one and crafted visuals that felt both modern and functional. I appreciated his clear communication and ability to deliver under tight deadlines.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=120&h=120&fit=crop",
    client_profession: "Co-Founder of Portal",
  },
  {
    client_name: "Eleanor Briggs",
    content:
      "We were thoroughly impressed by Ivan's professionalism and eye for detail. His designs for Rackspace gave our platform a fresh, contemporary look while staying aligned with our brand identity.",
    client_avatar_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&fit=crop",
    client_profession: "Director at Rackspace",
  },
];

export function ThumbnailCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !api2) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      api2.scrollTo(api.selectedScrollSnap());
    });

    api2.on("select", () => {
      api.scrollTo(api2.selectedScrollSnap());
      setCurrent(api2.selectedScrollSnap() + 1);
    });
  }, [api, api2]);

  return (
    <div className="max-w-[800px] mx-auto space-y-4 md:space-y-10">
      <Carousel
        setApi={setApi}
        plugins={[Fade()]}
        opts={{ loop: true, align: "center" }}
      >
        <CarouselContent>
          {testimonials
            .map((testimonial) => testimonial.content)
            .map((testimonial_content) => (
              <CarouselItem key={testimonial_content}>
                <p className="body-22 text-center max-sm:line-clamp-5">
                  {testimonial_content}
                </p>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        setApi={setApi2}
        opts={{ loop: true, align: "center" }}
        className="mask-l-from-80% mask-r-from-80% max-w-[550px]! mx-auto"
      >
        <CarouselContent>
          {testimonials
            .map((testimonial) => {
              const { content, ...rest } = testimonial;
              return rest;
            })
            .map((testimonial, t_index) => (
              <CarouselItem
                key={testimonial.client_name}
                className={`basis-1/2 sm:basis-1/3 py-8 ${
                  current !== t_index + 1 ? "cursor-pointer" : null
                }`}
                onClick={() => {
                  api?.scrollTo(t_index);
                  api2?.scrollTo(t_index);
                }}
              >
                <div
                  className={`flex flex-col items-center size-full gap-4 text-center duration-300 ${
                    current !== t_index + 1
                      ? "opacity-25 hover:opacity-100"
                      : null
                  }`}
                >
                  <div
                    className={`bg-neutral-300 rounded-full duration-400 size-16 overflow-hidden ${
                      current === t_index + 1 ? "scale-100" : "scale-80"
                    }`}
                  >
                    <img
                      src={testimonial.client_avatar_url}
                      alt={testimonial.client_name}
                      className="size-full object-cover"
                    />
                  </div>
                  <strong className="body-18 font-semibold">
                    {testimonial.client_name}
                  </strong>
                  <span className="body-18 text-neutral-500 max-sm:px-2">
                    {testimonial.client_profession}
                  </span>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
