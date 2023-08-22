import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useCallback } from "react";
import ImagesZoom from "./imagesZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        {/* role="presentation" 스크린리더가 클릭할 수 있지만 반드시 클릭할 필요 없음을 알려 줌 */}
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        {/* role="presentation" 스크린리더가 클릭할 수 있지만 반드시 클릭할 필요 없음을 알려 줌 */}
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          style={{ width: "50%" }}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            width: "50%",
            textAlign: "center",
            margin: "auto",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </div>
    </>
  );
};

export default PostImages;
