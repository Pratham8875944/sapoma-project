// Redirect to Booking Page with Event Details
function redirectToBooking(eventName, price) {
  localStorage.setItem("eventName", eventName); // Store event name
  localStorage.setItem("price", price); // Store base price
  window.location.href = "booking.html"; // Redirect to booking page
}

// Load Booking Details on Booking Page
if (window.location.pathname.includes("booking.html")) {
  const eventName = localStorage.getItem("eventName");
  const price = localStorage.getItem("price");

  // Display event details on booking page
  if (eventName && price) {
    document.getElementById("eventName").textContent = eventName;
    document.getElementById("basePrice").textContent = `Base Price: ₹${price}`;
  }

  // Calculate Total Price Dynamically
  document.getElementById("bookingForm").addEventListener("input", calculateTotal);
  function calculateTotal() {
    const stagTickets = parseInt(document.getElementById("stagTickets").value) || 0;
    const coupleTickets = parseInt(document.getElementById("coupleTickets").value) || 0;
    const tablePeople = parseInt(document.getElementById("tablePeople").value) || 0;

    const stagPrice = stagTickets * 1000; // ₹1000 per stag
    const couplePrice = coupleTickets * 1500; // ₹1500 per couple
    const tablePrice = tablePeople * 500; // ₹500 per table person

    const total = stagPrice + couplePrice + tablePrice + parseInt(price);

    document.getElementById("totalPrice").textContent = `Total Price: ₹${total}`;
  }

  // Confirm Booking
  document.getElementById("confirmBooking").addEventListener("click", () => {
    alert("Booking Confirmed! Thank you for choosing Sapoma.");
    window.location.href = "index.html"; // Redirect to homepage after confirmation
  });
}