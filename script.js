// Contoh if...else statement
let angka = 17;
let hasilIfElse = "";

if (angka > 15) {
    hasilIfElse = "Angka lebih besar dari 15";
} else {
    hasilIfElse = "Angka kurang dari atau sama dengan 15";
}
console.log("Hasil if...else statement: " + hasilIfElse);

// Contoh nested if 
let nilai = 80;
let hasilNestedIf = "";

if (nilai >= 80) {
    hasilNestedIf = "Nilai Anda sangat baik";
} else if (nilai >= 70) {
    hasilNestedIf = "Nilai Anda cukup baik";
} else {
    hasilNestedIf = "Anda perlu belajar lebih keras";
}
console.log("Hasil nested if : " + hasilNestedIf);

// Contoh switch case 
let hari = "Sabtu";
let hasilSwitchCase = "";

switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        hasilSwitchCase = "Hari ini adalah hari kerja.";
        break;
    case "Sabtu":
    case "Minggu":
        hasilSwitchCase = "Hari ini adalah hari libur.";
        break;
    default:
        hasilSwitchCase = "Tidak ada hari yang cocok.";
}
console.log("Hasil switch case : " + hasilSwitchCase);

// Contoh for statement
let hasilForStatement = "";

for (let i = 0; i < 7; i++) {
    hasilForStatement += `Iterasi ke-${i + 3}\n`;
}
console.log("Hasil for statement:\n" + hasilForStatement);

// Contoh while
let angkaWhile = 5;
let hasilWhile = "";

while (angkaWhile <= 10) {
    hasilWhile += "Angka: " + angkaWhile + "\n";
    angkaWhile++;
}
console.log("Hasil while:\n" + hasilWhile);

// Contoh do while 
let angkaDoWhile = 1;
let hasilDoWhile = "";

do {
    hasilDoWhile += "Angka: " + angkaDoWhile + "\n"; 
    angkaDoWhile++;
} while (angkaDoWhile <= 20);
console.log("Hasil do while:\n" + hasilDoWhile);

// Contoh function
const perkalian = function(x, y) {
    return x * y;
};
const hasilPerkalian = perkalian(23, 54);
console.log("Hasil perkalian: " + hasilPerkalian);
