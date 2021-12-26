function increment(num) {
    return num + 1;
}

function startAnimation1() {
    let id = null;
    const elem = document.getElementById("example_Fig_31");
    let pos = 250;
    clearInterval(id);
    id = setInterval(frame, 3);

    function frame() {
        if (pos == 800) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}


function startExample1() {
    const images = document.querySelectorAll('[id^="example_Fig_1"]');
    console.log(images);
    images.forEach(item => { item.classList.toggle("example_Fig_1_animated") });
}

function startExample2() {
    const images = document.querySelectorAll('[id^="example_Fig_2"]');
    console.log(images);
    images.forEach(item => { item.classList.toggle("example_Fig_1_animated") });
}

function startExample3() {
    const images = document.querySelectorAll('[id^="example_Fig_3"]');
    console.log(images);
    images.forEach(item => { item.classList.toggle("example_Fig_1_animated") });
}

function startExample4() {
    const images = document.querySelectorAll('[id^="example_Fig_4"]');
    console.log(images);
    images.forEach(item => { item.classList.toggle("example_Fig_4_animated") });

}

function startExample5() {
    const image = document.querySelector('.example5');
    const btn = document.querySelector('#example5_btn');
    console.log(image);
    const running = image.style.animationPlayState === 'running';
    image.style.animationPlayState = running ? 'paused' : 'running';
    if (running == false) btn.innerHTML = 'Стоп';
    else btn.innerHTML = 'Продължи';
    console.log(running);

}