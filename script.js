const chart = LightweightCharts.createChart(document.getElementById('chartContainer'), {
    width: window.innerWidth,
    height: 400,
    layout: {
        background: { type: 'solid', color: '#0d1a26' },
        textColor: '#ffffff',
        fontFamily: 'Arial',
    },
    grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.1)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    },
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
        vertColor: '#ffffff',
        horzColor: '#ffffff',
    },
    watermark: {
        color: 'rgba(0, 255, 85, 0.3)',
        visible: true,
        text: 'GROK/USD Line Chart',
    },
});

const lineSeries = chart.addLineSeries({
    color: '#00ff55', // Neon green line for a cool look
    lineWidth: 2,
});

lineSeries.setData([
    { time: '2025-07-01', value: 500 },
    { time: '2025-07-02', value: 510 },
    { time: '2025-07-03', value: 525 },
    { time: '2025-07-04', value: 518 },
    { time: '2025-07-05', value: 530 },
    { time: '2025-07-06', value: 545 },
    { time: '2025-07-07', value: 550 },
    { time: '2025-07-08', value: 565 },
    { time: '2025-07-09', value: 570 },
    { time: '2025-07-10', value: 575 },
]);

chart.timeScale().fitContent();

window.addEventListener('resize', () => {
    chart.resize(window.innerWidth, 400);
});
