import { info } from '../data/info.js'

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(JSON.stringify(info))
	}
}
