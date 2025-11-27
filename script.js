// ==================== 
// KONFIGURASI & DATA
// ==================== 
const CONFIG = {
    ITEMS_PER_PAGE: 8,
    INFINITE_SCROLL: true, // true untuk infinite scroll, false untuk tombol load more
    LAZY_LOAD_OFFSET: 50
};

// Data Film (Tambahkan lebih banyak film sesuai kebutuhan)
const dataFilm = [
    {
        id: 1,
        judul: "Film Action 1",
        tahun: "2024",
        genre: "action",
        rating: "8.5",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/e94560/ffffff?text=Film+1",
        durasi: "120 menit",
        sinopsis: "Deskripsi singkat film action yang seru...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 2,
        judul: "Film Horror 1",
        tahun: "2024",
        genre: "horror",
        rating: "7.8",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/4a0080/ffffff?text=Film+2",
        durasi: "95 menit",
        sinopsis: "Film horror yang menegangkan...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 3,
        judul: "Film Comedy 1",
        tahun: "2023",
        genre: "comedy",
        rating: "8.0",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/ffc107/000000?text=Film+3",
        durasi: "110 menit",
        sinopsis: "Film komedi yang menghibur...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 4,
        judul: "Film Romance 1",
        tahun: "2024",
        genre: "romance",
        rating: "8.2",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/ff69b4/ffffff?text=Film+4",
        durasi: "130 menit",
        sinopsis: "Film romantis yang menyentuh hati...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 5,
        judul: "Film Animation 1",
        tahun: "2024",
        genre: "animation",
        rating: "9.0",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/00bcd4/ffffff?text=Film+5",
        durasi: "100 menit",
        sinopsis: "Film animasi yang mengagumkan...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 6,
        judul: "Film Action 2",
        tahun: "2023",
        genre: "action",
        rating: "7.5",
        kualitas: "CAM",
        poster: "https://via.placeholder.com/300x450/ff5722/ffffff?text=Film+6",
        durasi: "140 menit",
        sinopsis: "Aksi laga yang menegangkan...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 7,
        judul: "Film Horror 2",
        tahun: "2024",
        genre: "horror",
        rating: "8.3",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/212121/ffffff?text=Film+7",
        durasi: "88 menit",
        sinopsis: "Horror terseram tahun ini...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    {
        id: 8,
        judul: "Film Comedy 2",
        tahun: "2024",
        genre: "comedy",
        rating: "7.9",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/8bc34a/000000?text=Film+8",
        durasi: "105 menit",
        sinopsis: "Komedi segar yang bikin ngakak...",
        linkNonton: "https://www.youtube.com/embed/VIDEO_ID",
        linkDownload: "#"
    },
    // Tambahan film untuk demonstrasi pagination
    {
        id: 9,
        judul: "Film Action 3",
        tahun: "2024",
        genre: "action",
        rating: "8.1",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/e94560/ffffff?text=Film+9",
        durasi: "115 menit",
        sinopsis: "Action terbaru...",
        linkNonton: "#",
        linkDownload: "#"
    },
    {
        id: 10,
        judul: "Film Horror 3",
        tahun: "2024",
        genre: "horror",
        rating: "7.6",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/4a0080/ffffff?text=Film+10",
        durasi: "92 menit",
        sinopsis: "Horror terbaru...",
        linkNonton: "#",
        linkDownload: "#"
    },
    {
        id: 11,
        judul: "Film Comedy 3",
        tahun: "2024",
        genre: "comedy",
        rating: "7.7",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/ffc107/000000?text=Film+11",
        durasi: "98 menit",
        sinopsis: "Comedy terbaru...",
        linkNonton: "#",
        linkDownload: "#"
    },
    {
        id: 12,
        judul: "Film Romance 2",
        tahun: "2024",
        genre: "romance",
        rating: "8.4",
        kualitas: "HD",
        poster: "https://via.placeholder.com/300x450/ff69b4/ffffff?text=Film+12",
        durasi: "125 menit",
        sinopsis: "Romance terbaru...",
        linkNonton: "#",
        linkDownload: "#"
    }
];

