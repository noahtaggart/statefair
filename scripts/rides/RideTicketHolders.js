const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    //listens for "rideTicketPurchased" a custom event from TicketBooth.js
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        //create html <div> to display a new blue box upon every click
        let html = `<div class="person rider">
        
    </div>`

        
        contentTarget.innerHTML += html


    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
    </div>`

    contentTarget.innerHTML += html
    })
}
