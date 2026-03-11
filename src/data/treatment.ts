// ── Types ──────────────────────────────────────────────────────────────────────

export interface Medication {
  name: string;
  activeSubstance: string;
  dose: string;
  details?: string;
  waitAfter?: number; // minutes to wait after applying
}

export interface PhaseStep {
  label: string;
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
  color: string;
  colorLight: string;
  prescriptions: string;
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
  risk: "fara" | "scazut" | "mediu" | "ridicat";
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
  clinic: string;
  diagnostic: string;
  diagnosticCode: string;
  diagnosticFull: string;
  totalDays: number;
  totalDaysLabel: string;
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
  doctor: "Dr.med Vlad Postelnicu, Medic Primar ORL",
  clinic: "Centrul Medical SANCONFIND Campina",
  diagnostic: "Rino-adenoidita acuta cu componenta alergica",
  diagnosticCode: "J30.0 / J35.2",
  diagnosticFull:
    "Rino-adenoidita acuta, in remisie sub tratament alt serviciu ORL; cu posibila componenta alergica (mama alergie la Ambrosia, Fan, Iarba gazon, polenuri). Congestie cornete nazale inferioare. Sept nazal median. Rinofaringe — pachet mediu de vegetatii adenoide, neobturant. Timpanograma tip A bilateral — rezultat normal bilateral. Fara adenopatii cervicale palpabile.",
  totalDays: 80,
  totalDaysLabel: "~80 zile",
  consultDate: "7 Martie 2026",
  phases: [
    {
      id: 1,
      title: "Faza 1 — Antibioterapie + Decongestionare",
      dayRange: [1, 5],
      color: "#3a7ca5",
      colorLight: "#e8f1f8",
      prescriptions: "Rp.1 + Rp.2 + Rp.3",
      steps: [
        {
          label: "Dimineata + Seara (de 2 ori pe zi, fiecare nara)",
          medications: [
            {
              name: "Rinodep Spray Dr.Phyto",
              activeSubstance: "Fitoextracte, apa de mare concentrata, mangan",
              dose: "1 puf / nara",
              details:
                "Spray nazal 30ml, flacon I. Se foloseste 2 saptamani, apoi se schimba cu Tonimer / Physiomer 0.9%.",
              waitAfter: 5,
            },
            {
              name: "Ser Efedrinat 0.5%",
              activeSubstance: "Efedrina 0.5%",
              dose: "1 picatura / nara",
              details: "Solutie nazala copii, flacon I. Decongestionant nazal. Timp de 5 zile.",
              waitAfter: 5,
            },
            {
              name: "Gentamicina sulfat EPICO 8mg/ml",
              activeSubstance: "Gentamicina sulfat (antibiotic aminoglicozid)",
              dose: "1 picatura / nara",
              details:
                "Solutie otica/oftalmica 10ml, flacoane II. Se pune intranazal! Dimineata + seara, timp de 10 zile (continua in Faza 2).",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "info",
          text: "Ordine importanta: Respecta cele 5 minute intre fiecare medicament! Rinodep curata nasul, Ser Efedrinat deschide caile, Gentamicina trateaza infectia.",
        },
      ],
    },
    {
      id: 2,
      title: "Faza 2 — Schimbare Decongestionant",
      dayRange: [6, 10],
      color: "#d97706",
      colorLight: "#fef3e2",
      prescriptions: "Rp.1 + Rp.4 + Rp.3",
      steps: [
        {
          label: "Dimineata + Seara (de 2 ori pe zi, fiecare nara)",
          medications: [
            {
              name: "Rinodep Spray Dr.Phyto",
              activeSubstance: "Fitoextracte, apa de mare concentrata, mangan",
              dose: "1 puf / nara",
              details: "Continua la fel ca in Faza 1.",
              waitAfter: 5,
            },
            {
              name: "Olynth / Nasic / Maresyl 0.05%",
              activeSubstance: "Xilometazolina 0.05% (decongestionant simpatomimetic)",
              dose: "1 puf / nara",
              details:
                "Spray nazal copii, flacon I. Inlocuieste Ser Efedrinat! Maxim 5 zile de folosire.",
              waitAfter: 5,
            },
            {
              name: "Gentamicina sulfat EPICO",
              activeSubstance: "Gentamicina sulfat",
              dose: "1 picatura / nara",
              details: "Continua pana la ziua 10 (total 10 zile de Gentamicina).",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "note",
          text: "Schimbare la Nasic: De la ziua 6 se inlocuieste Ser Efedrinat cu Olynth/Nasic/Maresyl. Nu depasi 5 zile de utilizare!",
        },
      ],
    },
    {
      id: 3,
      title: "Faza 3 — Corticoid + Antiseptic",
      dayRange: [11, 20],
      color: "#059669",
      colorLight: "#e6f7f0",
      prescriptions: "Rp.1 + Rp.5 + Rp.6",
      steps: [
        {
          label: "Dimineata + Seara (de 2 ori pe zi, fiecare nara)",
          medications: [
            {
              name: "Rinodep / Tonimer / Physiomer",
              activeSubstance: "Fitoextracte / ser fiziologic 0.9%",
              dose: "1 puf / nara",
              details:
                "Continua Rinodep. Cand se termina (~ziua 14), treci pe Tonimer sau Physiomer ser fiziologic 0.9%.",
              waitAfter: 5,
            },
            {
              name: "Biorinil",
              activeSubstance: "Betametazona 0.5mg/ml (corticosteroid) + Clorhidrat de tetrizolina 1mg/ml (decongestionant)",
              dose: "1 puf / nara",
              details: "Spray nazal, flacon II. Dimineata + seara, 10 zile.",
              waitAfter: 5,
            },
            {
              name: "Colargol 0.5%",
              activeSubstance: "Argint coloidal 0.5% (antiseptic)",
              dose: "1 picatura / nara",
              details:
                "Solutie nazala, flacon I. Dimineata + seara, timp de 10 zile.",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "warning",
          text: "Colargol se pastreaza la FRIGIDER! Pateaza hainele — atentie la administrare!",
        },
        {
          type: "note",
          text: "Biorinil: Prospectul oficial nu recomanda utilizarea la copii sub 12 ani. Medicul l-a prescris la doze mici, pe termen scurt (10 zile). Respectati strict dozajul prescris.",
        },
      ],
    },
    {
      id: 4,
      title: "Faza 4 — Intretinere cu Nasonex",
      dayRange: [21, 80],
      color: "#7c3aed",
      colorLight: "#f0ebfa",
      prescriptions: "Rp.1 + Rp.7 (Nasonex total 60 zile)",
      steps: [
        {
          label: "O singura data pe zi (dimineata)",
          medications: [
            {
              name: "Tonimer / Physiomer",
              activeSubstance: "Ser fiziologic 0.9%",
              dose: "1 puf / nara",
              details: "Ser fiziologic 0.9% pentru igiena nazala zilnica.",
              waitAfter: 5,
            },
            {
              name: "NASONEX 50\u03bcg/doza",
              activeSubstance: "Mometazona furoat 50\u03bcg/doza (corticosteroid nazal)",
              dose: "1 puf / nara, 1 data pe zi",
              details:
                "Spray nazal, 140 doze, flacon III. Timp de 60 de zile total. Agitati flaconul bine inainte de fiecare utilizare.",
            },
          ],
        },
      ],
      alerts: [
        {
          type: "warning",
          text: "Daca apare sangerare nazala — opriti Nasonex cateva zile, apoi reluati.",
        },
        {
          type: "info",
          text: "Daca raceste — opriti Nasonex pe durata racelii, apoi reluati tratamentul.",
        },
        {
          type: "note",
          text: "Monitorizare crestere: Corticosteroizii nazali pe termen lung pot incetini cresterea la copii. Medicul va evalua la controlul de peste 3 luni.",
        },
      ],
    },
  ],
  oralMeds: [
    {
      name: "Rp.8 — Inflamasol Solutie Orala Dr.Phyto",
      dose: "1/2 flacon pe zi (jumatate de flacon)",
      schedule: "10 zile pe luna, 3 luni la rand. Total: 15 flacoane.",
      details:
        "Contine: Lactobacillus acidophilus, bromelaina, saruri de magneziu ale acizilor grasi. Rol antiinflamator si probiotic.",
    },
  ],
  supplements: [
    {
      name: "Rp.9 — Moller Ulei de Peste Vitamina D + Omega 3",
      dose: "5 ml / zi (400 UI/zi)",
      schedule: "Sirop copii, a-la-long (continuu)",
      details: "Contine Omega-3, Vitamina A, D si E.",
    },
    {
      name: "Rp.10 — Vigantol Oil (Colecalciferol)",
      dose: "2 picaturi / zi (500 UI/picatura = 1000 UI/zi)",
      schedule: "Sirop copii, a-la-long (continuu)",
      details:
        "Nota: Moller SI Vigantol se dau simultan — totalul zilnic de Vitamina D va fi ~1400 UI, ceea ce este adecvat.",
    },
  ],
  sideEffects: [
    {
      medication: "Gentamicina Sulfat (intranazal, 10 zile)",
      effect: "Iritatie sau uscaciune nazala (rar), reactii de hipersensibilitate cutanate (foarte rar)",
      risk: "scazut",
      details:
        "Gentamicina este un aminoglicozid cu risc de ototoxicitate si nefrotoxicitate documentat, dar aceste riscuri sunt asociate administrarii sistemice (injectii). Utilizarea intranazala in picaturi reprezinta o absorbtie minima. De urmarit: daca observati eruptii cutanate, mancarimi sau umflaturi, opriti imediat si contactati medicul.",
    },
    {
      medication: "Ser Efedrinat 0.5% (nazal, 5 zile)",
      effect: "Uscaciune nazala temporara, stranut la aplicare, foarte rar agitatie/palpitatii",
      risk: "scazut",
      details:
        "Utilizare scurta (5 zile) si concentratie mica (0.5%). Nu depasiti 5 zile — folosirea prelungita poate cauza congestie rebound (rinita medicamentoasa).",
    },
    {
      medication: "Olynth/Nasic/Maresyl — Xilometazolina 0.05% (5 zile)",
      effect: "Senzatie de arsura/uscaciune nazala, stranut, cefalee (rar), congestie rebound",
      risk: "scazut",
      details:
        "Concentratia de 0.05% este cea pentru copii (2-12 ani). Limitat strict la 5 zile. Nu depasiti NICIODATA 5 zile — folosirea prelungita poate duce la dependenta nazala.",
    },
    {
      medication: "Biorinil — Betametazona + Tetrizolina (10 zile)",
      effect:
        "Iritatie nazala, uscaciune, rebound congestiv, efecte corticosteroidice (foarte putin probabile la doze mici)",
      risk: "mediu",
      details:
        "Prospectul oficial ANM indica: 'Utilizarea acestui medicament la copiii cu varsta sub 12 ani nu este recomandata.' Totusi, medicii ORL il prescriu frecvent off-label la copii pe perioade scurte si doze reduse. Respectati STRICT cele 10 zile prescrise.",
    },
    {
      medication: "Colargol 0.5% — Argint Coloidal (10 zile)",
      effect: "Iritatie locala minora, pateaza hainele",
      risk: "scazut",
      details:
        "Concentratie mica (0.5%), utilizare pe termen scurt (10 zile). Antiseptic clasic folosit in ORL pediatric. Se pastreaza la frigider. Agitati bine inainte de utilizare.",
    },
    {
      medication: "Nasonex — Mometazona Furoat (60 zile)",
      effect:
        "Epistaxis 5-8%, cefalee 3%, iritatie nazala 2%, incetinirea cresterii (monitorizare)",
      risk: "mediu",
      details:
        "Aprobat pentru copii de 3+ ani pentru rinita alergica. La doza de 1 puf/nara/zi = 100μg total, riscurile sunt mici. Durata de 60 zile necesita monitorizare. Opriti temporar daca apare sangerare nazala. Daca raceste, opriti pe durata racelii. La control (3 luni), medicul va evalua daca se continua.",
    },
    {
      medication: "Rinodep Spray Dr.Phyto (2 saptamani)",
      effect: "Fara efecte secundare semnificative",
      risk: "fara",
      details:
        "Produs pe baza de fitoextracte si apa de mare. Rol de curatare si igienizare a mucoasei nazale. Similar cu Tonimer/Physiomer care il inlocuiesc ulterior.",
    },
    {
      medication: "Inflamasol Dr.Phyto (oral, 3 luni)",
      effect: "Disconfort gastric usor (rar)",
      risk: "scazut",
      details:
        "Solutie orala cu Lactobacillus acidophilus, bromelaina si saruri de magneziu. Produs fitoterapeutic cu rol antiinflamator si de echilibrare a florei intestinale. In general foarte bine tolerat la copii.",
    },
    {
      medication: "Moller + Vigantol — Vitamina D & Omega 3 (permanent)",
      effect: "Fara riscuri la dozele prescrise",
      risk: "fara",
      details:
        "Suplimentare standard pentru profilaxia rahitismului. Doza totala de ~1400 UI/zi Vitamina D este in intervalul recomandat (400-1000 UI/zi standard, pana la 2000 UI/zi sigur). Omega 3 suplimentar din Moller benefic pentru dezvoltarea cognitiva.",
    },
  ],
  recommendations: [
    {
      icon: "📅",
      text: "Control la 3 luni sau mai devreme la nevoie. Programare la Dr. Vlad Postelnicu.",
    },
    {
      icon: "🏥",
      text: "Mama → Consult ALERGOLOGIE + tratament de desensibilizare la nevoie. Dr. Monica Schifirnet / MEDIS Campina (Str. Grivitei 53, tel: 0731.319.352 / 0244.373.108) sau Gral Medical Center Ploiesti (Str. Cuza Voda 6, Bl.A8, tel: 0244.596.592).",
    },
    {
      icon: "💊",
      text: "Atentie medicamente antialergice: Aerius, Xyzal, Tamalis etc. trebuie intrerupte cu minim 7 zile inainte de consultul de Alergologie!",
    },
    {
      icon: "🇪🇺",
      text: "Card European de Asigurari de Sanatate — de obtinut. Cont la Trezorerie pentru copil.",
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
