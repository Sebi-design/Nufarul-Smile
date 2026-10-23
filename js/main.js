/**
 * NUFĂRUL SMILE — LOGICĂ JAVASCRIPT PRINCIPALĂ (MAIN.JS)
 * Gestionează navigarea, meniul mobil, galeria foto cu lightbox,
 * accordionul FAQ, randarea din config.js, validarea formularului și cookie consent.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inițializare date clinice & an curent
  initClinicData();
  
  // 2. Meniu sticky & Navigare activă
  initNavigation();
  
  // 3. Meniu mobil (Hamburger & Drawer)
  initMobileMenu();

  // 4. Randare & Interacțiune Servicii
  initServices();

  // 5. Randare & Lightbox Galerie
  initGallery();

  // 6. Accordion Întrebări Frecvente (FAQ)
  initFaqAccordion();

  // 7. Formular de Contact & Programare
  initContactForm();

  // 8. Modale (Politici de confidențialitate & cookies)
  initPolicyModals();

  // 9. Cookie Consent Banner
  initCookieConsent();

  // 10. Încărcare & Previzualizare Fotografii Echipă
  initTeamUploaders();
});

/* ==========================================================================
   1. DATE GENERALE & AN CURENT
   ========================================================================== */
function initClinicData() {
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   2. NAVIGARE STICKY & SCROLL OBSERVER
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Efect scroll header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }, { passive: true });

  // IntersectionObserver pentru evidențierea linkului activ
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   3. MENIU MOBIL (HAMBURGER & DRAWER)
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-drawer-overlay");
  const closeBtn = document.getElementById("mobile-drawer-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer-footer .btn, .mobile-drawer-logo-link");

  if (!hamburgerBtn || !mobileDrawer || !overlay) return;

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === "boolean" ? isOpen : !mobileDrawer.classList.contains("is-open");
    
    hamburgerBtn.classList.toggle("is-active", shouldOpen);
    hamburgerBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    mobileDrawer.classList.toggle("is-open", shouldOpen);
    overlay.classList.toggle("is-visible", shouldOpen);
    
    if (shouldOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  hamburgerBtn.addEventListener("click", () => toggleMenu());
  if (closeBtn) {
    closeBtn.addEventListener("click", () => toggleMenu(false));
  }
  overlay.addEventListener("click", () => toggleMenu(false));

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Închidere la tasta Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("is-open")) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   4. RANDARE SERVICII & MODAL DETALII
   ========================================================================== */
