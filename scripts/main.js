// Import and invoke the ticket booth component function
import { TicketBooth } from './TicketBooth.js'
import { RideTicketHolders } from './rides/RideTicketHolders.js'
import { FoodTicketHolders } from './food/FoodTicketHolder.js'
import { GameTicketHolders } from './games/GameTicketHolder.js'
import { SideshowTicketHolders } from './sideshows/Sideshows.js'
import { TotalTicketsSold } from './ticketsSold.js'




const ticketBooth = TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
TotalTicketsSold()

