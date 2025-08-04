// Variables para el cambio de idioma
let currentLanguage = "es"
const languageBtn = document.getElementById("languageBtn")
const currentLangSpan = document.getElementById("currentLang")

// Variables para filtros
let currentFilter = "all"

// Datos de las certificaciones para el modal
const certificationsData = {
  cert1: {
    title: "RETIE",
    subtitle: {
      es: "Reglamento Técnico de Instalaciones Eléctricas",
      en: "Technical Regulation for Electrical Installations",
    },
    description: {
      es: "Certificación que garantiza el cumplimiento de los requisitos técnicos para instalaciones eléctricas en Colombia, asegurando la seguridad de personas y bienes. Esta certificación es obligatoria para todas las instalaciones eléctricas y demuestra nuestro compromiso con los más altos estándares de seguridad eléctrica.",
      en: "Certification that guarantees compliance with technical requirements for electrical installations in Colombia, ensuring the safety of people and property. This certification is mandatory for all electrical installations and demonstrates our commitment to the highest electrical safety standards.",
    },
    issuer: "CIDET",
    issueDate: {
      es: "15 de Enero, 2022",
      en: "January 15, 2022",
    },
    expiryDate: {
      es: "15 de Enero, 2025",
      en: "January 15, 2025",
    },
    certNumber: "RETIE-2022-001547",
    scope: {
      es: "Instalaciones eléctricas de baja, media y alta tensión",
      en: "Low, medium and high voltage electrical installations",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=RETIE+Certificate",
  },
  cert2: {
    title: "ISO 9001:2015",
    subtitle: {
      es: "Sistema de Gestión de Calidad",
      en: "Quality Management System",
    },
    description: {
      es: "Estándar internacional que especifica los requisitos para un sistema de gestión de calidad, demostrando nuestra capacidad para proporcionar servicios que satisfacen los requisitos del cliente y los reglamentarios aplicables. Nuestro compromiso con la mejora continua garantiza la excelencia en cada proyecto.",
      en: "International standard that specifies requirements for a quality management system, demonstrating our ability to provide services that meet customer requirements and applicable regulations. Our commitment to continuous improvement ensures excellence in every project.",
    },
    issuer: "ICONTEC",
    issueDate: {
      es: "10 de Marzo, 2023",
      en: "March 10, 2023",
    },
    expiryDate: {
      es: "10 de Marzo, 2026",
      en: "March 10, 2026",
    },
    certNumber: "ISO-9001-2023-0892",
    scope: {
      es: "Servicios de instalación y mantenimiento eléctrico",
      en: "Electrical installation and maintenance services",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=ISO+9001+Certificate",
  },
  cert3: {
    title: "NFPA 70E",
    subtitle: {
      es: "Seguridad Eléctrica en el Lugar de Trabajo",
      en: "Electrical Safety in the Workplace",
    },
    description: {
      es: "Estándar para la seguridad eléctrica en el lugar de trabajo que establece prácticas de trabajo seguras para proteger a los trabajadores de los peligros eléctricos. Nuestro personal está certificado en las mejores prácticas de seguridad eléctrica, garantizando un ambiente de trabajo seguro en todos nuestros proyectos.",
      en: "Standard for electrical safety in the workplace that establishes safe work practices to protect workers from electrical hazards. Our staff is certified in electrical safety best practices, ensuring a safe work environment in all our projects.",
    },
    issuer: "NFPA",
    issueDate: {
      es: "5 de Junio, 2022",
      en: "June 5, 2022",
    },
    expiryDate: {
      es: "5 de Junio, 2025",
      en: "June 5, 2025",
    },
    certNumber: "NFPA-70E-2022-3456",
    scope: {
      es: "Seguridad eléctrica y prácticas de trabajo seguras",
      en: "Electrical safety and safe work practices",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=NFPA+70E+Certificate",
  },
  cert4: {
    title: "ISO 45001:2018",
    subtitle: {
      es: "Gestión de Seguridad y Salud Ocupacional",
      en: "Occupational Health and Safety Management",
    },
    description: {
      es: "Sistema de gestión de seguridad y salud en el trabajo que ayuda a las organizaciones a mejorar la seguridad de los empleados, reducir los riesgos en el lugar de trabajo y crear mejores condiciones de trabajo. Implementamos un enfoque sistemático para gestionar los riesgos de seguridad y salud ocupacional.",
      en: "Occupational health and safety management system that helps organizations improve employee safety, reduce workplace risks and create better working conditions. We implement a systematic approach to managing occupational health and safety risks.",
    },
    issuer: "ICONTEC",
    issueDate: {
      es: "20 de Agosto, 2023",
      en: "August 20, 2023",
    },
    expiryDate: {
      es: "20 de Agosto, 2026",
      en: "August 20, 2026",
    },
    certNumber: "ISO-45001-2023-1247",
    scope: {
      es: "Gestión de seguridad y salud ocupacional",
      en: "Occupational health and safety management",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=ISO+45001+Certificate",
  },
  cert5: {
    title: "ISO 14001:2015",
    subtitle: {
      es: "Sistema de Gestión Ambiental",
      en: "Environmental Management System",
    },
    description: {
      es: "Estándar internacional que especifica los requisitos para un sistema de gestión ambiental efectivo, demostrando nuestro compromiso con la protección del medio ambiente. Implementamos prácticas sostenibles en todos nuestros proyectos, minimizando el impacto ambiental y promoviendo la responsabilidad ecológica.",
      en: "International standard that specifies requirements for an effective environmental management system, demonstrating our commitment to environmental protection. We implement sustainable practices in all our projects, minimizing environmental impact and promoting ecological responsibility.",
    },
    issuer: "ICONTEC",
    issueDate: {
      es: "12 de Noviembre, 2023",
      en: "November 12, 2023",
    },
    expiryDate: {
      es: "12 de Noviembre, 2026",
      en: "November 12, 2026",
    },
    certNumber: "ISO-14001-2023-0654",
    scope: {
      es: "Gestión ambiental en servicios eléctricos",
      en: "Environmental management in electrical services",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=ISO+14001+Certificate",
  },
  cert6: {
    title: "Schneider Electric Partner",
    subtitle: {
      es: "Partner Autorizado",
      en: "Authorized Partner",
    },
    description: {
      es: "Certificación como partner autorizado de Schneider Electric para la instalación, configuración y mantenimiento de equipos de automatización y control industrial. Esta certificación nos permite ofrecer soluciones de vanguardia en automatización industrial y sistemas de control avanzados.",
      en: "Certification as authorized partner of Schneider Electric for installation, configuration and maintenance of automation and industrial control equipment. This certification allows us to offer cutting-edge solutions in industrial automation and advanced control systems.",
    },
    issuer: "Schneider Electric",
    issueDate: {
      es: "8 de Febrero, 2023",
      en: "February 8, 2023",
    },
    expiryDate: {
      es: "8 de Febrero, 2025",
      en: "February 8, 2025",
    },
    certNumber: "SE-PARTNER-2023-7891",
    scope: {
      es: "Automatización industrial y control de procesos",
      en: "Industrial automation and process control",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=Schneider+Electric+Partner",
  },
  cert7: {
    title: "ABB Authorized Partner",
    subtitle: {
      es: "Partner Autorizado ABB",
      en: "ABB Authorized Partner",
    },
    description: {
      es: "Certificación como partner autorizado de ABB para sistemas de media y alta tensión, variadores de frecuencia y soluciones de automatización industrial. Esta acreditación nos permite implementar las tecnologías más avanzadas en sistemas eléctricos industriales y comerciales.",
      en: "Certification as ABB authorized partner for medium and high voltage systems, frequency drives and industrial automation solutions. This accreditation allows us to implement the most advanced technologies in industrial and commercial electrical systems.",
    },
    issuer: "ABB",
    issueDate: {
      es: "25 de Abril, 2023",
      en: "April 25, 2023",
    },
    expiryDate: {
      es: "25 de Abril, 2025",
      en: "April 25, 2025",
    },
    certNumber: "ABB-AUTH-2023-4567",
    scope: {
      es: "Sistemas de media/alta tensión y automatización",
      en: "Medium/high voltage systems and automation",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=ABB+Authorized+Partner",
  },
  cert8: {
    title: "AWS D1.1",
    subtitle: {
      es: "Código de Soldadura Estructural",
      en: "Structural Welding Code",
    },
    description: {
      es: "Certificación en soldadura estructural según el código AWS D1.1 para trabajos de soldadura en estructuras metálicas y soportes de equipos eléctricos. Nuestros soldadores certificados garantizan la integridad estructural de todas las instalaciones metálicas en nuestros proyectos eléctricos.",
      en: "Structural welding certification according to AWS D1.1 code for welding work on metal structures and electrical equipment supports. Our certified welders guarantee the structural integrity of all metal installations in our electrical projects.",
    },
    issuer: "AWS (American Welding Society)",
    issueDate: {
      es: "18 de Septiembre, 2022",
      en: "September 18, 2022",
    },
    expiryDate: {
      es: "18 de Septiembre, 2025",
      en: "September 18, 2025",
    },
    certNumber: "AWS-D1.1-2022-9876",
    scope: {
      es: "Soldadura estructural para soportes eléctricos",
      en: "Structural welding for electrical supports",
    },
    status: {
      es: "Vigente",
      en: "Valid",
    },
    image: "/placeholder.svg?height=300&width=500&text=AWS+D1.1+Certificate",
  },
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  initializeProfileImage()
  initializeLanguageToggle()
  initializeFilters()
  addClickEffects()

  // Cargar idioma guardado
  const savedLanguage = localStorage.getItem("selectedLanguage") || "es"
  if (savedLanguage !== "es") {
    toggleLanguage()
  }
})

// Inicializar el toggle de idioma
function initializeLanguageToggle() {
  languageBtn.addEventListener("click", toggleLanguage)
}

// Función para cambiar idioma
function toggleLanguage() {
  // Agregar clase de transición
  document.body.classList.add("language-transition")

  // Cambiar idioma
  currentLanguage = currentLanguage === "es" ? "en" : "es"

  // Actualizar el botón
  currentLangSpan.textContent = currentLanguage.toUpperCase()

  // Actualizar todos los elementos con data-es y data-en
  const elementsToTranslate = document.querySelectorAll("[data-es][data-en]")

  elementsToTranslate.forEach((element) => {
    const newText = element.getAttribute(`data-${currentLanguage}`)
    if (newText) {
      element.textContent = newText
    }
  })

  // Actualizar el atributo lang del HTML
  document.documentElement.lang = currentLanguage

  // Actualizar el título de la página
  if (currentLanguage === "en") {
    document.title = "Special Forces Electrician - Certifications"
  } else {
    document.title = "Special Forces Electrician - Certificaciones"
  }

  // Actualizar enlaces de WhatsApp con el idioma correspondiente
  updateWhatsAppLinks()

  // Actualizar enlaces de email
  updateEmailLinks()

  // Guardar preferencia de idioma
  localStorage.setItem("selectedLanguage", currentLanguage)

  // Remover clase de transición después de la animación
  setTimeout(() => {
    document.body.classList.remove("language-transition")
    document.body.classList.add("language-transition", "complete")

    setTimeout(() => {
      document.body.classList.remove("language-transition", "complete")
    }, 300)
  }, 150)

  // Mostrar notificación de cambio de idioma
  showLanguageNotification()
}

// Actualizar enlaces de WhatsApp según el idioma
function updateWhatsAppLinks() {
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]')

  const messages = {
    es: {
      general: "Hola,%20me%20interesa%20obtener%20servicios%20eléctricos%20certificados.",
      verification: "Hola,%20me%20gustaría%20verificar%20las%20certificaciones%20de%20Special%20Forces%20Electrician.",
      certification: "Hola,%20vi%20sus%20certificaciones%20y%20me%20interesa%20información%20sobre%20sus%20servicios.",
    },
    en: {
      general: "Hello,%20I'm%20interested%20in%20obtaining%20certified%20electrical%20services.",
      verification: "Hello,%20I%20would%20like%20to%20verify%20Special%20Forces%20Electrician's%20certifications.",
      certification:
        "Hello,%20I%20saw%20your%20certifications%20and%20I'm%20interested%20in%20information%20about%20your%20services.",
    },
  }

  whatsappLinks.forEach((link) => {
    const href = link.getAttribute("href")
    const baseUrl = "https://wa.me/573173945568?text="

    if (href.includes("verificar") || href.includes("verify")) {
      link.setAttribute("href", baseUrl + messages[currentLanguage].verification)
    } else if (href.includes("certificaciones") || href.includes("certifications")) {
      link.setAttribute("href", baseUrl + messages[currentLanguage].certification)
    } else {
      link.setAttribute("href", baseUrl + messages[currentLanguage].general)
    }
  })
}

// Actualizar enlaces de email según el idioma
function updateEmailLinks() {
  const emailLinks = document.querySelectorAll('a[href*="mailto:"]')

  const subjects = {
    es: "Verificación%20de%20Certificados",
    en: "Certificate%20Verification",
  }

  emailLinks.forEach((link) => {
    const email = "specialforceselectriciansas@gmail.com"
    link.setAttribute("href", `mailto:${email}?subject=${subjects[currentLanguage]}`)
  })
}

// Mostrar notificación de cambio de idioma
function showLanguageNotification() {
  const notification = document.createElement("div")
  const messages = {
    es: "🇪🇸 Idioma cambiado a Español",
    en: "🇺🇸 Language changed to English",
  }

  notification.innerHTML = messages[currentLanguage]
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
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.4s ease-out forwards"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 400)
  }, 2500)
}

// Inicializar filtros
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      button.classList.add("active")

      // Obtener el filtro seleccionado
      const filter = button.getAttribute("data-filter")
      currentFilter = filter

      // Aplicar filtro
      if (filter === "all") {
        resetAllFilters()
      } else {
        filterCertifications(filter)
      }

      // Feedback visual
      button.style.transform = "scale(0.95)"
      setTimeout(() => {
        button.style.transform = ""
      }, 150)
    })
  })

  // Inicializar mostrando todas las certificaciones
  resetAllFilters()
}

