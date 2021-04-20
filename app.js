// all of the card objects
let cards = [];
// currently shown card objects
let currentCards = [];

// just a JSON like representation, probably move this to another file
let cardInfo = [
    {
        "title": "Electric Car",
        "subtitle": "Building the first Electric Vehicle for Columbia University's Motorsports team",
        "image": "images/fullassembly.JPG",
        "imageAlt": "Rendered car assembly",
        "info": [
            "Responsible for the design and integration of the drivetrain, design of the cooling system, and machining of all components.",
            "I learned a great amount about designing components to strike a balance between performance (material weight vs load bearing capabilities), machinability, and reducing waste of material during machining processes.",
            "Additionally, I had to consider fitting the drivetrain of an electric vehicle into a chassis primarily designed for an internal combustion engine, all while communicating with other team members to gain an idea of my design limitations in conjunction with their contributions",
            "A huge shout out to the rest of my senior design team for their immense effort, the countless late nights, great learning experience, and bringing me food to the machine shop!"
        ],
        "links": [
            {
                "url": "pdfs/exposlides.pdf",
                "text": "Check out Presentation!"
            }
        ],
        "tags": ["mechanical", "electrical", "design", "CAD", "manufacturing"]
    },

    {
        "title": "Load Cell Electric Skateboard",
        "subtitle": "Electrical prototype for a skateboard driven by changes in user weight distribution",
        "image": "images/skatevid.gif",
        "imageAlt": "Prototype image",
       
        "info": [
            "The idea is to create a skateboard that will accelerate itself based on a user's weight distribution.",
            "I looked into how the WiiFit board was designed and discovered the weight sensing element is found in everyday electronic scales: load cells.",
            "I began taking apart some electronic scales to grab their load cells and wired them up to create a wheatstone bridge. I connected the output to a differential gain amplifier to increase the output signal and verified the results with a multimeter. A change in pressure resulted in a demonstrable change in voltage.",
            "Created prototype driven by brushless DC motor fueled by LiPo battery. Load cell weight inputted into Arduino which determines motor speed based on weight distribution and foot placement."
        ],
        "links": [
            {
                "url": "pdfs/board_pics.pdf",
                "text": "Process Pictures"
            }
        ],
        "tags": ["mechanical", "electrical", "design"]
    },
    {
        "title": "RipTide",
        "subtitle": "Find Cheap Drinks Mobile App",
        "image": "images/riptide.PNG",
        "imageAlt": "RipTide Screenshot",
        "info": [
            "Location based app that displays cheapest drinks at bars near user from an internal database.",
            "Users can create custom routes with multiple bars.",
            "In App navigation provided through Google Maps API.",
            "Using Ruby on Rails for server, React Native for iOS/Android app, React for admin dashboard, static HTML/CSS/Javascript for informational site."
        ],
        "links": [
            {
                "url": "https://letsripit.com/",
                "text": "Visit Website"
            },
            {
                "url": "https://apps.apple.com/app/id1531950394",
                "text": "App Store"
            }
        ],
        "tags": ["software", "app"]
    },
    {
        "title": "SpotVote",
        "subtitle": "Spotify Album Voting Client",
        "image": "images/Spotvote.PNG",
        "imageAlt": "SpotVote",
        "info": [
            "A Spotify album voting client built with Ruby on Rails and custom CSS with media queries for mobile device compatibility",
            "I implemented this by using Spotify's Web API to get data from albums based on user search queries.",
            "What is returned by the API request is compared to what is in SpotVote's database.",
            "If it is not in SpotVote's database, the album info is added to the database.",
            "If an album is already in the database, saving the Spotify API query does not occur and instead the album is pulled from the database.",
            "Some optimizations for this could involve caching search query strings and mapping them to certain results to avoid so many database requests."
        ],
        "links": [
            {
                "url": "https://spotvote.herokuapp.com/",
                "text": "Visit Website"
            }
        ],
        "tags": ["software"]
    },
    {
        "title": "Pokemon Battler",
        "subtitle": "React text based pokemon battler",
        "image": "images/pokemon.PNG",
        "imageAlt": "Pokemon",
        "info": [
            "Made it as a short intro to React hooks and GraphQL",
            "The pokemon template and GraphQL source can be found in link below. Expanded on the tutorial by created text based battle mode.",
            "API has been deprecated, so no longer works :-/"
        ],
        "links": [
            {
                "url": "https://www.youtube.com/watch?v=yKFoAF7J0mc&t=2s",
                "text": "Tutorial"
            }
        ],
        "tags": []
    },
    {
        "title": "Subbit",
        "subtitle": "NYC social media based around subway stops",
        "image": "images/SubbitNew.PNG",
        "imageAlt": "Subbit",
        "info": [
            "Just a simple social media where people can post events happening baed off subway stop location",
            "People can vote on posts to make cool stuff sift to the top",
        ],
        "links": [
            {
                "url": "https://subbit.net",
                "text": "Visit subbit.net!"
            }
        ],
        "tags": ["software"]
    },
    {
        "title": "Valve design",
        "subtitle": "Design, fabrication, and testing of valve for table-top air compressor",
        "image": "images/valve.gif",
        "imageAlt": "Valve gif",
        "imageStyle": "true",
        "info": [
            "Machine Design Final Project: Design, manufacturing, and analysis of air compressor valve. I worked with 2 other team mates to design and build a valve to drive an air compressor in the mechanical engineering laboratory.",
            "I was primarily responsible for ensuring all component designs were machinable and machining all components.",
            "Due to putting manufacturability first in the design process, our team produced the lowest cost valve in our class, coming in at $26 total. We were able to cut costs with a simple design, reducing material waste by matching raw material dimensions as much as possible, and retrofitting our design to the test mount available in the lab set up."
        ],
        "links": [
            {
                "url": "pdfs/machinedesign.pdf",
                "text": "Check out presentation!"
            }
        ],
        "tags": ["mechanical", "CAD"]
    },
    {
        "title": "Buchla 100 Revival",
        "subtitle": "Revitalization of vintage modular synthesizer modules, cabinet, and power supply upgrade",
        "image": "images/Art_of_sound.jpg",
        "imageAlt": "Synth picture",
        "info": [
            "Revitalizing Buchla Modular Synthesizer with team of 4 multidisciplinary students. Featured in Columbia Engineering Magazine Fall 2018 edition.",
            "This was a great opportunity to get out of my comfort zone and learn about advanced circuit design while combining engineering with my passion for music. I learned how to properly use lab equipment such as oscilliscopes to verify the behavior of different sounds modules.",
            "Throughout the revival process, we found many potentiometers to be shorting due to dust and rusting. The biggest challenge was sourcing a ramping power supply that would ramp up to the appropriate voltage. A level power supply supplied too much voltage instantaneously, causing a large spike in current, in turn, blowing out protective fuses.",
            "An interesting problem I found in the design involved lights in the sequencer connected in series with its corresponding circuit. So whenever a light was out, the corresponding step in the sequencer would not receive any voltage, thus rendering the step useless.",
            "I'd like to thank Pr. David Vallancourt for providing the opportunity and the rest of the team for tackling this project!"
        ],
        "links": [
            {
                "url": "https://magazine.engineering.columbia.edu/fall-2018/art-of-sound",
                "text": "Columbia Engineering Article"
            }
        ],
        "tags": ["electrical"]
    },
    {
        "title": "Manufacturing Oven",
        "subtitle": "Design and build of manufacturing oven for Polymer Exploration Group",
        "image": "images/Pascual_Oven.JPG",
        "imageAlt": "Oven controller image",
        "info": [
            "During my internship at Polymer Exploration Group (PEG), I was tasked with increasing the manufacturing capabilities of the polymer product. I created a roll-to-roll manufacuring oven that allowed PEG to increase manufacturing output by 1200%.",
            "The materials used were common HVAC equipment such as ducting and insulation because of their relative low cost, ease of construction, and ability to hold heat.",
            "To maintain heat within the oven, I found heating tape and thermocouples and controllers in our warehouse to transfer heat into the space of the oven and create a feedback loop through the controller which would control the amount of heat transmitted by the tape to maintain a setpoint temperature.",
            "A challenge I ran into was evenly distributing the temperature throughout the space as heat tended to build up at the ends of the oven. To solve this, I added a relief duct with a fan to allow for air circulation while still containing heat in the space so energy would not be wasted by venting out excess heat.",
            "I'd like to thank Dr. Wei Zhang for providing me this great learning opportunity at PEG!"
        ],
        "links": [
            {
                "url": "pdfs/PascualManufacturingOven.pdf",
                "text": "Check out pictures!"
            }
        ],
        "tags": ["mechanical"]
    }
];


