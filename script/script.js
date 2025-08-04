// Variables del reproductor de video
let video, videoOverlay, videoControls, playButton, playPauseBtn, progressFill, timeDisplay;
let isPlaying = false;

// Variables para el video del patrocinador
let sponsorVideo, sponsorMuteBtn, sponsorCloseBtn;

// Variables para el cambio de idioma
let currentLanguage = 'es';
const languageBtn = document.getElementById('languageBtn');
const currentLangSpan = document.getElementById('currentLang');

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeVideoPlayer();
    initializeSponsorVideo();
    initializeAnimations();
    initializeProfileImage();
    addClickEffects();
    initializeLazyLoading();
    initializeLanguageToggle();
    
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    if (savedLanguage !== 'es') {
        toggleLanguage();
    }
});

// Inicializar el toggle de idioma
function initializeLanguageToggle() {
    languageBtn.addEventListener('click', toggleLanguage);
}

// Función para cambiar idioma
function toggleLanguage() {
    // Agregar clase de transición
    document.body.classList.add('language-transition');
    
    // Cambiar idioma
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    // Actualizar el botón
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    
    // Actualizar todos los elementos con data-es y data-en
    const elementsToTranslate = document.querySelectorAll('[data-es][data-en]');
    
    elementsToTranslate.forEach(element => {
        const newText = element.getAttribute(`data-${currentLanguage}`);
        if (newText) {
            element.textContent = newText;
        }
    });
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = currentLanguage;
    
    // Actualizar el título de la página
    if (currentLanguage === 'en') {
        document.title = 'Special Forces Electrician - Official Links';
    } else {
        document.title = 'Special Forces Electrician - Enlaces Oficiales';
    }
    
    // Actualizar enlaces de WhatsApp con el idioma correspondiente
    updateWhatsAppLinks();
    
    // Actualizar enlaces de email
    updateEmailLinks();
    
    // Guardar preferencia de idioma
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    // Remover clase de transición después de la animación
    setTimeout(() => {
        document.body.classList.remove('language-transition');
        document.body.classList.add('language-transition', 'complete');
        
        setTimeout(() => {
            document.body.classList.remove('language-transition', 'complete');
        }, 300);
    }, 150);
    
    // Mostrar notificación de cambio de idioma
    showLanguageNotification();
}

// Actualizar enlaces de WhatsApp según el idioma
function updateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    const messages = {
        es: {
            general: "Hola,%20me%20interesa%20obtener%20una%20cotización%20para%20un%20proyecto%20eléctrico.",
            instalaciones: "Hola,%20me%20interesa%20información%20sobre%20instalaciones%20eléctricas.",
            solar: "Hola,%20me%20interesa%20información%20sobre%20sistemas%20de%20energía%20solar.",
            domotica: "Hola,%20me%20interesa%20información%20sobre%20domótica%20y%20automatización.",
            mantenimiento: "Hola,%20me%20interesa%20información%20sobre%20servicios%20de%20mantenimiento."
        },
        en: {
            general: "Hello,%20I'm%20interested%20in%20getting%20a%20quote%20for%20an%20electrical%20project.",
            instalaciones: "Hello,%20I'm%20interested%20in%20information%20about%20electrical%20installations.",
            solar: "Hello,%20I'm%20interested%20in%20information%20about%20solar%20energy%20systems.",
            domotica: "Hello,%20I'm%20interested%20in%20information%20about%20home%20automation%20and%20smart%20systems.",
            mantenimiento: "Hello,%20I'm%20interested%20in%20information%20about%20maintenance%20services."
        }
    };
    
    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href');
        const baseUrl = 'https://wa.me/573173945568?text=';
        
        if (href.includes('instalaciones')) {
            link.setAttribute('href', baseUrl + messages[currentLanguage].instalaciones);
        } else if (href.includes('solar')) {
            link.setAttribute('href', baseUrl + messages[currentLanguage].solar);
        } else if (href.includes('domótica') || href.includes('automatización')) {
            link.setAttribute('href', baseUrl + messages[currentLanguage].domotica);
        } else if (href.includes('mantenimiento')) {
            link.setAttribute('href', baseUrl + messages[currentLanguage].mantenimiento);
        } else {
            link.setAttribute('href', baseUrl + messages[currentLanguage].general);
        }
    });
}

// Actualizar enlaces de email según el idioma
function updateEmailLinks() {
    const emailLinks = document.querySelectorAll('a[href*="mailto:"]');
    
    const subjects = {
        es: "Consulta%20sobre%20servicios%20eléctricos",
        en: "Inquiry%20about%20electrical%20services"
    };
    
    emailLinks.forEach(link => {
        const email = 'specialforceselectriciansas@gmail.com';
        link.setAttribute('href', `mailto:${email}?subject=${subjects[currentLanguage]}`);
    });
}

// Mostrar notificación de cambio de idioma
function showLanguageNotification() {
    const notification = document.createElement('div');
    const messages = {
        es: '🇪🇸 Idioma cambiado a Español',
        en: '🇺🇸 Language changed to English'
    };
    
    notification.innerHTML = messages[currentLanguage];
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--gradient);
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        font-weight: 600;
        font-size: 0.875rem;
        z-index: 1001;
        animation: slideInRight 0.4s ease-out;
        box-shadow: 0 8px 25px var(--shadow);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 2500);
}