function initServices() {
  const container = document.getElementById("services-grid-container");
  const config = (typeof window !== "undefined" && window.CLINIC_CONFIG) 
    ? window.CLINIC_CONFIG 
    : (typeof CLINIC_CONFIG !== "undefined" ? CLINIC_CONFIG : null);

  if (!container || !config || !Array.isArray(config.services)) return;

  const iconsMap = {
    stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3"/><path d="M6 3h2"/><path d="M10 3h2"/><path d="M8 11.5V17a3 3 0 0 0 6 0v-2"/><circle cx="17" cy="15" r="3"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    "tooth-shield": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    gem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>`,
    crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
    implant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="6" rx="2"/><path d="M10 9v3"/><path d="M14 9v3"/><path d="M8 12h8"/><path d="M9 15h6"/><path d="M10 18h4"/><path d="M12 18v4"/></svg>`
  };

  container.innerHTML = config.services.map((service) => {
    const iconSvg = iconsMap[service.icon] || iconsMap.stethoscope;
    return `
      <article class="service-card" data-service-id="${service.id}">
        <div class="service-card-top">
          <div class="service-icon-wrap" aria-hidden="true">
            ${iconSvg}
          </div>
          <h3>${service.title}</h3>
          <p>${service.shortDesc}</p>
        </div>
        <div class="service-card-footer">
          <button type="button" class="btn-text-link service-details-trigger" data-service-id="${service.id}" aria-label="Află detalii despre ${service.title}">
            <span>Află detalii</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Eveniment click pentru detalii serviciu
  container.addEventListener("click", (e) => {
    const trigger = e.target.closest(".service-details-trigger");
    if (!trigger) return;
    const sId = trigger.getAttribute("data-service-id");
    const service = CLINIC_CONFIG.services.find((s) => s.id === sId);
    if (service) {
      openServiceModal(service);
    }
  });
}

function openServiceModal(service) {
  const modal = document.getElementById("service-modal");
  const title = document.getElementById("service-modal-title");
  const body = document.getElementById("service-modal-body");
  if (!modal || !title || !body) return;

  title.textContent = service.title;
  body.innerHTML = `
    <p class="service-modal-intro" style="font-size:1.05rem; margin-bottom:1.25rem; color:var(--color-charcoal);">${service.details.intro}</p>
    <h4 style="font-size:1.15rem; margin-bottom:0.75rem; color:var(--color-gold);">Etapele procedurii:</h4>
    <ul style="margin-bottom:1.5rem;">
      ${service.details.steps.map(step => `<li>${step}</li>`).join("")}
    </ul>
    <p style="background:var(--color-bg-ivory); border-left:3px solid var(--color-gold); padding:12px 16px; border-radius:4px; font-size:0.92rem; margin-bottom:1.5rem;">
      <strong>Recomandat pentru:</strong> ${service.details.idealFor}
    </p>
    <div style="font-size:0.8rem; color:var(--color-text-muted); border-top:1px dashed var(--color-border); padding-top:10px;">
      * Notă: Procedura și planul complet de tratament se stabilesc întotdeauna pe baza unei consultații individuale de către medicul stomatolog.
    </div>
  `;

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   5. RANDARE GALERIE & LIGHTBOX COMPLET FUNCȚIONAL
   ========================================================================== */
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function initGallery() {
  const container = document.getElementById("gallery-grid-container");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const config = (typeof window !== "undefined" && window.CLINIC_CONFIG) 
    ? window.CLINIC_CONFIG 
    : (typeof CLINIC_CONFIG !== "undefined" ? CLINIC_CONFIG : null);

  if (!container || !config || !Array.isArray(config.gallery)) return;

  currentGalleryItems = config.gallery;

  function renderGallery(filter = "all") {
    const filtered = filter === "all" 
      ? currentGalleryItems 
      : currentGalleryItems.filter(item => item.category === filter);

    container.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}" tabindex="0" role="button" aria-label="Deschide imaginea: ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" width="600" height="450" />
        <div class="gallery-item-overlay">
          <div class="gallery-item-caption">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `).join("");

    // Adăugare eveniment click & tastatură pe fiecare element
    container.querySelectorAll(".gallery-item").forEach((el, index) => {
      const clickHandler = () => openLightbox(index, filtered);
      el.addEventListener("click", clickHandler);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          clickHandler();
        }
      });
    });
  }

  // Filtrare pe categorii
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const category = btn.getAttribute("data-category") || "all";
      renderGallery(category);
    });
  });

  renderGallery("all");
  setupLightboxControls();
}

function openLightbox(index, itemsList) {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  currentGalleryItems = itemsList || CLINIC_CONFIG.gallery;
  currentLightboxIndex = index;

  updateLightboxContent();
  lightbox.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");
  if (!img || !currentGalleryItems[currentLightboxIndex]) return;

  const item = currentGalleryItems[currentLightboxIndex];
  img.src = item.src;
  img.alt = item.title;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
}

function setupLightboxControls() {
  const lightbox = document.getElementById("gallery-lightbox");
  const btnClose = document.getElementById("lightbox-close");
  const btnPrev = document.getElementById("lightbox-prev");
  const btnNext = document.getElementById("lightbox-next");

  if (!lightbox) return;

  function close() {
    lightbox.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  function prev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateLightboxContent();
  }

  function next() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryItems.length;
    updateLightboxContent();
  }

  btnClose?.addEventListener("click", close);
  btnPrev?.addEventListener("click", prev);
  btnNext?.addEventListener("click", next);

  // Închidere la click pe fundal (overlay)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      close();
    }
  });

  // Navigare tastatură
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  // Suport touch swipe pe mobil
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  }, { passive: true });
}

/* ==========================================================================
   6. ACCORDION ÎNTREBĂRI FRECVENTE (FAQ)
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById("faq-list-container");
  if (!container) return;

  const config = (typeof window !== "undefined" && window.CLINIC_CONFIG) 
    ? window.CLINIC_CONFIG 
    : (typeof CLINIC_CONFIG !== "undefined" ? CLINIC_CONFIG : null);

  // Dacă elementele nu sunt deja în HTML și avem config.faq, le randăm
  if (container.children.length === 0 && config && Array.isArray(config.faq)) {
    container.innerHTML = config.faq.map((item, idx) => `
      <div class="faq-item ${idx === 0 ? "is-open" : ""}" id="faq-item-${idx}">
        <button type="button" class="faq-question-btn" aria-expanded="${idx === 0 ? "true" : "false"}" aria-controls="faq-ans-${idx}">
          <span class="faq-question-text">${item.q}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-answer-wrap" id="faq-ans-${idx}" role="region">
          <div class="faq-answer-inner">
            <div class="faq-answer-content">
              ${item.a}
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Atașăm evenimentele de click pentru fiecare întrebare
  const items = container.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    if (!btn || btn.dataset.boundFaq) return;
    btn.dataset.boundFaq = "true";

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Închide toate celelalte iteme pentru un aspect ordonat
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-question-btn")?.setAttribute("aria-expanded", "false");
        }
      });

      // Comută elementul curent
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
  });
}

