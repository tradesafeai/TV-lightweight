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
        text: 'GROK/USD Chart',
    },
});

const candlestickSeries = chart.addCandlestickSeries({
    upColor: '#00ff55',
    downColor: '#ff2a2a',
    borderVisible: false,
    wickUpColor: '#00ff55',
    wickDownColor: '#ff2a2a',
});

candlestickSeries.setData([
    { time: '2025-07-01', open: 500, high: 520, low: 480, close: 510 },
    { time: '2025-07-02', open: 510, high: 530, low: 505, close: 525 },
    { time: '2025-07-03', open: 525, high: 540, low: 515, close: 518 },
    { time: '2025-07-04', open: 518, high: 535, low: 510, close: 530 },
    { time: '2025-07-05', open: 530, high: 550, low: 525, close: 545 },
    { time: '2025-07-06', open: 545, high: 560, low: 535, close: 550 },
    { time: '2025-07-07', open: 550, high: 570, low: 540, close: 565 },
    { time: '2025-07-08', open: 565, high: 580, low: 555, close: 570 },
    { time: '2025-07-09', open: 570, high: 585, low: 560, close: 575 },
    { time: '2025-07-10', open: 575, high: 590, low: 565, close: 580 },
]);

const smaSeries = chart.addLineSeries({
    color: '#00b7ff',
    lineWidth: 2,
    title: '5-Day SMA',
});

smaSeries.setData([
    { time: '2025-07-05', value: (510 + 525 + 518 + 530 + 545) / 5 },
    { time: '2025-07-06', value: (525 + 518 + 530 + 545 + 550) / 5 },
    { time: '2025-07-07', value: (518 + 530 + 545 + 550 + 565) / 5 },
    { time: '2025-07-08', value: (530 + 545 + 550 + 565 + 570) / 5 },
    { time: '2025-07-09', value: (545 + 550 + 565 + 570 + 575) / 5 },
    { time: '2025-07-10', value: (550 + 565 + 570 + 575 + 580) / 5 },
]);

chart.timeScale().fitContent();

window.addEventListener('resize', () => {
    chart.resize(window.innerWidth, 400);
});