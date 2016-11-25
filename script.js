/*Объявление переменной, вывод на экран значения переменной 
(используется конкатенация строк и теги html внутри строк).

Метод onload объекта window является обработчиком события полной загрузки содержимого страницы 
(только после этого срабатывает скрипт).
Вместо этого можно просто подключать скрипт в конце <body>, а не в заголовке страницы <head>*/

/*window.onload = function() {
	var age = 35;
	document.write("Мой <br> возраст <strong>" + age + "</strong> лет");
};*/


/*Объявление и вывод на экран переменных разных типов*/

/*window.onload = function() {
	var name = 'Юра';
	var sex = true;
	document.write("Меня зовут " + name);
	document.write("<br>Я мужчина? - " + sex);
};*/


/*Арифметические операции, числовой и строковый тип данных, конкатенация строк, 
приведение строкового типа к числовому*/

/*window.onload = function() {
	var x = 5;
	var y = 7;
	var z = 12;
	var a = 5.5;
	var b = 8;
	document.write((5 + 7) / ((12 - 5.5) * (5 - 8 * 12)));
	document.write('<br>' + (x + y) / ((z - a) * (x - b * z)));

	var str_1 = '17';
	var str_2 = '-5';
	document.write('<br>' + str_1 + str_2 + '<br>');
	document.write(+str_1 + +str_2);
	document.write('<br>');
	document.write(Number(str_1) + Number(str_2));
	console.log(typeof str_1);
	console.log(typeof Number(str_1));
};*/


/*Работа условного оператора if*/

/*window.onload = function() {
	var sex = true;
	if (sex) document.write('Я мужчина');
	else document.write('Я женщина');

	document.write('<br>');

	var age = 35;
	if (age < 18) document.write('Я молодой');
	else if (19 <= age < 50) document.write('Я зрелый');
	else document.write('Я старый');
};*/


/*Вывод в цикле таблицы умножения*/

/*window.onload = function() {
	document.write('<h3>Таблица умножения</h3>');
	document.write('<table style="border-collapse: collapse">');
	for (var i = 1; i < 10; i++) {
		document.write('<tr>');
		for (var j = 1; j < 10; j++) {
			var result = i * j;
			document.write('<td style="border: 1px solid blue; width: 20px; text-align: center">' + result + '</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
};*/


/*Использование метода prompt() для взаимодействия с пользователем (ввода числа).
Использован бесконечный цикл while(true) до тех пор, пока пользователь не введет корректное число в соответствии с запросом.
Далее в цикле считается сумма целых чисел от 1 до введенного числа и выводится на экран.*/

/*window.onload = function() {
	var sum = 0;
	while(true) {
		var num = +prompt('Введите целое число больше 0:', '');
		if (num > 0) break;
	}
	for (var i = num; i > 0; i--) {
		sum += i;
	}
	alert(sum);
};*/


/*Создание и наполнение массива элементами в цикле.
Вывод элементов массива в прямом и обратном порядке.*/

/*window.onload = function() {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = i;
	}
	console.log(arr);
	arr.reverse();
	console.log(arr);
};*/


/*Создание двумерного массива 3 на 3, вывод его содержимого в таблице (каждый элемент массива в своей ячейке).
Далее заменяем диагональные элементы 1, а остальные 0 и повторно выводим массив в таблице. */

/*window.onload = function() {
	var arr_1 = [4, 7, 2];
	var arr_2 = [3, 5, 9];
	var arr_3 = [7, 2, 8];
	var arr = [arr_1, arr_2, arr_3];

	console.log(arr);

	document.write('<table>');
	for (var i = 0; i < arr.length; i++) {
		document.write('<tr>');
		for (var j = 0; j < arr[i].length; j++) {
			document.write('<td>' + arr[i][j] + '</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (i == j) arr[i][j] = 1;
			else arr[i][j] = 0;
		}
	}

	document.write('<table>');
	for (var i = 0; i < arr.length; i++) {
		document.write('<tr>');
		for (var j = 0; j < arr[i].length; j++) {
			document.write('<td>' + arr[i][j] + '</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
};*/


/*Функция createArr() выводит элементы двумерного массива в таблице.
Функция arrLength() принимает на вход массив и возвращает сумму его элементов.*/

