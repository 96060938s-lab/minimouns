

/* =================================
   MINIMOUNS - APLICACIÓN PRINCIPAL
   ================================= */

// Elementos de la pantalla de carga
const loadingScreen = document.getElementById("loading-screen");
const loadingProgress = document.getElementById("loading-progress");
const loadingMessage = document.getElementById("loading-message");

// Pantalla principal del juego
const gameScreen = document.getElementById("game-screen");

// Etapas de carga
const loadingSteps = [
    {
        progress: 25,
        message: "Preparando mundo mágico..."
    },
    {
        progress: 50,
        message: "Despertando criaturas..."
    },
    {
        progress: 75,
        message: "Preparando tarjetas..."
    },
    {
        progress: 100,
        message: "¡Todo listo!"
    }
];

// Iniciar pantalla de carga
function startLoading() {

    let currentStep = 0;

    const loadingInterval = setInterval(() => {

        const step = loadingSteps[currentStep];

        loadingProgress.style.width = step.progress + "%";
        loadingMessage.textContent = step.message;

        currentStep++;

        if (currentStep >= loadingSteps.length) {

            clearInterval(loadingInterval);

            setTimeout(() => {
                loadingScreen.hidden = true;
                gameScreen.hidden = false;
            }, 800);

        }

    }, 1000);
}

// Iniciar MiniMouns
startLoading();

console.log("MiniMouns iniciado correctamente.");
