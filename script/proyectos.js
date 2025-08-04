// Variables para el cambio de idioma
let currentLanguage = 'es';
const languageBtn = document.getElementById('languageBtn');
const currentLangSpan = document.getElementById('currentLang');

// Variables para filtros
let currentFilter = 'all';

// Datos de los proyectos para el modal
const projectsData = {
    project1: {
        title: {
            es: "Planta Industrial MetalCorp",
            en: "MetalCorp Industrial Plant"
        },
        description: {
            es: "Proyecto integral de instalación eléctrica para planta metalúrgica de última generación. Incluye sistema de media tensión de 13.2kV, subestación eléctrica, tableros de distribución automatizados, sistema SCADA para monitoreo remoto, y certificación RETIE completa. El proyecto se ejecutó en 8 meses con un equipo de 15 especialistas.",
            en: "Comprehensive electrical installation project for state-of-the-art metallurgical plant. Includes 13.2kV medium voltage system, electrical substation, automated distribution panels, SCADA system for remote monitoring, and complete RETIE certification. The project was executed in 8 months with a team of 15 specialists."
        },
        client: "MetalCorp Industries S.A.",
        duration: {
            es: "8 meses",
            en: "8 months"
        },
        team: {
            es: "15 especialistas",
            en: "15 specialists"
        },
        certifications: "RETIE, ISO 9001, NFPA 70E",
        image: "/placeholder.svg?height=400&width=600&text=Planta+Industrial+MetalCorp",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=Subestacion+Electrica",
            "/placeholder.svg?height=200&width=300&text=Tableros+Control",
            "/placeholder.svg?height=200&width=300&text=Sistema+SCADA",
            "/placeholder.svg?height=200&width=300&text=Instalacion+Completa"
        ]
    },
    project2: {
        title: {
            es: "Centro Comercial Plaza Norte",
            en: "Plaza Norte Shopping Center"
        },
        description: {
            es: "Diseño e implementación del sistema eléctrico completo para centro comercial de 3 niveles y 15,000 m². Incluye iluminación LED inteligente, sistema de emergencia con UPS, climatización centralizada, sistema contra incendios, y monitoreo energético en tiempo real. Certificación LEED Gold por eficiencia energética.",
            en: "Design and implementation of complete electrical system for 3-level shopping center with 15,000 m². Includes intelligent LED lighting, UPS emergency system, centralized air conditioning, fire protection system, and real-time energy monitoring. LEED Gold certification for energy efficiency."
        },
        client: "Inmobiliaria Plaza Norte",
        duration: {
            es: "6 meses",
            en: "6 months"
        },
        team: {
            es: "12 especialistas",
            en: "12 specialists"
        },
        certifications: "RETIE, LEED Gold, NFPA 101",
        image: "/placeholder.svg?height=400&width=600&text=Centro+Comercial+Plaza+Norte",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=Iluminacion+LED",
            "/placeholder.svg?height=200&width=300&text=Sistema+Emergencia",
            "/placeholder.svg?height=200&width=300&text=Climatizacion",
            "/placeholder.svg?height=200&width=300&text=Monitoreo+Energetico"
        ]
    },
    project3: {
        title: {
            es: "Conjunto Residencial Los Álamos",
            en: "Los Álamos Residential Complex"
        },
        description: {
            es: "Instalación eléctrica integral para conjunto residencial premium de 120 apartamentos distribuidos en 6 torres. Incluye sistema domótico completo, seguridad perimetral, iluminación inteligente de áreas comunes, sistema de intercomunicación IP, y preparación para vehículos eléctricos en todos los parqueaderos.",
            en: "Comprehensive electrical installation for premium residential complex of 120 apartments distributed in 6 towers. Includes complete home automation system, perimeter security, intelligent lighting for common areas, IP intercom system, and electric vehicle preparation in all parking spaces."
        },
        client: "Constructora Los Álamos",
        duration: {
            es: "10 meses",
            en: "10 months"
        },
        team: {
            es: "18 especialistas",
            en: "18 specialists"
        },
        certifications: "RETIE, KNX Certified, CCTV",
        image: "/placeholder.svg?height=400&width=600&text=Residencial+Los+Alamos",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=Sistema+Domotico",
            "/placeholder.svg?height=200&width=300&text=Seguridad+Perimetral",
            "/placeholder.svg?height=200&width=300&text=Iluminacion+Comun",
            "/placeholder.svg?height=200&width=300&text=Vehiculos+Electricos"
        ]
    },
    project4: {
        title: {
            es: "Sistema Solar EcoTech Industries",
            en: "EcoTech Industries Solar System"
        },
        description: {
            es: "Instalación de sistema fotovoltaico de 500kW para empresa tecnológica con conexión a red eléctrica nacional. Incluye 1,800 paneles solares de alta eficiencia, inversores trifásicos, sistema de monitoreo en tiempo real, medición bidireccional certificada, y estructura de soporte optimizada para máxima captación solar.",
            en: "Installation of 500kW photovoltaic system for technology company with national grid connection. Includes 1,800 high-efficiency solar panels, three-phase inverters, real-time monitoring system, certified bidirectional metering, and support structure optimized for maximum solar capture."
        },
        client: "EcoTech Industries",
        duration: {
            es: "4 meses",
            en: "4 months"
        },
        team: {
            es: "10 especialistas",
            en: "10 specialists"
        },
        certifications: "RETIE, IEC 61215, CREG",
        image: "/placeholder.svg?height=400&width=600&text=Sistema+Solar+EcoTech",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=Paneles+Solares",
            "/placeholder.svg?height=200&width=300&text=Inversores+Trifasicos",
            "/placeholder.svg?height=200&width=300&text=Monitoreo+Tiempo+Real",
            "/placeholder.svg?height=200&width=300&text=Medicion+Bidireccional"
        ]
    },
    project5: {
        title: {
            es: "Hospital San Rafael",
            en: "San Rafael Hospital"
        },
        description: {
            es: "Modernización completa del sistema eléctrico hospitalario de 200 camas. Incluye UPS redundante de 500kVA, planta de emergencia diésel de 750kW, sistema de tierras hospitalario especializado, iluminación quirúrgica LED, sistema de gases medicinales eléctrico, y monitoreo crítico 24/7.",
            en: "Complete modernization of 200-bed hospital electrical system. Includes 500kVA redundant UPS, 750kW diesel emergency plant, specialized hospital grounding system, LED surgical lighting, electrical medical gas system, and 24/7 critical monitoring."
        },
        client: "Hospital San Rafael",
        duration: {
            es: "12 meses",
            en: "12 months"
        },
        team: {
            es: "20 especialistas",
            en: "20 specialists"
        },
        certifications: "RETIE, NFPA 99, Joint Commission",
        image: "/placeholder.svg?height=400&width=600&text=Hospital+San+Rafael",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=UPS+Redundante",
            "/placeholder.svg?height=200&width=300&text=Planta+Emergencia",
            "/placeholder.svg?height=200&width=300&text=Tierras+Hospitalario",
            "/placeholder.svg?height=200&width=300&text=Iluminacion+Quirurgica"
        ]
    },
    project6: {
        title: {
            es: "Fábrica Textil Colombia S.A.",
            en: "Colombia Textile Factory S.A."
        },
        description: {
            es: "Instalación de sistema eléctrico industrial para nueva planta textil de 8,000 m². Incluye centros de control de motores (CCM), variadores de frecuencia para maquinaria textil, sistema SCADA industrial, corrección de factor de potencia, y sistema de puesta a tierra especializado para ambiente industrial.",
            en: "Industrial electrical system installation for new 8,000 m² textile plant. Includes motor control centers (MCC), frequency drives for textile machinery, industrial SCADA system, power factor correction, and specialized grounding system for industrial environment."
        },
        client: "Textil Colombia S.A.",
        duration: {
            es: "7 meses",
            en: "7 months"
        },
        team: {
            es: "14 especialistas",
            en: "14 specialists"
        },
        certifications: "RETIE, IEC 61439, NEMA",
        image: "/placeholder.svg?height=400&width=600&text=Fabrica+Textil+Colombia",
        gallery: [
            "/placeholder.svg?height=200&width=300&text=Centros+Control+Motores",
            "/placeholder.svg?height=200&width=300&text=Variadores+Frecuencia",
            "/placeholder.svg?height=200&width=300&text=Sistema+SCADA",
            "/placeholder.svg?height=200&width=300&text=Factor+Potencia"
        ]
    }
};

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeProfileImage();
    initializeLanguageToggle();
    initializeFilters();
    addClickEffects();
    
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
        document.title = 'Special Forces Electrician - Completed Projects';
    } else {
        document.title = 'Special Forces Electrician - Proyectos Realizados';
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
            general: "Hola,%20me%20interesa%20obtener%20una%20cotización%20para%20un%20proyecto%20eléctrico%20similar.",
            project: "Hola,%20vi%20sus%20proyectos%20realizados%20y%20me%20interesa%20un%20proyecto%20similar."
        },
        en: {
            general: "Hello,%20I'm%20interested%20in%20getting%20a%20quote%20for%20a%20similar%20electrical%20project.",
            project: "Hello,%20I%20saw%20your%20completed%20projects%20and%20I'm%20interested%20in%20a%20similar%20project."
        }
    };
    
    whatsappLinks.forEach(link => {
        const baseUrl = 'https://wa.me/573173945568?text=';
        link.setAttribute('href', baseUrl + messages[currentLanguage].general);
    });
}

