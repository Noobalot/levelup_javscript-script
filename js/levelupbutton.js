//Name - Level Up Button Script

var lvl = 1;
var exp = 0;

document.getElementById("lvl").innerHTML = lvl;

var basehp = 25;
var basestr = 7;
var basemag = 7;
var basedex = 6;
var basespd = 7;
var baselck = 6;
var basedef = 4;
var baseres = 6;
var basecha = 7;

var lvlhp = 0;
var lvlstr = 0;
var lvlmag = 0;
var lvldex = 0;
var lvlspd = 0;
var lvllck = 0;
var lvldef = 0;
var lvlres = 0;
var lvlcha = 0;

var combinedhp = basehp + lvlhp;
var combinedstr = basestr + lvlstr;
var combinedmag = basemag + lvlmag;
var combineddex = basedex + lvldex;
var combinedspd = basespd + lvlspd;
var combinedlck = baselck + lvllck;
var combineddef = basedef + lvldef;
var combinedres = baseres + lvlres;
var combinedcha = basecha + lvlcha;

var totalbase = basehp + basestr + basemag + basedex + basespd + baselck + basedef + baseres + basecha;
var totalvlstats = lvlhp + lvlstr + lvlmag + lvldex + lvlspd + lvllck + lvldef + lvlres + lvlcha;
var combinedstats = combinedhp + combinedstr + combinedmag + combineddex + combinedspd + combinedlck + combineddef + combinedres + combinedcha;

document.getElementById("basehp").innerHTML = basehp;
document.getElementById("basestr").innerHTML = basestr;
document.getElementById("basemag").innerHTML = basemag;
document.getElementById("basedex").innerHTML = basedex;
document.getElementById("basespd").innerHTML = basespd;
document.getElementById("baselck").innerHTML = baselck;
document.getElementById("basedef").innerHTML = basedef;
document.getElementById("baseres").innerHTML = baseres;
document.getElementById("basecha").innerHTML = basecha;

document.getElementById("lvluphp").innerHTML = lvlhp;
document.getElementById("lvlupstr").innerHTML = lvlstr;
document.getElementById("lvlupmag").innerHTML = lvlmag;
document.getElementById("lvlupdex").innerHTML = lvldex;
document.getElementById("lvlupspd").innerHTML = lvlspd;
document.getElementById("lvluplck").innerHTML = lvllck;
document.getElementById("lvlupdef").innerHTML = lvldef;
document.getElementById("lvlupres").innerHTML = lvlres;
document.getElementById("lvlupcha").innerHTML = lvlcha;

document.getElementById("combinedhp").innerHTML = combinedhp;
document.getElementById("combinedstr").innerHTML = combinedstr;
document.getElementById("combinedmag").innerHTML = combinedmag;
document.getElementById("combineddex").innerHTML = combineddex;
document.getElementById("combinedspd").innerHTML = combinedspd;
document.getElementById("combinedlck").innerHTML = combinedlck;
document.getElementById("combineddef").innerHTML = combineddef;
document.getElementById("combinedres").innerHTML = combinedres;
document.getElementById("combinedcha").innerHTML = combinedcha;

document.getElementById("totalbase").innerHTML = totalbase;
document.getElementById("totalvlstats").innerHTML = totalvlstats;
document.getElementById("combinedstats").innerHTML = combinedstats;

var growthhp = 37;
var growthstr = 30;
var growthmag = 35;
var growthdex = 45;
var growthspd = 50;
var growthlck = 35;
var growthdef = 22;
var growthres = 38;
var growthcha = 40;


var totalgrowth =  growthhp + growthstr + growthmag + growthdex + growthspd + growthlck + growthdef + growthres + growthcha;

document.getElementById("growthhp").innerHTML = growthhp + "%";
document.getElementById("growthstr").innerHTML = growthstr + "%";
document.getElementById("growthmag").innerHTML = growthmag + "%";
document.getElementById("growthdex").innerHTML = growthdex + "%";
document.getElementById("growthspd").innerHTML = growthspd + "%";
document.getElementById("growthlck").innerHTML = growthlck + "%";
document.getElementById("growthdef").innerHTML = growthdef + "%";
document.getElementById("growthres").innerHTML = growthres + "%";
document.getElementById("growthcha").innerHTML = growthcha + "%";

