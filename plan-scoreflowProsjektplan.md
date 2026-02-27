# Plan: Scoreflow NBA Website (9-fredag skoleprosjekt)

**TL;DR:** Bygg en MVP NBA-nettside over 9 fredager med disse hovedsidene: **Home**, **Games** (med toggle for Upcoming/Finished/Live), og **Players & Stats**. UI skal være på engelsk, responsivt, og klart for demo på F9.

---

## 1. MVP (Minimum Viable Product)

**Må ha (Priority 1):**
- ✅ **Home**: Oversikt over status i appen (kommende, live, nylig avsluttede)
- ✅ **Games**: Én kampside med toggle mellom Upcoming, Finished og Live (inkludert tydelig LIVE-status)
- ✅ **Players & Stats**: Søkbar spillerliste med sentrale tall (PTS/REB/AST)
- ✅ **Responsivt design**: Mobil + desktop
- ✅ **English language**: All UI-tekst på engelsk
- ✅ **Feilhåndtering og loading**: Ingen "tom"/uklar UI ved API-feil

**Nice-to-have (Priority 2):**
- 🎯 Favorittspillere (localStorage)
- 🎯 Team-filter på Games-siden
- 🎯 Auto-refresh på Live-view i Games-siden hvert 30. sekund
- 🎯 Enkel detaljvisning for spiller (modal/sidepanel)

---

## 2. Design & Branding

### Fargepalett: "NBA Dark Court"

```text
Hovedfarger:
- Bakgrunn (mørk):      #0F1419
- Sekundær bakgrunn:    #1A1F2E
- Kort/Cards:           #242B3D

Tekst:
- Primær tekst:         #FFFFFF
- Sekundær tekst:       #9CA3AF
- Dempet tekst:         #6B7280

Aksent:
- Primær (NBA-orange):  #FF6B35
- Suksess:              #10B981
- Fare/negativ:         #EF4444
- Info:                 #3B82F6
```

---

## 3. Teknisk Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State**: React hooks (`useState`, `useEffect`)
- **Hosting**: GitHub Pages
- **Git workflow**: Feature branches + Pull Requests

### API-strategi (oppdatert)

**Primær NBA-API (balldontlie):**
- Dokumentasjon: `https://nba.balldontlie.io/?shell#nba-api`
- Base URL: `https://api.balldontlie.io/v1`
- Auth: `Authorization: <API_KEY>`
- Relevante endepunkter i MVP:
  - `GET /players`
  - `GET /games`
  - `GET /stats`
  - `GET /teams` (valgfritt)

**Viktig avgrensning:**
- Vi bruker API-first for både Games og Players.
- Mock-data beholdes som fallback ved API-feil/rate limits og for rask UI-utvikling tidlig i prosjektet.

---

## 4. Sider og ruter

- `/` → **Home**
- `/games` → **Games** (toggle: Upcoming/Finished/Live)
- `/players` → **Players & Stats**

---

## 5. Oppgaveliste (små oppgaver, 1-2 timer)

### **Fase 1: Setup & grunnstruktur (F1-F2)**

1. Prosjektinitialisering (React)
2. Tailwind-oppsett + fargevariabler
3. Git-workflow + README + `.gitignore`
4. Router-oppsett med alle 3 hovedruter
5. Navbar-komponent med engelske lenker
6. Footer + layout wrapper
7. Mock-datafiler for kamper (status: upcoming/live/finished)
8. Mock-datafiler for spillere med stats
39. Scoreflow-logo (SVG + PNG + favicon), klar i F1

### **Fase 2: Home + Games-side (F3-F4)**

9. Home Hero-seksjon
10. Home status-widgets (kommende/live/avsluttede)
11. Home: seksjon med utvalgte kamper
12. Home styling og spacing
13. Side-layout: Games
14. Toggle-komponent (Upcoming/Finished/Live)
15. Visning/filterlogikk basert på valgt toggle
16. Gjenbrukbar `GameCard` med statusbadge
17. Filtre (dato/lag) på Games-siden
18. Empty state når ingen kamper finnes

### **Fase 3: Players & Stats (F5-F6)**

19. Side-layout: Players & Stats
20. Søkefelt på spillernavn
21. Sortering (PTS/REB/AST)
22. `PlayerStatCard` / tabellrad-komponent
23. Enkel paginering
24. API-service `src/services/nbaApi.js`
25. Integrasjon: hent spillere fra `/v1/players` (med relevante query-parametre)
26. Integrasjon: hent kamper fra `/v1/games` og map til Upcoming/Finished/Live
27. Fallback-logikk: API -> mock (både spillere og kamper)
28. Loading + error handling for API-data

### **Fase 4: Stabilitet, polish, deploy (F7-F9)**

29. Live-view refresh-strategi i Games-siden (manuell + valgfri polling)
30. Synk Home-tall med kamplister
31. Caching av siste vellykkede data (localStorage)
32. Responsiv testing (mobil/nettbrett/desktop)
33. Browser-testing (Chrome/Firefox/Safari)
34. Enkel tilgjengelighet (semantikk, kontrast, focus)
35. Språkvask: konsekvent engelsk tekst i hele appen
36. GitHub Pages deployment
37. README ferdigstilles (setup, scripts, struktur)
38. Demo-prep + siste bugfix-runde

