/**
 * NUFĂRUL SMILE — FIȘIER CENTRAL DE CONFIGURARE
 * Toate datele clinicii, serviciile propuse, întrebările frecvente și galeria
 * pot fi editate ușor direct din acest fișier, fără a modifica structura HTML.
 */

var CLINIC_CONFIG = {
  // Informații generale despre clinică
  info: {
    name: "Nufărul Smile",
    descriptor: "Clinică Stomatologică",
    tagline: "Zâmbetul tău merită toată grija.",
    city: "Oradea",
    county: "Bihor",
    country: "România",
    address: "Strada Constantin Notarra, 410598, Oradea",
    addressShort: "Str. Constantin Notarra, Oradea",
    phone: "0759064150",
    phoneDisplay: "0759 064 150",
    email: "contact@nufarulsmile.ro", // De confirmat oficial de clinică
    hours: {
      weekday: "Luni – Vineri: 10:00 – 20:00",
      weekend: "Sâmbătă – Duminică: Închis",
      schedule: [
        { days: "Luni – Vineri", hours: "10:00 – 20:00" },
        { days: "Sâmbătă", hours: "Închis" },
        { days: "Duminică", hours: "Închis" }
      ]
    },
    // Notă: Rating furnizat în captura inițială (4,8/5 din 20 recenzii). 
    // Tratat ca informație furnizată, nu verificată prin API live.
    rating: {
      score: "4,8",
      maxScore: "5",
      count: "20",
      source: "Google Reviews",
      note: "Conform informațiilor furnizate din profilul clinicii"
    },
    // Linkuri configurabile
    links: {
      googleMaps: "https://www.google.com/maps/search/?api=1&query=Strada+Constantin+Nottara+Oradea+Nufarul+Smile",
      googleReviews: "https://www.google.com/maps/search/?api=1&query=Strada+Constantin+Nottara+Oradea+Nufarul+Smile",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Strada+Constantin+Nottara,+Oradea,+Romania&t=&z=16&ie=UTF8&iwloc=&output=embed"
    }
  },

  // Categorii propuse de servicii stomatologice (ușor de actualizat sau activat/dezactivat)
  services: [
    {
      id: "consultatii",
      title: "Consultații stomatologice",
      shortDesc: "Diagnostic precis, evaluare amănunțită a sănătății cavității orale și elaborarea unui plan de tratament etapizat și transparent.",
      icon: "stethoscope",
      status: "propus", // Marcat pentru verificare de către clinică
      details: {
        intro: "O consultație completă reprezintă fundația oricărui tratament de succes. Evaluăm starea dinților, a gingiilor și a mușcăturii pentru a preveni din timp afecțiunile dentare.",
        steps: [
          "Examinare clinică atentă a fiecărui dinte și a mucoaselor",
          "Analiză imagistică / radiografică (după caz)",
          "Discutarea opțiunilor de tratament și stabilirea priorităților",
          "Estimare clară a timpului și costurilor necesare"
        ],
        idealFor: "Orice persoană care își dorește un control de rutină sau o evaluare a unei probleme punctuale."
      }
    },
    {
      id: "igienizare",
      title: "Igienizare dentară",
      shortDesc: "Profilaxie completă prin detartraj ultrasonic, periaj profesional și airflow pentru îndepărtarea tartrului și menținerea prospețimii.",
      icon: "sparkles",
      status: "propus",
      details: {
        intro: "Igienizarea profesională periodică este esențială pentru prevenirea cariilor și a bolii parodontale. Procedura este blândă, sigură și eficientă.",
        steps: [
          "Detartraj ultrasonic blând pentru îndepărtarea tartrului supragingival și subgingival",
          "Periaj profesional cu pastă specială profilactică",
          "Tehnologie airflow pentru curățarea petelor fine și a spațiilor greu accesibile",
          "Recomandări personalizate pentru igiena de acasă"
        ],
        idealFor: "Recomandată la fiecare 6 luni pentru toți pacienții."
      }
    },
    {
      id: "tratamente",
      title: "Tratamente dentare",
      shortDesc: "Terapia cariilor dentare cu materiale compozite estetice de ultimă generație și intervenții minim invazive pentru salvarea dintelui natural.",
      icon: "tooth-shield",
      status: "propus",
      details: {
        intro: "Tratăm cariile și afecțiunile pulpare punând accent pe conservarea maximă a țesutului dentar sănătos și refacerea formei naturale a dintelui.",
        steps: [
          "Anestezie locală atraumatică pentru confort total",
          "Curățarea minuțioasă a leziunii carioase",
          "Obturație fotopolimerizabilă estetică adaptată nuanței naturale a dintelui",
          "Finisare și lustruire pentru ocluzie anatomică corectă"
        ],
        idealFor: "Dinți cu sensibilitate, carii incipiente sau obturații vechi deteriorate."
      }
    },
    {
      id: "estetica",
      title: "Estetică dentară",
      shortDesc: "Albire dentară profesională, fațetări și remodelare cosmetică pentru a obține o armonie naturală și luminoasă a zâmbetului.",
      icon: "gem",
      status: "propus",
      details: {
        intro: "Estetica dentară modernă înseamnă naturalețe, echilibru și respect pentru structura biologică a dinților tăi.",
        steps: [
          "Analiză estetică a zâmbetului și proporțiilor faciale",
          "Albire profesională sigură pentru smalț",
          "Corectarea discromiilor și formelor neregulate",
          "Soluții minim invazive pentru un aspect armonios"
        ],
        idealFor: "Pacienți care își doresc o îmbunătățire discretă sau vizibilă a zâmbetului."
      }
    },
    {
      id: "protetica",
      title: "Protetică dentară",
      shortDesc: "Coroane dentare din ceramică și zirconiu de înaltă rezistență, punți și lucrări protetice adaptate funcțional și estetic.",
      icon: "crown",
      status: "propus",
      details: {
        intro: "Reconstruim integritatea arcadelor dentare prin lucrări protetice de înaltă precizie, durabile și biocompatibile.",
        steps: [
          "Pregătirea minim invazivă a dintelui stâlp",
          "Amprentare de mare fidelitate",
          "Lucrări provizorii pentru confort pe durata tratamentului",
          "Cimentare definitivă cu materiale durabile"
        ],
        idealFor: "Dinți cu distrucții coronare masive sau spații edentate."
      }
    },
    {
      id: "implantologie",
      title: "Implantologie",
      shortDesc: "Soluții moderne pentru înlocuirea dinților lipsă prin implanturi dentare de calitate superioară, cu integrare osoasă optimă.",
      icon: "implant",
      status: "propus",
      details: {
        intro: "Implantul dentar reprezintă standardul de aur în stomatologia contemporană pentru refacerea dinților absenți fără a afecta dinții vecini sănătoși.",
        steps: [
          "Planificare 3D computerizată pe baza tomografiei dentare (CBCT)",
          "Intervenție chirurgicală de inserare a implantului sub anestezie",
          "Perioadă de vindecare și osteointegrare",
          "Montarea bontului protetic și a coroanei finale"
        ],
        idealFor: "Pacienți cu dinți lipsă care doresc o soluție fixă, stabilă și de lungă durată."
      }
    }
  ],

  // Pilonii experienței pacientului
  benefits: [
    {
      icon: "chat",
      title: "Comunicare clară",
      description: "Îți explicăm fiecare etapă a planului de tratament, fără termeni complicați și fără costuri neprevăzute."
    },
    {
      icon: "heart-hand",
      title: "Atenție la confort",
      description: "Am creat un spațiu calm și primitor, unde tratamentele sunt ghidate de blândețe și grijă pentru liniștea ta."
    },
    {
      icon: "calendar-check",
      title: "Programări organizate",
      description: "Timpul tău este valoros. Lucrăm pe bază de programări eficiente și un orar extins Luni–Vineri între 10:00 și 20:00."
    },
    {
      icon: "shield-check",
      title: "Atenție la detalii",
      description: "Igienă fără compromisuri, protocoale riguroase de sterilizare și aparatură stomatologică de calitate."
    }
  ],

  // Echipa medicală Nufărul Smile Oradea
  team: [
    {
      id: "medic-1",
      name: "Medic Stomatolog",
      role: "Medic Stomatolog",
      badge: "Răbdare & Blândețe",
      specialties: ["Stomatologie Generală", "Terapie Odontală", "Estetică Dentară"],
      image: "",
      quote: "„Fiecare pacient merită timp, ascultare și o mână ușoară, fără nicio durere.”",
      bio: "Apreciat de pacienți pentru răbdarea deosebită și blândețea în tratarea anxietății dentare. Explică fiecare etapă cu mult calm, astfel încât vizita la stomatolog devine o experiență relaxantă și predictibilă."
    },
    {
      id: "medic-2",
      name: "Medic Stomatolog",
      role: "Medic Stomatolog",
      badge: "Rigoare & Precizie Clinică",
      specialties: ["Protetică Dentară", "Reabilitare Orală", "Implantologie"],
      image: "",
      quote: "„Precizia tehnică și comunicarea transparentă sunt cheia unor rezultate durabile.”",
      bio: "Un profesionist devotat soluțiilor de lungă durată, atent la fiecare detaliu al sănătății și esteticii dentare. Oferă explicații clare pe înțelesul pacientului și planuri de tratament predictibile."
    },
    {
      id: "echipa-asistenta",
      name: "Echipa de Asistență",
      role: "Suport Medical & Sterilizare",
      badge: "Siguranță & Confort",
      specialties: ["Protocoale Sterilizare Clasa B", "Pregătire Tratament", "Îngrijire Pacienți"],
      image: "",
      quote: "„Standarde stricte de igienă și o primire călduroasă la fiecare vizită.”",
      bio: "Asigură respectarea riguroasă a celor mai înalte norme de dezinfecție și sterilizare individuală a instrumentarului în autoclav de clasa B, oferind un mediu impecabil și primitor încă din primul moment."
    }
  ],

  // Galerie foto a clinicii
  gallery: [
    {
      id: "gal-1",
      src: "assets/images/hero-clinic.jpg",
      thumb: "assets/images/hero-clinic.jpg",
      title: "Cabinet stomatologic principal",
      category: "cabinete",
      description: "Fotoliu ergonomic modern, lumină naturală și atmosferă calmă în tonuri calde."
    },
    {
      id: "gal-2",
      src: "assets/images/about-clinic.jpg",
      thumb: "assets/images/about-clinic.jpg",
      title: "Zonă de consult și relaxare",
      category: "cabinete",
      description: "Spațiu primitor destinat discuțiilor despre planul de tratament și sănătatea dentară."
    },
    {
      id: "gal-3",
      src: "assets/images/gallery-1.jpg",
      thumb: "assets/images/gallery-1.jpg",
      title: "Cabinet de tratament luminos",
      category: "cabinete",
      description: "Lumină naturală generoasă și dotări concepute pentru confortul fiecărui pacient."
    },
    {
      id: "gal-4",
      src: "assets/images/gallery-2.jpg",
      thumb: "assets/images/gallery-2.jpg",
      title: "Recepție și primire",
      category: "receptie",
      description: "Punctul de întâmpinare: un ambient aerisit, elegant și primitor."
    },
    {
      id: "gal-5",
      src: "assets/images/gallery-3.jpg",
      thumb: "assets/images/gallery-3.jpg",
      title: "Instrumentar de precizie",
      category: "tehnologie",
      description: "Igienă riguroasă, sterilizare impecabilă și instrumente dedicate tratamentelor sigure."
    },
    {
      id: "gal-6",
      src: "assets/images/gallery-4.jpg",
      thumb: "assets/images/gallery-4.jpg",
      title: "Imagistică & Scanare digitală",
      category: "tehnologie",
      description: "Aparatură modernă pentru evaluări precise și planificări detaliate."
    }
  ],

  // Recenzii autentice de pe Google Reviews furnizate de clinică
  reviews: [
    {
      id: "rev-1",
      author: "Lorena Stoian",
      initial: "L",
      avatarBg: "#7B1FA2",
      reviewsCount: "3 reviews",
      date: "acum o lună",
      rating: 5,
      text: "Numai cuvinte de laudă despre Nufărul Smile. Doamna doctor Andrada Gug este o minunăție cu multă ,multă răbdare pentru pacienții cu frică mare de dentist,iar domnul doctor Suciu este un profesionist,tare drăguț și atent cu pacienții. Împreună fac Nufărul Smile să fie locul perfect pentru toți cei care au frică de dentist."
    },
    {
      id: "rev-2",
      author: "Andrei Indrieș",
      initial: "A",
      avatarBg: "#1A73E8",
      reviewsCount: "1 review",
      date: "acum 8 luni",
      rating: 5,
      text: "Dacă ai frică de dentist, doamna doctor este soluția! Are o mână atât de ușoară încât nu am simțit absolut nicio durere. Este prima dată când merg la programare fără emoții negative. Blândețea și empatia de care dă dovadă sunt rare. Mulțumesc mult!"
    },
    {
      id: "rev-3",
      author: "Adrian Tivadar",
      initial: "A",
      avatarBg: "#0F9D58",
      reviewsCount: "1 review",
      date: "acum 8 luni",
      rating: 5,
      text: "O experiență excelentă de la început până la sfârșit! Cabinetul impresionează prin profesionalism, curățenie și o atmosferă foarte primitoare. Echipa este extrem de atentă, răbdătoare și explică fiecare procedură pe înțelesul pacientului, ceea ce oferă multă încredere ....multumim!"
    },
    {
      id: "rev-4",
      author: "Adina Lazăr",
      initial: "A",
      avatarBg: "#1976D2",
      reviewsCount: "1 review",
      date: "acum 8 luni",
      rating: 5,
      text: "Servicii excepționale! Recomand cu încredere!"
    },
    {
      id: "rev-5",
      author: "Paula Gherghel",
      initial: "P",
      avatarBg: "#8E24AA",
      reviewsCount: "2 reviews",
      date: "acum 5 luni",
      rating: 5,
      text: "Doamna doctor este foarte atentă și profesionistă. Atmosferă plăcută în cabinet! Recomand cu încredere!"
    },
    {
      id: "rev-6",
      author: "Florin Munteanu",
      initial: "F",
      avatarBg: "#689F38",
      reviewsCount: "1 review",
      date: "acum 8 luni",
      rating: 5,
      text: "Suntem foarte multumiti,de servicile lor."
    }
  ],

  // Întrebări frecvente (FAQ)
  faq: [
    {
      q: "Cum pot face o programare la Nufărul Smile?",
      a: "Toate programările la Nufărul Smile se fac simplu și rapid direct prin apel telefonic la numărul <strong>0759 064 150</strong>. Echipa noastră îți va răspunde cu drag și va stabili împreună cu tine ziua și ora cele mai potrivite în intervalul Luni–Vineri: 10:00–20:00."
    },
    {
      q: "Tratamentele dor? Ce abordare aveți dacă am frică de dentist?",
      a: "Înțelegem pe deplin anxietatea dentară, iar confortul și liniștea ta sunt prioritatea noastră absolută. Tratamentele se realizează sub anestezie locală modernă, blândă și eficientă, astfel încât nu vei simți nicio durere. Echipa noastră medicală are o răbdare deosebită, îți explică fiecare etapă cu mult calm și lucrează exclusiv în ritmul tău, într-o atmosferă prietenoasă și lipsită de stres."
    },
    {
      q: "Primiți urgențe dentare în timpul orelor de program?",
      a: "Da. În cazul în care te confrunți cu o durere acută, un dinte fracturat sau un disconfort brusc, te rugăm să ne apelezi telefonic imediat la <strong>0759 064 150</strong>. Vom depune toate eforturile pentru a-ți găsi un interval prioritar în cursul aceleiași zile, în timpul programului de lucru (Luni–Vineri: 10:00–20:00)."
    },
    {
      q: "Care este programul de lucru și unde este situată clinica în Oradea?",
      a: "Clinica este deschisă de <strong>Luni până Vineri între orele 10:00 și 20:00</strong> (Sâmbătă și Duminică este închis). Ne găsești pe <strong>Strada Constantin Notarra, 410598, Oradea</strong> (în cartierul Nufărul). Orarul extins de seară este conceput special pentru a-ți permite să ajungi comod după terminarea programului de la serviciu."
    },
    {
      q: "Cât de des este recomandată o igienizare dentară profesională (detartraj)?",
      a: "Pentru menținerea sănătății dinților și gingiilor, se recomandă o igienizare profesională completă (detartraj ultrasonic, periaj profesional și airflow) o dată la <strong>6 luni</strong>. Aceasta îndepărtează tartrul și placa bacteriană din zonele greu accesibile, prevenind cariile și parodontoza. Pentru pacienții fumători sau purtători de lucrări protetice/implanturi, intervalul optim recomandat este de 4–6 luni."
    },
    {
      q: "Ce trebuie să am în vedere înainte de prima consultație?",
      a: "Îți recomandăm să ajungi cu aproximativ 5-10 minute înainte de ora stabilită pentru a completa fișa inițială a pacientului. Dacă deții radiografii dentare recente (panoramice sau periapicale) ori documente medicale relevante, este util să le aduci cu tine pentru o evaluare clinică rapidă și amănunțită."
    },
    {
      q: "Albirea dentară profesională afectează smalțul dinților?",
      a: "Nu, atunci când este realizată profesional în cabinet sub îndrumarea medicului stomatolog. Folosim geluri certificate de calitate superioară, concepute să deschidă nuanța dinților în deplină siguranță pentru smalț. Înainte de albire, realizăm întotdeauna o consultație și o igienizare profesională pentru a asigura un rezultat omogen, natural și de lungă durată."
    },
    {
      q: "Ce soluții există pentru înlocuirea unui dinte lipsă?",
      a: "În stomatologia modernă, standardul de aur pentru înlocuirea unui dinte absent este <strong>implantul dentar</strong>, deoarece conservă integritatea dinților vecini sănătoși. O altă soluție eficientă o reprezintă <strong>puntea dentară</strong> din ceramică sau zirconiu. În cadrul consultației, medicul evaluează situația osoasă și dentară și îți prezintă transparent opțiunile optime pentru cazul tău."
    },
    {
      q: "Ce protocoale de igienă și sterilizare aplicați în cabinet?",
      a: "Siguranța și sănătatea pacienților noștri sunt pe primul loc. Respectăm cu strictețe cele mai riguroase norme sanitare europene: sterilizare prin autoclav de clasă B, împachetare individuală a instrumentarului în pungi sterile sigilate cu martori chimici și biologici la fiecare ciclu, dezinfectanți medicali de nivel înalt și consumabile de unică folosință."
    },
    {
      q: "Cum se stabilesc costurile tratamentului și ce metode de plată acceptați?",
      a: "Transparența și încrederea sunt esențiale pentru noi. După examinarea inițială, primești un plan de tratament etapizat, cu costurile clar explicate, fără taxe ascunse sau surprize. Acceptăm plata în numerar (cash) și prin card bancar (POS contactless). Pentru tratamentele complexe (implanturi, coroane dentare), plata se realizează eșalonat pe măsură ce avansează etapele clinice."
    }
  ]
};

// Export pentru utilizare modulară sau browser
if (typeof window !== "undefined") {
  window.CLINIC_CONFIG = CLINIC_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CLINIC_CONFIG;
}
