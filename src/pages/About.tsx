import video from "../assets/test_video.mp4"
import FlipCard from "../components/FlipCard.tsx"

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-14 py-10 md:py-20">
     
      <section className="w-[85%] h-full text-center font-secondary">

        <p className="w-full text-black text-3xl md:text-4xl xl:text-5xl font-extralight font-primary pb-5">
        We think holistically and work collaboratively to solve current business challenges by helping our clients plan, create, and deliver fully integrated experiences.
        </p>
        <p className="w-full text-black text-md font-secondary">
        Our multidisciplinary team of strategists, designers, brand experts, and UX/UI specialists bring talent, knowledge, and experience to provide a wide range of services.
        </p>

      </section>

      <section className="w-[85%] flex flex-col justify-center items-center gap-10">

        <video className="h-auto" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        {/*<p className="w-[80%] text-gray-500 text-justify text-xl ">
          With more than 20 years’ experience in Mauritius and abroad, the Lemon team is made up of people from diverse backgrounds who have built up strong skillsets in a wide range of markets. Talented, inspired, inspiring and… friendly.
        </p>*/}

        <div className="h-full">
          <h1 className="text-4xl md:text-5xl font-secondary pb-5">Our <b className="font-primary italic">Philosophy</b></h1>
          <h3 className="w-full text-black text-xl font-semibold pb-3">
            We believe that good design can create meaningful connections, lasting value and real impact.
          </h3>
          <p className="w-full text-black text-md">
            We work in close colaboration with our clients, helping them to frame their biggest problems - and solving them through design. Our user-centric, multi-disciplinary approach focuses on creating a seamless experience across all digital, physical and communications touchpoints.
          </p>
        </div>

      </section>

      <div className="w-[90%] h-full my-10 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
        <FlipCard 
          image="/img/DANIELA.png" 
          name="DANIELA ROJAS" 
          ocupation="Creative Director"
          description="Guillaume is driven every day to ensure that Lemon remains an invaluable asset to our clients and his strategic skills have helped grow brand leaders in the FMCG, real estate, airline, tourism, new technology, automotive, financial services, banking and energy fields. Efficient and direct solutions guide Guillaume’s work ethos, but he values highly the exceptional relationships he has built over the years."
          buttonMsg="Send him an email"
        />

        <FlipCard 
          image="/img/NOGUERA.png" 
          name="LUIS NOGUERA" 
          ocupation="Graphic Design Manager"
          description="Zoé is passionate about brands. After ten years in top advertising agencies in France and the UK, she moved into the design realm at CB’a Design Solutions, Paris. Zoé will stop at nothing to ensure that her clients’ brands reach the next level and her extensive experience in fast moving consumer goods arenas, (including food, personal care and household products, as well as cosmetics and luxury brands), guarantees this."
          buttonMsg="Send her an email"
        />

        <FlipCard 
          image="/img/MILGREDDY.png" 
          name="MILGREDDY PÉREZ" 
          ocupation="Communications Manager"
          description="Bernie, as she is affectionately known, learnt her craft through an early-discovered passion for illustration. It is this same passion that took Bernadette to Paris, where a degree in Graphic Design & Communication set her on the path to becoming Lemon’s Creative Director and responsible, not only for a team of talented creatives, but for a respectable collection of brands in hotel and leisure, property development, banking, insurance and FMCG"
          buttonMsg="Send her an email"
        />

      </div>
      <div className="w-[90%] h-full mt-20 mb-40 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
        <FlipCard 
          image="/img/DAVID.png" 
          name="DAVID VEGAS" 
          ocupation="Motion Graphics"
          description="Guillaume is driven every day to ensure that Lemon remains an invaluable asset to our clients and his strategic skills have helped grow brand leaders in the FMCG, real estate, airline, tourism, new technology, automotive, financial services, banking and energy fields. Efficient and direct solutions guide Guillaume’s work ethos, but he values highly the exceptional relationships he has built over the years."
          buttonMsg="Send him an email"
        />

        <FlipCard 
          image="/img/img-3.jpeg" 
          name="LENIN BENITEZ" 
          ocupation="Administrative Coordinator"
          description="Zoé is passionate about brands. After ten years in top advertising agencies in France and the UK, she moved into the design realm at CB’a Design Solutions, Paris. Zoé will stop at nothing to ensure that her clients’ brands reach the next level and her extensive experience in fast moving consumer goods arenas, (including food, personal care and household products, as well as cosmetics and luxury brands), guarantees this."
          buttonMsg="Send her an email"
        />

        <FlipCard 
          image="/img/img-2.jpeg" 
          name="ROMARIO BARRERA" 
          ocupation="Graphic Design
          "
          description="Bernie, as she is affectionately known, learnt her craft through an early-discovered passion for illustration. It is this same passion that took Bernadette to Paris, where a degree in Graphic Design & Communication set her on the path to becoming Lemon’s Creative Director and responsible, not only for a team of talented creatives, but for a respectable collection of brands in hotel and leisure, property development, banking, insurance and FMCG"
          buttonMsg="Send her an email"
        />

      </div>
      <div className="w-[90%] h-full mt-20 mb-40 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
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

      

      </div>

    </div>
  )
}

export default About