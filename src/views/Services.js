import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import Fb from "../firebase";
import Background from "../component/Background";
import Text from "../component/Text";
import Input from "../component/Input";
import { CardProvider } from "../source/card";
import CardWrapper from "../component/Card";

const Middle = () => {
  return (
    <>
      OUR <strong>SERVICE</strong> ARE <br />
      <strong>THE BEST</strong> ON IT'S <strong>CLASS</strong>
    </>
  );
};

const Services = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);

  // async function to fetch data from db
  async function fetchServices() {
    const db = getDatabase(Fb);
    const data = ref(db, "services");

    onValue(data, function (snapshot) {
      const value = snapshot.val();
      setServices(value);
    });
  }

  // fetch data from db when mounted
  useEffect(() => {
    fetchServices();

    return () => {
      setServices([]);
    };
  }, []);

  function listServices(services) {
    return services.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div style={{ minHeight: 41 + "rem" }}>
      <Background
        position="z-20 left-0"
        translateX={8}
        translateY={14}
        divideX={700}
        divideY={500}
      />
      <Background
        position="right-0 z-20"
        translateX={-12}
        translateY={3}
        divideX={600}
        divideY={400}
      />
      <header className="container mx-auto relative">
        <Text middle={<Middle />} />
        <div className="mx-auto w-80">
          <Input
            type="text"
            placeholder="Search..."
            icon="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <main className="container mx-auto relative mt-10 z-30">
        <CardProvider services={listServices(services)} current={""}>
          <div className="mx-auto w-11/12">
            <CardWrapper className={"grid grid-cols-4 gap-9"} />
          </div>
        </CardProvider>
      </main>
    </div>
  );
};

export default Services;
