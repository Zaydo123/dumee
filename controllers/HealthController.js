exports.get = (req, res) => {
    const uptime = process.uptime();
    const uptimeFormatted = formatUptime(uptime);

    res.status(200).json({ 
        message: 'Server is healthy',
        uptime: uptimeFormatted
    });
};

function formatUptime(uptime) {
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
}
