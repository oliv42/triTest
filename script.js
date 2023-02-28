import algoList from "./algoList.js";

//création d'un tableau de 100 valeur à classer

const randomArrayCent = function () {
    let arrayCent = [];
    for (let i = 0; i < 101; i++) {
        arrayCent.push(i);
    }
    arrayCent.sort(() => Math.random() - 0.5);
    arrayCent.sort(() => Math.random() - 0.5);
    arrayCent.sort(() => Math.random() - 0.5);
    return arrayCent;
};

//Afficher les valeur sous forme de barre

const showRandomArray = function (randomArry, algo) {
    const { nameId } = algo;
    const { name } = algo;

    const main = document.querySelector("main");
    let divAlgo = document.createElement("div");
    let titleAlgo = document.createElement("h3");
    let divTri = document.createElement("div");
    divTri.classList.add("divTri");

    titleAlgo.innerHTML = name;
    divAlgo.id = nameId;
    main.appendChild(divAlgo);
    divAlgo.appendChild(titleAlgo);
    divAlgo.appendChild(divTri);

    randomArry.forEach((element, index) => {
        let divElement = document.createElement("div");
        divElement.id = index;
        divElement.classList.add("divElement");
        const maxHeightDiv = 800;
        let heightDiv = (maxHeightDiv * element) / 100;
        divElement.style.height = `${heightDiv}px`;
        divTri.appendChild(divElement);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const randomArry = randomArrayCent();
    showRandomArray(randomArry, algoList[0]);
    console.log(algoList[0]);
});
