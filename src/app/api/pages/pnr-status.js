export default async function handler(req, res) {
    // The PNR number can be passed as a query parameter, e.g., ?pnr=2505372557
    const { pnr } = req.query;

    if (!pnr) {
        return res.status(400).json({ error: 'PNR number is required' });
    }

    const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`;

    const headers = {
        'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com',
        'x-rapidapi-key': 'b945368d34mshf2fd1d55f7a5e3ap1f9b40jsnd4bbda1f56d0',
    };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch PNR status' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
