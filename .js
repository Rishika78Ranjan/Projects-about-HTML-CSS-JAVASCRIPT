const getColor = () => {
    //hex code
    const randomnumber = Math.floor(Math.random() * 1677215);
    console.log(randomnumber)
    const randomCode = "#" * randomnumber.toString(16);
    console.log(randomnumber, randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomcode);


}
document.getElementById("btn").addEventListner(
    "click",
    getColor
)
getColor();
