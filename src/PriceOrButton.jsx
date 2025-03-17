import React from 'react'
import {Typography, Box, Button } from '@mui/material'
import PercentIcon from '@mui/icons-material/Percent'
const PriceOrButton = ({ price, urlProduct }) => {
	return (
		<Box textAlign='center' mt={3}>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<Typography variant='body1'>
					Звичайна ціна:
					<Typography
						variant='body1'
						display='block'
						sx={{
							textDecoration: 'line-through',
							fontSize: 28,
							lineHeight: 1,
						}}
					>
						{price.old} ГРН
					</Typography>
				</Typography>
				<PercentIcon sx={{ px: 2 }} />
				<Typography variant='body1'>
					Ціна за акцією:
					<Typography
						variant='body1'
						display='block'
						sx={{ fontSize: 28, lineHeight: 1, color: '#f99507' }}
					>
						{price.discount} ГРН
					</Typography>
				</Typography>
			</Box>
			<Button
				variant='contained'
				color='warning'
				href={urlProduct}
				sx={{ mt: 3, px: 7, fontSize: 24 }}
			>
				Замовити зараз
			</Button>
		</Box>
	)
}

export default PriceOrButton
