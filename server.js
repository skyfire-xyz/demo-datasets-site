const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve static files (CSS, datasets)
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API to serve dataset links
app.get('/api/datasets', (req, res) => {
    const datasets = [
        { name: "Population Data", file: "dataset1.csv", type: "CSV" },
        { name: "Climate Change Stats", file: "dataset2.csv", type: "CSV" },
        { name: "Machine Learning Dataset", file: "dataset3.json", type: "JSON" },
        { name: "Economic Indicators", file: "dataset4.csv", type: "CSV" },
        { name: "Healthcare Analytics", file: "dataset5.json", type: "JSON" },
        { name: "Social Media Trends", file: "dataset6.csv", type: "CSV" },
        { name: "Retail Sales Data", file: "dataset7.json", type: "JSON" },
        { name: "Transportation Statistics", file: "dataset8.csv", type: "CSV" },
        { name: "Energy Consumption Data", file: "dataset9.csv", type: "CSV" },
        { name: "Education Performance", file: "dataset10.json", type: "JSON" }
    ];
    res.json(datasets);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

