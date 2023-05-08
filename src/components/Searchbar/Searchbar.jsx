import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchHeader,
} from './Searchbar.styled';

import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        input: '',
      }}
      onSubmit={(values, { resetForm }) => {
        const normalizeInput = values.input.toLowerCase().trim();
        // if (
        //   contacts.find(contact => contact.name.toLowerCase() === normalizeName)
        // ) {
        //   return alert(`${values.name} is already in contact list`);
        // }

        onSubmit(normalizeInput);
        resetForm();
      }}
    >
      <SearchHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <FcSearch size={40} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="input"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
