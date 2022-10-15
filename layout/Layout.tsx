import Heads from '../components/Heads';
import { layoutProps } from '../types';

const Layout = ({ children, title }: layoutProps) => {
	return (
		<div>
			<Heads title={title} />
			{children}
		</div>
	);
};

export default Layout;
