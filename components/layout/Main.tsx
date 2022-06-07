import Head from 'next/head'
import React from 'react'

interface MainProps {
	children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title></title>
			</Head>
			<>{children}</>
		</>
	)
}

export default Main
