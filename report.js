var loaded = false;
window.addEventListener('DOMContentLoaded', () => {
    loaded = true;
});

function calculateSuccessScore(outlier) {
    const fields = ["technology", "industry", "legal", "music", "science"];

    let bestFieldScore = 0;
    let bestField = null;
    const fieldMultiplier = {
        1: 0.15,
        2: 0.40,
        3: 1.00,
        4: 1.60,
        5: 2.20
    };
    for (const field of fields) {
        let skill = outlier.chosenStats.get(field);
        if (skill > 20) skill = 20 + Math.floor((skill-20)*0.1)
        const historicalMultiplier = fieldMultiplier[outlier.birthYear.fieldBuffs[field]];
        const fieldScore = skill * historicalMultiplier;
        if (fieldScore > bestFieldScore) {
            bestFieldScore = fieldScore;
            bestField = field;
        }
    }

    const familyClass = outlier.randomStats.get("family-class");
    const techAccess = outlier.randomStats.get("tech-access");
    const culturalBackground = outlier.randomStats.get("cultural-background");
    const education = outlier.randomStats.get("education");
    let iq = outlier.randomStats.get("iq");
    if (iq > 15) iq = 15;
    const luck = outlier.randomStats.get("luck");
    const normalize = value => value / 20;
    let circumstances = (normalize(familyClass) * 0.15) + (normalize(techAccess) * 0.15) + (normalize(culturalBackground) * 0.15) + (normalize(education) * 0.15) + (normalize(luck) * 0.10);
    const iqModifier = 0.85 + normalize(iq) * 0.30;
    circumstances *= iqModifier;

    const discipline = outlier.chosenStats.get("discipline");
    const persistence = outlier.chosenStats.get("persistence");
    const social = outlier.chosenStats.get("social");
    const creativity = outlier.chosenStats.get("creativity");
    const athleticism = outlier.chosenStats.get("athleticism");
    const personalAbility = (discipline * 0.25) + (persistence * 0.25) + (social * 0.15) + (creativity * 0.15) + (athleticism * 0.20);

    const birthMonth = outlier.randomStats.get("month");
    let athleticMultiplier = 1.0;
    if ([0, 1, 7, 8].includes(birthMonth)) {
        athleticMultiplier = 2.0;
    }
    const athleticScore = athleticism * athleticMultiplier;


    // -------------------------
    // 5. Final score
    // -------------------------

    /*
        Field-specific ability is the largest component.

        This represents:
            ability + historical opportunity

        Circumstances then determine how much of that
        ability can actually be converted into success.
    */

    const fieldComponent = bestFieldScore / 20;
    const circumstanceComponent = circumstances;
    const personalComponent = personalAbility / 10;

    let score = (fieldComponent * 0.70)+ (circumstanceComponent * 0.25)+ (personalComponent * 0.05);

    if (athleticism > 0) {
        const athleticEffect =
            (athleticScore - athleticism) / 10;

        score += athleticEffect * 0.10;
    }
    score *= 100;

    return {
        score: Math.min(100, Math.round(score)),
        rawScore: Math.round(score),
        bestField: bestField,
        fieldScore: Math.round(bestFieldScore * 10) / 10,
        circumstanceComponent: circumstanceComponent,
        personalComponent: personalComponent
    };
}

function calculateClass(result) {
    const classes = {
        technology: [
            "Programmer",
            "Engineer",
            "Technologist",
            "Software Entrepreneur"
        ],

        industry: [
            "Industrialist",
            "Entrepreneur",
            "Business Owner",
            "Corporate Executive"
        ],

        legal: [
            "Lawyer",
            "Attorney",
            "Judge",
            "Legal Executive"
        ],

        music: [
            "Musician",
            "Composer",
            "Producer",
            "Music Entrepreneur"
        ],

        science: [
            "Scientist",
            "Researcher",
            "Engineer",
            "Academic"
        ]
    };
    const possibleClasses = classes[result.bestField];
    if (!possibleClasses) {
        return { name: "Unknown", blurb: "Unknown" };
    }
    if (result.score >= 90) {
        return {
            name: possibleClasses[0],
            blurb: "Your outlier is an outlier among outliers, a master of their field."
        }
    }

    if (result.score >= 75) {
        return {
            name: possibleClasses[1],
            blurb: "Your outlier is doing exceptionally well, having been promoted to a very high level in their field."
        }
    }

    if (result.score >= 60) {
        return {
            name: possibleClasses[2],
            blurb: "Your outlier is doing well, having been promoted a little bit.<br>With some slightly better circumstances or skills, perhaps they could get to a higher level."
        }
    }

    return {
            name: possibleClasses[3],
            blurb: "Your outlier is doing alright, but hasn't reached any more prestigious levels of their job."
        }
}

function startUpReport(){
    readOutlierFromSessionStorage();
    if (outlier.birthYear == null && outlier.randomStats.size < 7){
        window.alert("No valid outlier found! Hit OK to redirect and roll base stats.");
        window.location.replace("/");
    }
    var results = calculateSuccessScore(outlier);
    document.getElementById("success-score-p").textContent = `${results.score}`;
    var classResults = calculateClass(results)
    document.getElementById("class-b").textContent = `${classResults.name}`;
    document.getElementById("class-blurb").innerHTML = `${classResults.blurb}`;
    document.getElementById("family-class-b").textContent = `${outlier.randomStats.get("family-class")}`;
    document.getElementById("technological-access-b").textContent = `${outlier.randomStats.get("tech-access")}`;
    document.getElementById("cultural-background").textContent = `${outlier.randomStats.get("cultural-background")}`;
    document.getElementById("education-b").textContent = `${outlier.randomStats.get("education")}`;
    document.getElementById("iq-b").textContent = `${outlier.randomStats.get("iq")}`;
    document.getElementById("luck-b").textContent = `${outlier.randomStats.get("luck")}`;
    document.getElementById("birth-year-b").textContent = `${outlier.birthYear.year}`;
    document.getElementById("birth-year-blurb").innerHTML = `${outlier.birthYear.blurb}`;
    document.getElementById("birth-month-b").textContent = `${outlier.randomStats.get("month")}`;
    document.getElementById("technology-b").textContent = `${outlier.chosenStats.get("technology")}`;
    document.getElementById("industry-b").textContent = `${outlier.chosenStats.get("industry")}`;
    document.getElementById("legal-b").textContent = `${outlier.chosenStats.get("legal")}`;
    document.getElementById("music-b").textContent = `${outlier.chosenStats.get("music")}`;
    document.getElementById("science-b").textContent = `${outlier.chosenStats.get("science")}`;
    document.getElementById("athleticism-b").textContent = `${outlier.chosenStats.get("athleticism")}`;
    document.getElementById("creativity-b").textContent = `${outlier.chosenStats.get("creativity")}`;
    document.getElementById("discipline-b").textContent = `${outlier.chosenStats.get("discipline")}`;
    document.getElementById("persistence-b").textContent = `${outlier.chosenStats.get("persistence")}`;
    document.getElementById("social-b").textContent = `${outlier.chosenStats.get("social")}`;
}