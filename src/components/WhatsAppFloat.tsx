const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in learning more about studying abroad. Could you please provide me with information about your services?";
    const whatsappUrl = `https://wa.me/917396620303?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.482 2.028 7.784L0 32l8.384-2.176A15.927 15.927 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.448 22.688c-.36.996-2.124 1.856-3.084 1.976-.768.096-1.764.144-2.856-.18-0.66-.192-1.512-.444-2.592-.876-4.548-1.812-7.512-6.372-7.74-6.672-.228-.3-1.848-2.46-1.848-4.692s1.164-3.324 1.596-3.78c.432-.456.936-.564 1.248-.564.312 0 .624.012.9.024.288.012.672-.108 1.056.804.396.936 1.344 3.276 1.464 3.516.12.24.204.516.048.816-.156.3-.228.48-.456.744-.228.264-.48.588-.684.792-.228.228-.456.468-.204.924.252.456.936 1.548 2.016 2.508 1.392 1.236 2.544 1.608 2.916 1.8.372.192.588.156.804-.096.216-.252.924-1.08 1.176-1.452.252-.372.492-.312.828-.18.336.132 2.148 1.008 2.52 1.2.372.192.624.288.708.444.096.156.096.888-.264 1.884z"/>
      </svg>
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppFloat;