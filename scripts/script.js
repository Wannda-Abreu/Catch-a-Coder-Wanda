let coders = [
  { image: "assets/coders/eevee.png", name: "Andrea" },
  { image: "assets/coders/meowth.png", name: "Jaime" },
  { image: "assets/coders/psyduck.png", name: "Sophia" },
  { image: "assets/coders/squirtle.png", name: "Geovanny" },
  { image: "assets/coders/charmander.png", name: "Bryan" },
  { image: "assets/coders/caterpie.png", name: "Diego B." },
  { image: "assets/coders/jigglypuff.png", name: "Ainhoa" },
  { image: "assets/coders/bullbasaur.png", name: "Victor" },
  { image: "assets/coders/abra.png", name: "Jassed" },
  { image: "assets/coders/avatar4.png", name: "Fernando" },
  { image: "assets/coders/avatar5.png", name: "Emily" },
  { image: "assets/coders/dratini.png", name: "Diego A." },
  { image: "assets/coders/mankey.png", name: "Raul" },
  { image: "assets/coders/mew.png", name: "Gisela" },
  { image: "assets/coders/pidgey.png", name: "Luis" },
  { image: "assets/coders/pikachu.png", name: "Adriana" },
  { image: "assets/coders/weedle.png", name: "Pedro" },
  { image: "assets/coders/zubat.png", name: "Jimmy" },
  { image: "assets/coders/avatar 2.png", name: "Thuanny" },
  { image: "assets/coders/avatar6.png", name: "Cynthia" },
  { image: "assets/coders/avatar 3.png", name: "Wanda" },
  { image: "assets/coders/avatar.png", name: "Ruben" },
  { image: "assets/coders/venonat.png", name: "Jorge" },
  { image: "assets/coders/snorlax.png", name: "Jes" }
];

let newCoders = [
  { image: "assets/newcoders/avatar20.png", name: "" },
  { image: "assets/newcoders/avatar21.png", name: "" },
  { image: "assets/newcoders/avatar22.png", name: "" },
  { image: "assets/newcoders/avatar23.png", name: "" },
  { image: "assets/newcoders/avatar24.png", name: "" },
  { image: "assets/newcoders/avatar25.png", name: "" },
  { image: "assets/newcoders/avatar26.png", name: "" },
  { image: "assets/newcoders/avatar27.png", name: "" },
  { image: "assets/newcoders/avatar28.png", name: "" },
  { image: "assets/newcoders/avatar29.png", name: "" },
  { image: "assets/newcoders/avatar30.png", name: "" },
  { image: "assets/newcoders/avatar31.png", name: "" },
  { image: "assets/newcoders/avatar32.png", name: "" },
  { image: "assets/newcoders/avatar33.png", name: "" },
  { image: "assets/newcoders/avatar34.png", name: "" }
];

const musicBtn = document.getElementById("music");
const bgSong = document.getElementById("song");
const modal = document.getElementById("modal-id");
const modalContent = document.getElementById("modal-content-id");
const ctaBtn = document.getElementById("home-div-button");
const catchBtn = document.getElementById("buttons-bottom-first-id");
const addBtn = document.getElementById("buttons-top-add");
const addModal = document.getElementById("add-modal-id");
const addModalContent = document.getElementById("add-modal-content-id");
const addNameInput = document.getElementById("add-name");
const addConfirmBtn = document.getElementById("add-button");
const availableImagesContainer = document.getElementById("available-images-container-id");
const removeModal = document.getElementById("remove-modal-id");
const removeClose = document.getElementById("remove-modal-close-id");
const removeBtn = document.getElementById("remove");
const removeConfirmBtn = document.getElementById("remove-button");
const removeNameInput = document.getElementById("remove-name");
const resetBtn = document.getElementById("reset-button");
const codersContainer = document.getElementById("coders-id");
const homeText = document.getElementById("home-text");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeControls = [
  { button: document.getElementById("t-instinct"), className: "theme-instinct" },
  { button: document.getElementById("t-mystic"), className: "theme-mystic" },
  { button: document.getElementById("t-valor"), className: "theme-valor" },
  { button: document.getElementById("t-pikachu"), className: "theme-pikachu" }
];
const themeClasses = ["theme-instinct", "theme-mystic", "theme-valor", "theme-pikachu"];
const classicPalette = [
  { background: "#F9EE8B", text: "rgba(147,195,217,1)" },
  { background: "#8ECEAC", text: "#ffffff" },
  { background: "rgba(147,195,217,1)", text: "#ffffff" },
  { background: "rgb(235,235,235)", text: "rgba(147,195,217,1)" },
  { background: "#ffffff", text: "rgba(147,195,217,1)" }
];
let classicPaletteIndex = -1;

