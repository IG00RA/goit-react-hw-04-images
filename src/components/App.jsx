import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyles';
import { AppStyle } from './App.styled';
import { Button } from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImage } from '../api';
import { useEffect, useState } from 'react';
import { GallerySkeleton } from './GallerySkeleton/GallerySkeleton';

export const App = () => {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    if (userInput !== '') {
      fetchImg(userInput, page);
    }
  }, [userInput, page]);

  const fetchImg = async (input, page) => {
    try {
      setVisibleButton(false);
      setIsLoading(true);
      const getImg = await getImage(input, page);
      setData(prevData => [...prevData, ...getImg.hits]);
      if (getImg.total > 12) {
        setVisibleButton(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const loadMore = () => {
    setPage(page + 1);
  };

  const handleSubmit = input => {
    if (input.trim() === userInput.trim()) {
      return toast.error('Please enter another request', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    if (input.trim().length > 0) {
      setUserInput(input);
      setPage(1);
      setData([]);
    } else {
      toast.error('Please enter your request', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <AppStyle>
      <GlobalStyle />
      <Searchbar onSubmit={handleSubmit} />

      {isLoading ? (
        <>
          <Loader />
          <GallerySkeleton />
        </>
      ) : (
        <ImageGallery data={data} />
      )}
      {visibleButton && <Button onLoadMore={loadMore} />}
      {error && <div>{error}</div>}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AppStyle>
  );
};
