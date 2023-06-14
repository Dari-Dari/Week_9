const depositStart = 30000;
const rate = 0.185;
const growth = 150;

console.log(`Ваш депозит на начало расчётного периода составлял ${depositStart} руб.`);
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${rate * 100}%`);
console.log(`К концу расчётного периода прирост составил ${growth} руб., и на данный момент ваш депозит составляет ${depositStart + growth} руб.`);

function calculate() {
    const depositInput = document.getElementById('deposit');
    const deposit = Number(depositInput.value);
    const rateYearly = 0.07;
    const result = deposit * (1 + rateYearly);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Через год у вас будет ${result.toFixed(2)} руб. на счету`;
}