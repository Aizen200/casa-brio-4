import { InstagramIcon } from "@/components/icons";

function FloatingInstagram() {
  return (
    <a
      href="https://www.instagram.com/casa_brio_lonavala/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Casa Brio on Instagram"
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.45)] bg-[#0c0a10]/90 text-[#d4af37] shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-colors duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a] md:right-6 md:bottom-6"
    >
      <InstagramIcon className="h-5 w-5" />
    </a>
  );
}
export { FloatingInstagram };
export default FloatingInstagram;
