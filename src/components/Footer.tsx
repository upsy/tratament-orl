"use client";

export default function Footer() {
  return (
    <footer
      className="mt-8 rounded-2xl p-5 text-center text-xs"
      style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", color: "#991b1b" }}
    >
      <p className="font-semibold">Disclaimer</p>
      <p className="mt-1">
        Aceasta aplicatie este un instrument de urmarire a tratamentului prescris de medic.
        Nu inlocuieste consultul medical. Respectati intocmai prescriptia medicului curant.
        In caz de reactii adverse sau agravare, contactati medicul imediat.
      </p>
    </footer>
  );
}
