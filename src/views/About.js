import Button from "../component/Button";
import Background from "../component/Background";

const About = () => {
  return (
    <div className=" h-full">
      <Background
        position="z-20 left-0"
        translateX={-12}
        translateY={20}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0"
        translateX={9}
        translateY={10}
        divideX={600}
        divideY={400}
      />

      <header className="container mx-auto relative">
        <div className="text-center font font-raleway font-light uppercase text-red-100 text-4xl">
          Who
          <span className=" text-light-200 mx-3 font-bold ">We</span>
          Are?
        </div>
      </header>

      <main className="container mx-auto relative w-full">
        <div className=" w-2/3 text-light-100 mx-auto text-center my-10 font-quicksand ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis pretium libero, vel aliquam nibh ullamcorper quis. Maecenas
          quis nisl sed arcu ultricies tincidunt a sit amet velit. Mauris massa
          magna, faucibus non rhoncus eu, commodo ultrices diam. Cras tellus
          quam, accumsan sit amet varius non, varius in sem. Nullam suscipit
          justo vitae ex ullamcorper, vel blandit orci tempus. Sed semper, nulla
          ac mattis ullamcorper, est lectus hendrerit sem, at porttitor lectus
          tellus non nisi. Pellentesque vitae rhoncus nisl, at condimentum elit.
          Curabitur a lacus ac eros hendrerit luctus. In hac habitasse platea
          dictumst. Proin at mauris ac dui consequat lobortis in sed lectus. Nam
          commodo mauris eu placerat molestie. Maecenas accumsan eleifend sem,
          id condimentum sem efficitur at. Sed aliquet leo elementum erat
          sagittis, sed tempor nisl imperdiet. Morbi ac nunc tincidunt, feugiat
          mauris eget, lacinia justo. Duis vehicula pellentesque tristique.
        </div>

        <div className="w-2/3 text-light-100 mx-auto text-center my-10 font-quicksand ">
          Pellentesque quis accumsan felis. Aenean sem libero, fermentum non
          quam interdum, tristique hendrerit mi. Nam quis finibus nibh, sit amet
          semper erat. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
          sagittis augue a dolor luctus pretium. Cras et scelerisque dolor,
          vitae dignissim orci. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Cras in accumsan risus,
          sed vulputate enim. Etiam sollicitudin lorem nunc, in tempor est
          egestas at.
        </div>

        <div className={"flex text-light-200 space-x-5 mx-auto w-2/5"}>
          <div className={"text-right flex flex-col justify-between"}>
            <span className={"font-bold text-4xl font-raleway "}>
              FULL SUPPORT
            </span>
            <Button
              title={"CONTACT US"}
              icon={"arrow_right_alt"}
              className={"font-bold w-max"}
            />
          </div>
          <p className={"text-lg font-quicksand font-medium"}>
            Decide what plan you want to your life and enjoy it. Full support
            from our team. We always ready to give you the best interconnection
            experience with our services.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
