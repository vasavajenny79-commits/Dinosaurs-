const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const music = document.getElementById('bg-music');
const bunnyImg = document.getElementById('bunny-img');
const question = document.getElementById('question');

let noCount = 0;

// Music starts on first click
document.body.addEventListener('click', () => {
    music.play();
}, { once: true });

noBtn.addEventListener('click', () => {
    noCount++;
    
    if (noCount === 1) {
        question.innerText = "Are you sure, Patel? 🥺";
        bunnyImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v8xKKH6h7S92S5xK3K/giphy.gif";
    } else if (noCount === 2) {
        question.innerText = "Please rethink... 😭";
        bunnyImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/T1WqKghJruUGvCSTuC/giphy.gif";
    } else if (noCount >= 3) {
        // Button moves away
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="text-align:center;">
            <h1 style="color:#ff4d6d; font-size:40px;">Yayyy! I Love You, Patel! ❤️💍</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v8xKKH6h7S92S5xK3K/giphy.gif" style="width:300px;">
            <p style="font-size:20px; color:#ff4d6d;">Forever and Always!</p>
        </div>
    `;
});