/* ==========================================================================
   7. FORMULAR DE CONTACT & VALIDARE ROBUSTĂ
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("appointment-form");
  if (!form) return;

  const nameInput = document.getElementById("form-name");
  const phoneInput = document.getElementById("form-phone");
  const emailInput = document.getElementById("form-email");
  const serviceInput = document.getElementById("form-service");
  const gdprCheckbox = document.getElementById("form-gdpr");

  // Validare la blur
  nameInput?.addEventListener("blur", () => validateField(nameInput, nameInput.value.trim().length >= 3));
  
  phoneInput?.addEventListener("blur", () => {
    const cleaned = phoneInput.value.replace(/\s+/g, "");
    const isValidPhone = /^(\+4|004)?07\d{8}$/.test(cleaned) || cleaned.length >= 10;
    validateField(phoneInput, isValidPhone);
  });

  emailInput?.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
      validateField(emailInput, true); // opțional
    } else {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
      validateField(emailInput, isValidEmail);
    }
  });

  gdprCheckbox?.addEventListener("change", () => {
    const errElem = document.getElementById("gdpr-error");
    if (errElem) errElem.style.display = gdprCheckbox.checked ? "none" : "block";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;

    // 1. Verificare Nume
    if (!nameInput || nameInput.value.trim().length < 3) {
      validateField(nameInput, false);
      isFormValid = false;
    } else {
      validateField(nameInput, true);
    }

    // 2. Verificare Telefon
    const phoneVal = phoneInput ? phoneInput.value.replace(/\s+/g, "") : "";
    const isPhoneValid = /^(\+4|004)?07\d{8}$/.test(phoneVal) || phoneVal.length >= 10;
    if (!isPhoneValid) {
      validateField(phoneInput, false);
      isFormValid = false;
    } else {
      validateField(phoneInput, true);
    }

    // 3. Verificare Email (dacă e completat)
    if (emailInput && emailInput.value.trim() !== "") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
      if (!isEmailValid) {
        validateField(emailInput, false);
        isFormValid = false;
      }
    }

    // 4. Verificare GDPR Checkbox
    if (!gdprCheckbox || !gdprCheckbox.checked) {
      const errElem = document.getElementById("gdpr-error");
      if (errElem) errElem.style.display = "block";
      isFormValid = false;
    }

    if (!isFormValid) {
      return;
    }

    // Succes - simulare trimitere & informare pacient
    const formData = {
      nume: nameInput.value.trim(),
      telefon: phoneVal,
      email: emailInput?.value.trim() || "-",
      mesaj: document.getElementById("form-message")?.value.trim() || ""
    };

      // Fără backend: direcționare directă și transparentă către apel telefonic la 0759 064 150
      const submitBtn = document.getElementById("form-submit-btn");
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : `<span>Solicita o programare &raquo;</span>`;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Se pregătește solicitarea...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }

        // Afișare notificare inline directă
        const successBanner = document.getElementById("form-success-banner");
        const customText = document.getElementById("form-success-custom-text");
        if (successBanner) {
          if (customText) {
            customText.textContent = `Bună, ${formData.nume}! Pentru confirmare fermă și stabilirea orei dorite, te rugăm să apelezi direct clinica la 0759 064 150 (Luni–Vineri: 10:00–20:00).`;
          }
          successBanner.style.display = "flex";
          successBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        // Deschidere modal cu opțiune de apel direct
        openSuccessModal(formData.nume, formData.telefon);

        // Reset formular și clase
        form.reset();
        [nameInput, phoneInput, emailInput].forEach(inp => inp?.classList.remove("is-invalid"));
        const gdprErr = document.getElementById("gdpr-error");
        if (gdprErr) gdprErr.style.display = "none";
      }, 350);
    });
  }

  function validateField(inputElement, isValid) {
    if (!inputElement) return;
    if (isValid) {
      inputElement.classList.remove("is-invalid");
    } else {
      inputElement.classList.add("is-invalid");
    }
  }

  function openSuccessModal(patientName, phone) {
    const modal = document.getElementById("success-modal");
    const messageElem = document.getElementById("success-modal-message");
    if (!modal) return;

    if (messageElem) {
      messageElem.innerHTML = `
        Bună, <strong>${patientName}</strong>!<br/><br/>
        Pentru a stabili pe loc data și ora optime pentru tine, te rugăm să apelezi direct recepția clinicii la numărul <strong>0759 064 150</strong>.<br/><br/>
        Programul de lucru este de <strong>Luni până Vineri între orele 10:00 și 20:00</strong>.<br/><br/>
        <a href="tel:0759064150" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Apelează acum: 0759 064 150
        </a>
      `;
    }

    modal.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

/* ==========================================================================
   8. MODALE GENERALE & POLITICI DE CONFIDENȚIALITATE
   ========================================================================== */
