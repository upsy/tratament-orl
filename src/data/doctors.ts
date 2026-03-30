export interface DoctorWorkplace {
  name: string;
  role?: string;
  schedule?: string;
  price?: string;
  phone?: string;
  isMain?: boolean;
}

export interface DoctorReview {
  text: string;
  source: string;
  sourceUrl?: string;
  author?: string;
  date?: string;
  sentiment: "pozitiv" | "negativ" | "neutru";
}

export interface DoctorRating {
  score: string;
  source: string;
  sourceUrl?: string;
  count?: number;
}

export interface DoctorMedia {
  title: string;
  type: "tv" | "online" | "academic";
  source: string;
  url?: string;
}

export interface Specialization {
  name: string;
  description: string;
  relevantForTeodor?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  titleSince?: string;
  initials: string;
  color: string;
  colorLight: string;
  medlifeUrl?: string;
  education: string;
  careerHighlights: string[];
  specializations: Specialization[];
  experienceYears: string;
  experienceFocus: string;
  surgicalTechnique?: string;
  surgicalTechniqueDetails?: string;
  workplaces: DoctorWorkplace[];
  ratings: DoctorRating[];
  reviews: DoctorReview[];
  media: DoctorMedia[];
  relevanceToTeodor: string;
  pros: string[];
  cons: string[];
}

export interface DoctorRecommendation {
  doctorId: string;
  rank: number;
  reasoning: string;
  bestFor: string;
}

