"use client";

import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface PharmacyLink {
  name: string;
  url: string;
  price?: string;
}

interface ShoppingItem {
  id: string;
  name: string;
  details: string;
  priceValue: number;
  pharmacies: PharmacyLink[];
}

interface PhaseShoppingList {
  phaseId: number;
  phaseTitle: string;
  color: string;
  items: ShoppingItem[];
}

const shoppingData: PhaseShoppingList[] = [
  {
    phaseId: 1,
    phaseTitle: "Faza 1 — Antibioterapie + Decongestionare (Zilele 1-5)",
    color: "#3a7ca5",
    items: [
      {
        id: "f1-rinodep",
        name: "Rinodep Spray Dr.Phyto (30ml)",
        details: "Spray nazal fitoextracte – 1 puf/nara, 2 saptamani",
        priceValue: 25,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/brand/dr-phyto", price: "~25 lei" },
        ],
      },
      {
        id: "f1-efedrin",
        name: "Ser Efedrinat 0.5% picaturi nazale (10ml, Tis)",
        details: "Decongestionant nazal – 1 picatura/nara, max 5 zile",
        priceValue: 7.5,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/otc-new/sistemul-respirator/solutii-nazale/ser-efedrinat-picaturi-nazale-0-5-10-ml-tis-farmaceutic-p315855", price: "~7.50 lei" },
          { name: "Dr.Max", url: "https://www.drmax.ro/ser-efedrinat-5mg-ml-picaturi-nazale-solutie-0-5-10ml-tis-farmaceutic", price: "~7.50 lei" },
        ],
      },
      {
        id: "f1-genta",
        name: "Gentamicina sulfat EPICO 8mg/ml picaturi (10ml) x2 flacoane",
        details: "Antibiotic topic intranazal – 1 picatura/nara, 10 zile total (Faza 1+2). Pe reteta.",
        priceValue: 36,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/medicamente-cu-reteta/medicamente/gentamicina-sulfat-3-mgml-picaturi-oftalmice-solutie-10-ml-epico-med-p316553", price: "~18 lei/fl" },
          { name: "Dr.Max", url: "https://www.drmax.ro/gentamicin-sulphate-sol-oft-fl-10ml-eipico", price: "~18 lei/fl" },
        ],
      },
    ],
  },
  {
    phaseId: 2,
    phaseTitle: "Faza 2 — Schimbare Decongestionant (Zilele 6-10)",
    color: "#d97706",
    items: [
      {
        id: "f2-rinodep",
        name: "Rinodep Spray Dr.Phyto",
        details: "Se continua de la Faza 1",
        priceValue: 0,
        pharmacies: [],
      },
      {
        id: "f2-xilo",
        name: "Olynth / Nasic / Maresyl 0.05% spray nazal copii",
        details: "Inlocuieste Ser Efedrinat de la ziua 6 – 1 puf/nara, max 5 zile",
        priceValue: 16,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/medicamente-otc/sistemul-respirator/solutii-nazale/olynth-spray-nazal-pentru-copii-0-5-mg-10-ml-johnson-johnson-p325164", price: "~16 lei" },
          { name: "Dr.Max", url: "https://www.drmax.ro/rhinxyl-ha-spray-nazal-pentru-copii-0-05-10ml-terapia", price: "~17.50 lei" },
        ],
      },
      {
        id: "f2-genta",
        name: "Gentamicina sulfat EPICO",
        details: "Se continua de la Faza 1 (pana la ziua 10)",
        priceValue: 0,
        pharmacies: [],
      },
    ],
  },
  {
    phaseId: 3,
    phaseTitle: "Faza 3 — Corticoid + Antiseptic (Zilele 11-20)",
    color: "#059669",
    items: [
      {
        id: "f3-tonimer",
        name: "Tonimer / Physiomer ser fiziologic 0.9% spray nazal",
        details: "Inlocuieste Rinodep cand se termina (~ziua 14)",
        priceValue: 30,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/sistemul-respirator/solutii-nazale/spray-nazal-cu-apa-de-mare-pentru-copii-150-ml-humer-p315973", price: "~30-50 lei" },
          { name: "Dr.Max", url: "https://www.drmax.ro/humer-spray-apa-de-mare-150-ml-urgo", price: "~30-50 lei" },
        ],
      },
      {
        id: "f3-biorinil",
        name: "Biorinil spray nazal (10ml, Thea) x2 flacoane",
        details: "Corticosteroid + decongestionant – 1 puf/nara, 10 zile. Pe reteta.",
        priceValue: 119.9,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/medicamente-cu-reteta/medicamente/biorinil-0-5-mg1-mg-ml-spray-nazal-suspensie-10-ml-thea-p346979", price: "~59.95 lei/fl" },
          { name: "Dr.Max", url: "https://www.drmax.ro/biorinil-0-5-mg-1-mg-ml-spray-nazal-10-ml-thea", price: "~59.95 lei/fl" },
        ],
      },
      {
        id: "f3-colargol",
        name: "Colargol 0.5% solutie nazala (10ml, Renans)",
        details: "Antiseptic nazal – 1 picatura/nara, 10 zile. Se pastreaza la FRIGIDER!",
        priceValue: 11,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/ingrijire-personala/servetele-si-igienizanti/igienizanti-maini/colargol-argint-coloidal-0-5-solutie-10-ml-renans-p358482", price: "~11 lei" },
        ],
      },
    ],
  },
  {
    phaseId: 4,
    phaseTitle: "Faza 4 — Intretinere cu Nasonex (Zilele 21-50+)",
    color: "#7c3aed",
    items: [
      {
        id: "f4-tonimer",
        name: "Tonimer / Physiomer ser fiziologic 0.9%",
        details: "Se continua de la Faza 3",
        priceValue: 0,
        pharmacies: [],
      },
      {
        id: "f4-nasonex",
        name: "Nasonex 50mcg spray nazal (140 doze, MSD) x3 flacoane",
        details: "Corticosteroid nazal – 1 puf/nara/zi, 60 zile total. Pe reteta.",
        priceValue: 92.91,
        pharmacies: [
          { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/medicamente-cu-reteta/medicamente/nasonex-50-mcg-spray-nazal-suspensie-msd-p343204", price: "~30.97 lei/fl" },
          { name: "Dr.Max", url: "https://www.drmax.ro/nasonex-spray-naz-50mcg-doza-140doze-schering-p", price: "~30.97 lei/fl" },
        ],
      },
    ],
  },
];

