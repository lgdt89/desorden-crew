import video from "../assets/test_video.mp4";
import FlipCard from "../components/FlipCard.tsx";
import { crew_data } from "../utils/crew_data.ts";
const About = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-14 py-10 md:py-20">
      <section className="w-[85%] h-full text-center font-secondary">
        <p className="w-full text-black text-3xl md:text-4xl xl:text-5xl font-extralight font-primary pb-5">
          We think holistically and work collaboratively to solve current
          business challenges by helping our clients plan, create, and deliver
          fully integrated experiences.
        </p>
        <p className="w-full text-black text-md font-secondary">
          Our multidisciplinary team of strategists, designers, brand experts,
          and UX/UI specialists bring talent, knowledge, and experience to
          provide a wide range of services.
        </p>
      </section>

      <section className="w-[85%] flex flex-col justify-center items-center gap-10">
        <video className="h-auto" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <div className="h-full">
          <h1 className="text-4xl md:text-5xl font-secondary pb-5">
            Our <b className="font-primary italic">Philosophy</b>
          </h1>
          <h3 className="w-full text-black text-xl font-semibold pb-3">
            We believe that good design can create meaningful connections,
            lasting value and real impact.
          </h3>
          <p className="w-full text-black text-md">
            We work in close colaboration with our clients, helping them to
            frame their biggest problems - and solving them through design. Our
            user-centric, multi-disciplinary approach focuses on creating a
            seamless experience across all digital, physical and communications
            touchpoints.
          </p>
        </div>
      </section>

      <div className="w-[90%] h-full my-10 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
        {crew_data.slice(0, 3).map((crew) => (
          <FlipCard
            key={crew.id}
            image={crew.image}
            name={crew.name}
            ocupation={crew.ocupation}
            description={crew.description}
            buttonMsg="Send him an email"
          />
        ))}
      </div>
      <div className="w-[90%] h-full mt-20 mb-40 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
      {crew_data.slice(3,6).map((crew) => (
          <FlipCard
            key={crew.id}
            image={crew.image}
            name={crew.name}
            ocupation={crew.ocupation}
            description={crew.description}
            buttonMsg="Send him an email"
          />
        ))}
      </div>
      {/* <div className="w-[90%] h-full mt-20 mb-40 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
        <FlipCard
          image="/img/img-2.jpeg"
          name="DANIEL ANGULO"
          ocupation="Graphic Design"
          description="Guillaume is driven every day to ensure that Lemon remains an invaluable asset to our clients and his strategic skills have helped grow brand leaders in the FMCG, real estate, airline, tourism, new technology, automotive, financial services, banking and energy fields. Efficient and direct solutions guide Guillaume’s work ethos, but he values highly the exceptional relationships he has built over the years."
          buttonMsg="Send him an email"
        />

        <FlipCard
          image="/img/img-3.jpeg"
          name="LUIS DÍAZ"
          ocupation="Web Developer"
          description="Zoé is passionate about brands. After ten years in top advertising agencies in France and the UK, she moved into the design realm at CB’a Design Solutions, Paris. Zoé will stop at nothing to ensure that her clients’ brands reach the next level and her extensive experience in fast moving consumer goods arenas, (including food, personal care and household products, as well as cosmetics and luxury brands), guarantees this."
          buttonMsg="Send her an email"
        />
      </div> */}
    </div>
  );
};

export default About;
