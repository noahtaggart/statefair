const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        let html = `<div class="person eater">
        __
    </div>`

    contentTarget.innerHTML += html
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        __
    </div>`

    contentTarget.innerHTML += html
    })
}