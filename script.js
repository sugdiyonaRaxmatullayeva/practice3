"use script"

let country= prompt("what country?");
let output;

switch(country){
 case "uzbekistan":
   output ="Poytaxti-Toshkent. Maydoni — 448,978[6] km2. Aholi soni — 2022-yil 9 dekabr kuni O‘zbekiston aholisi 36 milliondan oshdi. ";
   break;
   case "the uk":
    output ="Poytaxti — Vashington Aholisi 331 million kishidan oshiq boʻlib, aholi soni boʻyicha jahonda uchinchi oʻrinda turadi.";
    break;
    case "spain":
        output =" Poytaxti — Madrid shahri.Aholisi 47,27 mln. kishi (2012).";
      break; 
      case "china":
        output ="Poytaxti — Pekin shahri.Maydoni 9,6 mln. km². Aholisi 1 mlrd. 394mln. kishi (2003).";
        break;
        case"turkey":
        output="poytaxti — Anqara shahri.Maydoni — 783,562 km². Aholi soni (2021) — 84.680.273 kishi.";
        break;
        case"japan":
        output="Poytaxti — TokioMaydon 377,8 ming km². Aholisi 126 mln. kishi (2021).";
        break;
      default :
      output ="topilmadi";

}
console.log(` ${output}`);
