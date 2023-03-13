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
    $(this).closest('.link').removeClass('bottom');
    $(this).closest('.link').find('.marquee').removeClass('bottom');
});

$('.link-bottom').on('mouseleave', function() { 
    $(this).closest('.link').addClass('bottom');
    $(this).closest('.link').find('.marquee').addClass('bottom');
});