// TV Veri Bankası (Talimatlar ve Mediafire DİREKT İNDİRME linkleri) - Değişmedi
const tvVerileri = {
    samsung: {
        markaAdi: "Samsung",
        talimat: "1. 'Kanal Listesini İndir' butonuna basarak dosyayı bilgisayarınıza indirin.\n2. İndirdiğiniz zip dosyasının içindeki klasörü direkt USB belleğinizin ana dizinine atın.\n3. USB'yi televizyona takın.\n4. TV Kumandası üzerinden Menü > Yayın > Uzman Ayarları > Kanal Listesini Aktarın bölümüne girip 'USB'den Alın' seçeneğini seçin.",
        link: "https://www.mediafire.com/file/ornek_samsung_direkt_linki.zip" 
    },
    lg: {
        markaAdi: "LG",
        talimat: "1. Bilgisayarınıza inen dosyayı zipten çıkarın.\n2. USB belleğinizin içerisine girip 'LG_SVC' adında yeni bir klasör oluşturun ve çıkan dosyayı bu klasörün içine kopyalayın.\n3. USB belleği TV'ye takın.\n4. Ayarlar > Gelişmiş > Kanallar > Kanal Kopyalama menüsünden 'USB'den TV'ye' seçeneğine tıklayın.",
        link: "https://www.mediafire.com/file/ornek_lg_direkt_linki.zip"
    },
    philips: {
        markaAdi: "Philips",
        talimat: "1. İndirdiğiniz güncel dosyayı zipten çıkarıp direkt USB belleğe yükleyin.\n2. USB'yi televizyonunuzun USB girişine yerleştirin.\n3. Ayarlar > Kanallar > Kanal Ayarları > Kanalları Kopyala menüsünden 'USB'den TV'ye' seçeneğini kullanarak yüklemeyi tamamlayın.",
        link: "https://www.mediafire.com/file/ornek_philips_direkt_linki.zip"
    },
    vestel: {
        markaAdi: "Vestel",
        talimat: "1. İndirdiğiniz .sdxf uzantılı kanal dosyasını direkt olarak USB belleğin içerisine kopyalayın (Klasör içine koymayın).\n2. USB'yi TV'ye takın.\n3. Menü > Kurulum > Uydu Ayarları > Kanal Listesi Kurulumu menüsüne gelin.\n4. 'USB'den TV'ye yükleme' seçeneğini seçerek işlemi onaylayın.",
        link: "https://www.mediafire.com/file/ornek_vestel_direkt_linki.zip"
    }
};

// Bu fonksiyon artık bir parametre (markaKey) alıyor
function tvSecildi(markaKey) {
    const icerikAlani = document.getElementById("icerikAlani");
    const talimatMetni = document.getElementById("talimatMetni");
    const indirButonu = document.getElementById("indirButonu");
    const baslikText = document.getElementById("secilenMarkaBaslik");
    const tumButonlar = document.querySelectorAll('.logo-btn');

    // 1. Önce tüm butonlardaki "active" sınıfını kaldır (diğerlerinin mavisini söndür)
    tumButonlar.forEach(btn => btn.classList.remove('active'));

    // 2. Seçilen butonun veri nesnesinde olup olmadığını kontrol et
    if (markaKey && tvVerileri[markaKey]) {
        // Verileri ekrana bas
        baslikText.innerText = tvVerileri[markaKey].markaAdi + " Kurulum Talimatları";
        talimatMetni.innerText = tvVerileri[markaKey].talimat;
        indirButonu.href = tvVerileri[markaKey].link;
        
        // İçerik alanını göster
        icerikAlani.style.display = "block";

        // Tıklanan butona "active" sınıfını ekle (mavi kenarlığı yak)
        document.querySelector(`.logo-btn[data-marka="${markaKey}"]`).classList.add('active');
    } else {
        // Bir hata varsa veya seçim sıfırlandıysa alanı gizle
        icerikAlani.style.display = "none";
    }
}