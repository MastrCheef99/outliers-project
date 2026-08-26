const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const years = [
    {
        year: 1835,
        fieldBuffs: { technology: 4, industry: 5, legal: 4, music: 3, science: 3 },
        blurb: "Someone born in 1835 was perfectly poised to take advantage of a post civil war industrial economy. Some people born around this year were some<br> of the richest people in history"
    },
    {
        year: 1955,
        fieldBuffs: {technology: 5, industry: 3, legal: 2, music: 2, science: 2 },
        blurb: "Someone born in 1955 was in college or leaving college during the technological revolution, with such innovations as the internet and personal<br> computers being made. Being in a technological field was thus an advantage for someone born in 1955."
    },
    {
        year: 1940,
        fieldBuffs: {technology: 3, industry: 2, legal: 3, music: 5, science: 4 },
        blurb: "Many fields were growing by the time someone born in 1940 would enter the workforce. Music was innovating and growing and technological and physics<br> breakthroughs were being made."
    },
    {
        year: 1920,
        fieldBuffs: {technology: 3, industry: 1, legal: 4, music: 3, science: 4 },
        blurb: "Someone born in 1920 might have a very rough time entering the workforce in the midst of the Great Depression, but with the World War 2 and the<br> economic revival, many fields were in demand. Scientists in particular were in demand, especially after the nuclear bomb."
    },
    {
        year: 1900,
        fieldBuffs: {technology: 4, industry: 3, legal: 3, music: 4, science: 5},
        blurb: "Someone born in 1900 would have some decent opportunities in all fields, but when they were settled in their jobs and starting families, the great<br> depression hit. For a time though, Jazz music was booming, scientific breakthroughs were being made, technology was developing, etc."
    }
]
var statsRolling = []

var rollBirthMonthRunning = false;
var rollBirthYearRunning = false;
var skillPoints = 60;

var outlier = {
    birthYear: null,
    randomStats: new Map(),
    chosenStats: new Map([
        ["technology", 5],
        ["industry", 5],
        ["legal", 5],
        ["music", 5],
        ["science", 5],
        ["athleticism", 5],
        ["creativity", 5],
        ["discipline", 5],
        ["persistence", 5],
        ["social", 5]
    ]),
    image: null,
    yap: null
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rollBirthMonth(){
    if (!rollBirthMonthRunning){
        rollBirthMonthRunning = true
        let monthRoll = Math.floor(Math.random() * 11);
        await rollDieAnimation("month");
        document.getElementById("month-label").textContent = months[monthRoll];
        outlier.randomStats.set("month", monthRoll);
        rollBirthMonthRunning = false;
    }
}

async function rollBirthYear(){
    if (!rollBirthYearRunning){
        rollBirthYearRunning = true
        let yearRoll = Math.floor(Math.random() * years.length);
        await rollDieAnimation("year");
        document.getElementById("year-label").textContent = years[yearRoll].year;
        outlier.birthYear = years[yearRoll]
        rollBirthYearRunning = false;
    }
}

async function rollStats(stat, roll = -1){
    if (!statsRolling.includes(stat) && roll == -1){
        statsRolling.push(stat);
        let statRoll = Math.floor(Math.random() * 14) + 6;
        await rollDieAnimation(stat);
        document.getElementById("bar-fill-" + stat).style.width = ((statRoll/20)*100) + "%";
        outlier.randomStats.set(stat, statRoll);
        statsRolling.splice(statsRolling.indexOf(stat));
    } else if (roll != -1) {
        document.getElementById("bar-fill-" + stat).style.width = ((roll/20)*100) + "%";
        // outlier.randomStats.set(stat, roll);
    }
}

async function rollDieAnimation(name){
    let imageElement = document.getElementById("die-" + name);
    imageElement.setAttribute("src", "assets/die-rolling.gif");
    await sleep(1500);
    imageElement.setAttribute("src", "assets/die.png");
}

function rollAllStats(){
    let dice = document.getElementsByClassName("die");
    for (let i = 0; i < dice.length; i++){
        dice.item(i).click();
    }
}

function saveCurrentOutlier(redirect = null){
    if (outlier.birthYear != null && outlier.randomStats.size >= 7){
        let dataToStore = {
            ...outlier,
            randomStats: [...outlier.randomStats],
            chosenStats: [...outlier.chosenStats]
        };

        sessionStorage.setItem("outlier", JSON.stringify(dataToStore));
        if (redirect != null){
            window.location.assign(redirect);
        }
    }
}

function readOutlierFromSessionStorage(){
    let storedData = JSON.parse(sessionStorage.getItem("outlier"));
    if (!storedData) return;
    outlier = {
        ...storedData,
        randomStats: new Map(storedData.randomStats),
        chosenStats: new Map(storedData.chosenStats)
    };
}

function addStat(stat) {
    const currentValue = outlier.chosenStats.get(stat);
    if (skillPoints > 0) outlier.chosenStats.set(stat, currentValue + 1);

    const statLabel = document.getElementById(`${stat}-label`);
    if (statLabel) {
        statLabel.textContent = outlier.chosenStats.get(stat);
    }
    calculateSkillPoints();
}

function subtractStat(stat) {
    const currentValue = outlier.chosenStats.get(stat);
    outlier.chosenStats.set(stat, Math.max(0, currentValue - 1));

    const statLabel = document.getElementById(`${stat}-label`);
    if (statLabel) {
        statLabel.textContent = outlier.chosenStats.get(stat);
    }
    calculateSkillPoints();
}

function calculateSkillPoints(){
    let points = 0;
    const skillPointsArray = outlier.chosenStats.values()
    skillPointsArray.forEach(n => {
        points += n;
    });
    skillPoints = 60 - points;
    document.getElementById("skill-points-remaining-header").textContent=`SKILL POINTS REMAINING: ${skillPoints}`
}

function loadRollsFromSavedOutlier(){
    document.getElementById("year-label").textContent = outlier.birthYear.year;
    outlier.birthYear = outlier.birthYear;

    outlier.randomStats.forEach(function(v, k) {
        if (k != "month"){
            rollStats(k, v);
        } else {
            document.getElementById("month-label").textContent = months[outlier.randomStats.get("month")];
        }
    });
}

