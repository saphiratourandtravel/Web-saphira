// script.js - Logika Multi-Page Saphira Tour & Travel

const tourPackages = [
    {
        id: 1,
        title: "Lembang Open Trip",
        category: "lembang",
        type: "opentrip",
        durationDays: 1,
        durationTe// script.js - Logika Multi-Page Saphira Tour & Travel

const tourPackages = [
    {
        id: 1,
        title: "Lembang Open Trip",
        category: "lembang",
        type: "opentrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 200.000",
        image: "image/12.jpg",
        features: [
            "Tangkuban Perahu", 
            "Bukit Strawberry", 
            "Farmhouse / Floating Market", 
            "Orchid Forest / Dusun Bambu", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi AC & BBM"
        ],
        popular: true
    },
    {
        id: 2,
        title: "Lembang Private Trip",
        category: "lembang",
        type: "privatetrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 650.000",
        image: "image/12.jpg",
        features: [
            "Private Car (Max 6 Orang)", 
            "Free Konsultasi & Pilih Destinasi Lembang", 
            "Driver & Guide Pituin Sunda (BNSP)", 
            "BBM, Tol & Parkir", 
            "Durasi 12 Jam", 
            "Antar-Jemput Area Bandung City"
        ],
        popular: true
    },
    {
        id: 3,
        title: "Ciwidey Open Trip",
        category: "ciwidey",
        type: "opentrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 250.000",
        image: "image/11.jpg",
        features: [
            "Kawah Putih Eksotis", 
            "Glamping Lakeside & Pinisi Resto", 
            "Kebun Teh Rancabali", 
            "Ranca Upas Deer Feeding", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi AC & Dokumentasi"
        ],
        popular: true
    },
    {
        id: 4,
        title: "Ciwidey Private Trip",
        category: "ciwidey",
        type: "privatetrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 750.000",
        image: "image/11.jpg",
        features: [
            "Private Car (Max 6 Orang)", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi, Driver & BBM", 
            "Tol, Parkir & Dokumentasi Ringan", 
            "Durasi 12 Jam (Maks 4 Destinasi)", 
            "Antar Jemput Area Bandung Kota"
        ],
        popular: true
    }
];

function openDirectWA(messageText) {
    if (event) event.preventDefault();
    const encodedMsg = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodedMsg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });
}

