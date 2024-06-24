
import { render,fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

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

test('Tests for testing all parts of the form are displayed of the form are correct', () => {
  render
      (<MemoryRouter>
        <Booking times= {true} />
      </MemoryRouter>
      );

    expect(screen.getByLabelText(/Enter Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
})

const mockFormik = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  handleBlur: jest.fn(),
  values: {
    name: '',
    date: '',
    time: '',
    guests: '0',
    occasion: ''
  },
  touched: {},
  errors: {}
};

test('Test entering inputs on the form', () => {
  mockFormik.touched = {
    name: true,
    date: true,
    time: true,
    guests: true,
    occasion: true
  };
  mockFormik.errors = {
    name: 'Required',
    date: 'Required',
    time: 'Required',
    guests: 'At least 1 guest'
  };

  render
  (<MemoryRouter>
      <BookingForm formik={mockFormik}/>
  </MemoryRouter>)

  // Check if validation errors are displayed
  // expect(screen.getByText(/Required/i)).toBeInTheDocument();
  expect(screen.getByText(/At least 1 guest/i)).toBeInTheDocument();
})

//Add a test to see if all text in correctly rendering on form
//Add test that Booking Form can be submitted properly

it('calls handleChange and handleBlur on input change and blur', () => {
  render(<MemoryRouter>
            <BookingForm formik={mockFormik}/>
         </MemoryRouter>);

  const nameInput = screen.getByLabelText(/Enter Name/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.blur(nameInput);

  expect(mockFormik.handleChange).toHaveBeenCalledTimes(1);
  expect(mockFormik.handleBlur).toHaveBeenCalledTimes(1);
});

// it('calls handleSubmit on form submission', () => {
//   render(<MemoryRouter>
//           <BookingForm formik={mockFormik} />
//         </MemoryRouter>);

//   const form = screen.getByRole('form');
//   fireEvent.submit(form);

//   expect(mockFormik.handleSubmit).toHaveBeenCalledTimes(1);
// });

describe('BookingForm', () => {
  it('submits the form with valid inputs', async () => {
    // Create a real Formik instance
    render(
      <MemoryRouter>
        <Formik
          initialValues={{
            name: '',
            date: '',
            time: '',
            guests: '1',
            occasion: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            date: Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            guests: Yup.number().required('Required').min(1, 'At least 1 guest'),
            occasion: Yup.string()
          })}
          onSubmit={(values) => {
            console.log('Form submitted with values:', values);
          }}
        >
          {formik => <BookingForm formik={formik} />}
        </Formik>
      </MemoryRouter>
    );

    // Simulate user input using getByLabelText (by id)
    const nameInput = screen.getByLabelText('Enter Name');
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.submit(screen.getByText(/Make Your reservation/i));

    // Check if values were updated in the Formik state
    expect(nameInput.value).toBe('John Doe');
    expect(dateInput.value).toBe('2023-12-25');
    expect(timeInput.value).toBe('18:00');
    expect(guestsInput.value).toBe('4');
    expect(occasionInput.value).toBe('Birthday');
  });
});