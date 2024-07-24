(function() {
    // Menghapus semua log dari konsol
    console.clear();

    // Menampilkan pesan intro kustom
    console.log('--- Memulai Pencetakan Data ---');
    console.log('Data akan ditampilkan di bawah ini.');

    // Fungsi untuk menampilkan data dari storage
    function displayStorageData(storage, storageName) {
        console.log(`Data dari ${storageName}:`);

        Object.keys(storage).forEach(key => {
            const value = storage.getItem(key);
            try {
                const parsedValue = JSON.parse(value);
                console.log(`Kunci: ${key}`);
                console.log('Nilai:', parsedValue);
            } catch (e) {
                console.log(`Kunci: ${key}`);
                console.log('Nilai:', value);
            }
        });
    }

    // Menampilkan data dari sessionStorage
    console.log('Menampilkan data dari sessionStorage...');
    displayStorageData(sessionStorage, 'sessionStorage');

    // Menampilkan data dari localStorage
    console.log('Menampilkan data dari localStorage...');
    displayStorageData(localStorage, 'localStorage');

    // Menampilkan pesan penutup
    console.log('--- Pencetakan Data Selesai ---');
    console.log(`
Jangan lupa subscribe dan join telegram : https://t.me/allabout_internet
 Beli VPS / RDP GUA ANJG, Chat ke telegram gua : https://t.me/LFG_AAI               
    `);
})();
