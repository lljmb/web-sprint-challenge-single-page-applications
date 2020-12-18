// Here goes the schema for the form
import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(3, 'please enter your full name'),
    sauce: yup
    .string()
    .oneOf(['bbq', 'tomato'], 'please select a sauce'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'please select a size'),
    pepperoni: yup.boolean(),
    beef: yup.boolean(),
    mushrooms: yup.boolean(),
    cheese: yup.boolean(),
})

// const formSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email("Must be a valid email address.")
//       .required("Must include email address."),
//     password: Yup
//       .string()
//       .required("Password is Required")
//       .min(6, "Passwords must be at least 6 characters long."),
//     terms: Yup
//       .boolean()
//       .oneOf([true], "You must accept Terms and Conditions")
//       // required isn't required for checkboxes.
//   });