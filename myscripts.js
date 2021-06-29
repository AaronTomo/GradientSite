console.log("Hello World")

function Button(){

    var inputColour1
    var inputColour2 

    inputColour1 = document.getElementById("firstColour").value
    inputColour2 = document.getElementById("secondColour").value

    console.log(inputColour1)
    console.log(inputColour2)

    document.getElementById("gradPrev").style.backgroundImage = 'linear-gradient('+inputColour1+', '+inputColour2+')'

}