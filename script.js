import algoList from "./algoList.js";

//création d'un tableau de 100 valeur à classer

const randomArrayCent = function (numberToTri) {
    let arrayCent = [];
    for (let i = 0; i < numberToTri; i++) {
        arrayCent.push(i);
    }
    arrayCent.sort(() => Math.random() - 0.5);
    arrayCent.sort(() => Math.random() - 0.5);
    arrayCent.sort(() => Math.random() - 0.5);
    return arrayCent;
};

//Afficher les valeur sous forme de barre

const showRandomArray = function (randomArry, algo) {
    const barsContainer = document.getElementById("bars");
    const { nameId } = algo;
    const { name } = algo;
    const bars = [];

    for (let i = 0; i < randomArry.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = randomArry[i] + "%";
        bars.push(bar);
        barsContainer.appendChild(bar);
    }

    return bars;
};

// Algorithme de tri par sélection
const selectionSort = async function () {
    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        bars[i].classList.add("selected");
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].classList.add("selected");
            await new Promise((resolve) => setTimeout(resolve, 10)); // Pause pour voir la sélection
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                minIndex = j;
            }
            bars[j].classList.remove("selected");
        }
        bars[minIndex].classList.add("selected");
        await new Promise((resolve) => setTimeout(resolve, 50)); // Pause pour voir l'échange
        swapBars(i, minIndex);
        bars[i].classList.remove("selected");
        bars[minIndex].classList.remove("selected");
    }
};

// Fonction pour échanger deux barres
const swapBars = function (i, j) {
    const temp = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = temp;
};

document.addEventListener("DOMContentLoaded", () => {
    const randomArry = randomArrayCent(100);
    let bars = showRandomArray(randomArry, algoList[0]);
    const buttonTri = document.getElementById("buttonTri");
    buttonTri.addEventListener("click", () => {
        selectionSort(bars);
    });
});
