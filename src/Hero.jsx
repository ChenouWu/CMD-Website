import Heroimg from './assets/heroimg.png';
const Hero=()=>{
    return(
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Hi</h1>
                    <p className='.text'>
                        Welcome to my website. 
                        You can see all of my projects in here.
                        Its a Collection of projects.
                    </p>
                </div>
                <div className="img-container">
                    <img src={Heroimg} alt="Women and Browswer"/>
                </div>
            </div>
        </section>
    )
}


export default Hero