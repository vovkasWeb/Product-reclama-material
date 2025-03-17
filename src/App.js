import React, { useEffect, useState } from 'react'
import { Container, Typography,Box } from '@mui/material'

import LineICon from './components/LineICon'
import BanerTitle from './components/BanerTitle'
import PhotoProduct from './components/PhotoProduct'
import DescriptionProduct from './components/DescriptionProduct'
import PromotionTimer from './components/PromotionTimer'
import PriceOrButton from './PriceOrButton'
function App() {
	const [product, setProduct] = useState(null)
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
	useEffect(() => {
		setTimeout(() => {
			const fetchedData = {
				title: 'Мереживна накидка',
				image: 'https://i.ibb.co/RGk1Czwt/2025-03-17-120437.png',
				description: 'Якісний гіпоалергенний матеріал',
				urlProduct: 'https://www.google.com.ua/?hl=ru',
				price: {
					old: 275,
					discount: 249,
				},
				timer: {
					hours: 14,
					minutes: 55,
					seconds: 15,
				},
			}
			setProduct(fetchedData)
			setTime(fetchedData.timer)
		}, 0)
	}, [])
	if (!product) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Typography variant='h6'>Завантаження...</Typography>
			</Box>
		) 
	}
	return (
		<Container maxWidth='sm' sx={{ bgcolor: '#f8f8f8', p: 2, borderRadius: 2 }}>
			<LineICon />
			<BanerTitle title={product.title} />
			<PhotoProduct img={product.image} />
			<DescriptionProduct />
			<PromotionTimer timeStart={time} />
			<PriceOrButton price={product.price} urlProduct={product.urlProduct} />
		</Container>
	)
}
export default App
