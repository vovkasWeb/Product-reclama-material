import React from 'react'
import { Typography, Box } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

const DescriptionProduct = () => {
  return (
		<Box sx={{ px: 2, background: '#ffffff' }}>
			<Typography
				variant='body1'
				display='flex'
				sx={{ py: 2, borderBottom: '1px solid #808080' }}
			>
				<DoneIcon
					sx={{
						border: '1px solid #000000',
						borderRadius: '50%',
						marginRight: 2,
					}}
				/>
				Якісний гіпоалергенний матеріал
			</Typography>
			<Typography
				variant='body1'
				display='flex'
				sx={{ py: 2, borderBottom: '1px solid #808080' }}
			>
				<DoneIcon
					sx={{
						border: '1px solid #000000',
						borderRadius: '50%',
						marginRight: 2,
					}}
				/>
				Вирівнювання, приховування недоліків
			</Typography>
			<Typography variant='body1' display='flex' sx={{ py: 2 }}>
				<DoneIcon
					sx={{
						border: '1px solid #000000',
						borderRadius: '50%',
						marginRight: 2,
					}}
				/>{' '}
				Акція: -50 грн на другу покупку
			</Typography>
		</Box>
	)
}

export default DescriptionProduct
