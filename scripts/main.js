// Import and invoke the ticket booth component function
import { TicketBooth } from './TicketBooth.js'
import { RideTicketHolders } from './rides/RideTicketHolders.js'
import { FoodTicketHolders } from './food/FoodTicketHolder.js'



const ticketBooth = TicketBooth()
RideTicketHolders()
FoodTicketHolders()
