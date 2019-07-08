
// Global Variables
ASSASIN = 0;
WILD = 0;
NOBLE = 0;
GUNSLINGER = 0;
KNIGHT = 0;
RANGER = 0;
SORCERER = 0;
YORDLE = 0;
VOID = 0;
GLACIAL = 0;
BRAWLER = 0;
ELEMENTALIST = 0;
DEMON = 0;
NINJA = 0;
SHAPESHIFTER = 0;
BLADEMASTER = 0;
DRAGON = 0;
IMPERIAL = 0;
PIRATE = 0;
PHANTOM = 0;
GUARDIAN = 0;
ROBOT = 0;
EXILE = 0;

roundASSASIN = 0;
roundWILD = 0;
roundNOBLE = 0;
roundGUNSLINGER = 0;
roundKNIGHT = 0;
roundRANGER = 0;
roundSORCERER = 0;
roundYORDLE = 0;
roundVOID = 0;
roundGLACIAL = 0;
roundBRAWLER = 0;
roundELEMENTALIST = 0;
roundDEMON = 0;
roundNINJA = 0;
roundSHAPESHIFTER = 0;
roundBLADEMASTER = 0;
roundDRAGON = 0;
roundIMPERIAL = 0;
roundPIRATE = 0;
roundPHANTOM = 0;
roundGUARDIAN = 0;
roundROBOT = 0;
roundEXILE = 0;


roundCount = 0;


// Functions
function resetRound() {
    roundASSASIN = 0;
    roundWILD = 0;
    roundNOBLE = 0;
    roundGUNSLINGER = 0;
    roundKNIGHT = 0;
    roundRANGER = 0;
    roundSORCERER = 0;
    roundYORDLE = 0;
    roundVOID = 0;
    roundGLACIAL = 0;
    roundBRAWLER = 0;
    roundELEMENTALIST = 0;
    roundDEMON = 0;
    roundNINJA = 0;
    roundSHAPESHIFTER = 0;
    roundBLADEMASTER = 0;
    roundDRAGON = 0;
    roundIMPERIAL = 0;
    roundPIRATE = 0;
    roundPHANTOM = 0;
    roundGUARDIAN = 0;
    roundROBOT = 0;
    roundEXILE = 0;

    roundCount = 0;
}

function checkCandidateSynergy(element) {

}



// Animations
function wink(element) {
    $(element)
        .animate({left: "+=35px"}, 200)
        .animate({left: "-=35px"}, 200)
        .animate({left: "+=35px"}, 200)
        .animate({left: "-=35px"}, 200)
        .animate({opacity: "0.5"}, 200)
        .animate({opacity: "1"}, 200)
        .animate({opacity: "0.5"}, 200);
}



// Click Events
function clickEvents() {

    //When hover on the pics, shake the picture
    // $(".champGeneral").hover(function(){
    //     $(this).css("z-index", "100").animate({
    //         "left": "+=15px"
    //     });
    // }, function() {
    //     $(this).animate({
    //         "left": "-=15px",
    //         "z-index": "0"
    //     });
    // });



    // When click on the champ, shake all the same champ
    $(".champGeneral").on("click", function(){
        roundCount ++;

        // Click animation
        var classes = $(this).attr("class");        //1. Get the css classes of the clicked element
        var champName = classes.split(" ")[2];      //2. Find its champ name
        wink("."+champName);                //3.  Animate the same champ

        // Add to Candidate
        var $img = $("." + champName + " img").first().clone();
        var $candidateRow, $candidateImgTd, $candidateSynergyTd;
        switch (roundCount) {
            case 1: $candidateRow = $("#candidateRow1");$candidateImgTd = $("#candidateRow1 td:eq(0)"); $candidateSynergyTd = $("#candidateRow1 td:eq(1)"); break;
            case 2: $candidateRow = $("#candidateRow2");$candidateImgTd = $("#candidateRow2 td:eq(0)"); $candidateSynergyTd = $("#candidateRow2 td:eq(1)"); break;
            case 3: $candidateRow = $("#candidateRow3");$candidateImgTd = $("#candidateRow3 td:eq(0)"); $candidateSynergyTd = $("#candidateRow3 td:eq(1)"); break;
            case 4: $candidateRow = $("#candidateRow4");$candidateImgTd = $("#candidateRow4 td:eq(0)"); $candidateSynergyTd = $("#candidateRow4 td:eq(1)"); break;
            case 5: $candidateRow = $("#candidateRow5");$candidateImgTd = $("#candidateRow5 td:eq(0)"); $candidateSynergyTd = $("#candidateRow5 td:eq(1)"); break;
        }
        if(roundCount <= 5) {
            $candidateImgTd.append($img.clone());
            $candidateSynergyTd.append($img.clone());
        }




        $("." + champName).each(function(i, obj) {
            var candidateType = $(this).attr("class").split(" ")[1];
            // alert(candidateType);
        });

    });

}


// Main Function
$(function() {
    clickEvents();
});
