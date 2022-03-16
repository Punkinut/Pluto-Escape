import { doc, getDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../firebase/clientApp';

export async function get(req: NextApiRequest, res: NextApiResponse) {
    const docRef = doc(db, 'scoreboard', 'Ud9In5pXLlAyURyW1xAd');
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    res.status(200).json(data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await get(req, res);
    }

    res.status(404).end();
}
