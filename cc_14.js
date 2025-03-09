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

//Task 5 - Inline Editing for Support Tickets
function enableTicketEditing(ticketCard) {
    const nameElement = ticketCard.querySelector("h3");
    const issueElement = ticketCard.querySelector("p");
    const priorityElement = ticketCard.querySelector("span");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;
    const issueInput = document.createElement("input");
    issueInput.type = "text";
    issueInput.value = IssueElement.textContent;

    const prioritySelect = document.createElement("select");
    ["Low", "Medium", "High"].forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        if (priorityElement.textContent.includes(level)) {
            option.selected = true;
        }
        prioritySelect.appendChild(option);
    });
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", function() {
        nameElement.textContent = nameInput.value;
        issueElement.textContent = issueInput.value;
        priorityElement.textContent = `Priority: ${prioritySelect.value}`;

        ticketCard.replaceChild(nameElement, nameInput);
        ticketCard.replaceChild(issueElement, issueInput);
        ticketCard.replaceChild(priorityElement, prioritySelect);
        ticketCard.removeChild(saveButton);
    });
    
        ticketCard.replaceChild(nameInput, nameElement);
        ticketCard.replaceChild(issueInput, issueElement);
        ticketCard.replaceChild(prioritySelect, priorityElement);
        ticketCard.appendChild(saveButton);
}
ticketContainer.addEventListener("dblclick", function(event) {
    const clickedTicket = event.target.closest(".ticket-card");
    if (clickedTicket) {
        enableTicketEditing(clickedTicket);
    }
});