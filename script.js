// Global state
let currentScreen = 0;
let badOptionClicks = 0;
let lastOptionChanged = false;
let selectedImages = new Set();
let noButtonClickCount = 0;
let noButtonTexts = [
    'no 🙄',
    'are you sure? 😐',
    "wait... 🤔",
    "don't lie 😌",
    'think again 💭',
    'really? 🤨',
    'impossible 😅',
    'try harder 😏',
    'nice try 😎',
    'nope 🙅‍♀️',
    'wrong answer 🚫',
    'not working 😂',
    'this button is broken 💀',
    'error 404 ⚠️',
    'access denied 🔒',
    'still no 🙃',
    'giving up yet? 😈',
    'just click YES 💕',
    '...'
];
let noButtonHasLeft = true; // Track if mouse has left the button since last hover
let amazingOptionsSelected = new Set(); // Track selected options for Screen 2

// Screen navigation
function goToScreen(screenNumber) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    let screenId;
    if (screenNumber === 6.5) {
        screenId = 'screen-6-5';
    } else {
        screenId = `screen-${screenNumber}`;
    }

    const nextScreen = document.getElementById(screenId);
    if (nextScreen) {
        nextScreen.classList.add('active');
        currentScreen = screenNumber;

        // Special handling for calculation screen
        if (screenNumber === 6) {
            startCalculation();
        }

        // Special handling for results screen
        if (screenNumber === 7) {
            startResultsReveal();
        }
    }
}

// Popup management
function showPopup(message, nextScreen, buttonText = '👉 Next question') {
    const popup = document.getElementById('popup-overlay');
    const popupMessage = document.getElementById('popup-message');
    const popupBtn = document.getElementById('popup-btn');

    popupMessage.innerHTML = message;
    popupBtn.textContent = buttonText;
    popup.classList.add('active');

    popupBtn.onclick = function() {
        popup.classList.remove('active');
        if (nextScreen) {
            goToScreen(nextScreen);
        }
    };
}

// Screen 1: Handle "Who is Sofiia?" button
function handleWhoIsSofiia() {
    const emojiOverlay = document.getElementById('emoji-overlay');
    const button = document.getElementById('who-is-sofiia-btn');

    // Check if animation has already played
    if (button.textContent !== 'Who is Sofiia? 💀') {
        // Animation already played, just proceed normally
        showPopup('✔️ Correct answer.', 2);
        return;
    }

    // Show emoji overlay
    emojiOverlay.classList.add('active');

    // After animation completes (2.5s), hide emoji
    setTimeout(() => {
        emojiOverlay.classList.remove('active');

        // Change button text to "You are my Sofiia 😌"
        button.textContent = 'You are my Sofiia 😌';

        // After 1.5s, change to "And you are perfect 💖"
        setTimeout(() => {
            button.textContent = 'And you are perfect! 💖';
            // Now button is clickable again and will proceed when clicked
        }, 1500);
    }, 2500);
}

// Screen 2: Multi-select "What makes Sofiia amazing?" functions
function toggleAmazingOption(index) {
    const button = document.getElementById('amazing-option-' + index);

    if (amazingOptionsSelected.has(index)) {
        // Deselect
        amazingOptionsSelected.delete(index);
        button.classList.remove('selected');
    } else {
        // Select
        amazingOptionsSelected.add(index);
        button.classList.add('selected');
    }
}

function checkAmazingAnswers() {
    const totalOptions = 4;

    if (amazingOptionsSelected.size === 0) {
        // No options selected
        showPopup('Please select at least one option! 💫', null, 'Go back 🤔');
    } else if (amazingOptionsSelected.size === totalOptions) {
        // All options selected - correct!
        showPopup('Obviously! ✅', 3);
    } else {
        // Some but not all selected
        showPopup('True… but also something else.... 💫', null, 'Go back 🤔');
    }
}

// Screen 3: Change last option on hover
function changeLastOption() {
    if (!lastOptionChanged) {
        const specialOption = document.querySelector('.special-option');
        if (specialOption) {
            specialOption.textContent = '💘 Anything Sofiia wants';
            lastOptionChanged = true;
        }
    }
}

