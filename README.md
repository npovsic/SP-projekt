# SP-projekt
Stran je dosegljiva na naslovu: https://npovsic.github.io/SP-projekt/

# Uvod
Za predmet smo morali v prvi fazi ustvariti front-end spletne strani. Izbral sem si stran za spremljanje in dodajanje dogodkov, kjer vidimo kateri dogodki so v naši bližini, pri čemer bo šlo za podobno stvar kot pri Facebook-u, kjer bodo uporabniki dogodke ustvarjali sami. 

# Opis
Ko pridemo na spletno stran nas pričaka landing page. Za to, da ne bi izgledala dolgočasno in da bi privabila uporabnike, sem se odločil za bolj moderen izgled. Polovica začetne strani je slika, na kateri se ljudje zabavajo, poslušajo glasbo in skratka uživajo. Nato sledi kratek pozdrav in par dogodkov, ki bi uporabnika lahko zanimali. Tako jim že takoj ponudimo vsebino, zaradi katere so prišli na stran, ni nujno da greo pregledovati vse dogodke ali jih iskati, preprosto lahko pregledajo teh par dogodkov, ki so na začetni strani. 
Ko vidijo nek dogodek, ki jih zanima, lahko kliknejo na gumb, ki jih odpelje na stran z podrobnostmi o tem dogodku, kjer se lahko odločijo, da na ta dogodek gredo. Tako lahko ostali vidijo, kdo se bo tega dogodka udeležil.
Dogodke lahko tudi dodajamo, pri tem se še nisem popolnoma odločil, ali bodo lahko dodajali vsi prijavljeni uporabniki, ali samo določeni, recimo kakšni profesorji ali asistenti. 
Po dogodkih lahko tudi iščemo in tako takoj najdemo, kar naj zanima. 
Dogodke lahko iščemo tudi preko zemljevida, za katerega nas aplikacija vpraša po lokaciji (HTML5 geolocation API).
Pri sami aplikaciji sem implementiral preprosto validacijo vpisa, ker se s tem še nisem ubadal, saj mislim backend ustvariti v PHP-ju, da bo stran funkcionalna tudi brez Javascripta, vsaj osnovne lastnosti. Za zdaj je stran brez Javascripta popolnoma delujoča (razen zemljevida, seveda).

# Ciljna publika
Na faksu za elektrotehniko se moramo kdaj prijaviti na dogodek, ki ga organizirajo asistenti ali profesorji, ravno prejšnji teden smo imeli vprašalnik za ekskurzijo, ki smo ga morali izpolniti na Google forms. To se mi zdi neumno, saj smo podatke o sami ekskurziji dobili na elektronsko pošto, kar ni idealno, saj moraš menjati med obema pogledoma, preveriti kdo gre, se zmeniti s prijatelji ali greste, itd. Na tej spletni strani bi lahko bil agregat takih dogodkov, kjer so vsi vidni vsem, tudi če niso prijavljeni, a za prijavo na dogodek se moraš na stran vpisati. Tako bi lahko preveril, kaj se dogaja na fakulteti, kdo je dogodek ustvaril, se nanaša nate ...
Take stvari se tudi pri nas (recimo konferenca IoT) urejajo na Facebook-u, organizacija ustvari dogodek in vsi, ki so prijavljeni, ga lahko vidijo in potrdijo udeležbo. Problem je, da moraš za sam pregled dogodka biti vpisan na Facebook, kar ni najboljše. Kaj če recimo nimaš Facebook-a, kar dosti starejših ljudi nima, prav tako pa pri mladih popularnost počasi pada, še sam ga uporabljam samo zaradi skupinskih pogovorov in dogodkov.
Aplikacija bo delovala na vseh napravah, saj sem uredil CSS za vse vrste naprav, na katerih dandanes ljudje odpirajo spletne strani. Prilagojena je za 4k, za navadne HD zaslone, za tablice in za mobilne telefone. 

# Težave
Vsi brskalniki, ki sem jih preizkusil (FIrefox, Chrome, Edge, IE) stran prikazujejo bolj kot ne enako, sem pa opazil par razlik, ki sem jih poslikal in dal v direktorij /docs/browsers. Največja razlika je pri IE, ki ne pozna lastnosti display: -webkit-inline-box, zato sem moral preveriti ali brskalnik to lastnost podpira in če ne, uporabi display:flex ter v javascriptu onemogoči gumbe za premikanje naprej in nazaj. Druga razlika je pri brskalniku Edge, ki si malo po svoje razlaga dimenzije, saj so vse pisave in tudi nekatere višine ter širine kar različne od ostalih treh (velja predvsem za procente in viewport enote).

# Zmogljivosti
Najbolj zanimiva stvar na strani mi je modalni dialog brez uporabe Javascripta. Nisem si mislil, da je to sploh mogoče samo z uporabo CSS-a, a so očitno dodali nov psevdo razred :target, ki se sproži z elementom a, primer: <li><a class="navigation_button" href="#login_form">Login</a></li>. To elementu login_form doda :target, kjer ga nato v CSS-u pokažemo.
Druga stvar je Konami code, preizkus na prvi strani.

# Naprej
Če izpustimo backend, torej dodajanje dogodkov, prikaz dogodkov iz baze itd., bom dodal nekaj animacij, da stran še malo popestrim, kako sliko, recimo profila, da stran tudi malo personaliziram. Polepšanje kode, torej nekako identične elemente shraniti nekam, da jih lahko nato preprosto uvozim.