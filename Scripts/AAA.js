const divider = document.querySelector('.divider');
const leftPanel = document.querySelector('.panel.left');
const rightPanel = document.querySelector('.panel.right');
let isDragging = false;

divider.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const containerWidth = document.querySelector('.split-view').offsetWidth;
    const newLeftWidth = e.clientX / containerWidth * 100;

    if (newLeftWidth > 10 && newLeftWidth < 90) { // Prevent extreme shrinking
        leftPanel.style.flex = `${newLeftWidth} 1 0%`;
        rightPanel.style.flex = `${100 - newLeftWidth} 1 0%`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = '';
});