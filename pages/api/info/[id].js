import { info } from '../data/info.js';

export default function handler(req, res) {
	const {
		query: { id },
	} = req;
	if (req.method === 'GET') {
		res.status(200).json({
			...info.find(infos => infos.id === parseInt(id)),
		});
	}
}
