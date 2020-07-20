function camelize (array) {
    return console.log(
            array
            .split('-')
            .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
            .join(''));
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");