/*window.onload = function() {
	var arr_1 = [4, 7, 2];
	var arr_2 = [3, 5, 9];
	var arr_3 = [7, 2, 8];
	var arr = [arr_1, arr_2, arr_3];

	console.log(arr);

	function createArr(arr) {
		document.write('<table>');
		for (var i = 0; i < arr.length; i++) {
			document.write('<tr>');
			for (var j = 0; j < arr[i].length; j++) {
				document.write('<td>' + arr[i][j] + '</td>');
			}
			document.write('</tr>');
		}
		document.write('</table>');
	}

	createArr(arr);

	var arr_4 = new Array(5, 6, 8, 2, 4);

	function arrLength(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	}

	alert(arrLength(arr_4));
}*/


/*Использование глобальной переменной counter внутри функции 
(можно использовать, т.к. у переменной глобальная область видимости)*/

/*window.onload = function() {
	var counter = 0;
	function addOne() {
		counter++;
	}
	function countView() {
		alert(counter);
	}
	addOne();
	addOne();
	addOne();
	addOne();
	addOne();
	countView();
}*/


/*Обработчик события (при наведении мыши на элемент его ширина увеличивается, 
когда убираем мышь - ширина уменьшается).*/

/*window.onload = function() {
	var img = document.getElementById('image');
	
	img.onmouseover = function() {
		img.style.width = '300px';
	}
	img.onmouseout = function() {
		img.style.width = '100px';
	}
}*/


/*Обработчик события (при поочередном клике по элементу его ширина увеличивается/уменьшается 
в зависимости от первоначального размера).*/

/*window.onload = function() {
	document.write('<img id="image" src="image.jpg" width="100px">');
	var img = document.getElementById('image');

	img.onclick = function() {
		if (img.style.width == '100px' || img.style.width == '') {
			img.style.width = '300px';
		} else img.style.width = '100px';
	}
}*/


/*Проверка правильности ввода логина с помощью регулярного выражения 
(логин должен быть от 3 до 32 символов и состоять только из цифр и букв).
Вместо /[a-zA-Z]/ можно написать /[a-z]/i, эффект будет тот же 
(i в конце означает, что регистр не учитывается).*/

/*window.onload = function() {
	document.getElementById('button').onclick = function() {
		if (document.getElementById('login').value.length < 3 ||
		document.getElementById('login').value.length > 32) 
			alert('Логин должен быть от 3 до 32 символов');
		else {
			for (var i = 0; i < document.getElementById('login').value.length; i++) {
				if (!document.getElementById('login').value[i].match(/[0-9a-zA-Z]/)) {
					alert('Логин должен состоять только из цифр и букв!');
					document.getElementById('login').value = '';
					break;
				} 
			}
		}
	}
}*/


/*Таймер времени, проведенного пользователем на сайте (минуты и секунды).
Если число минут или секунд меньше 10, то добавляется ведущий 0.*/

/*window.onload = function() {
	var minutes = 0;
	var seconds = 0;
	setTimeout(timer, 0);
	setInterval(timer, 1000);
		
	function timer() {
		if (seconds > 59) {
			seconds = 0;
			minutes++;
		}

		if (minutes < 10) document.getElementById('min').innerHTML = '0' + minutes;
		else document.getElementById('min').innerHTML = minutes;

		if (seconds < 10) document.getElementById('sec').innerHTML = '0' + seconds;
		else document.getElementById('sec').innerHTML = seconds;

		seconds++;
	}
}*/


/*Ввод пользователем значения в градусах, выбор в выпадающем списке sin или cos,
расчет значения с помощью соответствующих методов класса/объекта Math и его вывод в документе*/

/*window.onload = function() {
	var result;
	document.getElementById('button').onclick = function() {
		if (document.getElementById('select').value == 'sin') 
			result = (Math.sin(document.getElementById('number').value * Math.PI / 180)).toFixed(1);
		else result = Math.cos(document.getElementById('number').value * Math.PI / 180).toFixed(1);

		document.getElementById('result').innerHTML = result;
	}
}*/


/*Ввод пользователем в форму своей даты рождения в заданном формате ДД.ММ.ГГГГ, 
проверка корректности ввода с помощью регулярного выражения.
Если данные введены корректно, вывод в отдельном поле сколько дней, месяцев, лет прожил человек.*/

