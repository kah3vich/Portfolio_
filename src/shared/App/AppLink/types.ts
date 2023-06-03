export type TAppLinkProps = {
	href: string;
	children: React.ReactNode;
	target?: '_blank' | '_parent' | '_self' | '_top';
};
