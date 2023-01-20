const diasLaborables = () =>{
    const dayVariable = document.getElementById("day").value;
    const monthVariable = document.getElementById("month").value;
    const yearVariable = document.getElementById("year").value;

    const resultVariable = new Date(yearVariable, monthVariable, dayVariable);
    const dayOfTheWeek = resultVariable.getDay()
        switch (dayOfTheWeek){
            case null:
            case "":
                return document.getElementById("Labor-Day").innerHTML="Something went wrong"
            case 6:
                return document.getElementById("Labor-Day").innerHTML= "Este día no se labora"
            case 0:
                return document.getElementById("Labor-Day").innerHTML= "Este día no se labora"
            default: return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
        }

}

