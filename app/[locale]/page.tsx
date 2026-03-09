import { HeroSection, WhyChooseUsSection } from "@/components/pages/home";
import { TextTicker } from "@/components/ui";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      <HeroSection dict={dict} locale={locale as Locale} />
      <TextTicker texts={dict.hero.texts_ticker} />
      <WhyChooseUsSection dict={dict} />
    </div>
  );
};

export default HomePage;
