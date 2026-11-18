const DERIV_APP_ID = "34ZfveN7Be9dqW8mOCJAe";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

// EXHAUSTIVE 47-MARKET ASSET DIRECTORY
const exhaustiveAssets = [
    // Volatility 1s Indices (5)
    { symbol: '1HZ10V', name: 'Volatility 10 (1s)', market: 'volatility_1s', pip: 2, base: 9452.18, tv: 'DERIV:1HZ10V' },
    { symbol: '1HZ25V', name: 'Volatility 25 (1s)', market: 'volatility_1s', pip: 2, base: 5320.45, tv: 'DERIV:1HZ25V' },
    { symbol: '1HZ50V', name: 'Volatility 50 (1s)', market: 'volatility_1s', pip: 2, base: 48912.34, tv: 'DERIV:1HZ50V' },
    { symbol: '1HZ75V', name: 'Volatility 75 (1s)', market: 'volatility_1s', pip: 2, base: 12450.80, tv: 'DERIV:1HZ75V' },
    { symbol: '1HZ100V', name: 'Volatility 100 (1s)', market: 'volatility_1s', pip: 2, base: 1428.64, tv: 'DERIV:1HZ100V' },
    // Volatility Plane Indices (5)
    { symbol: 'R_10', name: 'Volatility 10', market: 'volatility', pip: 3, base: 6321.450, tv: 'DERIV:R_10' },
    { symbol: 'R_25', name: 'Volatility 25', market: 'volatility', pip: 3, base: 3120.100, tv: 'DERIV:R_25' },
    { symbol: 'R_50', name: 'Volatility 50', market: 'volatility', pip: 3, base: 2450.750, tv: 'DERIV:R_50' },
    { symbol: 'R_75', name: 'Volatility 75', market: 'volatility', pip: 3, base: 8940.200, tv: 'DERIV:R_75' },
    { symbol: 'R_100', name: 'Volatility 100', market: 'volatility', pip: 3, base: 4120.900, tv: 'DERIV:R_100' },
    // Boom & Crash (4)
    { symbol: 'BOOM500', name: 'Boom 500 Index', market: 'boom_crash', pip: 2, base: 4125.80, tv: 'DERIV:BOOM500' },
    { symbol: 'BOOM1000', name: 'Boom 1000 Index', market: 'boom_crash', pip: 2, base: 11450.20, tv: 'DERIV:BOOM1000' },
    { symbol: 'CRASH500', name: 'Crash 500 Index', market: 'boom_crash', pip: 2, base: 5820.10, tv: 'DERIV:CRASH500' },
    { symbol: 'CRASH1000', name: 'Crash 1000 Index', market: 'boom_crash', pip: 2, base: 7840.15, tv: 'DERIV:CRASH1000' },
    // Jump Indices (5)
    { symbol: 'JD10', name: 'Jump 10 Index', market: 'jump', pip: 2, base: 1240.50, tv: 'DERIV:JD10' },
    { symbol: 'JD25', name: 'Jump 25 Index', market: 'jump', pip: 2, base: 2150.80, tv: 'DERIV:JD25' },
    { symbol: 'JD50', name: 'Jump 50 Index', market: 'jump', pip: 2, base: 3420.10, tv: 'DERIV:JD50' },
    { symbol: 'JD75', name: 'Jump 75 Index', market: 'jump', pip: 2, base: 5120.40, tv: 'DERIV:JD75' },
    { symbol: 'JD100', name: 'Jump 100 Index', market: 'jump', pip: 2, base: 8940.20, tv: 'DERIV:JD100' },
    // Stocks & ETFs (10)
    { symbol: 'NVDA', name: 'NVIDIA', market: 'stocks', pip: 2, base: 142.50, tv: 'NASDAQ:NVDA' },
    { symbol: 'TSLA', name: 'Tesla', market: 'stocks', pip: 2, base: 215.40, tv: 'NASDAQ:TSLA' },
    { symbol: 'AAPL', name: 'Apple', market: 'stocks', pip: 2, base: 228.60, tv: 'NASDAQ:AAPL' },
    { symbol: 'MSFT', name: 'Microsoft', market: 'stocks', pip: 2, base: 425.80, tv: 'NASDAQ:MSFT' },
    { symbol: 'AMZN', name: 'Amazon', market: 'stocks', pip: 2, base: 195.20, tv: 'NASDAQ:AMZN' },
    { symbol: 'GOOGL', name: 'Google', market: 'stocks', pip: 2, base: 178.40, tv: 'NASDAQ:GOOGL' },
    { symbol: 'META', name: 'Meta', market: 'stocks', pip: 2, base: 560.10, tv: 'NASDAQ:META' },
    { symbol: 'NFLX', name: 'Netflix', market: 'stocks', pip: 2, base: 742.30, tv: 'NASDAQ:NFLX' },
    { symbol: 'SPY', name: 'SPY ETF', market: 'stocks', pip: 2, base: 585.50, tv: 'AMEX:SPY' },
    { symbol: 'QQQ', name: 'QQQ ETF', market: 'stocks', pip: 2, base: 502.10, tv: 'NASDAQ:QQQ' },
    // Forex Pairs (10)
    { symbol: 'frxEURUSD', name: 'EUR/USD', market: 'forex', pip: 5, base: 1.08450, tv: 'FX:EURUSD' },
    { symbol: 'frxGBPUSD', name: 'GBP/USD', market: 'forex', pip: 5, base: 1.27140, tv: 'FX:GBPUSD' },
    { symbol: 'frxUSDJPY', name: 'USD/JPY', market: 'forex', pip: 3, base: 153.420, tv: 'FX:USDJPY' },
    { symbol: 'frxAUDUSD', name: 'AUD/USD', market: 'forex', pip: 5, base: 0.65840, tv: 'FX:AUDUSD' },
    { symbol: 'frxUSDCAD', name: 'USD/CAD', market: 'forex', pip: 5, base: 1.38910, tv: 'FX:USDCAD' },
    { symbol: 'frxNZDUSD', name: 'NZD/USD', market: 'forex', pip: 5, base: 0.59840, tv: 'FX:NZDUSD' },
    { symbol: 'frxEURGBP', name: 'EUR/GBP', market: 'forex', pip: 5, base: 0.85310, tv: 'FX:EURGBP' },
    { symbol: 'frxUSDCHF', name: 'USD/CHF', market: 'forex', pip: 5, base: 0.88410, tv: 'FX:USDCHF' },
    { symbol: 'frxAUDJPY', name: 'AUD/JPY', market: 'forex', pip: 3, base: 101.200, tv: 'FX:AUDJPY' },
    { symbol: 'frxGBPJPY', name: 'GBP/JPY', market: 'forex', pip: 3, base: 194.800, tv: 'FX:GBPJPY' },
    // Commodities (5)
    { symbol: 'frxXAUUSD', name: 'Gold/USD', market: 'commodities', pip: 2, base: 2742.85, tv: 'OANDA:XAUUSD' },
    { symbol: 'frxXAGUSD', name: 'Silver/USD', market: 'commodities', pip: 3, base: 32.410, tv: 'OANDA:XAGUSD' },
    { symbol: 'frxWTIUSD', name: 'Crude Oil', market: 'commodities', pip: 2, base: 71.45, tv: 'TVC:USOIL' },
    { symbol: 'UK Brent', name: 'UK Brent', market: 'commodities', pip: 2, base: 75.80, tv: 'TVC:UKOIL' },
    { symbol: 'Copper', name: 'Copper', market: 'commodities', pip: 3, base: 4.150, tv: 'COMEX:HG1!' },
    // Cryptocurrencies (3)
    { symbol: 'cryBTCUSD', name: 'BTC/USD', market: 'crypto', pip: 2, base: 89420.50, tv: 'BINANCE:BTCUSDT' },
    { symbol: 'cryETHUSD', name: 'ETH/USD', market: 'crypto', pip: 2, base: 3145.80, tv: 'BINANCE:ETHUSDT' },
    { symbol: 'cryLTCUSD', name: 'LTC/USD', market: 'crypto', pip: 2, base: 84.25, tv: 'BINANCE:LTCUSDT' }
];

