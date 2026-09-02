import { ILLUSTRATIONS } from './illustrations.js';
import { LEVELS_DATA } from './data.js';
import { audio } from './audio.js';
import { confetti } from './confetti.js';

class BattleGameApp {
  constructor() {
    this.targetScore = 5;
    this.roundTimeMax = 20;
    this.roundTimeRemaining = 20;
    this.timerInterval = null;
    this.pendingTimeouts = [];
    this.isRoundLocked = false;

    this.p1Score = 0;
    this.p2Score = 0;
    this.currentRoundIndex = 0;
    this.shuffledLevels = [];
    this.usedQuestionsHistory = new Set();

    this.p1State = {
      inputLetters: [],
      bankTiles: [],
      usedIndices: new Set()
    };

    this.p2State = {
      inputLetters: [],
      bankTiles: [],
      usedIndices: new Set()
    };

    this.cacheDOM();
    this.bindEvents();
  }

  cacheDOM() {
    // Screens & Overlays
    this.screenLobby = document.getElementById('screen-lobby');
    this.screenBattle = document.getElementById('screen-battle');
    this.countdownOverlay = document.getElementById('countdown-overlay');
    this.countdownText = document.getElementById('countdown-text');

    // Header buttons
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.btnHowToPlay = document.getElementById('btn-how-to-play');
    this.btnReturnLobby = document.getElementById('btn-return-lobby');

    // Lobby Elements
    this.targetBtns = document.querySelectorAll('.target-btn');
    this.btnStartBattle = document.getElementById('btn-start-battle');

    // Scoreboard
    this.p1ScoreText = document.getElementById('p1-score-text');
    this.p2ScoreText = document.getElementById('p2-score-text');
    this.versusRoundBadge = document.getElementById('versus-round-badge');
    this.versusTimerDisplay = document.getElementById('versus-timer-display');
    this.versusTimerBar = document.getElementById('versus-timer-bar');
    this.targetIndicatorText = document.getElementById('target-indicator-text');

    // Arena elements
    this.versusCategoryText = document.getElementById('versus-category-text');
    this.versusArt1 = document.getElementById('versus-art-1');
    this.versusArt2 = document.getElementById('versus-art-2');
    this.versusCard1Box = document.getElementById('versus-card-1-box');
    this.versusCard2Box = document.getElementById('versus-card-2-box');
    this.versusRoundToast = document.getElementById('versus-round-toast');

    // Player 1 Deck
    this.p1DeckPanel = document.getElementById('p1-deck-panel');
    this.p1SlotsContainer = document.getElementById('p1-slots-container');
    this.p1KeyboardGrid = document.getElementById('p1-keyboard-grid');
    this.p1BtnClear = document.getElementById('p1-btn-clear');
    this.p1BtnShuffle = document.getElementById('p1-btn-shuffle');

    // Player 2 Deck
    this.p2DeckPanel = document.getElementById('p2-deck-panel');
    this.p2SlotsContainer = document.getElementById('p2-slots-container');
    this.p2KeyboardGrid = document.getElementById('p2-keyboard-grid');
    this.p2BtnClear = document.getElementById('p2-btn-clear');
    this.p2BtnShuffle = document.getElementById('p2-btn-shuffle');

    // Modals
    this.modalVersusChampion = document.getElementById('modal-versus-champion');
    this.versusChampionTitle = document.getElementById('versus-champion-title');
    this.versusChampionSubtitle = document.getElementById('versus-champion-subtitle');
    this.versusFinalScoreText = document.getElementById('versus-final-score-text');
    this.btnRematchVersus = document.getElementById('btn-rematch-versus');
    this.btnLobbyFromModal = document.getElementById('btn-lobby-from-modal');

    this.modalHowToPlay = document.getElementById('modal-how-to-play');
    this.btnCloseHelp = document.getElementById('btn-close-help');
  }

  bindEvents() {
    // Set initial sound button icon
    this.btnSoundToggle.innerHTML = audio.isMuted ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';

    // Sound toggle
    this.btnSoundToggle.addEventListener('click', () => {
      const muted = audio.toggleMute();
      this.btnSoundToggle.innerHTML = muted ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
    });

    // Fullscreen toggle (TV Mode)
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
    }
    document.addEventListener('fullscreenchange', () => {
      if (this.btnFullscreen) {
        this.btnFullscreen.innerHTML = document.fullscreenElement ? '<i class="bi bi-fullscreen-exit"></i>' : '<i class="bi bi-fullscreen"></i>';
      }
    });

