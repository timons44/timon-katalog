// =============================================
// ÜRÜN LİSTESİ — buradan kolayca düzenle
// =============================================
const urunler = [
  {
    id: 1,
    ad: "Kodak Led Ampul 12w A60 Sarı Işık 100 608974",
    aciklama: "Kodak 12W A60 LED Ampul, sarı ışık teknolojisiyle yaşam alanlarında sıcak ve konforlu bir aydınlatma sunar. Enerji tasarruflu yapısı sayesinde uzun ömürlü kullanım sağlarken 100W eşdeğer aydınlatma performansı sunar.",
    fiyat: 36.54,
    eskiFiyat: 40.60,
    gorsel: "images/urun1.jpg",
    stok: true
  },
  {
    id: 2,
    ad: "Anchor 114 Cımbız Set 12Li 40 582726",
    aciklama: "Anchor 114 Cımbız Seti, düz uçlu tasarımı sayesinde istenmeyen kılları kolay ve hassas şekilde almanıza yardımcı olur. Dayanıklı yapısı ve 12'li ekonomik paketiyle kişisel bakım için pratik kullanım sunar.",
    fiyat: 540.00,
    eskiFiyat: 600.00,
    gorsel: "images/urun2.jpg",
    stok: true
  },
  {
    id: 3,
    ad: "Bani Balon Baskılı 12 İç Mekan Gülen Yüz 100Lü 40 55067",
    aciklama: "Bani Balon Baskılı Gülen Yüz balon seti, iç mekan kullanımı için eğlenceli ve renkli bir atmosfer oluşturur. 100'lü ekonomik paket sayesinde doğum günü ve özel gün süslemelerinde pratik bir çözüm sunar.",
    fiyat: 185.40,
    eskiFiyat: 206.00,
    gorsel: "images/urun3.jpg",
    stok: true
  },
  {
    id: 4,
    ad: "Bani Balon Baskısız Punch 8 Renk 100Lü 25 536610",
    aciklama: "Bani Punch balon seti, 8 farklı renk seçeneğiyle iç ve dış mekan süslemelerinde canlı ve eğlenceli bir görünüm sağlar. 100'lü ekonomik paketi sayesinde doğum günü ve etkinlikler için pratik bir kullanım sunar.",
    fiyat: 187.20,
    eskiFiyat: 208.00,
    gorsel: "images/urun4.jpg",
    stok: true
  },
  {
    id: 5,
    ad: "Kodak Çinko Karbon K3Ahz-8+4 İnce Pil Shrk 3153 (1010) 100 480395",
    aciklama: "Kodak Çinko Karbon K3Ahz-8+4 ince pil seti, düşük enerji tüketen cihazlar için ekonomik ve güvenilir kullanım sunar. Günlük kullanımda kumanda, saat ve oyuncaklar gibi ürünler için ideal bir güç kaynağı sağlar.",
    fiyat: 110.70,
    eskiFiyat: 123.00,
    gorsel: "images/urun5.jpg",
    stok: true
  },
  {
    id: 6,
    ad: "I-Lighter Çakmak Y-434 Jet Metal Kılıf Bjk 24Lü Paket 480 717496",
    aciklama: "I-Lighter Y-434 Jet çakmak, metal kılıf tasarımıyla dayanıklılık ve şık bir görünüm sunar. 24'lü ekonomik paket yapısı sayesinde toplu kullanım için pratik ve uzun ömürlü bir çözümdür.",
    fiyat: 18.29,
    eskiFiyat: 20.33,
    gorsel: "images/urun6.png",
    stok: true
  },
  {
    id: 7,
    ad: "Kodak Xtralife 12Li K3A6/2 İnce Pil 8479 (124) 48 479636",
    aciklama: "Kodak Xtralife K3A6/2 ince pil seti, düşük enerji tüketen cihazlar için uzun ömürlü ve güvenilir performans sunar. 12'li paket yapısı sayesinde saat, kumanda ve küçük elektronik cihazlarda pratik kullanım sağlar.",
    fiyat: 193.50,
    eskiFiyat: 215.00,
    gorsel: "images/urun7.jpg",
    stok: true
  },
  {
    id: 8,
    ad: "Kurtplas Ekonomik Yara Bantı 566372",
    aciklama: "Kurtplas Ekonomik Yara Bandı, küçük kesik ve sıyrıkların korunmasına yardımcı olarak günlük kullanım için pratik bir çözüm sunar.",
    fiyat: 13.91,
    eskiFiyat: 15.46,
    gorsel: "images/urun8.jpg",
    stok: true
  },
  {
    id: 9,
    ad: "Parex 1909374 Buzdolabı Poşeti Küçük Boy 4 Al 3 Öde 12 613177",
    aciklama: "Parex küçük boy buzdolabı poşeti, gıdaların taze ve hijyenik şekilde saklanmasına yardımcı olur. 4 al 3 öde avantajlı paketiyle ekonomik kullanım sunarak mutfakta pratik bir çözüm sağlar.",
    fiyat: 135.00,
    eskiFiyat: 150.00,
    gorsel: "images/urun9.jpg",
    stok: true
  },
  {
    id: 10,
    ad: "Toscow Çakmak Y-374 Jet Fb 50li 20 734206",
    aciklama: "Toscow Y-374 Jet çakmak, güçlü alev yapısı sayesinde pratik ve güvenilir kullanım sunar. 50'li ekonomik paketiyle toplu kullanım için ideal, dayanıklı bir çözümdür.",
    fiyat: 18.26,
    eskiFiyat: 20.29,
    gorsel: "images/urun10.jpg",
    stok: true
  }
];

