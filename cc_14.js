//Task 2 - Support Tickets Dynamic Addition

const ticketContainer = document.getElementById("ticketContainer");
function addSupportTicket(customerName, issueDescription, priority) {
    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticket-card");
    if (priority === "High") {
        ticketCard.classList.add("high-priority");
    }
    const ticketName = document.createElement("h3")
    ticketName.textContent = customerName;
    
    const ticketIssue = document.createElement("p");
    ticketIssue.textContent = issueDescription;

    const ticketPriority = document.createElement("span");
    ticketPriority.textContent = `Priority: ${priority}`;
   
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    
    resolveButton.addEventListener("click", removeTicket);
       
    ticketCard.appendChild(ticketName);
    ticketCard.appendChild(ticketIssue);
    ticketCard.appendChild(ticketPriority);
    ticketCard.appendChild(resolveButton);

    ticketContainer.appendChild(ticketCard);
}

//Task 3 - Highlighting High Priority Tickets
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".high-priority");
    const ticketArray = [...highPriorityTickets];
    
    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = "#ffdddd";
        ticket.style.border = "2px solid red";
    });
}

//Task 4 - Support Ticket Resolution with Event Bubbling
ticketContainer.addEventListener("click", function(event) {
    console.log("A support ticket was clicked.");
});
function removeTicket(event) {
    if (event.target.tagName === "Button") {
    event.stopPropagation();
    event.target.parentElement.remove();
}
}

