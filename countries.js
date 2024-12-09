export async function loadCountries() {
    try {
        const response = await fetch('./paises.json');
        const countries = await response.json();

        const countrySelect = document.getElementById('countrySelect');

        // Preenchendo o select com a chave correta
        countries.forEach(({ nome_pais }) => {
            const option = document.createElement('option');
            option.value = nome_pais;
            option.textContent = nome_pais;
            countrySelect.appendChild(option);
        });

        // Evento para mostrar detalhes do país selecionado
        countrySelect.addEventListener('change', () => {
            const selectedCountry = countries.find(({ nome_pais }) => nome_pais === countrySelect.value);
            if (selectedCountry) {
                const { nome_pais, sigla, gentilico } = selectedCountry; // **Destructuring**
                document.getElementById('countryDetails').textContent = `
                    País: ${nome_pais}
                    Sigla: ${sigla}
                    Gentílico: ${gentilico}
                `;
            }
        });
    } catch (error) {
        console.error('Erro ao carregar países:', error);
    }
}
