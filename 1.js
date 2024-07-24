fetch('https://raw.githubusercontent.com/LFG-AAI/Code/main/query_id.js')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(scriptText => {
        // Buat elemen <script> dan tambahkan ke dokumen
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
        document.head.removeChild(scriptElement); // Opsional: hapus elemen setelah eksekusi
    })
    .catch(error => console.error('Error fetching or executing script:', error));
