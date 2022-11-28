import React, {useState} from 'react';
import MyModal from './shared/Modal';

const Work = ({ item }) => {
    const { img, heading, list, preview,imgsList, app} = item;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
        <div className="row project-container">
            {/* ---------- img ------------ */}
            <div className="col-sm-6 img-col">
                <div className="img-overlay">
                    {app? 
                        <a href={app && preview} target="_blank" rel="noopener noreferrer">
                            <img src={img} alt="project" />
                        </a>
                    : 
                    <div onClick={showModal} style={{cursor: 'pointer'}}>
                        <img src={img} alt="project" />
                    </div>
                    }
                </div>
            </div>
            {/* ---------- details ------------ */}
            <div className="col-sm-6 details-col">
                <div className="details-container">
                    <h1>{heading}</h1>
                    <h3>Features</h3>
                    <ul>
                        {list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                    <div className="btn-group">
                        {app? 
                            <a
                            href={preview} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn primary-btn">
                            preview
                        </a>
                        :
                        <button 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn primary-btn" 
                            onClick={showModal}>
                            preview
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
        <MyModal
            isModalVisible={isModalVisible} 
            handleCancel={ handleCancel}
            img={img}
            imgsList={imgsList}
        />
        </>
    );
};

export default Work;
