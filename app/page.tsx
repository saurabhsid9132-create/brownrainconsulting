"use client";

import {
  Briefcase,
  Users,
  Rocket,
  BarChart3,
  Wallet,
  Bitcoin,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 bg-white z-50 border-b">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          <h1 className="text-xl font-bold">
            <span className="text-[#8B4513]">Brown</span>rain
          </h1>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-[#39FF14] px-4 py-2 rounded-xl font-semibold"
          >
            Book
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-4">
        <p className="text-gray-500 text-sm mb-3">
          iGaming & Payments Consultant
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Expert Guidance.
          <br />
          <span className="text-[#39FF14]">Proven Results.</span>
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          5+ years experience across iGaming, Crypto & Payments helping
          businesses scale globally.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 bg-[#39FF14] px-6 py-3 rounded-xl font-semibold"
        >
          Book Consultation
        </a>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-10 py-10">
        {[
          { icon: <Briefcase />, text: "5+ Years" },
          { icon: <Users />, text: "6 B2B Partners" },
          { icon: <Rocket />, text: "15 Websites" },
          { icon: <Users />, text: "50+ Team" },
          { icon: <BarChart3 />, text: "80% Retention" },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 text-center hover:shadow transition"
          >
            <div className="flex justify-center mb-2 text-[#39FF14]">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 py-14 px-4 md:px-10">
        <h3 className="text-3xl font-bold text-center mb-10">
          What I Help With
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Briefcase />, title: "iGaming Strategy" },
            { icon: <Users />, title: "Player Retention" },
            { icon: <Wallet />, title: "Payments & Wallets" },
            { icon: <Bitcoin />, title: "Crypto Advisory" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border hover:shadow-lg transition text-center"
            >
              <div className="text-[#39FF14] mb-3 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-2">
                End-to-end consulting with execution support.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-14 px-4 md:px-10 text-center">
        <h3 className="text-3xl font-bold mb-10">How It Works</h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Make Payment",
            "Send Screenshot",
            "Share Availability",
            "Get Scheduled",
          ].map((step, i) => (
            <div key={i} className="border rounded-xl p-6">
              <CheckCircle className="mx-auto text-[#39FF14] mb-3" />
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="bg-gray-50 text-center py-14 px-4 md:px-10"
      >
        <h3 className="text-3xl font-bold mb-4">Consultation Pricing</h3>

        <p className="text-4xl font-bold">500 USDT / hour</p>

        <p className="text-gray-600 mt-3">
          50% prepaid via TRC20 network
        </p>

        <div className="mt-4 bg-white p-4 rounded-xl inline-block border text-sm break-all">
          TCv2c47pg15zryR7z9FPNXpMgJij6jCkHx
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white text-center py-14">
        <h3 className="text-2xl font-bold mb-3">Contact</h3>
        <p>sourabhsid5@gmail.com</p>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/13122212688"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="black"
        >
          <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.4 2 7.8L0 32l8.5-2.2c2.3 1.3 4.9 2 7.5 2 8.6 0 15.6-7 15.6-15.6C31.6 7.3 24.6.4 16 .4z" />
        </svg>
      </a>
    </main>
  );
}