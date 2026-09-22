/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================
   CLOSE MOBILE NAVBAR
===================================== */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbarCollapse =
            document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =====================================
   AMENITY FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const amenityItems =
    document.querySelectorAll(".amenity-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        amenityItems.forEach(function (item) {

            const category =
                item.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                item.style.display = "block";

                setTimeout(function () {
                    item.style.opacity = "1";
                }, 20);

            } else {

                item.style.opacity = "0";

                setTimeout(function () {
                    item.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) {
        return;
    }

    const statsSection =
        document.querySelector(".stats-section");

    if (!statsSection) {
        return;
    }

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target =
                parseInt(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 50));

            const timer = setInterval(function () {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current + "+";

            }, 30);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* =====================================
   GALLERY MODAL
===================================== */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const modalImage =
    document.getElementById("modalImage");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = this.src;

    });

});


/* =====================================
   BOOKING FORM → WHATSAPP
===================================== */

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const room =
        document.getElementById("room").value;

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !room || !date) {

        alert("Please fill in all required fields.");

        return;

    }


    const whatsappNumber =
        "919999999999";


    const whatsappMessage =
        `Hello Urban Nest PG,

I would like to enquire about a room.

Name: ${name}
Phone: ${phone}
Room Type: ${room}
Preferred Move-in Date: ${date}

Message:
${message || "I would like to know more about availability and pricing."}

Thank you.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});


/* =====================================
   VIDEO MODAL
===================================== */

const videoModal =
    document.getElementById("videoModal");

const modalVideo =
    document.getElementById("modalVideo");


if (videoModal) {

    videoModal.addEventListener(
        "hidden.bs.modal",
        function () {

            modalVideo.pause();

            modalVideo.currentTime = 0;

        }
    );

}


/* =====================================
   DATE VALIDATION
===================================== */

const dateInput =
    document.getElementById("date");

if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}


/* =====================================
   PHONE VALIDATION
===================================== */

const phoneInput =
    document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value =
            this.value.replace(/[^0-9+ ]/g, "");

    });

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".room-card, .amenity-card, .why-item"
    );

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
