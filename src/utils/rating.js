export function getRating(vote) {
    return Math.ceil(vote / 2);  //Arrotondato per eccesso
}