const button = document.getElementsByClassName("button")[0];
button.addEventListener( "click" , function(){
    var name = prompt ("What is the name of the event?" , "History paper due")
    var day = prompt ("This event falls on what day?", "Monday")
    var date = prompt ("This event falls on what date?" , "1st-January-2020")
    var type = prompt("Personal or Work event?" , "Personal")
    

var okayDay = day.toLowerCase();

    const displays = document.getElementsByClassName("area")
    name = name.toUpperCase()

        if (okayDay === "monday" ) {
            displays[0].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "tuesday" ) {
            displays[1].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "wednesday" ) {
            displays[2].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "thursday" ) {
            displays[3].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "friday" ) {
            displays[4].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "saturday" ) {
            displays[5].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else if (okayDay === "sunday" ) {
            displays[6].innerHTML += `${name}----------${date}----------${type}<br>`
        }
        else {
            alert("Not an actual day")
        }
    }
)