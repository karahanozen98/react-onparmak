import {} from "bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { Button, Alert } from "reactstrap";
import "./Exercise.css";

function Exercise(props) {
  const [color, setColor] = useState("#fff");
  const [input, _setInput] = useState("");
  const [text, _setText] = useState("aaa sss dddd ffff");
  const [isListening, setListening] = useState(false);
  const [time, setTime] = useState(null);
  const [error, setError] = useState(null);

  let exerciseObj = useRef({ startTime: null, endTime: null, errors: 0 });

  // When using React hooks with an event listener,
  // your event listener callback cannot access the latest state!!!.
  // We can incorporate useRef to solve this problem like below.
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
    //eslint-disable-next-line
  }, [isListening]);

  function keyListener(event) {
    event.preventDefault();
    let tmpInput = inputRef.current;
    let tmpText = textRef.current;
    const currentChar = tmpText[0];
    if (currentChar === event.key) {
      tmpInput += event.key;
      tmpText = tmpText.substring(1, text.length);
      setInput(tmpInput);
      setText(tmpText);
      setColor("#fff");
    } else {
      setColor("#dc3545");
      exerciseObj.current.errors++;
    }
    if (tmpText.length <= 0) {
      stopExercise();
      exerciseObj.current.endTime = new Date();
      const diff =
        (exerciseObj.current.endTime.getTime() -
          exerciseObj.current.startTime.getTime()) /
        1000;
      setTime(diff);
      setError(exerciseObj.current.errors);
    }
  }
  const startExercise = () => {
    document.getElementById("btnStart").blur();
    setListening(true);
    setTime(null);
    exerciseObj.current = { startTime: new Date(), errors: 0, endTime: null };
  };
  const stopExercise = () => {
    setColor("#fff");
    setText(input + text);
    setInput("");
    setListening(false);
  };

  return (
    <div className="exercise">
      <Button
        id="btnStart"
        disabled={isListening}
        color="success"
        onClick={startExercise}
      >
        Başlat
      </Button>

      <Button disabled={!isListening} color="danger" onClick={stopExercise}>
        Durdur
      </Button>
      <Alert className={time ? "alert-visible" : "alert-hidden"}
        color={time <= 60 && error <= 3 ? "success" : "danger"}
      >
        <span>
          {"Tamamlandı " + Math.floor(time) + " saniye " + error + " hata"}
        </span>
        <Button
          style={{ float: "right" }}
          color="danger"
          onClick={() => setTime(null)}
        >
          Kapat
        </Button>
      </Alert>
      <div className="exercise-text" style={{ background: color }}>
        <strong style={{ background: "#d4edda" }}>{input}</strong>
        {text}
      </div>
    </div>
  );
}
export default Exercise;
