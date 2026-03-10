import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";
import ContactPageClient from "@/components/pages/contact/ContactPageClient";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

const ContactPage = async ({ params }: ContactPageProps) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ContactPageClient dict={dict} locale={locale as Locale} />;
};

export default ContactPage;
