import "./Landing.css"
import Navbar from '../../components/Navbar';
const LandingPage = () => {
    return (<>
        <Navbar />
        <main>
            <section id="home-sec" className="flexible home-sec">
                <div className="eye-grabber-img">
                    <img src="" alt="" />
                </div>
                <div className="eye-grabber">
                    <h1>Connect,Learn,Recruit in Academia.</h1>
                    <h2>
                    Revolutionizing Academic Collaboration and Recruitment

                    </h2>
                    <button className="btn" onclick="window.location.href = '#contact';">
                        Buy Now
                    </button>
                </div>
            </section>
            <section id="about" className="sec-padding">
                <h3 className="section-heading">About</h3>
                <div className="sec-content-div flexible">
                    <p>
                    In today's fast-paced academic landscape, the need for efficient collaboration 
                    and streamlined recruitment processes is more pronounced than ever. 
                    Enter ScholarSync, a groundbreaking platform designed to bridge the gap
                     between researchers and professors, facilitating seamless connections and 
                     opportunities within the academic community.ScholarSync is a centralized hub 
                     where researchers can showcase their expertise, areas of interest, and 
                     qualifications through detailed profiles. By providing a comprehensive 
                     overview of their research background, scholars can attract the attention 
                     of professors seeking talented individuals for fellowships, research positions,
                     and collaborative projects.

                    </p>
                    <img src="" alt="" />
                </div>
            </section>
            
            <section id="connect" className="sec-padding">
                <h3 className="section-heading">Connect</h3>
                <div className="sec-content-div">
                    <div className="bars">
                        <div className="icon-container">
                            <img src="https://i.ibb.co/w6H542X/Fresh.png" alt="" />
                        </div>
                        <div className="txt-container">
                            <h5>Fresh</h5>
                            <p>We deliver fresh apples with a 100% guarantee of freshness.</p>
                        </div>
                    </div>
                    <div className="bars">
                        <div className="icon-container">
                            <img src="https://i.ibb.co/FKNq4Qr/delivered.png" alt="" />
                        </div>
                        <div className="txt-container">
                            <h5>Fast</h5>
                            <p>
                                We deliver your orders as fast as possible, delivery procedure
                                begins as soon as apple is plucked from tree.
                            </p>
                        </div>
                    </div>
                    <div className="bars">
                        <div className="icon-container">
                            <img src="https://i.ibb.co/HHQK1wV/happy.png" alt="" />
                        </div>
                        <div className="txt-container">
                            <h5>Satisfying</h5>
                            <p>
                                We guarantee 100% customer satisfaction. We do our best to make
                                your purchase experience smooth. But if we mess up somehow you
                                will get compensated for every inconvenience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="sec-padding" id="contact">
                <h3 className="section-heading">Contact Us</h3>
                <div className="sec-content-div flexible">
                    <h6>To make an order or just to know more contact us :</h6>
                    <form
                        id="form"
                        action="https://www.freecodecamp.com/email-submit"
                        method="POST"
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email Address"
                            required
                        />
                        <input type="submit" className="btn" id="submit" value="Know More" />
                    </form>
                </div>
            </section>
        </main>
        <footer>
            Created by
            <a href="#">Mohd Shariq</a>
        </footer>

    </>
    )
}

export default LandingPage;