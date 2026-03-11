import { Facebook, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FixedButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-2 z-50">
      {/* WhatsApp Button */}
      <Link
        href="https://api.whatsapp.com/send?phone=905444644422"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={25}
          height={25}
        />
      </Link>

      {/* Facebook Button */}
      <Link
        href="https://www.facebook.com/H.Broth333ers.coltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Facebook"
      >
        <Facebook size={25} />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:+905444644422"
        className="bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition"
        aria-label="Call"
      >
        <Phone size={25} />
      </Link>
    </div>
  );
};

export default FixedButtons;
