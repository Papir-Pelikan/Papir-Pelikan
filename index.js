// Magyar napok nevei
const napok = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];

// Magyar hónapok nevei
const honapok = [
    "január", "február", "március", "április", "május", "június",
    "július", "augusztus", "szeptember", "október", "november", "december"
];

// Egyszerű névnaptár
const nevnapok = {
  "01.01": ["Fruzsina", "Bazil"],
  "01.02": ["Ábel"],
  "01.03": ["Genovéva", "Gyöngyvér"],
  "01.04": ["Titusz", "Leona"],
  "01.05": ["Simon"],
  "01.06": ["Boldizsár"],
  "01.07": ["Attila", "Ramóna"],
  "01.08": ["Gyöngyvér"],
  "01.09": ["Marcell"],
  "01.10": ["Melánia"],
  "01.11": ["Ágota"],
  "01.12": ["Ernő"],
  "01.13": ["Veronika"],
  "01.14": ["Bódog"],
  "01.15": ["Lóránt", "Loránd"],
  "01.16": ["Gusztáv"],
  "01.17": ["Antal", "Antónia"],
  "01.18": ["Piroska"],
  "01.19": ["Sámuel", "Szeverin"],
  "01.20": ["Fábián", "Sebestyén"],
  "01.21": ["Ágnes"],
  "01.22": ["Vince"],
  "01.23": ["Zelma", "Rajmund"],
  "01.24": ["Timót"],
  "01.25": ["Pál"],
  "01.26": ["Vanda", "Paula"],
  "01.27": ["Angéla", "Orsolya"],
  "01.28": ["Károly", "Karola"],
  "01.29": ["Adél"],
  "01.30": ["Martina", "Gerda"],
  "01.31": ["Marcella"],
  "02.01": ["Ignác"],
  "02.02": ["Karolina", "Aida"],
  "02.03": ["Balázs"],
  "02.04": ["Ráhel", "Csenge"],
  "02.05": ["Ágota", "Ingrid"],
  "02.06": ["Dorottya", "Dóra"],
  "02.07": ["Tódor", "Rikarda"],
  "02.08": ["Aranka"],
  "02.09": ["Abigél", "Alexia"],
  "02.10": ["Elvira"],
  "02.11": ["Bertold", "Marietta"],
  "02.12": ["Lívia", "Lídia"],
  "02.13": ["Ella", "Linda"],
  "02.14": ["Bálint"],
  "02.15": ["Kolos", "Georgina"],
  "02.16": ["Julianna", "Lilla"],
  "02.17": ["Donát"],
  "02.18": ["Bernadett"],
  "02.19": ["Zsuzsanna"],
  "02.20": ["Aladár", "Álmos"],
  "02.21": ["Eleonóra"],
  "02.22": ["Gerzson"],
  "02.23": ["Alfréd"],
  "02.24": ["Mátyás"],
  "02.25": ["Géza"],
  "02.26": ["Edina"],
  "02.27": ["Ákos", "Bátor"],
  "02.28": ["Elemér"],
  "02.29": ["(Szökőév)"],
  "03.01": ["Albin"],
  "03.02": ["Lujza"],
  "03.03": ["Kornélia"],
  "03.04": ["Kázmér"],
  "03.05": ["Adorján", "Adrián"],
  "03.06": ["Leonóra", "Ines"],
  "03.07": ["Tamás"],
  "03.08": ["János", "Zoltán"],
  "03.09": ["Franciska", "Fanny"],
  "03.10": ["Ildikó"],
  "03.11": ["Szilárd", "Kristóf"],
  "03.12": ["Gergely"],
  "03.13": ["Krisztián", "Ajtony"],
  "03.14": ["Matild"],
  "03.15": ["Kristóf"],
  "03.16": ["Henrietta"],
  "03.17": ["Gertrúd", "Patrik"],
  "03.18": ["Sándor", "Ede"],
  "03.19": ["József"],
  "03.20": ["Klaudia"],
  "03.21": ["Benedek"],
  "03.22": ["Beáta", "Izolda"],
  "03.23": ["Emil"],
  "03.24": ["Gábor", "Karola"],
  "03.25": ["Irén", "Írisz"],
  "03.26": ["Emánuel"],
  "03.27": ["Hajnalka"],
  "03.28": ["Gedeon", "Johanna"],
  "03.29": ["Auguszta"],
  "03.30": ["Zoltán"],
  "03.31": ["Árpád"],
  "04.01": ["Hugó"],
  "04.02": ["Áron"],
  "04.03": ["Buda", "Richárd"],
  "04.04": ["Izidor"],
  "04.05": ["Vince"],
  "04.06": ["Vilmos", "Bán"],
  "04.07": ["Herman"],
  "04.08": ["Dénes"],
  "04.09": ["Erhard"],
  "04.10": ["Zsolt"],
  "04.11": ["Leó", "Szaniszló"],
  "04.12": ["Gyula", "Aldó"],
  "04.13": ["Ida"],
  "04.14": ["Tibor"],
  "04.15": ["Anasztázia"],
  "04.16": ["Csongor"],
  "04.17": ["Rudolf"],
  "04.18": ["Andrea"],
  "04.19": ["Emma"],
  "04.20": ["Tivadar"],
  "04.21": ["Konrád"],
  "04.22": ["Csilla", "Noémi"],
  "04.23": ["Béla"],
  "04.24": ["György"],
  "04.25": ["Márk"],
  "04.26": ["Ervin"],
  "04.27": ["Zita"],
  "04.28": ["Valéria"],
  "04.29": ["Péter"],
  "04.30": ["Katalin", "Kitti"],
  "05.01": ["Fülöp", "Jakab"],
  "05.02": ["Zsigmond"],
  "05.03": ["Irma", "Tímea"],
  "05.04": ["Mónika", "Flórián"],
  "05.05": ["Györgyi"],
  "05.06": ["Ivett", "Frida"],
  "05.07": ["Gizella"],
  "05.08": ["Mihály"],
  "05.09": ["Gergely"],
  "05.10": ["Ármin", "Pálma"],
  "05.11": ["Ferenc"],
  "05.12": ["Pongrác"],
  "05.13": ["Szervác", "Imola"],
  "05.14": ["Bonifác"],
  "05.15": ["Zsófia", "Szonja"],
  "05.16": ["Mózes"],
  "05.17": ["Paszkál"],
  "05.18": ["Alexandra", "Erik"],
  "05.19": ["Ivó", "Milán"],
  "05.20": ["Bernát", "Felícia"],
  "05.21": ["Konstantin"],
  "05.22": ["Júlia", "Rita"],
  "05.23": ["Dezső"],
  "05.24": ["Eszter", "Eliza"],
  "05.25": ["Orbán"],
  "05.26": ["Fülöp"],
  "05.27": ["Hella"],
  "05.28": ["Emil", "Cintia"],
  "05.29": ["Magdolna", "Leila"],
  "05.30": ["Janka", "Zsanett"],
  "05.31": ["Angéla"],
  "06.01": ["Tünde"],
  "06.02": ["Kármen", "Anita"],
  "06.03": ["Klotild", "Cecília"],
  "06.04": ["Bulcsú"],
  "06.05": ["Fatima", "Fatime"],
  "06.06": ["Norbert", "Norberta"],
  "06.07": ["Róbert"],
  "06.08": ["Medárd"],
  "06.09": ["Félix"],
  "06.10": ["Margit", "Gréta"],
  "06.11": ["Barnabás"],
  "06.12": ["Villő"],
  "06.13": ["Antal", "Anilla"],
  "06.14": ["Vazul"],
  "06.15": ["Jolán", "Jóel"],
  "06.16": ["Jusztin"],
  "06.17": ["Laura", "Alida"],
  "06.18": ["Arnold", "Levente"],
  "06.19": ["Gyárfás"],
  "06.20": ["Rafael"],
  "06.21": ["Alajos", "Leila"],
  "06.22": ["Paulina"],
  "06.23": ["Zoltán"],
  "06.24": ["János"],
  "06.25": ["Vilmos", "Adelma"],
  "06.26": ["János", "Pál"],
  "06.27": ["László"],
  "06.28": ["Levente", "Irén"],
  "06.29": ["Péter", "Pál"],
  "06.30": ["Pál"],
  "07.01": ["Marián"],
  "07.02": ["Ottó"],
  "07.03": ["Kornél", "Soma"],
  "07.04": ["Ulrik"],
  "07.05": ["Emese", "Sarolta"],
  "07.06": ["Csaba"],
  "07.07": ["Apollónia"],
  "07.08": ["Ellák"],
  "07.09": ["Lukrécia"],
  "07.10": ["Amália"],
  "07.11": ["Nóra", "Lili"],
  "07.12": ["Izabella", "Dalma"],
  "07.13": ["Jenő"],
  "07.14": ["Ödön"],
  "07.15": ["Henrik", "Roland"],
  "07.16": ["Valter"],
  "07.17": ["Elek", "Endre"],
  "07.18": ["Frigyes"],
  "07.19": ["Emília"],
  "07.20": ["Illés"],
  "07.21": ["Dániel", "Daniella"],
  "07.22": ["Magdolna"],
  "07.23": ["Lenke"],
  "07.24": ["Kincső", "Kinga"],
  "07.25": ["Kristóf"],
  "07.26": ["Anikó", "Anna"],
  "07.27": ["Olga", "Szabolcs"],
  "07.28": ["Szilárd"],
  "07.29": ["Márta", "Flóra"],
  "07.30": ["Judit", "Xénia"],
  "07.31": ["Ignác"],
  "08.01": ["Boglárka"],
  "08.02": ["Lehel"],
  "08.03": ["Hermina"],
  "08.04": ["Domonkos", "Dominika"],
  "08.05": ["Krisztina"],
  "08.06": ["Berta", "Bogi"],
  "08.07": ["Ibolya"],
  "08.08": ["László"],
  "08.09": ["Emőd"],
  "08.10": ["Lőrinc"],
  "08.11": ["Zsuzsanna"],
  "08.12": ["Klára"],
  "08.13": ["Ipoly", "Zsuzsanna"],
  "08.14": ["Marcell"],
  "08.15": ["Mária"],
  "08.16": ["Ábrahám"],
  "08.17": ["Jácint"],
  "08.18": ["Ilona"],
  "08.19": ["Huba"],
  "08.20": ["István"],
  "08.21": ["Sámuel"],
  "08.22": ["Menyhért", "Mirjam"],
  "08.23": ["Bence"],
  "08.24": ["Bertalan"],
  "08.25": ["Lajos", "Patrícia"],
  "08.26": ["Izsó"],
  "08.27": ["Gáspár"],
  "08.28": ["Ágoston"],
  "08.29": ["János"],
  "08.30": ["Rózsa"],
  "08.31": ["Erika", "Bella"],
  "09.01": ["Egon"],
  "09.02": ["Rebeka", "Dorina"],
  "09.03": ["Hilda"],
  "09.04": ["Rozália"],
  "09.05": ["Viktor", "Lőrinc"],
  "09.06": ["Zakariás"],
  "09.07": ["Regina"],
  "09.08": ["Mária", "Adrienn"],
  "09.09": ["Ádám"],
  "09.10": ["Nikolett", "Hunor"],
  "09.11": ["Teodóra"],
  "09.12": ["Mária", "Irma"],
  "09.13": ["Kornél"],
  "09.14": ["Szeréna"],
  "09.15": ["Enikő", "Melitta"],
  "09.16": ["Edit"],
  "09.17": ["Zsigmond", "Ákos"],
  "09.18": ["Orsolya", "József"],
  "09.19": ["Vilhelmina"],
  "09.20": ["Friderika"],
  "09.21": ["Máté"],
  "09.22": ["Mór"],
  "09.23": ["Tekla", "Líviusz"],
  "09.24": ["Mercédesz"],
  "09.25": ["Eufémia"],
  "09.26": ["Jusztina"],
  "09.27": ["Adalbert"],
  "09.28": ["Vencel"],
  "09.29": ["Mihály"],
  "09.30": ["Jeromos"],
  "10.01": ["Malvin"],
  "10.02": ["Petra"],
  "10.03": ["Helga", "Alfréd"],
  "10.04": ["Ferenc"],
  "10.05": ["Aurél"],
  "10.06": ["Brúnó", "Renáta"],
  "10.07": ["Amália"],
  "10.08": ["Koppány"],
  "10.09": ["Dénes"],
  "10.10": ["Gedeon", "Bence"],
  "10.11": ["Brigitta"],
  "10.12": ["Miksa"],
  "10.13": ["Kálmán", "Ede"],
  "10.14": ["Szabina"],
  "10.15": ["Teréz"],
  "10.16": ["Gál"],
  "10.17": ["Hedvig"],
  "10.18": ["Lukács"],
  "10.19": ["Nándor"],
  "10.20": ["Vendel"],
  "10.21": ["Orsolya"],
  "10.22": ["Előd", "Szabina"],
  "10.23": ["Gyöngyi"],
  "10.24": ["Salamon"],
  "10.25": ["Blanka", "Dömötör"],
  "10.26": ["Dömötör"],
  "10.27": ["Szabina", "Ildikó"],
  "10.28": ["Simon", "Szilárd"],
  "10.29": ["Nárcisz"],
  "10.30": ["Alfonz"],
  "10.31": ["Farkas"],
  "11.01": ["Marianna"],
  "11.02": ["Achilles"],
  "11.03": ["Győző"],
  "11.04": ["Károly"],
  "11.05": ["Imre"],
  "11.06": ["Lénárd"],
  "11.07": ["Rezső"],
  "11.08": ["Zsombor"],
  "11.09": ["Tivadar"],
  "11.10": ["Tamás"],
  "11.11": ["Márton"],
  "11.12": ["Jónás", "Renátó"],
  "11.13": ["Szilvia"],
  "11.14": ["Aliz"],
  "11.15": ["Albert", "Lipót"],
  "11.16": ["Ödön"],
  "11.17": ["Hortenzia", "Gergő"],
  "11.18": ["Jenő"],
  "11.19": ["Erzsébet"],
  "11.20": ["Jolán"],
  "11.21": ["Olivér"],
  "11.22": ["Cecília"],
  "11.23": ["Kelemen", "Klementina"],
  "11.24": ["Emma"],
  "11.25": ["Katalin"],
  "11.26": ["Virág", "Márton"],
  "11.27": ["Virgil"],
  "11.28": ["Stefánia"],
  "11.29": ["Taksony"],
  "11.30": ["András", "Andrea"],
  "12.01": ["Elza", "Eduárd"],
  "12.02": ["Melinda", "Vivien"],
  "12.03": ["Ferenc", "Olívia"],
  "12.04": ["Borbála"],
  "12.05": ["Vilma"],
  "12.06": ["Miklós"],
  "12.07": ["Ambrus"],
  "12.08": ["Mária", "Vilma"],
  "12.09": ["Natália"],
  "12.10": ["Judit"],
  "12.11": ["Árpád", "Árpád"],
  "12.12": ["Gabriella"],
  "12.13": ["Luca", "Ottília"],
  "12.14": ["Szilárda"],
  "12.15": ["Valér"],
  "12.16": ["Etelka", "Aletta"],
  "12.17": ["Lázár", "Olimpia"],
  "12.18": ["Auguszta"],
  "12.19": ["Viola"],
  "12.20": ["Teofil"],
  "12.21": ["Tamás"],
  "12.22": ["Zénó"],
  "12.23": ["Viktória"],
  "12.24": ["Ádám", "Éva"],
  "12.25": ["Eugénia"],
  "12.26": ["István"],
  "12.27": ["János"],
  "12.28": ["Kamilla"],
  "12.29": ["Tamás", "Tamás"],
  "12.30": ["Dávid"],
  "12.31": ["Szilveszter"]
};

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const nap = napok[today.getDay()];
    const napSzam = today.getDate().toString().padStart(2, '0');
    const honapSzam = (today.getMonth() + 1).toString().padStart(2, '0');
    const ev = today.getFullYear();

    // Dátum formázása: YYYY.MM.DD - Napnév
    const datumSzoveg = `${ev}.${honapSzam}.${napSzam} - ${nap}`;
    
    // Névnap keresése
    const nevnapKulcs = `${honapSzam}.${napSzam}`;
    const nevnapLista = nevnapok[nevnapKulcs];
    
    // Kiírás a HTML-be
    document.getElementById("datum").textContent = datumSzoveg;
    
    if (nevnapLista) {
        document.getElementById("nevnap").textContent = nevnapLista.join(", ");
    } else {
        document.getElementById("nevnap").textContent = "Nincs adat";
        console.error("Névnap nem található a következő dátumhoz:", nevnapKulcs);
    }

    // Időjárás toggle
    const weatherToggle = document.getElementById('weather-toggle');
    const weatherContainer = document.querySelector('.idojaras');
    
    if (weatherToggle && weatherContainer) {
        weatherToggle.addEventListener('click', function() {
            weatherContainer.classList.toggle('open');
        });
    }

    function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize clock and update every second
