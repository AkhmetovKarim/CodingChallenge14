//Task 2 - Support Tickets Dynamic Addition

const ticketContainer = document.getElementById("ticketContainer");
function addSupportTicket(customerName, issueDescription, priority) {
    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticket-card");
    if (priority === "High") {
        ticketCard.classList.add("high-priority");
    }
    const ticketName = document.createElement = customerName;
    const ticketIssue = document.createElement("p");
    ticketIssue.textContent = issueDescription;
    const ticketPriority = document.createElement("span");
    ticketPriority.textContent = `Priority: ${priority}`;
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation();
        ticketContainer.removeChild(ticketCard);
    });
    ticketCard.appendChild(ticketName);
    ticketCard.appendChild(ticketIssue);
    ticketCard.appendChild(ticketPriority);
    ticketCard.appendChild(ticketButton);

    ticketContainer.appendChild(ticketCard);
}
