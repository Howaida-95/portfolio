import React from 'react';
import img1 from '../assets/images/skill1.png';
import img2 from '../assets/images/skill2.png';
import img3 from '../assets/images/skill3.png';
import img4 from '../assets/images/skill4.png';
import img5 from '../assets/images/skill5.png';
import img6 from '../assets/images/skill6.png';
import img7 from '../assets/images/skill7.png';
import img8 from '../assets/images/skill8.png';
const skillsBg = () => {
    return (
        <div className="col-lg-6 d-none d-md-block">
            <div className="col-center align-items-center align-items-md-end img-container">
                <div className="stage">
                    <div className="control">
                        <div className="imgWrap">
                            <img className="img img1" src={img1} alt="html5" />
                            <img className="img img2" src={img2} alt="css3" />
                            <img className="img img3" src={img3} alt="bs" />
                            <img className="img img4" src={img4} alt="sass" />
                            <img className="img img5" src={img5} alt="js" />
                            <img className="img img6" src={img6} alt="react" />
                            <img className="img img7" src={img7} alt="redux" />
                            <img className="img img8" src={img8} alt="ps" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default skillsBg;