// Import logos
import unLogo from "@/assets/logos/united-nations.png";
import worldBankLogo from "@/assets/logos/world-bank.jpeg";
import imfLogo from "@/assets/logos/imf.png";
import whoLogo from "@/assets/logos/who.jpeg";
import jhLogo from "@/assets/logos/johns-hopkins.jpeg";
import faoLogo from "@/assets/logos/fao.jpeg";
import ieaLogo from "@/assets/logos/iea.png";
import ipccLogo from "@/assets/logos/ipcc.webp";
import gcpLogo from "@/assets/logos/global-carbon-project.png";
import censusBureauLogo from "@/assets/logos/us-census-bureau.png";
import unescoLogo from "@/assets/logos/unesco.png";

const logos = [
  { src: unLogo, name: "United Nations", alt: "United Nations Logo" },
  { src: worldBankLogo, name: "World Bank", alt: "World Bank Logo" },
  { src: imfLogo, name: "International Monetary Fund", alt: "IMF Logo" },
  { src: whoLogo, name: "World Health Organization", alt: "WHO Logo" },
  { src: jhLogo, name: "Johns Hopkins University", alt: "Johns Hopkins Logo" },
  { src: faoLogo, name: "Food & Agriculture Organization", alt: "FAO Logo" },
  { src: ieaLogo, name: "International Energy Agency", alt: "IEA Logo" },
  { src: ipccLogo, name: "IPCC", alt: "IPCC Logo" },
  { src: gcpLogo, name: "Global Carbon Project", alt: "GCP Logo" },
  { src: censusBureauLogo, name: "US Census Bureau", alt: "US Census Bureau Logo" },
  { src: unescoLogo, name: "UNESCO", alt: "UNESCO Logo" },
];

export const LogoCarousel = () => {
  return (
    <section className="py-8 px-4 border-y border-border/50 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            All figures are derived from publicly available datasets. No affiliation or endorsement is implied.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background/50 rounded-lg p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain mix-blend-normal"
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
    </section>
  );
};