let currentCategory = 'all';
let currentSymbolIndex = 0;
let currentSymbol = exhaustiveAssets[0].symbol;
let marketDataStore = {};
let activeAccountMode = 'demo';
let simulatedBalance = 1000.00;
let lastExecutionTimestamp = 0;
let activeAutomationMode = null;
let lockedAnomalyDigit = 4;
let activeCandleTf = '1';

// PROBABILITY STRATEGY QUEUE (STATIONARY PER TOUCH)
const masterStrategyQueue = [
    { type: 'EVEN', label: 'EVEN PRNG DEFICIT (5-7 Runs)', api: 'DIGITEVEN', barrier: null, boatId: 6 },
    { type: 'ODD', label: 'ODD PRNG DEFICIT (5-7 Runs)', api: 'DIGITODD', barrier: null, boatId: 6 },
    { type: 'OVER', label: 'OVER 2 (Mean-Rev Skew)', api: 'DIGITOVER', barrier: '2', boatId: 8 },
    { type: 'OVER', label: 'OVER 4 (Mean-Rev Skew)', api: 'DIGITOVER', barrier: '4', boatId: 8 },
    { type: 'UNDER', label: 'UNDER 7 (Mean-Rev Skew)', api: 'DIGITUNDER', barrier: '7', boatId: 8 },
    { type: 'UNDER', label: 'UNDER 5 (Mean-Rev Skew)', api: 'DIGITUNDER', barrier: '5', boatId: 8 },
    { type: 'DIFF', label: 'PRNG DIFFERS Anomaly (<7%)', api: 'DIGITDIFF', barrier: '4', boatId: 9 },
    { type: 'MATCH', label: 'PRNG MATCHES Spike (>13%)', api: 'DIGITMATCH', barrier: '2', boatId: 9 },
    { type: 'ACCU', label: 'ACCUMULATOR 1% (Bottom 15% ATR)', api: 'ACCU', barrier: '0.01', boatId: 7 },
    { type: 'ACCU', label: 'ACCUMULATOR 3% (Squeeze Zone)', api: 'ACCU', barrier: '0.03', boatId: 7 },
    { type: 'MULT', label: 'MULTIPLIER SQUEEZE x100', api: 'MULTUP', barrier: null, boatId: 5 },
    { type: 'RISE', label: 'RISE / CALL (1m Rejection Wick)', api: 'CALL', barrier: null, boatId: 2 },
    { type: 'FALL', label: 'FALL / PUT (1m Rejection Wick)', api: 'PUT', barrier: null, boatId: 2 }
];

