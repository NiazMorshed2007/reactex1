import React, { useState } from "react";

function Link() {
  const [active, setActive] = useState(0);

  const arr = ["sdfj", "fjh", "sajhf", "ssagf"];
  return (
    <div>
      {arr.map((e, i) => (
        <p
          className={active === i ? "active" : ""}
          key={i}
          onClick={() => setActive(i)}
        >
          {e}
        </p>
      ))}
      test
    </div>
  );
}

export default Link;
