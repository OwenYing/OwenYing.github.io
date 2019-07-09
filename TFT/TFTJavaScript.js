
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

// roundASSASIN = 0;
// roundWILD = 0;
// roundNOBLE = 0;
// roundGUNSLINGER = 0;
// roundKNIGHT = 0;
// roundRANGER = 0;
// roundSORCERER = 0;
// roundYORDLE = 0;
// roundVOID = 0;
// roundGLACIAL = 0;
// roundBRAWLER = 0;
// roundELEMENTALIST = 0;
// roundDEMON = 0;
// roundNINJA = 0;
// roundSHAPESHIFTER = 0;
// roundBLADEMASTER = 0;
// roundDRAGON = 0;
// roundIMPERIAL = 0;
// roundPIRATE = 0;
// roundPHANTOM = 0;
// roundGUARDIAN = 0;
// roundROBOT = 0;
// roundEXILE = 0;


roundCount = 0;


// Functions
function resetRound() {
    // roundASSASIN = 0;
    // roundWILD = 0;
    // roundNOBLE = 0;
    // roundGUNSLINGER = 0;
    // roundKNIGHT = 0;
    // roundRANGER = 0;
    // roundSORCERER = 0;
    // roundYORDLE = 0;
    // roundVOID = 0;
    // roundGLACIAL = 0;
    // roundBRAWLER = 0;
    // roundELEMENTALIST = 0;
    // roundDEMON = 0;
    // roundNINJA = 0;
    // roundSHAPESHIFTER = 0;
    // roundBLADEMASTER = 0;
    // roundDRAGON = 0;
    // roundIMPERIAL = 0;
    // roundPIRATE = 0;
    // roundPHANTOM = 0;
    // roundGUARDIAN = 0;
    // roundROBOT = 0;
    // roundEXILE = 0;

    roundCount = 0;
}

function checkSynergy(roundASSASIN, roundWILD, roundNOBLE,
                      roundGUNSLINGER, roundKNIGHT, roundRANGER,
                      roundSORCERER, roundYORDLE, roundVOID,
                      roundGLACIAL, roundBRAWLER, roundELEMENTALIST,
                      roundDEMON, roundNINJA, roundSHAPESHIFTER,
                      roundBLADEMASTER, roundDRAGON, roundIMPERIAL,
                      roundPIRATE, roundPHANTOM, roundGUARDIAN, roundROBOT, roundEXILE) {

    // Format: [n/n]Assasin space
    var resultString = "";
    if(roundASSASIN >= 6) {
        resultString += "[6/6]Assasin ";
    } else if(roundASSASIN >= 3) {
        resultString += "[3/6]Assasin ";
    }
    if(roundWILD >= 4) {
        resultString += "[4/4]Wild ";
    } else if(roundWILD >= 2) {
        resultString += "[2/4]Wild ";
    }
    if(roundNOBLE >= 6) {
        resultString += "[6/6]Noble ";
    } else if(roundNOBLE >= 3) {
        resultString += "[3/6]Noble ";
    }
    if(roundGUNSLINGER >= 4) {
        resultString += "[4/4]Gunslinger ";
    } else if(roundGUNSLINGER >= 2) {
        resultString += "[2/4]Gunslinger ";
    }
    if(roundKNIGHT >= 6) {
        resultString += "[6/6]Knight ";
    } else if(roundKNIGHT >= 4) {
        resultString += "[4/6]Knight ";
    } else if(roundKNIGHT >= 2) {
        resultString += "[2/6]Knight ";
    }
    if(roundRANGER >= 4) {
        resultString += "[4/4]Ranger ";
    } else if(roundRANGER >= 2) {
        resultString += "[2/4]Ranger ";
    }
    if(roundSORCERER >= 6) {
        resultString += "[6/6]Sorcerer ";
    } else if(roundSORCERER >= 3) {
        resultString += "[3/6]Sorcerer ";
    }
    if(roundYORDLE >= 6) {
        resultString += "[6/6]Yordle ";
    } else if(roundYORDLE >= 3) {
        resultString += "[3/6]Yordle ";
    }
    if(roundVOID >= 3) {
        resultString += "[3/3]Void ";
    }
    if(roundGLACIAL >= 6) {
        resultString += "[6/6]Glacial ";
    } else if(roundGLACIAL >= 4) {
        resultString += "[4/6]Glacial ";
    } else if(roundGLACIAL >= 2) {
        resultString += "[2/6]Glacial ";
    }
    if(roundBRAWLER >= 4) {
        resultString += "[4/4]Brawler ";
    } else if(roundBRAWLER >= 2) {
        resultString += "[2/4]Brawler ";
    }
    if(roundELEMENTALIST >= 3) {
        resultString += "[3/3]Elementalist ";
    }
    if(roundDEMON >= 6) {
        resultString += "[6/6]Demon ";
    } else if(roundDEMON >= 4) {
        resultString += "[4/6]Demon ";
    } else if(roundDEMON >= 2) {
        resultString += "[2/6]Demon ";
    }
    if(roundNINJA === 1) {
        resultString += "[1/4]Ninja ";
    } else if(roundNINJA === 4) {
        resultString += "[4/4]Ninja ";
    }
    if(roundSHAPESHIFTER >= 3) {
        resultString += "[3/3]ShapeShifter ";
    }
    if(roundBLADEMASTER >= 6) {
        resultString += "[6/6]BladeMaster ";
    } else if(roundBLADEMASTER >= 3) {
        resultString += "[3/6]BladeMaster ";
    }
    if(roundDRAGON >= 2) {
        resultString += "[2/2]Dragon ";
    }
    if(roundIMPERIAL >= 4) {
        resultString += "[4/4]Imperial ";
    } else if(roundIMPERIAL >= 2) {
        resultString += "[2/4]Imperial ";
    }
    if(roundPIRATE >= 3) {
        resultString += "[3/3]Pirate ";
    }
    if(roundPHANTOM >= 2) {
        resultString += "[2/2]Phantom ";
    }
    if(roundGUARDIAN >= 2) {
        resultString += "[2/2]Guardian ";
    }
    if(roundROBOT >= 1) {
        resultString += "[1/1]Robot ";
    }
    if(roundEXILE >= 1) {
        resultString += "[1/1]Exile ";
    }


    return resultString;
}

