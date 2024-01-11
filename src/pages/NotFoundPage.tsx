import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate('/')
    }

    return (
        <Box
        position={'relative'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        >
            <Typography fontSize={'4em'}>Oops 404!</Typography>
            <Button onClick={() => redirectToHomePage()}>
                Go Home
            </Button>
        </Box>
    )
}

export default NotFoundPage
