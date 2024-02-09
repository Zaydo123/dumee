const fetch = require('node-fetch'); 
const getClientIP = require('../utils/ipUtils');

exports.getUserIP = (req, res) => {
    const ip = getClientIP(req);
    res.send({ ip: ip, timestamp: new Date().toISOString() });
};

exports.getIPDetails = async (req, res) => {
    const ip = req.params.ip;
    const format = req.params.format || 'json';
    const url = `https://ipapi.co/${ip}/${format}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            
            switch (response.status) {
                case 404:
                    throw new Error('IP not found');
                case 429:
                    throw new Error('Rate limit exceeded');
                default:
                    throw new Error('Failed to fetch IP data');
            }

        }
        res.setHeader('Content-Type', response.headers.get('Content-Type'));
        res.send(await response.text());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  
