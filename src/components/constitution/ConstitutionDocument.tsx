"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown, ChevronRight, Bookmark } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  roman?: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "preamble", label: "Preamble" },
  { id: "article-1", roman: "I", label: "Name & Headquarters" },
  { id: "article-2", roman: "II", label: "Aims & Objectives" },
  { id: "article-3", roman: "III", label: "Membership" },
  { id: "article-4", roman: "IV", label: "Governance & Executive Structure" },
  { id: "article-5", roman: "V", label: "Elections" },
  { id: "article-6", roman: "VI", label: "Financial Provisions" },
  { id: "article-7", roman: "VII", label: "Welfare Policy" },
  { id: "article-8", roman: "VIII", label: "Meetings & Quorum" },
  { id: "article-9", roman: "IX", label: "Code of Conduct" },
  { id: "article-10", roman: "X", label: "Disciplinary Procedures" },
  { id: "article-11", roman: "XI", label: "Access & Interpretation" },
  { id: "article-12", roman: "XII", label: "Amendments" },
  { id: "article-13", roman: "XIII", label: "Dissolution" },
  { id: "certification", label: "Certification & Adoption" },
];

export function ConstitutionDocument() {
  const [activeSection, setActiveSection] = useState<string>("preamble");
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    setMobileTocOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#f8f5ee] py-10 sm:py-14 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Mobile Sticky Table of Contents Accordion */}
        <div className="lg:hidden sticky top-[68px] z-30 mb-8 -mx-6 sm:-mx-10 px-6 sm:px-10 py-3 bg-[#f8f5ee]/95 backdrop-blur-md border-y border-[#1b4d2e]/15 shadow-sm">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between text-left py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1b4d2e]"
            aria-expanded={mobileTocOpen}
            aria-controls="mobile-toc-list"
          >
            <span className="flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Table of Contents</span>
              <span className="text-[#738290] font-normal lowercase tracking-normal">
                ({TOC_ITEMS.find((t) => t.id === activeSection)?.label || "Menu"})
              </span>
            </span>
            <span className="text-sm font-bold text-[#1b4d2e]">
              {mobileTocOpen ? "—" : "+"}
            </span>
          </button>

          {mobileTocOpen && (
            <div
              id="mobile-toc-list"
              className="mt-3 pt-3 border-t border-[#1b4d2e]/10 max-h-[60vh] overflow-y-auto space-y-1 text-sm animate-fadeIn"
            >
              {TOC_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between text-xs sm:text-sm ${
                      isActive
                        ? "bg-[#1b4d2e] text-[#f8f5ee] font-medium"
                        : "text-[#465362] hover:bg-[#1b4d2e]/10 hover:text-[#11161e]"
                    }`}
                  >
                    <span>
                      {item.roman ? `${item.roman}. ` : ""}
                      {item.label}
                    </span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop 2-Column Document Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin">
            <div className="border border-[#1b4d2e]/15 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="pb-4 mb-4 border-b border-[#1b4d2e]/15 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b4d2e]">
                  Table of Contents
                </span>
                <span className="text-[11px] text-[#738290] font-mono">13 Articles</span>
              </div>

              <nav className="space-y-1" aria-label="Constitution Articles Navigation">
                {TOC_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToId(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                        isActive
                          ? "bg-[#1b4d2e] text-[#f8f5ee] font-semibold shadow-sm"
                          : "text-[#465362] hover:text-[#11161e] hover:bg-[#1b4d2e]/5"
                      }`}
                    >
                      <span className="truncate pr-2">
                        {item.roman ? (
                          <span
                            className={`font-mono mr-1.5 ${
                              isActive ? "text-[#e2b960]" : "text-[#738290] group-hover:text-[#1b4d2e]"
                            }`}
                          >
                            {item.roman}.
                          </span>
                        ) : null}
                        {item.label}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e2b960] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Quick Document Tag */}
              <div className="mt-6 pt-4 border-t border-[#1b4d2e]/10 text-[11px] text-[#738290] leading-relaxed">
                Assinman Alumni Network Official Constitution · Verified & Adopted 2025
              </div>
            </div>
          </aside>

          {/* Right Column: Full Constitutional Text */}
          <div className="lg:col-span-8 max-w-3xl space-y-16 sm:space-y-20">
            {/* ── PREAMBLE ─────────────────────────────────────────── */}
            <article id="preamble" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1b4d2e] block mb-1">
                  Introduction
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal tracking-tight">
                  Preamble
                </h2>
              </div>
              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#242f3d] font-normal">
                <p>
                  We, the graduates of Assinman Nursing and Midwifery Training College,
                  united by our shared training, common values, and commitment to excellence in
                  healthcare, do hereby establish the Assinman Alumni Network (AAN).
                </p>
                <p>
                  Recognising the importance of maintaining lifelong bonds between alumni and our
                  alma mater, and being committed to professional development, mutual support,
                  and the advancement of nursing and midwifery practice in Ghana, we adopt this
                  Constitution as the supreme governing document of the Assinman Alumni Network.
                </p>
                <p>
                  This Constitution shall guide the operations, governance, membership, and
                  conduct of the Network in accordance with the highest standards of
                  transparency, accountability, and professional integrity.
                </p>
              </div>
            </article>

            {/* ── ARTICLE I: NAME & HEADQUARTERS ──────────────────── */}
            <article id="article-1" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  01
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article I
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Name & Headquarters
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Name
                  </h3>
                  <p>
                    The name of this organisation shall be the{" "}
                    <strong>Assinman Alumni Network</strong>, hereinafter referred to as &ldquo;the
                    Network&rdquo; or &ldquo;AAN&rdquo;.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Headquarters
                  </h3>
                  <p>
                    The headquarters shall be located at the Assinman Nursing and Midwifery
                    Training College, or at any other location designated by the Executive
                    Committee and ratified by the General Assembly.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Motto
                  </h3>
                  <p className="italic font-editorial text-lg text-[#11161e]">
                    &ldquo;United in Excellence&rdquo;
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Seal and Symbol
                  </h3>
                  <p>
                    The Network shall have an official seal and symbol as approved by the
                    Executive Committee. The seal shall appear on all official documents and
                    correspondence of the Network.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE II: AIMS & OBJECTIVES ────────────────────── */}
            <article id="article-2" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  02
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article II
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Aims & Objectives
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <p>The Network is established to achieve the following aims and objectives:</p>
                <ol className="list-decimal pl-6 space-y-3 marker:font-semibold marker:text-[#1b4d2e]">
                  <li>
                    Maintain a lifelong connection between the Assinman Nursing and Midwifery
                    Training College and its graduates.
                  </li>
                  <li>
                    Support the professional development of members through networking,
                    mentorship, continuing education, and clinical knowledge sharing.
                  </li>
                  <li>
                    Contribute to the growth and development of the alma mater through
                    donations, advocacy, infrastructure support, and community engagement.
                  </li>
                  <li>
                    Promote the welfare and wellbeing of members and their families through
                    structured support programmes.
                  </li>
                  <li>
                    Uphold the reputation and image of Assinman Nursing and Midwifery Training
                    College within Ghana and beyond.
                  </li>
                  <li>
                    Foster unity, solidarity, and professional pride among all graduates of the
                    institution.
                  </li>
                  <li>
                    Advocate for the improvement of nursing and midwifery practice, education,
                    and policy in Ghana.
                  </li>
                  <li>
                    Collaborate with relevant professional bodies, healthcare institutions, and
                    development partners for the advancement of the nursing profession.
                  </li>
                </ol>
              </div>
            </article>

            {/* ── ARTICLE III: MEMBERSHIP ─────────────────────────── */}
            <article id="article-3" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  03
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article III
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Membership
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Eligibility
                  </h3>
                  <p>
                    Membership of the Network shall be open to all individuals who have successfully
                    completed a recognised course of study at Assinman Nursing and Midwifery Training
                    College.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-3">
                    Section 2 — Categories of Membership
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] mb-1.5">
                        Full Member
                      </h4>
                      <p className="text-xs text-[#465362] leading-relaxed">
                        Any graduate who has completed registration and is current with all prescribed dues. Full members shall have full voting rights and access to all benefits.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] mb-1.5">
                        Associate Member
                      </h4>
                      <p className="text-xs text-[#465362] leading-relaxed">
                        Any individual with a significant connection to the college, including former staff or collaborating professionals. Associate members shall not have voting rights.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] mb-1.5">
                        Honorary Member
                      </h4>
                      <p className="text-xs text-[#465362] leading-relaxed">
                        Any distinguished individual conferred honorary membership by a two-thirds majority vote at the AGM. Honorary members shall not pay dues and shall not have voting rights.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Member in Good Standing
                  </h3>
                  <p>
                    A &ldquo;Member in Good Standing&rdquo; is a Full Member who is registered with the
                    Network, current with all fees and dues, and has not been subject to any
                    unresolved disciplinary action.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Rights of Members
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Attend and vote at all General Meetings of the Network.</li>
                    <li>Contest and hold any elective office, subject to eligibility conditions.</li>
                    <li>Access welfare support and benefits as provided under this Constitution.</li>
                    <li>Receive information about the activities and finances of the Network.</li>
                    <li>Raise matters of concern at General Meetings.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 5 — Responsibilities of Members
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Abide by this Constitution and all lawful decisions of the Network.</li>
                    <li>Pay all prescribed dues and levies promptly.</li>
                    <li>
                      Conduct themselves with professionalism, respect, and dignity in all Network
                      activities.
                    </li>
                    <li>Protect and promote the image and reputation of the Network and the alma mater.</li>
                    <li>Support the objectives and programmes of the Network actively.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 6 — Cessation of Membership
                  </h3>
                  <p>
                    A member shall cease to be a member upon written resignation, failure to pay
                    dues for two consecutive years without approved exemption, or upon expulsion
                    following due disciplinary process.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE IV: GOVERNANCE & EXECUTIVE STRUCTURE ────── */}
            <article id="article-4" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  04
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article IV
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Governance & Executive Structure
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-3">
                    Section 1 — Executive Committee
                  </h3>
                  <p className="mb-4">
                    The Network shall be governed by an Executive Committee consisting of the
                    following officers:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "President",
                        desc: "Chief executive and spokesperson, responsible for overall leadership and direction.",
                      },
                      {
                        title: "Vice President",
                        desc: "Supports the President, assumes Presidential duties in absence, and chairs the Welfare Committee.",
                      },
                      {
                        title: "General Secretary",
                        desc: "Manages all correspondence, records, minutes, and the membership database.",
                      },
                      {
                        title: "Financial Secretary",
                        desc: "Responsible for collecting all dues, levies, and contributions and maintaining financial records.",
                      },
                      {
                        title: "Treasurer",
                        desc: "Custodian of the Network's funds and bank accounts, responsible for disbursements and financial reporting.",
                      },
                      {
                        title: "Public Relations Officer",
                        desc: "Manages external communication, public image, and media relations of the Network.",
                      },
                      {
                        title: "Organising Secretary",
                        desc: "Plans, coordinates and manages all meetings, reunions, events, and programmes.",
                      },
                      {
                        title: "Welfare Officer",
                        desc: "Oversees and administers all member welfare and support initiatives.",
                      },
                      {
                        title: "Auditor",
                        desc: "Reviews and verifies all financial records and transactions and reports to the General Assembly.",
                      },
                      {
                        title: "Electoral Commissioner",
                        desc: "Supervises, organises and conducts all elections with independence and impartiality.",
                      },
                    ].map((role, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg shadow-xs"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                          {role.title}
                        </span>
                        <p className="text-xs text-[#465362] leading-relaxed">{role.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Term of Office
                  </h3>
                  <p>
                    All executive officers shall serve a term of two (2) years from the date of
                    their inauguration. An officer may be re-elected for four (4) additional
                    terms. No officer shall hold the same position for more than five consecutive
                    terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Resignation from Office
                  </h3>
                  <p>
                    An executive officer wishing to resign shall submit a written resignation
                    letter to the General Secretary and the President at least thirty (30) days
                    before the effective date of resignation.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Removal from Office
                  </h3>
                  <p>
                    An executive officer may be removed by a two-thirds majority vote at a
                    General Meeting, provided that written notice has been circulated at least
                    fourteen (14) days in advance and the officer has been given an opportunity to
                    address the meeting.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 5 — Succession and Vacancy
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>The Vice President shall assume the role of President if the Presidency becomes vacant.</li>
                    <li>
                      For any other vacancy, the Executive Committee shall appoint a suitable Full
                      Member in good standing to serve in an acting capacity until a by-election is
                      conducted within sixty (60) days.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* ── ARTICLE V: ELECTIONS ─────────────────────────────── */}
            <article id="article-5" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  05
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article V
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Elections
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Electoral Authority
                  </h3>
                  <p>
                    All elections shall be conducted by the Electoral Commissioner, who shall act
                    with full independence and impartiality. The Electoral Commissioner shall not
                    contest any elective position during their tenure.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Eligibility to Contest
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Be a Full Member in good standing for a minimum of one (1) year prior to the election.</li>
                    <li>Not be subject to any unresolved disciplinary action.</li>
                    <li>Meet any additional requirements specified for the particular office.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Nomination Procedures
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Nominations opened at least thirty (30) days before the scheduled election date.</li>
                    <li>Submitted in writing to the Electoral Commissioner on the prescribed nomination form.</li>
                    <li>Supported by the signatures of at least three (3) Full Members in good standing.</li>
                    <li>Accompanied by a written acceptance of nomination signed by the candidate.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Voting Process
                  </h3>
                  <p>
                    Elections shall be conducted by secret ballot at the Annual General Meeting or
                    at a Special General Meeting convened for that purpose. Results shall be
                    recorded in writing and signed by the Electoral Commissioner and at least two
                    independent witnesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 6 — Dispute Resolution
                  </h3>
                  <p>
                    Any complaint arising from the elections process shall be submitted in writing
                    to the Electoral Commissioner within forty-eight (48) hours of the declaration
                    of results. The decision of the independent panel shall be final and binding.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE VI: FINANCIAL PROVISIONS ─────────────────── */}
            <article id="article-6" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  06
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article VI
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Financial Provisions
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Sources of Funds
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Registration fees payable upon joining the Network.</li>
                    <li>Annual membership dues as determined by the General Assembly.</li>
                    <li>Approved levies and special contributions.</li>
                    <li>Voluntary donations from members, friends, and well-wishers.</li>
                    <li>Fundraising activities and events organised by the Network.</li>
                    <li>Grants, endowments, and support from partner organisations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Signatories
                  </h3>
                  <p>
                    The mandatory signatories to the Network&apos;s bank account shall be the{" "}
                    <strong>President</strong>, the <strong>Treasurer</strong>, and the{" "}
                    <strong>General Secretary</strong>. Any two of the three signatories must sign
                    for any transaction to be valid.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-3">
                    Section 4 — Spending Approval Thresholds
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15">
                      <span className="font-editorial text-xl text-[#1b4d2e] block mb-1">
                        ≤ GH₵500
                      </span>
                      <p className="text-xs text-[#465362]">
                        Approved by President &amp; Treasurer only
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15">
                      <span className="font-editorial text-xl text-[#1b4d2e] block mb-1">
                        GH₵501–2,000
                      </span>
                      <p className="text-xs text-[#465362]">
                        Requires full Executive Committee approval
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/70 border border-[#1b4d2e]/15">
                      <span className="font-editorial text-xl text-[#1b4d2e] block mb-1">
                        &gt; GH₵2,000
                      </span>
                      <p className="text-xs text-[#465362]">
                        Requires approval at a General Meeting
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 7 — Financial Year
                  </h3>
                  <p>
                    The financial year of the Network shall run from 1st January to 31st December
                    of each year.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE VII: WELFARE POLICY ──────────────────────── */}
            <article id="article-7" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  07
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article VII
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Welfare Policy
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Eligibility
                  </h3>
                  <p>
                    Only Full Members in good standing for a minimum of six (6) months shall be
                    eligible for welfare packages and support from the Network.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Categories of Welfare Support
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3.5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                        Bereavement Support
                      </strong>
                      <p className="text-xs sm:text-sm text-[#465362]">
                        Upon the death of a Member in good standing, or the death of their spouse,
                        the Network shall provide a bereavement contribution as determined by the
                        Executive Committee.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                        Critical Illness and Incapacitation
                      </strong>
                      <p className="text-xs sm:text-sm text-[#465362]">
                        Support provided when a Full Member is hospitalised for a serious illness
                        or becomes incapacitated.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                        Emergency Medical Support
                      </strong>
                      <p className="text-xs sm:text-sm text-[#465362]">
                        Emergency medical assistance for Full Members facing acute medical crises,
                        subject to availability of funds.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#1b4d2e] block mb-1">
                        Other Support Initiatives
                      </strong>
                      <p className="text-xs sm:text-sm text-[#465362]">
                        Additional welfare initiatives as recommended by the Welfare Committee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ── ARTICLE VIII: MEETINGS & QUORUM ──────────────────── */}
            <article id="article-8" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  08
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article VIII
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Meetings & Quorum
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Annual General Meeting (AGM)
                  </h3>
                  <p>
                    The AGM is the highest decision-making body of the Network and shall be held
                    once every year. Notice shall be communicated to all members at least
                    twenty-one (21) days in advance.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Special General Meeting
                  </h3>
                  <p>
                    May be convened by the President, or by a written petition signed by at least
                    twenty-five percent (25%) of Full Members in good standing. Notice period: at
                    least fourteen (14) days.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Virtual Meetings
                  </h3>
                  <p>
                    Meetings may be held virtually through approved digital platforms when
                    circumstances require, provided that all members are duly notified and given
                    access to the platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 6 — Quorum
                  </h3>
                  <p>
                    The quorum for a General Meeting shall be thirty percent (30%) of all Full
                    Members in good standing. The quorum for an Executive Committee meeting shall
                    be a simple majority of all executive officers.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE IX: CODE OF CONDUCT ─────────────────────── */}
            <article id="article-9" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  09
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article IX
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Code of Conduct
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Standards of Conduct
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>
                      Treat fellow members, officers, and guests with courtesy and respect
                      regardless of rank, gender, background, or opinion.
                    </li>
                    <li>Refrain from any conduct that brings the Network or the alma mater into disrepute.</li>
                    <li>Not engage in any form of discrimination, harassment, bullying, or intimidation.</li>
                    <li>
                      Maintain confidentiality of sensitive Network information and decisions where
                      required.
                    </li>
                    <li>Declare any conflict of interest and recuse themselves from related decisions.</li>
                    <li>Comply with all lawful decisions and resolutions of the Network.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Social Media and Public Communication
                  </h3>
                  <p>
                    Members shall exercise responsibility and professionalism in all public and
                    social media communications relating to the Network. Members shall not make
                    false, defamatory, or harmful statements about the Network, its officers, or
                    alma mater on any platform.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE X: DISCIPLINARY PROCEDURES ───────────────── */}
            <article id="article-10" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  10
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article X
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Disciplinary Procedures
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Grounds for Disciplinary Action
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>Misconduct or behaviour unbecoming of a member of the Network.</li>
                    <li>Violation of this Constitution or any lawful resolution of the Network.</li>
                    <li>Misappropriation or mismanagement of Network funds or resources.</li>
                    <li>Fraudulent, dishonest, or corrupt conduct in connection with Network affairs.</li>
                    <li>Persistent failure to fulfil membership obligations without approved exemption.</li>
                    <li>Actions that bring the Network or the alma mater into disrepute.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Sanctions
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 marker:font-semibold marker:text-[#1b4d2e]">
                    <li>Written warning.</li>
                    <li>Suspension from Network activities for a specified period.</li>
                    <li>Suspension from office for a specified period.</li>
                    <li>Removal from office, subject to ratification by a General Meeting.</li>
                    <li>
                      Expulsion from the Network, subject to ratification by a two-thirds majority
                      at a General Meeting.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 4 — Right of Appeal
                  </h3>
                  <p>
                    A member subject to disciplinary sanction may appeal in writing to the
                    General Assembly within fourteen (14) days of receiving the Executive
                    Committee&apos;s decision. The General Assembly&apos;s decision shall be final
                    and binding.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE XI: ACCESS & INTERPRETATION ──────────────── */}
            <article id="article-11" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  11
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article XI
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Constitution — Access & Interpretation
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 3 — Supremacy of the Constitution
                  </h3>
                  <p>
                    This Constitution is the supreme governing document of the Network. All
                    decisions, policies, and actions of the Network shall be consistent with this
                    Constitution. Any decision or action that contradicts this Constitution shall
                    be null and void.
                  </p>
                </div>
              </div>
            </article>

            {/* ── ARTICLE XII: AMENDMENTS ──────────────────────────── */}
            <article id="article-12" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  12
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article XII
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Amendments
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Amendment Process
                  </h3>
                  <p className="mb-3">
                    This Constitution may be amended at an AGM or Special General Meeting by a
                    two-thirds majority vote of Full Members present and voting, provided that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#1b4d2e]">
                    <li>
                      The proposed amendment has been submitted in writing to the General
                      Secretary at least thirty (30) days before the meeting.
                    </li>
                    <li>
                      The proposed amendment has been circulated to all members at least
                      twenty-one (21) days before the meeting.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* ── ARTICLE XIII: DISSOLUTION ────────────────────────── */}
            <article id="article-13" className="scroll-mt-28">
              <div className="border-b border-[#1b4d2e]/15 pb-4 mb-6 flex items-baseline gap-3">
                <span className="font-editorial text-2xl sm:text-3xl text-[#1b4d2e] font-light">
                  13
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#738290] block mb-0.5">
                    Article XIII
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#11161e] font-normal tracking-tight">
                    Dissolution
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#242f3d]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 1 — Dissolution Process
                  </h3>
                  <p>
                    The Network may be dissolved only by a resolution passed by a three-quarters
                    majority of all Full Members in good standing, at a Special General Meeting
                    convened specifically for that purpose, with at least thirty (30) days notice
                    given to all members.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4d2e] mb-2">
                    Section 2 — Disposal of Assets
                  </h3>
                  <p>
                    In the event of dissolution, all assets and funds remaining after settlement
                    of all obligations shall be transferred to the Assinman Nursing and Midwifery
                    Training College, or to a charitable nursing organisation in Ghana as
                    determined by the dissolution meeting.
                  </p>
                </div>
              </div>
            </article>

            {/* ── CERTIFICATION & ADOPTION ────────────────────────── */}
            <article
              id="certification"
              className="scroll-mt-28 pt-8 border-t-2 border-[#1b4d2e]/20"
            >
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1b4d2e] block mb-1">
                  Official Record
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#11161e] font-normal tracking-tight mb-3">
                  Certification & Adoption
                </h2>
                <p className="text-[15px] sm:text-base text-[#465362] font-medium">
                  This Constitution was duly adopted by the General Assembly of the Assinman Alumni
                  Network.
                </p>
              </div>

              {/* Signatory Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {[
                  { role: "President" },
                  { role: "Vice President" },
                  { role: "General Secretary" },
                  { role: "Treasurer" },
                  { role: "Electoral Commissioner" },
                ].map((officer, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 bg-white/70 border border-[#1b4d2e]/15 rounded-lg shadow-xs"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b4d2e] block mb-6">
                      {officer.role}
                    </span>
                    <div className="border-b border-[#11161e]/30 pb-1 mb-2">
                      {/* Blank signature line for verified official execution */}
                      <div className="h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#738290]">
                      Signature &amp; Date
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
