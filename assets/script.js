const body = document.querySelector("body")
const main = document.querySelector("main")
const element = document.querySelector(".element")
const containerDisplay = document.querySelector("#containerDisplay")
const containerFlexDirection = document.querySelector("#containerFlexDirection")
const containerJustifyContent = document.querySelector("#containerJustifyContent")
const containerAlignItems = document.querySelector("#containerAlignItems")
const containerFlexWrap = document.querySelector("#containerFlexWrap")
const containerTemplateColumns = document.querySelector("#containerTemplateColumns")
const containerTemplateRows = document.querySelector("#containerTemplateRows")
const containerGap = document.querySelector("#containerGap")
const btnAjout = document.querySelector("#btnAjout")
const btnSuppr = document.querySelector("#btnSuppr")
const btnReset = document.querySelector("#btnReset")
const containerWidth = document.querySelector("#containerWidth")
const containerHeight = document.querySelector("#containerHeight")
const btnDarkLight = document.querySelector("#btnDarkLight")

const selectDisplay = document.querySelector("#selectDisplay")
const selectFlexDirection = document.querySelector("#selectFlexDirection")
const selectJustifyContent = document.querySelector("#selectJustifyContent")
const selectAlignItems = document.querySelector("#selectAlignItems")
const selectflexWrap = document.querySelector("#selectFlexWrap")
const zoneTemplateColumns = document.querySelector("#inputTemplateColumns")
const zoneTemplateRows = document.querySelector("#inputTemplateRows")
const zoneTailleGap = document.querySelector("#inputTailleGap")
const selectFormatGap = document.querySelector("#selectFormatGap")
const inputWidth = document.querySelector("#inputWidth")
const selectFormatWidth = document.querySelector("#selectFormatWidth")
const inputHeight = document.querySelector("#inputHeight")
const selectFormatHeight = document.querySelector("#selectFormatHeight")

// Si choix du thème en mémoire, l'exécute 
let themeEnregistre = localStorage.getItem("theme")
let imgEnregistre = localStorage.getItem("img")
if(themeEnregistre) {
    body.classList.add(themeEnregistre)
    btnDarkLight.src = imgEnregistre
}

// Change le thème et garde le choix en mémoire
btnDarkLight.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        body.classList.add("light")
        localStorage.setItem("theme", "light")
        btnDarkLight.src = "assets/img/darkMode.png"
        localStorage.setItem("img", "assets/img/darkMode.png")
    }
    else {
        body.classList.remove("light")
        body.classList.add("dark")
        localStorage.setItem("theme", "dark")
        btnDarkLight.src = "assets/img/lightMode.png"
        localStorage.setItem("img", "assets/img/lightMode.png")
    }

})

// Permet de choisir le display
selectDisplay.addEventListener("change", () => {
    if (selectDisplay.value === "grid") {
        main.style.display = "grid"
        containerFlexDirection.style.display = "none"
        containerJustifyContent.style.display = "none"
        containerFlexWrap.style.display = "none"
        containerTemplateColumns.style.display = "block"
        containerTemplateRows.style.display = "block"
    }
    else {
        main.style.display = "flex"
        containerFlexDirection.style.display = "block"
        containerJustifyContent.style.display = "block"
        containerAlignItems.style.display = "block"
        containerFlexWrap.style.display = "block"
        containerTemplateColumns.style.display = "none"
        containerTemplateRows.style.display = "none"
    }
})

// Permet de choisir le Flex Direction
selectFlexDirection.addEventListener("change", () => {
    if (selectFlexDirection.value === "row") {
        main.style.flexDirection = "row"
    }
    else if (selectFlexDirection.value === "rowReverse") {
        main.style.flexDirection = "row-reverse"
    }
    else if (selectFlexDirection.value === "column") {
        main.style.flexDirection = "column"
    }
    else {
        main.style.flexDirection = "column-reverse"
    }
})

// Permet de choisir le Justify Content
selectJustifyContent.addEventListener("change", () => {
    if (selectJustifyContent.value === "start") {
        main.style.justifyContent = "start"
    }
    else if (selectJustifyContent.value === "end") {
        main.style.justifyContent = "end"
    }
    else if (selectJustifyContent.value === "center") {
        main.style.justifyContent = "center"
    }
    else if (selectJustifyContent.value === "spaceAround") {
        main.style.justifyContent = "space-around"
    }
    else if (selectJustifyContent.value === "spaceEvenly") {
        main.style.justifyContent = "space-evenly"
    }
    else {
        main.style.justifyContent = "space-between"
    }
})

// Permet de choisir l'Align-items
selectAlignItems.addEventListener("change", () => {
    if (selectAlignItems.value === "start") {
        main.style.alignItems = "start"
    }
    else if (selectAlignItems.value === "end") {
        main.style.alignItems = "end"
    }
    else {
        main.style.alignItems = "center"
    }
})

// Permet de choisir le Flew Wrap
selectflexWrap.addEventListener("change", () => {
    if (selectflexWrap.value === "wrap") {
        main.style.flexWrap = "wrap"
    }
    else if (selectflexWrap.value === "noWrap") {
        main.style.flexWrap = "nowrap"
    }
    else {
        main.style.flexWrap = "wrap-reverse"
    }
})

// Permet de choisir la taille du Gap
zoneTailleGap.addEventListener("change", () => {
    main.style.gap = zoneTailleGap.value + "" + selectFormatGap.value
})

// Permet de choisir le format du Gap
selectFormatGap.addEventListener("change", () => {
    main.style.gap = zoneTailleGap.value + "" + selectFormatGap.value
})

// Permet de créer un élément dans le conteneur
let i = 2

btnAjout.addEventListener("click", () => {
    const element = document.createElement("div")
    element.classList.add("element")
    element.innerText = i
    main.appendChild(element)
    i++
})

// Permet de supprimer un élément du conteneur
btnSuppr.addEventListener("click", () => {
    if(main.children.length > 1) {
        main.removeChild(main.lastChild)
        i--
    }
})

// Permet de tout reset
btnReset.addEventListener("click", () => {
    if(selectDisplay.value = "grid") {
        main.style.display = "flex"
        selectDisplay.value = "flex"
        zoneTemplateColumns.value = ""
        zoneTemplateRows.value = ""
        containerFlexDirection.style.display = "block"
        containerJustifyContent.style.display = "block"
        containerFlexWrap.style.display = "block"
        containerTemplateColumns.style.display = "none"
        containerTemplateRows.style.display = "none"
    }
    
    main.style.flexDirection = "row"
    selectFlexDirection.value = "row"
    main.style.justifyContent = "start"
    selectJustifyContent.value = "start"
    main.style.alignItems = "start"
    selectAlignItems.value = "start"
    main.style.flexWrap = "wrap"
    selectflexWrap.value = "wrap"
    main.style.gap = "20px"
    zoneTailleGap.value = ""
    while(main.children.length > 1) {
        main.removeChild(main.lastChild)
    }
    i = 2
})

// Permet de choisir le grid-template-columns
zoneTemplateColumns.addEventListener("change", () => {
    main.style.gridTemplateColumns = zoneTemplateColumns.value
})

// Permet de choisir le grid-template-rows
zoneTemplateRows.addEventListener("change", () => {
    main.style.gridTemplateRows = zoneTemplateRows.value
})

