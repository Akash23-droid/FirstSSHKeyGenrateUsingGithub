"use client";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const sendData = {
    name: "AKash Meena",
    Job: "Software Engineer",
  };
  // const handleClick = async () => {
  //   const data = await fetch("/api/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(sendData),
  //   });
  //   const res = await data.json();
  //   console.log("res : ", res);
  // };
  const handleGetReq = async () => {
    try {
      const response = await fetch("/api/add", { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  const handleClick = async () => {
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log("res : ", res);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      {/* {<Script id="my-script">{`alert("Home Page!!!")`}</Script>} */}

      <div style={{ backgroundColor: "gray" }} className="container mx-auto">
        <Image
          src="https://codehalweb.com/wp-content/uploads/2023/10/thumbnail.jpg"
          width={700}
          height={700}
          alt="blah"
          className="mx-auto object-fill"
        />
        <p>Home Page</p>
        <p>Get Data : </p>
        <button onClick={handleClick}>Fetch Data</button>
        <button onClick={handleGetReq}>Get Data</button>
      </div>
    </div>
  );
}