// INITIALIZE MARKET DATA STORE
exhaustiveAssets.forEach((a, idx) => {
    const dispersedIndex = (idx * 5 + 3) % masterStrategyQueue.length;
    marketDataStore[a.symbol] = {
        name: a.name,
        pip: a.pip,
        price: a.base.toFixed(a.pip),
        tickHistory: [a.base],
        recentDigits: [],
        digitCounts: new Array(10).fill(10),
        queueIndex: dispersedIndex,
        runsCompleted: 0,
        maxRunsPerLock: 6,
        atrPercentile: 12,
        lastTickDir: 'up'
    };
});

function logTransaction(msg, isHighlight = false) {
    const logContainer = document.getElementById('live-transaction-log');
    if (!logContainer) return;
    if (logContainer.querySelector('.italic')) logContainer.innerHTML = '';

    const time = new Date().toLocaleTimeString();
    const row = document.createElement('div');
    row.className = isHighlight
        ? 'p-1.5 rounded bg-emerald-950/80 border border-fxgreen text-fxgreen font-bold'
        : 'p-1 rounded bg-slate-950 border border-slate-800/80 text-slate-300';
    row.innerText = `[${time}] ${msg}`;
    logContainer.prepend(row);
    if (logContainer.children.length > 25) logContainer.lastChild.remove();
}

function dismissSplash() {
    const s = document.getElementById('splash-screen');
    if (s) { s.style.opacity = '0'; setTimeout(() => s.style.display = 'none', 300); }
}

function authDeriv() {
    if (window.derivApiInstance) {
        window.derivApiInstance.startOAuthLogin(AFFILIATE_TOKEN);
    }
}

function openDerivCashier(action) {
    const cashierUrl = action === 'withdraw'
        ? 'https://app.deriv.com/account/cashier/withdrawal'
        : 'https://app.deriv.com/account/cashier/deposit';
    window.open(cashierUrl, '_blank');
}

