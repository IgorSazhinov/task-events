/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let body = document.querySelector('body');
    let button = document.createElement('button');
    button.innerText = 'Удали меня';
    body.append(button);
    button.addEventListener('click', () => {
        button.remove();
    });
}

// createButton()
/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    console.log(arr);
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    body.append(ul);
    arr.forEach((element) => {
        let li = document.createElement('li');
        ul.append(li);
        li.innerText = element;
    });
    ul.addEventListener('mouseover', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
            let el = e.target;
            el.setAttribute('title', `${el.textContent}`);
        }
    });
}

// createArrList(['нулевой элемент','первый элемент','второй элемент',])
/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let body = document.querySelector('body');
    body.insertAdjacentHTML(
        'afterbegin',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    let a = document.querySelector('a');
    let click = function (e) {
        if (a.textContent === 'tensor') {
            e.preventDefault();
            a.innerText = a.innerText + ' ' + a.href;
        }
    };
    a.addEventListener('click', click);
}
// createLink()
/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let body = document.querySelector('body');
    let element = `<ul>
      <li>Пункт</li>
   </ul>
   <button>Добавить пункт</button>`;
    body.innerHTML = element;
    body.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
            console.log(e.target.nodeName);
            e.target.innerText = e.target.innerText + '!';
        }
        if (e.target && e.target.nodeName === 'BUTTON') {
            console.log(e.target.nodeName);
            let ul = document.querySelector('ul');
            ul.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
        }
    });
}
// createList()