export const doctors: Doctor[] = [
  {
    id: "agache",
    name: "Dr. Agache Armand",
    title: "Medic Primar ORL",
    initials: "AA",
    color: "#059669",
    colorLight: "#e6f7f0",
    medlifeUrl: "https://www.medlife.ro/medic-agache-armand-orl",
    education: "UMF Carol Davila, Bucuresti",
    experienceYears: "14+",
    experienceFocus: "ORL pediatric, chirurgie prin coblatie",
    surgicalTechnique: "Coblatie (plasma la temperatura joasa)",
    surgicalTechniqueDetails:
      "Tehnica moderna cu recuperare rapida, ideala pentru copii. Adenoidectomie, amigdalotomie, frenectomie linguala - toate prin coblatie.",
    careerHighlights: [
      "Medic Primar ORL cu competente in ingrijiri paliative si ecografie generala",
      "Peste 14 ani de activitate documentata (recenzii din 2011)",
      "Orientare clara catre ORL pediatric - lucreaza la Spitalul de Pediatrie MedLife",
      "Specialist in chirurgia prin coblatie la copii (cazuri publicate pe medlife.ro)",
      "Caz publicat identic cu situatia lui Teodor: baiat de 4.5 ani cu adenoide mari si amigdale hipertrofice",
      "Consultatii periodice si la West Clinique Braila (din 2013)",
    ],
    specializations: [
      {
        name: "Coblatie pediatrica",
        description:
          "Tehnica chirurgicala moderna care foloseste plasma la temperatura joasa (~60\u00b0C) pentru a indeparta tesutul. Spre deosebire de bisturiul clasic sau electrocauterul, coblatia nu arde tesutul, ci il dizolva molecular. Avantajul major: sange minimal, durere redusa, recuperare de 2-3x mai rapida. Ideala pentru copii.",
        relevantForTeodor: true,
      },
      {
        name: "Adenoidectomie",
        description:
          "Operatia de indepartare a vegetatiilor adenoide (\"polipi\"). Vegetatiile sunt tesut limfoid in spatele nasului care, cand se mareste excesiv, blocheaza respiratia nazala. Copilul respira pe gura, sforaie, poate face otite repetate. Se recomanda intre 3-5 ani. Relevanta directa pentru diagnosticul lui Teodor (rinoadenoidita).",
        relevantForTeodor: true,
      },
      {
        name: "Amigdalotomie",
        description:
          "Reducerea partiala a amigdalelor (tonsilelor), fara a le indeparta complet. Diferita de amigdalectomie (indepartare totala). Se prefera la copii mici pentru a pastra partial functia imunitara a amigdalelor. Prin coblatie, recuperarea dureaza 3-5 zile vs 10-14 la metoda clasica.",
        relevantForTeodor: true,
      },
      {
        name: "Frenectomie linguala",
        description:
          "Procedura de eliberare a frenului lingual (\"tongue-tie\") - membrana de sub limba care, daca e prea scurta, limiteaza miscarea limbii. Afecteaza vorbirea si alimentatia. Prin coblatie dureaza 10-15 minute, copilul pleaca acasa in aceeasi zi.",
      },
      {
        name: "Septoplastie",
        description:
          "Corectarea chirurgicala a deviatie de sept nazal. Septul e peretele de cartilaj si os care separa cele 2 nari. Cand e deviat, o nara e blocata permanent. Se face de obicei dupa 16-18 ani cand nasul termina de crescut.",
      },
      {
        name: "FESS (chirurgie endoscopica sinusuri)",
        description:
          "Functional Endoscopic Sinus Surgery - operatie minim invaziva a sinusurilor prin nas, cu camera video. Se trateaza sinuzita cronica, polipi nazali, sau infectii care nu raspund la tratament medicamentos. Fara taieturi externe.",
      },
      {
        name: "Timpanometrie",
        description:
          "Test non-invaziv care masoara miscarea timpanului si presiunea din urechea medie. Dureaza 2-3 secunde pe ureche, nu doare. Esential pentru diagnosticarea otitei cu lichid (\"otita seroasa\") - frecventa la copii cu adenoide marite.",
        relevantForTeodor: true,
      },
      {
        name: "Fibroscopie",
        description:
          "Examinare cu o camera flexibila subtire introdusa prin nas pentru a vizualiza cavitatile nazale, faringele si laringele. La copii se foloseste pentru a vedea dimensiunea adenoidelor si gradul de obstructie. Nu necesita anestezie.",
        relevantForTeodor: true,
      },
    ],
    workplaces: [
      {
        name: "Hyperclinica MedLife Medical Park",
        role: "Medic Primar ORL",
        schedule: "Lu 08-14, Ma 14-20, Mi 08-14, Vi 08-14",
        price: "450 RON consultatie, 290 RON control",
        phone: "021.9646",
        isMain: true,
      },
      {
        name: "Clinica de Pediatrie MedLife (Zagazului 7)",
        role: "Medic Primar ORL Pediatrie",
        schedule: "Mi 15-18, Jo 14-20",
        price: "450 RON consultatie, 290 RON control",
        phone: "021.9646",
      },
      {
        name: "MedLife Polimed Cub Center, Targoviste",
        schedule: "Sa 09-12:30",
        price: "170-450 RON",
      },
    ],
    ratings: [
      {
        score: "8/10",
        source: "sfatulmedicului.ro",
        sourceUrl:
          "https://www.sfatulmedicului.ro/medici/dr-armand-agache_26136",
        count: 8,
      },
      {
        score: "4.75/5",
        source: "doctorbun.ro",
        sourceUrl:
          "https://www.doctorbun.ro/doctor-armand-agache_43578.html",
        count: 4,
      },
    ],
    reviews: [
      {
        text: "Intreaga experienta a fost de nota 10 - de la comunicare.",
        source: "sfatulmedicului.ro",
        sourceUrl:
          "https://www.sfatulmedicului.ro/medici/dr-armand-agache_26136",
        sentiment: "pozitiv",
        date: "2020",
      },
      {
        text: "Exceptional, comunicativ. Operatia a decurs exceptional.",
        source: "doctorbun.ro",
        sourceUrl:
          "https://www.doctorbun.ro/doctor-armand-agache_43578.html",
        author: "Silviu",
        date: "mai 2021",
        sentiment: "pozitiv",
      },
      {
        text: "S-a comportat foarte frumos cu Matei, s-au jucat un pic inainte. Mi-a dat si numarul de mobil pentru apeluri seara.",
        source: "forum.desprecopii.com",
        sourceUrl:
          "https://forum.desprecopii.com/forum/topic-TOPIC_ID-134789-ARCHIVE-true-nm-Medic-ORL-Agache-Armand.htm",
        author: "toanca",
        sentiment: "pozitiv",
      },
      {
        text: "Am operat baietelul de fren lingual cu dansul la MedLife. A fost extrem de amabil. Coblatie, 10-15 minute, externat in aceeasi zi.",
        source: "forum.desprecopii.com",
        sourceUrl:
          "https://forum.desprecopii.com/forum/topic-TOPIC_ID-134789-ARCHIVE-true-nm-Medic-ORL-Agache-Armand.htm",
        author: "Lala_D",
        sentiment: "pozitiv",
      },
      {
        text: "E un medic care stie ce face.",
        source: "medlife.ro (caz Rares, 4.5 ani)",
        sourceUrl:
          "https://www.medlife.ro/articole-medicale/adenoidectomie-si-amigdalotomie-prin-coblatie-cu-dr-armand-agache",
        sentiment: "pozitiv",
        date: "ianuarie 2025",
      },
      {
        text: "De 5 ani ne trateaza pe mine si fiul meu de 8 ani. Extraordinar!",
        source: "roxanaraducan.blogspot.com (comentarii)",
        sourceUrl:
          "https://roxanaraducan.blogspot.com/2012/09/medici-de-evitat-dr-agache-armand-orl.html",
        author: "Liliana Suteu",
        date: "feb 2017",
        sentiment: "pozitiv",
      },
      {
        text: "Cu noi a fost destul de sarcastic.",
        source: "forum.desprecopii.com",
        sourceUrl:
          "https://forum.desprecopii.com/forum/topic-TOPIC_ID-134789-ARCHIVE-true-nm-Medic-ORL-Agache-Armand.htm",
        author: "mcm",
        sentiment: "negativ",
      },
      {
        text: "Tratamentul dat de el a facut mai mult rau, starea bebelusului s-a agravat. (bebelus de 12 zile)",
        source: "sfatulmedicului.ro",
        sourceUrl:
          "https://www.sfatulmedicului.ro/medici/dr-armand-agache_26136",
        sentiment: "negativ",
        date: "2024",
      },
    ],
    media: [
      {
        title:
          "Adenoidectomie si amigdalotomie prin coblatie - caz Rares, 4.5 ani",
        type: "online",
        source: "medlife.ro",
        url: "https://www.medlife.ro/articole-medicale/adenoidectomie-si-amigdalotomie-prin-coblatie-cu-dr-armand-agache",
      },
      {
        title: "Operatie de polipi si amigdale prin coblatie - caz Maria, 6 ani",
        type: "online",
        source: "medlife.ro",
        url: "https://www.medlife.ro/articole-medicale/operatie-de-polipi-si-amigdale-cu-dr-agache-armand",
      },
      {
        title: "Coblatia - metoda moderna in chirurgia pediatrica ORL",
        type: "online",
        source: "medlife.ro",
        url: "https://www.medlife.ro/articole-medicale/coblatia-metoda-moderna-in-chirurgia-pediatrica-orl",
      },
      {
        title:
          "Nasul infundat constant poate fi semnul unei sinuzite cronice",
        type: "online",
        source: "HotNews.ro",
        url: "https://hotnews.ro/medicibuni-dr-armand-agache-medic-orl-medlife-nasul-infundat-constant-poate-fi-semnul-unei-sinuzite-cronice-1865461",
      },
      {
        title: "Chirurgia endoscopica nazala - indicatii si avantaje",
        type: "online",
        source: "HotNews.ro",
        url: "https://www.hotnews.ro/stiri-intreaba_un_medic-23215296-chirurgia-endoscopica-nazala-indicatii-avantaje-explicate-armand-agache-medic-primar-orl-momentul-operatiei-nu-doare-nimic-nimeni.htm",
      },
      {
        title: "Totul despre otite - interviu",
        type: "online",
        source: "HotNews.ro",
        url: "https://www.hotnews.ro/stiri-doctorh_actualitate-8328455-interviu-totul-despre-otite-armand-agache-medic-orl.htm",
      },
    ],
    relevanceToTeodor:
      "Cel mai relevant: are un caz publicat aproape identic (baiat de 4.5 ani cu adenoide si amigdale hipertrofice). Tehnica de coblatie este ideala pentru copii datorita recuperarii rapide. Se joaca cu copiii inainte de consultatie.",
    pros: [
      "Tehnica moderna coblatie - recuperare rapida",
      "Excelent cu copiii (se joaca cu ei inainte de examinare)",
      "Caz publicat identic cu situatia lui Teodor (baiat 4.5 ani)",
      "Disponibilitate larga in reteaua MedLife",
      "Multe recenzii pozitive de la parinti",
      "8 aparitii media (HotNews, MedLife)",
    ],
    cons: [
      "Un incident raportat cu prescriptie la nou-nascut (12 zile)",
      "Ocazional descris ca \"sarcastic\" (o recenzie)",
      "Anul obtinerii titlului de medic primar necunoscut",
    ],
  },
  {
    id: "soreanu",
    name: "Dr. Soreanu Cristian Costin",
    title: "Medic Primar ORL",
    initials: "SC",
    color: "#3a7ca5",
    colorLight: "#e8f1f8",
    medlifeUrl: "https://www.medlife.ro/medic-soreanu-cristian-costin-orl-pediatrie-camera-de-garda",
    education: "UMF Carol Davila, Bucuresti",
    experienceYears: "10+",
    experienceFocus: "ORL pediatric, chirurgie LASER si endoscopica",
    surgicalTechnique: "LASER ORL + Radiofrecventa ELLMAN",
    surgicalTechniqueDetails:
      "Chirurgie LASER si proceduri ELLMAN (radiofrecventa) la Spitalul Gomoiu - printre putinele institutii de stat care ofera aceasta tehnica la copii. Recuperare rapida: la 2 ore post-operatie copilul poate bea lichide.",
    careerHighlights: [
      "Medic Primar ORL - UMF Carol Davila, Bucuresti",
      "Membru al echipei ORL la Spitalul Clinic de Copii Dr. Victor Gomoiu (6 medici)",
      "Competente: audiologie, chirurgie LASER ORL, chirurgie endoscopica ORL",
      "Membru al echipei de implant cohlear la Gomoiu",
      "Publicatii stiintifice in revista MAEDICA (jurnal de medicina clinica)",
      "Lucreaza in paralel la MedLife Pediatrie, Royal Hospital si Affidea Kids",
    ],
    specializations: [
      {
        name: "Chirurgie LASER ORL",
        description:
          "Foloseste fascicul laser concentrat pentru taiere si vaporizare de tesut cu precizie extrema. Avantaje: sange minimal (laserul cauterizeaza vasele in timp real), precizie milimetrica, risc scazut de lezare a tesutului sanatos. Folosit pentru adenoide, amigdale, polipi, tumori benigne.",
        relevantForTeodor: true,
      },
      {
        name: "Chirurgie endoscopica ORL",
        description:
          "Operatii prin nas sau gura cu ajutorul endoscopului (camera miniaturala). Fara taieturi externe, vizualizare directa pe monitor. Se foloseste pentru sinusuri, adenoide, polipi nazali. Recuperare mai rapida decat chirurgia deschisa.",
        relevantForTeodor: true,
      },
      {
        name: "Audiologie",
        description:
          "Ramura medicinii care se ocupa de evaluarea si tratamentul problemelor de auz. Include: audiograma (testul de auz), timpanometrie, otoemisiuni acustice. Important la copii cu adenoide/otite repetate care pot duce la hipoacuzie (scaderea auzului).",
        relevantForTeodor: true,
      },
      {
        name: "Proceduri ELLMAN (radiofrecventa)",
        description:
          "ELLMAN Surgitron - aparat care foloseste unde radio de frecventa inalta (4 MHz) pentru a taia si coagula tesutul. Similar coblatiei ca principiu, dar cu frecventa diferita. Avantaj: minim traumatic, recuperare rapida (la 2 ore copilul poate bea lichide). Gomoiu este printre putinele spitale de stat cu aceasta tehnologie.",
        relevantForTeodor: true,
      },
      {
        name: "Implant cohlear (echipa)",
        description:
          "Dispozitiv electronic implantat chirurgical care inlocuieste functia urechii interne la copii cu surditate severa/profunda. Operatie complexa de echipa (chirurg ORL + audiolog + logoped). Dr. Soreanu face parte din echipa de implant cohlear a Spitalului Gomoiu.",
      },
      {
        name: "Fibroscopie",
        description:
          "Examinare cu o camera flexibila subtire introdusa prin nas pentru a vizualiza cavitatile nazale, faringele si laringele. La copii se foloseste pentru a vedea dimensiunea adenoidelor si gradul de obstructie. Nu necesita anestezie.",
        relevantForTeodor: true,
      },
      {
        name: "Timpanometrie",
        description:
          "Test non-invaziv care masoara miscarea timpanului si presiunea din urechea medie. Dureaza 2-3 secunde pe ureche, nu doare. Esential pentru diagnosticarea otitei cu lichid (\"otita seroasa\") - frecventa la copii cu adenoide marite.",
        relevantForTeodor: true,
      },
    ],
    workplaces: [
      {
        name: "Spitalul Clinic de Copii Dr. Victor Gomoiu",
        role: "Medic Primar ORL",
        schedule: "Luni-Vineri, programari: 13:00-15:00",
        phone: "031.413.6700 (int. 307 sau 936)",
        isMain: true,
      },
      {
        name: "Clinica de Pediatrie MedLife (Zagazului 7)",
        role: "Medic Primar ORL Pediatrie",
        schedule: "Ma 16:00-20:00",
        price: "490 RON garda, 350 RON control",
        phone: "021.9646",
      },
      {
        name: "Royal Hospital (Splaiul Unirii 313A)",
        schedule: "Mi-Jo 16:00-20:00",
        price: "410 RON consultatie, 225 RON control",
        phone: "021.9095",
      },
      {
        name: "Affidea Kids (C. Aricescu 8)",
        schedule: "Program variabil",
        price: "410 RON consultatie",
      },
    ],
    ratings: [
      {
        score: "5/5",
        source: "docbook.ro",
        sourceUrl:
          "https://www.docbook.ro/medici/medic-cristian-soreanu-royal-hospital-royal-hospital",
        count: 2,
      },
    ],
    reviews: [
      {
        text: "Multumesc domnului doctor Soreanu si intregii echipe de la sectia ORL.",
        source: "citymaps.ro (review Gomoiu)",
        sourceUrl:
          "https://citymaps.ro/spital/bucuresti/spitalul-clinic-de-copii-docto/",
        author: "A.N.",
        sentiment: "pozitiv",
      },
      {
        text: "Un om de nota 1000. A venit si sambata la spital pentru a-i consulta pe micuti.",
        source: "citymaps.ro (review Gomoiu)",
        sourceUrl:
          "https://citymaps.ro/spital/bucuresti/spitalul-clinic-de-copii-docto/",
        author: "I.M.",
        sentiment: "pozitiv",
      },
      {
        text: "E un om de milioane cum rar iti e dat sa vezi in sistemul medical din Romania.",
        source: "citymaps.ro (review Gomoiu)",
        sourceUrl:
          "https://citymaps.ro/spital/bucuresti/spitalul-clinic-de-copii-docto/",
        author: "I.M.",
        sentiment: "pozitiv",
      },
      {
        text: "Am fost foarte multumita de profesionalismul sectiei ORL de la Gomoiu.",
        source: "citymaps.ro (review Gomoiu)",
        sourceUrl:
          "https://citymaps.ro/spital/bucuresti/spitalul-clinic-de-copii-docto/",
        author: "F.N.",
        sentiment: "pozitiv",
      },
      {
        text: "Very well.",
        source: "docbook.ro (Royal Hospital)",
        sourceUrl:
          "https://www.docbook.ro/medici/medic-cristian-soreanu-royal-hospital-royal-hospital",
        author: "Gabriel Marinescu",
        date: "sept 2024",
        sentiment: "pozitiv",
      },
    ],
    media: [
      {
        title: "Publicatii stiintifice in MAEDICA journal",
        type: "academic",
        source: "MAEDICA - Journal of Clinical Medicine",
        url: "https://www.maedica.ro/author/cristian-costin-soreanu/",
      },
    ],
    relevanceToTeodor:
      "Pret mai accesibil (410 RON), disponibilitate larga (3 zile/sapt in privat + acces la stat la Gomoiu). Tehnici LASER si ELLMAN cu recuperare rapida. Profil academic cu publicatii stiintifice.",
    pros: [
      "Pret mai accesibil: 410 RON (vs 450 RON)",
      "Disponibilitate larga: 3 zile/sapt in privat (Ma, Mi, Jo)",
      "Acces si prin sistemul de stat (Spitalul Gomoiu)",
      "Tehnici LASER + ELLMAN cu recuperare rapida la 2 ore",
      "Cercetare academica (publicatii MAEDICA)",
      "Recenzii excelente - dedicat, vine si sambata la spital",
    ],
    cons: [
      "Mai putine recenzii online (profil mai discret)",
      "Anul obtinerii titlului de medic primar necunoscut",
      "CV-ul complet nu este accesibil public (PDF protejat)",
    ],
  },
  {
    id: "rizescu",
    name: "Dr. Rizescu Manuela-Elena",
    title: "Medic Primar ORL",
    titleSince: "din 2000",
    initials: "RM",
    color: "#7c3aed",
    colorLight: "#f0ebfa",
    medlifeUrl: "https://www.medlife.ro/medic-rizescu-manuela-elena-orl-pediatrie",
    education: "Facultatea de Pediatrie, UMF Carol Davila (promotia 1988)",
    experienceYears: "30+",
    experienceFocus: "exclusiv ORL pediatric",
    surgicalTechnique: "Chirurgie clasica + endoscopica",
    surgicalTechniqueDetails:
      "Experienta vasta in adenoidectomie, amigdalectomie, bronchoscopie si chirurgie endoscopica a rinosinuzitei. Recomanda operatia de adenoide intre 3-5 ani.",
    careerHighlights: [
      "1988-1992: Medic stagiar la Spitalul Grigore Alexandrescu, Bucuresti",
      "1992-1995: Rezidentiat ORL la Spitalul Maria Curie",
      "1995: Medic Specialist ORL",
      "2000: Medic Primar ORL (cel mai inalt grad medical)",
      "2006: Doctorand in medicina",
      "2010-prezent: Sef Sectie ORL la Spitalul Maria Curie",
      "Cursuri: otologie (1997-98), bronchoscopie (2002), urgente ORL pediatrice (2004-06), chirurgie endoscopica rinosinuzita (2007)",
      "Membru: Societatea Romana de ORL, Societatea Romana de Rinologie, Societatea Romana de Pediatrie",
    ],
    specializations: [
      {
        name: "Adenoidectomie",
        description:
          "Operatia de indepartare a vegetatiilor adenoide (\"polipi\"). Vegetatiile sunt tesut limfoid in spatele nasului care, cand se mareste excesiv, blocheaza respiratia nazala. Copilul respira pe gura, sforaie, poate face otite repetate. Dr. Rizescu recomanda operatia intre 3-5 ani.",
        relevantForTeodor: true,
      },
      {
        name: "Amigdalectomie",
        description:
          "Indepartarea completa a amigdalelor (tonsilelor palatine). Diferita de amigdalotomie (reducere partiala). Se indica cand amigdalele sunt atat de mari incat cauzeaza apnee de somn, dificultati la inghitire sau infectii repetate (>5-7/an). Recuperare: 10-14 zile, dieta moale.",
        relevantForTeodor: true,
      },
      {
        name: "Bronchoscopie",
        description:
          "Examinarea cailor respiratorii inferioare (trahee, bronhii) cu un tub flexibil sau rigid cu camera. La copii se face sub anestezie generala. Se foloseste diagnostic (corp strain inhalat, malformatii) sau terapeutic (extragere corp strain, dilatatii). Procedura specializata.",
      },
      {
        name: "Chirurgie endoscopica rinosinuzita",
        description:
          "Operatie prin nas cu endoscop (camera miniaturala) pentru tratarea sinuzitei cronice care nu raspunde la medicamente. Se deschid orificiile sinusurilor blocate pentru a permite drenajul natural. Fara taieturi externe, recuperare 1-2 saptamani.",
      },
      {
        name: "Otita medie la copii",
        description:
          "Infectia/inflamatia urechii medii - cea mai frecventa boala ORL la copii (80% fac cel putin un episod pana la 3 ani). Adenoidele marite sunt o cauza frecventa. Dr. Rizescu subliniaza: nu puneti picaturi fara consult, tratamentul incepe cu degajarea nasului.",
        relevantForTeodor: true,
      },
      {
        name: "Obstructie nazala / respiratie orala",
        description:
          "Blocarea respiratiei pe nas obliga copilul sa respire pe gura. Cauzat de adenoide marite, rinita alergica, deviatie de sept. Consecinte: deformarea maxilarului, aplatizarea toracelui, otite repetate, tulburari de somn. Dr. Rizescu: daca persista peste 3-5 ani, riscul de deformare creste semnificativ.",
        relevantForTeodor: true,
      },
    ],
    workplaces: [
      {
        name: "Spitalul Clinic de Urgenta pentru Copii Maria Curie",
        role: "Sef Sectie ORL (din 2010)",
        schedule: "Program spitalicesc",
        phone: "021.460.30.26 (int. 287)",
        isMain: true,
      },
      {
        name: "Hyperclinica MedLife Berceni (Sos. Oltenitei 208)",
        schedule: "Mi 16:00-20:00",
        price: "450 RON consultatie, 250 RON fara programare",
        phone: "021.9646",
      },
    ],
    ratings: [
      {
        score: "4/5",
        source: "sfatulmedicului.ro",
        sourceUrl:
          "https://www.sfatulmedicului.ro/medici/dr-rizescu-manuela_1761/opinii",
        count: 4,
      },
    ],
    reviews: [
      {
        text: "Este un medic extraordinar, un profesionist desavarsit si un om minunat. Mi-a operat fetita in aprilie 2013 de polipi si de amigdale.",
        source: "copilul.ro",
        sourceUrl:
          "https://www.copilul.ro/medici-pediatri-u74/Dr-Rizescu-Manuela-s5489.html",
        author: "Andreea",
        date: "nov 2013",
        sentiment: "pozitiv",
      },
      {
        text: "Un dr. extraordinar, mi-a operat copilul de polipi, si de atunci nu mai avem probleme.",
        source: "copilul.ro",
        sourceUrl:
          "https://www.copilul.ro/medici-pediatri-u74/Dr-Rizescu-Manuela-s5489.html",
        author: "Nela",
        date: "apr 2014",
        sentiment: "pozitiv",
      },
      {
        text: "Un medic de milioane, mai rar asa!",
        source: "copilul.ro",
        sourceUrl:
          "https://www.copilul.ro/medici-pediatri-u74/Dr-Rizescu-Manuela-s5489.html",
        author: "Adriana",
        date: "nov 2015",
        sentiment: "pozitiv",
      },
      {
        text: "Pot sa spun ca este una dintre cele mai atente si mai pricepute cadre medicale!",
        source: "copilul.ro",
        sourceUrl:
          "https://www.copilul.ro/medici-pediatri-u74/Dr-Rizescu-Manuela-s5489.html",
        author: "Celmic Alexandru",
        date: "ian 2016",
        sentiment: "pozitiv",
      },
      {
        text: "Atat de devotata medicinei. Intreaga echipa ORL este extraordinara.",
        source: "FocusPress",
        sourceUrl:
          "https://focuspress.ro/mai-exista-si-ingeri-in-halate-albe-medici-iubiti-de-pacienti-copiii-operati-la-marie-s-curie-inscrisi-de-anestezist-la-un-concurs/",
        sentiment: "pozitiv",
      },
      {
        text: "Cumsecade si sociabila, foarte important. Va multumim frumos!",
        source: "copilul.ro",
        sourceUrl:
          "https://www.copilul.ro/medici-pediatri-u74/Dr-Rizescu-Manuela-s5489.html",
        author: "Valentina",
        date: "feb 2017",
        sentiment: "pozitiv",
      },
      {
        text: "Nu o recomand, este o sperietoare, nu stie sa comunice cu copilul.",
        source: "sfatulmedicului.ro",
        sourceUrl:
          "https://www.sfatulmedicului.ro/medici/dr-rizescu-manuela_1761/opinii",
        author: "Ancuta",
        date: "~2016",
        sentiment: "negativ",
      },
    ],
    media: [
      {
        title:
          "Care este riscul unei respiratii preponderent orale la varste mici",
        type: "tv",
        source: "ProTV - Doctor de Bine / CSID",
        url: "https://stirileprotv.ro/stiri/csid/csid-care-este-riscul-unei-respiratii-preponderent-orala-la-varste-mici.html",
      },
      {
        title:
          "Legatura neasteptata dintre fumatul parintilor si otitele grave ale copiilor",
        type: "tv",
        source: "ProTV - Doctor de Bine",
        url: "https://stirileprotv.ro/stiri/doctor-de-bine/legatura-neasteptata-dintre-fumatul-parintilor-si-otitele-grave-ale-copiilor-poate-sa-fie-si-mai-rau.html",
      },
      {
        title:
          "Cum apare otita medie la copii si de ce sa nu-i tratam cu picaturi",
        type: "online",
        source: "DoctorPlus.md",
        url: "https://doctorplus.md/index.php/medpress/sfatul/2325-sfatul-medicului-pediatru-manuela-rizescu-cum-apare-otita-medie-la-copii-i-de-ce-s-nu-i-trat-m-cu-pic-turi",
      },
    ],
    relevanceToTeodor:
      "Cea mai experimentata dintre cei 3 doctori (30+ ani, exclusiv ORL pediatric). Sef sectie la cel mai mare spital de copii din Romania. Recomanda operatia de adenoide intre 3-5 ani, exact varsta lui Teodor.",
    pros: [
      "30+ ani experienta exclusiv in ORL pediatric",
      "Sef Sectie ORL la cel mai mare spital de copii (Maria Curie)",
      "Poate fi vazuta si la stat (cu bilet de trimitere)",
      "Aparitii TV la ProTV - Doctor de Bine",
      "Majoritate covarsitoare de recenzii pozitive",
      "Expertiza in adenoidectomie la varsta 3-5 ani",
    ],
    cons: [
      "O recenzie negativa despre comunicarea cu copiii",
      "Program foarte limitat la MedLife (doar miercuri)",
      "Recenziile sunt mai vechi (2013-2017)",
    ],
  },
];

