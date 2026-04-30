const API_KEY = '6a1edd6d46e236da963508f9'; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const resultDiv = document.getElementById('result');
const convertedAmountEl = document.getElementById('convertedAmount');
const rateInfoEl = document.getElementById('rateInfo');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');

// Fetch all supported currencies and populate selects
async function loadCurrencies() {
    try {
        const res = await fetch(`${BASE_URL}/codes`);
        const data = await res.json();

        if (data.result !== 'success') throw new Error('Failed to load currencies');

        const currencies = data.supported_codes; // array of [code, name]

        currencies.forEach(([code, name]) => {
            const option1 = new Option(`${code} - ${name}`, code);
            const option2 = new Option(`${code} - ${name}`, code);
            fromSelect.appendChild(option1);
            toSelect.appendChild(option2);
        });

        // Set default values
        fromSelect.value = 'USD';
        toSelect.value = 'EUR';

    } catch (err) {
        showError('Failed to load currency list. Please check your API key.');
        console.error(err);
    }
}

// Convert currency using Pair Conversion endpoint
async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!amount || amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }

    // Show loading
    loadingEl.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    errorEl.classList.add('hidden');
    convertBtn.disabled = true;

    try {
        const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);

        if (!res.ok) throw new Error('Conversion failed');

        const data = await res.json();

        if (data.result !== 'success') throw new Error(data['error-type'] || 'Unknown error');

        const converted = data.conversion_result.toFixed(2);
        const rate = data.conversion_rate.toFixed(4);

        // Display result
        convertedAmountEl.textContent = `${converted} ${to}`;
        rateInfoEl.textContent = `1 ${from} = ${rate} ${to}`;
        resultDiv.classList.remove('hidden');

    } catch (err) {
        showError('Error converting currency. Please try again.');
        console.error(err);
    } finally {
        loadingEl.classList.add('hidden');
        convertBtn.disabled = false;
    }
}

// Switch currencies (Bonus)
function switchCurrencies() {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    // If result is shown, convert again with new values
    if (!resultDiv.classList.contains('hidden')) {
        convertCurrency();
    }
}

// Show error message
function showError(message) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    resultDiv.classList.add('hidden');
}

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);

switchBtn.addEventListener('click', switchCurrencies);

// Allow pressing Enter in amount field
amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertCurrency();
});

// Initialize the app
loadCurrencies();