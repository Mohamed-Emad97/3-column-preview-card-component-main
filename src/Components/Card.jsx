import React from 'react';
import pic_1 from "../images/icon-luxury.svg";
import pic_2 from "../images/icon-sedans.svg";
import pic_3 from "../images/icon-suvs.svg";

export default function Card() {
  return (
    <>
    <section id="card" className='vh-100'>
        <div className="container py-5">
            <div className="cardBox d-flex align-items-center justify-content-center flex-lg-row flex-md-column flex-sm-column flex-column h-100">
                <div className="block orange p-5 d-flex flex-column">
                    <div className="img">
                        <img src={pic_2} alt="pic-1" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-3'>SEDANS</h2>
                        <p>
                            Choose a sedan for its <br/>
                            affordability and excellent <br/>
                            fuel economy. Ideal for <br/>
                            cruising in the city or on <br/>
                            your next road trip. 
                        </p>
                    </div>
                    <div className="btn align-self-start">
                        <button className='btnMainOrg px-3 p-2 rounded-pill'>Learn More</button>
                    </div>
                </div>
                <div className="block cyan p-5 d-flex flex-column">
                    <div className="img">
                        <img src={pic_3} alt="pic-2" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-3'>SUVS</h2>
                        <p>
                            Take an SUV for it's spacious<br/>
                            interior, power, and<br/>
                            versatility. Perfect for your<br/>
                            next family vacation and<br/>
                            off-road adventures. 
                        </p>
                    </div>
                    <div className="btn align-self-start">
                        <button className='btnMainCyn px-3 p-2 rounded-pill'>Learn More</button>
                    </div>
                </div>
                <div className="block veryDarkCyan p-5 d-flex flex-column">
                    <div className="img">
                        <img src={pic_1} alt="pic-3" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-3'>LUXURY</h2>
                        <p>
                            Cruise in the best cars brands<br/>
                            without the bloated prices.<br/>
                            Enjoy the enhanced comfort<br/>
                            of luxury rental and arrive<br/>
                            in style. 
                        </p>
                    </div>
                    <div className="btn align-self-start">
                        <button className='btnMainDcyn px-3 p-2 rounded-pill'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
