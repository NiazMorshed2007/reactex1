import React, { useState, useRef } from "react";
import "./style/style.scss";
import Link from "./components/Link";

function App() {
  const img = [
    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  const [curr, setCurr] = useState(1);
  const looping = useRef(false);

  var slides = looping.current.childNodes;

  console.log(slides);

  const next = () => {
    if (curr < img.length - 1) {
      setCurr(curr + 1);
    }
  };

  const prev = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };

  const loop = () => {
    if (curr === img.length - 1) {
      setCurr(1);
    }
    if (curr === 0) {
      setCurr(img.length - 2);
    }
  };

  return (
    <>
      <div className="section-1">
        <h2>A react Slider</h2>
        <div className="slider">
          <div
            ref={looping}
            onTransitionEnd={loop}
            className="inner-slide"
            style={{ transform: `translateX(-${600 * curr}px)` }}
          >
            {img.map((e, i) => (
              <div key={i} className="slide">
                <img src={e} alt="" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={next}>Next</button>
        <button onClick={prev}>Prev</button>
      </div>
      <div className="section-2">
        <Link />
      </div>
    </>
  );
}

export default App;
