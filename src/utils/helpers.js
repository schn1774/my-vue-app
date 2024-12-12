const strToLowerDashed = (name) => {
    return name.replace(/ /g,"-").toLowerCase()
}

const sum = (num1, num2) => {
    return num1 + num2
}

export default {
    strToLowerDashed,
    sum
}