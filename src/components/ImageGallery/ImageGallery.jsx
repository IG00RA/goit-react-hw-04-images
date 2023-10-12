import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { BsCardImageSvg, ImageGalleryStyle } from './ImageGallery.styled';
import { ImageGalleryItemStyled } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGallery = ({ data, status }) => {
  if (status === 'idle') {
    return <BsCardImageSvg />;
  }
  if (data.length !== 0) {
    return (
      <ImageGalleryStyle>
        {data.map(item => (
          <ImageGalleryItemStyled key={item.id}>
            <ImageGalleryItem
              fullUrl={item.largeImageURL}
              imgUrl={item.webformatURL}
              imgAlt={item.tags}
            />
          </ImageGalleryItemStyled>
        ))}
      </ImageGalleryStyle>
    );
  }
};

ImageGallery.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
