import { FONT_LINK } from '@/constant';
import React, { FC } from 'react';

const _Fonts: FC = () => (
	<style jsx global>{`
		@import url('${FONT_LINK}');
	`}</style>
);

export const Fonts = React.memo(_Fonts);
