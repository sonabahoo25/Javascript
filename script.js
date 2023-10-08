// Contoh if...else statement
let angka = 17;
let hasilIfElse = "";

if (angka > 15) {
    hasilIfElse = "Angka lebih besar dari 15";
} else {
    hasilIfElse = "Angka kurang dari atau sama dengan 15";
}
console.log("Hasil if...else statement: " + hasilIfElse);

// Contoh nested if statement
let nilai = 80;
let hasilNestedIf = "";

if (nilai >= 80) {
    hasilNestedIf = "Nilai Anda sangat baik";
} else if (nilai >= 70) {
    hasilNestedIf = "Nilai Anda cukup baik";
} else {
    hasilNestedIf = "Anda perlu belajar lebih keras";
}
console.log("Hasil nested if statement: " + hasilNestedIf);

// Contoh switch case statement
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
console.log("Hasil switch case statement: " + hasilSwitchCase);

// Contoh for statement
let hasilForStatement = "";

for (let i = 0; i < 7; i++) {
    hasilForStatement += `Iterasi ke-${i + 3}\n`;
}
console.log("Hasil for statement:\n" + hasilForStatement);

// Contoh while statement
let angkaWhile = 5;
let hasilWhileStatement = "";

while (angkaWhile <= 10) {
    hasilWhileStatement += "Angka: " + angkaWhile + "\n";
    angkaWhile++;
}
console.log("Hasil while statement:\n" + hasilWhileStatement);

// Contoh do while statement
let angkaDoWhile = 1;
let hasilDoWhileStatement = "";

do {
    hasilDoWhileStatement += "Angka: " + angkaDoWhile + "\n"; 
    angkaDoWhile++;
} while (angkaDoWhile <= 20);
console.log("Hasil do while statement:\n" + hasilDoWhileStatement);

// Contoh function
const perkalian = function(x, y) {
    return x * y;
};
const hasilPerkalian = perkalian(23, 54);
console.log("Hasil perkalian: " + hasilPerkalian);
