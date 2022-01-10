// Code your solution in this file!

function distanceFromHqInBlocks(add){
    if (add < 42 ) {
        let dist = 42 - add;
        return dist;
    } else if (add === 42 ) {
        return 0;
    } else if (add > 42 ) {
        let dist = add - 42;
        return dist;
    }
}
function distanceFromHqInFeet(add){
    let bloc = distanceFromHqInBlocks(add);
    return bloc * 264;
}

function distanceTravelledInFeet(start,fin) {
    if (start > fin){
        return (start-fin) * 264;
    } else {
        return (fin-start) * 264;
    }

}

function calculatesFarePrice(start,destination) {
    let dist = distanceTravelledInFeet(start,destination);
    if (dist > 2500) {
        return "cannot travel that far";
    } else if (dist > 2000) {
        return 25;
    } else if (dist > 400) {
        let newDist = dist - 400;
        return newDist * .02;
    } else {
        return 0;
    }
}