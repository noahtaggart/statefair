const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

//creates event listener to listen for clicks
eventHub.addEventListener("click", (clickEvent) => {
    //if user clicks rideTicket button, CustomEvent ("rideticketPurchased") is invoked
    if (clickEvent.target.id ==="rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased") 
        //dispatch event to eventHub
        eventHub.dispatchEvent(rideEvent)
    }
    else if (clickEvent.target.id ==="foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
    else if (clickEvent.target.id ==="gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent= new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

