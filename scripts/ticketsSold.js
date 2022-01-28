//targets the "entry" class
const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTicketsSold = 0
contentTarget.innerHTML =`<div>
Total tickets purchased: ${totalTicketsSold}
</div>`

//exported function that listens to all event listeners and tallys total tickets
export const TotalTicketsSold = () => {
    
    //listens for event
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        //adds 1 ticket sold when hears click
        totalTicketsSold += 1
        //outputs html with updated total tickets sold
        contentTarget.innerHTML = `<div>
    Total tickets purchased: ${totalTicketsSold}
    </div>`
    })
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        totalTicketsSold += 1
        contentTarget.innerHTML = `<div>
    Total tickets purchased: ${totalTicketsSold}
    </div>`
        
    })
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        totalTicketsSold += 1
        contentTarget.innerHTML = `<div>
    Total tickets purchased: ${totalTicketsSold}
    </div>`
        
    })
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        totalTicketsSold += 1
        contentTarget.innerHTML = `<div>
    Total tickets purchased: ${totalTicketsSold}
    </div>`
        
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        totalTicketsSold += 1
        contentTarget.innerHTML = `<div>
    Total tickets purchased: ${totalTicketsSold}
    </div>`
        
    })

}