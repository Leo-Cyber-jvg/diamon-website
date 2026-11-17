# Valmennussarja – sisäinen tarkistuslista ennen julkaisua

Sivut: `/fi/valmennussarja/` ja `/coaching-series/` (komponentit `app/components/CoachingSeries.tsx` ja `app/components/SeriesSignupForm.tsx`).
Tämä tiedosto ei päädy julkaistulle sivustolle (Netlify julkaisee vain `out/`-kansion).

## Vahvistamatta

- [ ] **Päivämäärä 01:** torstai 21.1.2027 (Leo Sjöman × Antti Pennanen). VAHVISTAMATON – näkyy sivulla ilman alustavuusmerkintää.
- [ ] **Päivämäärä 02:** torstai 11.2.2027 (Leo Sjöman × Henri Tuomilehto). VAHVISTAMATON – näkyy sivulla ilman alustavuusmerkintää.
- [ ] Arvonlisäveromerkintä "alv 0 %" / "excl. VAT" hinnan 1 795 € / hlö alla – tarkistetaan erikseen.
- [ ] Antin ja Henrin hyväksyntä sivun sisällölle ja valmentajaesittelyille.
- [ ] Antin kuvan käyttöoikeus verkkosivulla.
- [ ] Englanninkieliset nimet ja käännökset (sarja "Leadership Impact and Performance", päivä 01:n markkinointiteksti) – ei vielä hyväksytty.
- [ ] Hyväksytyn markkinointitekstin viimeinen kappale ("Valmennuksessa syvennät ymmärrystäsi…") on sivulla hyötylistan muodossa, ei sellaisenaan.

## Lomake (Netlify Forms)

- [ ] Netlifyn sivustoasetuksissa **form detection** on päällä (uusilla Netlify-sivustoilla se on oletuksena pois).
- [ ] Deployn jälkeen Netlify Forms -näkymässä näkyvät lomakkeet `valmennussarja-fi` ja `coaching-series-en` (sekä vanhat `contact-fi` ja `contact`).
- [ ] Testilähetys esikatselussa → lähetys näkyy Netlifyssä ja kenttä `valmennuspaiva` kertoo oikean päivän.
- [ ] Sähköposti-ilmoitus uusista lähetyksistä asetettu oikeaan osoitteeseen.
- [ ] Tietosuojaseloste (`/privacy/`) kattaa valmennussarjan kiinnostuslomakkeen ja Netlifyn tietojenkäsittelijänä. Nykyinen teksti puhuu vain yhteydenottolomakkeesta ja sanoo, ettei tietoja siirretä kolmansille osapuolille. Suomenkielistä tietosuojasivua ei ole.
- [ ] Varsinainen sitova ilmoittautuminen ja maksu puuttuvat. Kun ne ovat käytössä, painike 01 voidaan vaihtaa tekstiin "Ilmoittaudu valmennukseen".

## Julkaisu

- [ ] Tuotantojulkaisu vain Leon erillisellä hyväksynnällä. Domainia, DNS:ää ja Squarespace-sivustoa ei muuteta.
- [ ] Netlifyn esikatseluosoite ei välttämättä ole suojattu – huomioi ennen kuin linkkiä jaetaan.
