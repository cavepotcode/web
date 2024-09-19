import { useEffect, useState } from "react";
import "./Numbers.scss";

export function NumberElement({ element }) {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            counter(element.number);
            return;
          }
        });
      });

    const el = document.querySelectorAll("#numbers #element-" + element.number);
    el.forEach((item) => {
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, [count, element.number]);

  function counter(max) {
    setTimeout(() => {
      if (count < max) {
        setCount(count + 1);
      }
    }, 1 / max);
  }

  return (
    <div className="element">
      <p className="element-number" id={"element-" + element.number}>
        {count}
        {element.plus && <span className="plus">+</span>}
      </p>
      <div className="element-title">
        <label>{element.title}</label>
      </div>
      <div className="element-text">
        <label>{element.text}</label>
      </div>
    </div>
  );
}