// Filtrar certificaciones
function filterCertifications(filter) {
  const certificationItems = document.querySelectorAll(".certification-item")

  certificationItems.forEach((item, index) => {
    const category = item.getAttribute("data-category")

    if (filter === "all" || category === filter) {
      // Mostrar elemento
      item.style.display = "block"
      item.classList.remove("hidden")
      item.classList.add("visible")

      // Agregar delay para animación escalonada
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0) scale(1)"
      }, index * 50)
    } else {
      // Ocultar elemento
      item.style.opacity = "0"
      item.style.transform = "translateY(20px) scale(0.95)"
      item.classList.add("hidden")
      item.classList.remove("visible")

      // Ocultar completamente después de la animación
      setTimeout(() => {
        if (item.classList.contains("hidden")) {
          item.style.display = "none"
        }
      }, 300)
    }
  })

  // Mostrar mensaje si no hay resultados
  showFilterResults(filter)
}

// Mostrar resultados del filtro
function showFilterResults(filter) {
  const visibleItems = document.querySelectorAll(".certification-item.visible")
  const container = document.getElementById("certificationsContainer")

  // Remover mensaje anterior si existe
  const existingMessage = document.querySelector(".no-results-message")
  if (existingMessage) {
    existingMessage.remove()
  }

  if (visibleItems.length === 0 && filter !== "all") {
    const noResultsMessage = document.createElement("div")
    noResultsMessage.className = "no-results-message col-12 text-center"
    noResultsMessage.style.cssText = `
            padding: 3rem 1rem;
            color: var(--text-secondary);
            font-size: 1.1rem;
            animation: fadeInUp 0.5s ease-out;
        `

    const messages = {
      es: "🔍 No se encontraron certificaciones en esta categoría",
      en: "🔍 No certifications found in this category",
    }

    noResultsMessage.innerHTML = `
            <i class="fas fa-search" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 1rem; display: block;"></i>
            ${messages[currentLanguage]}
        `

    container.appendChild(noResultsMessage)
  }
}

