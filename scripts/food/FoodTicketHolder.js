const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        let html = `<div class="person">
        <div class='eater'>__
        </div>
    </div>`

    contentTarget.innerHTML += html
    })
}