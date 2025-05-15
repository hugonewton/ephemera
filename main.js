///////////////////////////////
/// GSAP DEFAULTS
///////////////////////////////

gsap.defaults({
  ease: "power2.out",
  duration: 0.2,
});


// LOTTIE PLAYBACK AND REVERSE
const playerContainers = document.querySelectorAll(".nav-lottie-container");
playerContainers.forEach(container => {
container.addEventListener("mouseover", () => {
  const player = container.querySelector("lottie-player");
  player.setDirection(1);
  player.play();
});

container.addEventListener("mouseleave", () => {
  const player = container.querySelector("lottie-player");
  player.setDirection(-1);
  player.play();
});
});

// MENU NAV LINKS

$('.link-container-nav').on('mouseenter mouseleave', function() {
$(this).find('.fill').toggleClass('expand');
$(this).find('.marquee').toggleClass('visible');
});

$('.link-top').on('mouseleave', function() {
  $(this).closest('.link-container-nav').removeClass('bottom');
  $(this).closest('.link-container-nav').find('.marquee').removeClass('bottom');
});

$('.link-bottom').on('mouseleave', function() { 
  $(this).closest('.link-container-nav').addClass('bottom');
  $(this).closest('.link-container-nav').find('.marquee').addClass('bottom');
});

// ——————————————————————————————————————————————————
// Budget Calculator
// ——————————————————————————————————————————————————

const calculateBtn = document.getElementById("btn-calculate");
let priceContainer = document.getElementById("price-container");

if (calculateBtn) { // Check if "btn-calculate" exists
  calculateBtn.addEventListener("click", calculateFunction);

  let displayValue = 0;
  let pricePerPerson = 110;
  let minimumPrice = 3000;

  function calculateFunction() {
      let typedValue = Number(document.getElementById("people-number").value);
      console.log(typedValue);

      let calculatedValue = typedValue * pricePerPerson;

      if (calculatedValue < minimumPrice) {
          displayValue = minimumPrice;
      } else {
          displayValue = calculatedValue;
      }

      console.log(displayValue);
      priceContainer.textContent = displayValue + ",00€";
  }
}





function initializeModal({
  modalWrap,
  modalBackground,
  modalLayout,
  closeButton,
  openClass = "open",
  delay = 10000,
  animationConfig = {
    opacity: 0,
    duration: 0.6,
    y: "100vh"
  }
}) {
  // Create GSAP timeline
  const tlModal = gsap.timeline({ paused: true });

  // Set up the modal open animation
  tlModal
    .to(modalWrap, { display: "block" }) // Set display to block before animation
    .from(modalBackground, {
      opacity: animationConfig.opacity,
      duration: animationConfig.duration,
    })
    .from(modalLayout, {
      y: animationConfig.y,
    });

  // Show modal after delay if it hasn't been shown before
  const modalShownKey = `${modalWrap}-shown`;

  if (!localStorage.getItem(modalShownKey)) {
    setTimeout(() => {
      tlModal.play();
      localStorage.setItem(modalShownKey, 'true');
    }, delay);
  }

  // Open modal function
  function openModal() {
    tlModal.play();
  }

  // Close modal function
  function closeModal() {
    tlModal.reverse();
  }

  // Attach close event to the close button
  const closeModalButton = document.querySelector(closeButton);
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Return control functions if needed
  return { openModal, closeModal };
}

// Usage example
// initializeModal({
//   modalWrap: ".privat_modal_wrap",
//   modalBackground: ".privat_modal_bg",
//   modalLayout: ".privat_modal_layout",
//   closeButton: ".privat_modal_close",
//   delay: 10000, // Delay in ms
//   animationConfig: { opacity: 0, duration: 0.6, y: "100vh" }
// });

initializeModal({
  modalWrap: ".magmatic_modal_wrap",
  modalBackground: ".magmatic_modal_background",
  modalLayout: ".magmatic_modal_layout",
  closeButton: ".privat_modal_close[data-action='close-magmatic']",
  delay: 10000, // Delay in ms
  animationConfig: { opacity: 0, duration: 0.6, y: "100vh" }
});

// Usage example
// initializeModal({
//   modalWrap: ".uts_closing_modal_wrap",
//   modalBackground: ".uts_closing_modal_bg",
//   modalLayout: ".uts_closing_modal_layout",
//   closeButton: ".modal_close.is_uts",
//   delay: 5000, // Delay in ms
//   animationConfig: { opacity: 0, duration: 0.6, y: "100vh" }
// });

