document.addEventListener('mousemove', (data) => {

    const mouseX = data.clientX;
    const mouseY = data.clientY;

    const rick_and_morty = document.getElementById('rick_and_morty')
    const rect = rick_and_morty.getBoundingClientRect();

    const anchorX = rect.left + rect.width/2;
    const anchorY = rect.top + rect.height/2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);


    const eyes = document.querySelectorAll(".eye")
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${angleDeg}deg)`;
    })

})



function angle (cx, cy, ex , ey){
    const dy = ey-cy;
    const dx = ex-cx;

    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg
}