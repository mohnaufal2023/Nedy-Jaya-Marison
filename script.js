// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Swiper Sponsor
// ===============================

const swiper = new Swiper(".swiper", {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// ===============================
// VIDEO MODAL
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("houseVideo");

    function openVideo(videoSrc) {

        modal.classList.add("active");

        video.src = videoSrc;

        video.load();

        video.play();

    }

    function closeVideo() {

        modal.classList.remove("active");

        video.pause();

        video.currentTime = 0;

        video.src = "";

    }

    // supaya bisa dipanggil dari HTML onclick
    window.openVideo = openVideo;
    window.closeVideo = closeVideo;

    // klik area hitam untuk menutup
    modal.addEventListener("click", function (e) {

        if (e.target === modal) {
            closeVideo();
        }

    });

});