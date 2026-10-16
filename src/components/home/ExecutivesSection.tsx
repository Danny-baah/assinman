import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Executive {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

const executives: Executive[] = [
  {
    name: "Joshua Kpordedzi",
    role: "President",
    image: "/executives/joshua-kpordedzi.jpg",
    imagePosition: "object-[48%_15%]",
  },
  {
    name: "Stella Korliky",
    role: "Electoral Commissioner",
    image: "/executives/stella-korliky.jpg",
    imagePosition: "object-[center_20%]",
  },
  {
    name: "Charity Egyir",
    role: "Secretary",
    image: "/executives/charity-egyir.png",
    imagePosition: "object-[center_18%]",
  },
];

const [president, ...others] = executives;

export function ExecutivesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0e2418] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="space-y-5 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-white/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Interim Leadership
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1]">
              Interim Executive Committee
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed font-light">
              Meet the dedicated leaders steering the network with vision and integrity.
            </p>
          </div>

          <Link
            href="/about/executive-members"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-1 group shrink-0"
          >
            <span>View All Executives</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ── Grid: President featured on left + others on right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* President — large feature */}
          <div className="lg:col-span-5 group relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#1b4d2e]">
              <Image
                src={president.image}
                alt={president.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className={`object-cover ${president.imagePosition || "object-top"} grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/90 via-[#0e2418]/20 to-transparent" />

              {/* Name bottom */}
              <div className="absolute bottom-0 inset-x-0 p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
                  01
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {president.name}
                </h3>
                <p className="text-[11.5px] uppercase tracking-[0.14em] text-[#a0d0a8] font-semibold mt-1">
                  {president.role}
                </p>
              </div>
            </div>
          </div>

          {/* Other members on right */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-white/10">
            {others.map((exec, idx) => (
              <div
                key={exec.name}
                className="group flex items-center gap-6 py-6 first:pt-0"
              >
                {/* Compact portrait */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden bg-[#1b4d2e] shrink-0">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    sizes="96px"
                    className={`object-cover ${exec.imagePosition || "object-top"} grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/40 to-transparent" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">
                    0{idx + 2}
                  </p>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white group-hover:text-[#a0d0a8] transition-colors leading-snug">
                    {exec.name}
                  </h3>
                  <p className="text-[11.5px] uppercase tracking-[0.14em] text-white/45 font-semibold mt-0.5">
                    {exec.role}
                  </p>
                </div>
              </div>
            ))}

            {/* Button to Members Page */}
            <div className="pt-8">
              <Link
                href="/about/executive-members"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm text-[12px] font-bold uppercase tracking-[0.14em] text-white bg-[#1b4d2e] hover:bg-[#153e24] border border-emerald-500/40 transition-all duration-200 active:scale-[0.98] shadow-md group shrink-0"
              >
                <span>View All Members</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