export const doctorRecommendations: DoctorRecommendation[] = [
  {
    doctorId: "agache",
    rank: 1,
    reasoning:
      "Are un caz publicat aproape identic cu situatia lui Teodor (baiat de 4.5 ani cu adenoide mari). Foloseste tehnica de coblatie - cea mai moderna si cu recuperare rapida pentru copii. Se joaca cu copiii inainte de consultatie, ceea ce face experienta mai putin stresanta. Cele mai multe recenzii pozitive de la parinti.",
    bestFor:
      "Consultatie initiala + potential chirurgical daca e nevoie de interventie",
  },
  {
    doctorId: "soreanu",
    rank: 2,
    reasoning:
      "Pret mai accesibil (410 vs 450 RON), disponibilitate excelenta (3 zile/sapt in privat + acces la stat). Tehnici LASER si ELLMAN cu recuperare rapida. Profil academic solid. Recenzii excelente - un doctor dedicat care vine si sambata la spital.",
    bestFor:
      "Alternativa accesibila cu acces si prin sistemul de stat (Gomoiu)",
  },
  {
    doctorId: "rizescu",
    rank: 3,
    reasoning:
      "Cea mai experimentata (30+ ani, sef sectie Maria Curie). Expertiza incontestabila in adenoidectomie pediatrica. Program limitat la MedLife (doar miercuri) si o recenzie negativa despre comunicarea cu copiii sunt punctele slabe. Recomandata daca se doreste o a doua opinie de la cel mai experimentat specialist.",
    bestFor: "A doua opinie de la cel mai experimentat specialist",
  },
];

export const researchDate = "30 martie 2026";
export const researchDisclaimer =
  "Informatiile au fost colectate din surse publice (site-uri medicale, forumuri de parinti, articole de presa). Recenziile sunt citate din sursele originale cu link-uri. Preturile si programele pot suferi modificari - verificati direct la clinica inainte de programare.";
