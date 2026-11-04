const WHATSAPP_NUMBER = "917400338525";

export const whatsappUrl = (message = "Hello Casa Brio, I would like to book the villa.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
