import { services } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Services = () => {
  return (
    <section id="services" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Services I Provide"
          sub="💼 Explore the solutions I offer"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {services.map((service, index) => (
            <GlowCard card={service} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-xl">{service.name}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
