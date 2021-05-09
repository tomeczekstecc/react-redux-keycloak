# Allegro 2

## Funkcje react-redux-keycloak:

1. Logowanie,
2. Wylogowanie,
3. Pdgląd danych zalogowanego użytkwnika

## Adapter:

https://www.npmjs.com/package/keycloak-js

## Uruchomienie (wymagany Docker)

1. Sklonuj repo z `https://github.com/tomeczekstecc/react-redux-keycloak`
2. W konsoli w folderze głównym projektu wpisz polecenie `docker-compose up -d --build`
3. Przejdź do administracji Keycloak (`http://localhost:8080/auth`)Username: `admin`, Hasło: `admin`. Projekt automatycznie już utworzył realm o nazwie "rrk-test1" i samodzielnie utworzy clienta o nazwie "rrk-react".
4. Dodaj przynajmniej 1 usera w zakładce `Users` - ustaw hasło lub hasło tyczasowe w zakładce `Credentials`
5. Otwórz stronę: `http://localhost:3000` i zaloguj się danymi utworzonego usera

---

## PoC

https://1drv.ms/v/s!AjVT2CLlV9igoocT5P0lj-ZUtYAa9A?e=aggak3

https://1drv.ms/u/s!AjVT2CLlV9igoocUkWh85jqKqsx_NA?e=RqadSB


### Dzięki:

https://www.johnsmilga.com/

https://scalac.io/blog/user-authentication-keycloak-1/
