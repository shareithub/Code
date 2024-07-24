(async function() {
    try {
        // (async function() {
    try {
        // URL ke file JavaScript
        const url = 'https://raw.githubusercontent.com/LFG-AAI/Code/main/1.js';

        // Ambil file JavaScript dari URL
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        // Ambil isi file sebagai teks
        const scriptText = await response.text();

        // Buat elemen <script> dan tambahkan ke dokumen
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
        document.head.removeChild(scriptElement); // Opsional: hapus elemen setelah eksekusi

    } catch (error) {
        console.error('Error fetching or executing script:', error);
    }
})(); ke raw file JavaScript di GitHub
        const url = 'https://raw.githubusercontent.com/LFG-AAI/Code/main/1.js';

        // Ambil file JavaScript dari URL
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        // Ambil isi file sebagai teks
        const scriptText = await response.text();

        // Buat elemen <script> dan tambahkan ke dokumen
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
        document.head.removeChild(scriptElement); // Opsional: hapus elemen setelah eksekusi

    } catch (error) {
        console.error('Error fetching or executing script:', error);
    }
})();
