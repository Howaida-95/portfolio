import React from 'react';
import { Modal, Carousel } from 'antd';

const App = ({isModalVisible, handleCancel, img, imgsList, app}) => {
  return (
    <>
      <Modal visible={isModalVisible} onCancel={ handleCancel} width={1200} centered>
      <Carousel dotPosition="top">
          {imgsList.map((img, index) => <img src={img} alt="img" key={index} style={{width: '600px'}} />)}
      </Carousel>
      </Modal>
    </>
  );
};

export default App;