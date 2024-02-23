import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
// import { selectBrands } from 'redux/filters/selectors';
import { updateBrand } from 'redux/filters/slice';
import { Form, FormWrapper, SubmitBtn } from './FiltersForm.styled';
import { fetchCars } from 'redux/cars/operations';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f7f7fb',
    color: state.isFocused ? 'rgba(22, 22, 22)' : 'rgba(22, 22, 22, 0.8)',
    borderRadius: '14px ',
    display: 'flex',
    width: '224px',
    height: '48px',
    paddingLeft: '6px',
  }),

  downChevron: provided => ({
    ...provided,
    width: '16px',
    height: '16px',
    padding: '0',
    margin: '0 auto',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),

  input: provided => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0',
    margin: 'auto 0',

    '&::before': {
      content: 'none',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    color: state.isSelected ? '#5255BC' : 'rgba(18, 20, 23, 0.2)',
    '&:hover, &:focus': {
      color: '#5255bc',
    },
    // borderRadius: '14px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.25',
  }),
  placeholder: provided => ({
    ...provided,
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.1',
    color: `#121417`,

    //   padding: '14px 89px 14px 18px'
  }),
};

export const FiltersForm = () => {
  const carMakes = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const options = carMakes.map(option => ({ value: option, label: option }));
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState('');

  const toggleSelect = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };



  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChangeBrand = (option) => {
    setSelectedBrand(option.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBrand(selectedBrand))
    dispatch(fetchCars(selectedBrand))
  };

  return (
    <FormWrapper ref={selectRef}>
      <Form onSubmit={handleSubmit}>
          <Select
            options={options}
            styles={customStyles}
            className={menuIsOpen ? 'menu-open' : ''}
            onChange={handleChangeBrand}
            menuIsOpen={menuIsOpen}
            onMenuOpen={toggleSelect}
            onMenuClose={toggleSelect}
            placeholder="Enter the text"
          />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </Form>
    </FormWrapper>
  );
};
