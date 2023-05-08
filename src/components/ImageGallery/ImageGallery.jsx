import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { ImageGalleryItemStyled } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGallery = ({ data }) => {
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
  data: PropTypes.array.isRequired,
};
