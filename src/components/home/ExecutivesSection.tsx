import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Executive {
  name: string;
  role: string;
  image: string;
}

const executives: Executive[] = [
  {
    name: "Kwame Asante",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ama Boateng",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Efua Owusu",
    role: "Secretary",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kofi Darko",
    role: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

const [president, ...others] = executives;

export function ExecutivesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0e2418] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-5 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-white/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Leadership
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1]">
              Executive Committee
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed">
              Meet the dedicated leaders steering the network with vision and integrity.
            </p>
          </div>

          <Link
            href="/executive-members"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-1 group shrink-0"
          >
            <span>View All Executives</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ── Grid: President featured + three others ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* President — large feature */}
          <div className="lg:col-span-5 group relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#1b4d2e]">
              <Image
                src={president.image}
                alt={president.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/90 via-[#0e2418]/20 to-transparent" />

              {/* Role label top */}
              <div className="absolute top-5 left-5">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-sm text-white"
                  style={{ background: "rgba(122,28,28,0.85)" }}
                >
                  {president.role}
                </span>
              </div>

              {/* Name bottom */}
              <div className="absolute bottom-0 inset-x-0 p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">01</p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {president.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Other three — smaller grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0">
            {others.map((exec, idx) => (
              <div
                key={exec.name}
                className="group lg:flex lg:items-center lg:gap-6 lg:py-6 lg:border-b lg:border-white/8 first:lg:border-t first:lg:border-white/8"
              >
                {/* Compact portrait */}
                <div className="relative w-full sm:aspect-[3/4] lg:w-20 lg:h-20 lg:aspect-auto rounded-sm overflow-hidden bg-[#1b4d2e] shrink-0 mb-4 lg:mb-0">
                  <div className="aspect-[3/4] lg:aspect-auto w-full h-full relative">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 80px"
                      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2418]/40 to-transparent" />
                  </div>
                </div>

                {/* Info */}
                <div className="lg:flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">
                    0{idx + 2}
                  </p>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-white group-hover:text-[#a0d0a8] transition-colors">
                    {exec.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/35 font-semibold mt-0.5">
                    {exec.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
