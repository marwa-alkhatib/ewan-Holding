const counters = document.querySelectorAll(".stat-num");

const duration = 2000; // كل العدادات تخلص في ثانيتين

counters.forEach(function (counter) {

    const target = Number(counter.getAttribute("data-count"));
    const startTime = performance.now();

    function update(currentTime) {

        const timePassed = currentTime - startTime;

        // النسبة اللي خلصت من الوقت
        const progress = Math.min(timePassed / duration, 1);

        // الرقم الحالي
        const currentNumber = Math.floor(progress * target);

        counter.innerHTML = currentNumber + "+";

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.innerHTML = target + "+";
        }
    }

    requestAnimationFrame(update);
});

const navbar = document.querySelector(".hero-nav");

window.addEventListener("scroll", function () {

    // تغيير لون الـ Navbar
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }


    // الخط الدهبي
    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage = (scrollTop / pageHeight) * 100;

    navbar.style.setProperty(
        "--scroll-width",
        scrollPercentage + "%"
    );

});