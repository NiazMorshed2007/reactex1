import React, { useState } from "react";

function Link() {
  const [ac, setAc] = useState(false);
  const [index, setIndex] = useState(0);

  function toggleAc(elem) {
    elem === index ? setAc(true) : setAc(false);
    console.log(elem);
  }

  function setIndexFunc(elem) {
    setIndex(elem);
  }

  const spanArr = ["something", "anything", "thatThing", "thisThing"];

  function Span({ title, index }) {
    return (
      <span
        onClick={() => toggleAc(index)}
        cngIndex={() => setIndexFunc(index)}
        className={ac ? "nav-link active" : "nav-link"}
      >
        {title}
      </span>
    );
  }

  return (
    <>
      {spanArr.map((e, i) => (
        <Span title={e} index={i} />
      ))}
    </>
  );
}

export default Link;