const permanentItems: ShoppingItem[] = [
  {
    id: "perm-inflamasol",
    name: "Inflamasol solutie orala (10 flacoane, Dr.Phyto)",
    details: "1/2 flacon/zi, 10 zile/luna, 3 luni. Total 15 flacoane (~1.5 cutii/luna x 3 luni)",
    priceValue: 99.75,
    pharmacies: [
      { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/digestie/probiotice-prebiotice-si-simbiotice/inflamasol-solutie-orala-10ml-x-10-dr-phyto-p391211", price: "~66.50 lei/cutie" },
      { name: "Dr.Max", url: "https://www.drmax.ro/inflamasol-solutie-orala-10-flacoane-dr-phyto", price: "~66.50 lei/cutie" },
    ],
  },
  {
    id: "perm-mollers",
    name: "Moller's Omega-3 ulei ficat de cod copii (250ml)",
    details: "5 ml/zi (400 UI vit D) – permanent",
    priceValue: 66.15,
    pharmacies: [
      { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/sistem-nervos/memorie-si-concentrare-copii/omega-3-ulei-ficat-de-cod-cu-aroma-de-tutti-frutti-pentru-copii-250-ml-mollers-p323656", price: "~66.15 lei" },
      { name: "Dr.Max", url: "https://www.drmax.ro/moller-s-cod-liver-oil-omega-3-aroma-tutti-frutti-250-ml-orkla-health", price: "~66.15 lei" },
    ],
  },
  {
    id: "perm-vigantol",
    name: "Vigantol Oil 0.5mg/ml picaturi orale (10ml, Merck)",
    details: "2 picaturi/zi (500 UI/pic = 1000 UI/zi) – pe reteta, permanent",
    priceValue: 25.76,
    pharmacies: [
      { name: "Farmacia Tei", url: "https://comenzi.farmaciatei.ro/medicamente-cu-reteta/medicamente/vigantol-oil-0-5-mgml-picaturi-orale-solutie-10-ml-merck-p308699", price: "~25.76 lei" },
      { name: "Dr.Max", url: "https://www.drmax.ro/vigantol-oil-0-5-mg-ml-picaturi-orale-solutie-10ml-merck", price: "~25.76 lei" },
    ],
  },
];

function CheckboxItem({
  item,
  checked,
  onToggle,
}: {
  item: ShoppingItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded"
        style={{ accentColor: "#3a7ca5" }}
      />
      <div style={{ opacity: checked ? 0.5 : 1, textDecoration: checked ? "line-through" : "none" }}>
        <span className="font-medium" style={{ color: "#1a1a2e" }}>
          {item.name}
        </span>
        <span className="ml-1 text-xs" style={{ color: "#9ca3af" }}>
          – {item.details}
        </span>
        {item.pharmacies.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {item.pharmacies.map((ph) => (
              <a
                key={ph.name}
                href={ph.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium no-underline transition-colors hover:opacity-80"
                style={{
                  backgroundColor: ph.name === "Farmacia Tei" ? "#e0f2fe" : "#fce7f3",
                  color: ph.name === "Farmacia Tei" ? "#0369a1" : "#be185d",
                  textDecoration: "none",
                }}
              >
                {ph.name}
                {ph.price && <span className="font-bold">{ph.price}</span>}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useLocalStorage<string[]>(
    "orl-shopping-checked",
    []
  );

  const toggle = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const allItems = [
    ...shoppingData.flatMap((p) => p.items),
    ...permanentItems,
  ];
  const checkedCount = allItems.filter((i) => checkedItems.includes(i.id)).length;

  const phaseTotal = (items: ShoppingItem[]) =>
    items.reduce((sum, i) => sum + i.priceValue, 0);
  const permanentTotal = phaseTotal(permanentItems);
  const grandTotal = shoppingData.reduce((sum, p) => sum + phaseTotal(p.items), 0) + permanentTotal;

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-2xl p-5 text-left"
        style={{ backgroundColor: "#ffffff", border: "1px solid #e5e0d8" }}
      >
        <div>
          <h2
            className="text-lg font-bold"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-heading)" }}
          >
            Lista de Cumparaturi
          </h2>
          <span className="text-xs" style={{ color: "#9ca3af" }}>
            {checkedCount} din {allItems.length} cumparate &middot; total estimat ~{grandTotal.toFixed(0)} lei
          </span>
        </div>
        <svg
          className="h-5 w-5 shrink-0 transition-transform duration-300"
          style={{
            color: "#9ca3af",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-3 space-y-3">
          <div
            className="rounded-lg p-3 text-xs"
            style={{ backgroundColor: "#eff6ff", color: "#1e40af" }}
          >
            Preturile sunt orientative (martie 2026) si pot varia. Linkurile duc direct la pagina produsului.
          </div>

          {shoppingData.map((phase) => {
            const subtotal = phaseTotal(phase.items);
            return (
              <div
                key={phase.phaseId}
                className="rounded-2xl p-4"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e0d8",
                  borderLeft: `4px solid ${phase.color}`,
                }}
              >
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-sm font-bold" style={{ color: phase.color }}>
                    {phase.phaseTitle}
                  </h3>
                  {subtotal > 0 && (
                    <span className="text-xs font-bold" style={{ color: phase.color }}>
                      ~{subtotal.toFixed(0)} lei
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <CheckboxItem
                      key={item.id}
                      item={item}
                      checked={checkedItems.includes(item.id)}
                      onToggle={() => toggle(item.id)}
                    />
                  ))}
                </ul>
              </div>
            );
          })}

          <div
            className="rounded-2xl p-4"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e0d8",
              borderLeft: "4px solid #d97706",
            }}
          >
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-sm font-bold" style={{ color: "#d97706" }}>
                Medicatie Orala + Suplimente (Pe tot parcursul)
              </h3>
              <span className="text-xs font-bold" style={{ color: "#d97706" }}>
                ~{permanentTotal.toFixed(0)} lei
              </span>
            </div>
            <ul className="space-y-3">
              {permanentItems.map((item) => (
                <CheckboxItem
                  key={item.id}
                  item={item}
                  checked={checkedItems.includes(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-4"
            style={{
              backgroundColor: "#f9fafb",
              border: "2px solid #e5e0d8",
            }}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold" style={{ color: "#1a1a2e" }}>
                Total estimat tratament (achizitie initiala)
              </span>
              <span className="text-lg font-bold" style={{ color: "#1a1a2e" }}>
                ~{grandTotal.toFixed(0)} lei
              </span>
            </div>
            <p className="mt-1 text-xs" style={{ color: "#9ca3af" }}>
              Include toate medicamentele + prima luna de Inflamasol si suplimente. Inflamasol se recumpara lunar (~66.50 lei/cutie, total ~200 lei pe 3 luni).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
