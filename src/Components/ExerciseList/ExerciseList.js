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
    // if there is a running exercise and if its this exercise then set color
    if (currExercise) if (currExercise.id === exercise.id) return "warning";
    // if exercise is completed
    if (exercise.isCompleted) return "success";
    else return "dark";
  };
  const CategoryWrapper = ({ category }) => (
    <div key={category.id} className="home-exercises">
      <h5>{category.type}</h5>
      <ul className="home-exercises-ul">
        {category.data.map((exercise) => {
          return <ExerciseWrapper exercise={exercise}></ExerciseWrapper>;
        })}
      </ul>
    </div>
  );

  const ExerciseDifficulyt = ({ difficulty }) => {
    let color;
    if (difficulty === "easy") color = "#4CAF50";
    else if (difficulty === "normal") color = "#F3A000";
    else if (difficulty === "hard") color = "#F30000";
    return (
      <div className="exercise-difficulty" style={{ background: color }}></div>
    );
  };

  const ExerciseWrapper = ({ exercise }) => (
    <li key={exercise.id}>
      <table className="exercise-table">
        <tr>
          <td>
            <ExerciseDifficulyt
              difficulty={exercise.difficulty}
            ></ExerciseDifficulyt>
          </td>
          <td>
            <Button
              color={decideColor(exercise)}
              onClick={() => handleClick(exercise)}
            >
              <span> {exercise.name}</span>
            </Button>
          </td>
          <td>
            <span className="home-exercises-span">{exercise.description}</span>
          </td>
        </tr>
      </table>
    </li>
  );

  return (
    <div className="home-row-2">
      {exerciseData.map((category) => {
        return <CategoryWrapper category={category}></CategoryWrapper>;
      })}
    </div>
  );
}

export default ExerciseList;
