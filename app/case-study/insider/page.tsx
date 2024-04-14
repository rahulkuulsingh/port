import { Card } from "@/app/ui/card";
import sakraDesktop from "@/app/public/sakra-desktop/sakra-desktop-2x.png";


export default function Insider() {
  return (
    <>
      <p className="mb-8">Insider Case Study</p>
      <Card
          className="md:col-span-3 md:row-span-1"
          title="Designing 20+ end to end virtual simulations"
          tags={[
            { link: "https://example.com", label: "B2B" },
            { link: "https://example.com", label: "SASS" },
            { link: "https://example.com", label: "Ed-tech" },
            { link: "https://example.com", label: "Mobile App" },
            { link: "https://example.com", label: "Web App" },
          ]}
          role="Product Designer, @Insider"
          projectDate="2021 - 2023"
          team="Sarper, Blazenko, Nour, Cansu, Barim"
          caseLink="/case-study/insider"
          showGrowthMetrics={false}
          cardImage={sakraDesktop.src}
        />
    </>
  );
}
