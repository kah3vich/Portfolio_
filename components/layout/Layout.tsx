import Heads from '../Heads'

interface Props {
	children: any
	title: string
}

const Layout = ({ children, title }: Props) => {
	return (
		<div>
			<Heads title={title} />
			{children}
		</div>
	)
}

export default Layout
