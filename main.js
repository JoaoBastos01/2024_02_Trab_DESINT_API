import { loadCountries } from './countries.js';
import { fetchCep, fetchHolidays, fetchBankInfo} from './api.js';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCountries();
    setupEventListeners();
});

function setupEventListeners() {
    // Evento de formulário CEP
    document.getElementById('cepForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
        if (cep.length !== 8) {
            alert('CEP inválido! Digite 8 dígitos.');
            return;
        }
        await fetchCep(cep);
    });

    // Evento de formulário do código do banco
    document.getElementById('bankForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const bankCode = document.getElementById('bankCode').value.trim();
        if (!bankCode) {
            alert('Por favor, insira um código de banco.');
            return;
        }
        await fetchBankInfo(bankCode);
    });

    // Evento botão para mostrar feriados
    document.getElementById('fetchHolidays').addEventListener('click', fetchHolidays);
}