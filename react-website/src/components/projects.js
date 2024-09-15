import React from 'react';
import image1 from '../assets/traffixe.png';
import image2 from '../assets/recyclify.png';
import image3 from '../assets/coffeehour.png';

const Project = () => {
    return (
        <section id="project">
            <h1>MY PROJECTS</h1>   
            <div className="container">
                <div className="row">

                    {/* Project 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="portfolio_card">
                            <img src={image1} className="image1" alt="picture"/>
                            <div className="card-body">
                                <h5 className="card-title" id="project1-title">Traffixe</h5>
                                <p className="card-text">An application that provides real-time alerts and safety informations to drivers and pedestrians.</p>
                            </div>
                        </div>
                    </div>
                     
                  
                    {/* Project 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="portfolio_card">
                            <img src={image2} className="image2" alt="picture"/>
                            <div className="card-body">
                                <h5 className="card-title" id="project1-title">Recyclify</h5>
                                <p className="card-text">Recyclify is an app that offers creative recycling ideas and tutorials. </p>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="portfolio_card">
                            <img src={image3} className="image3" alt="picture"/>
                            <div className="card-body">
                                <h5 className="card-title" id="project1-title">Coffee Hour</h5>
                                <p className="card-text">An online destination for exceptional coffee. Explore our menu and join us for a great coffee experience! </p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    );
}

export default Project;