updateClock();
setInterval(updateClock, 1000);
});



document.querySelector('.dropdown2-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown2-menu').classList.toggle('show');
});

document.addEventListener('click', function() {
    document.querySelector('.dropdown2-menu')?.classList.remove('show');
});


document.querySelector('.dropdown3-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown3-menu').classList.toggle('show');
});

document.addEventListener('click', function() {
    document.querySelector('.dropdown3-menu')?.classList.remove('show');
});

document.querySelector('.dropdown4-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown4-menu').classList.toggle('show');
});

document.querySelector('.dropdown5-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown5-menu').classList.toggle('show');
});

document.querySelector('.dropdown6-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown6-menu').classList.toggle('show');
});

document.querySelector('.dropdown7-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown7-menu').classList.toggle('show');
});

document.querySelector('.dropdown8-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown8-menu').classList.toggle('show');
});

document.querySelector('.dropdown9-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown9-menu').classList.toggle('show');
});

document.querySelector('.dropdown10-toggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown10-menu').classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', function() {
  const infoIcon = document.querySelector('.info-icon');
  const explanationWrapper = document.querySelector('.fejlec-megjegyzes-wrapper');
  let isExplanationOpen = false;

  // Kattintásra nyit/zár
  if (infoIcon && explanationWrapper) {
    infoIcon.addEventListener('click', function() {
      isExplanationOpen = !isExplanationOpen;
      explanationWrapper.classList.toggle('open', isExplanationOpen);
    });
  }

  // Görgetéskor eltűnik
  let lastScrollPosition = 0;
  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;
    
    // Ha lefelé görgetünk és a magyarázat nyitva van
    if (currentScrollPosition > lastScrollPosition && isExplanationOpen) {
      explanationWrapper.classList.remove('open');
      isExplanationOpen = false;
    }
    
    lastScrollPosition = currentScrollPosition;
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const infoIcon = document.querySelector('.info-icon');
  const explanationWrapper = document.querySelector('.fejlec-megjegyzes-hitelet-wrapper');
  let isExplanationOpen = false;

  // Kattintásra nyit/zár
  if (infoIcon && explanationWrapper) {
    infoIcon.addEventListener('click', function() {
      isExplanationOpen = !isExplanationOpen;
      explanationWrapper.classList.toggle('open', isExplanationOpen);
    });
  }

  // Görgetéskor eltűnik
  let lastScrollPosition = 0;
  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;
    
    // Ha lefelé görgetünk és a magyarázat nyitva van
    if (currentScrollPosition > lastScrollPosition && isExplanationOpen) {
      explanationWrapper.classList.remove('open');
      isExplanationOpen = false;
    }
    
    lastScrollPosition = currentScrollPosition;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const infoIcon = document.querySelector('.info-icon');
  const explanationWrapper = document.querySelector('.fejlec-megjegyzes-rangers-wrapper');
  let isExplanationOpen = false;

  // Kattintásra nyit/zár
  if (infoIcon && explanationWrapper) {
    infoIcon.addEventListener('click', function() {
      isExplanationOpen = !isExplanationOpen;
      explanationWrapper.classList.toggle('open', isExplanationOpen);
    });
  }

  // Görgetéskor eltűnik
  let lastScrollPosition = 0;
  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;
    
    // Ha lefelé görgetünk és a magyarázat nyitva van
    if (currentScrollPosition > lastScrollPosition && isExplanationOpen) {
      explanationWrapper.classList.remove('open');
      isExplanationOpen = false;
    }
    
    lastScrollPosition = currentScrollPosition;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const infoIcon = document.querySelector('.info-icon');
  const explanationWrapper = document.querySelector('.fejlec-megjegyzes-deutschblick-wrapper');
  let isExplanationOpen = false;

  // Kattintásra nyit/zár
  if (infoIcon && explanationWrapper) {
    infoIcon.addEventListener('click', function() {
      isExplanationOpen = !isExplanationOpen;
      explanationWrapper.classList.toggle('open', isExplanationOpen);
    });
  }

  // Görgetéskor eltűnik
  let lastScrollPosition = 0;
  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;
    
    // Ha lefelé görgetünk és a magyarázat nyitva van
    if (currentScrollPosition > lastScrollPosition && isExplanationOpen) {
      explanationWrapper.classList.remove('open');
      isExplanationOpen = false;
    }
    
    lastScrollPosition = currentScrollPosition;
  });
});