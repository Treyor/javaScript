function camelize (str) {
    return console.log(
        str
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("")
        );
}

let color = "background-color";

camelize(color);