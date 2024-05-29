function shuffle() {
    const img = document.getElementById("img");
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `assets/${random}.png`);  // 작은 따옴표 대신 백틱 사용
}

function anim() {
    const img = document.getElementById("img");
    img.setAttribute("src", "assets/dice-roll.gif");
    setTimeout(shuffle, 500);
}