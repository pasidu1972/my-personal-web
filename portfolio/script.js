document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.classList.remove("hidden");
        form.reset();

        setTimeout(() => {
            formMessage.classList.add("hidden");
        }, 3000);
    });
});



    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        var button = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }






 