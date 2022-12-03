import { info } from '../data/info';

export default function handler(req: any, res: any) {
	if (req.method === 'GET') {
		res.status(200).json(JSON.stringify(info));
	}
}
