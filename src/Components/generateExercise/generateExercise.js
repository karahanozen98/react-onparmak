function generateExercise(exercise) {
  let resultStr = "";
  let randLength;
  let randomChar;

  while (resultStr.length < 150) {
    if (exercise.difficulty === "easy") {
      randomChar =
        exercise.characters[
          Math.floor(Math.random() * exercise.characters.length)
        ];
      randLength = Math.floor(Math.random() * 6 + 2);
      for (let i = 0; i < randLength; i++) resultStr += randomChar;
    } else if (exercise.difficulty === "normal") {
      randLength = Math.floor(Math.random() * 6 + 2);
      for (let i = 0; i < randLength; i++) {
        randomChar =
          exercise.characters[
            Math.floor(Math.random() * exercise.characters.length)
          ];
        resultStr += randomChar;
      }
    }

    resultStr += " ";
  }
  return resultStr.trim();
}
export default generateExercise;
