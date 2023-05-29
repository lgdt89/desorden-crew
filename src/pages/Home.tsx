import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div className='w-full md:h-[600px] items-center flex justify-center'>
                <div className='h-[400px] w-[400px] bg-[#fcb900] rounded-full flex justify-center items-center'>
                    <span className='absolute text-8xl'>No <br />Star-<br />Dom</span>
                </div>
                <div className='ml-8 w-[50%]'>
                    <h1 className='text-[40px] text-yellow-500'>
                        We believe in creativity that awards<br /> businesses with results
                    </h1>
                    <p className='text-[24px]'>
                        Lemon is astrategic, creative and proactive advertising and <br /> communications agency that helps brands and companies grow.<br />
                        We are based in Mauritius – and wherever we find inspiration.
                    </p>
                </div>
            </div>
            <div className='h-[100px] w-full bg-black'>
                <h1 className='text-white text-4xl p-[30px] pl-[120px]'>SERVICES</h1>
            </div>
            <div className='h-[800px] w-full bg-gray-200'>

            </div>
        </div>
    )
}

export default Home