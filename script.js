// ── Countdown timer ───────────────────────────────────────────
    const launch = new Date('2026-05-01T00:00:00');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = launch - new Date();
      if (diff <= 0) {
        ['days','hours','minutes','seconds'].forEach(id =>
          document.getElementById('cd-' + id).textContent = '00'
        );
        return;
      }
      document.getElementById('cd-days').textContent    = pad(Math.floor(diff / 86400000));
      document.getElementById('cd-hours').textContent   = pad(Math.floor((diff % 86400000) / 3600000));
      document.getElementById('cd-minutes').textContent = pad(Math.floor((diff % 3600000)  / 60000));
      document.getElementById('cd-seconds').textContent = pad(Math.floor((diff % 60000)    / 1000));
    }

    tick();
    setInterval(tick, 1000);

    // ── Progress bar animate in ───────────────────────────────────
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('progress-fill').style.width = '35%';
      }, 1600);
    });

