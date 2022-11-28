import React from 'react';
import Work from '../components/Work';
import { project } from './data';
const Works = () => {

    return (
        <div className="works pd-2">
            <div className="container-fluid">
                <div className="row">
                    {project.map((item, index) => {
                        return (
                            <div className="col-xl-4" key={index}>
                                <Work item={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Works;