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
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = ['Nos restaurants', 'Nos expériences', 'Nos aventures'];
const el = document.querySelector('.h2-scramble-text');
const fx = new TextScramble(el);
let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1200);
  });
  counter = (counter + 1) % phrases.length;
};
next();



// ——————————————————————————————————————————————————
// Budget Calculator
// ——————————————————————————————————————————————————

let typedValue = Number(document.getElementById("Budget").value);

const btn = document.getElementById("btn-calculate")
convertBtn.addEventListener("click", calculateFunction);

function calculateFunction() {
  
};


