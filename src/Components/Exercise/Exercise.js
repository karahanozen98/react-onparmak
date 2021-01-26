function  Exercise(characters, shuffle) {
    characters = ["a","s","d","f"];
    let resultStr;

    this.GetExercise = () => {
        let randLength = Math.random()*6;
        let randomChar = Math.random()*characters.length-1;

        for(let i=0; i<randLength; i++){
            resultStr+=characters[randomChar]
        }
        return resultStr;
    }
}