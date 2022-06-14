import Heads from '../Heads'
import { layoutProps } from '../../type'

const Layout = ({ children, title }: layoutProps) => {
	return (
		<div>
			<Heads title={title} />
			{children}
		</div>
	)
}

export default Layout
