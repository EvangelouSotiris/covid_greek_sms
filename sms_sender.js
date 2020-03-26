function choosereason(arg) {
    if (arg <= 6 && arg >= 1){
        var i;
        for (i=1; i< 7; i++){
            document.getElementById("ch"+i).style.backgroundColor = "#17A2B8";
            document.getElementById("ch"+i).style.color = "white";
        }
        var elem = document.getElementById("ch"+arg);
        elem.style.backgroundColor = "#33FF8A";
        elem.style.color = "black";
    }
}

function sendsms() {
    var reason = -1
    for (i=1; i< 7; i++){
        var temp = document.getElementById("ch"+i).style;
        if (temp.color == "black") {
            reason = i;
        }
    }

    if (reason == -1) { 
        alert("Δεν έχετε επιλέξει κάποια αιτία μετακίνησης.");
        return;
    }

    var name = document.getElementById("namein").value.toString();
    if (name.length <= 2 || ( !name.includes(" ")) ) {
        alert("Το ονοματεπώνυμο σας περιέχει λάθος.");
        return;
    }
    var address = document.getElementById("addressin").value.toString();
    if (name.length <= 2 || ( !name.includes(" ")) ) {
        alert("Η διεύθυνση σας περιέχει λάθος.");
        return;
    }
    if (/iphone/i.test(navigator.userAgent.toLowerCase())) {
        location.href = 'sms:13033&body=' + reason + '%20' + name + '%20' + address;
    }
    else if (/android/i.test(navigator.userAgent.toLowerCase())) {
        location.href = 'sms:13033?body=' + reason + '%20' + name + '%20' + address;
    }
    else {
        alert("Παρακαλώ χρησιμοποιήστε το κινητό σας τηλέφωνο για να στείλετε το SMS.");
    }

}