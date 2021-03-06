import React, { FC, useEffect, useState } from 'react'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { useTheme } from './hooks/useTheme'

const Theme: FC = () => {
	const { theme, setTheme } = useTheme()

	const handleLightTheme = () => {
		setTheme('light')
	}

	const handleDarkTheme = () => {
		setTheme('dark')
	}

	const [hasMounted, setHasMounted] = useState<boolean>(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null

	return (
		<div className='theme'>
			<button
				className={`buttons buttons__dark ${
					theme == 'dark' ? 'buttons__a' : ''
				}`}
				onClick={handleDarkTheme}
			>
				<BsMoonStars />
			</button>
			<button
				className={`buttons buttons__light ${
					theme == 'light' ? 'buttons__a' : ''
				}`}
				onClick={handleLightTheme}
			>
				<BsSun />
			</button>
		</div>
	)
}

export default Theme
