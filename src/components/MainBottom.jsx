import jill from '../assets/images/headshot_JillZarcone.jpeg'


const MainBottom = () => {
    return(
        <section>
            <div>
                <h2>About Us</h2>
                <p>Playhouse Theatre Academy is dedicated to offering professional theatre programs for emerging artists of all ages and abilities. All students will learn from expert faculty who will share their exceptional abilities and love of theatre. Managed by Playhouse Theatre Group, Inc., Playhouse Theatre Academy is able to provide access to professional artists, productions and opportunities through our affiliation with Playhouse on Park. Whether your goal is to be a professional actor or to explore your imagination and creativity in a new way, the Playhouse Theatre Academy is a home for quality theatre instruction.</p>

                <blockquote>Need-based scholarships are available! To learn more, please email Education@playhousetheatregroup.org</blockquote>
            <h2>Multiple Locations</h2>
            <p>Education is offered in multiple locations, dependent on scheduling availability. In addition to Playhouse on Park, we conduct classes as Simsmore Square in Simsbury, CT and the 224 Ecospace in Hartford, CT. Learn more about our locations.</p>
            </div>
            <div>
                <h2>Meet our Staff</h2>
                <img className="floating" src={jill} alt="Jill Zarcone Headshot" />
                <h3>JILL ZARCONE</h3>
                <p className="bold italic">Director of Education</p>
                <button>Email Jill</button>

                <p>Jill Zarcone hails from Tolland, CT and besides being a teaching artist, she is also the Education Coordinator for Playhouse Theatre Academy! She brings almost seventeen years of experience in performance, scene studies, auditioning techniques, Shakespeare, comedy, puppetry, playwriting and directing to Playhouse and loves working with students of all ages. She is a BFA Performance graduate of Eastern CT State University and has MFA accreditation from the University of North Carolina with a focus on Theatre for Youth. She has worked with previous theatres such as Hartford Children's, Flock Theatre, Newington Children's, Little Theatre of Manchester, Windham Theatre Guild and the Greensboro City Arts Drama Center and also had the amazing experience of interning with puppeteers from Jim Henson's Co for two summers! When time permits she loves to read, bake, write, and go on adventures with her husband, son and her dog, fittingly named Adventure.</p>

                <p>Our teaching artists provide the highest quality instruction to our students. Read about them here.</p>
            </div>
        </section>
    )
};

export default MainBottom;