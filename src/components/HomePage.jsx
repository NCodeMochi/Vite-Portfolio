import { FiDownload } from "react-icons/fi"
const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full"></div>
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                {/* text */}
                <div className="text-center xl:text-left">
                    <span className="text-xl">Software Developer</span>
                    <h1 className="h1 mb-6">
                        Hello I'm <br />  <span className="text-yellow-600">Neil Morales</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        I'm a fresh graduate with 3 years of experience in the field of programming while in school. I am proficient in various programming languages and technologies. 
                    </p>
                    
                </div>
                {/* photo */}
                <div>Photo</div>
            </div>
        </section>
    )
}
export default Home 