// =============================================
// SEPET FONKSİYONLARI
// =============================================

function sepetAl() {
  return JSON.parse(localStorage.getItem("sepet")) || [];
}

function sepetKaydet(sepet) {
  localStorage.setItem("sepet", JSON.stringify(sepet));
}

function sepeteEkle(urunId) {
  const sepet = sepetAl();
  const urun = urunler.find(u => u.id === urunId);
  if (!urun) return;

  const mevcut = sepet.find(s => s.id === urunId);
  if (mevcut) {
    mevcut.adet += 1;
  } else {
    sepet.push({ ...urun, adet: 1 });
  }

  sepetKaydet(sepet);
  sepetSayisiGuncelle();
}

function sepettenCikar(urunId) {
  let sepet = sepetAl();
  sepet = sepet.filter(s => s.id !== urunId);
  sepetKaydet(sepet);
}

function adetGuncelle(urunId, yeniAdet) {
  const sepet = sepetAl();
  const urun = sepet.find(s => s.id === urunId);
  if (!urun) return;

  if (yeniAdet < 1) {
    sepettenCikar(urunId);
  } else {
    urun.adet = yeniAdet;
    sepetKaydet(sepet);
  }
}

function sepetToplamHesapla() {
  const sepet = sepetAl();
  return sepet.reduce((toplam, urun) => toplam + (urun.fiyat * urun.adet), 0);
}

function sepetSayisiGuncelle() {
  const sepet = sepetAl();
  const toplamAdet = sepet.reduce((t, u) => t + u.adet, 0);
  const sayaclar = document.querySelectorAll(".cart-count");
  sayaclar.forEach(el => {
    el.textContent = toplamAdet;
    el.style.display = toplamAdet > 0 ? "flex" : "none";
  });
}

// =============================================
// İNDİRİM HESAPLA
// =============================================
function indirimHesapla(eskiFiyat, yeniFiyat) {
  return Math.round(((eskiFiyat - yeniFiyat) / eskiFiyat) * 100);
}

// =============================================
// PARA FORMATI
// =============================================
function paraFormat(tutar) {
  return tutar.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2
  });
}

// =============================================
// KATALOG SAYFASI — index.html için
// =============================================
function katalogYukle() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = urunler.map(urun => {
    const indirim = indirimHesapla(urun.eskiFiyat, urun.fiyat);
    return `
      <div class="product-card">
        <div class="img-wrap">
          <img
            src="${urun.gorsel}"
            alt="${urun.ad}"
            loading="lazy"
            onerror="this.src='images/placeholder.jpg'"
          >
        </div>
        <div class="card-body">
          <div class="badge-row">
            <span class="badge-kampanya">Kampanya</span>
            <span class="badge-kdv">KDV Hariç Fiyattır</span>
          </div>
          <div class="product-name">${urun.ad}</div>
          <div class="product-desc">${urun.aciklama}</div>
          <div class="price-row">
            <span class="price-old">${paraFormat(urun.eskiFiyat)}</span>
            <span class="price-new">${paraFormat(urun.fiyat)}</span>
            <span class="price-discount">-%${indirim}</span>
          </div>
          <button class="btn-add" id="btn-${urun.id}" onclick="kartaEkle(${urun.id})">
            Sepete Ekle
          </button>
        </div>
      </div>
    `;
  }).join("");

  sepetSayisiGuncelle();
}

function kartaEkle(urunId) {
  sepeteEkle(urunId);
  const btn = document.getElementById(`btn-${urunId}`);
  if (btn) {
    btn.textContent = "Eklendi ✓";
    btn.classList.add("added");
    setTimeout(() => {
      btn.textContent = "Sepete Ekle";
      btn.classList.remove("added");
    }, 1500);
  }
}

