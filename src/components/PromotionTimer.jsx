import React, { useState, useEffect } from 'react'
import { Typography, Grid2, Paper } from '@mui/material'

const PromotionTimer = ({ timeStart }) => {
	const [time, setTime] = useState(timeStart)
	
	useEffect(() => {
		const countdown = setInterval(() => {
			setTime(prevTime => {
				let { hours, minutes, seconds } = prevTime

				
				if (seconds > 0) {
					seconds--
				} else {
					if (minutes > 0) {
						minutes--
						seconds = 59
					} else {
						if (hours > 0) {
							hours--
							minutes = 59
							seconds = 59
						} else {
							clearInterval(countdown) 
						}
					}
				}

				return { hours, minutes, seconds }
			})
		}, 1000)
		return () => clearInterval(countdown)
	}, [])

	return (
		<Grid2 container spacing={5} justifyContent='center' mt={2}>
			<Grid2 item>
				<Paper
					sx={{
						p: 1,
						textAlign: 'center',
						minWidth: 60,
						background: '#f04165',
						color: '#ffffff',
					}}
				>
					<Typography variant='h4'>{time.hours}</Typography>
					<Typography variant='caption'>годин</Typography>
				</Paper>
			</Grid2>
			<Grid2 item>
				<Paper
					sx={{
						p: 1,
						textAlign: 'center',
						minWidth: 60,
						background: '#f04165',
						color: '#ffffff',
					}}
				>
					<Typography variant='h4'>{time.minutes}</Typography>
					<Typography variant='caption'>хвилин</Typography>
				</Paper>
			</Grid2>
			<Grid2 item>
				<Paper
					sx={{
						p: 1,
						textAlign: 'center',
						minWidth: 60,
						background: '#f04165',
						color: '#ffffff',
					}}
				>
					<Typography variant='h4'>{time.seconds}</Typography>
					<Typography variant='caption'>секунд</Typography>
				</Paper>
			</Grid2>
		</Grid2>
	)
}

export default PromotionTimer
