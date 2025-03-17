import React from 'react'
import {Typography, Grid2, Box, } from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
const LineICon = () => {
  return (
		<Grid2 container spacing={2} justifyContent='center'>
			<Grid2 item>
				<Box display='flex' alignItems='center' gap={1}>
					<AccessTimeIcon color='primary' />
					<Typography variant='body2' style={{ fontWeight: 700 }}>
						Новинка
						<Typography variant='body2' display='block'>
							2025 року
						</Typography>
					</Typography>
				</Box>
			</Grid2>
			<Grid2 item>
				<Box display='flex' alignItems='center' gap={1}>
					<CreditCardIcon color='primary' />
					<Typography variant='body2' style={{ fontWeight: 700 }}>
						Оплата
						<Typography variant='body2' display='block'>
							після перевірки
						</Typography>
					</Typography>
				</Box>
			</Grid2>
			<Grid2 item>
				<Box display='flex' alignItems='center' gap={1}>
					<LocalShippingIcon color='primary' />
					<Typography variant='body2' style={{ fontWeight: 700 }}>
						Швидка
						<Typography variant='body2' display='block'>
							доставка
						</Typography>
					</Typography>
				</Box>
			</Grid2>
		</Grid2>
	)
}

export default LineICon