// Resetear todos los filtros
function resetAllFilters() {
  const certificationItems = document.querySelectorAll(".certification-item")
  certificationItems.forEach((item) => {
    item.style.display = "block"
    item.style.opacity = "1"
    item.style.transform = "translateY(0) scale(1)"
    item.classList.remove("hidden")
    item.classList.add("visible")
  })

  // Remover mensaje de no resultados
  const existingMessage = document.querySelector(".no-results-message")
  if (existingMessage) {
    existingMessage.remove()
  }
}

// Abrir modal de certificación
function openCertificationModal(certId) {
  const modal = document.getElementById("certificationModal")
  const certification = certificationsData[certId]

  if (!certification) return

  // Actualizar contenido del modal
  document.getElementById("modalTitle").textContent = certification.title
  document.getElementById("modalSubtitle").textContent = certification.subtitle[currentLanguage]
  document.getElementById("modalDescription").textContent = certification.description[currentLanguage]
  document.getElementById("modalImage").src = certification.image
  document.getElementById("modalImage").alt = certification.title
  document.getElementById("modalIssuer").textContent = certification.issuer
  document.getElementById("modalIssueDate").textContent = certification.issueDate[currentLanguage]
  document.getElementById("modalExpiryDate").textContent = certification.expiryDate[currentLanguage]
  document.getElementById("modalCertNumber").textContent = certification.certNumber
  document.getElementById("modalScope").textContent = certification.scope[currentLanguage]

  // Actualizar estado
  const statusElement = document.getElementById("modalStatus")
  statusElement.textContent = certification.status[currentLanguage]
  statusElement.className = "status-badge valid"

  // Mostrar modal
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Guardar ID de la certificación actual
  modal.setAttribute("data-current-cert", certId)
}

