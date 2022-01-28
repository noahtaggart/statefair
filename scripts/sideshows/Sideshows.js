const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        let html = `<div class="person">
            <div class="gawker">__
            </div>
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

