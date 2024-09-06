import Heroimg from './assets/heroimg.png';
import bg from './assets/bg.jpg';

const Hero = () => {
    return (
        <section className="bg-local bg-cover bg-center h-screen"style={{ backgroundImage: `url(${bg})` }} >
            <div className="hero-center text-white text-center flex flex-col justify-center items-center h-full">
                <div className="hero-title">
                    <h1 className="text-4xl font-bold">Hi</h1>
                    <p className="text-lg mt-4 ">
                        Welcome to my website. <br />
                        You can see all of my projects here. <br />
        
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
