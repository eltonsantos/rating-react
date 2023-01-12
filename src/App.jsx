import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#ffba5a",
  gray: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    cursor: "pointer",
  },
};

export function App() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(setCurrentValue(value));
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
    console.log(setHoverValue(newHoverValue));
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
    console.log(setHoverValue(undefined));
  };

  // function handleClick(value) {
  //   setCurrentValue(value);
  //   console.log(setCurrentValue(value));
  // }

  // function handleMouseOver(value) {
  //   setHoverValue(value);
  //   console.log(setHoverValue(value));
  // }

  // function handleMouseLeave() {
  //   setHoverValue(undefined);
  //   console.log(setHoverValue(undefined));
  // }

  function handleSubmit() {}

  return (
    <div style={styles.container}>
      <h2>Star Ratings React</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 10, cursor: "pointer" }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.gray
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Whats is your feedback?"
        style={styles.textarea}
      ></textarea>
      <button style={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
