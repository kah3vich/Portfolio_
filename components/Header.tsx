import { FC } from 'react'
import Navbar from './Navbar'
import Animation from './Animation'

const Header: FC = () => (
	<header>
		<Animation>
			<Navbar />
		</Animation>
	</header>
)

export default Header