// ==================== 
// STATE MANAGEMENT
// ==================== 
const state = {
    currentFilms: [...dataFilm],
    filteredFilms: [...dataFilm],
    displayedCount: 0,
    currentGenre: 'semua',
    currentSort: 'terbaru',
    isLoading: false,
    searchQuery: ''
};

// ==================== 
// DOM ELEMENTS
// ==================== 
const elements = {
    filmGrid: null,
    searchInput: null,
    searchBtn: null,
    loadMoreBtn: null,
    infiniteLoader: null,
    scrollToTop: null,
    header: null,
    menuToggle: null,
    mobileMenu: null,
    loadingScreen: null,
    searchSuggestions: null,
    sortSelect: null
};

// ==================== 
// INITIALIZATION
// ==================== 
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    initializeEventListeners();
    initializeFilms();
    hideLoadingScreen();
    setupLazyLoading();
    setupInfiniteScroll();
});

function initializeElements() {
    elements.filmGrid = document.getElementById('filmGrid');
    elements.searchInput = document.getElementById('searchInput');
    elements.searchBtn = document.getElementById('searchBtn');
    elements.loadMoreBtn = document.getElementById('loadMoreBtn');
    elements.infiniteLoader = document.getElementById('infiniteLoader');
    elements.scrollToTop = document.getElementById('scrollToTop');
    elements.header = document.getElementById('header');
    elements.menuToggle = document.getElementById('menuToggle');
    elements.mobileMenu = document.getElementById('mobileMenu');
    elements.loadingScreen = document.getElementById('loading-screen');
    elements.searchSuggestions = document.getElementById('searchSuggestions');
    elements.sortSelect = document.getElementById('sortSelect');
    elements.loadMoreContainer = document.getElementById('loadMoreContainer');
}

function initializeEventListeners() {
    // Search functionality
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', performSearch);
    }
    
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Live search suggestions
        elements.searchInput.addEventListener('input', debounce(showSearchSuggestions, 300));
    }
    
    // Category filters
    document.querySelectorAll('.kat-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Sorting
    if (elements.sortSelect) {
        elements.sortSelect.addEventListener('change', handleSort);
    }
    
    // Load more button
    if (elements.loadMoreBtn && !CONFIG.INFINITE_SCROLL) {
        elements.loadMoreBtn.addEventListener('click', loadMoreFilms);
    }
    
    // Scroll to top
    if (elements.scrollToTop) {
        elements.scrollToTop.addEventListener('click', scrollToTop);
    }
    
    // Mobile menu
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            elements.mobileMenu.classList.remove('active');
        });
    });
    
    // Share buttons
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', handleShare);
    });
    
    // Window scroll events
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

// ==================== 
// FILM DISPLAY FUNCTIONS
// ==================== 
function initializeFilms() {
    state.displayedCount = 0;
    state.filteredFilms = [...dataFilm];
    renderFilms(CONFIG.ITEMS_PER_PAGE);
    
    // Hide/show load more based on config
    if (CONFIG.INFINITE_SCROLL && elements.loadMoreContainer) {
        elements.loadMoreContainer.style.display = 'none';
    }
}

