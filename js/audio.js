export class AudioManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('wordmatch_muted') === 'true';
    this.speechEnabled = true;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('wordmatch_muted', this.isMuted);
    return this.isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2, pitchBend = null) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (pitchBend) {
        osc.frequency.exponentialRampToValueAtTime(pitchBend, this.ctx.currentTime + duration);
      }

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playTone error', e);
    }
  }

  playTap() {
    this.playTone(520, 'sine', 0.08, 0.25, 680);
  }

  playUntap() {
    this.playTone(400, 'sine', 0.08, 0.2, 280);
  }

  playHint() {
    if (this.isMuted) return;
    const notes = [587.33, 739.99, 880, 1174.66];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.15);
      }, idx * 60);
    });
  }

  playWrong() {
    if (this.isMuted) return;
    this.playTone(220, 'sawtooth', 0.22, 0.2, 140);
  }

  playCorrect() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.3, 0.2);
      }, idx * 75);
    });
  }

  playLevelComplete() {
    if (this.isMuted) return;
    const fanfare = [
      { f: 392.00, d: 0.12, t: 0 },
      { f: 523.25, d: 0.12, t: 120 },
      { f: 659.25, d: 0.14, t: 240 },
      { f: 783.99, d: 0.20, t: 360 },
      { f: 1046.50, d: 0.45, t: 520 }
    ];
    fanfare.forEach(item => {
      setTimeout(() => {
        this.playTone(item.f, 'triangle', item.d, 0.25);
      }, item.t);
    });
  }

  playRoundWin(isPlayer1 = true) {
    if (this.isMuted) return;
    const freq = isPlayer1 ? 659.25 : 783.99;
    this.playTone(freq, 'triangle', 0.2, 0.25);
    setTimeout(() => {
      this.playTone(freq * 1.33, 'sine', 0.35, 0.25);
    }, 120);
  }

  playTick() {
    if (this.isMuted) return;
    this.playTone(880, 'sine', 0.04, 0.08);
  }

  playTimeOut() {
    if (this.isMuted) return;
    this.playTone(200, 'sawtooth', 0.4, 0.2, 100);
  }

  playVictory() {
    if (this.isMuted) return;
    const notes = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 523.25, t: 150, d: 0.15 },
      { f: 523.25, t: 300, d: 0.15 },
      { f: 523.25, t: 450, d: 0.35 },
      { f: 415.30, t: 850, d: 0.35 },
      { f: 466.16, t: 1250, d: 0.35 },
      { f: 523.25, t: 1650, d: 0.5 }
    ];
    notes.forEach(item => {
      setTimeout(() => {
        this.playTone(item.f, 'triangle', item.d, 0.3);
      }, item.t);
    });
  }

  speakWord(text) {
    if (!('speechSynthesis' in window) || this.isMuted) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }

  stopAll() {
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }
}

export const audio = new AudioManager();
