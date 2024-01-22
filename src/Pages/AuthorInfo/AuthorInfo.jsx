import { useEffect, useState } from "react";
import AuhtorDetails from "./AuhtorDetails";

const AuthorInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/author")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-5xl font-semibold text-center text-slate-600 my-7">Our chef Master Infomation</h1>
      <div className=" gap- md:gap-5 grid grid-cols-2 md:grid-cols-6 m-6 md:m-4  md:p-5">
        {info.map((authorInfo) => (
          <AuhtorDetails
            key={authorInfo.index + 1}
            authorInfo={authorInfo}
          ></AuhtorDetails>
        ))}
      </div>
    </div>
  );
};

export default AuthorInfo;
