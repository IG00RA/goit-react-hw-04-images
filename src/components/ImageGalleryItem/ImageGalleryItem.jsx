import PropTypes from 'prop-types';
import { ImageGalleryImageStyled } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ imgAlt, imgUrl, fullUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ImageGalleryImageStyled
        alt={imgAlt}
        src={imgUrl}
        onClick={() => toggleModal()}
      />
      {showModal && (
        <Modal src={fullUrl} alt={imgAlt} onClose={toggleModal}></Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  fullUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
