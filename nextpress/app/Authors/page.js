"use client"

import { useEffect, useState } from "react";
// import Image from "next/image";

const Page = () => {

  // As we don't have a single folder for listing all the authors but they are listed separately
  // and after checking at the details on users folders I can see they are 3 of them
  // however for better efficiency and reusability of the code it will be better to list all the authors(users) in a single JSON folder
  // this will facilitate adding new authors and also easier to show them to the UI.

  const [authorStore, setAuthorStore] = useState([]);

  const fetchApi = async () => {
    const combinedData = [];
    try {
      const auth1 = await fetch(
        `https://retrocket.github.io/retrocketeer-api/users/${1}.json`
      );
      const auth1Res = await auth1.json();
      const auth2 = await fetch(
        `https://retrocket.github.io/retrocketeer-api/users/${2}.json`
      );
      const auth2Res = await auth2.json();
      const auth3 = await fetch(
        `https://retrocket.github.io/retrocketeer-api/users/${3}.json`
      );
      const auth3Res = await auth3.json();

      combinedData.push(auth1Res, auth2Res, auth3Res);
      setAuthorStore(combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []); // Empty dependency array means this effect runs once after the initial render

// console.log(authorStore)

  return (
    <div>
      <h2 className="Font-bold text-2xl">All authors</h2>
      <div className="">
        <ul>
          {authorStore.map((author) => (
            <li className="" key={author.id}>
              <p>{author.name}</p>
              <p>{author.surname}</p>
              <img
                src={`https://retrocket.github.io/retrocketeer-api${author.featured_image_url}`}
                width={500}
                height={500}
                alt={`Picture of ${author.name}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
