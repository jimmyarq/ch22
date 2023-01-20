const diasLaborables = () =>{
    const dayVariable = document.getElementById("day").value;
    const monthVariable = document.getElementById("month").value;
    const yearVariable = document.getElementById("year").value;

    const resultVariable = new Date(yearVariable, monthVariable, dayVariable);
    const dayOfTheWeek = resultVariable.getDay()

        switch (dayOfTheWeek){
            case 6:
                return document.getElementById("Labor-Day").innerHTML= "Este día no se labora"
            case 0:
                return document.getElementById("Labor-Day").innerHTML= "Este día no se labora"
            case 1:
                return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
            case 2:
                return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
            case 3:
                return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
            case 4:
                return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
            case 5:
                return document.getElementById("Labor-Day").innerHTML= "¡Hoy te toca trabajar!"
            default: return document.getElementById("Labor-Day").innerHTML= "No no no.... Ingresa los datos"
        }


}