    // How to Play Modal
    this.btnHowToPlay.addEventListener('click', () => {
      audio.playTap();
      this.modalHowToPlay.classList.add('active');
    });
    this.btnCloseHelp.addEventListener('click', () => {
      audio.playTap();
      this.modalHowToPlay.classList.remove('active');
    });

    // Return to Lobby button
    this.btnReturnLobby.addEventListener('click', () => {
      if (confirm('Return to main menu? The current match will be reset.')) {
        this.showLobbyScreen();
      }
    });

    // Lobby Target Score option buttons
    this.targetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playTap();
        this.targetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.targetScore = parseInt(btn.dataset.target, 10);
      });
    });

    // Big Start Button
    this.btnStartBattle.addEventListener('click', () => {
      this.startCountdownAndBattle();
    });

    // Player 1 Deck actions
    this.p1BtnClear.addEventListener('click', () => this.handlePlayerBackspace(1));
    this.p1BtnShuffle.addEventListener('click', () => this.shufflePlayerBank(1));

    // Player 2 Deck actions
    this.p2BtnClear.addEventListener('click', () => this.handlePlayerBackspace(2));
    this.p2BtnShuffle.addEventListener('click', () => this.shufflePlayerBank(2));

    // Rematch & Return to Lobby from Victory Modal
    this.btnRematchVersus.addEventListener('click', () => {
      this.modalVersusChampion.classList.remove('active');
      this.startCountdownAndBattle();
    });

    this.btnLobbyFromModal.addEventListener('click', () => {
      this.modalVersusChampion.classList.remove('active');
      this.showLobbyScreen();
    });

    // TV & Keyboard Hotkeys
    window.addEventListener('keydown', (e) => {
      // Fullscreen shortcut F
      if (e.key === 'F11') return; // let browser handle F11 naturally

      if (this.modalVersusChampion.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.btnRematchVersus.click();
        } else if (e.key === 'Escape') {
          this.btnLobbyFromModal.click();
        }
        return;
      }

      if (this.modalHowToPlay.classList.contains('active')) {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
          this.modalHowToPlay.classList.remove('active');
        }
        return;
      }

      if (this.screenLobby.classList.contains('active-screen')) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.startCountdownAndBattle();
          return;
        }
        if (e.key === 'f' || e.key === 'F') {
          this.toggleFullscreen();
          return;
        }
      }

      if (this.screenBattle.classList.contains('active-screen') && !this.isRoundLocked) {
        const key = e.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
          this.handlePlayerKeyboardInput(1, key);
        } else if (e.key === 'Backspace') {
          this.handlePlayerBackspace(1);
        }
      }
    });
  }

  safeTimeout(fn, delay) {
    const id = setTimeout(() => {
      this.pendingTimeouts = this.pendingTimeouts.filter(t => t !== id);
      fn();
    }, delay);
    this.pendingTimeouts.push(id);
    return id;
  }

  clearAllPendingTimers() {
    this.clearIntervalTimer();
    if (this.pendingTimeouts && this.pendingTimeouts.length > 0) {
      this.pendingTimeouts.forEach(id => clearTimeout(id));
      this.pendingTimeouts = [];
    }
    audio.stopAll();
  }

  toggleFullscreen() {
    audio.playTap();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  showLobbyScreen() {
    this.clearAllPendingTimers();
    this.isRoundLocked = true;
    this.screenBattle.classList.remove('active-screen');
    this.countdownOverlay.classList.remove('active');
    this.modalVersusChampion.classList.remove('active');
    this.modalHowToPlay.classList.remove('active');
    this.screenLobby.classList.add('active-screen');
    this.btnReturnLobby.style.display = 'none';
  }

  startCountdownAndBattle() {
    this.clearAllPendingTimers();
    audio.playTap();
    this.screenLobby.classList.remove('active-screen');
    this.screenBattle.classList.add('active-screen');
    this.btnReturnLobby.style.display = 'flex';

    this.p1Score = 0;
    this.p2Score = 0;
    this.currentRoundIndex = 0;
    this.p1ScoreText.textContent = '0';
    this.p2ScoreText.textContent = '0';
    this.targetIndicatorText.textContent = `Target: ${this.targetScore} Points`;

    // Pool of all questions (60 total)
    const basePool = LEVELS_DATA;

    // Filter out questions that have already been played recently
    let availablePool = basePool.filter(q => !this.usedQuestionsHistory.has(q.answer));

    // If available questions are fewer than 20, reset history to reuse pool cleanly
    if (availablePool.length < 20) {
      this.usedQuestionsHistory.clear();
      availablePool = [...basePool];
    }

    // Fisher-Yates shuffle the pool to guarantee randomness
    const shuffled = [...availablePool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Take exactly 20 unique questions for this match session (no duplicates)
    this.shuffledLevels = shuffled.slice(0, 20);

    // Record these 20 questions into history so subsequent matches don't repeat them
    this.shuffledLevels.forEach(q => this.usedQuestionsHistory.add(q.answer));

    // High-energy, smooth animated countdown
    const steps = [
      { text: '3', gradient: 'linear-gradient(135deg, #FDE047, #F59E0B)', tone: 440 },
      { text: '2', gradient: 'linear-gradient(135deg, #67E8F9, #3B82F6)', tone: 554.37 },
      { text: '1', gradient: 'linear-gradient(135deg, #FCA5A5, #EF4444)', tone: 659.25 },
      { text: 'GO!', gradient: 'linear-gradient(135deg, #6EE7B7, #10B981)', tone: 880 }
    ];

    this.countdownOverlay.classList.add('active');

    let currentStep = 0;
    const playStep = () => {
      if (currentStep < steps.length) {
        const item = steps[currentStep];
        this.countdownText.textContent = item.text;
        this.countdownText.style.background = item.gradient;
        this.countdownText.style.webkitBackgroundClip = 'text';
        this.countdownText.style.webkitTextFillColor = 'transparent';

        // Re-trigger CSS animation cleanly
        this.countdownText.classList.remove('countdown-pop');
        void this.countdownText.offsetWidth; // Force reflow
        this.countdownText.classList.add('countdown-pop');

        if (item.text === 'GO!') {
          audio.playRoundWin(true);
        } else {
          audio.playTone(item.tone, 'triangle', 0.2, 0.25);
        }

        currentStep++;
        this.safeTimeout(playStep, 800);
      } else {
        this.countdownOverlay.classList.remove('active');
        this.renderRound(0);
      }
    };

    playStep();
  }

  renderIllustrationHTML(iconKey, partData) {
    const raw = ILLUSTRATIONS[iconKey];
    if (!raw) return `<div class="text-fallback">${partData?.text || ''}</div>`;
    const trimmed = raw.trim();
    if (trimmed.startsWith('<svg') || trimmed.startsWith('<img') || trimmed.startsWith('<div')) {
      return trimmed;
    }
    // If it's a direct URL string (http/https/data:/relative path)
    if (trimmed.startsWith('http') || trimmed.startsWith('data:') || trimmed.startsWith('/') || trimmed.startsWith('.')) {
      return `<img src="${trimmed}" alt="${partData?.text || 'Illustration'}" class="svg-art image-art" />`;
    }
    return trimmed;
  }

  renderRound(roundIdx) {
    this.clearIntervalTimer();
    this.isRoundLocked = false;
    this.currentRoundIndex = roundIdx;

    if (roundIdx >= this.shuffledLevels.length) {
      this.triggerChampionScreen();
      return;
    }

    const data = this.shuffledLevels[roundIdx];

    // Update Round Headers
    this.versusRoundBadge.textContent = `Round ${roundIdx + 1}`;
    this.versusCategoryText.textContent = `🏷️ ${data.category}`;
    this.versusRoundToast.className = 'round-toast';
    this.versusRoundToast.textContent = `⚡ Ready... Word Race Starts!`;

    // Render Shared Visual Cards
    this.versusArt1.innerHTML = this.renderIllustrationHTML(data.part1.iconKey, data.part1);
    this.versusArt2.innerHTML = this.renderIllustrationHTML(data.part2.iconKey, data.part2);

    // Reset Player 1 Deck
    this.p1State.inputLetters = new Array(data.answer.length).fill(null);
    this.p1State.usedIndices.clear();
    this.p1State.bankTiles = this.generateBankLetters(data.answer);

    // Reset Player 2 Deck
    this.p2State.inputLetters = new Array(data.answer.length).fill(null);
    this.p2State.usedIndices.clear();
    this.p2State.bankTiles = this.generateBankLetters(data.answer);

    this.renderPlayerSlots(1);
    this.renderPlayerBank(1);
    this.renderPlayerSlots(2);
    this.renderPlayerBank(2);

    this.startRoundTimer();
  }

  generateBankLetters(answer) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = answer.split('');
    const targetTotal = 12; // 2 rows of 6
    const extraCount = Math.max(0, targetTotal - letters.length);

    for (let i = 0; i < extraCount; i++) {
      letters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }

    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }

    return letters.map((char, idx) => ({ id: idx, letter: char }));
  }

  renderPlayerSlots(playerNum) {
    const container = playerNum === 1 ? this.p1SlotsContainer : this.p2SlotsContainer;
    const state = playerNum === 1 ? this.p1State : this.p2State;
    const answer = this.shuffledLevels[this.currentRoundIndex].answer;

    container.innerHTML = '';
    for (let i = 0; i < answer.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'letter-slot';
      slot.dataset.index = i;

      const letterObj = state.inputLetters[i];
      if (letterObj) {
        slot.textContent = letterObj.letter;
        slot.classList.add('filled');
      }

      slot.addEventListener('click', () => this.handlePlayerSlotClick(playerNum, i));
      container.appendChild(slot);
    }
  }

  renderPlayerBank(playerNum) {
    const grid = playerNum === 1 ? this.p1KeyboardGrid : this.p2KeyboardGrid;
    const state = playerNum === 1 ? this.p1State : this.p2State;

    grid.innerHTML = '';
    state.bankTiles.forEach((tile) => {
      const btn = document.createElement('button');
      btn.className = 'letter-tile';
      btn.textContent = tile.letter;
      btn.dataset.id = tile.id;

      if (state.usedIndices.has(tile.id)) {
        btn.classList.add('used');
      }

      btn.addEventListener('click', () => this.handlePlayerTileClick(playerNum, tile));
      grid.appendChild(btn);
    });
  }

  handlePlayerTileClick(playerNum, tile) {
    if (this.isRoundLocked) return;
    const state = playerNum === 1 ? this.p1State : this.p2State;
    if (state.usedIndices.has(tile.id)) return;

    const emptyIdx = state.inputLetters.findIndex(item => item === null);
    if (emptyIdx === -1) return;

    audio.playTap();
    state.inputLetters[emptyIdx] = {
      letter: tile.letter,
      tileId: tile.id
    };
    state.usedIndices.add(tile.id);

    this.renderPlayerSlots(playerNum);
    this.renderPlayerBank(playerNum);
    this.checkPlayerSolution(playerNum);
  }

  handlePlayerKeyboardInput(playerNum, char) {
    if (this.isRoundLocked) return;
    const state = playerNum === 1 ? this.p1State : this.p2State;
    const tile = state.bankTiles.find(t => t.letter === char && !state.usedIndices.has(t.id));
    if (tile) {
      this.handlePlayerTileClick(playerNum, tile);
    }
  }

  handlePlayerSlotClick(playerNum, slotIdx) {
    if (this.isRoundLocked) return;
    const state = playerNum === 1 ? this.p1State : this.p2State;
    const slotData = state.inputLetters[slotIdx];
    if (!slotData) return;

    audio.playUntap();
    state.usedIndices.delete(slotData.tileId);
    state.inputLetters[slotIdx] = null;

    this.renderPlayerSlots(playerNum);
    this.renderPlayerBank(playerNum);
  }

  handlePlayerBackspace(playerNum) {
    if (this.isRoundLocked) return;
    const state = playerNum === 1 ? this.p1State : this.p2State;
    for (let i = state.inputLetters.length - 1; i >= 0; i--) {
      if (state.inputLetters[i] !== null) {
        this.handlePlayerSlotClick(playerNum, i);
        break;
      }
    }
  }

  shufflePlayerBank(playerNum) {
    audio.playTap();
    const state = playerNum === 1 ? this.p1State : this.p2State;
    for (let i = state.bankTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.bankTiles[i], state.bankTiles[j]] = [state.bankTiles[j], state.bankTiles[i]];
    }
    this.renderPlayerBank(playerNum);
  }

  checkPlayerSolution(playerNum) {
    const state = playerNum === 1 ? this.p1State : this.p2State;
    const isFull = state.inputLetters.every(item => item !== null);
    if (!isFull) return;

    const currentWord = state.inputLetters.map(item => item.letter).join('');
    const targetWord = this.shuffledLevels[this.currentRoundIndex].answer;

    if (currentWord === targetWord) {
      this.handlePlayerRoundWin(playerNum);
    } else {
      audio.playWrong();
      const panel = playerNum === 1 ? this.p1DeckPanel : this.p2DeckPanel;
      panel.classList.add('anim-shake');
      setTimeout(() => panel.classList.remove('anim-shake'), 500);
    }
  }

  handlePlayerRoundWin(playerNum) {
    if (this.isRoundLocked) return;
    this.isRoundLocked = true;
    this.clearIntervalTimer();

    audio.playRoundWin(playerNum === 1);

    if (playerNum === 1) {
      this.p1Score++;
      this.p1ScoreText.textContent = this.p1Score;
      this.versusRoundToast.className = 'round-toast p1-scored';
      this.versusRoundToast.textContent = `🎉 PLAYER 1 SCORED! (+1 Point)`;
      confetti.fire(60, { x: 0.25, y: 0.5 });
    } else {
      this.p2Score++;
      this.p2ScoreText.textContent = this.p2Score;
      this.versusRoundToast.className = 'round-toast p2-scored';
      this.versusRoundToast.textContent = `🎉 PLAYER 2 SCORED! (+1 Point)`;
      confetti.fire(60, { x: 0.75, y: 0.5 });
    }

    const currentAnswer = this.shuffledLevels[this.currentRoundIndex].answer;
    audio.speakWord(currentAnswer);

    if (this.p1Score >= this.targetScore || this.p2Score >= this.targetScore) {
      this.safeTimeout(() => this.triggerChampionScreen(), 1500);
    } else {
      this.safeTimeout(() => {
        this.renderRound(this.currentRoundIndex + 1);
      }, 2000);
    }
  }

  startRoundTimer() {
    this.roundTimeRemaining = this.roundTimeMax;
    this.updateTimerUI();

    this.timerInterval = setInterval(() => {
      this.roundTimeRemaining -= 1;
      this.updateTimerUI();

      if (this.roundTimeRemaining <= 5 && this.roundTimeRemaining > 0) {
        audio.playTick();
      }

      if (this.roundTimeRemaining <= 0) {
        this.handleTimeOut();
      }
    }, 1000);
  }

  updateTimerUI() {
    this.versusTimerDisplay.textContent = `⏱️ ${this.roundTimeRemaining}s`;
    const pct = Math.max(0, (this.roundTimeRemaining / this.roundTimeMax) * 100);
    this.versusTimerBar.style.width = `${pct}%`;
  }

  clearIntervalTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  handleTimeOut() {
    this.clearIntervalTimer();
    this.isRoundLocked = true;
    audio.playTimeOut();

    const targetWord = this.shuffledLevels[this.currentRoundIndex].answer;
    this.versusRoundToast.className = 'round-toast';
    this.versusRoundToast.textContent = `⏱️ Time's Up! The answer was: ${targetWord}`;
    audio.speakWord(targetWord);

    this.safeTimeout(() => {
      this.renderRound(this.currentRoundIndex + 1);
    }, 2200);
  }

  triggerChampionScreen() {
    this.clearIntervalTimer();
    audio.playVictory();
    confetti.fireGrand();

    if (this.p1Score > this.p2Score) {
      this.versusChampionTitle.textContent = '👑 PLAYER 1 WINS!';
      this.versusChampionSubtitle.textContent = `Congratulations Player 1 scored ${this.p1Score} points!`;
    } else if (this.p2Score > this.p1Score) {
      this.versusChampionTitle.textContent = '👑 PLAYER 2 WINS!';
      this.versusChampionSubtitle.textContent = `Congratulations Player 2 scored ${this.p2Score} points!`;
    } else {
      this.versusChampionTitle.textContent = "🤝 IT'S A DRAW!";
      this.versusChampionSubtitle.textContent = 'Intense battle tied with equal scores!';
    }

    this.versusFinalScoreText.textContent = `🔵 ${this.p1Score} - ${this.p2Score} 🔴`;
    this.modalVersusChampion.classList.add('active');
  }
}

function initGame() {
  if (!window.gameApp) {
    window.gameApp = new BattleGameApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}
