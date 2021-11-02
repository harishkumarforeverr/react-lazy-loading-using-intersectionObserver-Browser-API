import React, { useRef, useState } from "react";
import classNames from "classnames";
import useIntersection from "./intersectionObserver";
import "./imageRenderer.css";


const ImageRenderder = ({ url, thumb, width, height }) => {
    const [isInView, setisInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setisInView(true);
    })
    return (
        <div
            className="image-container"
            ref={imgRef}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: "100%"
            }}
        >
            {isInView && <img
                className="image"
                src={url}
            />}
        </div>
    )
}
export default ImageRenderder;