import React, { useState, useEffect, useContext } from "react";
import { CardProvider } from "../source/card";
import { SentencesProvider } from "../source/middleText";
import Fb from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import Logo from "../component/Logo";
import Text from "../component/Text";
import Button from "../component/Button";
import CardWrapper from "../component/Card";
import CardViewer from "../component/CardViewer";
import Sentences from "../component/Sentences";
import CardGridWrapper from "../component/CardGrid";
import Background from "../component/Background";
import { UserContext } from "../source/user";

const Left = () => {
  return (
    <>
      TAKE YOUR <br /> <strong>FREEDOM</strong> AND <strong>ENJOY</strong>
    </>
  );
};

const Middle = () => {
  return (
    <>
      BE <strong>CONSIESE</strong> AND TAKE <br />
      <strong>CONTROL</strong> OF IT
    </>
  );
};

const Right = () => {
  return (
    <>
      YOUR <strong>FIRST</strong> <br />
      <strong>INTERNET</strong> PROVIDER
    </>
  );
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [current, setCurrent] = useState("");
  const [user, id] = useContext(UserContext);

  // async function to fetch data from db
  async function fetchServices() {
    const db = getDatabase(Fb); // get db
    const data = ref(db, "services"); // fetch data from services path

    // get the value of data and set it
    // services and current
    onValue(data, function (snapshot) {
      const values = snapshot.val();
      setServices(values);
      setCurrent(values[0].id);
    });
  }

  // fetch services data from firebaes
  useEffect(() => {
    fetchServices();

    return () => {
      setServices([]);
      setCurrent("");
    };
  }, []);

  return (
    <>
      <Background
        position="z-20 left-0"
        translateX={-12}
        translateY={20}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0 z-20"
        translateX={9}
        translateY={10}
        divideX={600}
        divideY={400}
      />
      <Background
        position="left-0 "
        translateX={10}
        translateY={90}
        divideX={700}
        divideY={700}
      />
      <Background
        position="right-0"
        translateX={-12}
        translateY={120}
        divideX={1400}
        divideY={-1100}
      />

      <header className="container mx-auto relative ">
        <Logo />
        <Text left={<Left />} middle={<Middle />} right={<Right />} />
        {id.length === 0 && (
          <Button title={"BECOME MEMBER"} className={"mx-auto font-bold"} />
        )}
      </header>

      <main className={"container mx-auto relative my-20 w-full px-11 "}>
        <CardProvider
          services={services}
          current={current}
          setCurrent={setCurrent}
        >
          <Background
            position=" w-full"
            translateX={33}
            translateY={2}
            typeX={"%"}
            divideX={1000}
            divideY={400}
          />
          <section
            id="cards"
            className={"grid grid-cols-2 gap-9 relative z-10"}
          >
            <CardWrapper className={"grid grid-cols-2 gap-9"} length={2} />
            <CardViewer />
          </section>
        </CardProvider>
        <SentencesProvider>
          <Sentences />
        </SentencesProvider>

        <section className={"w-full"}>
          <div className={"text-center text-light-200"}>
            <h1 className={"font-bold text-4xl mb-2"}>FAVORITE PLAN</h1>
            <span className={"text-2xl"}>Choose Your Style</span>
            <div className={" w-1/2 mx-auto mt-6"}>
              <p className={"font-quicksand text-xl font-medium"}>
                Decide what plan you want to your life and enjoy it. Full
                support from our team. We always ready to give you the best
                interconnection experience with our services.
              </p>
            </div>
          </div>
          <CardProvider services={services}>
            <CardGridWrapper />
          </CardProvider>
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
              from our team. We always ready to give you the best
              interconnection experience with our services.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