// Screen 4: Bad option behavior
function handleBadOption() {
    const badOption = document.getElementById('bad-option');
    badOptionClicks++;

    const messages = [
        'Not that amazing 🤡',
        'Are you serious? 😐',
        'This option is not allowed 🚫',
        ''
    ];

    if (badOptionClicks < messages.length) {
        badOption.textContent = messages[badOptionClicks];

        // Add shake animation
        badOption.classList.add('shake');
        setTimeout(() => badOption.classList.remove('shake'), 300);

        if (badOptionClicks === 3) {
            setTimeout(() => {
                badOption.style.display = 'none';
                showPopup('❌ Unrealistic answer removed.', null, 'Go back 🔙');
            }, 300);
        }
    }
}

// Screen 5: Checkbox shake
function shakeCheckbox() {
    const checkbox = document.getElementById('imperfect-check');
    const label = document.getElementById('checkbox-label');

    checkbox.checked = false;

    const container = checkbox.closest('.checkbox-container');
    container.classList.add('shake');

    label.textContent = '❌ Impossible.';

    setTimeout(() => {
        container.classList.remove('shake');
    }, 300);

    setTimeout(() => {
        label.textContent = 'I am not perfect';
    }, 2500);
}

// Screen 5: Show human proof popup
function showHumanProof() {
    const popup = document.getElementById('human-proof-popup');
    popup.classList.add('active');
}

function confirmHuman(answer) {
    const popup = document.getElementById('human-proof-popup');
    popup.classList.remove('active');
    goToScreen(6);
}

// Screen 6: Calculation animation
function startCalculation() {
    const messages = [
        'Counting compliments... 💕',
        'Measuring charm... ✨',
        'Analyzing cuteness levels... 🥰',
        'Comparing with the universe... 🌌',
        'Wait, recalculating... 🤔',
        'Error: Value too high! 🚨',
        'Adjusting parameters... ⚙️',
        'Machine learning 🤖...',
        'Result exceeding limits... 💥',
        'System overload... 🔥',
        'Final result computed! ✨'
    ];

    const progressValues = [0, 15, 42, 67, 85, 78, 65, 80, 92, 120, 300, Infinity];
    const msgElement = document.getElementById('calc-msg');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const continueBtn = document.getElementById('continue-btn');
    const progressContainer = document.getElementById('progress-container');
    const calculationContent = document.getElementById('calculation-content');

    // Add smoking class to containers
    progressContainer.classList.add('smoking');
    calculationContent.classList.add('smoking');

    let step = 0;

    function animateStep() {
        if (step < messages.length) {
            msgElement.textContent = messages[step];

            // Update progress bar
            const progress = progressValues[step + 1];
            if (progress === Infinity) {
                progressBar.style.width = '100%';
                progressText.textContent = '∞%';
            } else {
                // Cap display at 100% but allow value to go higher
                const displayWidth = Math.min(progress, 100);
                progressBar.style.width = displayWidth + '%';
                progressText.textContent = progress + '%';
            }

            step++;
            setTimeout(animateStep, 1200);
        } else {
            // Show continue button
            setTimeout(() => {
                continueBtn.style.display = 'inline-block';
                // Remove smoking effect when done
                progressContainer.classList.remove('smoking');
                calculationContent.classList.remove('smoking');
            }, 1000);
        }
    }

    animateStep();
}

// Screen 6.5: Image selection
function toggleImage(index) {
    const imageBox = document.getElementById('img-' + index).closest('.image-box');

    if (selectedImages.has(index)) {
        selectedImages.delete(index);
        imageBox.classList.remove('selected');
    } else {
        selectedImages.add(index);
        imageBox.classList.add('selected');
    }
}

function confirmImageSelection() {
    if (selectedImages.size === 0) {
        showPopup('⚠️ Error: At least one correct answer must be selected 😌', null);
    } else if (selectedImages.size === 6) {
        showPopup('💘 Bonus unlocked: Sofiia has premium taste.<br><br>✔️ Verification complete.<br>You have excellent taste 😌', 7, 'See results 👀');
    } else {
        showPopup('✔️ Verification complete.<br>You have excellent taste 😌', 7, 'See results 👀');
    }
}

