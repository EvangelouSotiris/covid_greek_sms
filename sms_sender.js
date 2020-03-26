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

function sendsms(lang) {
    var reason = -1
    for (i=1; i< 7; i++){
        var temp = document.getElementById("ch"+i).style;
        if (temp.color == "black") {
            reason = i;
        }
    }

    if (reason == -1) { 
        if (lang == 1){
            alert("Δεν έχετε επιλέξει κάποια αιτία μετακίνησης. Κλικάρετε σε ένα από τα 6 κουμπιά");
        }
        else {
            alert("You have not chosen a movement/transportation reason. Please click in one of the 6 buttons.")
        }
        return;
    }

    var name = document.getElementById("namein").value.toString().toUpperCase();

    if (name.length <= 2 || ( !name.includes(" ")) ) {
        if (lang == 1){
            alert("Το ονοματεπώνυμο σας περιέχει λάθος.");
        }
        else {
            alert("Your fullname field is wrong, please follow the placeholder format.")
        }
        return;
    }
    var address = document.getElementById("addressin").value.toString().toUpperCase();
    if (address.length <= 2 || ( !address.includes(" ")) ) {
        if (lang == 1){
            alert("Η διεύθυνση σας περιέχει λάθος.");
        }
        else {
            alert("Your address field is wrong, please follow the placeholder format.")
        }
        return;
    }
    if (/iphone/i.test(navigator.userAgent.toLowerCase())) {
        location.href = 'sms:13033&body=' + reason + '%20' + name + '%20' + address;
    }
    else if (/android/i.test(navigator.userAgent.toLowerCase())) {
        location.href = 'sms:13033?body=' + reason + '%20' + name + '%20' + address;
    }
    else {
        if (lang == 1){
            alert("Πρέπει να χρησιμοποιείτε το κινητό σας τηλέφωνο για να στείλετε το SMS.");   
        }
        else {
            alert("You must use a mobile device to send the SMS.");
        }
    }

}