document.getElementById("totalgrowth").innerHTML = totalgrowth + "%";

function levelupbutton() {

    document.getElementById("lvl").innerHTML = lvl += 1;
    var rollhp = Math.floor(Math.random() * 100);
    var rollstr = Math.floor(Math.random() * 100);
    var rollmag = Math.floor(Math.random() * 100);
    var rolldex = Math.floor(Math.random() * 100);
    var rollspd = Math.floor(Math.random() * 100);
    var rolllck = Math.floor(Math.random() * 100);
    var rolldef = Math.floor(Math.random() * 100);
    var rollres = Math.floor(Math.random() * 100);
    var rollcha = Math.floor(Math.random() * 100);


    if (exp < 10) {
        exp = 0;
        document.getElementById("exp").innerHTML = 0;
    }

    if (rollhp < growthhp) {
        document.getElementById("lvluphp").innerHTML = lvlhp += 1;
        document.getElementById("combinedhp").innerHTML = combinedhp += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rollstr < growthstr) {
        document.getElementById("lvlupstr").innerHTML = lvlstr += 1;
        document.getElementById("combinedstr").innerHTML = combinedstr += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }
    
    if (rollmag < growthmag) {
        document.getElementById("lvlupmag").innerHTML = lvlmag += 1;
        document.getElementById("combinedmag").innerHTML = combinedmag += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rolldex < growthdex) {
        document.getElementById("lvlupdex").innerHTML = lvldex += 1;
        document.getElementById("combineddex").innerHTML = combineddex += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rollspd < growthspd) {
        document.getElementById("lvlupspd").innerHTML = lvlspd += 1;
        document.getElementById("combinedspd").innerHTML = combinedspd += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rolllck < growthlck) {
        document.getElementById("lvluplck").innerHTML = lvllck += 1;
        document.getElementById("combinedlck").innerHTML = combinedlck += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rolldef < growthdef) {
        document.getElementById("lvlupdef").innerHTML = lvldef += 1;
        document.getElementById("combineddef").innerHTML = combineddef += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rollres < growthres) {
        document.getElementById("lvlupres").innerHTML = lvlres += 1;
        document.getElementById("combinedres").innerHTML = combinedres += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    if (rollcha < growthcha) {
        document.getElementById("lvlupcha").innerHTML = lvlcha += 1;
        document.getElementById("combinedcha").innerHTML = combinedcha += 1;
        document.getElementById("totalvlstats").innerHTML = totalvlstats += 1;
        document.getElementById("combinedstats").innerHTML = combinedstats += 1;
    }

    //if (lvl > 20) {
        //lvl = 1;
        //combinedhp = 25;
        //combinedhp = 25;
        //combinedhp = 25;
        //combinedhp = 25;
        //document.getElementById("lvl").innerHTML = 1;
        //document.getElementById("combinedhp").innerHTML = 25;
        //document.getElementById("combinedstr").innerHTML = 7;
        //document.getElementById("combinedmag").innerHTML = 7;
        //document.getElementById("combineddex").innerHTML = 6;
        //document.getElementById("combinedspd").innerHTML = 7;
        //document.getElementById("combinedlck").innerHTML = 6;
        //document.getElementById("combineddef").innerHTML = 4;
        //document.getElementById("combinedres").innerHTML = 6;
        //document.getElementById("combinedcha").innerHTML = 7;

    //}

}

function experiencebuttonup() {
    document.getElementById("exp").innerHTML = exp += 1;

    if (exp == 10) {
        levelupbutton();
        exp = 0;
        document.getElementById("exp").innerHTML = 0;
    }
}




//document.getElementById("lvl").innerHTML = Math.floor(Math.random() * 100) + growthhp;