import { Card } from "@/app/ui/card";


export default function Insider() {
  return (
    <>
      <p>Insider</p>
      <Card
            className="w-full"
            title="Enhancing Usability of Architect."
            tags={["Web Dev", "React", "UI/UX"]}
            role="Product Designer, @Insider"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            link='/case-study/insider'
          />
    </>
  );
}
