# Allegro 2

## Funkcje react-redux-keycloak:

1. Logowanie,
2. Wylogowanie,
3. Pdgląd danych zalogowanego użytkwnika

## Adapter:

https://www.npmjs.com/package/keycloak-js

## Projekt zakłada, że instancja Keycloak działa na porcie 8080:

1. Dodaj klienta w zakładcę `Clients` o nazwie "josm"
2. Dodaj przynajmniej 1 usera - ustaw hasło lub hasło tyczasowe
3. Dodaj "http://localhost:3000/" w polu `Root URL` i zapisz

## uruchom apkę - opcja 1 (wymagany Docker):

1. W konsoli w folderze głównym projektu wpisz polecenie `` (parę minut to potrwa -  łacznie ze ściągnięciem obrazów z docker-hub)
2. Otwórz stronę: `http://localhost:3000`

## Uruchom apkę - opcja 2 (wymagany NodeJs):

1. Sklonuj repo z `https://github.com/tomeczekstecc/react-redux-keycloak.git`
2. Zainstaluj wszystkie dependecies poleceniem w konsoli: `npm i`
3. W konsoli wpisz: `npm start` - apka uruchomi się automatyczne na porcie 3000

---

### Dzięki:

https://www.johnsmilga.com/
https://scalac.io/blog/user-authentication-keycloak-1/
