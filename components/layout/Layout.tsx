import { layoutProps } from '../../types';
import Heads from '../Heads';

const Layout = ({ children, title }: layoutProps) => {
	return (
		<div>
			<Heads title={title} />
			{children}
		</div>
	);
};

export default Layout;
