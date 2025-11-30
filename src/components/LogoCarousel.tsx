"use client";

const logos = [
  { src: "/logos/united-nations.png", name: "United Nations", alt: "United Nations Logo" },
  { src: "/logos/world-bank.jpeg", name: "World Bank", alt: "World Bank Logo" },
  { src: "/logos/imf.png", name: "International Monetary Fund", alt: "IMF Logo" },
  { src: "/logos/who.jpeg", name: "World Health Organization", alt: "WHO Logo" },
  { src: "/logos/johns-hopkins.jpeg", name: "Johns Hopkins University", alt: "Johns Hopkins Logo" },
  { src: "/logos/fao.jpeg", name: "Food & Agriculture Organization", alt: "FAO Logo" },
  { src: "/logos/iea.png", name: "International Energy Agency", alt: "IEA Logo" },
  { src: "/logos/ipcc.webp", name: "IPCC", alt: "IPCC Logo" },
  { src: "/logos/global-carbon-project.png", name: "Global Carbon Project", alt: "GCP Logo" },
  { src: "/logos/us-census-bureau.png", name: "US Census Bureau", alt: "US Census Bureau Logo" },
  { src: "/logos/unesco.png", name: "UNESCO", alt: "UNESCO Logo" },
];

export const LogoCarousel = () => {
  // Duplicate logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 px-4 border-y border-border/50 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            All figures are derived from publicly available datasets. No affiliation or endorsement is implied.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 flex-shrink-0 mx-6 md:mx-8"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background rounded-lg p-2 border border-border/50">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                  />
                </div>
                <p className="text-[10px] md:text-xs text-center text-muted-foreground font-medium max-w-[80px]">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};