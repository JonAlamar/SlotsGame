const slotPics = ["images/cherry.png", "images/grapes.png", "images/heart.png",
            "images/lemon.png", "images/orange.png", "images/seven.png", "images/strawberry.png"];

let balance = 50;
let betAmount = 1;

    $("#balance").text(balance);
    $("#bet").text(betAmount);


    $("#plus").click(function () {
        $("#bet").text(betAmount += 1)
    })

    $("#minus").click(function () {
        if(betAmount <= 1) {
            console.log("You cannot bet zero!")
        } else {
            $("#bet").text(betAmount -= 1);
        }
    })

    $("#betbutton").click(function () {
        /*$("#status").attr("class", "lead").text("Get 3 of a kind in a row to win!");*/
        if(balance === 0) {
            $("#status").css("color", "red").text("You lost all your money!")
        } else {

        if(balance - betAmount < 0) {
            $("#status").css("color", "red").text("Invalid bet amount, you do not have enough money to bet $" + betAmount)
        } else {

        $("img").each(function () {
            let randomNum = Math.floor(Math.random() * slotPics.length);
            $(this).attr("src", slotPics[randomNum])
        })


        if($("#slot1").attr("src") === $("#slot2").attr("src") && $("#slot1").attr("src") === $("#slot3").attr("src")) {
    console.log("winner!");
    $("#balance").text(balance += betAmount * 15);
    $("#status").css("color", "red").text("Congratulations! You won!").fadeTo(300, 0.1).fadeTo(200, 1.0).fadeTo(300, 0.1).fadeTo(200, 1.0);
} else {
            $("#status").css("color", "red").text("You lost, spin again.").fadeTo(300, 0.1).fadeTo(200, 1.0).fadeTo(300, 0.1).fadeTo(200, 1.0);
            $("#balance").text(balance -= betAmount);
        }
    }}})

    /*function spinAnimate() {
        let slotTime1 = Math.random() * (600 - 400) + 400;
        let slotTime2 = Math.random() * (900 - 700) + 700;
        let slotTime3 = Math.random() * (1200 - 1000) + 1000;
        let i = 0;

        setInterval(function () {
            $("#slot1").attr("src", slotPics[i % slotPics.length + 1])
            i++;
        }, 200)

        setInterval(function () {
            $("#slot2").attr("src", slotPics[i % slotPics.length + 1])
            i++;
        }, 200);
        setInterval(function () {
            $("#slot3").attr("src", slotPics[i % slotPics.length + 1])
            i++;
        }, 200);
    }*/