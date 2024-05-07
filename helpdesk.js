window.alert("This website is still under construction. We apologise for any inconveniences.");
function talk() {
    var know = {
        "hi" :"welcome to the  CUShuttle Helpdesk assistant, how may i help you",
        "hello": "welcome to the  CUShuttle Helpdesk Assistant, how may i help you",
        "who are you": "hello, CUShuttle HelpDesk assistant here ",
        "how are you": "good :)",
        "what can you do for me": "type any question you have for the help desk and i will provide answers",
        "how do i get a car": "navigate to the dashboard page and click the book shuttle button",
        "how do i locate a place": "navigate to the dashboard page and click the locate a place button",

        "help desk":
            "sorry, this website is still under construction. Come back later.",
        ok: "Thank You So Much ",
        Bye: "okay! See you again..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "sorry, i don't understand that prompt <br>";
    }
}