let isPlaying = false;
let selectedImage = "";

function showModal(imgSrc, imgAlt, text, ms) {
  modalContent.innerHTML = "";
  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt || "";
    img.loading = "lazy";
    modalContent.appendChild(img);
  }
  if (text) {
    const h2 = document.createElement("h2");
    h2.textContent = text;
    modalContent.appendChild(h2);
  }
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modalContent.focus();
  setTimeout(() => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
  }, ms);
}

function renderCoders() {
  if (!codersContainer) return;
  codersContainer.innerHTML = "";
  coders.forEach(c => {
    const card = document.createElement("div");
    card.className = "coders__person";
    const img = document.createElement("img");
    img.className = "coders__img";
    img.src = c.image;
    img.alt = `Avatar de ${c.name}`;
    img.loading = "lazy";
    const p = document.createElement("p");
    p.className = "coders__name";
    p.textContent = c.name;
    card.appendChild(img);
    card.appendChild(p);
    codersContainer.appendChild(card);
  });
}

function toggleMusic() {
  if (!musicBtn || !bgSong) return;
  isPlaying ? bgSong.pause() : bgSong.play();
  isPlaying = !isPlaying;
  musicBtn.classList.toggle("paused", !isPlaying);
  musicBtn.style.animation = isPlaying ? "pulse-animation_0011 1.1s infinite ease-in-out" : "none";
  musicBtn.setAttribute("aria-pressed", String(isPlaying));
  musicBtn.setAttribute("aria-label", isPlaying ? "Pausar musica de fondo" : "Reproducir musica de fondo");
}

musicBtn?.addEventListener("click", toggleMusic);

ctaBtn?.addEventListener("click", () => {
  const s = new Audio("audios/caught-a-pokemon.mp3");
  s.play();
});

catchBtn?.addEventListener("click", () => {
  const s = new Audio("audios/pokemon-3.mp3");
  s.play();
  if (coders.length === 0) {
    showModal("assets/others/pikachu-catch-button.jpg", "Todos los coders han sido seleccionados", "All coders have been selected...", 8000);
    return;
  }
  const idx = Math.floor(Math.random() * coders.length);
  const picked = coders[idx];
  coders.splice(idx, 1);
  renderCoders();
  showModal(picked.image, `Avatar de ${picked.name}`, picked.name, 5000);
  catchBtn.focus();
});

addBtn?.addEventListener("click", () => {
  addModal.style.display = "block";
  addModal.setAttribute("aria-hidden", "false");
  addNameInput.focus();
});

function closeAdd() {
  addModal.style.display = "none";
  addModal.setAttribute("aria-hidden", "true");
  addNameInput.value = "";
  selectedImage = "";
  document.querySelectorAll(".available__images").forEach(img => {
    img.classList.remove("available__images--selected");
    img.setAttribute("aria-pressed", "false");
  });
  addBtn.focus();
}

document.getElementById("add-modal-close-id")?.addEventListener("click", closeAdd);

function mountAvailableImages() {
  if (!availableImagesContainer) return;
  availableImagesContainer.innerHTML = "";
  newCoders.forEach(coder => {
    const wrap = document.createElement("div");
    wrap.className = "available__image--container";
    const img = document.createElement("img");
    img.className = "available__images";
    img.src = coder.image;
    img.alt = "Avatar disponible para nuevos coders";
    img.loading = "lazy";
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-pressed", "false");
    const select = () => {
      selectedImage = coder.image;
      document.querySelectorAll(".available__images").forEach(i => {
        i.classList.remove("available__images--selected");
        i.setAttribute("aria-pressed", "false");
      });
      img.classList.add("available__images--selected");
      img.setAttribute("aria-pressed", "true");
    };
    img.addEventListener("click", select);
    img.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select();
      }
    });
    wrap.appendChild(img);
    availableImagesContainer.appendChild(wrap);
  });
}

