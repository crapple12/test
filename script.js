// ── PARTICLES ──
    (function() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 25; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 3 + 1;
            p.style.cssText = `
                width: ${size}px; height: ${size}px;
                left: ${Math.random() * 100}%;
                animation-duration: ${Math.random() * 20 + 15}s;
                animation-delay: ${Math.random() * 20}s;
            `;
            container.appendChild(p);
        }
    })();

// ── COUNTDOWN ──
    const countDownDate = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).getTime();

    function pad(n) { return String(n).padStart(2, '0'); }

    const elDays    = document.getElementById('days');
    const elHours   = document.getElementById('hours');
    const elMinutes = document.getElementById('minutes');
    const elSeconds = document.getElementById('seconds');

    function tick(el, val) {
        el.textContent = val;
        el.classList.remove('tick');
        void el.offsetWidth; // reflow
        el.classList.add('tick');
        setTimeout(() => el.classList.remove('tick'), 300);
    }

    let prevSec = null;
    setInterval(function() {
        const now = Date.now();
        const dist = countDownDate - now;
        if (dist < 0) {
            document.getElementById('countdown').innerHTML = '<span style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(36px,6vw,60px);letter-spacing:4px;color:var(--gold)">Launched!</span>';
            return;
        }
        const d = Math.floor(dist / 86400000);
        const h = Math.floor((dist % 86400000) / 3600000);
        const m = Math.floor((dist % 3600000)  / 60000);
        const s = Math.floor((dist % 60000)    / 1000);

        elDays.textContent    = String(d).padStart(3,'0');
        elHours.textContent   = pad(h);
        elMinutes.textContent = pad(m);
        if (s !== prevSec) { tick(elSeconds, pad(s)); prevSec = s; }
    }, 1000);

// ── FORM ──
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input');
        if (!input.value || !input.validity.valid) {
            input.focus();
            input.style.outline = '2px solid rgba(200,168,75,0.8)';
            setTimeout(() => input.style.outline = '', 1500);
            return;
        }
        this.style.display = 'none';
        document.getElementById('success').style.display = 'flex';
    });