/*
Template:
    {
        "title": "",
        "subtitle": "",
        "image": "",
        "imageAlt": "",
        "info": [],
        "links": [
            {
                "url": "",
                "text": ""
            }
        ],
        "tags": []
    }
*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
            }
            
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

const cardHover = () => {
    const cards = document.querySelectorAll('.card-container div.card');

    

    cards.forEach((card, index) => {
        console.log(typeof card)
        const hover = card.querySelector('.card-hover-text');

        card.addEventListener('mouseenter', () => {
            console.log(`hover: ${index}`);
            card.style.zIndex = "10"
            hover.style.display = "block";
        })
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = "";
            hover.style.display = "none";
        })
    })
}

const insertCards = () => {

    const cardContainer = document.querySelector('div.card-container');
    console.log(cardContainer);
    
    cardInfo.forEach((card) => {
        var node = document.createElement("DIV"); // create div
        node.classList.add('card');              // add card class

        // create img element
        var img = document.createElement("img"); 
        img.src = card.image;
        img.alt = card.imageAlt;

        // mainly for reducing height of valve gif
        if (card.imageStyle) {
            img.style.height = '20rem';
        }
        node.appendChild(img);

        // create title element
        var title = document.createElement("h4"); 
        var textnode = document.createTextNode(card.title);         // Create a text node
        title.appendChild(textnode);                            // add text to title node
        node.appendChild(title);

        // create subtitle element
        var subtitle = document.createElement("p");
        textnode = document.createTextNode("- " + card.subtitle);
        subtitle.appendChild(textnode);
        node.appendChild(subtitle);
        console.log('my node: ', node);

        // create card-hover-text div
        var cardHoverText = document.createElement("div");
        cardHoverText.classList.add("card-hover-text");

        // create info nodes
        card.info.forEach(i => {
            var p = document.createElement('p');
            textnode = document.createTextNode("- " + i);
            p.appendChild(textnode);
            cardHoverText.appendChild(p);
        });

        // create card-links div
        var cardLinks = document.createElement('div');
        cardLinks.classList.add("card-links");

        // create link nodes
        card.links.forEach(link => {
            var a = document.createElement('a');
            a.href = link.url;
            a.rel = "noopener noreferrer";
            a.target = "_blank";

            textnode = document.createTextNode(link.text);
            a.appendChild(textnode);
            cardLinks.appendChild(a);
        })

        // add card-links to hover section
        cardHoverText.appendChild(cardLinks);

        // add the hover section to the node
        node.appendChild(cardHoverText);

        // add tags
        node.tags = card.tags;

        console.log(node.tags)

        cards.push(node);


        // add child to card Container
        // cardContainer.appendChild(node);

    })

    // set the current cards shown as all the card objects
    currentCards = cards;
    mountCards();
}

const cardFilter = (filter) => {

    console.log(filter);

    // set currentCards shown empty
    currentCards = [];

    if (filter === "all") {
        currentCards = cards;
    } else {
        cards.forEach(card => {
            if (card.tags.includes(filter)) {
                console.log(card);
                currentCards.push(card);
            }
        })
    }

    mountCards();
}

// removes all current cards and adds new cards
const mountCards = () => {
    const cardContainer = document.querySelector('div.card-container');
    document.querySelectorAll('div.card').forEach(i => i.remove());
    currentCards.forEach(i => cardContainer.appendChild(i));
}

insertCards();
navSlide();
cardHover();


console.log('ready');