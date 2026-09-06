// ===============================
// HOIMA STADIUM WEBSITE SCRIPT
// ===============================


// Mobile Navigation Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ===============================
// BOOKING BUTTONS
// ===============================

const bookingButtons = document.querySelectorAll(
    ".ticket button, .booking-btn"
);

bookingButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector("#booking")
            .scrollIntoView({

                behavior: "smooth"

            });

        alert(
            "Booking system coming soon! Select your ticket and continue with booking."
        );

    });

});


// ===============================
// 3D STADIUM BUTTON
// ===============================

const exploreBtn =
document.querySelector(".explore-btn");

exploreBtn.addEventListener("click", () => {

    alert(
        "3D Stadium Experience will open here!"
    );

});


// ===============================
// MATCH COUNTDOWN
// ===============================

// CHANGE THIS DATE WHEN YOU ADD
// A NEW MATCH

const matchDate =
new Date("September 6, 2026 16:00:00").getTime();


// Create countdown display

const countdown =
document.createElement("div");

countdown.className =
"countdown";


// Add countdown after match information

const matchInfo =
document.querySelector(".match-info");

matchInfo.appendChild(countdown);


// Update countdown every second

const timer =
setInterval(() => {

    const now =
    new Date().getTime();

    const distance =
    matchDate - now;


    // Time calculations

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (
            distance %
            (1000 * 60)
        ) /
        1000
    );


    // Display countdown

    if (distance > 0) {

        countdown.innerHTML = `
            <strong>⏳ MATCH STARTS IN</strong>

            <br>

            ${days}d
            ${hours}h
            ${minutes}m
            ${seconds}s
        `;

    } else {

        clearInterval(timer);

        countdown.innerHTML = `
            🔴 MATCH LIVE NOW!
        `;

    }

}, 1000);


// ===============================
// SCROLL ANIMATION
// ===============================

const cards =
document.querySelectorAll(
    ".activity-card, .ticket, .vip-card"
);


const observer =
new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.style.opacity =
                "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


// Prepare cards for animation

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    "0.6s ease";

    observer.observe(card);

});


// ===============================
// NAVBAR EFFECT
// ===============================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
        document.querySelector(
            ".navbar"
        );

        if (
            window.scrollY > 100
        ) {

            navbar.style.background =
            "rgba(0,0,0,0.95)";

        } else {

            navbar.style.background =
            "rgba(0,0,0,0.85)";

        }

    }
);// ===============================
// TICKET PRICE CALCULATOR
// ===============================

const ticketType =
document.getElementById("ticketType");

const quantity =
document.getElementById("quantity");

const totalPrice =
document.getElementById("totalPrice");


function calculatePrice() {

    const price =
    parseInt(ticketType.value);

    const numberOfTickets =
    parseInt(quantity.value);

    const total =
    price * numberOfTickets;


    totalPrice.innerText =
    "UGX " +
    total.toLocaleString();

}


// Update price when ticket changes

ticketType.addEventListener(
    "change",
    calculatePrice
);


// Update price when quantity changes

quantity.addEventListener(
    "input",
    calculatePrice
);


// ===============================
// BOOKING FORM
// ===============================

const bookingForm =
document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
        document
        .getElementById("name")
        .value;


        const phone =
        document
        .getElementById("phone")
        .value;


        const match =
        document
        .getElementById("match")
        .value;


        alert(

            "Booking Summary\n\n" +

            "Name: " + name +

            "\nPhone: " + phone +

            "\nMatch: " + match +

            "\nTotal: " +

            totalPrice.innerText +

            "\n\nPayment integration coming next."

        );

    }
);