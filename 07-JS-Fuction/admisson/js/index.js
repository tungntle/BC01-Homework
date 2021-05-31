document.getElementById("calculate").onclick = function() {
    var mathScore = document.getElementById("math_score").value
    var literatureScore = document.getElementById("literature_score").value
    var englishScore = document.getElementById("english_score").value

    var totalSubjects = calculateScore()
    var areaScore = isPriorityArea()
    var studentScore = isPriorityStudent()

    var totalScore = totalSubjects + areaScore + studentScore
    console.log(totalScore)

    if (totalScore >= 18 && mathScore > 0 && literatureScore > 0 && englishScore > 0 ) {
        console.log("Passed")
    }
    else{
        console.log("Falied")
    } 
}

function calculateScore() {
    var mathScore = parseInt(document.getElementById("math_score").value)
    console.log(mathScore)
    var literatureScore = parseInt(document.getElementById("literature_score").value)
    console.log(literatureScore)
    var englishScore = parseInt(document.getElementById("english_score").value)
    console.log(englishScore)
    var totalScore = mathScore + literatureScore + englishScore
    console.log(totalScore)
    return totalScore
}

function isPriorityArea() {
    var isArea = document.getElementById("priority_area").value
    if (isArea == "A") return 2
    else if (isArea == "B") return 1
    else if (isArea == "C") return 0.5
    else return 0
}

function isPriorityStudent() {
    var isStudent = document.getElementById("priority_student").value
    if (isStudent == 1)  return 2.5
    else if (isStudent == 2) return 1.5
    else if (isStudent == 3) return 1
    else return 0
}

