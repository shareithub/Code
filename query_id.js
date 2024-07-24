(function() {
    // Menghapus semua log dari konsol
    console.clear();

    // Fungsi untuk menghapus tanda kutip di awal dan di akhir string
    function removeQuotes(str) {
        if (str.startsWith('"') && str.endsWith('"')) {
            return str.slice(1, -1);
        }
        return str;
    }

    // Fungsi untuk menampilkan tgWebAppData dari __telegram__initParams dan menyalinnya ke clipboard
    function displayAndCopyTgWebAppData(storage, storageName) {
        const key = '__telegram__initParams';
        const value = storage.getItem(key);

        if (value !== null) {
            try {
                const parsedValue = JSON.parse(value);
                if (parsedValue.tgWebAppData) {
                    let dataToCopy = JSON.stringify(parsedValue.tgWebAppData);
                    dataToCopy = removeQuotes(dataToCopy);
                    console.log('tgWebAppData:', dataToCopy);

                    // Membuat elemen textarea untuk menyalin teks ke clipboard
                    const textarea = document.createElement('textarea');
                    textarea.value = dataToCopy;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);

                    console.log('tgWebAppData telah disalin ke clipboard.');
                } else {
                    console.log(`tgWebAppData tidak ditemukan dalam ${key} di ${storageName}`);
                }
            } catch (e) {
                console.log(`Gagal mem-parsing nilai dari ${key} di ${storageName}`);
            }
        } else {
            console.log(`${key} tidak ditemukan di ${storageName}`);
        }
    }

    // Menampilkan tgWebAppData dari sessionStorage jika kunci ada
    console.log('Menampilkan tgWebAppData dari sessionStorage...');
    displayAndCopyTgWebAppData(sessionStorage, 'sessionStorage');

    // Menampilkan tgWebAppData dari localStorage jika kunci ada
    console.log('Menampilkan tgWebAppData dari localStorage...');
    displayAndCopyTgWebAppData(localStorage, 'localStorage');

    // Menampilkan pesan penutup
    console.log('--- Pencetakan Data Selesai ---');
    
    // Menampilkan pesan tambahan di akhir skrip dalam format ASCII
    console.log(`
         _                   _                    _     
        / /\\                / /\\                 /\\ \\   
       / /  \\              / /  \\                \\ \\ \\  
      / / /\\ \\            / / /\\ \\               /\\ \\_\\ 
     / / /  \\ \\          / / /  \\ \\             / /\\/_/ 
    / / /___/ /\\ \\      / / /___/ /\\ \\         / / /    
   / / /_____/ /\\ \\    / / /_____/ /\\ \\       / / /      
  / /_________/\\ \\ \\  / /_________/\\ \\ \\  ___/ / /__     
 / / /_       __\\ \\_\\/ / /_       __\\ \\_\\/\\__/ / /__\\    
 \\_\\___\\     /____/_/\\_\\___\\     /____/_/\\/_________/    
    `);
    console.log('Jangan lupa join ke telegram: https://t.me/allabout_internet');
    console.log('Dan jika ingin beli VPS / RDP bisa langsung PM: https://t.me/LFG_AAI');
})();
