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

const imageEl = document.getElementById("question-image");
const imageCreditEl = document.getElementById("image-credit");

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timerEl.textContent = `Time: ${time}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";

    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    scoreEl.textContent = `Score: ${score}/${questions.length}`;

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
    const allButtons = document.querySelectorAll(".answers .answers-button");
    allButtons.forEach(btn => btn.disabled = true);

    const q = questions[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    if (isCorrect) score++;

    scoreEl.textContent = `Score: ${score}/${questions.length}`;

    // Display correct/incorrect message above bullet points
    feedbackEl.innerHTML = ""; // clear previous
    // Create the correct/incorrect message div
    const statusDiv = document.createElement("div");
    statusDiv.className = "answer-status";  // base class
    statusDiv.textContent = isCorrect ? "Correct!" : "Incorrect!";

    // Add the correct/incorrect class for color
    statusDiv.classList.add(isCorrect ? "correct" : "incorrect");

    // Append it to the feedback container
    feedbackEl.appendChild(statusDiv);

    // Display 4 bullet points
    const ul = document.createElement("ul");
    q.message.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
    feedbackEl.appendChild(ul);

    nextBtn.style.display = "inline-block";
}


nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else {
        questionEl.textContent = `Quiz Finished! Final Score: ${score}/${questions.length}`;
        answersEl.innerHTML = "";
        feedbackEl.innerHTML = "";
        questionNumberEl.textContent = "";
        imageEl.style.display = "none";
        imageCreditEl.textContent = "";
        nextBtn.style.display = "none";
        stopTimer();
    }
});

// Start game
showQuestion();