// Render Tour Cards
function renderTours(packages) {
    const container = document.getElementById('tour-cards-container');
    const noResults = document.getElementById('no-results');
    if (!container) return;
    
    container.innerHTML = '';

    if (packages.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    packages.forEach(pkg => {
        const perPaxText = pkg.type === 'opentrip' ? '/pax' : '/paket';
        const encodedMsg = encodeURIComponent(`Halo Saphira Tour, saya ingin bertanya & memesan paket wisata Bandung: *${pkg.title}* (${pkg.price}). Mohon info ketersediaannya.`);
        const waUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodedMsg}`;

        const cardHTML = `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
                <div class="relative overflow-hidden h-56">
                    <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80';">
                    <div class="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <i class="fa-regular fa-clock mr-1"></i>${pkg.durationText}
                    </div>
                    ${pkg.popular ? `<div class="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow">BEST SELLER</div>` : ''}
                </div>

                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">${pkg.title}</h3>
                        <div class="mt-2 mb-4 flex items-baseline gap-1">
                            <span class="text-xs text-slate-500">Mulai</span>
                            <span class="text-2xl font-extrabold text-primary">${pkg.price}</span>
                            <span class="text-xs text-slate-500">${perPaxText}</span>
                        </div>

                        <ul class="space-y-2 mb-6">
                            ${pkg.features.map(f => `
                                <li class="text-xs text-slate-600 flex items-center gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
                                    <span>${f}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
                        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 text-sm">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>Pesan via WA</span>
                        </a>
                        <a href="reservasi.html?paket=${encodeURIComponent(pkg.title)}" class="bg-slate-100 hover:bg-primary hover:text-white text-slate-700 p-2.5 rounded-xl transition-colors" title="Isi Form Reservasi">
                            <i class="fa-solid fa-calendar-plus text-base"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Filter Functionality
function filterPackages() {
    const searchEl = document.getElementById('search-input');
    const categoryEl = document.getElementById('category-filter');
    const durationEl = document.getElementById('duration-filter');
    if (!searchEl || !categoryEl || !durationEl) return;

    const searchVal = searchEl.value.toLowerCase().trim();
    const categoryVal = categoryEl.value;
    const durationVal = durationEl.value;

    const filtered = tourPackages.filter(pkg => {
        const matchSearch = pkg.title.toLowerCase().includes(searchVal);
        let matchCategory = true;
        if (categoryVal === 'lembang') matchCategory = pkg.category === 'lembang';
        else if (categoryVal === 'ciwidey') matchCategory = pkg.category === 'ciwidey';
        else if (categoryVal === 'opentrip') matchCategory = pkg.type === 'opentrip';
        else if (categoryVal === 'privatetrip') matchCategory = pkg.type === 'privatetrip';

        let matchDuration = true;
        if (durationVal === 'short') matchDuration = pkg.durationDays === 1;
        else if (durationVal === 'medium') matchDuration = pkg.durationDays === 2;
        else if (durationVal === 'long') matchDuration = pkg.durationDays >= 3;

        return matchSearch && matchCategory && matchDuration;
    });

    renderTours(filtered);
}

function resetFilters() {
    const searchEl = document.getElementById('search-input');
    const categoryEl = document.getElementById('category-filter');
    const durationEl = document.getElementById('duration-filter');
    if (searchEl) searchEl.value = '';
    if (categoryEl) categoryEl.value = 'all';
    if (durationEl) durationEl.value = 'all';
    renderTours(tourPackages);
}

// WhatsApp Form Submit Handler
function submitToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const destination = document.getElementById('form-destination').value;
    const date = document.getElementById('form-date').value;
    const passengers = document.getElementById('form-passengers').value;
    const notes = document.getElementById('form-notes').value.trim();

    let message = `*RESERVASI WISATA BANDUNG - SAPHIRA TOUR*\n`;
    message += `----------------------------------------\n`;
    message += `👤 *Nama Lengkap:* ${name}\n`;
    message += `📞 *No WhatsApp:* ${phone}\n`;
    message += `🏞️ *Paket Bandung:* ${destination}\n`;
    message += `📅 *Tanggal Keberangkatan:* ${date}\n`;
    message += `👥 *Jumlah Peserta:* ${passengers} Orang\n`;
    if (notes) {
        message += `📝 *Catatan Khusus:* ${notes}\n`;
    }
    message += `----------------------------------------\n`;
    message += `Mohon informasi ketersediaan slot dan proses pembayarannya. Terima kasih!`;

    const waRedirectUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waRedirectUrl, '_blank', 'noopener,noreferrer');
}

// Inisialisasi saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    // 1. Jika di halaman paket-wisata.html
    if (document.getElementById('tour-cards-container')) {
        const kategoriParam = urlParams.get('kategori');
        if (kategoriParam && document.getElementById('category-filter')) {
            document.getElementById('category-filter').value = kategoriParam;
            filterPackages();
        } else {
            renderTours(tourPackages);
        }

        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const durationFilter = document.getElementById('duration-filter');

        if (searchBtn) searchBtn.addEventListener('click', filterPackages);
        if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterPackages(); });
        if (categoryFilter) categoryFilter.addEventListener('change', filterPackages);
        if (durationFilter) durationFilter.addEventListener('change', filterPackages);
    }

    // 2. Jika di halaman reservasi.html & ada parameter ?paket=...
    const paketParam = urlParams.get('paket');
    const selectEl = document.getElementById('form-destination');
    if (paketParam && selectEl) {
        selectEl.value = paketParam;
    }
});xt: "1 Hari (12 Jam)",
        price: "Rp 200.000",
        image: "image/12.jpg",
        features: [
            "Tangkuban Perahu", 
            "Bukit Strawberry", 
            "Farmhouse / Floating Market", 
            "Orchid Forest / Dusun Bambu", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi AC & BBM"
        ],
        popular: true
    },
    {
        id: 2,
        title: "Lembang Private Trip",
        category: "lembang",
        type: "privatetrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 650.000",
        image: "image/12.jpg",
        features: [
            "Private Car (Max 6 Orang)", 
            "Free Konsultasi & Pilih Destinasi Lembang", 
            "Driver & Guide Pituin Sunda (BNSP)", 
            "BBM, Tol & Parkir", 
            "Durasi 12 Jam", 
            "Antar-Jemput Area Bandung City"
        ],
        popular: true
    },
    {
        id: 3,
        title: "Ciwidey Open Trip",
        category: "ciwidey",
        type: "opentrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 250.000",
        image: "image/11.jpg",
        features: [
            "Kawah Putih Eksotis", 
            "Glamping Lakeside & Pinisi Resto", 
            "Kebun Teh Rancabali", 
            "Ranca Upas Deer Feeding", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi AC & Dokumentasi"
        ],
        popular: true
    },
    {
        id: 4,
        title: "Ciwidey Private Trip",
        category: "ciwidey",
        type: "privatetrip",
        durationDays: 1,
        durationText: "1 Hari (12 Jam)",
        price: "Rp 750.000",
        image: "image/11.jpg",
        features: [
            "Private Car (Max 6 Orang)", 
            "Tour Guide Sertifikasi BNSP", 
            "Transportasi, Driver & BBM", 
            "Tol, Parkir & Dokumentasi Ringan", 
            "Durasi 12 Jam (Maks 4 Destinasi)", 
            "Antar Jemput Area Bandung Kota"
        ],
        popular: true
    }
];

function openDirectWA(messageText) {
    if (event) event.preventDefault();
    const encodedMsg = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodedMsg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    });
}

// Render Tour Cards
function renderTours(packages) {
    const container = document.getElementById('tour-cards-container');
    const noResults = document.getElementById('no-results');
    if (!container) return;
    
    container.innerHTML = '';

    if (packages.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    packages.forEach(pkg => {
        const perPaxText = pkg.type === 'opentrip' ? '/pax' : '/paket';
        const encodedMsg = encodeURIComponent(`Halo Saphira Tour, saya ingin bertanya & memesan paket wisata Bandung: *${pkg.title}* (${pkg.price}). Mohon info ketersediaannya.`);
        const waUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodedMsg}`;

        const cardHTML = `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
                <div class="relative overflow-hidden h-56">
                    <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80';">
                    <div class="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <i class="fa-regular fa-clock mr-1"></i>${pkg.durationText}
                    </div>
                    ${pkg.popular ? `<div class="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow">BEST SELLER</div>` : ''}
                </div>

                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">${pkg.title}</h3>
                        <div class="mt-2 mb-4 flex items-baseline gap-1">
                            <span class="text-xs text-slate-500">Mulai</span>
                            <span class="text-2xl font-extrabold text-primary">${pkg.price}</span>
                            <span class="text-xs text-slate-500">${perPaxText}</span>
                        </div>

                        <ul class="space-y-2 mb-6">
                            ${pkg.features.map(f => `
                                <li class="text-xs text-slate-600 flex items-center gap-2">
                                    <i class="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
                                    <span>${f}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
                        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 text-sm">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>Pesan via WA</span>
                        </a>
                        <a href="reservasi.html?paket=${encodeURIComponent(pkg.title)}" class="bg-slate-100 hover:bg-primary hover:text-white text-slate-700 p-2.5 rounded-xl transition-colors" title="Isi Form Reservasi">
                            <i class="fa-solid fa-calendar-plus text-base"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Filter Functionality
function filterPackages() {
    const searchEl = document.getElementById('search-input');
    const categoryEl = document.getElementById('category-filter');
    const durationEl = document.getElementById('duration-filter');
    if (!searchEl || !categoryEl || !durationEl) return;

    const searchVal = searchEl.value.toLowerCase().trim();
    const categoryVal = categoryEl.value;
    const durationVal = durationEl.value;

    const filtered = tourPackages.filter(pkg => {
        const matchSearch = pkg.title.toLowerCase().includes(searchVal);
        let matchCategory = true;
        if (categoryVal === 'lembang') matchCategory = pkg.category === 'lembang';
        else if (categoryVal === 'ciwidey') matchCategory = pkg.category === 'ciwidey';
        else if (categoryVal === 'opentrip') matchCategory = pkg.type === 'opentrip';
        else if (categoryVal === 'privatetrip') matchCategory = pkg.type === 'privatetrip';

        let matchDuration = true;
        if (durationVal === 'short') matchDuration = pkg.durationDays === 1;
        else if (durationVal === 'medium') matchDuration = pkg.durationDays === 2;
        else if (durationVal === 'long') matchDuration = pkg.durationDays >= 3;

        return matchSearch && matchCategory && matchDuration;
    });

    renderTours(filtered);
}

function resetFilters() {
    const searchEl = document.getElementById('search-input');
    const categoryEl = document.getElementById('category-filter');
    const durationEl = document.getElementById('duration-filter');
    if (searchEl) searchEl.value = '';
    if (categoryEl) categoryEl.value = 'all';
    if (durationEl) durationEl.value = 'all';
    renderTours(tourPackages);
}

// WhatsApp Form Submit Handler
function submitToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const destination = document.getElementById('form-destination').value;
    const date = document.getElementById('form-date').value;
    const passengers = document.getElementById('form-passengers').value;
    const notes = document.getElementById('form-notes').value.trim();

    let message = `*RESERVASI WISATA BANDUNG - SAPHIRA TOUR*\n`;
    message += `----------------------------------------\n`;
    message += `👤 *Nama Lengkap:* ${name}\n`;
    message += `📞 *No WhatsApp:* ${phone}\n`;
    message += `🏞️ *Paket Bandung:* ${destination}\n`;
    message += `📅 *Tanggal Keberangkatan:* ${date}\n`;
    message += `👥 *Jumlah Peserta:* ${passengers} Orang\n`;
    if (notes) {
        message += `📝 *Catatan Khusus:* ${notes}\n`;
    }
    message += `----------------------------------------\n`;
    message += `Mohon informasi ketersediaan slot dan proses pembayarannya. Terima kasih!`;

    const waRedirectUrl = `https://wa.me/${API_CONFIG.WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waRedirectUrl, '_blank', 'noopener,noreferrer');
}

// Inisialisasi saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    // 1. Jika di halaman paket-wisata.html
    if (document.getElementById('tour-cards-container')) {
        const kategoriParam = urlParams.get('kategori');
        if (kategoriParam && document.getElementById('category-filter')) {
            document.getElementById('category-filter').value = kategoriParam;
            filterPackages();
        } else {
            renderTours(tourPackages);
        }

        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const durationFilter = document.getElementById('duration-filter');

        if (searchBtn) searchBtn.addEventListener('click', filterPackages);
        if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterPackages(); });
        if (categoryFilter) categoryFilter.addEventListener('change', filterPackages);
        if (durationFilter) durationFilter.addEventListener('change', filterPackages);
    }

    // 2. Jika di halaman reservasi.html & ada parameter ?paket=...
    const paketParam = urlParams.get('paket');
    const selectEl = document.getElementById('form-destination');
    if (paketParam && selectEl) {
        selectEl.value = paketParam;
    }
});