// Carousel functionality for asesorias page
document.addEventListener('DOMContentLoaded', function() {
    const carouselContent = document.getElementById('carouselContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!carouselContent || !prevBtn || !nextBtn || !indicatorsContainer) {
        return; // Exit if elements don't exist
    }
    
    const cards = carouselContent.querySelectorAll('.asesoria-card');
    let cardsPerView = getCardsPerView();
    let maxIndex = Math.max(0, cards.length - cardsPerView);
    // Iniciar desde el medio del carrusel
    let currentIndex = Math.floor(maxIndex / 2);
    
    // Function to determine cards per view based on screen size
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width >= 1200) return 3;
        if (width >= 768) return 2;
        return 1;
    }
    
    // Create indicators
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        const totalIndicators = maxIndex + 1;
        
        for (let i = 0; i <= maxIndex; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === currentIndex) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    // Update carousel position
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem gap
        const offset = -(currentIndex * (cardWidth + gap));
        carouselContent.style.transform = `translateX(${offset}px)`;
        
        // Update indicators
        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        nextBtn.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Handle resize
    function handleResize() {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            maxIndex = Math.max(0, cards.length - cardsPerView);
            // Mantener una posición centrada al cambiar el tamaño
            currentIndex = Math.min(Math.floor(maxIndex / 2), maxIndex);
            createIndicators();
            updateCarousel();
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    carouselContent.addEventListener('touchstart', function(e) {
        // Prevenir swipe si se toca un botón o elemento interactivo
        if (e.target.tagName === 'BUTTON' || 
            e.target.closest('button') || 
            e.target.tagName === 'A' || 
            e.target.closest('a') ||
            e.target.classList.contains('card-button')) {
            return;
        }
        
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    carouselContent.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });
    
    carouselContent.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    
    // Mouse drag support
    let mouseStartX = 0;
    let mouseCurrentX = 0;
    let isMouseDragging = false;
    
    carouselContent.addEventListener('mousedown', function(e) {
        // Prevenir drag si se hace clic en un botón o elemento interactivo
        if (e.target.tagName === 'BUTTON' || 
            e.target.closest('button') || 
            e.target.tagName === 'A' || 
            e.target.closest('a') ||
            e.target.classList.contains('card-button')) {
            return;
        }
        
        mouseStartX = e.clientX;
        isMouseDragging = true;
        carouselContent.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    carouselContent.addEventListener('mousemove', function(e) {
        if (!isMouseDragging) return;
        mouseCurrentX = e.clientX;
        e.preventDefault();
    });
    
    carouselContent.addEventListener('mouseup', function(e) {
        if (!isMouseDragging) return;
        isMouseDragging = false;
        carouselContent.style.cursor = 'grab';
        
        const diff = mouseStartX - mouseCurrentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    
    carouselContent.addEventListener('mouseleave', function() {
        if (isMouseDragging) {
            isMouseDragging = false;
            carouselContent.style.cursor = 'grab';
        }
    });
    
    // Auto-play functionality (optional)
    let autoPlayInterval;
    const autoPlayDelay = 15000; // 15 seconds
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentIndex < maxIndex) {
                nextSlide();
            } else {
                goToSlide(0); // Go back to first slide
            }
        }, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Pause auto-play on hover
    carouselContent.addEventListener('mouseenter', stopAutoPlay);
    carouselContent.addEventListener('mouseleave', startAutoPlay);
    
    // Initialize carousel
    createIndicators();
    updateCarousel();
    carouselContent.style.cursor = 'grab';
    
    // Add click handlers for card buttons
    const cardButtons = carouselContent.querySelectorAll('.card-button');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevenir que el evento se propague
            // Aquí puedes agregar la funcionalidad del botón
            console.log('Botón "Ver Asesoría" clickeado');
            // Por ejemplo: window.location.href = 'detalle-asesoria.html';
        });
    });
    
    // Start auto-play
    startAutoPlay();

    // Catalog filtering
    const catalogContainer = document.querySelector('.asesorias-catalog');
    const categoryItems = document.querySelectorAll('.asesorias-categories .category-list li');
    const allCards = Array.from(document.querySelectorAll('.asesoria-card'));
    
    function renderCatalog(filter) {
        catalogContainer.innerHTML = '';
        const filtered = filter === 'all' ? allCards : allCards.filter(card => card.dataset.category === filter);
        filtered.forEach(card => {
            const clone = card.cloneNode(true);
            catalogContainer.appendChild(clone);
        });
    }
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderCatalog(item.dataset.category);
        });
    });
    
    // Initial catalog render
    renderCatalog('all');
});
