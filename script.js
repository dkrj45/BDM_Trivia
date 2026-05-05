const questions = [
    {
        question: "Which province recorded the most snowfall during the 2025–2026 winter season?",
        answers: ["British Columbia", "Newfoundland & Labrador", "Ontario", "Quebec"],
        correct: 2,
        image: "images/snowfall.jpg",
        credit: "Environment and Climate Change Canada",
        message: [
            "BC has high elevation snow, but didn't take the top spot this year.",
            "Usually a leader, but Newfoundland saw a milder winter than central Canada.",
            "Ontario had a historic winter with some regions hitting over 490 cm.",
            "Quebec had a heavy winter, but fell just short of Ontario's record-breaking totals."
        ]
    },
    {
        question: "Who is the Canadian astronaut selected for NASA’s Artemis II mission?",
        answers: ["David Saint-Jacques", "Chris Hadfield", "Jeremy Hansen", "Robert Thirsk"],
        correct: 2,
        image: "images/astronaut.jpg",
        credit: "Canadian Space Agency",
        message: [
            "David Saint-Jacques completed a mission to the ISS in 2018, but isn't on Artemis II.",
            "Chris Hadfield is a Canadian icon, but he is currently retired from active spaceflight.",
            "Jeremy Hansen will be the first Canadian to travel to the Moon.",
            "Robert Thirsk is a veteran astronaut who holds the record for most time in space by a Canadian."
        ]
    },
    {
        question: "Canada will co-host the 2026 FIFA World Cup with which countries?",
        answers: ["USA & Mexico", "USA & Brazil", "Mexico & Argentina", "USA & United Kingdom"],
        correct: 0,
        image: "images/worldcup.jpg",
        credit: "FIFA / Canada Soccer",
        message: [
            "This will be the first World Cup hosted by three North American nations.",
            "Brazil hosted in 2014, but they are not part of the 2026 North American bid.",
            "Argentina co-hosted the 2030 opener, but isn't part of this 2026 tournament.",
            "The UK is not involved; matches are spread across Canada, the US, and Mexico."
        ]
    },
    {
        question: "What is the most-visited landmark in Canada?",
        answers: ["CN Tower", "Banff National Park", "Whistler Blackcomb", "Niagara Falls"],
        correct: 3,
        image: "images/landmark.jpg",
        credit: "Destination Ontario",
        message: [
            "The CN Tower is iconic, but its numbers are lower than the massive crowds at the Falls.",
            "Banff sees millions of visitors, but Niagara Falls still holds the top spot for volume.",
            "Whistler is a premier ski destination, but it doesn't match the annual foot traffic of Niagara.",
            "Niagara Falls attracts over 12 million visitors annually."
        ]
    },
    {
        question: "Which of the following foods is most strongly associated with Montreal’s culinary identity?",
        answers: ["Tourtière", "Poutine", "Nanaimo Bars", "BeaverTails"],
        correct: 1,
        image: "images/poutine.jpg",
        credit: "Montreal Tourism",
        message: [
            "Tourtière is a classic Quebec meat pie, but poutine is more globally synonymous with Montreal.",
            "While invented in Warwick/Drummondville, poutine is Montreal's most iconic export.",
            "Nanaimo Bars actually originated in Nanaimo, British Columbia.",
            "BeaverTails originated in Ottawa, though they are popular across Canada."
        ]
    },
    {
        question: "What does BDMISDB stand for?",
        answers: ["Benefits Delivery Modernization Implementation and Service Design Branch", "Benefits Data Management Infrastructure and Systems Development Bureau", "Branch for Digital Modernization, Innovation, Services, and Delivery Base", "Business Development Management and Innovation Strategy Division Board"],
        correct: 0,
        image: "images/government.jpg",
        credit: "Employment and Social Development Canada (ESDC)",
        message: [
            "This branch is leading the transformation of EI, OAS, and CPP systems.",
            "Sounds technical, but 'Bureau' and 'Infrastructure' aren't part of this specific branch name.",
            "Close, but BDMISDB specifically focuses on the Implementation and Service Design aspects.",
            "Incorrect. This sounds more like a corporate board than a government service branch."
        ]
    },
    {
        question: "Which Canadian province generates the highest percentage of its electricity from hydroelectric power?",
        answers: ["British Columbia", "Newfoundland & Labrador", "Quebec", "Manitoba"],
        correct: 2,
        image: "images/hydro.jpg",
        credit: "Hydro-Québec",
        message: [
            "BC uses a lot of hydro, but Quebec's percentage and total scale are higher.",
            "Newfoundland has massive hydro projects like Churchill Falls, but relies on more varied sources overall.",
            "Over 94% of Quebec's electricity is generated by its massive hydro network.",
            "Manitoba is a major hydro producer, but Quebec remains the national leader in total output."
        ]
    },
    {
        question: "Which Canadian city has the largest Indigenous population?",
        answers: ["Winnipeg", "Toronto", "Edmonton", "Vancouver"],
        correct: 1,
        image: "images/toronto_skyline.jpg",
        credit: "Statistics Canada",
        message: [
            "Winnipeg has the highest *proportion* of Indigenous residents, but not the highest total number.",
            "Toronto has the largest total number of Indigenous people in Canada.",
            "Edmonton has a very large population, but it sits behind Toronto in total count.",
            "Vancouver has a significant population, but it ranks 4th behind Toronto, Winnipeg, and Edmonton."
        ]
    },
    {
        question: "Which Canadian province was the last to join Confederation?",
        answers: ["Alberta", "Saskatchewan", "Nunavut", "Newfoundland & Labrador"],
        correct: 3,
        image: "images/confederation.jpg",
        credit: "Library and Archives Canada",
        message: [
            "Alberta joined in 1905, nearly 45 years before the final province joined.",
            "Saskatchewan also joined in 1905 along with Alberta.",
            "Nunavut is a territory, not a province, and was created in 1999.",
            "Newfoundland and Labrador joined Canada in 1949."
        ]
    },
    {
        question: "Which Canadian company is the world’s largest producer of potash?",
        answers: ["Teck Resources", "Barrick Gold", "Nutrien", "Cameco"],
        correct: 2,
        image: "images/potash.jpg",
        credit: "Nutrien Corporate",
        message: [
            "Teck is a major mining company, but they focus on copper, zinc, and steelmaking coal.",
            "Barrick Gold is one of the world's largest gold miners, not a potash producer.",
            "Saskatoon-based Nutrien is the world's top producer of potash.",
            "Cameco is the world's largest publicly traded uranium company."
        ]
    },
    {
        question: "Which Canadian city is home to the busiest cargo port in the country?",
        answers: ["Montreal", "Halifax", "Vancouver", "Prince Rupert"],
        correct: 2,
        image: "images/port.jpg",
        credit: "Port of Vancouver",
        message: [
            "Montreal is a major inland port, but it handles less tonnage than the West Coast.",
            "Halifax is a key Atlantic gateway, but doesn't reach Vancouver's volume.",
            "The Port of Vancouver is the largest and busiest in Canada.",
            "Prince Rupert is growing fast due to its proximity to Asia, but Vancouver is still #1."
        ]
    },
    {
        question: "Which Canadian territory contains the northernmost permanently inhabited place on Earth?",
        answers: ["Yukon", "Northwest Territories", "Nunavut", "None of the above"],
        correct: 2,
        image: "images/arctic.jpg",
        credit: "Canadian Armed Forces",
        message: [
            "Yukon is home to the highest peak (Mt. Logan), but not the northernmost settlement.",
            "NWT reaches the Arctic coast, but Nunavut extends much further north.",
            "Alert, Nunavut, is the northernmost permanently inhabited place on Earth.",
            "Actually, it is a territory—the answer is Nunavut!"
        ]
    },
    {
        question: "Which Canadian province has the highest number of UNESCO World Heritage Sites?",
        answers: ["Alberta", "British Columbia", "Nova Scotia", "Quebec"],
        correct: 2,
        image: "images/unesco.jpg",
        credit: "Parks Canada",
        message: [
            "Alberta has several sites like Head-Smashed-In Buffalo Jump, but ranks behind Nova Scotia.",
            "BC has fewer UNESCO sites compared to the Atlantic coast.",
            "Nova Scotia has three sites: Lunenburg, Joggins Cliffs, and Grand Pré.",
            "Quebec has two sites (Old Quebec and Miguasha), but Nova Scotia has three."
        ]
    },
    {
        question: "Which Canadian bank is the oldest, founded in 1817?",
        answers: ["RBC", "CIBC", "Bank of Montreal (BMO)", "Scotiabank"],
        correct: 2,
        image: "images/bmo.jpg",
        credit: "BMO Financial Group",
        message: [
            "RBC was founded in Halifax in 1864, much later than BMO.",
            "CIBC was formed by a merger, with its oldest roots dating to 1867.",
            "BMO was founded in 1817 and holds the first banking charter in Canada.",
            "Scotiabank was founded in Halifax in 1832."
        ]
    },
    {
        question: "Which Canadian city is home to the country's largest aerospace industry hub?",
        answers: ["Toronto", "Montreal", "Calgary", "Ottawa"],
        correct: 1,
        image: "images/aerospace.jpg",
        credit: "Aéro Montréal",
        message: [
            "Toronto has a significant aerospace presence, but Montreal is the global hub.",
            "Montreal is one of the top aerospace cities in the world, alongside Seattle and Toulouse.",
            "Calgary has a growing tech sector, but is not the primary aerospace hub.",
            "Ottawa focuses more on defense and telecommunications than commercial aerospace."
        ]
    },
    {
        question: "Which province is the only one where civil law (rather than common law) is the foundation of private law?",
        answers: ["New Brunswick", "Manitoba", "Quebec", "Nova Scotia"],
        correct: 2,
        image: "images/courthouse.jpg",
        credit: "Justice Canada",
        message: [
            "New Brunswick follows English Common Law for its private legal matters.",
            "Manitoba, like most of Canada, is a Common Law jurisdiction.",
            "Quebec is the only province that uses a Civil Code for private law.",
            "Nova Scotia follows the Common Law system."
        ]
    },
    {
        question: "Which Canadian national park is the largest by land area?",
        answers: ["Banff", "Jasper", "Nahanni", "Wood Buffalo"],
        correct: 3,
        image: "images/nationalpark.jpg",
        credit: "Parks Canada",
        message: [
            "Banff was Canada's first national park, but it is much smaller than Wood Buffalo.",
            "Jasper is the largest in the Rockies, but Wood Buffalo is twice its size.",
            "Nahanni is massive and beautiful, but Wood Buffalo still holds the land area record.",
            "Wood Buffalo National Park is larger than Switzerland!"
        ]
    },
    {
        question: "Which Canadian city was the first to host the Winter Olympics?",
        answers: ["Vancouver", "Calgary", "Montreal", "Quebec City"],
        correct: 1,
        image: "images/olympics.jpg",
        credit: "Olympic.ca",
        message: [
            "Vancouver hosted in 2010, which was 22 years after the first Canadian Winter Games.",
            "Calgary hosted the Winter Olympics in 1988.",
            "Montreal hosted the Summer Olympics in 1976, but has never hosted the Winter Games.",
            "Quebec City has bid for the games but has never hosted them."
        ]
    },
    {
        question: "Which Canadian province has the highest percentage of French speakers outside Quebec?",
        answers: ["Manitoba", "Ontario", "New Brunswick", "Nova Scotia"],
        correct: 2,
        image: "images/bilingual.jpg",
        credit: "Office of the Commissioner of Official Languages",
        message: [
            "Manitoba has a proud Francophone community, but it is smaller as a percentage than NB.",
            "Ontario has the largest *number* of Francophones outside Quebec, but not the highest *percentage*.",
            "New Brunswick is about 33% Francophone and is officially bilingual.",
            "Nova Scotia has the Acadian community, but the total percentage is lower than New Brunswick."
        ]
    },
    {
        question: "Which Canadian company invented the world’s first practical snowmobile?",
        answers: ["John Deere Canada", "Canadian Tire", "Bombardier", "Polaris Canada"],
        correct: 2,
        image: "images/snowmobile.jpg",
        credit: "Bombardier Museum",
        message: [
            "John Deere is famous for tractors, but not the invention of the snowmobile.",
            "Canadian Tire sells snowmobile gear, but they are a retailer, not the inventor.",
            "J-Armand Bombardier invented the snowmobile to help people travel in winter.",
            "Polaris is a major manufacturer, but they didn't invent the practical snowmobile."
        ]
    }
];

