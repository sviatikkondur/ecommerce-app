/* eslint-disable no-useless-escape */
import React from 'react'
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import lodash from 'lodash'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector'
import { actions } from '../../../store/cart/cartSlice'
import emailjs from '@emailjs/browser';

const phoneNumberRules = /^\+?3?8?(0\d{9})$/;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string()
    .required('Name is required'),
  phone: yup
  .string()
  .matches(phoneNumberRules, { message: "Invalid Phone Number!" })
  .required('Phone number is required'),
});

type Props = {
  handleSuccess: () => void;
};

export const CheckoutForm: React.FC<Props> = ({ handleSuccess }) => {
  const { cart } = useAppSelector(state => state.cartSlice);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const order = {
        orderNumber: lodash.random(1000000000, 9999999999),
        buyerPersonalData: {
          name: values.name,
          email: values.email,
          phoneNumber: values.phone,
        },
        products: cart
      };

      try {
        const emailjsServiceId = 'service_playw7r';
        const emailjsTemplateId = 'template_c1tepye';
        const emailjsUserId = '2JiIu5NLAB8j-7b_T';

        await emailjs.send(emailjsServiceId, emailjsTemplateId, {
          manager_name: 'Sales manager',
          order_number: order.orderNumber,
          buyer_name: values.name,
          buyer_email: values.email,
          buyer_phone: values.phone,
        }, emailjsUserId);

        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
      }

      console.log(order);
      dispatch(actions.clear());
      handleSuccess();
    },
  });

  return (
    <>
      <Typography
        variant='h5' 
        fontWeight={600}
        marginTop={2}
        textAlign={isTabletScreen ? 'center' : 'left'}
      >
        Your Data:
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: isTabletScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          alignSelf: 'center',
          gap: 20,
          width: isSmallScreen ? '100%' : isTabletScreen ? '500px' : '100%',
          height: isTabletScreen ? 'max-content' : 76,
          marginTop: '16px'
        }}
      >
        <Box
          display={'flex'}
          gap={2}
          flexDirection={isTabletScreen ? 'column' : 'row'}
          width={'100%'}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Box>
        <Box
          display={'flex'}
          height={'100%'}
          alignItems={'center'}
          alignSelf={'center'}
        >
          <Button 
            color="primary" 
            variant="contained" 
            type="submit"
            size='large'
            sx={{
              paddingInline: 5,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
          Buy
          </Button>
        </Box>
      </form>
    </>
  )
}