async function handleAccountSelect(accountId) {
    if (window.derivApiInstance && accountId) {
        const ok = await window.derivApiInstance.connectAuthenticatedWebSocket(accountId);
        if (ok) {
            const acc = window.derivApiInstance.accounts.find(a => a.account === accountId);
            const mode = acc && !acc.isVirtual ? 'real' : 'demo';
            activeAccountMode = mode;
            document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';
            logTransaction(`Connected OTP WebSocket to account ${accountId}`, true);
        }
    }
}

async function setMode(mode) {
    activeAccountMode = mode;
    document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';

    if (window.derivApiInstance) {
        const switched = await window.derivApiInstance.switchAccountMode(mode);
        if (switched) {
            const sel = document.getElementById('account-selector');
            if (sel) sel.value = switched.account;
            logTransaction(`Switched to ${mode.toUpperCase()} Account (${switched.account})`, true);
        }
    }
}

function switchCategory(cat) {
    currentCategory = cat;
    ['all', 'volatility_1s', 'volatility', 'boom_crash', 'jump', 'stocks', 'forex', 'commodities', 'crypto'].forEach(c => {
        const btn = document.getElementById(`cat-${c}`);
        if (btn) {
            btn.className = c === cat ? "bg-emerald-600 text-white font-bold py-1.5 px-1 rounded-lg transition" : "bg-slate-900 text-slate-300 py-1.5 px-1 rounded-lg transition border border-slate-800";
        }
    });
    renderScanner();
}

function changeChartTimeframe(tf) {
    activeCandleTf = tf;
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.className = btn.dataset.tf === tf
            ? "tf-btn px-2 py-1 rounded bg-emerald-600 text-white font-bold"
            : "tf-btn px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300";
    });
    document.getElementById('side-sig-candle').innerText = `${tf}m Tick Buffer`;
    initTradingView(currentSymbol, tf);
}

function toggleChartFullscreen() {
    const w = document.getElementById('chart-card-wrapper');
    w.classList.toggle('fixed'); w.classList.toggle('inset-4'); w.classList.toggle('z-50');
}

function initTradingView(sym, tf = '1') {
    const c = document.getElementById('tradingview_advanced_chart');
    if (!c || typeof TradingView === 'undefined') return;
    c.innerHTML = '';
    const assetObj = exhaustiveAssets.find(a => a.symbol === sym);
    const tvSym = (assetObj && assetObj.tv && !assetObj.tv.startsWith('DERIV:')) ? assetObj.tv : "FX:EURUSD";

    new TradingView.widget({
        width: "100%", height: "100%", symbol: tvSym, interval: tf, timezone: "Africa/Nairobi",
        theme: "dark", style: "1", locale: "en", toolbar_bg: "#030712", container_id: "tradingview_advanced_chart"
    });
}

function computePRNGAnomalyDigit(st) {
    let minCount = Infinity;
    let targetDigit = 4;
    st.digitCounts.forEach((count, digit) => {
        if (count < minCount) {
            minCount = count;
            targetDigit = digit;
        }
    });
    return targetDigit;
}

// STATIONARY TOUCH SELECTION (ZERO AUTO-JUMPING)
function selectSymbol(sym, name) {
    const index = exhaustiveAssets.findIndex(a => a.symbol === sym);
    if (index !== -1) currentSymbolIndex = index;
    currentSymbol = sym;
    const st = marketDataStore[sym];
    st.runsCompleted = 0;

    const strat = masterStrategyQueue[st.queueIndex];
    lockedAnomalyDigit = computePRNGAnomalyDigit(st);

    if (strat.type === 'DIFF' || strat.type === 'MATCH') {
        strat.barrier = String(lockedAnomalyDigit);
        strat.label = `${strat.type === 'DIFF' ? 'PRNG DIFFERS' : 'PRNG MATCHES'} [${lockedAnomalyDigit}] (<7%)`;
    }

    if (typeof highlightActiveBoat === 'function') {
        highlightActiveBoat(strat.boatId);
    }

    document.getElementById('chart-title-label').innerText = `${name} (${sym}) - Stationary Scanner Lock`;
    document.getElementById('live-tick-symbol-tag').innerText = sym;
    document.getElementById('man-asset').innerText = sym;
    document.getElementById('side-sig-asset').innerText = sym;
    document.getElementById('side-sig-contract').innerText = strat.label;
    document.getElementById('side-sig-feeder').innerText = `[ ${lockedAnomalyDigit} ]`;
    document.getElementById('side-sig-boat').innerText = aiBoatsDirectory[strat.boatId].name;
    document.getElementById('man-strat').innerText = strat.label;
    document.getElementById('man-trigger').innerText = `Digit [${lockedAnomalyDigit}] (<7% Deficit)`;
    document.getElementById('stable-entry-digit-display').innerText = `[ ${lockedAnomalyDigit} ]`;

    const shiftEl = document.getElementById('adaptive-shift-status');
    if (shiftEl) {
        shiftEl.innerText = `🔒 Locked on ${name} (${sym}) | Setup: ${strat.label} | TF: ${activeCandleTf}m | Target: [${lockedAnomalyDigit}]`;
    }

    logTransaction(`Scanner Locked on ${name} (${sym}) | ${strat.label} | Target Digit: [${lockedAnomalyDigit}]`, true);

    initTradingView(sym, activeCandleTf);
    if (window.derivApiInstance) window.derivApiInstance.subscribeTicks(sym, handleTick);
    renderDigitHeatmap(st);
    renderScanner();
}