const frenchQuestions = [
    {
        question: "Quelle province a enregistré le plus de neige pendant durant la saison hivernale 2025-2026 ?",
        answers: ["Colombie-Britannique", "Terre-Neuve-et-Labrador", "Ontario", "Québec"],
        correct: 2,
        image: "images/snowfall.jpg",
        credit: "Environnement et Changement climatique Canada",
        message: [
            "La Colombie-Britannique a de la neige en altitude élevée, mais n'a pas pris la première place cette année.",
            "Habituellement un leader, mais Terre-Neuve a vu un hiver plus doux que le centre du Canada.",
            "L'Ontario a eu un hiver historique avec certaines régions dépassant 490 cm.",
            "Le Québec a eu un hiver lourd, mais est juste en dessous des totaux record de l'Ontario."
        ]
    },
    {
        question: "Quel astronaute canadien a été sélectionné pour la mission Artemis II de la NASA ?",
        answers: ["David Saint-Jacques", "Chris Hadfield", "Jeremy Hansen", "Robert Thirsk"],
        correct: 2,
        image: "images/astronaut.jpg",
        credit: "Agence spatiale canadienne",
        message: [
            "David Saint-Jacques a effectué une mission à l'ISS en 2018, mais il ne fait pas partie d’Artemis II.",
            "Chris Hadfield est une icône canadienne, mais il est maintenant retraité du service spatial actif.",
            "Jeremy Hansen sera le premier Canadien à voyager vers la Lune.",
            "Robert Thirsk est un astronaute chevronné qui détient le record du plus long séjour dans l’espace pour un Canadien."
        ]
    },
    {
        question: "Le Canada co-organisera la Coupe du Monde de la FIFA 2026 avec quels pays ?",
        answers: ["États-Unis et Mexique", "États-Unis et Brésil", "Mexique et Argentine", "États-Unis et Royaume-Uni"],
        correct: 0,
        image: "images/worldcup.jpg",
        credit: "FIFA / Canada Soccer",
        message: [
            "Ce sera la première Coupe du Monde organisée par trois nations nord-américaines.",
            "Le Brésil a organisé en 2014, mais ils ne font pas partie de l'offre nord-américaine 2026.",
            "L'Argentine codirigé le match d’ouverture de 2030, mais ne participe pas au tournoi de 2026.",
            "Le Royaume-Uni n'est pas impliqué les matchs sont répartis entre le Canada, les États-Unis et le Mexique."
        ]
    },
    {
        question: "Quel est le site touristique le plus visité au Canada ?",
        answers: ["Tour CN", "Parc national de Banff", "Whistler Blackcomb", "Le chutes du Niagara"],
        correct: 3,
        image: "images/landmark.jpg",
        credit: "Destination Ontario",
        message: [
            "La Tour CN est emblématique, mais elle accueille moins de visiteurs que les foules massives des chutes.",
            "Banff voit des millions de visiteurs, mais les Chutes du Niagara détiennent toujours la première place en volume.",
            "Whistler est une destination de ski de premier plan, mais n’égale pas l’achalandage annuel des chutes.",
            "Les Chutes du Niagara attirent plus de 12 millions de visiteurs par an."
        ]
    },
    {
        question: "Parmi les aliments suivants, lequel est le plus fortement associé à l’identité culinaire de Montréal ?",
        answers: ["Tourtière", "Poutine", "Barres Nanaimo", "BeaverTails"],
        correct: 1,
        image: "images/poutine.jpg",
        credit: "Tourisme Montréal",
        message: [
            "La tourtière est une tarte à la viande classique du Québec, mais la poutine est plus étroitement associée à Montréal à l’échelle mondiale.",
            "Bien qu'inventée à Warwick/Drummondville, la poutine est l'exportation culinaire la plus emblématique de Montréal.",
            "Les barres Nanaimo sont originaires de Nanaimo, en Colombie-Britannique.",
            "Les Queues de castor sont originaires d’Ottawa, même si elles sont populaires partout au Canada."
        ]
    },
    {
        question: "Que signifie l’acronyme BDMISDB ?",
        answers: ["Direction de la Modernisation des Prestations, de l'Implémentation et de la Conception des Services", "Bureau de Gestion des Données des Prestations et d'Infrastructure des Systèmes", "Branche de la Modernisation Numérique, de l'Innovation, des Services et de la Base de Livraison", "Conseil de Division de Développement Commercial et de Stratégie d'Innovation"],
        correct: 0,
        image: "images/government.jpg",
        credit: "Emploi et Développement social Canada (EDSC)",
        message: [
            "Cette branche dirige la transformation des systèmes d'AE, de SV et de RPC.",
            "Semble technique, mais 'Bureau' et 'Infrastructure' ne font pas partie de ce nom de branche spécifique.",
            "Proche, mais BDMISDB se concentre spécifiquement sur les aspects d'Implémentation et de Conception des Services.",
            "Incorrect. Cela ressemble plus à un conseil d'entreprise qu'à une branche de service gouvernemental."
        ]
    },
    {
        question: "Quelle province canadienne génère le pourcentage le plus élevé de son électricité à partir de l'énergie hydroélectrique ?",
        answers: ["Colombie-Britannique", "Terre-Neuve-et-Labrador", "Québec", "Manitoba"],
        correct: 2,
        image: "images/hydro.jpg",
        credit: "Hydro-Québec",
        message: [
            "La Colombie-Britannique utilise beaucoup d'hydro, mais le pourcentage et l'échelle totale du Québec sont plus élevés.",
            "Terre-Neuve a des projets hydro massifs comme Churchill Falls, mais dépend de sources plus variées dans l'ensemble.",
            "Plus de 94 % de l'électricité du Québec est générée par son réseau hydro massif.",
            "Le Manitoba est un producteur hydro majeur, mais le Québec reste le leader national en production totale."
        ]
    },
    {
        question: "Quelle ville canadienne a la plus grande population autochtone ?",
        answers: ["Winnipeg", "Toronto", "Edmonton", "Vancouver"],
        correct: 1,
        image: "images/toronto_skyline.jpg",
        credit: "Statistique Canada",
        message: [
            "Winnipeg a la plus forte proportion de résidents autochtones, mais pas le plus grand nombre total.",
            "Toronto compte a le plus grand nombre total de personnes autochtones au Canada.",
            " Edmonton a une population très grande, mais elle est derrière Toronto en nombre total.",
            "Vancouver a une population significative, mais elle se classe 4e derrière Toronto, Winnipeg et Edmonton."
        ]
    },
    {
        question: "Quelle province canadienne a été la dernière à se joindre à la Confédération ? ",
        answers: ["Alberta", "Saskatchewan", "Nunavut", "Terre-Neuve-et-Labrador"],
        correct: 3,
        image: "images/confederation.jpg",
        credit: "Bibliothèque et Archives Canada",
        message: [
            "L’Alberta a rejoint la Confédération en 1905, soit près de 45 ans avant la dernière province.",
            "La Saskatchewan a également rejoint en 1905, en même temps que l’Alberta.",
            "Le Nunavut est un territoire, pas une province, et a été créé en 1999.",
            "Terre-Neuve-et-Labrador a rejoint le Canada en 1949."
        ]
    },
    {
        question: "Quelle entreprise canadienne est le plus grand producteur mondial de potasse ?",
        answers: ["Teck Resources", "Barrick Gold", "Nutrien", "Cameco"],
        correct: 2,
        image: "images/potash.jpg",
        credit: "Nutrien Corporate",
        message: [
            "Teck est une grande entreprise minière, mais elle se concentre sur le cuivre, le zinc et le charbon sidérurgique.",
            "Barrick Gold est l’un des plus grands producteurs d’or au monde, pas de potasse.",
            "Nutrien, basée à Saskatoon, est le premier producteur mondial de potasse.",
            "Cameco est la plus grande entreprise d’uranium cotée en bourse au monde."
        ]
    },
    {
        question: "Quelle ville canadienne abrite le port de fret le plus occupé du pays ?",
        answers: ["Montréal", "Halifax", "Vancouver", "Prince Rupert"],
        correct: 2,
        image: "images/port.jpg",
        credit: "Port de Vancouver",
        message: [
            "Montréal est un port intérieur majeur, mais il gère moins de tonnage que la côte ouest.",
            "Halifax est une passerelle atlantique clé, mais n'atteint pas le volume de Vancouver.",
            "Le Port de Vancouver est le plus grand et le plus occupé au Canada.",
            "Prince Rupert se développe rapidement en raison de sa proximité avec l'Asie, mais Vancouver est toujours #1."
        ]
    },
    {
        question: "Quel territoire canadien contient l'endroit habité en permanence le plus au nord sur Terre ?",
        answers: ["Yukon", "Territoires du Nord-Ouest", "Nunavut", "Aucun des ci-dessus"],
        correct: 2,
        image: "images/arctic.jpg",
        credit: "Forces armées canadiennes",
        message: [
            "Le Yukon abrite le plus haut sommet (Mt. Logan), mais pas l'établissement le plus au nord.",
            "Les TNO atteignent la côte arctique, mais le Nunavut s'étend beaucoup plus au nord.",
            "Alert, Nunavut, est l'endroit habité en permanence le plus au nord sur Terre.",
            "En réalité, il s’agit bien d’un territoire : la bonne réponse est le Nunavut!"
        ]
    },
    {
        question: "Quelle province canadienne a le plus grand nombre de sites du patrimoine mondial de l'UNESCO ?",
        answers: ["Alberta", "Colombie-Britannique", "Nouvelle-Écosse", "Québec"],
        correct: 2,
        image: "images/unesco.jpg",
        credit: "Parcs Canada",
        message: [
            "L’Alberta possède plusieurs sites comme Head-Smashed-In Buffalo Jump, mais elle arrive derrière la Nouvelle-Écosse.",
            "La Colombie-Britannique a moins de sites UNESCO comparé à la côte atlantique.",
            "La Nouvelle-Écosse possède trois sites : Lunenburg, Joggins Cliffs et Grand Pré.",
            "Le Québec a deux sites (Vieux-Québec et Miguasha), mais la Nouvelle-Écosse en a trois."
        ]
    },
    {
        question: "Quelle banque canadienne est la plus ancienne, fondée en 1817 ?",
        answers: ["RBC", "CIBC", "Banque de Montréal (BMO)", "Scotiabank"],
        correct: 2,
        image: "images/bmo.jpg",
        credit: "Groupe Financier BMO",
        message: [
            "La RBC a été fondée à Halifax en 1864,bien après la BMO.",
            "La CIBC a été formée par une fusion, avec ses racines les plus anciennes datant de 1867.",
            "La BMO a été fondée en 1817 et détient la première charte bancaire au Canada.",
            "La Scotiabank a été fondée à Halifax en 1832."
        ]
    },
    {
        question: "Quelle ville canadienne abrite le plus grand pôle de l'industrie aérospatiale du pays ?",
        answers: ["Toronto", "Montréal", "Calgary", "Ottawa"],
        correct: 1,
        image: "images/aerospace.jpg",
        credit: "Aéro Montréal",
        message: [
            "Toronto a une présence aérospatiale significative, mais Montréal est le pôle mondial.",
            "Montréal est l'une des principales villes aérospatiales au monde, aux côtés de Seattle et Toulouse.",
            "Calgary a un secteur technologique en croissance, mais n'est pas le principal centre aérospatial.",
            "Ottawa se concentre plus sur la défense et les télécommunications que sur l'aérospatiale commerciale."
        ]
    },
    {
        question: "Quelle province est la seule où le droit civil (plutôt que le common law) est la base du droit privé ?",
        answers: ["Nouveau-Brunswick", "Manitoba", "Québec", "Nouvelle-Écosse"],
        correct: 2,
        image: "images/courthouse.jpg",
        credit: "Justice Canada",
        message: [
            "Le Nouveau-Brunswick suit le common law anglais pour ses affaires juridiques privées.",
            "Le Manitoba, comme la plupart du Canada, est une juridiction de common law.",
            "Le Québec est la seule province qui utilise un Code civil pour le droit privé.",
            "La Nouvelle-Écosse suit le système de common law."
        ]
    },
    {
        question: "Quel parc national canadien est le plus vaste en superficie terrestre ?",
        answers: ["Banff", "Jasper", "Nahanni", "Wood Buffalo"],
        correct: 3,
        image: "images/nationalpark.jpg",
        credit: "Parcs Canada",
        message: [
            "Banff était le premier parc national du Canada, mais il est beaucoup plus petit que Wood Buffalo.",
            "Jasper est le plus grand dans les Rocheuses, mais Wood Buffalo est deux fois plus grand.",
            "Nahanni est immense et magnifique, mais Wood Buffalo détient toujours le record de superficie.",
            "Le Parc national Wood Buffalo est plus grand que la Suisse !"
        ]
    },
    {
        question: "Quelle ville canadienne a été la première à accueillir les Jeux Olympiques d'hiver ?",
        answers: ["Vancouver", "Calgary", "Montréal", "Québec"],
        correct: 1,
        image: "images/olympics.jpg",
        credit: "Olympic.ca",
        message: [
            "Vancouver a accueilli les Jeux en 2010, soit 22 ans après les premiers Jeux d’hiver au Canada.",
            "Calgary a accueilli les Jeux Olympiques d'hiver en 1988.",
            "Montréal a accueilli les Jeux olympiques d’été en 1976, mais jamais les Jeux d’hiver.",
            "Québec a présenté sa candidature, mais n’a jamais accueilli les Jeux."
        ]
    },
    {
        question: "Quelle province canadienne compte la plus forte proportion de francophones à l’extérieur du Québec ?",
        answers: ["Manitoba", "Ontario", "Nouveau-Brunswick", "Nouvelle-Écosse"],
        correct: 2,
        image: "images/bilingual.jpg",
        credit: "Bureau du Commissaire aux langues officielles",
        message: [
            "Le Manitoba possède une fière communauté francophone, mais son pourcentage est inférieur à celui du N.-B.",
            "L’Ontario compte le plus grand nombre de francophones hors Québec, mais pas la plus forte proportion.",
            "Environ 33 % de la population du Nouveau-Brunswick est francophone, et la province est officiellement bilingue.",
            "La Nouvelle-Écosse abrite une communauté acadienne, mais la proportion totale est inférieure à celle du Nouveau-Brunswick."
        ]
    },
    {
        question: "Quelle entreprise canadienne a inventé la premier motoneige pratique au monde ?",
        answers: ["John Deere Canada", "Canadian Tire", "Bombardier", "Polaris Canada"],
        correct: 2,
        image: "images/snowmobile.jpg",
        credit: "Musée Bombardier",
        message: [
            "John Deere est célèbre pour ses tracteurs, mais n’a pas inventé la motoneige.",
            "Canadian Tire vend de l’équipement pour motoneiges, mais c’est un détaillant, pas l’inventeur.",
            "J-Armand Bombardier a inventé la motoneige pour aider les gens à voyager en hiver.",
            "Polaris est un important fabricant, mais n’a pas inventé la motoneige pratique."
        ]
    }
];

