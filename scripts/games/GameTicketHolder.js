const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent =>{
        let html = `<div class="person player">
        __
    </div>`

    contentTarget.innerHTML += html
    }
    )
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        __
    </div>`

    contentTarget.innerHTML += html
    })
}