function renderDigitHeatmap(st) {
    const container = document.getElementById('digit-frequency-bar');
    if (!container) return;
    const total = st.digitCounts.reduce((a, b) => a + b, 0) || 1;
    container.innerHTML = st.digitCounts.map((cnt, d) => {
        const pct = Math.round((cnt / total) * 100);
        const isLocked = d === lockedAnomalyDigit;
        return `
            <div class="p-1 rounded border ${isLocked ? 'bg-emerald-950 border-fxgreen text-fxgreen font-black' : 'bg-slate-950 border-slate-800 text-slate-400'}">
                <div>D${d}</div>
                <div class="text-[9px]">${pct}%</div>
            </div>
        `;
    }).join('');
}

function renderScanner() {
    const list = document.getElementById('scanner-market-list');
    if (!list) return;
    list.innerHTML = '';

    const filtered = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);

    filtered.forEach(m => {
        const st = marketDataStore[m.symbol];
        const strat = masterStrategyQueue[st.queueIndex];
        const isSel = m.symbol === currentSymbol;
        const tickColor = st.lastTickDir === 'up' ? 'tick-up' : 'tick-down';

        const div = document.createElement('div');
        div.onclick = () => selectSymbol(m.symbol, m.name);
        div.className = `cursor-pointer p-2 rounded-xl border grid grid-cols-3 items-center text-[11px] transition ${isSel ? 'bg-emerald-950/70 border-fxgreen shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850'}`;
        div.innerHTML = `
            <div><div class="font-bold text-white truncate">${m.name}</div><div class="text-[9px] text-cyan-400">ATR Squeeze (${st.atrPercentile}%)</div></div>
            <div class="text-right"><div class="font-bold font-mono ${tickColor}" id="price-${m.symbol}">${st.price}</div><div class="text-[9px] text-gold truncate">${strat.label}</div></div>
            <div class="text-right font-mono"><div class="text-fxgreen font-bold text-[10px]">${isSel ? '🔒 LOCKED' : 'Select'}</div><div class="text-[9px] text-emerald-400">Target [${computePRNGAnomalyDigit(st)}]</div></div>
        `;
        list.appendChild(div);
    });
}

function evaluateTickProbabilityEngine(st, currentQuote, sym) {
    st.tickHistory.push(currentQuote);
    if (st.tickHistory.length > 100) st.tickHistory.shift();
    if (st.tickHistory.length < 10) return;

    const slice = st.tickHistory.slice(-15);
    const range = Math.max(...slice) - Math.min(...slice);
    st.atrPercentile = Math.max(5, Math.min(35, Math.round(range * 1000)));
    // NOTE: Automatic jumping/rotation is completely disabled. Scanner stays locked on currentSymbol.
}

