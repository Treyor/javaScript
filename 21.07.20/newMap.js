let gamesToPlay = new Map([
    [1, "Готика"],
    [2, "Divinity"],
    [3, "Risen"]
]);

for (let game of gamesToPlay.keys()){
    console.log(game);
}

for (let number of gamesToPlay.values()){
    console.log(number);
}

for (let entry of gamesToPlay){
    console.log(entry);
}