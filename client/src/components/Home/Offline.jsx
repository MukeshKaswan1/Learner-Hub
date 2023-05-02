import React from 'react';
import './Offline.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import pic from '../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg';
import img from '../../assets/checked.svg';
import { IoSparkles } from "react-icons/io5";
const Offline = () => {
    return (
        
        <>
            <div className='container-center' >
                <div className='textimg' >
                    <div className='subtexgtimg' >

                        <div className='imgfull' >
                            <img src={pic} alt='img' />
                        </div>

                        <div className='text' >
                        {/* <FontAwesomeIcon icon={faSparkles} /> */}
                            <h6 className='h6var'> INTRODUCING  <IoSparkles /> </h6>
                            <h2 className='h2var'>Learner Hub Centres for IIT JEE and NEET UG</h2><br />
                            <h4 className='h4var'>Admissions open in Jalandhar, Kapurthala, Varanshi, Sirsa and 20+ other cities!</h4><br />
                            <div className='p1-varient'>
                            <p>
                                <img src={img} alt='img'/> Learn from top educators in your city <br/>
                                <img src={img} alt='img'/> In-person classes & doubt solving <br />
                                <img src={img} alt='img'/> Bonus access to online learning
                            </p>
                            <br />
             


                            </div>
                            <button className="find-btn" inputMode="text" >Find Center</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offline;