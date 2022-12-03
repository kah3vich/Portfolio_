import { FONT_LINK } from '@/constant';
import React from 'react';

const _Fonts: React.FC = () => (
	<style jsx global>{`
		@import url('${FONT_LINK}');
	`}</style>
);

export const Fonts = React.memo(_Fonts);
