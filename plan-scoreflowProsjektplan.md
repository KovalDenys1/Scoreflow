# Plan: Scoreflow NBA Website (9-fredag skoleprosjekt)

**TL;DR:** Bygg en MVP NBA-nettside over 9 fredager med disse hovedsidene: **Home**, **Upcoming Games**, **Finished Games**, **Live Games**, og **Players & Stats**. UI skal være på engelsk, responsivt, og klart for demo på F9.

---

## 1. MVP (Minimum Viable Product)

**Må ha (Priority 1):**
- ✅ **Home**: Oversikt over status i appen (kommende, live, nylig avsluttede)
- ✅ **Upcoming Games**: Liste over kommende kamper
- ✅ **Finished Games**: Liste over ferdigspilte kamper med resultat
- ✅ **Live Games**: Kamper som pågår nå (med tydelig LIVE-status)
- ✅ **Players & Stats**: Søkbar spillerliste med sentrale tall (PTS/REB/AST)
- ✅ **Responsivt design**: Mobil + desktop
- ✅ **English language**: All UI-tekst på engelsk
- ✅ **Feilhåndtering og loading**: Ingen "tom"/uklar UI ved API-feil

**Nice-to-have (Priority 2):**
- 🎯 Favorittspillere (localStorage)
- 🎯 Team-filter på kampsider
- 🎯 Auto-refresh på Live-side hvert 30. sekund
- 🎯 Enkel detaljvisning for spiller (modal/sidepanel)

---

## 2. Design & Branding

### Fargepalett: "NBA Dark Court"

```
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

**Primær spiller-API (fra deres Postman-link):**
- Dokumentasjon: `https://documenter.getpostman.com/view/24232555/2s93shzpR3`
- Eksempler fra kolleksjonen:
  - `GET /api/PlayerDataAdvancedPlayoffs/name/{playerName}`
  - `GET /api/PlayerDataAdvancedPlayoffs/season/{season}`
  - `GET /api/PlayerDataTotals/query?...`

**Viktig avgrensning:**
- Denne kolleksjonen inneholder spiller/statistikk-endepunkter, men ikke tydelige endepunkter for kommende/live/avsluttede kamper.
- Derfor: kampsider bygges med **mock data som standard** (MVP-sikkert), mens spillerlisten henter fra API med fallback til mock.

---

## 4. Sider og ruter

- `/` → **Home**
- `/games/upcoming` → **Upcoming Games**
- `/games/finished` → **Finished Games**
- `/games/live` → **Live Games**
- `/players` → **Players & Stats**

---

## 5. Oppgaveliste (små oppgaver, 1-2 timer)

### **Fase 1: Setup & grunnstruktur (F1-F2)**

1. Prosjektinitialisering (React)
2. Tailwind-oppsett + fargevariabler
3. Git-workflow + README + `.gitignore`
4. Router-oppsett med alle 5 hovedruter
5. Navbar-komponent med engelske lenker
6. Footer + layout wrapper
7. Mock-datafiler for kamper (kommende/live/avsluttede)
8. Mock-datafiler for spillere med stats

### **Fase 2: Home + gamesider (F3-F4)**

9. Home Hero-seksjon
10. Home status-widgets (kommende/live/avsluttede)
11. Home: seksjon med utvalgte kamper
12. Home styling og spacing
13. Side-layout: Upcoming Games
14. Side-layout: Finished Games
15. Side-layout: Live Games
16. Gjenbrukbar `GameCard` med statusbadge
17. Filtre (dato/lag) på kampsider
18. Empty state når ingen kamper finnes

### **Fase 3: Players & Stats (F5-F6)**

19. Side-layout: Players & Stats
20. Søkefelt på spillernavn
21. Sortering (PTS/REB/AST)
22. `PlayerStatCard` / tabellrad-komponent
23. Enkel paginering
24. API-service `src/services/nbaApi.js`
25. Integrasjon: hent spillere etter season
26. Integrasjon: query-endepunkt med parametre
27. Fallback-logikk: API -> mock
28. Loading + error handling for spillerdata

### **Fase 4: Stabilitet, polish, deploy (F7-F9)**

29. Live-side refresh-strategi (manuell + valgfri polling)
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

## 6. Fordeling per person

### **Artem** (9 oppgaver)
- 1, 5, 13, 16, 20, 29, 32, 36, 38

### **Denys** (9 oppgaver)
- 2, 4, 9, 10, 14, 24, 25, 30, 37

### **Ayanle** (9 oppgaver)
- 7, 8, 11, 19, 22, 26, 27, 33, 35

### **Daris** (9 oppgaver)
- 3, 6, 12, 15, 17, 18, 21, 23, 34

**Notat:** Alle gjør code reviews på hverandres PR-er.

---

## 7. Plan per fredag (F1-F9)

### **F1: Kickoff + setup**
- Oppgaver: 1-4
- **Milepæl:** Prosjekt kjører lokalt med routing

### **F2: Layout + datafundament**
- Oppgaver: 5-8
- **Milepæl:** Layout ferdig + mock-data klar

### **F3: Home page**
- Oppgaver: 9-12
- **Milepæl:** Home viser status og utvalgte kamper

### **F4: Kampsider**
- Oppgaver: 13-18
- **Milepæl:** Upcoming/Finished/Live er ferdig med mock-data

### **F5: Spillerside UI**
- Oppgaver: 19-23
- **Milepæl:** Spillerside fungerer med mock-data

### **F6: API-integrasjon spillere**
- Oppgaver: 24-28
- **Milepæl:** Spillerside henter data fra API med fallback

### **F7: Stabilitet**
- Oppgaver: 29-31
- **Milepæl:** Live/Home-data flyt stabil

### **F8: Testing + kvalitet**
- Oppgaver: 32-35
- **Milepæl:** Responsivitet, språk og kvalitet kontrollert

### **F9: Deploy + demo**
- Oppgaver: 36-38
- **Milepæl:** Live demo klar på GitHub Pages

---

## 8. Risiko & Plan B

### Risiko 1: Spiller-API er tregt/utilgjengelig
- **Plan B:** alltid fallback til mock for spillerlisten
- **Tiltak:** bygg robust `try/catch` i API-service

### Risiko 2: Ingen kamp-endepunkter i valgt API
- **Plan B:** kampsider drives av mock-data i MVP
- **Tiltak:** legg til nytt game-API kun hvis tid og stabil kilde finnes

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

### **Upcoming Games**
- [ ] Viser kommende kamper med dato/tid og lag
- [ ] Fungerer responsivt
- [ ] Har empty state

### **Finished Games**
- [ ] Viser ferdige kamper med sluttresultat
- [ ] Vinner/taper vises tydelig
- [ ] Fungerer responsivt

### **Live Games**
- [ ] Viser kun kamper med live-status
- [ ] LIVE-badge er tydelig
- [ ] Har refresh-løsning

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
