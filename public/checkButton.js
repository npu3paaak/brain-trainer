let input = document.querySelector('#textInput');
let button = document.querySelector('#button');
let textMemory = document.querySelector("#memoryText");
let countWords = textMemory.innerHTML.split(',').length;

input.disabled = true;
setTimeout(() => {
    textMemory.style.display = "none";
    input.disabled = false;

}, 5000);

button.addEventListener('click', function() {
    console.log(countWords);

    textMemory.style.display = "none";


    let result = [];
    let arrOfInput = (input.value.split(',')).forEach(element => result.push(element.replace(/\s/g, '')));
    if (result.join() === textMemory.innerHTML) {
        this.classList.add('colored');
        let promise = fetch('/wordsCounter/', {
            method: 'POST',
            body: JSON.stringify([true]),
            headers: {
                'Content-Type': 'application/json',

            } // передаем ссылку на форму
        }).then(
            response => {
                return response.text();
            }
        ).then(
            text => {
                textMemory.innerHTML = (JSON.parse(text)).join();
                textMemory.style.display = "block";
                alert('Ото ти козак!'); // ответ сервера
                input.value = '';
                input.disabled = true;

                setTimeout(() => {
                    textMemory.style.display = "none";
                    input.disabled = false;

                }, 5000);
            }
        );

    } else {
        let promise = fetch('/wordsCounter/', {
            method: 'POST',
            body: JSON.stringify([false]),
            headers: {
                'Content-Type': 'application/json',

            } // передаем ссылку на форму
        }).then(
            response => {
                return response.text();
            }
        ).then(
            text => {
                alert('Ти гівно!'); // ответ сервера
                textMemory.innerHTML = (JSON.parse(text)).join();
                textMemory.style.display = "block";
                input.value = '';
                input.disabled = true;
                setTimeout(() => {
                    textMemory.style.display = "none";
                    input.disabled = false;

                }, 5000);

            }
        );
    }

});