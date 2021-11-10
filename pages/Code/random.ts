/** Will return "true" with the specified probability */
function random(percentage: number) {
    return !Math.floor(Math.random() * 100 / percentage);
}