# Aplikacja Pogodowa

Prosta i intuicyjna aplikacja pogodowa, która pozwala na sprawdzenie aktualnych warunków pogodowych oraz prognoz dla wybranego miasta. Aplikacja wyświetla szczegółowe dane, prognozę godzinową i prognozę na 5 najbliższych dni.

🔗 Demo aplikacji dostępne pod adresem:
[https://PiotrKochanka.github.io/weather-app/](https://PiotrKochanka.github.io/weather-app/)

---

### 💻 Technologie

* **React** (z TypeScriptem)
* **TypeScript**
* **CSS Modules** (do stylowania)
* **OpenWeatherMap API** (do pobierania danych pogodowych)
* **Font Awesome** (ikony)
* **Git**
* **GitHub Pages** (do hostowania)

---

### ✅ Funkcje

* **Wyszukiwanie miast:** Łatwe wyszukiwanie pogody dla dowolnego miasta na świecie.
* **Aktualne detale pogodowe:** Wyświetlanie bieżącej temperatury, odczuwalnej temperatury, ciśnienia, wilgotności, prędkości wiatru i opisu pogody.
* **Prognoza godzinowa:** Szczegółowa prognoza pogody na najbliższe godziny.
* **Prognoza na 5 dni:** Prognoza długoterminowa na 5 dni, z podziałem na interwały czasowe.
* **Dynamiczne odświeżanie:** Dane pogodowe odświeżają się bez przeładowania całej strony.
* **Responsywny design:** Aplikacja działa prawidłowo na różnych urządzeniach (komputery, tablety, smartfony).

---

### 🚀 Jak uruchomić lokalnie

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [https://github.com/PiotrKochanka/weather-app.git](https://github.com/PiotrKochanka/weather-app.git)
    ```
2.  **Przejdź do folderu projektu:**
    ```bash
    cd weather-app
    ```
3.  **Zainstaluj zależności:**
    ```bash
    npm install
    # lub
    yarn install
    ```
4.  **Uruchom aplikację:**
    ```bash
    npm start
    # lub
    yarn start
    ```
    Aplikacja zostanie uruchomiona w trybie deweloperskim pod adresem [http://localhost:3000](http://localhost:3000) (lub innym dostępnym porcie).

---

### 📁 Struktura plików

pgs-cli kopiuj Edytuj
weather-app/
├── public/                 // Pliki publiczne (np. index.html)
├── src/
│   ├── assets/             // Statyczne zasoby, np. niestandardowe ikony
│   ├── components/         // Komponenty React (np. Searchbar, WeatherDisplay)
│   │   ├── Searchbar/
│   │   ├── WeatherDetails/
│   │   ├── WeatherHours/
│   │   └── WeatherDays/
│   ├── context/            // Konteksty React (np. CityContext)
│   │   └── CityContext.tsx
│   ├── hooks/              // Własne hooki React (np. useFetchWeatherForecast)
│   │   └── useFetchWeatherForecast.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json           // Konfiguracja TypeScript
└── yarn.lock               // (lub package-lock.json)


---

### 🌐 Hosting na GitHub Pages

Aplikacja jest hostowana dzięki funkcji GitHub Pages z gałęzi `gh-pages`.

Link do wersji online:

🔗 [https://PiotrKochanka.github.io/weather-app/](https://PiotrKochanka.github.io/weather-app/)

---

### ✍️ Autor

Projekt stworzony przez Piotr Kochanka.