// Cerrar modal de certificación
function closeCertificationModal() {
  const modal = document.getElementById("certificationModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Verificar certificación
function verifyCertification() {
  const modal = document.getElementById("certificationModal")
  const certId = modal.getAttribute("data-current-cert")
  const certification = certificationsData[certId]

  if (!certification) return

  const messages = {
    es: `Hola,%20me%20gustaría%20verificar%20el%20certificado%20${encodeURIComponent(certification.title)}%20con%20número%20${encodeURIComponent(certification.certNumber)}.`,
    en: `Hello,%20I%20would%20like%20to%20verify%20the%20certificate%20${encodeURIComponent(certification.title)}%20with%20number%20${encodeURIComponent(certification.certNumber)}.`,
  }

  const whatsappUrl = `https://wa.me/573173945568?text=${messages[currentLanguage]}`
  window.open(whatsappUrl, "_blank")
}

// Contactar sobre certificación específica
function contactCertification() {
  const modal = document.getElementById("certificationModal")
  const certId = modal.getAttribute("data-current-cert")
  const certification = certificationsData[certId]

  if (!certification) return

  const messages = {
    es: `Hola,%20vi%20su%20certificación%20${encodeURIComponent(certification.title)}%20y%20me%20interesa%20información%20sobre%20servicios%20relacionados.`,
    en: `Hello,%20I%20saw%20your%20${encodeURIComponent(certification.title)}%20certification%20and%20I'm%20interested%20in%20information%20about%20related%20services.`,
  }

  const whatsappUrl = `https://wa.me/573173945568?text=${messages[currentLanguage]}`
  window.open(whatsappUrl, "_blank")
}

// Cerrar modal al hacer click fuera
window.addEventListener("click", (e) => {
  const modal = document.getElementById("certificationModal")
  if (e.target === modal) {
    closeCertificationModal()
  }
})

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCertificationModal()
  }
})

