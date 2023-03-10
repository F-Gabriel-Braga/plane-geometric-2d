let LENGTH = 30;
let OBJETO = [];

class Ponto {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const PENTAGON = [
    new Ponto(15, 9),
    new Ponto(14, 10),
    new Ponto(16, 10),
    new Ponto(13, 11),
    new Ponto(17, 11),
    new Ponto(12, 12),
    new Ponto(18, 12),
    new Ponto(11, 13),
    new Ponto(19, 13),
    new Ponto(10, 14),
    new Ponto(20, 14),
    new Ponto(10, 15),
    new Ponto(20, 15),
    new Ponto(10, 16),
    new Ponto(20, 16),
    new Ponto(10, 17),
    new Ponto(20, 17),
    new Ponto(10, 18),
    new Ponto(20, 18),
    new Ponto(10, 19),
    new Ponto(11, 19),
    new Ponto(12, 19),
    new Ponto(13, 19),
    new Ponto(14, 19),
    new Ponto(15, 19),
    new Ponto(16, 19),
    new Ponto(17, 19),
    new Ponto(18, 19),
    new Ponto(19, 19),
    new Ponto(20, 19),
];

const SQUARE = [
    new Ponto(13, 13),
    new Ponto(13, 14),
    new Ponto(13, 15),
    new Ponto(14, 13),
    new Ponto(15, 13),
    new Ponto(16, 13),
    new Ponto(17, 13),
    new Ponto(18, 13),
    new Ponto(19, 13),
    new Ponto(13, 16),
    new Ponto(13, 17),
    new Ponto(13, 18),
    new Ponto(13, 19),
    new Ponto(19, 19),
    new Ponto(19, 18),
    new Ponto(19, 17),
    new Ponto(19, 16),
    new Ponto(19, 15),
    new Ponto(19, 14),
    new Ponto(14, 19),
    new Ponto(15, 19),
    new Ponto(16, 19),
    new Ponto(17, 19),
    new Ponto(18, 19)
];

const TRIANGLE = [
    new Ponto(19, 25),
    new Ponto(20, 25),
    new Ponto(20, 24),
    new Ponto(21, 23),
    new Ponto(22, 22),
    new Ponto(23, 21),
    new Ponto(24, 20),
    new Ponto(25, 19),
    new Ponto(26, 18),
    new Ponto(26, 19),
    new Ponto(26, 20),
    new Ponto(26, 21),
    new Ponto(26, 22),
    new Ponto(26, 23),
    new Ponto(26, 24),
    new Ponto(26, 25),
    new Ponto(25, 25),
    new Ponto(24, 25),
    new Ponto(23, 25),
    new Ponto(22, 25),
    new Ponto(21, 25),
];

const LOZENGE = [
    new Ponto(17, 18),
    new Ponto(16, 17),
    new Ponto(15, 16),
    new Ponto(14, 15),
    new Ponto(18, 19),
    new Ponto(19, 18),
    new Ponto(20, 17),
    new Ponto(21, 16),
    new Ponto(22, 15),
    new Ponto(21, 14),
    new Ponto(20, 13),
    new Ponto(19, 12),
    new Ponto(18, 11),
    new Ponto(15, 14),
    new Ponto(16, 13),
    new Ponto(17, 12),
];

const CIRCLE = [
    new Ponto(14, 9),
    new Ponto(15, 9),
    new Ponto(16, 9),
    new Ponto(17, 9),
    new Ponto(12, 10),
    new Ponto(13, 10),
    new Ponto(18, 10),
    new Ponto(19, 10),
    new Ponto(11, 11),
    new Ponto(20, 11),
    new Ponto(10, 12),
    new Ponto(21, 12),
    new Ponto(10, 13),
    new Ponto(21, 13),
    new Ponto(9, 14),
    new Ponto(22, 14),
    new Ponto(9, 15),
    new Ponto(22, 15),
    new Ponto(9, 16),
    new Ponto(22, 16),
    new Ponto(9, 17),
    new Ponto(22, 17),
    new Ponto(10, 18),
    new Ponto(21, 18),
    new Ponto(10, 19),
    new Ponto(21, 19),
    new Ponto(11, 20),
    new Ponto(20, 20),
    new Ponto(12, 21),
    new Ponto(13, 21),
    new Ponto(18, 21),
    new Ponto(19, 21),
    new Ponto(14, 22),
    new Ponto(15, 22),
    new Ponto(16, 22),
    new Ponto(17, 22)
];

const POINTS = [
    new Ponto(1, 3),
    new Ponto(1, 1),
    new Ponto(3, 1),
    new Ponto(3, 3)
];

function criarGrade(length = LENGTH) {
    const table = document.getElementById("grade");
    let grade = "";
    for (let y = 1; y <= length; y++) {
        grade += "<tr>";
        for (let x = 1; x <= length; x++) {
            grade += `<td title='(${x},${y})'></td>`;
        }
        grade += "</tr>";
    }
    table.innerHTML = grade;
}

criarGrade();

function desenharObjeto(pontos = []) {
    OBJETO = pontos;
    criarGrade();
    const table = document.getElementById("grade");
    for (let ponto of pontos) {
        const { x, y } = ponto;
        let celula;
        try {
            celula = table.children[y - 1].children[x - 1];
            celula.classList.add("active");
        }
        catch (err) {
            // Caso a coordenada n??o seja encontrada, o algoritmo ignora
        }
    }
}

function iniciarControles() {
    const objectControl = document.getElementById("object-control");
    objectControl.addEventListener('change', selecionarObjeto);
    const btnCreate = document.getElementById("btn-create");
    btnCreate.addEventListener('click', criarNovoObjeto);
    const btnTranslate = document.getElementById("btn-translate");
    btnTranslate.addEventListener('click', transladarObjeto);
    const btnScalling = document.getElementById('btn-scalling');
    btnScalling.addEventListener('click', escalonarObjeto)
    const btnRotate = document.getElementById("btn-rotate");
    btnRotate.addEventListener('click', rotacionarObjeto);
    const btnClean = document.getElementById("btn-clean");
    btnClean.addEventListener('click', reiniciarGrade);
    const sizeControl = document.getElementById("size-control");
    sizeControl.addEventListener('change', escalarGrade)
    const checkGrade = document.getElementById("check-grade");
    checkGrade.addEventListener('change', removerBordaGrade)
}

iniciarControles();

function selecionarObjeto(e) {
    let value = e.target.value;
    switch (value) {
        case "square":
            desenharObjeto(SQUARE);
            break;
        case "triangle":
            desenharObjeto(TRIANGLE);
            break;
        case "lozenge":
            desenharObjeto(LOZENGE);
            break;
        case "pentagon":
            desenharObjeto(PENTAGON);
            break;
        case "circle":
            desenharObjeto(CIRCLE);
            break;
        case "points":
            desenharObjeto(POINTS)
            break;
    }
}

function criarNovoObjeto() {
    const coordinatControl = document.getElementById("coordinat-control");
    const value = coordinatControl.value;
    const cordenadas = value.trim().split(";").map(subtring => subtring.split(","));
    const objeto = cordenadas.map(cordenada => new Ponto(Number(cordenada[0]), Number(cordenada[1])));
    desenharObjeto(objeto);
}

function transladarObjeto() {
    let x, y;
    try {
        x = Number(document.getElementById("translate-control-x").value);
        y = Number(document.getElementById("translate-control-y").value);
    }
    catch (err) {
        alert("Insira valores v??lidos de x e y.");
        return;
    }
    if (OBJETO.length === 0) {
        alert("Selecione ou crie um objeto.");
        return;
    }
    else {
        for (let ponto of OBJETO) {
            ponto.x += x;
            ponto.y += y;
        }
        desenharObjeto(OBJETO);
    }
}

function rotacionarObjeto() {
    let angulo = 0;
    try {
        angulo = Number(document.getElementById("rotate-control").value);
        if (angulo < 0 || angulo > 360) {
            throw new Error();
        }
    }
    catch (err) {
        alert("Insira valor v??lido do ??ngulo.");
        return;
    }
    const radianos = (angulo * Math.PI) / 180;
    const matrizRotacao = [
        [Math.cos(radianos), -Math.sin(radianos)],
        [Math.sin(radianos), Math.cos(radianos)]
    ];
    let objetoRotacionado = [];
    for (let ponto of OBJETO) {
        let x = Math.round((matrizRotacao[0][0] * ponto.x) + (matrizRotacao[0][1] * ponto.y));
        let y = Math.round((matrizRotacao[1][0] * ponto.x) + (matrizRotacao[1][1] * ponto.y));
        objetoRotacionado.push(new Ponto(x, y));
    }
    const centroideObjeto = obterCentroide();
    const centroideObjetoRotacionado = obterCentroide(objetoRotacionado);
    const direfencaX = centroideObjetoRotacionado.x - centroideObjeto.x;
    const direfencaY = centroideObjetoRotacionado.y - centroideObjeto.y;
    for (let ponto of objetoRotacionado) {
        ponto.x -= direfencaX;
        ponto.y -= direfencaY;
    }
    desenharObjeto(objetoRotacionado);
}

function escalonarObjeto() {
    let scaleX, scaleY;
    try {
        scaleX = Number(document.getElementById("scalling-control-x").value);
        scaleY = Number(document.getElementById("scalling-control-y").value);
        if ((scaleX && scaleY) <= 0)
            throw new Error();
    }
    catch (err) {
        alert("Insira valores v??lidos de x e y.");
        return;
    }
    if (OBJETO.length === 0) {
        alert("Selecione ou crie um objeto.");
        return;
    }
    else {
        let objetoEscalonado = [];
        for (let ponto of OBJETO) {
            let x = Math.round(ponto.x * scaleX);
            let y = Math.round(ponto.y * scaleY);
            objetoEscalonado.push(new Ponto(x, y));
        }
        const centroideObjeto = obterCentroide();
        const centroideObjetoEscalonado = obterCentroide(objetoEscalonado);
        const direfencaX = centroideObjetoEscalonado.x - centroideObjeto.x;
        const direfencaY = centroideObjetoEscalonado.y - centroideObjeto.y;
        for (let ponto of objetoEscalonado) {
            ponto.x -= direfencaX;
            ponto.y -= direfencaY;
        }
        desenharObjeto(objetoEscalonado);
    }
}

function obterCentroide(objeto = OBJETO) {
    let minX = Math.min(...objeto.map(ponto => ponto.x));
    let maxX = Math.max(...objeto.map(ponto => ponto.x));
    let minY = Math.min(...objeto.map(ponto => ponto.y));
    let maxY = Math.max(...objeto.map(ponto => ponto.y));
    let x = Math.round((minX + maxX) / 2);
    let y = Math.round((minY + maxY) / 2);
    let centroide = new Ponto(x, y);
    return centroide;
}

function reiniciarGrade() {
    OBJETO = [];
    criarGrade()
}

function escalarGrade(e) {
    const value = e.target.value;
    LENGTH = value;
    criarGrade();
    desenharObjeto(OBJETO);
}

function removerBordaGrade(e) {
    const isCheck = e.target.checked;
    const table = document.getElementById("grade");
    if (isCheck) {
        table.classList.remove("not-grade");
    }
    else {
        table.classList.add("not-grade");
    }
}