import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";
import {
  CTAAboutSection,
  HeroAboutSection,
  MissionVisionValuesSection,
  WhyTrustUsSection,
} from "@/components/pages/about";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

const AboutPage = async ({ params }: AboutPageProps) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      <HeroAboutSection dict={dict} locale={locale as Locale} />
      <MissionVisionValuesSection dict={dict} locale={locale as Locale} />
      <WhyTrustUsSection dict={dict} locale={locale as Locale} />
      <CTAAboutSection dict={dict} locale={locale as Locale} />
    </div>
  );
};

export default AboutPage;
