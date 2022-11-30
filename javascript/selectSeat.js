
const container = document.querySelector(".container#seat-map");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.querySelector(".amount");
const total = document.querySelector(".total");
const carType = document.getElementById("car-type");
console.log(container);
populateUI();

let seatPrice = +document.getElementById("seat-price");

function setSeatData(carType, seatPrice) {
  localStorage.setItem("selectedCarType", carType);
  localStorage.setItem("selectedSeatPrice", seatPrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setSeatData(carType, seatPrice);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

function proceedFill(){
  
}

updateSelectedCount();