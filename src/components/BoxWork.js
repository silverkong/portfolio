import React from "react";
import "../css/components/BoxWork.css";

//////////////////
// import image //
//////////////////
import ImgWorkTripchain from "../images/img_work_tripchain.png";
import ImgWorkGreenvibe from "../images/img_work_greenvibe.png";
import ImgWorkFitnance from "../images/img_work_fitnance.png";

const BoxWork = () => {
  const work = [
    {
      title: "Tripchain",
      subtitle: "Services to record travel more fun and sell as NFTs",
      src: ImgWorkTripchain,
    },
    {
      title: "greenvibe",
      subtitle:
        "A service that certifies eco-friendly activities and receives tokens",
      src: ImgWorkGreenvibe,
    },
    {
      title: "fit:nance",
      subtitle:
        "Financial product recommendation service using personalized recommendation algorithms and chatbots",
      src: ImgWorkFitnance,
    },
  ];
  return (
    <div className="wrap-box-work">
      {work.map((value) => (
        <div className="box-work">
          <img className="img-work" src={value.src} alt={value.title} />
          <div className="box-work-content">
            <h3>{value.title}</h3>
            <p>{value.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxWork;
