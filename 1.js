(async function() {
    try {
        // URL ke raw file JavaScript di GitHub
        const url = 'https://raw.githubusercontent.com/LFG-AAI/Code/main/query_id.js';

        // Ambil file JavaScript dari URL
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        // Ambil isi file sebagai teks
        const scriptText = await response.text();

        // Eksekusi kode JavaScript
        eval(scriptText); // atau gunakan new Function(scriptText) jika lebih aman
    } catch (error) {
        console.error('Error fetching or executing script:', error);
    }
})();
