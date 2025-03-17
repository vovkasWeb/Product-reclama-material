import React from 'react'
import {Box } from '@mui/material'
import noPhoto from '../img/noPhoto.jpeg'

const PhotoProduct = ({img}) => {
  return (
		<Box textAlign='center' mt={0}>
			<img src={img || noPhoto} alt='Product' style={{ width: '100%' }} />
		</Box>
	)
}

export default PhotoProduct
