import video from "../assets/test_video.mp4"
import FlipCard from "../components/FlipCard.tsx"

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center py-10">
     {/* <div className="h-[100px] w-full bg-black">
        <h1 className="text-white text-4xl p-[30px] pl-[120px]">ABOUT</h1>
      </div> 
      No sé si vas a agregar los títulos de cada vista como en el home, se ve medio raro 
      porque el Header es del mismo color
      */} 
      <div className="flex flex-col justify-center items-center gap-10">
        <video className="w-[85%] h-auto" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <p className="w-[80%] text-gray-500 text-justify text-xl ">
          With more than 20 years’ experience in Mauritius and abroad, the Lemon team is made up of people from diverse backgrounds who have built up strong skillsets in a wide range of markets. Talented, inspired, inspiring and… friendly.
        </p>
      </div>

      <div className="w-[90%] h-full mt-20 mb-40 flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-40 gap-20">
        <FlipCard 
          image="/img/img-2.jpeg" 
          name="GUILLAUME GONZAGUE" 
          ocupation="Managing Director & Partner"
          description="Guillaume is driven every day to ensure that Lemon remains an invaluable asset to our clients and his strategic skills have helped grow brand leaders in the FMCG, real estate, airline, tourism, new technology, automotive, financial services, banking and energy fields. Efficient and direct solutions guide Guillaume’s work ethos, but he values highly the exceptional relationships he has built over the years."
          buttonMsg="Send him an email"
        />

        <FlipCard 
          image="/img/img-3.jpeg" 
          name="ZOÉ GONZAGUE" 
          ocupation="Brand Consultant & Partner"
          description="Zoé is passionate about brands. After ten years in top advertising agencies in France and the UK, she moved into the design realm at CB’a Design Solutions, Paris. Zoé will stop at nothing to ensure that her clients’ brands reach the next level and her extensive experience in fast moving consumer goods arenas, (including food, personal care and household products, as well as cosmetics and luxury brands), guarantees this."
          buttonMsg="Send her an email"
        />

        <FlipCard 
          image="/img/img-2.jpeg" 
          name="BERNADETTE MOK" 
          ocupation="Creative Director & Partner"
          description="Bernie, as she is affectionately known, learnt her craft through an early-discovered passion for illustration. It is this same passion that took Bernadette to Paris, where a degree in Graphic Design & Communication set her on the path to becoming Lemon’s Creative Director and responsible, not only for a team of talented creatives, but for a respectable collection of brands in hotel and leisure, property development, banking, insurance and FMCG"
          buttonMsg="Send her an email"
        />

      </div>

      <div className="w-[80%] h-full text-center px-10">
        <h1 className="text-gray-500 text-4xl mb-[20px]">Active listening</h1>
        <p className="text-gray-500 text-justify text-xl" >The words ‘honesty’ and ‘integrity’ are liberally sprinkled across many a corporate website. But to truly offer those values you have to back them up with some tough disciplines. Being transparent, following through on commitments, treating everyone equally, actively listening, continuously improving and taking responsibility. We work on these values every day.</p>
      </div>

    </div>
  )
}

export default About