let currentLanguage = 'en';
let currentQuestions = questions;
let currentQuestion = 0;
let score = 0;
let time = 0;
let timerInterval;

const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const feedbackEl = document.querySelector(".feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("question-number");
const langToggle = document.getElementById("lang-toggle");

const imageEl = document.getElementById("question-image");
const imageCreditEl = document.getElementById("image-credit");

function switchLanguage() {
    const timerActive = timerInterval != null;
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    currentQuestions = currentLanguage === 'en' ? questions : frenchQuestions;
    if (currentQuestion >= currentQuestions.length) {
        currentQuestion = currentQuestions.length - 1;
    }
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'en' ? "ProM Fiscal Year End Celebration Trivia" : "Trivia de la Célébration de Fin d'Exercice de ProM";
    document.querySelector("h1").textContent = currentLanguage === 'en' ? "ProM Fiscal Year End Celebration Trivia" : "Trivia de la Célébration de Fin d'Exercice de ProM";
    langToggle.textContent = currentLanguage === 'en' ? "Français" : "English";
    if (timerActive) stopTimer();
    showQuestion();
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    time = 0;
    stopTimer();
}

function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
        time++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function updateTimerDisplay() {
    timerEl.textContent = currentLanguage === 'en' ? `Time: ${time}s` : `Temps: ${time}s`;
}

function showQuestion() {
    const q = currentQuestions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";
    nextBtn.textContent = currentLanguage === 'en' ? "Next" : "Suivant";

    questionNumberEl.textContent = currentLanguage === 'en' ? `Question ${currentQuestion + 1} of ${currentQuestions.length}` : `Question ${currentQuestion + 1} sur ${currentQuestions.length}`;
    scoreEl.textContent = currentLanguage === 'en' ? `Score: ${score}/${currentQuestions.length}` : `Score: ${score}/${currentQuestions.length}`;

    // Image handling
    if (q.image) {
        imageEl.src = q.image;
        imageEl.style.display = "block";
        imageEl.alt = q.question;
        imageCreditEl.textContent = q.credit || "";
    } else {
        imageEl.style.display = "none";
        imageCreditEl.textContent = "";
    }

    updateTimerDisplay();
    startTimer();

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "answers-button";
        btn.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    stopTimer();
    const q = currentQuestions[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    const allButtons = document.querySelectorAll(".answers .answers-button");
    allButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) btn.classList.add("correct-answer");
        if (idx === selectedIndex && !isCorrect) btn.classList.add("incorrect-answer");
    });

    if (isCorrect) score++;

    scoreEl.textContent = currentLanguage === 'en' ? `Score: ${score}/${currentQuestions.length}` : `Score: ${score}/${currentQuestions.length}`;

    feedbackEl.innerHTML = ""; // clear previous
    const statusDiv = document.createElement("div");
    statusDiv.className = "answer-status";
    statusDiv.textContent = isCorrect ? (currentLanguage === 'en' ? "Correct!" : "Correct !") : (currentLanguage === 'en' ? "Incorrect!" : "Incorrect !");
    statusDiv.classList.add(isCorrect ? "correct" : "incorrect");
    feedbackEl.appendChild(statusDiv);

    const answerText = document.createElement("div");
    answerText.className = "correct-answer-text";
    answerText.textContent = currentLanguage === 'en' ? `Correct answer: ${q.answers[q.correct]}` : `Bonne réponse : ${q.answers[q.correct]}`;
    feedbackEl.appendChild(answerText);

    const ul = document.createElement("ul");
    q.message.forEach((msg, idx) => {
        const li = document.createElement("li");
        li.textContent = `${q.answers[idx]} — ${msg}`;
        if (idx === q.correct) {
            li.classList.add("correct-description-item");
        }
        ul.appendChild(li);
    });
    feedbackEl.appendChild(ul);

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) showQuestion();
    else {
        questionEl.textContent = currentLanguage === 'en' ? `Quiz Finished! Final Score: ${score}/${currentQuestions.length}` : `Quiz terminé ! Score final : ${score}/${currentQuestions.length}`;
        answersEl.innerHTML = "";
        feedbackEl.innerHTML = "";
        questionNumberEl.textContent = "";
        imageEl.style.display = "none";
        imageCreditEl.textContent = "";
        nextBtn.style.display = "none";
        stopTimer();
    }
});

langToggle.addEventListener("click", switchLanguage);

// Start game
showQuestion();









