// WORKS ARE FORMATTED IN MARKDOWN - ENSURE REACT MARKDOWN IS IMPORTED INTO COMPONENT

// `**Bold Text**  
//     _Italic Text_  

//     \n\n\This is a paragraph.  

//     - List item one  
//     - List item two  

//     [Visit Website](https://example.com)`

//25/11/25 - BODGE but I can't work out how to code otherwise. When new works are added, and you want to add them to the top of the list, data in each object has to be manually changed ie. id:1 and reference 1.1 have to become 2 and 2.2, to make room for a new object with an id of 1 at the top.

const worksData = [
    {id: "1", 
        reference: "1.1", 
        title: "Provincial Pride [work in progress]", 
        urlSlug: "provincial-pride", 
        description: `"_WORK IN PROGRESS_... foregrounding queer, working-class experiences in post-industrial Britain - new insights into the social and cultural production of visibility, belonging, and regional identity."`, 
        info: "UK, ongoing locations",
        links:["https://www.tomglencross.com/works/provincial-pride"],
        images: [
            {src:"/images/provincial-pride/portrait1.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
            {src:"/images/provincial-pride/portrait2.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
           {src:"/images/provincial-pride/portrait3.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
           {src:"/images/provincial-pride/portrait4.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
           {src:"/images/provincial-pride/portrait5.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
            {src:"/images/provincial-pride/portrait6.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
            {src:"/images/provincial-pride/portrait7.webp",
            alt:"Portrait of Scunthorpe Pride attendee"
            },
        ],
        displayType: "imagegrid",
        body: `"_Provincial Pride_ investigates the intersection of queer identity, working-class culture, and regional space through documentary photography, oral histories, and critical reflection. Building on a documentation of Pride in my hometown Scunthorpe — a small post-industrial steel town in northern England — the project explores how queer visibility is performed, negotiated, and experienced provincially, outside metropolitan centres.`},
    {id: "2", 
        reference: "1.2", 
        title: "The Old Stones", 
        urlSlug: "the-old-stones", 
        description: "THE OLD STONES is an ongoing photographic documentary of Neolithic folk art and rock carvings, amongst the oldest artistic representations in Britain.", 
        info: "LORE, Sunnybank Mills, Leeds (UK, October-December 2024)",
        links:["https://www.sunnybankmills.co.uk/lore/tom-glencross/"],
        images: [
            {src:"/images/the-old-stones/landscape-stone-small.webp",
            alt:"Neolthic stone carving showing cup and ring motif"
            },
            // {src:"/images/the-old-stones/cup-and-ring-small.webp", alt:"Neolthic stone carving showing cup and ring motif"    
            // },
            {src:"/images/the-old-stones/gallery-1-small.webp",
            alt:"Interior of Sunnybank Mills with rock carving photographs"
            },
            {src:"/images/the-old-stones/portrait-stone-small.webp",
            alt:"Neolthic stone carving showing cup and ring motif"
            },
            {src:"/images/the-old-stones/square-logo-2.webp",
            alt:"LORE exhibition logo"
            },
            {src:"/images/the-old-stones/square-logo-1.webp",
            alt:"LORE exhibition logo with Twelve Apostles image"
            },
            {src:"/images/the-old-stones/twelve-apostles-small.webp",
            alt:"Twelve Apostles stone circle"
            }
        ],
        displayType: "imagegrid",
        body: `"The significance of _THE OLD STONES_ is deeply communal, sensual, and unknowable. The rock carvings are pregnant with guesswork and invocations of thousands of years of living people, and the engraved marks are immortal imprints of their hands, their touch.\n\n\Showing non-figurative abstract lines, organic circles, and their distinctive cup-and-ring marks, they were carved by people who saw little distinction between human-made and natural-made. The unadorned stones themselves may have held supernatural significance, deposited by glaciers millennia before even the hunter-gatherers, appearing as if from nowhere on the high crest of a miles-wide trough shaped valley – what power carried them up here to these vistas, and for what purpose?\n\n\Tom Glencross’ medium format photographs, enlarged to dream-like proportions, continue to ask these questions and to celebrate these original records, the primary utterances and expressions of the earliest people, their society, their thoughts, their feelings."`},
    {id: "3", 
        reference: "1.3", 
        title: "Indebtedness", 
        urlSlug: "indebtedness", 
        description: "Ephemeral objects accumulate alongside black-and-white photographs. The fading glory of the steel town where Stoney and Glencross grew up, the working class’s disillusionment and an ambitious yet anonymous conformity draw a moved silence. - Anna Barbieri, Critics Pick, Vienna Art Week", 
        info: "Miriam Stoney Indebtedness: Die Haftung der Geschenknehmenden Exhibition, March 26 – May 15, 2021",
        links: [
        "https://www.kevinspace.org/program/miriam-stoney",
        "https://www.viennaartweek.at/en/eating-your-cake-and-baking-it-anew/"
        ],
        images:[
            {src:"/images/indebtedness/indebtedness-1.webp",
            alt:"Residential houses in Scunthorpe"
            },
            {src:"/images/indebtedness/indebtedness-2.webp", 
            alt:"Residential houses in Scunthorpe"    
            },
            {src:"/images/indebtedness/indebtedness-3.webp",
            alt:"Residential houses in Scunthorpe"
            },
            {src:"/images/indebtedness/indebtedness-4.webp",
            alt:"Residential houses in Scunthorpe"
            },
        ],
        displayType: "imagegrid",
        body: `\n\n\"Departing from Scunthorpe Correspondences, a dialogue between Stoney and Tom Glencross, a UK-based writer and friend, that was conceived and published in the given framework, this exhibition is set alongside the struggles of the working-class in Scunthorpe, where both authors grew up. Once a symbol for prosperity and wealth, the town in northern England now faces widespread precarity and disenchantment due to the decline of the steel industry and deregulating, globalizing processes. 
        \n\n\This conversation interrelates Stoney’s family’s trajectory with larger colonial histories of the UK and the Partition of Pakistan and India in 1947. Details of the town of Scunthorpe are visualized in the exhibition through a selection of Glencross’ black-and-white photographs (Sensual objects, real qualities), reminiscent of the social realism of New Objectivity, such as Bernd and Hilla Becher’s portrayal of decommissioned industrial buildings and workers’ homes prior to their vanishing."
        \n\n\ _-excerpt taken from Kevin Space Gallery, Vienna, link below:_ `},
    {id: "4", 
        reference: "1.4", 
        title: "Otherwise Humane, Kyiv Biennial", 
        urlSlug: "kyiv-biennial", 
        description: `"For the Kyiv Biennial 2023, Miriam Stoney invites writer, photographer and childhood friend Tom Glencross to join her for a reading inside the installation The Most Humane." - _Kyiv Biennial Program_`, 
        info: "Augarten Contemporary, Scherzergasse 1A. Vienna, December 13 2023",
        links:[`https://2023.kyivbiennial.org/en/program/reading-miriam-stoney-and-tom-glencross-otherwise-humane`, `https://at.tranzit.org/en/news/0/2023-12-13/miriam-stoney-and-tom-glencross-otherwise-humane`],
        images: [
            {src:"/images/biennial/biennial-1.webp",
            alt:"Tom Glencross beside Miriam Stoney's sculpture 'The Most Humane"
            }],
        displayType: "imagegrid",
        body: `"Drawing on themes inherent to this work, including the politics of witnessing and obfuscation, as well as the uses of ethical standards in encounters of radical alterity, Glencross and Stoney have written a new text that reflects on experiences of violence in everyday life and their responses to them – from the immediate, bodily reaction to the more distanced account in and through writing." - _Kyiv Biennial Program_ & _tranzit.at_`},
    {id: "5", 
        reference: "1.5", 
        title: "Etc", 
        urlSlug: "etc", 
        description: "Archived work and ongoing projects - follow the links below for enquiries and more.", 
        info:"Archive, ongoing projects, gallery, portfolio etc...",
        links:[],
        images:[
            {src:"/images/etc/hawley-square-7am.webp",
            alt:"Hawley Square, 7am, (2020)"
            },
            {src:"/images/etc/applecross.webp",
            alt:"Applecross, (2020)"
            },
            {src:"/images/etc/barbican.webp",
            alt:"Staircase, London Wall, (2018)"
            },
            {src:"/images/etc/cove-bay.webp",
            alt:"Cove Bay (2020)"
            },
            {src:"/images/etc/drew-portrait.webp",
            alt:"Drew, (2018)"
            },
            {src:"/images/etc/northumberland-residential.webp",
            alt:"Northumberland residential, (2022)"
            },
            {src:"/images/etc/office-classical.webp",
            alt:"Office Classical, (2019)"
            },
            {src:"/images/etc/rob-and-gary.webp",
            alt:"Rob and Gary, Shepherds Bush (2018)"
            },
            {src:"/images/etc/sauna.webp",
            alt:"Sauna (2018)"
            },
            {src:"/images/etc/stone-circle-1.webp",
            alt:"Moel Ty Uchaf, (2021)"
            },
            {src:"/images/etc/street-couple.webp",
            alt:"Street portrait, (2018)"
            },
            {src:"/images/etc/twins.webp",
            alt:"Two trees, Wycoller, (2018)"
            },
            {src:"/images/etc/tynemouth.webp",
            alt:"Tynemouth, (2020)"
            },
            {src:"/images/etc/wycoller.webp",
            alt:"Wycoller, (2018)"
            },
        ],
        displayType:"imagegallery",
        body: ""},
]

export default worksData