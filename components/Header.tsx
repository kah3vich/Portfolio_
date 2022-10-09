import { FC } from 'react';
import Animation from './Animation';
import Navbar from './Navbar';

const Header: FC = () => (
	<header>
		<Animation>
			<Navbar />
		</Animation>
	</header>
);

export default Header;
