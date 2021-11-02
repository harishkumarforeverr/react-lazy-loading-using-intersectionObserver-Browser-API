import React from "react";
import imageData from "./imageData";
import ImageRenderer from "./ImageRenderer";
const App = () => {
  return (
    <div>
      <h1> Lazy load Images </h1>
      <section>
        {imageData.map((data) => {
          return (
            <ImageRenderer
              key={data.key}
              url={data.url}
              thumb={data.thumbnail}
              width={data.width}
              height={data.height}
            />
          )
        })}
      </section>
    </div>
  )
}
export default App;