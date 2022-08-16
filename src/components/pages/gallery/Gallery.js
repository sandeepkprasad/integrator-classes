import React, { useState } from "react";
import "./Gallery.css";
import { CgCloseR } from "react-icons/cg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: "/images/gallery/g1.jpg",
    },
    {
      id: 2,
      imgSrc: "/images/gallery/g2.jpg",
    },
    {
      id: 3,
      imgSrc: "/images/gallery/g3.png",
    },
    {
      id: 4,
      imgSrc: "/images/gallery/g4.png",
    },
    {
      id: 5,
      imgSrc: "/images/gallery/g5.png",
    },
    {
      id: 6,
      imgSrc: "/images/gallery/g6.jpg",
    },
    {
      id: 7,
      imgSrc: "/images/gallery/g7.jpg",
    },
    {
      id: 8,
      imgSrc: "/images/gallery/g8.jpg",
    },
    {
      id: 9,
      imgSrc: "/images/gallery/g9.jpg",
    },
    {
      id: 10,
      imgSrc: "/images/gallery/g10.jpg",
    },
    {
      id: 11,
      imgSrc: "/images/gallery/g11.jpg",
    },
    {
      id: 12,
      imgSrc: "/images/gallery/g12.png",
    },
    {
      id: 13,
      imgSrc: "/images/gallery/g13.png",
    },
    {
      id: 14,
      imgSrc: "/images/gallery/g14.png",
    },
    {
      id: 15,
      imgSrc: "/images/gallery/g15.png",
    },
    {
      id: 16,
      imgSrc: "/images/gallery/g16.jpg",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CgCloseR onClick={() => setModel(false)} />
      </div>
      <div className="gallery_container">
        <h1 style={{ textAlign: "center" }}>GALLERY</h1>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
