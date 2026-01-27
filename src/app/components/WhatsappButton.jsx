import { WhatsAppLink } from "@/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WhatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
        <img
          src="/whatsapp_logo.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
}
