import { useEffect } from "react";
import { BsChatQuote } from "react-icons/bs";
import ScrollReveal from "scrollreveal";

const Quote = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".icon", { origin: "top" });
    sr.reveal(".quotes", { origin: "bottom" });
    sr.reveal(".by", { origin: "bottom" });
  }, []);
  return (
    <section
      id="skill"
      className="bg-dark2 overflow-hidden px-4 lg:px-28 py-5 relative"
    >
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <div className="icon">
            <BsChatQuote className=" text-6xl text-primary" />
          </div>
          <p className="quotes mt-12 text-3xl max-w-3xl text-center">
            “Don&apos;t ever be afraid to learn everything that you want. U wont
            even die because learning something isn&apos;t it? ”
          </p>
          <small className="by mt-6 text-lg font-thin">
            just some words from this dumb
          </small>
        </div>
      </div>
      <svg className="absolute left-10 top-60" width="100%" height="100%">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="10"
            cy="10"
            r="1.6257413380501518"
            fill="#9e9e9e"
          ></circle>
        </pattern>

        <rect
          id="rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        ></rect>
      </svg>
    </section>
  );
};

export default Quote;
