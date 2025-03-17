import React from 'react'
import { Typography } from '@mui/material'
const BanerTitle = ({title}) => {
	return (
		<Typography
			variant='h5'
			align='center'
			sx={{
				bgcolor: '#f8c8c8',
				py: 2,
				mt: 2,
				borderRadius: 1,
				color: '#FFFFFF',
			}}
		>
			{title}
		</Typography>
	)
}

export default BanerTitle