mountAvailableImages();

addConfirmBtn?.addEventListener("click", () => {
  const name = addNameInput.value.trim();
  if (!name || !selectedImage) {
    alert("Please enter a name and select an image before adding.");
    return;
  }
  const newItem = { image: selectedImage, name };
  coders.push(newItem);
  newCoders = newCoders.filter(c => c.image !== selectedImage);
  renderCoders();
  mountAvailableImages();
  closeAdd();
});

removeBtn?.addEventListener("click", () => {
  removeModal.style.display = "block";
  removeModal.setAttribute("aria-hidden", "false");
  removeNameInput.focus();
});

removeClose?.addEventListener("click", () => {
  removeModal.style.display = "none";
  removeModal.setAttribute("aria-hidden", "true");
  removeNameInput.value = "";
  removeBtn.focus();
});

function removeCoder() {
  const value = removeNameInput.value.trim();
  if (!value) {
    removeModal.style.display = "none";
    removeModal.setAttribute("aria-hidden", "true");
    return;
  }
  const before = coders.length;
  coders = coders.filter(c => c.name.toLowerCase() !== value.toLowerCase());
  renderCoders();
  removeModal.style.display = "none";
  removeModal.setAttribute("aria-hidden", "true");
  removeNameInput.value = "";
  if (coders.length < before) {
    showModal("assets/others/pikachu-remove-button.jpg", "Coder eliminado", "The coder has been removed...", 5000);
  }
}

removeConfirmBtn?.addEventListener("click", removeCoder);

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (modal.style.display === "block") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
    catchBtn?.focus();
  }
  if (addModal.style.display === "block") closeAdd();
  if (removeModal.style.display === "block") {
    removeModal.style.display = "none";
    removeModal.setAttribute("aria-hidden", "true");
    removeNameInput.value = "";
    removeBtn?.focus();
  }
});

resetBtn?.addEventListener("click", () => location.reload());

if (window.ScrollReveal) {
  const sr = ScrollReveal();
  sr.reveal(".home__div-text", { duration: 1200, origin: "bottom", distance: "100px" });
  sr.reveal(".pokeball", {
    distance: "50px",
    duration: 900,
    rotate: { x: 0, y: 180, z: 0 },
    opacity: 0,
    scale: 0.9,
    easing: "ease-in-out",
    reset: true
  });
  sr.reveal("#home-div-button", { duration: 1000, origin: "bottom", distance: "80px" });
  sr.reveal(".coders", { duration: 1200, origin: "bottom", distance: "100px" });
}

renderCoders();

function cycleClassicPalette() {
  classicPaletteIndex = (classicPaletteIndex + 1) % classicPalette.length;
  const palette = classicPalette[classicPaletteIndex];
  document.body.style.backgroundColor = palette.background;
  if (homeText) {
    homeText.style.color = palette.text;
  }
}

function resetClassicPaletteState() {
  classicPaletteIndex = -1;
  document.body.style.backgroundColor = "";
  if (homeText) {
    homeText.style.color = "";
  }
}

function setTheme(theme) {
  document.body.classList.remove(...themeClasses);
  if (theme) {
    document.body.classList.add(theme);
    resetClassicPaletteState();
  }
  if (themeToggleBtn) {
    const classic = !theme || theme === "theme-pikachu";
    themeToggleBtn.setAttribute("aria-pressed", classic ? "true" : "false");
  }
  themeControls.forEach(({ button, className }) => {
    if (!button) return;
    button.setAttribute("aria-pressed", theme === className ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  themeControls.forEach(({ button, className }) => {
    if (!button) return;
    button.addEventListener("click", () => setTheme(className));
  });
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      setTheme(null);
      cycleClassicPalette();
    });
  }
  const active = themeClasses.find(cls => document.body.classList.contains(cls));
  setTheme(active || "theme-pikachu");
});

