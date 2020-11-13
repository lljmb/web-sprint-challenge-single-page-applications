import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup
    .string()
    .required('please enter your name')
    .min(2, 'Name must be at least 2 characters long'),
    special: Yup
    .string(),
    size: Yup
    .string()
    .oneOf(['small', 'medium', 'large']),
    sauce: Yup
        .string()
        .oneOf(['original', 'bbq'], 'select a sauce'),
    role: Yup
        .string()
        .oneOf(['pepperoni', 'mushrooms', 'peppers', 'sausage', 'chicken', 'onions', 'bacon', 'pineapple' ], 'role is required'),
    pepperoni: Yup
        .boolean(),
    mushrooms: Yup
        .boolean(),
    peppers: Yup
        .boolean(),
    sausage: Yup
        .boolean(),
    chicken: Yup
        .boolean(),
    onions: Yup
        .boolean(),
    bacon: Yup
        .boolean(),
    pineapple: Yup
        .boolean(),
});