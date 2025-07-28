const karthik = document.querySelector('.karthik');
const dhanush = document.querySelector('.dhanush');

kabir.addEventListener('mouseover', () => {
    karthik.style.transform = 'scale(1.1)';
});

kabir.addEventListener('mouseout', () => {
    karthik.style.transform = 'scale(1)';
});

saniya.addEventListener('mouseover', () => {
    dhanush.style.transform = 'scale(1.1)';
});

saniya.addEventListener('mouseout', () => {
    dhanush.style.transform = 'scale(1)';
});