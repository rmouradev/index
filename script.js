document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');
    const numParticles = 100;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.width = `${Math.random() * 5}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${2 + Math.random() * 3}s`;
        background.appendChild(particle);
        particles.push(particle);
    }
});

/* CSS para as partículas */
const styles = document.createElement('style');
styles.innerHTML = `
.particle {
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation-name: float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0.7;
}

@keyframes float {
    0% {
        transform: translateY(0);
        opacity: 0.7;
    }
    50% {
        transform: translateY(-20px);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 0.7;
    }
}
`;
document.head.appendChild(styles);
