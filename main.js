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

calculateBtn.addEventListener("click", calculateFunction);
let displayValue = 0;
let pricePerPerson= 110;
let minimumPrice = 3000;

function calculateFunction() {
  let typedValue = Number(document.getElementById("people-number").value);
  console.log(typedValue);

  let calculatedValue = typedValue * pricePerPerson;

  if (calculatedValue < minimumPrice) {
    displayValue = minimumPrice
  } else {
    displayValue = calculatedValue
  }

  console.log(displayValue);
  priceContainer.textContent = displayValue + ",00€"
  
};



// ——————————————————————————————————————————————————
// Budget Calculator
// ——————————————————————————————————————————————————

const copyBtn = document.querySelector('.adl_copy_btn');
const copyMessage = document.querySelector('.adl_copied_message_wrap');

copyBtn.addEventListener('click', () => {
  copyMessage.classList.add('active');
  setTimeout(() => {
    copyMessage.classList.remove('active');
}, 3000);
});









