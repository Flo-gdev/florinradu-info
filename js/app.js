const landscapeImages = [
    "images/landscape/landscape1.jpg",
    "images/landscape/landscape2.jpg",
    "images/landscape/landscape3.jpg",
    "images/landscape/landscape4.jpg"
];

const portraitImages = [
    "images/portrait/portrait1.jpg",
    "images/portrait/portrait2.jpg",
    "images/portrait/portrait3.jpg",
    "images/portrait/portrait4.jpg",
    "images/portrait/portrait5.jpg"
];

const landscapeFrame =
    document.getElementById("landscape");

const portraitFrame =
    document.getElementById("portrait");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const prevBtn =
    document.getElementById("prev-btn");

const nextBtn =
    document.getElementById("next-btn");

const closeBtn =
    document.getElementById("close-btn");

let currentGallery = [];
let currentIndex = 0;

/* thumbnail pe homepage */

landscapeFrame.style.backgroundImage =
    `url('${landscapeImages[0]}')`;

portraitFrame.style.backgroundImage =
    `url('${portraitImages[0]}')`;

/* deschidere galerii */

landscapeFrame.addEventListener("click", () => {

    currentGallery = landscapeImages;
    currentIndex = 0;

    openLightbox();
});

portraitFrame.addEventListener("click", () => {

    currentGallery = portraitImages;
    currentIndex = 0;

    openLightbox();
});

function openLightbox() {

    lightboxImage.src =
        currentGallery[currentIndex];

    lightbox.style.display = "flex";
}

function showCurrentImage() {

    lightboxImage.src =
        currentGallery[currentIndex];
}

/* urmatoare */

nextBtn.addEventListener("click", () => {

    currentIndex =
        (currentIndex + 1) %
        currentGallery.length;

    showCurrentImage();
});

/* precedenta */

prevBtn.addEventListener("click", () => {

    currentIndex =
        (currentIndex - 1 + currentGallery.length) %
        currentGallery.length;

    showCurrentImage();
});

/* inchidere */

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";
});

/* click pe fundal inchide */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";
    }
});