var game = $('meta[name=game]').attr("content");

var general_quotes = [
	'“Если вы знаете врага и знаете самого себя, то вы можете не бояться за исход сотни сражений.” ― Сунь-Цзы, Искусство войны',
	'“Непобедимость есть оборона; возможность победить есть наступление.” ― Сунь-Цзы, Искусство войны',
	'“Всегда прощайте своих врагов, ничто не раздражает их так сильно.” ― Оскар Уайльд',
	'“Никогда не перебивайте вашего врага, когда он делает ошибку.﻿” ― Наполеон Бонапарт﻿',	
	'“Если вы знаете своих врагов и себя, вы одержите победу во всех сражениях; если вы не знаете своих врагов, но знаете себя, вы выиграете одно из каждых двух сражений и одно проиграете; если вы не знаете ни своих врагов, ни себя, вы рискуете потерпеть поражение в каждом сражении.” ― Сунь-Цзы, Искусство войны',
	'“Изучайте прошлое, если вы желаете определить будущее.” ― Конфуций',
	'“Пусть ваши планы будут темными и непроницаемыми как ночь, и когда вы нападаете, как удар молнии.” ― Сунь-Цзы, Искусство войны',
	'“Генералы победители сначала выигрывают, а потом идут на войну, в то время как побежденные генералы сначала идут на войну, а затем стремятся выиграть.” ― Сунь-Цзы, Искусство войны',
	'“Мудрец получит больше пользы от своих врагов, чем глупец от своих друзей.” ― Бальтасар Грасиан, Искусство житейской мудрости',
	'“Приёмы ведения войны основаны на обмане. Поэтому, когда мы способны атаковать, мы должны выглядеть так, будто не способны, а когда мы задействуем силы, мы должны выглядеть неактивными; когда мы рядом, мы должны заставить врага поверить, что мы далеко, когда мы далеко, то должны заставить его поверить, что мы близко.” ― Сунь-Цзы, Искусство войны',	
	'“В разгар хаоса, есть также и возможность” ― Сунь-Цзы, Искусство войны',
	'“Найдите время, чтобы подумать, но когда пришло время действовать, не думайте и идите вперёд.” ― Наполеон Бонапарт',
	'“В ходе подготовки к бою я всегда считал, что планы бесполезны, но планирование является необходимым.” ― Эйзенхауэр, Дуайт Дэвид ',
	'“Наилучшее – сохранить армию противника в целости, на втором месте – разбить её. Поэтому сто раз сразиться и сто раз победить – это не лучшее из лучшего; лучшее из лучшего – покорить чужую армию, не сражаясь.” ― Сунь-Цзы, Искусство войны',
	'“Если можно этого избежать - не бей вообще, но если бьешь - бей сильно.” ― Теодор Рузвельт',
	'“Одержать сто побед в ста битвах — это не вершина воинского искусства. Повергнуть врага без сражения — вот вершина.” ― Сунь-Цзы, Искусство войны',
	'“Мощь – это умение применять тактику, сообразуясь с выгодой.” ― Сунь-Цзы, Искусство войны',
	'“Пробудите его и изучите принципы его действия или бездействия. Заставьте его раскрыть себя, чтобы выяснить его уязвимые места.” ― Сунь-Цзы, Искусство войны',
	'“Правило ведения войны заключается в том, чтобы не полагаться на то, что противник не придет, а полагаться на то, с чем я могу его встретить; не полагаться на то, что он не нападет, а полагаться на то, что я сделаю нападение на себя невозможным для него.” ― Сунь-Цзы, Искусство войны',
	'“Если ваш противник имеет вспыльчивый характер, раздражайте его. Притворитесь слабым, чтобы он стал высокомерными.” ― Сунь-Цзы, Искусство войны',
	'“Весь секрет кроется в заблуждении противника, поэтому он не может понять наше реальное намерение.” ― Сунь-Цзы, Искусство войны'
];

var tank_quotes = [];

var ship_quotes = ['“Нет такого понятия как дружелюбная торпеда” ― The Mighty Jingles'];

$(document).ready(function() {
	var quotes;
	if (game == "wows") {
		quotes = general_quotes.concat(ship_quotes);
	} else {
		quotes = general_quotes.concat(tank_quotes);
	}

	$("#quote").text(quotes[Math.floor(Math.random() * quotes.length)]);
});