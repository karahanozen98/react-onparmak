import {} from "bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { Button, Alert } from "reactstrap";
import "./Exercise.css";

function Exercise() {
  const [visibility, setVisibility] = useState("hidden");
  const [color, setColor] = useState("white");
  const [input, _setInput] = useState("");
  const [text, _setText] = useState(
    "aaaa ssss dddd dddd ffff aaaaa ssss dddd fff aaa sssssss dddd ffff aaaaa"
  );
  const [isListening, setListening] = useState(false);

  // When using React hooks with an event listener,
  // your event listener callback cannot access the latest state.
  // We can incorporate useRef to solve this problem.
  const inputRef = useRef(input);
  const textRef = useRef(text);

  const setInput = (nextState) => {
    inputRef.current = nextState;
    _setInput(inputRef.current);
  };
  const setText = (nextState) => {
    textRef.current = nextState;
    _setText(textRef.current);
  };

  useEffect(() => {
    if (isListening) window.addEventListener("keydown", keyListener);
    else window.removeEventListener("keydown", keyListener);

    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, [isListening]);

  function keyListener(event) {
    let tmpInput = inputRef.current;
    let tmpText = textRef.current;
    const nextChar = tmpText[0];

    if (nextChar) {
      if (nextChar === event.key) {
        tmpInput += event.key;
        tmpText = tmpText.substring(1, text.length);
        console.log(tmpText.length);

        setInput(tmpInput);
        setText(tmpText);

        setColor("white");
      } else {
        setColor("red");
      }
    } else {
        setVisibility("visible");
    }
  }

  return (
    <div>
      <Button color="success" onClick={() => setListening(true)}>
        Başlat
      </Button>
      <Button color="warning" onClick={() => setListening(true)}>
        Yenile
      </Button>
      <Button color="danger" onClick={() => setListening(false)}>
        Durdur
      </Button>
      <div style={{ visibility: visibility }}>
        <Alert>Eğitim tamamlandı</Alert>
      </div>
      <span style={{ background: color }}>
        <strong style={{ background: "yellow" }}>{input}</strong>
        {text}
      </span>
    </div>
  );
}

export default Exercise;