// Animaciones de entrada
function initializeAnimations() {
  // Observador de intersección para animaciones
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observar elementos animables
  const animatedElements = document.querySelectorAll(
    ".certification-item, .profile-section, .filter-section, .verification-section, .contact-section, .social-section",
  )
  animatedElements.forEach((el) => observer.observe(el))
}

// Efecto especial para la imagen de perfil
function initializeProfileImage() {
  const profileImg = document.getElementById("profileImg")
  let clickCount = 0

  profileImg.addEventListener("click", () => {
    clickCount++

    // Efecto de rotación
    profileImg.style.transform = "scale(1.1) rotate(360deg)"

    setTimeout(() => {
      profileImg.style.transform = ""
    }, 600)

    // Easter egg después de 5 clicks
    if (clickCount >= 5) {
      showEasterEgg()
      clickCount = 0
    }
  })
}

// Easter egg divertido
function showEasterEgg() {
  const messages = {
    es: "🏆 ¡Calidad certificada desde 2012! ⚡",
    en: "🏆 Certified quality since 2012! ⚡",
  }

  const message = document.createElement("div")
  message.innerHTML = messages[currentLanguage]
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
    `

  document.body.appendChild(message)

  setTimeout(() => {
    message.style.animation = "fadeOut 0.4s ease-out forwards"
    setTimeout(() => {
      if (document.body.contains(message)) {
        document.body.removeChild(message)
      }
    }, 400)
  }, 2000)
}

// Efectos de click mejorados
function addClickEffects() {
  // Efecto de ondas al hacer click
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("div")
    const rect = e.target.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

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
        `

    if (
      e.target.closest(".certification-card") ||
      e.target.closest(".filter-btn") ||
      e.target.closest(".verification-btn") ||
      e.target.closest(".contact-btn")
    ) {
      const container =
        e.target.closest(".certification-card") ||
        e.target.closest(".filter-btn") ||
        e.target.closest(".verification-btn") ||
        e.target.closest(".contact-btn")
      container.style.position = "relative"
      container.appendChild(ripple)

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple)
        }
      }, 600)
    }
  })
}

// Animaciones CSS adicionales
const style = document.createElement("style")
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
`
document.head.appendChild(style)

// Preloader simple
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-out"
    document.body.style.opacity = "1"
  }, 100)
})

// Manejo de errores
window.addEventListener("error", (e) => {
  console.error("Error en la aplicación:", e.error)
})

// Funciones globales para hacer disponibles desde HTML
window.openCertificationModal = openCertificationModal
window.closeCertificationModal = closeCertificationModal
window.verifyCertification = verifyCertification
window.contactCertification = contactCertification