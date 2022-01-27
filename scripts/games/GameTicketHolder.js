const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent =>{
        let html = `<div class="person">
        <div class='player'>__
        </div>
    </div>`

    contentTarget.innerHTML += html
    }
    )
}