// Usage example
// initializeModal({
//   modalWrap: ".wonderwoods_modal_wrap",
//   modalBackground: ".wonderwoods_modal_bg",
//   modalLayout: ".wonderwoods_modal_layout",
//   closeButton: ".wonderwoods_modal_close",
//   delay: 10000, // Delay in ms
//   animationConfig: { opacity: 0, duration: 0.6, y: "100vh" }
// });

console.log("bonjour");

// initializeModal({
//   modalWrap: ".jp_modal_wrap",
//   modalBackground: ".jp_modal_bg",
//   modalLayout: ".jp_modal_layout",
//   closeButton: ".jp_modal_close",
//   delay: 15000, // Delay in ms
//   animationConfig: { opacity: 0, duration: 0.6, y: "100vh" }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   // Create a GSAP timeline
//   const tlSanta2024 = gsap.timeline({ paused: true }); // Start paused

//   // Add animations to the tlSanta2024
//   tlSanta2024
//   .set(".christmas_modal_wrap" , 
//     { display: "flex"         
//     }) 
//   .from(".lottie-snow", {
//     opacity: 0,
//     duration: 5,
//   }, "<")
//   .from(".christmas_modal_contain", {
//     y: 200,
//     opacity: 0,
//     duration: .6,
//   }, "< .2")
//   .from(".santa_close_btn", {
//     opacity: 0,
//     duration: .3,
//   }, "<")
//   .from(".christmas_santa_img", {
//     opacity: 0,
//     duration: .6,
//   }, "<")
//   .from(".christmas_bubble", {
//     opacity: 0,
//     rotate: -100,
//     duration: .3,
//   }, "<");

//   // Start the tlSanta2024 after 10 seconds
//   setTimeout(() => {
//     tlSanta2024.timeScale(1).play();
//   }, 12000); // 10 seconds

//   // Add functionality to reverse the tlSanta2024 when the close button is clicked
//   const closetlSanta2024 = document.querySelector(".santa_close_btn"); // Replace with your button selector
//   if (closetlSanta2024) {
//     closetlSanta2024.addEventListener("click", () => {
//       tlSanta2024.timeScale(3).reverse(); // Reverse the tlSanta2024
//     });
//   }
// });



// document.addEventListener("DOMContentLoaded", () => {
//   // Unique localStorage key for Santa modal
//   const santaModalShownKey = "santaModal2024-shown";

//   // Check if the modal has been shown before
//   if (!localStorage.getItem(santaModalShownKey)) {
//     // Create a GSAP timeline
//     const tlSantaModal2024 = gsap.timeline({ paused: true }); // Start paused

//     // Add animations to the timeline
//     tlSantaModal2024
//       .set(".christmas_modal_wrap", { display: "flex" }) // Set display to flex
//       .from(".lottie-snow", {
//         opacity: 0,
//         duration: 5,
//       }, "<")
//       .from(".christmas_modal_contain", {
//         y: 200,
//         opacity: 0,
//         duration: 0.6,
//       }, "< .2")
//       .from(".santa_close_btn", {
//         opacity: 0,
//         duration: 0.3,
//       }, "<")
//       .from(".christmas_santa_img", {
//         opacity: 0,
//         duration: 0.6,
//       }, "<")
//       .from(".christmas_bubble", {
//         opacity: 0,
//         rotate: -100,
//         duration: 0.3,
//       }, "<");

//     // Show the modal after a delay
//     setTimeout(() => {
//       tlSantaModal2024.timeScale(1).play();
//       // Mark modal as shown in localStorage
//       localStorage.setItem(santaModalShownKey, "true");
//     }, 6000); // 12 seconds

//     // Add functionality to close the modal
//     const santaCloseButton = document.querySelector(".santa_close_btn");
//     if (santaCloseButton) {
//       santaCloseButton.addEventListener("click", () => {
//         tlSantaModal2024.timeScale(3).reverse(); // Reverse the animation
//       });
//     }
//   }
// });


///////////////////////////////
/// HERO SECTION SCROLL TRIGGER
///////////////////////////////


let tlHeroAnimation = gsap.timeline({ paused: true });

tlHeroAnimation
.to(".ephemera-hero-mask-container", {
  scale: 20,
  rotate: -50,
  })
.to(".container-h2-hero:nth-of-type(1)", {
  x: "-100vw",
  }, "<")
.to(".container-h2-hero:nth-of-type(2)", {
  x: "100vw",
  }, "<")
