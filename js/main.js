const loader = document.querySelector("[data-loader]");
const countdown = document.querySelector("[data-countdown]");
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const weddingAudio = document.querySelector("[data-wedding-audio]");
const musicToggle = document.querySelector("[data-music-toggle]");
const musicLabel = document.querySelector("[data-music-label]");

document.body.classList.add("is-loading");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 900);
});

function setMusicState(isPlaying) {
  if (!musicToggle || !musicLabel) {
    return;
  }

  musicToggle.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Pause wedding music" : "Play wedding music");
  musicLabel.textContent = isPlaying ? "Music On" : "Music Off";
}

musicToggle?.addEventListener("click", async () => {
  if (!weddingAudio) {
    return;
  }

  try {
    if (weddingAudio.paused) {
      await weddingAudio.play();
      setMusicState(true);
    } else {
      weddingAudio.pause();
      setMusicState(false);
    }
  } catch {
    setMusicState(false);
    musicLabel.textContent = "Add Song";
  }
});

weddingAudio?.addEventListener("ended", () => setMusicState(false));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

function setText(selector, value) {
  const element = countdown?.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function updateCountdown() {
  if (!countdown) {
    return;
  }

  const targetDate = new Date(countdown.dataset.countdown).getTime();
  const now = Date.now();
  const distance = Math.max(targetDate - now, 0);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / 1000);

  setText("[data-days]", String(days).padStart(3, "0"));
  setText("[data-hours]", String(hours).padStart(2, "0"));
  setText("[data-minutes]", String(minutes).padStart(2, "0"));
  setText("[data-seconds]", String(seconds).padStart(2, "0"));
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

function openLightbox(image) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");

    if (image) {
      openLightbox(image);
    }
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
