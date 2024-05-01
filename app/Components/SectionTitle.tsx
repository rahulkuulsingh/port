interface SectionTitleProps {
  title: string;
  desc?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, desc }) => {
  return (
    <>
      <section className="mt-20 mb-12 ">
        <h2 className="section-title text-2xl">{title}</h2>
        <p className="section-description opacity-50	">{desc}</p>
      </section>
    </>
  );
};

export default SectionTitle;
