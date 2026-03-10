"use client";

import { DictProps } from "@/types/constants";
import ContactHeroSection from "./ContactHeroSection";
import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";

const ContactPageClient = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <ContactHeroSection dict={dict} locale={locale} />

      {/* Form + Info — split layout */}
      <section className="relative py-12 md:py-16 bg-linear-to-b from-white via-[#fbfbfd] to-[#f8f9ff]">
        {/* Enhanced Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #d53336 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Floating Orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#d53336] rounded-full opacity-[0.03] blur-[80px] pointer-events-none" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9a84c] rounded-full opacity-[0.02] blur-[100px] pointer-events-none" />

          {/* Decorative Lines */}
          <div className="absolute top-1/3 left-0 w-64 h-px bg-linear-to-r from-transparent via-[#d53336]/10 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-48 h-px bg-linear-to-l from-transparent via-[#c9a84c]/10 to-transparent" />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div
            className={`grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start ${isRtl ? "lg:grid-cols-[380px_1fr]" : ""}`}
          >
            {/* Form side */}
            <div className={isRtl ? "order-2" : "order-1"}>
              <ContactFormSection dict={dict} locale={locale} />
            </div>
            {/* Info side */}
            <div className={isRtl ? "order-1" : "order-2"}>
              <ContactInfoSection dict={dict} locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageClient;