function initPolicyModals() {
  const closeBtns = document.querySelectorAll(".modal-close-btn, .modal-dismiss-btn");
  const overlays = document.querySelectorAll(".modal-overlay");

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlays.forEach(modal => modal.classList.remove("is-active"));
      document.body.style.overflow = "";
    });
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlays.forEach(modal => modal.classList.remove("is-active"));
      document.body.style.overflow = "";
    }
  });

  // Triggere pentru Privacy & Cookies
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-open-modal");
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add("is-active");
        document.body.style.overflow = "hidden";
      }
    });
  });
}

/* ==========================================================================
   9. COOKIE CONSENT BANNER (CONFORM CU NORMELE DE CONFIDENȚIALITATE)
   ========================================================================== */
function initCookieConsent() {
  const banner = document.getElementById("cookie-banner");
  const btnAcceptAll = document.getElementById("cookie-accept-all");
  const btnEssential = document.getElementById("cookie-accept-essential");
  const triggerReopen = document.getElementById("cookie-reopen-trigger");

  const consentKey = "nufarul_smile_cookie_consent";
  const savedConsent = localStorage.getItem(consentKey);

  if (!savedConsent && banner) {
    // Afișează după 1.2 secunde pentru o tranziție lină
    setTimeout(() => {
      banner.classList.add("is-visible");
    }, 1200);
  }

  btnAcceptAll?.addEventListener("click", () => {
    localStorage.setItem(consentKey, "all");
    banner?.classList.remove("is-visible");
  });

  btnEssential?.addEventListener("click", () => {
    localStorage.setItem(consentKey, "essential");
    banner?.classList.remove("is-visible");
  });

  triggerReopen?.addEventListener("click", (e) => {
    e.preventDefault();
    banner?.classList.add("is-visible");
  });
}

/* ==========================================================================
   10. SPAȚIU ÎNCĂRCARE & PREVIZUALIZARE FOTOGRAFII ECHIPĂ
   ========================================================================== */
function initTeamUploaders() {
  const memberIds = ["medic-1", "medic-2", "asistenta"];

  memberIds.forEach((id) => {
    const slot = document.getElementById(`slot-${id}`);
    const input = document.getElementById(`input-${id}`);
    const preview = document.getElementById(`preview-${id}`);
    const actions = document.getElementById(`actions-${id}`);
    const storageKey = `nufarul_team_photo_${id}`;

    if (!slot || !input || !preview) return;

    // 1. Restaurare din localStorage dacă utilizatorul a încărcat deja o fotografie
    const savedPhoto = localStorage.getItem(storageKey);
    if (savedPhoto) {
      applyPhoto(savedPhoto);
    }

    function applyPhoto(dataUrl) {
      preview.style.backgroundImage = `url("${dataUrl}")`;
      slot.classList.add("has-image");
      if (actions) actions.style.display = "flex";
    }

    function removePhoto() {
      preview.style.backgroundImage = "";
      slot.classList.remove("has-image");
      if (actions) actions.style.display = "none";
      input.value = "";
      localStorage.removeItem(storageKey);
    }

    // 2. Gestionare selecție fișier
    input.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Te rugăm să alegi un fișier de tip imagine (JPG, PNG, WebP).");
        return;
      }

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUrl = loadEvent.target?.result;
        if (dataUrl) {
          applyPhoto(dataUrl);
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch (err) {
            console.warn("Imaginea este prea mare pentru salvare în localStorage, dar va fi afișată în sesiune.", err);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    // 3. Buton "Schimbă"
    const btnChange = actions?.querySelector(".btn-change-photo");
    btnChange?.addEventListener("click", (e) => {
      e.stopPropagation();
      input.click();
    });

    // 4. Buton "Elimină"
    const btnRemove = actions?.querySelector(".btn-remove-photo");
    btnRemove?.addEventListener("click", (e) => {
      e.stopPropagation();
      removePhoto();
    });

    // 5. Suport Drag & Drop direct pe card
    slot.addEventListener("dragover", (e) => {
      e.preventDefault();
      slot.classList.add("dragover");
    });

    slot.addEventListener("dragleave", () => {
      slot.classList.remove("dragover");
    });

    slot.addEventListener("drop", (e) => {
      e.preventDefault();
      slot.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (loadEvent) => {
            const dataUrl = loadEvent.target?.result;
            if (dataUrl) {
              applyPhoto(dataUrl);
              try {
                localStorage.setItem(storageKey, dataUrl);
              } catch (err) {
                console.warn("Storage full", err);
              }
            }
          };
          reader.readAsDataURL(file);
        }
      }
    });

    // 6. Accesibilitate tastatură (Enter / Space)
    slot.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !slot.classList.contains("has-image")) {
        e.preventDefault();
        input.click();
      }
    });
  });
}

