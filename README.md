# Brain Games

«Игры разума» — набор из пяти консольных игр для тренировки мозга. Каждая игра задаёт вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов игра считается завершённой.

## Минимальные требования

- Node.js версии 18 и выше

## Установка
1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2. Склонируйте репозиторий:

```bash
git clone https://github.com/swiftkeytorosan-maker/frontend-project-44.git
cd frontend-project-44
```

## Запуск

```bash
# "Проверка на чётность"
node ./bin/brain-even.js
# Если есть Make
make brain-even

# "Калькулятор"
node ./bin/brain-calc.js
# Если есть Make
make brain-calc

# "НОД"
node bin/brain-gcd.js
# Если есть Make
make brain-gcd

# "Арифметическая прогрессия"
node bin/brain-progression.js
# Если есть Make
make brain-progression

# "Простое ли число"
node bin/brain-prime.js
# Если есть Make
make brain-prime
```

## Игры

### Brain-even

Игра, в которой пользователю нужно определить, является ли число чётным.
[![asciicast](https://asciinema.org/a/LAOB21r6mgFt81yl.svg)](https://asciinema.org/a/LAOB21r6mgFt81yl)

### Brain-calc

Игра, в которой пользователю нужно вычислить результат арифметического выражения.
[![asciicast](https://asciinema.org/a/SpOUW5JewMG9lmvW.svg)](https://asciinema.org/a/SpOUW5JewMG9lmvW)

### Brain-gcd

Игра, в которой пользователю нужно найти наибольший общий делитель (НОД) двух чисел.
[![asciicast](https://asciinema.org/a/ptPB6ankiNpfCmlZ.svg)](https://asciinema.org/a/ptPB6ankiNpfCmlZ)

### Brain-progression

Игра, в которой пользователю нужно найти пропущенное число в арифметической прогрессии.
[![asciicast](https://asciinema.org/a/OhxVmszYMS2O67DY.svg)](https://asciinema.org/a/OhxVmszYMS2O67DY)

### Brain-prime

Игра, в которой пользователю нужно определить, является ли число простым.
[![asciicast](https://asciinema.org/a/w9vrwwXQZmEH8qoo.svg)](https://asciinema.org/a/w9vrwwXQZmEH8qoo)

## Hexlet tests and linter status:

[![Actions Status](https://github.com/swiftkeytorosan-maker/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/swiftkeytorosan-maker/frontend-project-44/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=swiftkeytorosan-maker_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=swiftkeytorosan-maker_frontend-project-44)
