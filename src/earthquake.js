export function earthquakeDamage(intensity) {

    let result = "";

    if (intensity < 5){
        result = "Little or no damage";
    }

    else if (intensity < 5.5){
        result ="Some damage"
    }

    else if (intensity < 6.5){
        result ="Serious damage: walls may crack or fall"
    }

    else if (intensity < 7.5){
        result ="Disaster: buildings may collapse"
    }

    else{
        result ="Catastrophe: most buildings destroyed"
    }

    return result;
}