import React from "react";
import { Button } from "reactstrap";
import ScrollIntoSection from "../ScrollIntoSection/ScrollIntoSection";

function ExerciseList({ exerciseData, currExercise, setExercise }) {
  let timer = 0;

  const handleClick = (exercise) => {
    setExercise(exercise);
    const docID = "btnStartExercise";

    // if doc is already in the dom just scroll into it
    if (document.getElementById(docID)) {
      ScrollIntoSection(docID);
    }
    // if doc is not loaded yet
    else {
      const checkIfDomElementExist = () => {
        if (timer < 2000) {
          // give the dom 2 seconds to paint the element
          // if elemenet loaded stop interval and sroll into the element
          if (document.getElementById(docID)) {
            stopTimer();
            ScrollIntoSection("btnStartExercise");
          }
        } else {
          // time is exceeded, stop interval
          stopTimer();
        }
        timer += 50;
      };
      // initialize interval variable
      const myInterval = setInterval(checkIfDomElementExist, 50);

      // clear inteval function
      const stopTimer = () => {
        clearInterval(myInterval);
      };
    }
  };
  const decideColor = (exercise) => {
    if (currExercise) if (currExercise.id === exercise.id) return "primary";
    if (exercise.isCompleted) return "success";
    else return "dark";
  };

  return (
    <div className="home-row-2">
      {exerciseData.map((category) => {
        return (
          <div key={category.id} className="home-exercises">
            <h5>{category.type}</h5>
            <ul className="home-exercises-ul">
              {category.data.map((exercise) => {
                return (
                  <li key={exercise.id}>
                    <Button
                      color={decideColor(exercise)}
                      onClick={() => handleClick(exercise)}
                    >
                      {exercise.name}
                    </Button>
                    <span className="home-exercises-span">
                      {exercise.description}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ExerciseList;
