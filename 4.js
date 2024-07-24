(async function() {
    try {
        // URL ke raw file JavaScript di GitHub
        const url = 'https://raw.githubusercontent.com/LFG-AAI/Code/main/5.js';

        // Ambil file JavaScript dari URL
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        // Ambil isi file sebagai teks
        const scriptText = await response.text();

        // Eksekusi kode JavaScript
        new Function(scriptText)();
    } catch (error) {
        console.error('Error fetching or executing script:', error);
    }
})();