// Inicializar reproductor de video
function initializeVideoPlayer() {
    video = document.getElementById('mainVideo');
    videoOverlay = document.getElementById('videoOverlay');
    videoControls = document.getElementById('videoControls');
    playButton = document.getElementById('playButton');
    playPauseBtn = document.getElementById('playPauseBtn');
    progressFill = document.getElementById('progressFill');
    timeDisplay = document.getElementById('timeDisplay');
    
    if (!video) return;
    
    // Eventos del reproductor
    playButton.addEventListener('click', togglePlay);
    playPauseBtn.addEventListener('click', togglePlay);
    
    video.addEventListener('click', togglePlay);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateTimeDisplay);
    video.addEventListener('ended', videoEnded);
    
    // Controles adicionales
    document.getElementById('volumeBtn').addEventListener('click', toggleMute);
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    
    // Barra de progreso
    document.querySelector('.progress-bar').addEventListener('click', seekVideo);
    
    // Mostrar/ocultar controles
    video.parentElement.addEventListener('mouseenter', () => {
        if (isPlaying) {
            videoControls.style.opacity = '1';
        }
    });
    
    video.parentElement.addEventListener('mouseleave', () => {
        videoControls.style.opacity = '0';
    });
}

// Inicializar el video del patrocinador
function initializeSponsorVideo() {
    sponsorVideo = document.getElementById('sponsorVideo');
    sponsorMuteBtn = document.getElementById('sponsorMuteBtn');
    sponsorCloseBtn = document.getElementById('sponsorCloseBtn');
    
    if (!sponsorVideo) return;
    
    // Asegurarse de que el video se reproduce automáticamente
    sponsorVideo.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
    
    // Botón para activar/desactivar el sonido
    sponsorMuteBtn.addEventListener('click', () => {
        if (sponsorVideo.muted) {
            sponsorVideo.muted = false;
            sponsorMuteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            sponsorVideo.muted = true;
            sponsorMuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
    
    // Botón para cerrar el video
    sponsorCloseBtn.addEventListener('click', () => {
        const sponsorSection = document.querySelector('.sponsor-video-section');
        sponsorSection.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            sponsorSection.style.display = 'none';
        }, 500);
    });
    
    // Click en el video para activar/desactivar sonido
    sponsorVideo.addEventListener('click', function() {
        if (this.muted) {
            this.muted = false;
            sponsorMuteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            this.muted = true;
            sponsorMuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
}

// Reproducir/pausar video
function togglePlay() {
    if (video.paused) {
        video.play();
        isPlaying = true;
        videoOverlay.classList.add('hidden');
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Actualizar barra de progreso
function updateProgress() {
    const progress = (video.currentTime / video.duration) * 100;
    progressFill.style.width = progress + '%';
    updateTimeDisplay();
}

// Actualizar tiempo
function updateTimeDisplay() {
    const current = formatTime(video.currentTime);
    const duration = formatTime(video.duration);
    timeDisplay.textContent = `${current} / ${duration}`;
}

// Formatear tiempo
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Buscar en el video
function seekVideo(e) {
    const progressBar = e.currentTarget;
    const clickX = e.offsetX;
    const width = progressBar.offsetWidth;
    const duration = video.duration;
    
    video.currentTime = (clickX / width) * duration;
}

// Silenciar/activar audio
function toggleMute() {
    const volumeBtn = document.getElementById('volumeBtn');
    
    if (video.muted) {
        video.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// Pantalla completa
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Video terminado
function videoEnded() {
    isPlaying = false;
    videoOverlay.classList.remove('hidden');
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    progressFill.style.width = '0%';
}

// Animaciones de entrada
function initializeAnimations() {
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar elementos animables
    const animatedElements = document.querySelectorAll('.link-item, .profile-section, .social-section, .video-section, .courses-section, .course-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Efecto especial para la imagen de perfil
function initializeProfileImage() {
    const profileImg = document.getElementById('profileImg');
    let clickCount = 0;
    
    profileImg.addEventListener('click', () => {
        clickCount++;
        
        // Efecto de rotación
        profileImg.style.transform = 'scale(1.1) rotate(360deg)';
        
        setTimeout(() => {
            profileImg.style.transform = '';
        }, 600);
        
        // Easter egg después de 5 clicks
        if (clickCount >= 5) {
            showEasterEgg();
            clickCount = 0;
        }
    });
}

// Easter egg divertido
function showEasterEgg() {
    const messages = {
        es: '⚡ ¡Gracias por confiar en Special Forces Electrician! 🔧',
        en: '⚡ Thank you for trusting Special Forces Electrician! 🔧'
    };
    
    const message = document.createElement('div');
    message.innerHTML = messages[currentLanguage];
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b35, #e55a2b);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        z-index: 1000;
        animation: bounceIn 0.6s ease-out;
        box-shadow: 0 12px 40px rgba(255, 107, 53, 0.3);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.4s ease-out forwards';
        setTimeout(() => {
            if (document.body.contains(message)) {
                document.body.removeChild(message);
            }
        }, 400);
    }, 2000);
}

// Efectos de click mejorados
function addClickEffects() {
    // Efecto de ondas al hacer click
    document.addEventListener('click', e => {
        const ripple = document.createElement('div');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 107, 53, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        if (e.target.closest('.link-item') || e.target.closest('.social-link') || e.target.closest('.course-card')) {
            const container = e.target.closest('.link-item') || e.target.closest('.social-link') || e.target.closest('.course-card');
            container.style.position = 'relative';
            container.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        }
    });
}

// Animaciones CSS adicionales
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes bounceIn {
        0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.05);
        }
        70% {
            transform: translate(-50%, -50%) scale(0.9);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Preloader simple
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Manejo de errores
window.addEventListener('error', e => {
    console.error('Error en la aplicación:', e.error);
});