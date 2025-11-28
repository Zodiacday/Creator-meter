import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
            Data sourced from leading global institutions
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            All figures are derived from publicly available datasets. No affiliation or endorsement is implied.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Card className="p-4 h-full flex flex-col items-center justify-center bg-card/50 hover:bg-card transition-colors border-border/50">
                  <div className="w-full aspect-square flex items-center justify-center mb-3">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    {logo.name}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};