// Actualizar enlaces de email según el idioma
function updateEmailLinks() {
    const emailLinks = document.querySelectorAll('a[href*="mailto:"]');
    
    const subjects = {
        es: "Consulta%20sobre%20proyectos%20eléctricos",
        en: "Inquiry%20about%20electrical%20projects"
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

// Inicializar filtros
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener el filtro seleccionado
            const filter = button.getAttribute('data-filter');
            currentFilter = filter;
            
            // Aplicar filtro
            filterProjects(filter);
        });
    });
}

// Filtrar proyectos
function filterProjects(filter) {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            item.classList.add('visible');
            
            // Agregar delay para animación escalonada
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        } else {
            item.classList.add('hidden');
            item.classList.remove('visible');
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px) scale(0.95)';
        }
    });
}

// Abrir modal del proyecto
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = project.title[currentLanguage];
    document.getElementById('modalDescription').textContent = project.description[currentLanguage];
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title[currentLanguage];
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDuration').textContent = project.duration[currentLanguage];
    document.getElementById('modalTeam').textContent = project.team[currentLanguage];
    document.getElementById('modalCertifications').textContent = project.certifications;
    
    // Actualizar galería
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    
    project.gallery.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = project.title[currentLanguage];
        img.addEventListener('click', () => openImageFullscreen(imageSrc));
        gallery.appendChild(img);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Guardar ID del proyecto actual para el botón de contacto
    modal.setAttribute('data-current-project', projectId);
}

