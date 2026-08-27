function startupHistoricalOutlierSelection(){
    historicalOutliers.forEach(hOutlier => {
        const baseButton = document.createElement("button");
        baseButton.className = "historical-outlier-panel";
        baseButton.setAttribute("onclick", `redirectHistoricalOutlier(\"${hOutlier.name}\");`);
        baseButton.innerHTML = `<img style=\"width: 200px; height: 200px; object-fit: contain;\" src=\"${hOutlier.image}\" alt=\"${hOutlier.name}\"><h1 style=\"text-align: center;\">${hOutlier.name}</h1>`
        document.getElementById("historical-outlier-list").appendChild(baseButton)
    });
}

function redirectHistoricalOutlier(hOutlier){
    historicalOutliers.forEach(h => {
        if (h.name == hOutlier){
            saveHistoricalOutlier(h);
            window.location.assign("/historicalOutliers.html");
        }
    });
}