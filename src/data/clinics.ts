export interface Clinic {
  id: string;
  name: string;
  equipment: string;
  tesla: "3T" | "1.5T";
  address: string;
  phones: string[];
  email?: string;
  cnas: boolean;
  cnasNote?: string;
  prices?: string;
  note?: string;
  schedule?: string;
  recommended?: boolean;
}

export interface ClinicSection {
  title: string;
  description?: string;
  clinics: Clinic[];
}

export const clinicSections: ClinicSection[] = [
  {
    title: "Bucuresti \u2014 9 clinici cu RMN 3T + contract CNAS",
    description:
      "In Ploiesti si Campina NU exista clinici cu RMN 3T. Pacientii din Prahova care au nevoie de RMN cerebral 3T trebuie sa se deplaseze la Bucuresti (~60 km).",
    clinics: [
      {
        id: "sanador",
        name: "SANADOR",
        equipment: "Siemens Magnetom Vida 3T + Siemens Magnetom Skyra 3T",
        tesla: "3T",
        address: "Sos. Bucuresti-Ploiesti nr. 7, Sector 1, Bucuresti",
        phones: ["021.9699"],
        cnas: true,
        cnasNote:
          "Contract CAS, investigatii decontate publicate pe site (PDF). RMN cerebral 3T disponibil (inclusiv volumetrie, functional, spectroscopie).",
        prices: "RMN cerebral nativ ~790 lei, cu contrast ~1.100 lei",
        note: "Conform investigatii PressOne (2024), SANADOR programeaza pacientii CNAS predominant noaptea (ex: ora 04:00), iar timpii de asteptare pot fi de cateva luni.",
      },
      {
        id: "medlife-grivita",
        name: "MedLife \u2014 Hyperclinica Grivita / Medical Park",
        equipment: "RMN 3 Tesla (model nespecificat public). Disponibil NON-STOP 24/7.",
        tesla: "3T",
        address:
          "Calea Grivitei nr. 365, Sector 1, Bucuresti (Hyperclinica MedLife Grivita / Medical Park)",
        phones: ["021.9646"],
        cnas: true,
        cnasNote:
          "Contract CNAS extins. Documente necesare: bilet trimitere, buletin, card sanatate, creatinina serica (pt contrast).",
        note: "Alte locatii MedLife din Bucuresti au doar 1.5T. Doar Grivita/Medical Park este confirmat 3T.",
      },
      {
        id: "donna",
        name: "Donna Medical Center",
        equipment: "Siemens Magnetom Vida 3T cu sistem BioMatrix + RMN 1.5T separat",
        tesla: "3T",
        address: "Locatii Donna Pipera si Donna Traian, Bucuresti",
        phones: ["021.9732"],
        cnas: true,
        cnasNote:
          'Pagina CAS oficiala listeaza explicit "RMN 1.5T, RMN 3T, CT" ca investigatii decontate integral prin CAS. Conditii: bilet trimitere + asigurat CAS.',
        note: "Una dintre putinele clinici care confirma explicit pe site ca decontarea CNAS acopera investigatiile 3T.",
        recommended: true,
      },
      {
        id: "medima-virtutii",
        name: "Medima Virtutii",
        equipment: "Siemens Magnetom Vida 3T",
        tesla: "3T",
        address: "Sos. Virtutii nr. 52, Sector 6, Bucuresti",
        phones: ["021.9293"],
        email: "programari@medimahealth.ro",
        cnas: true,
        cnasNote:
          "Sectiune dedicata pe site: tarife decontate CAS. Decontare integrala cu bilet trimitere standard. Decontare nelimitata cu bilet Monitor (tipurile 2-8).",
        prices: "RMN cerebral nativ 730 lei, cu contrast 1.000 lei, rezultat urgent (2h) +200 lei",
        note: "Alte locatii Medima din Bucuresti (Giulesti, Jiului) au doar 1.5T.",
        recommended: true,
      },
      {
        id: "rmn-tineretului",
        name: "Clinica RMN Tineretului",
        equipment:
          "United Imaging uMR780 3T (fabricat 2025) \u2014 tunel 70 cm, platforma AI uCS",
        tesla: "3T",
        address: "Str. Lanariei nr. 90, Sector 4, Bucuresti",
        phones: ["031.9475"],
        email: "contact@rmntineretului.ro",
        cnas: true,
        cnasNote: "Contract cu CASMB (Casa de Asigurari a Municipiului Bucuresti).",
        note: "Cel mai nou aparat 3T din Bucuresti (2025). Are si 3 unitati de 1.5T (Siemens + GE).",
      },
      {
        id: "affidea-sema",
        name: "Affidea Sema Parc",
        equipment: "RMN 3 Tesla (model nespecificat public)",
        tesla: "3T",
        address:
          "Splaiul Independentei nr. 319, Cladirea Berlin, Intrare C, Sema Parc (Poarta 2), Sector 6, Bucuresti",
        phones: ["021.9338"],
        email: "sema@affidea.com",
        schedule: "Luni-Vineri 08:00-20:00",
        cnas: true,
        cnasNote: 'Ofera servicii "prin decontare CAS sau privat".',
        note: "Alte locatii Affidea/Hiperdia din Bucuresti au doar 1.5T.",
      },
      {
        id: "medicals-riverside",
        name: "MedicalES \u2014 Riverside 2 + Phoenix",
        equipment:
          "2x GE SIGNA Pioneer AIR Edition 3T cu tehnologie reconstructie AI (AIR Recon DL)",
        tesla: "3T",
        address:
          "Riverside 2: Splaiul Independentei nr. 291-293, Riverside Tower, Sector 6 | Phoenix: Calea Vitan nr. 6 si 6A, Sector 3",
        phones: [
          "031.405.75.79",
          "0755.060.991",
          "031.433.88.66",
          "0790.060.993",
        ],
        cnas: true,
        cnasNote: "Toate clinicile MedicalES accepta bilete trimitere CAS.",
        prices: "RMN cerebral nativ ~750 lei, cu contrast ~1.100 lei",
        note: "Celelalte 7 centre MedicalES din Bucuresti au doar 1.5T (GE SIGNA Explorer/Voyager).",
        recommended: true,
      },
      {
        id: "nord",
        name: "Grupul Medical NORD (retea MedLife-Provita)",
        equipment:
          "Siemens Magnetom Skyra 3T (Tim+Dot, tunel 65 cm) + Siemens Magnetom Avanto 1.5T",
        tesla: "3T",
        address: "Bd. Dimitrie Pompeiu nr. 9-9A, Cladirea 18, Sector 2, Bucuresti",
        phones: ["021.9432"],
        cnas: true,
        cnasNote:
          "Contract cu CASMB, fara coplata. Pagina dedicata: nord.ro/servicii-decontate-casmb/",
        note: "Alte locatii: Clinica NORD Frunzei, NORD Alexandrina (Str. Alexandrina nr. 20-22), NORD Londra (Str. Londra nr. 25).",
        recommended: true,
      },
      {
        id: "memorial",
        name: "Memorial Romania (Enayati Medical City)",
        equipment: "RMN 3 Tesla (model nespecificat public)",
        tesla: "3T",
        address:
          "Spital: Sos. Gheorghe Ionescu Sisesti nr. 8A, Sector 1 | Clinica City Gate: Piata Presei nr. 3-5, Sector 1",
        phones: ["031.9393"],
        schedule:
          "Call Center: Luni-Vineri 08:00-20:30, Sambata-Duminica 09:00-18:00",
        cnas: true,
        cnasNote:
          "Pagina dedicata: memorial.ro/servicii-decontate-casmb",
      },
    ],
  },
  {
    title: "Bucuresti \u2014 Mentiuni speciale (3T fara CNAS confirmat)",
    clinics: [
      {
        id: "ponderas",
        name: "Ponderas Academic Hospital (Regina Maria)",
        equipment: "RMN 3T instalat din mai 2025 (model nespecificat)",
        tesla: "3T",
        address: "Str. Nicolae Caramfil nr. 85A, Sector 1, Bucuresti",
        phones: ["021.9636"],
        cnas: false,
        cnasNote:
          "CNAS pe 3T: NECONFIRMAT explicit pe site. Regina Maria are contracte CNAS in multe locatii, dar Ponderas opereaza ca spital privat premium. Verificare telefonica recomandata.",
      },
      {
        id: "neuroaxis",
        name: "Neuroaxis",
        equipment: "Siemens Magnetom Lumina 3T",
        tesla: "3T",
        address: "Bucuresti",
        phones: [],
        cnas: false,
        cnasNote: "NU \u2014 exclusiv cu plata (de la 850 lei).",
        prices: "De la 850 lei",
      },
    ],
  },
  {
    title: "Ploiesti \u2014 Doar 1.5T (fara 3T)",
    description:
      "In Ploiesti nu exista clinici cu RMN 3T. Toate unitatile de imagistica au doar 1.5T.",
    clinics: [
      {
        id: "medlife-lotus",
        name: "MedLife Lotus Ploiesti",
        equipment: "GE Brivo MR 355 Inspire 1.5T",
        tesla: "1.5T",
        address: "Str. Gh. Gr. Cantacuzino nr. 43, Ploiesti",
        phones: ["0244.510.808"],
        cnas: true,
      },
      {
        id: "affidea-ploiesti",
        name: "Affidea-Hiperdia Ploiesti",
        equipment: "RMN 1.5T",
        tesla: "1.5T",
        address: "Sos. Vestului nr. 1A, West Mall, Ploiesti",
        phones: ["021.9338"],
        cnas: true,
      },
      {
        id: "gral-ploiesti",
        name: "Gral Radiologie Ploiesti",
        equipment: "RMN 1.5T",
        tesla: "1.5T",
        address: "Str. Cuza Voda nr. 6, Bloc A/8 Omnia, Ploiesti",
        phones: ["0244.522.458"],
        cnas: true,
      },
      {
        id: "oncofort-ploiesti",
        name: "OncoFort Ploiesti",
        equipment: "Siemens Magnetom Sempra 1.5T",
        tesla: "1.5T",
        address: "Str. Romulus nr. 3, Ploiesti",
        phones: [],
        cnas: true,
        cnasNote: "Contact prin gralmedical.ro",
      },
    ],
  },
  {
    title: "Campina \u2014 Doar 1.5T (fara 3T)",
    description:
      "In Campina nu exista clinici cu RMN 3T. Toate unitatile de imagistica au doar 1.5T.",
    clinics: [
      {
        id: "erin-campina",
        name: "Centrul Medical ERIN",
        equipment: "GE Signa Explorer 1.5T",
        tesla: "1.5T",
        address: "Str. Ecaterina Teodoroiu nr. 1, Campina",
        phones: ["0244.376.614", "0722.555.550"],
        cnas: true,
      },
      {
        id: "sanconfind-campina",
        name: "SanConfind Campina",
        equipment: "Siemens Magnetom Aera 1.5T",
        tesla: "1.5T",
        address: "Campina",
        phones: [],
        cnas: true,
      },
    ],
  },
];

