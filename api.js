// Função para encontrar o CEP
export async function fetchCep(cep) {
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        if (!response.ok) {
            throw new Error('CEP não encontrado.');
        }
        const data = await response.json();
        document.getElementById('cepResult').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('cepResult').textContent = `Erro: ${error.message}`;
    }
}

// Função para buscar as informações dos bancos
export async function fetchBankInfo(bankCode) {
    try {
        const response = await fetch(`https://brasilapi.com.br/api/banks/v1/${bankCode}`);
        if (!response.ok) {
            throw new Error('Código do banco não encontrado.');
        }
        const data = await response.json();
        document.getElementById('bankResult').textContent = `
            Banco: ${data.name}
            Código: ${data.code}
            ISPB: ${data.ispb}
        `;
    } catch (error) {
        document.getElementById('bankResult').textContent = `Erro: ${error.message}`;
    }
}

// Função para buscar feriados
export async function fetchHolidays() {
    try {
        const response = await fetch('https://brasilapi.com.br/api/feriados/v1/2024');
        const data = await response.json();
        const holidayList = data.map(({ date, name }) => `${date}: ${name}`).join('\n');
        document.getElementById('holidayResults').textContent = holidayList;
    } catch (error) {
        document.getElementById('holidayResults').textContent = `Erro: ${error.message}`;
    }
}

