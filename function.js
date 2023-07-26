document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.getElementById('imgElement');

    imgElement.addEventListener('mouseover', () => {
        imgElement.src = 'https://i.imgur.com/zL2hWc5.png';
    });

    imgElement.addEventListener('mouseout', () => {
        imgElement.src = 'https://i.imgur.com/p4YIRS1.jpg';
    });
});