function renderFilms(count) {
    const startIndex = state.displayedCount;
    const endIndex = Math.min(startIndex + count, state.filteredFilms.length);
    const filmsToRender = state.filteredFilms.slice(startIndex, endIndex);
    
    if (startIndex === 0) {
        elements.filmGrid.innerHTML = '';
    }
    
    filmsToRender.forEach((film, index) => {
        const card = createFilmCard(film);
        elements.filmGrid.appendChild(card);
        
        // Animate cards on appearance
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
    
    state.displayedCount = endIndex;
    
    // Update load more button
    updateLoadMoreButton();
}

function createFilmCard(film) {
    const card = document.createElement('div');
    card.className = 'film-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    card.innerHTML = `
        <div class="poster">
            <img data-src="${film.poster}" alt="${film.judul}" class="lazy-image">
            <span class="rating">⭐ ${film.rating}</span>
            <span class="quality">${film.kualitas}</span>
            <div class="play-overlay">
                <div class="play-btn">▶</div>
            </div>
        </div>
        <div class="info">
            <div class="title" title="${film.judul}">${film.judul}</div>
            <div class="meta">
                <span>${film.tahun}</span>
                <span>${film.genre}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openFilm(film.id));
    
    return card;
}

function loadMoreFilms() {
    if (state.isLoading) return;
    
    state.isLoading = true;
    
    // Show loader
    if (elements.infiniteLoader) {
        elements.infiniteLoader.style.display = 'block';
    }
    
    // Simulate loading delay
    setTimeout(() => {
        renderFilms(CONFIG.ITEMS_PER_PAGE);
        state.isLoading = false;
        
        if (elements.infiniteLoader) {
            elements.infiniteLoader.style.display = 'none';
        }
    }, 500);
}

function updateLoadMoreButton() {
    if (!elements.loadMoreBtn) return;
    
    if (state.displayedCount >= state.filteredFilms.length) {
        elements.loadMoreBtn.style.display = 'none';
    } else {
        elements.loadMoreBtn.style.display = 'block';
        elements.loadMoreBtn.textContent = `Muat Lebih Banyak (${state.filteredFilms.length - state.displayedCount} film tersisa)`;
    }
}

// ==================== 
// FILTER & SEARCH FUNCTIONS
// ==================== 
function handleCategoryFilter(e) {
    const btn = e.target;
    const genre = btn.dataset.genre;
    
    // Update active button
    document.querySelectorAll('.kat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter films
    state.currentGenre = genre;
    applyFilters();
}

function performSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();
    state.searchQuery = query;
    applyFilters();
    
    // Hide suggestions
    if (elements.searchSuggestions) {
        elements.searchSuggestions.classList.remove('active');
    }
}

function showSearchSuggestions() {
    const query = elements.searchInput.value.toLowerCase().trim();
    
    if (!query) {
        elements.searchSuggestions.classList.remove('active');
        return;
    }
    
    const suggestions = dataFilm.filter(film => 
        film.judul.toLowerCase().includes(query) ||
        film.genre.toLowerCase().includes(query)
    ).slice(0, 5);
    
    if (suggestions.length > 0) {
        elements.searchSuggestions.innerHTML = suggestions.map(film => `
            <div class="search-suggestion-item" onclick="selectSuggestion('${film.judul}')">
                ${film.judul} (${film.tahun})
            </div>
        `).join('');
        elements.searchSuggestions.classList.add('active');
    } else {
        elements.searchSuggestions.classList.remove('active');
    }
}

function selectSuggestion(title) {
    elements.searchInput.value = title;
    elements.searchSuggestions.classList.remove('active');
    performSearch();
}

// Make selectSuggestion global for onclick
window.selectSuggestion = selectSuggestion;

function handleSort() {
    const sortValue = elements.sortSelect.value;
    state.currentSort = sortValue;
    applyFilters();
}

function applyFilters() {
    // Start with all films
    let filtered = [...dataFilm];
    
    // Apply genre filter
    if (state.currentGenre !== 'semua') {
        filtered = filtered.filter(film => film.genre === state.currentGenre);
    }
    
    // Apply search filter
    if (state.searchQuery) {
        filtered = filtered.filter(film =>
            film.judul.toLowerCase().includes(state.searchQuery) ||
            film.genre.toLowerCase().includes(state.searchQuery) ||
            film.tahun.includes(state.searchQuery)
        );
    }
    
    // Apply sorting
    switch (state.currentSort) {
        case 'rating':
            filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case 'judul':
            filtered.sort((a, b) => a.judul.localeCompare(b.judul));
            break;
        case 'tahun':
            filtered.sort((a, b) => parseInt(b.tahun) - parseInt(a.tahun));
            break;
        case 'terbaru':
        default:
            // Default order
            break;
    }
    
    // Update state and re-render
    state.filteredFilms = filtered;
    state.displayedCount = 0;
    elements.filmGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        elements.filmGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Tidak ada film yang ditemukan 😕</p>';
    } else {
        renderFilms(CONFIG.ITEMS_PER_PAGE);
    }
}

