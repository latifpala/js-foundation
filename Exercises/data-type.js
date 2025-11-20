function stringToNumber(input) {
    let convert = Number(input)
    if(isNaN(convert) || !(convert)){
        return "Not a number"
    }else{
        return convert
    }
}

function flipBoolean(input) {
    let convert = Boolean(input)
    if(!convert)
        return true;
    else
        return false;
}
function whatAmI(input) {
    if(typeof(input) === 'number'){
        return `I'm a number!`
    }else if(typeof(input) === 'string'){
        return `I'm a string!`
    }
}

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
}
