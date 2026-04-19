# OdilWeb Landing

Лендинг-портфолио для веб-разработки на `React + Vite + SCSS`.

Проект уже включает:

- современный IT-стиль интерфейса
- отдельные секции и компонентную структуру
- переключение языков `RU / UZ / ENG`
- форму обратной связи с подключением к API
- адаптивную верстку для мобильных, планшетов и десктопа

## Stack

- React 19
- Vite 8
- SCSS
- ESLint

## Scripts

```bash
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
```

Для проверки кода:

```bash
npm run lint
```

## Project Structure

```text
src/
  App/
  components/
    Layout/
    sections/
  context/
  i18n/
  services/
  styles/
```

## Deploy

Проект готов для загрузки в GitHub и дальнейшего деплоя на:

- Vercel
- Netlify
- GitHub Pages через отдельный deploy workflow

## Notes

- Язык по умолчанию: `RU`
- API формы лежит в `src/services/api.js`
- Переводы лежат в `src/i18n/translations.js`