function packSynergy(champTypeString) {
    assasin = 0;
    wild = 0;
    noble = 0;
    gunslinger = 0;
    knight = 0;
    ranger = 0;
    sorcerer = 0;
    yordle = 0;
    vvoid = 0;
    glacial = 0;
    bralwer = 0;
    elementalist = 0;
    demon = 0;
    ninja = 0;
    shapeshifter = 0;
    blademaster = 0;
    dragon = 0;
    imperial = 0;
    pirate = 0;
    phantom = 0;
    guardian = 0;
    robot = 0;
    exile = 0;

    if(champTypeString.includes("assassin"))
        assasin ++;
    if(champTypeString.includes("wild"))
        wild ++;
    if(champTypeString.includes("noble"))
        noble ++;
    if(champTypeString.includes("gunslinger"))
        gunslinger ++;
    if(champTypeString.includes("knight"))
        knight ++;
    if(champTypeString.includes("ranger"))
        ranger ++;
    if(champTypeString.includes("sorcerer"))
        sorcerer ++;
    if(champTypeString.includes("yordle"))
        yordle ++;
    if(champTypeString.includes("void"))
        vvoid ++;
    if(champTypeString.includes("glacial"))
        glacial ++;
    if(champTypeString.includes("brawler"))
        bralwer ++;
    if(champTypeString.includes("elementalist"))
        elementalist ++;
    if(champTypeString.includes("demon"))
        demon ++;
    if(champTypeString.includes("ninja"))
        ninja ++;
    if(champTypeString.includes("shapeshifter"))
        shapeshifter ++;
    if(champTypeString.includes("blademaster"))
        blademaster ++;
    if(champTypeString.includes("dragon"))
        dragon ++;
    if(champTypeString.includes("imperial"))
        imperial ++;
    if(champTypeString.includes("pirate"))
        pirate ++;
    if(champTypeString.includes("phantom"))
        phantom ++;
    if(champTypeString.includes("guardian"))
        guardian ++;
    if(champTypeString.includes("robot"))
        robot ++;
    if(champTypeString.includes("exile"))
        exile ++;

    var typePack = {
        ASSASIN : assasin,
        WILD : wild,
        NOBLE : noble,
        GUNSLINGER : gunslinger,
        KNIGHT : knight,
        RANGER : ranger,
        SORCERER : sorcerer,
        YORDLE : yordle,
        VOID : vvoid,
        GLACIAL : glacial,
        BRAWLER : bralwer,
        ELEMENTALIST : elementalist,
        DEMON : demon,
        NINJA : ninja,
        SHAPESHIFTER : shapeshifter,
        BLADEMASTER : blademaster,
        DRAGON : dragon,
        IMPERIAL : imperial,
        PIRATE : pirate,
        PHANTOM : phantom,
        GUARDIAN : guardian,
        ROBOT : robot,
        EXILE : exile
    };
    return typePack;
}


function checkPotentialSynergy(champTypeString) {
    var pack = packSynergy(champTypeString);
    var synergyStr = checkSynergy(
        ASSASIN+pack.ASSASIN,
        WILD+pack.WILD,
        NOBLE+pack.NOBLE,
        GUNSLINGER+pack.GUNSLINGER,
        KNIGHT+pack.KNIGHT,
        RANGER+pack.RANGER,
        SORCERER+pack.SORCERER,
        YORDLE+pack.YORDLE,
        VOID+pack.VOID,
        GLACIAL+pack.GLACIAL,
        BRAWLER+pack.BRAWLER,
        ELEMENTALIST+pack.ELEMENTALIST,
        DEMON+pack.DEMON,
        NINJA+pack.NINJA,
        SHAPESHIFTER+pack.SHAPESHIFTER,
        BLADEMASTER+pack.BLADEMASTER,
        DRAGON+pack.DRAGON,
        IMPERIAL+pack.IMPERIAL,
        PIRATE+pack.PIRATE,
        PHANTOM+pack.PHANTOM,
        GUARDIAN+pack.GUARDIAN,
        ROBOT+pack.ROBOT,
        EXILE+pack.EXILE
    );

    return synergyStr;

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
            // Add candidate image
            $candidateImgTd.append($img.clone());
            $candidateImgTd.children().first().addClass("candidateImg"); // add a class to be later used

            // Add candidate synergy
            var candidateTypeCheck = "";
            $("." + champName).each(function(i, obj) {
                var candidateType = $(this).attr("class").split(" ")[1];
                $candidateSynergyTd.append(candidateType + " ");
                candidateTypeCheck += (candidateType + " ");
            });
            var candidateSynergy = checkPotentialSynergy(candidateTypeCheck);
            $candidateSynergyTd.append(candidateSynergy);

            // Add on click listener to the candidate images
            $candidateImgTd.on("click", function(){
                $("#myDeckImg").append($(this).children().first());
            });

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
