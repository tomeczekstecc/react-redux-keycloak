# Allegro 2

## Funkcje react-redux-keycloak:

1. Logowanie,
2. Wylogowanie,
3. Pdgląd danych zalogowanego użytkwnika

## Adapter:

https://www.npmjs.com/package/keycloak-js

## Uruchomienie (wymagany Docker)
1. Sklonuj repo z `https://github.com/tomeczekstecc/react-redux-keycloak`
1. W konsoli w folderze głównym projektu wpisz polecenie `docker-compose up -d --build`
1. Projekt automatycznie utworzy realm o nazwie "rrk-test1" i samodzielnie utworzy clienta o nazwie "rrk-react"
2. Dodaj przynajmniej 1 usera w zakładce `Users` - ustaw hasło lub hasło tyczasowe w zakładce `Credentials`


## uruchom apkę - opcja 1 (wymagany Docker):

2. Otwórz stronę: `http://localhost:3000`

---

### Dzięki:

https://www.johnsmilga.com/
https://scalac.io/blog/user-authentication-keycloak-1/