---

## 6. Fordeling per person (uavhengig arbeid +/-)

### **Artem** (9 oppgaver)
- Oppgaver: 1, 5, 13, 16, 20, 29, 32, 36, 38
- Spor: App-shell + Games-presentasjon + deploy.
- Leverer uavhengig: layout/nav, `GameCard` UI, live-refresh UI, deployment.

### **Denys** (10 oppgaver)
- Oppgaver: 2, 4, 9, 10, 14, 24, 25, 30, 37, 39
- Spor: Branding + Home + API-adapter.
- Leverer uavhengig: tema/fargevariabler, Home-widgets, `nbaApi` service, logo i F1.

### **Ayanle** (9 oppgaver)
- Oppgaver: 7, 8, 11, 19, 22, 26, 27, 33, 35
- Spor: Data + Players-flyt.
- Leverer uavhengig: mock-data kontrakt, Players UI, API query/fallback, browser-test.

### **Daris** (9 oppgaver)
- Oppgaver: 3, 6, 12, 15, 17, 18, 21, 23, 34
- Spor: Repo-kvalitet + interaksjoner.
- Leverer uavhengig: git-oppsett, layout-polish, filters/paginering/a11y.

**Kontrakter for parallelt arbeid (lav avhengighet):**
- Game-data format låses i F2: `id`, `status`, `homeTeam`, `awayTeam`, `startTime`, `score`.
- Player-data format låses i F2: `name`, `team`, `pts`, `reb`, `ast`.
- Felles UI-komponenter holdes i `components/`; sidespesifikk kode holdes i egne mapper.
- Integrasjon skjer via PR + review, ikke direkte push til `main`.

---

## 7. Plan per fredag (F1-F9)

### **F1: Kickoff + setup**
- Oppgaver: 1-4, 39
- **Milepæl:** Prosjekt kjører lokalt med routing + første logo er klar

### **F2: Layout + datafundament**
- Oppgaver: 5-8
- **Milepæl:** Layout ferdig + mock-data klar

### **F3: Home page**
- Oppgaver: 9-12
- **Milepæl:** Home viser status og utvalgte kamper

### **F4: Games-side**
- Oppgaver: 13-18
- **Milepæl:** Games-side med Upcoming/Finished/Live-toggle er ferdig med mock-data

### **F5: Spillerside UI**
- Oppgaver: 19-23
- **Milepæl:** Spillerside fungerer med mock-data

### **F6: API-integrasjon spillere**
- Oppgaver: 24-28
- **Milepæl:** Spillerside og Games-data henter fra API med fallback

### **F7: Stabilitet**
- Oppgaver: 29-31
- **Milepæl:** Games/Home-data flyt stabil

### **F8: Testing + kvalitet**
- Oppgaver: 32-35
- **Milepæl:** Responsivitet, språk og kvalitet kontrollert

### **F9: Deploy + demo**
- Oppgaver: 36-38
- **Milepæl:** Live demo klar på GitHub Pages

---

## 8. Risiko & Plan B

### Risiko 1: balldontlie API er tregt/utilgjengelig eller rate-limited
- **Plan B:** fallback til mock for både spillere og kamper
- **Tiltak:** bygg robust `try/catch` i API-service

### Risiko 2: API-felt eller statusmapping endres
- **Plan B:** hold mapping-lag isolert i service + fallback til mock
- **Tiltak:** skriv tydelig mapper-funksjon for Upcoming/Finished/Live

### Risiko 3: Fravær i teamet
- **Plan B:** små oppgaver, lett overtakelse mellom elever

### Risiko 4: Deploy-problemer sent i prosjektet
- **Plan B:** deploy testes tidlig (senest F7), ikke først på F9

---

## 9. Definition of Done (DoD)

### **Home**
- [ ] Viser statuskort for kommende/live/avsluttede
- [ ] Har engelsk tekst
- [ ] Ingen console errors

### **Games**
- [ ] Har toggle for Upcoming/Finished/Live
- [ ] Upcoming viser kommende kamper med dato/tid og lag
- [ ] Finished viser ferdige kamper med sluttresultat (vinner/taper tydelig)
- [ ] Live viser kun live-kamper med tydelig LIVE-badge
- [ ] API-data med fallback til mock
- [ ] Har refresh-løsning for Live-view
- [ ] Fungerer responsivt
- [ ] Har empty state

### **Players & Stats**
- [ ] Viser minst navn, lag, PTS, REB, AST
- [ ] Søke- og sorteringsfunksjon fungerer
- [ ] API-data med fallback til mock
- [ ] Loading og error state finnes

### **Generelt**
- [ ] Deployment til GitHub Pages fungerer
- [ ] README er oppdatert
- [ ] App fungerer i Chrome/Firefox/Safari
- [ ] Git-historikk er ryddig

---

## 10. Samarbeidsflyt med Git

1. `git pull origin main`
2. `git checkout -b feature/oppgave-navn`
3. Gjør endringer
4. `git add . && git commit -m "Beskrivende melding"`
5. `git push origin feature/oppgave-navn`
6. Opprett PR
7. Minst én code review
8. Merge til `main`
9. Slett branch
