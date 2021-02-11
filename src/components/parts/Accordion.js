import React from 'react';

const Accordion = () => {
    return (
        <div className="row m-0 my-5">
            <div className="col-sm-8 mx-auto col-md-8">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="Details-header">Webinars</h2>
                    </div>
                </div>
                <hr className="hr" />
                <div className="Webinar-accordion-bg shadow-sm p-2">
                    {/* <!-- Accordion 1 --> */}
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-start" data-toggle="collapse" data-target="#accordion1">
                                <div className="p-2">
                                    <h3>Webinar on Full Stack Development</h3>
                                    <p>by Robert Ludlum, CEO, Golddig.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-5">
                                <h6>15/02/2021</h6>
                                <h6>03:00 PM</h6>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-3">
                                <button type="button" className="btn btn-sm Register-Btn text-white">Register Now</button>
                                <button className="btn collapsed accordion-arrow" data-toggle="collapse" data-target="#accordion1" aria-expanded="false" aria-controls="accordion1"></button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Accordion 1 Data --> */}
                    <div id="accordion1" className="collapse" data-parent="#accordion1">
                        <div className="row m-0 mt-2">
                            <div className="col-md-6 webinar-accordion-description-line ">
                                <h5 className="text-purple">Description</h5>
                                <p>Full Stack Development is a rapidly growing domain for developers who wish to upskill by expanding their Portfolio into front-end development, backend development & Database management. With companies focusing more on productivity in the post-Covid era, the shift from individual testers, front end & backend developers, database administrators to a one responsible individual with all the skill sets needed - Full Stack Developer.</p>
                            </div>
                            <div className="col-md-2 Webinar-Mob-image">
                                <img src="/images/Suhadev.webp" className="rounded-circle" alt="" />
                                <h6>Robert Ludlum</h6>
                                <p>CEO, Golddig.in</p>
                            </div>
                            <div className="col-md-4">
                                <p>Robert Ludlum finished his graduation from Stanford and started his own company called Golddig.in which helps students to work on a part-time gig in their free time.</p>
                                <p>He is passionate about coding and won the best coder award in 2019.</p>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Key Takeaways from Webinar</h6>
                            <ol type="1">
                                <li>What is Full Stack Development?</li>
                                <li>Opportunities in Full Stack Development.</li>
                                <li>Scope of work</li>
                                <li>Nuances of Full Stack Development</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- Accordion 1 Data END --> */}
			{/* <!-- Accordion 1 END --> */}
			{/* <!-- Accordion 2 --> */}
                <div className="Webinar-accordion-bg shadow-sm p-2 mt-3">
                    <div className="row ">
                        <div className="col">
                            <div className="d-flex justify-content-start" data-toggle="collapse" data-target="#accordion2">
                                <div className="p-2">
                                    <h3>Webinar on Full Stack Development</h3>
                                    <p>by Robert Ludlum, CEO, Golddig.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-5">
                                <h6>15/02/2021</h6>
                                <h6>03:00 PM</h6>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-3">
                                <button type="button" className="btn btn-sm Register-Btn text-white">Register Now</button>
                                <button className="btn collapsed accordion-arrow" data-toggle="collapse" data-target="#accordion2" aria-expanded="false" aria-controls="accordion2"></button>
                            </div>
                        </div>
                    </div>
                    <div id="accordion2" className="collapse" data-parent="#accordion2">
                        <div className="row m-0 mt-2">
                            <div className="col-md-6 webinar-accordion-description-line ">
                                <h5 className="text-purple">Description</h5>
                                <p>Full Stack Development is a rapidly growing domain for developers who wish to upskill by expanding their Portfolio into front-end development, backend development & Database management. With companies focusing more on productivity in the post-Covid era, the shift from individual testers, front end & backend developers, database administrators to a one responsible individual with all the skill sets needed - Full Stack Developer.</p>
                            </div>
                            <div className="col-md-2 Webinar-Mob-image">
                                <img src="/images/Suhadev.webp" className="rounded-circle" alt="" />
                                <h6>Robert Ludlum</h6>
                                <p>CEO, Golddig.in</p>
                            </div>
                            <div className="col-md-4">
                                <p>Robert Ludlum finished his graduation from Stanford and started his own company called Golddig.in which helps students to work on a part-time gig in their free time.</p>
                                <p>He is passionate about coding and won the best coder award in 2019.</p>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Key Takeaways from Webinar</h6>
                            <ol type="1">
                                <li>What is Full Stack Development?</li>
                                <li>Opportunities in Full Stack Development.</li>
                                <li>Scope of work</li>
                                <li>Nuances of Full Stack Development</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Accordion 2 Data --> */}
			{/* <!-- Accordion 2 END --> */}
			{/* <!-- Accordion 3 --> */}
                <div className="Webinar-accordion-bg shadow-sm p-2 mt-3">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="d-flex justify-content-start" data-toggle="collapse" data-target="#accordion3">
                                <div className="p-2">
                                    <h3>Webinar on Full Stack Development</h3>
                                    <p>by Robert Ludlum, CEO, Golddig.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-5">
                                <h6>15/02/2021</h6>
                                <h6>03:00 PM</h6>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-3">
                                <button type="button" className="btn btn-sm Register-Btn text-white">Register Now</button>
                                <button className="btn collapsed accordion-arrow" data-toggle="collapse" data-target="#accordion3" aria-expanded="false" aria-controls="accordion3"></button>
                            </div>
                        </div>
                    </div>
                    <div id="accordion3" className="collapse" data-parent="#accordion3">
                        <div className="row m-0 mt-2">
                            <div className="col-md-6 webinar-accordion-description-line ">
                                <h5 className="text-purple">Description</h5>
                                <p>Full Stack Development is a rapidly growing domain for developers who wish to upskill by expanding their Portfolio into front-end development, backend development & Database management. With companies focusing more on productivity in the post-Covid era, the shift from individual testers, front end & backend developers, database administrators to a one responsible individual with all the skill sets needed - Full Stack Developer.</p>
                            </div>
                            <div className="col-md-2 Webinar-Mob-image">
                                <img src="/images/Suhadev.webp" className="rounded-circle" alt="" />
                                <h6>Robert Ludlum</h6>
                                <p>CEO, Golddig.in</p>
                            </div>
                            <div className="col-md-4">
                                <p>Robert Ludlum finished his graduation from Stanford and started his own company called Golddig.in which helps students to work on a part-time gig in their free time.</p>
                                <p>He is passionate about coding and won the best coder award in 2019.</p>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Key Takeaways from Webinar</h6>
                            <ol type="1">
                                <li>What is Full Stack Development?</li>
                                <li>Opportunities in Full Stack Development.</li>
                                <li>Scope of work</li>
                                <li>Nuances of Full Stack Development</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- Accordion 3 Data--> */}
			{/* <!-- Accordion 3 END--> */}
			{/* <!-- Accordion 4 --> */}
                <div className="Webinar-accordion-bg shadow-sm p-2 mt-3">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="d-flex justify-content-start" data-toggle="collapse" data-target="#accordion4">
                                <div className="p-2">
                                    <h3>Webinar on Full Stack Development</h3>
                                    <p>by Robert Ludlum, CEO, Golddig.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-5">
                                <h6>15/02/2021</h6>
                                <h6>03:00 PM</h6>
                            </div>
                        </div>
                        <div className="justify-content-end">
                            <div className="mx-3">
                                <button type="button" className="btn btn-sm Register-Btn text-white">Register Now</button>
                                <button className="btn collapsed accordion-arrow" data-toggle="collapse" data-target="#accordion4" aria-expanded="false" aria-controls="accordion4"></button>
                            </div>
                        </div>
                    </div>
                    <div id="accordion4" className="collapse" data-parent="#accordion4">
                        <div className="row m-0 mt-2">
                            <div className="col-md-6 webinar-accordion-description-line ">
                                <h5 className="text-purple">Description</h5>
                                <p>Full Stack Development is a rapidly growing domain for developers who wish to upskill by expanding their Portfolio into front-end development, backend development & Database management. With companies focusing more on productivity in the post-Covid era, the shift from individual testers, front end & backend developers, database administrators to a one responsible individual with all the skill sets needed - Full Stack Developer.</p>
                            </div>
                            <div className="col-md-2 Webinar-Mob-image">
                                <img src="/images/Suhadev.webp" className="rounded-circle" alt="" />
                                <h6>Robert Ludlum</h6>
                                <p>CEO, Golddig.in</p>
                            </div>
                            <div className="col-md-4">
                                <p>Robert Ludlum finished his graduation from Stanford and started his own company called Golddig.in which helps students to work on a part-time gig in their free time.</p>
                                <p>He is passionate about coding and won the best coder award in 2019.</p>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Key Takeaways from Webinar</h6>
                            <ol type="1">
                                <li>What is Full Stack Development?</li>
                                <li>Opportunities in Full Stack Development.</li>
                                <li>Scope of work</li>
                                <li>Nuances of Full Stack Development</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- Accordion 4 DATA --> */}
			{/* <!-- Accordion 4 END --> */}
            </div>
        </div>
    );
};

export default Accordion;