/*window.onload = function() {
	document.getElementById('button').onclick = function() {
		
		if (!document.getElementById('date').value.match(/^[0-3][0-9][\.][0-1][0-9][\.][1-2][0-9][0-9][0-9]$/)) {
			alert('Дата рождения введена некорректно!');
			document.getElementById('date').value = '';
		}

		var data = new Date();
		var date = new Date((document.getElementById('date').value[6] + document.getElementById('date').value[7] +
							document.getElementById('date').value[8] + document.getElementById('date').value[9]), 
							(document.getElementById('date').value[3] + document.getElementById('date').value[4] - 1), 
							(document.getElementById('date').value[0] + document.getElementById('date').value[1]));
		
		document.getElementById('days').innerHTML = Math.floor((data - date) / (3600 * 24 * 1000));
		document.getElementById('month').innerHTML = Math.floor((data - date) / (3600 * 24 * (365 / 12) * 1000));
		document.getElementById('years').innerHTML = Math.floor((data - date) / (3600 * 24 * 365 * 1000));
	}
}*/


/*Используются методы slice() для вырезания из исходного массива подмассива и 
concat() - для объединения нескольких массивов/элементов в новый большой массив.*/

/*window.onload = function() {
	var startArr = [1, 5, 7, 8];
	var shortArr = startArr.slice(1, 3);
	console.log(startArr);
	console.log(shortArr);

	var arr_1 = [5, 7, 0];
	var arr_2 = [1, 3, 5];
	var num = 9;
	var newArr = arr_1.concat(arr_2, num);
	console.log(newArr);
}*/


/*Поиск введенной пользователем в поле строки в тексте статьи (без учета регистра).
Все найденные совпадения выделяются в статье желтым цветом.
Если ничего не найдено, выводится сообщение о неудачном поиске.*/

/*window.onload = function() {
	var article = document.getElementById("article");
	var articleStart = article.innerHTML;

	document.getElementById("button").onclick = function() {
		var articleFirstPart = "";
		var articleSecondPart = articleStart;
		var search = document.getElementById("search").value.toLowerCase();
		var index = articleSecondPart.toLowerCase().indexOf(search);

		if (index == -1) {
			alert("Ничего не найдено!");
		} else {
			while(index != -1) {
				var substr = articleSecondPart.substring(index, (index + search.length));
				articleFirstPart += articleSecondPart.substring(0, index) + "<span class='search'>" + substr + "</span>";
				articleSecondPart = articleSecondPart.substring(index + search.length, articleSecondPart.length + 1);
				index = articleSecondPart.toLowerCase().indexOf(search);
			}
			article.innerHTML = articleFirstPart + articleSecondPart;
		}
	}
}*/


/*Добавление и удаление пунктов меню (при помощи работы с DOM).
Если все пункты уже удалены, выводится сообщение, что удалять больше нечего.*/

/*window.onload = function() { 

	var list = document.getElementById("list");
	var add = document.getElementById("add");
	var del = document.getElementById("del");
	
	add.onclick = function() {
		var links = list.childNodes;
		var li = [];
		var j = 0;

		for (var i = 0; i < links.length; i++) {
			if (links[i] instanceof HTMLLIElement) {
				li[j] = links[i];
				j++;
			}
		}

		list.innerHTML += "<li><a href='#'>Ссылка_" + (li.length + 1) + "</a></li>";
	}

	del.onclick = function() {
		var links = list.childNodes;
		var newLinks = [];
		var counter = 0;
		var j = 0;
		
		for (var i = 0; i < links.length; i++) {
			if (links[i] instanceof HTMLLIElement) {
				counter++;
				newLinks[j] = links[i];
				j++;
			}
		}

		if (counter == 0) {
			alert("Все уже удалено!");
		} else {
			list.innerHTML = "";
			for (var k = 0; k < (newLinks.length - 1); k++) {
				list.innerHTML += "<li>" + newLinks[k].innerHTML + "</li>";
			}
		}
	}
}*/


/*При выборе пола пользователем в форме (кнопка типа radio, состояние checked), значение поля (пол) выводится в консоль.*/

/*var input = document.querySelectorAll(".sex");

for (var i = 0; i < input.length; i++) {
  input[i].onclick = function() {
    if (this.checked == true) {
      console.log(this.value);
    }
  }
}*/