// ==================== 
// LAZY LOADING
// ==================== 
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: `${CONFIG.LAZY_LOAD_OFFSET}px`
    });
    
    // Observe existing images
    observeLazyImages(imageObserver);
    
    // Set up mutation observer for new images
    const mutationObserver = new MutationObserver(() => {
        observeLazyImages(imageObserver);
    });
    
    if (elements.filmGrid) {
        mutationObserver.observe(elements.filmGrid, {
            childList: true,
            subtree: true
        });
    }
}

function observeLazyImages(observer) {
    document.querySelectorAll('.lazy-image:not(.loaded)').forEach(img => {
        observer.observe(img);
    });
}

// ==================== 
// INFINITE SCROLL
// ==================== 
function setupInfiniteScroll() {
    if (!CONFIG.INFINITE_SCROLL) return;
    
    const scrollObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !state.isLoading) {
            if (state.displayedCount < state.filteredFilms.length) {
                loadMoreFilms();
            }
        }
    }, {
        rootMargin: '100px'
    });
    
    if (elements.infiniteLoader) {
        scrollObserver.observe(elements.infiniteLoader);
    }
}

// ==================== 
// UI INTERACTIONS
// ==================== 
function handleScroll() {
    const scrollY = window.pageYOffset;
    
    // Show/hide scroll to top button
    if (elements.scrollToTop) {
        if (scrollY > 300) {
            elements.scrollToTop.classList.add('show');
        } else {
            elements.scrollToTop.classList.remove('show');
        }
    }
    
    // Header scroll effect
    if (elements.header) {
        if (scrollY > 100) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    elements.mobileMenu.classList.toggle('active');
}

function hideLoadingScreen() {
    setTimeout(() => {
        if (elements.loadingScreen) {
            elements.loadingScreen.classList.add('hide');
        }
    }, 1000);
}

// ==================== 
// SHARE FUNCTIONALITY
// ==================== 
function handleShare(e) {
    const platform = e.target.dataset.platform;
    const url = window.location.href;
    const title = 'FilmKu - Nonton Film Online Gratis';
    const text = 'Nonton film favorit kamu gratis di FilmKu!';
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// ==================== 
// NAVIGATION
// ==================== 
function openFilm(id) {
    // Save film ID to sessionStorage
    sessionStorage.setItem('currentFilmId', id);
    
    // Navigate to film detail page
    window.location.href = `film.html?id=${id}`;
}

// Make openFilm global
window.openFilm = openFilm;

// ==================== 
// UTILITY FUNCTIONS
// ==================== 
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== 
// FILM DETAIL PAGE FUNCTIONS
// ==================== 
function getFilmDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    return dataFilm.find(film => film.id === id);
}

// Make getFilmDetail global for film.html
window.getFilmDetail = getFilmDetail;

// ==================== 
// SERVICE WORKER REGISTRATION (for PWA support)
// ==================== 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app will still work normally
        });
    });
}

// ==================== 
// PERFORMANCE MONITORING
// ==================== 
window.addEventListener('load', () => {
    // Log performance metrics
    if (window.performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});

// ==================== 
// ERROR HANDLING
// ==================== 
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You can send error logs to your analytics service here
});

// ==================== 
// EXPORT FOR TESTING (if needed)
// ==================== 
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        dataFilm,
        state,
        renderFilms,
        applyFilters,
        CONFIG
    };
}