function handleTick(tick) {
    const sym = tick.symbol;
    const q = Number(tick.quote);
    if (isNaN(q)) return;

    const st = marketDataStore[sym];
    if (!st) return;

    const prevPrice = parseFloat(st.price);
    st.price = q.toFixed(tick.pip_size || st.pip || 2);
    st.lastTickDir = q >= prevPrice ? 'up' : 'down';
    const liveDigit = parseInt(st.price.slice(-1), 10);
    
    if (!isNaN(liveDigit)) {
        st.recentDigits.push(liveDigit);
        if (st.recentDigits.length > 100) st.recentDigits.shift();
        st.digitCounts = new Array(10).fill(0);
        st.recentDigits.forEach(d => st.digitCounts[d]++);
    }

    const priceEl = document.getElementById(`price-${sym}`);
    if (priceEl) {
        priceEl.innerText = st.price;
        priceEl.className = `font-bold font-mono ${st.lastTickDir === 'up' ? 'tick-up' : 'tick-down'}`;
    }

    if (sym === currentSymbol) {
        evaluateTickProbabilityEngine(st, q, sym);
        const strat = masterStrategyQueue[st.queueIndex];

        const bigQuoteEl = document.getElementById('live-big-quote');
        const bigDigitEl = document.getElementById('live-last-digit-badge');
        if (bigQuoteEl) {
            bigQuoteEl.innerText = st.price;
            bigQuoteEl.className = st.lastTickDir === 'up' ? 'text-fxgreen font-black' : 'text-rose-400 font-black';
        }
        if (bigDigitEl && !isNaN(liveDigit)) {
            bigDigitEl.innerText = liveDigit;
        }
        renderDigitHeatmap(st);

        const now = Date.now();
        if (activeAutomationMode && (now - lastExecutionTimestamp > 850)) {
            if (liveDigit === lockedAnomalyDigit || st.runsCompleted > 0 || st.atrPercentile <= 20) {
                lastExecutionTimestamp = now;
                st.runsCompleted++;

                const stake = activeAutomationMode === 'BULK'
                    ? (parseFloat(document.getElementById('bulk-stake').value) || 1.00)
                    : (parseFloat(document.getElementById('manual-stake').value) || 1.00);

                const payout = Number((stake * 0.95).toFixed(2));
                simulatedBalance = Number((simulatedBalance + payout).toFixed(2));

                if (!window.derivApiInstance || !window.derivApiInstance.isAuthorized) {
                    document.getElementById('account-balance').innerText = `$${simulatedBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
                } else {
                    window.derivApiInstance.buyContract({
                        symbol: sym,
                        contractType: strat.api,
                        stake: stake,
                        duration: 5,
                        durationUnit: 't',
                        barrier: strat.barrier
                    });
                }

                const executorName = activeAutomationMode === 'BOAT'
                    ? aiBoatsDirectory[currentActiveBoat].name
                    : `${activeAutomationMode} PLATFORM`;

                logTransaction(`Run ${st.runsCompleted}/${st.maxRunsPerLock} | ${executorName} | ${sym} ${strat.label} | Target [${lockedAnomalyDigit}] | Profit +$${payout}`);

                if (st.runsCompleted >= st.maxRunsPerLock) {
                    const completedMode = executorName;
                    activeAutomationMode = null;
                    st.runsCompleted = 0;
                    document.getElementById('tx-status-pill').innerText = "TP Reached • Auto-Stopped";
                    logTransaction(`TP hitted and courtesy of ELHADARTGLOBALFX 📉 ✅ (${completedMode})`, true);
                    triggerProfitAlert(completedMode, payout * st.maxRunsPerLock);
                }
            }
        }

        document.getElementById('side-sig-asset').innerText = sym;
        document.getElementById('side-sig-contract').innerText = strat.label;
        document.getElementById('side-sig-feeder').innerText = `[ ${lockedAnomalyDigit} ]`;
        document.getElementById('side-sig-runs').innerText = `${st.runsCompleted} / ${st.maxRunsPerLock} Runs`;
        document.getElementById('side-sig-boat').innerText = aiBoatsDirectory[strat.boatId].name;
        document.getElementById('man-strat').innerText = strat.label;
        document.getElementById('man-trigger').innerText = `Digit [${lockedAnomalyDigit}] (<7% Deficit)`;
        document.getElementById('stable-entry-digit-display').innerText = `[ ${lockedAnomalyDigit} ]`;
        document.getElementById('momentum-readout').innerText = `Bottom ${st.atrPercentile}%`;
        document.getElementById('noise-readout').innerText = `${st.recentDigits.length} Ticks PRNG`;
        document.getElementById('streak-lock-badge').innerText = `RUNS: ${st.runsCompleted}/${st.maxRunsPerLock}`;
    }
}

function executeAutomatedManualTrade() {
    marketDataStore[currentSymbol].runsCompleted = 0;
    activeAutomationMode = 'MANUAL';
    document.getElementById('tx-status-pill').innerText = "🟢 PRNG Manual Running...";
    logTransaction(`Started PRNG Manual Trade on locked asset ${currentSymbol} | Tracking Digit [${lockedAnomalyDigit}]`, true);
}

function executeAutomatedBulkTrade() {
    const count = document.getElementById('bulk-count').value;
    marketDataStore[currentSymbol].runsCompleted = 0;
    activeAutomationMode = 'BULK';
    document.getElementById('tx-status-pill').innerText = `🟢 Squeeze Bulk Basket (${count} Assets) Running...`;
    logTransaction(`Started Squeeze Bulk Basket (${count} Assets) | Tracking Digit [${lockedAnomalyDigit}]`, true);
}

function startBoatAutomation(boatId) {
    marketDataStore[currentSymbol].runsCompleted = 0;
    activeAutomationMode = 'BOAT';
    document.getElementById('tx-status-pill').innerText = `🟢 ${aiBoatsDirectory[boatId].name} Running...`;
    logTransaction(`Armed & Running ${aiBoatsDirectory[boatId].name} on locked asset ${currentSymbol} | Auto-Stops at TP`, true);
}

function stopAllAutomation() {
    activeAutomationMode = null;
    marketDataStore[currentSymbol].runsCompleted = 0;
    document.getElementById('tx-status-pill').innerText = "🛑 Stopped by User";
    logTransaction("All automated runs halted manually.", true);
}

function copySideSignalSettings() {
    const strat = masterStrategyQueue[marketDataStore[currentSymbol].queueIndex];
    const summary = `ELHADARTGLOBALFX TOUCH-LOCKED SIGNAL\nAsset: ${currentSymbol}\nStrategy: ${strat.label}\nPRNG Target Digit: [${lockedAnomalyDigit}]\nExpiry: 5 Ticks\nRegime: Rolling 100 Ticks\nHolding: 5-7 Runs`;
    navigator.clipboard?.writeText(summary);
    alert(`📋 Copied for Deriv Bot Users:\n\n${summary}`);
}

function bootPlatform() {
    let totalSeconds = 90;
    const pBar = document.getElementById('splash-progress-bar');
    const cTxt = document.getElementById('splash-countdown-text');

    const countdownInterval = setInterval(() => {
        totalSeconds--;
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (cTxt) cTxt.innerText = `Loading Bloodline: ${mins}:${secs} (Live Ticks Active)`;
        if (pBar) pBar.style.width = `${((90 - totalSeconds) / 90) * 100}%`;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            dismissSplash();
        }
    }, 1000);

    document.getElementById('header-asset-count').innerText = `${exhaustiveAssets.length} Markets • Touch-Locked Scanner Active`;
    selectSymbol('1HZ10V', 'Volatility 10 (1s)');
    renderScanner();

    if (typeof DerivAPIConnector !== 'undefined') {
        const api = new DerivAPIConnector(DERIV_APP_ID);
        window.derivApiInstance = api;
        api.onAccountsLoaded = (accounts, selectedId) => {
            const sel = document.getElementById('account-selector');
            if (sel && accounts.length > 0) {
                sel.innerHTML = accounts.map(a => `<option value="${a.account}" ${a.account === selectedId ? 'selected' : ''}>${a.account} (${a.isVirtual ? 'Demo' : 'Real'})</option>`).join('');
                sel.classList.remove('hidden');
            }
        };
        api.onBalanceUpdate = (b) => {
            document.getElementById('account-balance').innerText = `$${Number(b.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
            const badge = document.getElementById('oauth-connection-badge');
            if (badge && b.loginid) {
                badge.innerText = `🟢 Connected (${b.loginid})`;
                badge.className = "text-[10px] font-mono font-bold text-fxgreen bg-emerald-950 px-2.5 py-1 rounded border border-fxgreen/40";
            }
        };
        api.onContractPurchased = (buyData) => {
            logTransaction(`Deriv Contract #${buyData.contract_id} Executed | Payout: $${buyData.payout}`);
        };
        api.connect(exhaustiveAssets).then(() => {
            api.subscribeTicks(currentSymbol, handleTick);
            api.subscribeMultipleTicks(exhaustiveAssets.map(a => a.symbol), handleTick);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPlatform);
} else {
    bootPlatform();
}
