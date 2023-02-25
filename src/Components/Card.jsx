import React from 'react';
import pic_1 from "../images/icon-luxury.svg";
import pic_2 from "../images/icon-sedans.svg";
import pic_3 from "../images/icon-suvs.svg";

export default function Card() {
  return (
    <>
    <section id="card" className='vh-100'>
        <main className="container py-5">
            <div className="cardBox d-flex align-items-center justify-content-center flex-lg-row flex-md-column flex-sm-column flex-column h-100">
                <div className="block orange p-5 d-flex flex-column">
                    <div className="img ms-5">
                        <img src={pic_2} alt="" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-3 ps-5'>SEDANS</h2>
                        <p className='p-5'>
                            Choose a sedan for its 
                            affordability and excellent 
                            fuel economy. Ideal for 
                            cruising in the city or on 
                            your next road trip. 
                        </p>
                    </div>
                    <div className="btn align-self-start ms-4">
                        <a href='' className='btnMainOrg px-3 p-2 rounded-pill'>Learn More</a>
                    </div>
                </div>
                <div className="block cyan p-5 d-flex flex-column">
                    <div className="img ms-5">
                        <img src={pic_3} alt="" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-3 ps-5'>SUVS</h2>
                        <p className='p-5'> 
                            Take an SUV for it's spacious
                            interior, power, and
                            versatility. Perfect for your
                            next family vacation and
                            off-road adventures. 
                        </p>
                    </div>
                    <div className="btn align-self-start ms-4">
                        <a href='' className='btnMainCyn px-3 p-2 rounded-pill'>Learn More</a>
                    </div>
                </div>
                <div className="block veryDarkCyan p-5 d-flex flex-column">
                    <div className="img ms-5">
                        <img src={pic_1} alt="" className='w-25' />
                    </div>
                    <div className="txt mb-2">
                        <h2 className='my-1 ps-5'>LUXURY</h2>
                        <p className='p-5'>
                            Cruise in the best cars brands
                            without the bloated prices.
                            Enjoy the enhanced comfort
                            of luxury rental and arrive
                            in style. 
                        </p>
                    </div>
                    <div className="btn align-self-start ms-4">
                        <a href='' className='btnMainDcyn px-3 p-2 rounded-pill'>Learn More</a>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}
