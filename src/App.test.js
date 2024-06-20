
import { render,fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import BookingForm from './components/FeildComps/BookingForm';
import Booking from './pages/Booking';

import {fetchAPI} from "./components/reducers/mockAPI";



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <Booking/>
    </MemoryRouter>
    );

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('Tests that valid times are available when using fetchAPI', () => {
  render
    (<MemoryRouter>
      <Booking times= {false} />
    </MemoryRouter>
    );

  const dateSelect = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);

  const day = new Date(dateSelect.value);
  console.log('date');

  const expectedOptions = fetchAPI(day);
  // Check if the select element exists
  expect(timeSelect).toBeInTheDocument();

  // Check if each expected option is in the select element
  const options = Array.from(timeSelect.options);
  const optionValues = options.map(option => option.value);
  // console.log(optionValues);
  expectedOptions.forEach(optionValue => {
    expect(optionValues).toContain(optionValue);
  });
})

test('Tests that update times are working', () => {
  render
      (<MemoryRouter>
        <Booking times= {true} />
      </MemoryRouter>
      );

  const timeSelect = screen.getByLabelText(/choose time/i);

  // Check if the select element exists
  expect(timeSelect).toBeInTheDocument();

  // Define the expected time options
  const expectedOptions = [
    "7:00",
    "8:00",
    "9:00",
    "0:00",
    "1:00",
    "2:00"
  ];

  // Check if each expected option is in the select element
  const options = Array.from(timeSelect.options);
  const optionValues = options.map(option => option.value);
  console.log(optionValues);
  expectedOptions.forEach(optionValue => {
    expect(optionValues).toContain(optionValue);
  });
})


//Add a test to see if all text in correctly rendering on form

//Add test that Booking Form can be submitted properly