.to(".container-h2-hero:nth-of-type(3)", {
  x: "-100vw",
  }, "<")
;

ScrollTrigger.create({
trigger: ".section-hero", // Element that triggers the animation
start: "top top",
end: "bottom 50%",
//   markers: true,
animation: tlHeroAnimation, // Animation to play
scrub: true, // Smooth scrolling effect
//   toggleActions: "play complete play reverse",
});


///////////////////////////////
/// ANIMATION TO PLAY ON MOUSE ENTER FOR EACH
///////////////////////////////

const footerLinkWrapper = document.querySelectorAll(".footer-link-container");

footerLinkWrapper.forEach(function (el) {
let background = el.querySelector(".footer-link-hover-bg");
let tllFooterLink = gsap.timeline({ paused: true });

      tllFooterLink
      .to(background,{
            width: "100%",
          })            
        ;

el.addEventListener("mouseenter", function () {
  tllFooterLink.play(); //  tl_in on mouseenter
});

el.addEventListener("mouseleave", function () {
  tllFooterLink.reverse(); // tl_out on mouseleave
});
});


///////////////////////////////
/// COUNTDOWN STELLLAR
///////////////////////////////


// document.addEventListener("DOMContentLoaded", function () {
// // Set the target date (March 16th at 23:59)
// const targetDate = new Date(new Date().getFullYear(), 2, 16, 23, 59, 0); // March is month 2 (0-based index)

// function updateCountdown() {
//     const now = new Date();
//     let timeRemaining = targetDate - now;

//     if (timeRemaining < 0) {
//         timeRemaining = 0;
//     }

//     // Calculate remaining time in days, hours, minutes, and seconds
//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     // Find all counter items and update accordingly
//     document.querySelectorAll(".counter_item_wrap").forEach((item) => {
//         const timeCategory = item.getAttribute("data-time-category");
//         const figure = item.querySelector(".counter_figure");
//         const text = item.querySelector(".counter_text");

//         if (!figure || !text) return;

//         switch (timeCategory) {
//             case "day":
//                 figure.textContent = days;
//                 text.textContent = days > 1 ? "Jours" : "Jour";
//                 break;
//             case "hour":
//                 figure.textContent = hours;
//                 text.textContent = hours > 1 ? "Heures" : "Heure";
//                 break;
//             case "minute":
//                 figure.textContent = minutes;
//                 text.textContent = minutes > 1 ? "Minutes" : "Minute";
//                 break;
//             case "second":
//                 figure.textContent = seconds;
//                 text.textContent = seconds > 1 ? "Secondes" : "Seconde";
//                 break;
//         }
//     });

//     // Stop countdown when reaching zero
//     if (timeRemaining <= 0) {
//         clearInterval(interval);
//     }
// }

// // Update countdown every second
// const interval = setInterval(updateCountdown, 1000);
// updateCountdown(); // Initial call to avoid delay
// });


///////////////////////////////
/// IFFRAME RESA
///////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const resaBtns = document.querySelectorAll("[data-resa]");
  const iframeResa = document.querySelector(".iframe_resa_embed iframe");
  const iframeWrap = document.querySelector(".iframe_resa_wrap");
  const iframeLayout = document.querySelector(".iframe_resa_layout");
  const closeBtn = document.querySelector(".iframe_resa_close_wrap");
  const iframeContain = document.querySelector(".iframe_resa_contain");

  if (resaBtns.length && iframeResa && iframeWrap && iframeLayout && closeBtn && iframeContain) {
    const tlIframeResa = gsap.timeline({ paused: true });

    tlIframeResa
      .set(iframeWrap, { display: "block" })
      .fromTo(iframeWrap, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .fromTo(iframeLayout, { y: 500, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" }, "<0.1");

    // Clear iframe src after reverse completes
    tlIframeResa.eventCallback("onReverseComplete", () => {
      iframeResa.setAttribute("src", "");
      iframeWrap.style.display = "none"; // Optionally hide the wrap again
    });

    resaBtns.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const url = btn.getAttribute("data-resa");
        iframeResa.setAttribute("src", url);
        tlIframeResa.play();
      });
    });

    closeBtn.addEventListener("click", () => {
      tlIframeResa.reverse();
    });

    // Also close if background (iframe_resa_contain) is clicked
    iframeContain.addEventListener("click", (e) => {
      if (e.target === iframeContain) {
        tlIframeResa.reverse();
      }
    });
  }
});