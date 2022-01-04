import { useEffect } from "react";

const Text = ({ left, middle, right }) => {
  // use effect to gave the <strong> tag 'text-dark' class
  useEffect(() => {
    const span = document.querySelectorAll("#text");
    span.forEach((item) => {
      const strong = Object.values(item.children);
      strong.forEach((tag) => (tag.className += "text-light-200 font-black"));
    });
  });

  return (
    <section className="relative flex items-center">
      <div className="absolute z-0 flex font-raleway text-3xl w-full justify-center space-x-16">
        <div className="text-left text-red-100">
          <span id="text">{left}</span>
        </div>
        <div className="text-center text-red-100">
          <span id="text">{middle}</span>
        </div>
        <div className="text-right text-red-100">
          <span id="text">{right}</span>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-5 w-full h-36">
        <span
          className={"w-full col-span-2 trans bg-gradient-to-r from-dark"}
        />
        <span></span>
        <span className={"w-full col-span-2 bg-gradient-to-l from-dark"} />
      </div>
    </section>
  );
};

export default Text;