// Cerrar modal del proyecto
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contactar sobre proyecto específico
function contactProject() {
    const modal = document.getElementById('projectModal');
    const projectId = modal.getAttribute('data-current-project');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    const messages = {
        es: `Hola,%20vi%20el%20proyecto%20"${encodeURIComponent(project.title.es)}"%20y%20me%20interesa%20algo%20similar.%20¿Podrían%20darme%20más%20información?`,
        en: `Hello,%20I%20saw%20the%20project%20"${encodeURIComponent(project.title.en)}"%20and%20I'm%20interested%20in%20something%20similar.%20Could%20you%20give%20me%20more%20information?`
    };
    
    const whatsappUrl = `https://wa.me/573173945568?text=${messages[currentLanguage]}`;
    window.open(whatsappUrl, '_blank');
}

// Abrir imagen en pantalla completa
function openImageFullscreen(imageSrc) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
    `;
    
    fullscreenDiv.appendChild(img);
    document.body.appendChild(fullscreenDiv);
    
    // Cerrar al hacer click
    fullscreenDiv.addEventListener('click', () => {
        document.body.removeChild(fullscreenDiv);
    });
    
    // Cerrar con tecla Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(fullscreenDiv);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

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
    const animatedElements = document.querySelectorAll('.project-item, .profile-section, .filter-section, .contact-section, .social-section');
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
        es: '⚡ ¡Gracias por explorar nuestros proyectos! 🏗️',
        en: '⚡ Thank you for exploring our projects! 🏗️'
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
        
        if (e.target.closest('.project-card') || e.target.closest('.filter-btn') || e.target.closest('.contact-btn')) {
            const container = e.target.closest('.project-card') || e.target.closest('.filter-btn') || e.target.closest('.contact-btn');
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

// Manejo de errores
window.addEventListener('error', e => {
    console.error('Error en la aplicación:', e.error);
});

// Función global para hacer disponible desde HTML
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.contactProject = contactProject;