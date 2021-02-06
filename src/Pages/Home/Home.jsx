import React, { useState } from "react";
import ExerciseComponent from "../Exercise/ExerciseComponent";
import ExerciseList from "../../Components/ExerciseList/ExerciseList";
import { exerciseData } from "../../Components/ExerciseData/exerciseData";

import HomeWrapper from "./HomeWrapper";
import "./Home.css";

function checkLocalStorage(exerciseData) {
  exerciseData.forEach((element) => {
    element.data.forEach((exercise) => {
      if (localStorage.getItem(exercise.id) === "completed")
        exercise.isCompleted = true;
    });
  });
  return exerciseData;
}

function Home() {
  const [currExercise, setExercise] = useState(null);
  const [exercises, _UpdateExercises] = useState(
    checkLocalStorage(exerciseData)
  );

  const UpdateExercises = (exercise) => {
    const tmp = exercises;

    for (let i = 0; i < tmp.length; i++) {
      for (let j = 0; j < tmp[i].data.length; j++) {
        if (tmp[i].data[j].id === exercise.id)
          tmp[i].data[j].isCompleted = true;
      }
    }
    _UpdateExercises([...tmp]);
  };

  return (
    <div className="home">
      <HomeWrapper />
      <h2 id="egzersizler">10 Parmak Egzersizleri</h2>
      <h6>
        Mevcut klavye düzeninize ait olan her egzerisizi sırasıyla tamamlayın.
        Egzersizleri
        <strong> 60 saniyeden kısa süre içinde en fazla 3 hata ile </strong>
        bitirirseniz sonraki egzerisize geçmeniz önerilir.
      </h6>

      <ExerciseList
        exerciseData={exercises}
        currExercise={currExercise}
        setExercise={setExercise}
      />
      {currExercise && (
        <div id="currentExercise" className="home-exercise">
          <ExerciseComponent
            exercise={currExercise}
            UpdateExercises={UpdateExercises}
          ></ExerciseComponent>
        </div>
      )}
    </div>
  );
}

export default Home;
