import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Northern Generator services, emergency response posture, rentals, maintenance, ATS work, and project support.",
  alternates: { canonical: "/faq" },
};

const faqs = services.flatMap((service) => service.faqs);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Practical answers for common emergency power questions.</h1>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
