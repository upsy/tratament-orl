// ── Types ──────────────────────────────────────────────────────────────────────

export interface Medication {
  name: string;
  activeSubstance: string;
  dose: string;
  details?: string;
  waitAfter?: number; // minutes to wait after applying
}

export interface PhaseStep {
  label: string; // e.g. "Dimineata" or "Seara"
  medications: Medication[];
}

export interface Alert {
  type: "info" | "warning" | "note";
  text: string;
}

export interface Phase {
  id: number;
  title: string;
  dayRange: [number, number];
  color: string; // hex
  colorLight: string; // lighter variant for backgrounds
  steps: PhaseStep[];
  alerts: Alert[];
}

export interface OralMed {
  name: string;
  dose: string;
  schedule: string;
  details: string;
}

export interface SideEffect {
  medication: string;
  effect: string;
  risk: "scazut" | "mediu" | "ridicat";
  details: string;
}

export interface Recommendation {
  icon: string;
  text: string;
}

export interface TreatmentData {
  patient: {
    name: string;
    age: string;
    weight: string;
  };
  doctor: string;
  diagnostic: string;
  diagnosticDetails: string[];
  totalDays: number;
  consultDate: string;
  phases: Phase[];
  oralMeds: OralMed[];
  supplements: OralMed[];
  sideEffects: SideEffect[];
  recommendations: Recommendation[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

export const treatmentData: TreatmentData = {
  patient: {
    name: "Teodor",
    age: "4 ani, 8 luni",
    weight: "17 kg",
  },
  doctor: "Dr. ORL",
  diagnostic: "Rino-adenoidita acuta cu componenta alergica",
  diagnosticDetails: [
    "Rino-adenoidita acuta",
    "Componenta alergica",
    "Vegetatii adenoide gr. II-III",
  ],
  totalDays: 50,
  consultDate: "Martie 2026",
  phases: [
    {
      id: 1,
      title: "Faza 1 – Decongestionare",
      dayRange: [1, 5],
      color: "#3b82f6",
      colorLight: "#eff6ff",
      steps: [
        {
          label: "Dimineata + Seara",
          medications: [
            {
              name: "Ser fiziologic / Apa de mare",
              activeSubstance: "NaCl 0.9%",
              dose: "2-3 pufuri / nara",
              details: "Lavaj nazal, se sufla nasul dupa",
              waitAfter: 5,
            },
            {
              name: "Ser Efedrinat 0.5% SAU Xilometazolina 0.05%",
              activeSubstance: "Efedrina / Xilometazolina",
              dose: "1-2 picaturi / nara",
              details: "Decongestionant nazal. Max 5 zile!",
              waitAfter: 5,
            },
            {
              name: "Gentamicina picaturi nazale",
              activeSubstance: "Gentamicina sulfat",
              dose: "2 picaturi / nara",
              details: "Antibiotic topic nazal",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "warning",
          text: "Ser Efedrinat / Xilometazolina: maxim 5 zile! Nu depasi aceasta durata.",
        },
        {
          type: "info",
          text: "Se asteapta 5 minute intre fiecare medicament pentru absorbtie optima.",
        },
      ],
    },
    {
      id: 2,
      title: "Faza 2 – Tratament antibiotic local",
      dayRange: [6, 10],
      color: "#f59e0b",
      colorLight: "#fffbeb",
      steps: [
        {
          label: "Dimineata + Seara",
          medications: [
            {
              name: "Ser fiziologic / Apa de mare",
              activeSubstance: "NaCl 0.9%",
              dose: "2-3 pufuri / nara",
              details: "Lavaj nazal, se sufla nasul dupa",
              waitAfter: 5,
            },
            {
              name: "Gentamicina picaturi nazale",
              activeSubstance: "Gentamicina sulfat",
              dose: "2 picaturi / nara",
              details: "Antibiotic topic nazal",
              waitAfter: 5,
            },
            {
              name: "Biorinil spray nazal",
              activeSubstance: "Neomicina + Polimixina B + Dexametazona",
              dose: "1 puf / nara",
              details: "Antibiotic + antiinflamator topic. Off-label sub 12 ani.",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "warning",
          text: "Biorinil: utilizare off-label sub 12 ani – conform prescriptiei medicului.",
        },
        {
          type: "info",
          text: "In aceasta faza NU se mai foloseste Ser Efedrinat / Xilometazolina.",
        },
      ],
    },
    {
      id: 3,
      title: "Faza 3 – Tratament antiseptic + cortizonic",
      dayRange: [11, 20],
      color: "#22c55e",
      colorLight: "#f0fdf4",
      steps: [
        {
          label: "Dimineata + Seara",
          medications: [
            {
              name: "Ser fiziologic / Apa de mare",
              activeSubstance: "NaCl 0.9%",
              dose: "2-3 pufuri / nara",
              details: "Lavaj nazal, se sufla nasul dupa",
              waitAfter: 5,
            },
            {
              name: "Colargol 0.5%",
              activeSubstance: "Argint coloidal",
              dose: "3 picaturi / nara",
              details: "Antiseptic nazal. Se aplica cu capul pe spate.",
              waitAfter: 5,
            },
            {
              name: "Nasonex 50mcg",
              activeSubstance: "Mometazona furoat",
              dose: "1 puf / nara / zi (doar dimineata)",
              details: "Corticosteroid nazal. Se aplica DOAR dimineata!",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "note",
          text: "Nasonex se aplica DOAR dimineata (1 puf/nara), nu si seara.",
        },
        {
          type: "info",
          text: "Colargol se aplica dimineata SI seara.",
        },
      ],
    },
    {
      id: 4,
      title: "Faza 4 – Intretinere corticoida",
      dayRange: [21, 50],
      color: "#8b5cf6",
      colorLight: "#f5f3ff",
      steps: [
        {
          label: "Dimineata",
          medications: [
            {
              name: "Ser fiziologic / Apa de mare",
              activeSubstance: "NaCl 0.9%",
              dose: "2-3 pufuri / nara",
              details: "Lavaj nazal, se sufla nasul dupa",
              waitAfter: 5,
            },
            {
              name: "Nasonex 50mcg",
              activeSubstance: "Mometazona furoat",
              dose: "1 puf / nara / zi",
              details: "Corticosteroid nazal. Se continua pana la control.",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "info",
          text: "In aceasta faza se aplica doar dimineata: ser fiziologic + Nasonex.",
        },
        {
          type: "note",
          text: "Se continua pana la controlul de la 3 luni.",
        },
      ],
    },
  ],
  oralMeds: [
    {
      name: "Inflamasol",
      dose: "1/2 flacon pe zi",
      schedule: "10 zile pe luna, 3 luni consecutiv",
      details:
        "Antiinflamator natural (enzime proteolitice). Se administreaza pe gura, nu intranazal.",
    },
  ],
  supplements: [
    {
      name: "Moller's (ulei de peste)",
      dose: "1 lingurita/zi (400 UI vitamina D)",
      schedule: "Zilnic, permanent",
      details:
        "Contine Omega-3, Vitamina A, D si E. Se administreaza la masa.",
    },
    {
      name: "Vigantol 1000 UI",
      dose: "1 picatura/zi (1000 UI vitamina D)",
      schedule: "Zilnic, permanent",
      details: "Supliment Vitamina D3. Total vitamina D: 1400 UI/zi (Moller + Vigantol).",
    },
  ],
  sideEffects: [
    {
      medication: "Nasonex 50mcg",
      effect: "Epistaxis (sangerare nazala), uscaciune nazala, cefalee",
      risk: "scazut",
      details:
        "Aprobat FDA pentru copii 2-11 ani. La doza de 1 puf/nara/zi, riscul sistemic este minim. Daca apare sangerare nazala frecventa, consultati medicul.",
    },
    {
      medication: "Biorinil",
      effect: "Ototoxicitate (teoretic), iritatie locala",
      risk: "mediu",
      details:
        "Utilizare off-label sub 12 ani. Durata scurta (5 zile) si aplicarea topica reduc riscul. Urmariti conform prescriptiei.",
    },
    {
      medication: "Gentamicina (intranazal)",
      effect: "Iritatie locala",
      risk: "scazut",
      details:
        "Absorbtia sistemica prin mucoasa nazala este minimala. Riscul de ototoxicitate/nefrotoxicitate este neglijabil la administrare topica nazala pe durata scurta.",
    },
    {
      medication: "Ser Efedrinat 0.5% / Xilometazolina",
      effect: "Rinita medicamentoasa (rebound), tahicardie",
      risk: "scazut",
      details:
        "Limita de 5 zile previne rinita medicamentoasa. Doze corecte pentru varsta. Nu depasiti durata prescrisa.",
    },
    {
      medication: "Colargol 0.5%",
      effect: "Iritatie locala usoara",
      risk: "scazut",
      details:
        "Antiseptic pediatric ORL standard. Utilizat frecvent si bine tolerat.",
    },
    {
      medication: "Vitamina D (1400 UI/zi total)",
      effect: "Hipercalcemie (extrem de rar la aceasta doza)",
      risk: "scazut",
      details:
        "Studiile arata ca doze pana la 10.000 UI/zi sunt sigure pentru copii 0-6 ani. 1400 UI/zi este in limitele recomandarilor.",
    },
  ],
  recommendations: [
    {
      icon: "📅",
      text: "Control ORL la 3 luni de la inceperea tratamentului",
    },
    {
      icon: "🏥",
      text: "Consult alergologie pentru mama (componenta alergica familiala)",
    },
    {
      icon: "💳",
      text: "Card European de Sanatate – de obtinut/reinnoit",
    },
    {
      icon: "💨",
      text: "Aerosoli cu ser fiziologic – la nevoie, pentru mentinerea igienei nazale",
    },
    {
      icon: "⚠️",
      text: "In caz de febra, otalgie (durere de ureche), sau agravare – prezentare de urgenta ORL",
    },
  ],
};

export function getPhaseForDay(day: number): Phase | undefined {
  return treatmentData.phases.find(
    (p) => day >= p.dayRange[0] && day <= p.dayRange[1]
  );
}

export function getPhaseColor(day: number): string {
  const phase = getPhaseForDay(day);
  return phase?.color ?? "#9ca3af";
}
