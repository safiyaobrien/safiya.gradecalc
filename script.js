function currentGrade() {
    var homeworkGrades = document.getElementById("homeworkGrade").value;
    var homeworkArray = arrayStringToNumber(homeworkGrades);
    var homeworkAvg = averageArr(homeworkArray);
    console.log(homeworkAvg);

    var classGrades = document.getElementById("classworkGrade").value;
    var classArray = arrayStringToNumber(classGrades);
    var classAvg = averageArr(classArray);
    console.log(classAvg);

    var testsGrades = document.getElementById("testGrade").value;
    var testsArray = arrayStringToNumber(testsGrades);
    var testsAvg = averageArr(testsArray);
    console.log(testsAvg);

    var participationGrades = document.getElementById("participationGrade").value;
    var participationArray = arrayStringToNumber(participationGrades);
    var participationAvg = averageArr(participationArray);
    console.log(participationAvg);

    var projectGrades = document.getElementById("projectGrade").value;
    var projectArray = arrayStringToNumber(projectGrades);
    var projectAvg = averageArr(projectArray);
    console.log(projectAvg);

    var homeworkWeights = (parseInt(document.getElementById("homeworkWeight").value)) ;
    var classworkWeights = (parseInt(document.getElementById("classworkWeight").value)) ;
    var testsWeights = (parseInt(document.getElementById("testWeight").value)) ;
    var participationWeights = parseInt(document.getElementById("participationWeight").value);
    var projectWeights = parseInt(document.getElementById("projectWeight").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var sumOfWeight = homeworkWeights + classworkWeights + testsWeights + participationWeights + projectWeights + finalWeight ;
    var message = "";
    if (sumOfWeight !== 100 || isNaN(finalWeight)) {
        message = "The weight percentages you have entered do not add up to 100%";
        document.getElementById("currentGrades").innerHTML = message;
        document.getElementById("finalGrades").innerHTML = message;
    } else {
        var homework = homeworkAvg * (homeworkWeights/100);
        var classwork = classAvg * (classworkWeights/100);
        var tests = testsAvg * (testsWeights/100);
        var participation = participationAvg * (participationWeights/100);
        var projects = projectAvg * (projectWeights/100);

        var currentGrade = ((homework + classwork + tests + participation + projects) / (100 - finalWeight)) * 100;
        console.log(currentGrade);
        document.getElementById("currentGrades").innerHTML = "Your current grade is " + currentGrade;
    }

    return currentGrade;
}

    function averageArr(arr){
        var sum = 0;
        for(var i = 0; i<arr.length; i++){
            sum = sum + arr[i];
        }
        var avg = sum/(arr.length);
        return avg;
    }

    function arrayStringToNumber(str){
        var arr = str.split(",");
        for(var i = 0; i < arr.length; i++){
            arr[i] = parseInt(arr[i]);
        }
        console.log(arr);
        return arr;
    }

function finalGrade(){
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var c = currentGrade();
    console.log(c);

    var w = finalWeight/100;
    console.log(w);

    var G= desiredGrade;
    console.log(G);
    var first = 1-w;

    var second = first * c;
    var third = G-second;
    var fourth = third/w;

    var finalGrade = fourth;
    finalGrade = Math.floor(finalGrade);
    var homeworkWeights = (parseInt(document.getElementById("homeworkWeight").value)) ;
    var classworkWeights = (parseInt(document.getElementById("classworkWeight").value)) ;
    var testsWeights = (parseInt(document.getElementById("testWeight").value)) ;
    var participationWeights = parseInt(document.getElementById("participationWeight").value);
    var projectWeights = parseInt(document.getElementById("projectWeight").value);
    var finalWeights = parseInt(document.getElementById("finalWeight").value);

    var sumOfWeight = homeworkWeights + classworkWeights + testsWeights + participationWeights + projectWeights + finalWeights ;
    var message = "";
    var messages = "";
    if (sumOfWeight !== 100 || isNaN(finalWeights)) {
        message = "The weight percentages you have entered do not add up to 100%";
        messages = "Make sure the percentages add up to 100% in order to get your final grade calculations."
        document.getElementById("currentGrades").innerHTML = message;
        document.getElementById("finalGrades").innerHTML = messages;
    }else{
        document.getElementById("finalGrades").innerHTML = "Your need to get a " + finalGrade + " on your final exam to get a " + desiredGrade + " in the class."
        return finalGrade;
    }





}

function reset(){
    var inputs =document.getElementsByTagName("input");
    console.log(inputs);
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    document.getElementById("currentGrades").innerHTML = "";
    document.getElementById("finalGrades").innerHTML = "";

}