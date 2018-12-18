const blockchainSimulator = {
    url : "BlockChainSimulator.html",
    imageSrc : "images/BlockchainImage.png",
    title: "Blockchain Simulator",
    tags: ["School Projects", "Computer Networks"],
    date: new Date(2018, 3, 1)
}

const  VRInterface = {
    url : "AStudyOnUserInterfacesInVR.html",
    imageSrc : "images/VRButtons.jpg",
    title: "A Study On User Interface Interactions With Buttons In Virtual Reality",
    tags: ["School Projects", "Virtual Reality"],
    date: new Date(2017, 11, 12)
}

const VRMedical = {
    url : "VRMedicalImagingSoftware.html",
    imageSrc : "images/VR_1.png",
    title: "VR Medical Imaging Software",
    tags: ["School Projects", "Virtual Reality"],
    date: new Date(2017, 3, 1)
}


const spoopyGame = {
    url : "SpoopyGame.html",
    imageSrc : "images/SpoopyGameWithLogo.png",
    title: "SpoopyGame",
    tags: ["School Projects", "Games"],
    date: new Date(2016, 11, 12)
}

const  robotWar = {
    url : "RobotWar.html",
    imageSrc : "images/RobotWar.png",
    title: "Robot War",
    tags: ["School Projects", "Games", "Computer Networks"],
    date: new Date(2016, 11, 12)
}

const summerResearch = {
    url : "SummerResearch.html",
    imageSrc : "images/SummerResearch.jpg",
    title: "Summer Research: P2IRC",
    tags: ["Computer Networks"],
    date: new Date(2016, 8, 1)
}

const robTheBank = {
    url : "RobTheBank.html",
    imageSrc : "images/RobTheBank.png",
    title: "Rob the Bank",
    tags: ["Games"],
    date: new Date(2016, 9, 1)
}

const runKittyRun = {
    url : "RunKittyRun.html",
    imageSrc : "images/RunKittyRun.png",
    title: "Run Kitty Run",
    tags: ["Games"],
    date: new Date(2015, 8, 1)
}

const forceOfNature = {
    url : "GameJamMay2018.html",
    imageSrc : "images/ForceOfNatureGameplayScreenshot.png",
    title: "Force of Nature",
    tags: ["Games"],
    date: new Date(2018, 4, 31)
}

const dumbSwitcher = {
    url : "https://kyles22.github.io/DuMBSwitcher/",
    imageSrc: "images/dumbswitcher_logo.png",
    title: "Dual Monitor Background Switcher",
    tags: ["Tools", "Personal Projects"],
    date: new Date(2018, 7, 26)
}

const infoVisProject = {
    url: "https://kyles22.github.io/Air-Quality-Impact-On-UFO-Sightings/",
    imageSrc: "images/AirQualityUFODash.png",
    title: "Air Quality and U.F.O Sightings Dashboard",
    tags: ["School Projects", "Tools"],
    date: new Date(2018, 12, 17)
}

const projects = [blockchainSimulator, VRInterface, VRMedical, spoopyGame, robotWar, summerResearch, robTheBank, runKittyRun, forceOfNature, dumbSwitcher, infoVisProject];

projects.sort(function(a, b) {
    a = a.date;
    b = b.date;
    return a>b ? -1 : a<b ? 1 : 0;
})

window.onload = function() {
    console.log("Page loading");
    displayProjects("All");
}

/**
 * Add projects from the given category to the portfolio section
 * @param {string} category 
 */
function displayProjects(category){

    mainContainer = document.getElementById("projects");

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }    

    var column = 0;

    var curRow = null;

    for(var i = 0; i < projects.length; i++){

        var curProject = projects[i];

        if(category !== "All" && !curProject.tags.includes(category)){
            continue;
        }

        // Three entries per row
        if((column % 3) == 0){
            curRow = document.createElement("div");
            curRow.classList.add("row");
            mainContainer.appendChild(curRow);
        }

        var newProject = document.createElement("div");
        newProject.classList.add("four", "columns", "portfolio");

        var anchor = document.createElement("a");
        anchor.href = curProject.url;
        anchor.title = curProject.title;
        anchor.target = "_blank";

        var image = document.createElement("img");
        image.src = curProject.imageSrc;
        image.classList.add("transparent", "portfolio_img");
        image.alt = curProject.title;

        var title = document.createElement("p");
        title.textContent = curProject.title;

        anchor.appendChild(image);
        

        newProject.appendChild(anchor);
        newProject.appendChild(title);

        curRow.appendChild(newProject);

        column ++;
    }

}