// =============================================
// SEPET SAYFASI — sepet.html için
// =============================================
function sepetYukle() {
  const tbody = document.getElementById("sepet-tbody");
  const bos = document.getElementById("sepet-bos");
  const icerik = document.getElementById("sepet-icerik");
  if (!tbody) return;

  const sepet = sepetAl();

  if (sepet.length === 0) {
    if (bos) bos.style.display = "block";
    if (icerik) icerik.style.display = "none";
    return;
  }

  if (bos) bos.style.display = "none";
  if (icerik) icerik.style.display = "block";

  tbody.innerHTML = sepet.map(urun => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <img
            src="${urun.gorsel}"
            alt="${urun.ad}"
            style="width:52px;height:52px;object-fit:contain;border-radius:8px;background:#f0f0f0;padding:4px;"
            onerror="this.src='images/placeholder.jpg'"
          >
          <span style="font-weight:500;">${urun.ad}</span>
        </div>
      </td>
      <td>${paraFormat(urun.fiyat)}</td>
      <td>
        <div class="qty-control">
          <button class="qty-btn" onclick="adetDegistir(${urun.id}, ${urun.adet - 1})">−</button>
          <span>${urun.adet}</span>
          <button class="qty-btn" onclick="adetDegistir(${urun.id}, ${urun.adet + 1})">+</button>
        </div>
      </td>
      <td style="font-weight:600;">${paraFormat(urun.fiyat * urun.adet)}</td>
      <td>
        <button onclick="urunSil(${urun.id})" style="background:none;border:none;color:#e53935;cursor:pointer;font-size:18px;">✕</button>
      </td>
    </tr>
  `).join("");

  ozetGuncelle();
  sepetSayisiGuncelle();
}

function adetDegistir(urunId, yeniAdet) {
  adetGuncelle(urunId, yeniAdet);
  sepetYukle();
}

function urunSil(urunId) {
  sepettenCikar(urunId);
  sepetYukle();
}

function ozetGuncelle() {
  const toplam = sepetToplamHesapla();
  const kargoEl = document.getElementById("kargo-ucreti");
  const toplamEl = document.getElementById("genel-toplam");
  const araToplam = document.getElementById("ara-toplam");

  const kargo = toplam >= 500 ? 0 : 30;

  if (araToplam) araToplam.textContent = paraFormat(toplam);
  if (kargoEl) kargoEl.textContent = kargo === 0 ? "Ücretsiz" : paraFormat(kargo);
  if (toplamEl) toplamEl.textContent = paraFormat(toplam + kargo);
}

// =============================================
// SİPARİŞ FORMU — sepet.html submit
// =============================================
function siparisGonder(e) {
  e.preventDefault();

  const siparis = {
    musteri: {
      ad: document.getElementById("ad").value,
      soyad: document.getElementById("soyad").value,
      email: document.getElementById("email").value,
      telefon: document.getElementById("telefon").value,
      adres: document.getElementById("adres").value,
      il: document.getElementById("il").value,
      ilce: document.getElementById("ilce").value,
      not: document.getElementById("not") ? document.getElementById("not").value : ""
    },
    urunler: sepetAl(),
    toplam: sepetToplamHesapla(),
    tarih: new Date().toLocaleString("tr-TR")
  };

  localStorage.setItem("aktifSiparis", JSON.stringify(siparis));
  window.location.href = "odeme.html";
}

// =============================================
// ÖDEME SAYFASI — odeme.html için
// =============================================
function odemeYukle() {
  if (!document.getElementById("odeme-ozet")) return;

  const siparis = JSON.parse(localStorage.getItem("aktifSiparis"));
  if (!siparis) {
    window.location.href = "index.html";
    return;
  }

  const ozet = document.getElementById("odeme-ozet");
  if (ozet) {
    ozet.innerHTML = siparis.urunler.map(u =>
      `<div class="summary-row"><span>${u.ad} x${u.adet}</span><span>${paraFormat(u.fiyat * u.adet)}</span></div>`
    ).join("") +
    `<div class="summary-total"><span>Toplam</span><span>${paraFormat(siparis.toplam)}</span></div>`;
  }

  const kartNo = document.getElementById("kart-no");
  if (kartNo) {
    kartNo.addEventListener("input", function () {
      let val = this.value.replace(/\D/g, "").substring(0, 16);
      this.value = val.replace(/(.{4})/g, "$1 ").trim();
    });
  }

  const skt = document.getElementById("skt");
  if (skt) {
    skt.addEventListener("input", function () {
      let val = this.value.replace(/\D/g, "").substring(0, 4);
      if (val.length >= 2) val = val.substring(0, 2) + "/" + val.substring(2);
      this.value = val;
    });
  }

  const cvv = document.getElementById("cvv");
  if (cvv) {
    cvv.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").substring(0, 3);
    });
  }
}

function odemeGonder(e) {
  e.preventDefault();

  const siparis = JSON.parse(localStorage.getItem("aktifSiparis"));

  localStorage.setItem("sonSiparis", localStorage.getItem("aktifSiparis"));

  console.log("Sipariş detayı:", siparis);
  // TODO: Burada Garanti BBVA banka API çağrısı yapılacak

  localStorage.removeItem("sepet");
  localStorage.removeItem("aktifSiparis");
  window.location.href = "tesekkur.html";
}

// =============================================
// SAYFA YÜKLENINCE ÇALIŞACAKLAR
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  katalogYukle();
  sepetYukle();
  odemeYukle();
  sepetSayisiGuncelle();
});
