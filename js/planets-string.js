(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|")
    console.log(planetsArray);



    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);

    // console.log(planetsString);
    // var planetsStr2 = planetsArray.push("<ul>").unshift("<ul>");
    // console.log(planetsStr2)

    var planetsListArray = [];
    planetsArray.forEach(function(element ) {
    planetsListArray.push("<li>" + element + "</li>");
});

    var planetsFinalList = planetsListArray.join("");
    planetsFinalList = "<ul>" + planetsFinalList + "</ul>"
    console.log(planetsFinalList);

document.write(planetsFinalList);

})();