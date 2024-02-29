import GetAllClasses from "../utilities/get_classes.jsx"

const Hero = () => {
    return(
        <section id="hero">
            <GetAllClasses featured="TRUE" display="carousel"/>
        </section>
    )
};

export default Hero;