import { info } from '../data/info';

export default function handler(req: any, res: any) {
	const {
		query: { id }
	} = req;
	if (req.method === 'GET') {
		res.status(200).json({
			...info.find(infos => infos.id === parseInt(id))
		});
	}
}
