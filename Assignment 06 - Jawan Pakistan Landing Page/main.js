document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;

                // Add the base class and the specific animation
                entry.target.classList.add('animate__animated', animationClass);

                // Ensure opacity is reset to 1
                entry.target.style.opacity = 1;

                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});