import React from "react";
import { Weather } from "./weather";

function AboutMe(){
    return(
    <div>
        <h2 className="text-center p-2 m-2">Over Mij</h2>
        <p>Ik ben Michal Davidse, student aan de Thomas More Hogeschool. Deze applicatie is een taak voor het vak "React". De applicatie is een zeer vereenvoudigde versie van een 
            nieuws-applicatie. Naast de gevraagde vereisten bevat deze applicatie ook paginering en worden er foto's toegevoegd aan de artikels. 
            </p>


        <Weather />
    </div>
        
    )
}

export default AboutMe