export const requiredDocuments = [
  "Bilet de trimitere de la neurolog (cu cod CIM-10)",
  "Carte de identitate (original)",
  "Card national de asigurari de sanatate (sau adeverinta de asigurat)",
  "Analiza creatinina serica (doar daca se face cu substanta de contrast, max. 1 luna veche)",
  "Dosarul medical (investigatii anterioare relevante)",
];

export const cnasInfo = {
  rateNative: "450 lei (RMN cerebral nativ)",
  rateContrast: "700 lei (RMN cerebral cu contrast)",
  note: "Tarifele CNAS sunt aceleasi pentru 1.5T si 3T. Clinicile decid intern pe ce aparat programeaza pacientii cu decontare.",
  referralValidity:
    "Bilet trimitere: 30 zile pentru afectiuni acute, 90 zile pentru afectiuni cronice.",
  priorityAccess:
    'Daca neurologul scrie Monitor 6 (neurologic) sau Monitor 7 (cerebrovascular), pacientul are programare prioritara si decontare nelimitata. "S.O." (suspiciune oncologica) = acces prioritar nelimitat.',
};

export const practicalWarning =
  "Chiar daca o clinica are 3T si contract CNAS, NU este garantat ca investigatia decontata va fi pe 3T. Multe clinici rezerva 3T pentru pacientii cu plata si directioneaza pacientii CNAS pe 1.5T. Donna Medical Center este singura clinica identificata care confirma explicit pe site ca decontarea CNAS acopera 3T. Pentru toate celelalte, confirmarea telefonica este ESENTIALA.";

export const waitTimes = {
  cnas: "2 saptamani \u2014 6 luni (in functie de clinica)",
  private: "1\u20143 zile",
  priceRange: "730 lei (Medima) \u2014 850 lei (Neuroaxis) nativ; 1.000\u20141.100 lei cu contrast",
};
