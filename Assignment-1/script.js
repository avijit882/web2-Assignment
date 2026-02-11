let events = [];

// form submit
document.querySelector(".form").addEventListener("submit", function(e){
    e.preventDefault();

    let title = document.getElementById("eventTitle").value;
    let date = document.getElementById("eventDate").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    if(title === "" || date === ""){
        alert("Enter Event Name and Date");
        return;
    }

    events.push({title, date, category, description});
    showEvents();

    this.reset();
});

// show events
function showEvents(){

    let container = document.querySelector(".events");

    // keep buttons safe
    container.innerHTML = `
        <button onclick="clearEvents()">Clear All Events</button>
        <button onclick="sampleEvents()">Add Sample Events</button>
    `;

    for(let i = 0; i < events.length; i++){

        container.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <h3>${events[i].title}</h3>
            <p>Date: ${events[i].date}</p>
            <p>Category: ${events[i].category}</p>
            <p>${events[i].description}</p>
            <button onclick="deleteEvent(${i})">Delete</button>
        </div>
        `;
    }
}

// delete one
function deleteEvent(index){
    events.splice(index,1);
    showEvents();
}

// clear all
function clearEvents(){
    events = [];
    showEvents();
}

// sample events
function sampleEvents(){
    events.push(
        {title:"Workshop", date:"2026-05-10", category:"Workshop", description:"Learning JS"},
        {title:"Meetup", date:"2026-06-15", category:"Meetup", description:"Tech Meetup"}
    );
    showEvents();
}
