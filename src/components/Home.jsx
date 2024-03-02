import banner from '../assets/banner.png'
import About from './About'
import Features from './Features'
const Home = () => {
    return (
        <div className="md: px-12 p-4 max-w-screen-2xl mx-auto mt-20">
            <div className="gradientBg rounded-xl rounded-br-[80px] md: p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <div>
                        <img src={banner} alt="" className="lg:h-[386px]" />
                    </div>
                    <div className="md:w-3/5">
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>
                            <span className='text-secondary'>Transforming</span> Finance with Fintech</h2>
                        <p className='text-'>Welcome to our finance website, where we bring you the latest insights,
                            tools, and resources to help you navigate the complex world of finance with
                            confidence and clarity.</p>
                        <div className='space-x-5 space-y-7'>
                            <button className= 'py-3 px-8 bg-secondary font-semibold text-white rounded hover: bg-primary transition-all duration-300'>
                                Learn More
                            </button>
                            <button  className='py-3 px-8 bg-secondary font-semibold text-white rounded hover: bg-primary transition-all duration-300'>
                                Discover More
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <About/>
            <Features/>

        </div>


    )
}

export default Home
