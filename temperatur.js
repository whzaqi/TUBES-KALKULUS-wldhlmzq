function convert() {
            const temp = parseFloat(document.getElementById('temp').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            
            if (isNaN(temp)) {
                document.getElementById('result').innerText = 'Please enter a valid number.';
                return;
            }
            
            let result;
            let formula;
            
            if (fromUnit === toUnit) {
                result = temp;
                formula = `No conversion needed.`;
            } else if (fromUnit === 'C' && toUnit === 'F') {
                result = (temp * 9/5) + 32;
                formula = `F = (${temp} × 9/5) + 32 = ${result.toFixed(2)}`;
            } else if (fromUnit === 'C' && toUnit === 'K') {
                result = temp + 273.15;
                formula = `K = ${temp} + 273.15 = ${result.toFixed(2)}`;
            } else if (fromUnit === 'F' && toUnit === 'C') {
                result = (temp - 32) * 5/9;
                formula = `C = (${temp} - 32) × 5/9 = ${result.toFixed(2)}`;
            } else if (fromUnit === 'F' && toUnit === 'K') {
                result = (temp - 32) * 5/9 + 273.15;
                formula = `K = ((${temp} - 32) × 5/9) + 273.15 = ${result.toFixed(2)}`;
            } else if (fromUnit === 'K' && toUnit === 'C') {
                result = temp - 273.15;
                formula = `C = ${temp} - 273.15 = ${result.toFixed(2)}`;
            } else if (fromUnit === 'K' && toUnit === 'F') {
                result = (temp - 273.15) * 9/5 + 32;
                formula = `F = ((${temp} - 273.15) × 9/5) + 32 = ${result.toFixed(2)}`;
            }
            
            document.getElementById('result').innerHTML = `<strong>Cara Hitung:</strong> ${formula}<br><strong>Hasil:</strong> ${result.toFixed(2)} ${toUnit}`;
        }