# Emoji Finder

Верстка макета Figma, фрейм 9249:18.

Стек: React, TypeScript, Vite, Oxlint. Карточки расположены с помощью CSS Grid; шапка, поиск и содержимое карточек используют Flexbox. Первая строка src/index.css подключает Inter через Google Fonts.

## Запуск

```sh
npm ci
npm run dev
```

## Проверки и сборка

```sh
npm run lint
npm run build
npm run preview
```

Поиск фильтрует три карточки макета по названию, эмодзи и ключевым словам без учета регистра. Повтор карточки 1234 сохранен из оригинала. На планшете две колонки, на телефоне одна. Эмодзи отображаются системным шрифтом, поэтому их рисунок может отличаться на разных ОС. Для загрузки Inter необходим интернет.

Макет: https://www.figma.com/design/HCciSRJI0qWzJwNoK6mb4b/Projects-React?node-id=9249-18