// Screen 7: Results reveal sequence
function startResultsReveal() {
    const revealText1 = document.getElementById('reveal-text-1');
    const revealText2 = document.getElementById('reveal-text-2');
    const readyBtn = document.getElementById('ready-btn');

    // Reset everything first
    revealText1.style.display = 'none';
    revealText2.style.display = 'none';
    readyBtn.style.display = 'none';

    // Show "But there is one more thing!" after 2 seconds
    setTimeout(() => {
        revealText1.style.display = 'block';
        revealText1.style.animation = 'fadeIn 0.5s ease';
    }, 2000);

    // Show "Are you ready?" after 4 seconds
    setTimeout(() => {
        revealText2.style.display = 'block';
        revealText2.style.animation = 'fadeIn 0.5s ease';
    }, 4000);

    // Show "I am ready!" button after 6 seconds
    setTimeout(() => {
        readyBtn.style.display = 'inline-block';
        readyBtn.style.animation = 'fadeIn 0.5s ease';
    }, 6000);
}

// Screen 8 & 9: Yes/No button behavior
function handleYes() {
    goToScreen(9);
}

function handleNoHover() {
    // Only trigger if mouse has left the button since last hover
    if (!noButtonHasLeft) {
        return;
    }

    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');

    // Mark that mouse hasn't left yet
    noButtonHasLeft = false;

    // Move NO button to random position
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Update text
    if (noButtonClickCount < noButtonTexts.length) {
        noBtn.textContent = noButtonTexts[noButtonClickCount];
        noButtonClickCount++;
    }

    // Shrink NO button
    noBtn.classList.add('shrink');

    // Grow YES button
    yesBtn.classList.add('grow');
    yesBtn.classList.add('glow');

    // Make NO button disappear eventually
    if (noButtonClickCount >= noButtonTexts.length) {
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 300);
    }
}

function handleNoLeave() {
    // Mark that mouse has left the button
    noButtonHasLeft = true;
}

function handleNoClick() {
    handleNoHover(); // Treat click same as hover
}

// Restart test
function restartTest() {
    // Reset all state
    currentScreen = 0;
    badOptionClicks = 0;
    lastOptionChanged = false;
    selectedImages.clear();
    noButtonClickCount = 0;
    noButtonHasLeft = true;

    // Reset bad option
    const badOption = document.getElementById('bad-option');
    if (badOption) {
        badOption.style.display = 'block';
        badOption.textContent = 'Not that amazing 🤡';
    }

    // Reset last option
    const specialOption = document.querySelector('.special-option');
    if (specialOption) {
        specialOption.textContent = 'Staying home 🛋️';
    }

    // Reset "Who is Sofiia?" button
    const whoIsSofiiaBtn = document.getElementById('who-is-sofiia-btn');
    if (whoIsSofiiaBtn) {
        whoIsSofiiaBtn.textContent = 'Who is Sofiia? 💀';
    }

    // Reset amazing options (Screen 2)
    amazingOptionsSelected.clear();
    for (let i = 0; i < 4; i++) {
        const button = document.getElementById('amazing-option-' + i);
        if (button) {
            button.classList.remove('selected');
        }
    }

    // Reset image selections
    for (let i = 0; i < 6; i++) {
        const img = document.getElementById('img-' + i);
        if (img) {
            img.closest('.image-box').classList.remove('selected');
        }
    }

    // Reset NO button
    const noBtn = document.getElementById('no-btn');
    if (noBtn) {
        noBtn.style.display = 'inline-block';
        noBtn.style.position = 'relative';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
        noBtn.textContent = 'no 🙄';
        noBtn.classList.remove('shrink');
    }

    // Reset YES button
    const yesBtn = document.getElementById('yes-btn');
    if (yesBtn) {
        yesBtn.classList.remove('grow', 'glow');
    }

    // Reset progress bar and calculation
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const continueBtn = document.getElementById('continue-btn');
    const progressContainer = document.getElementById('progress-container');
    const calculationContent = document.getElementById('calculation-content');
    const calcMsg = document.getElementById('calc-msg');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';
    if (continueBtn) continueBtn.style.display = 'none';
    if (progressContainer) progressContainer.classList.remove('smoking');
    if (calculationContent) calculationContent.classList.remove('smoking');
    if (calcMsg) calcMsg.textContent = 'Counting compliments... 💕';

    // Reset results reveal elements
    const revealText1 = document.getElementById('reveal-text-1');
    const revealText2 = document.getElementById('reveal-text-2');
    const readyBtn = document.getElementById('ready-btn');
    if (revealText1) revealText1.style.display = 'none';
    if (revealText2) revealText2.style.display = 'none';
    if (readyBtn) readyBtn.style.display = 'none';

    // Go to first screen
    goToScreen(0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Make sure first screen is active
    goToScreen(0);
});
