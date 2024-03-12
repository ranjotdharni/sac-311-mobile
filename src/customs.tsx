//                              //
//             Imports          //
//                              //

import { StyleSheet } from 'react-native'


//                              //
//             Variables        //
//                              //

export const salesforceDevelopmentSignature: string = '311MigrationDev' // IF YOU CHANGE THIS, CHANGE 'ParamType' BELOW AS WELL!!!!!!!!!!!!!!!!!!!


//                              //
//      Static Types Section    //
//                              //

export interface responseType {
    attributes: {
        ReferenceNumber : string, //
        CategoryLevel1 : string, //
        CategoryLevel2 : string, //
        CategoryName : string, //
        CouncilDistrictNumber : string, //
        DateCreated : number | Date, 
        DateUpdated : number | Date, 
        DateClosed : number | null | Date, 
        CrossStreet : string, 
        ZIP : string, 
        SFTicketID : string, 
        Address : string, 
        Data_Source : string, 
        PublicStatus : string, 
        Neighborhood : string, 
        SourceLevel1 : string
    },
    geometry: {
        x: number, //longitude
        y: number  //latitude
    }
}

export interface ParamType {
    Subject: '311MigrationDev',
    Service_Type__c: string, // CategoryLevel1
    Sub_Service_Type__c: string, // CategoryLevel2
    Council_District__c: string, // CouncilDistrictNumber
    GIS_Street_Address__c: string, // CrossStreet
    GIS_Zip_Code__c: string, // ZIP
    Address__c: string, // Address
    GIS_System_Info__c: string, // "<Data_Source>  <SourceLevel1>"
    GIS_Neighborhood_Name__c: string, // Neighborhood
    description: string,
    Address_Geolocation__Latitude__s: string,
    Address_Geolocation__Longitude__s: string
}

export interface ParamResponseType {
    Address_Geolocation__Latitude__s: number,
    Address_Geolocation__Longitude__s: number,
    Address__c: string,
    CaseNumber: string,
    ClosedDate: string | null,
    Council_District__c: string,
    CreatedDate: string,
    Description: string,
    GIS_Neighborhood_Name__c: string,
    GIS_Street_Address__c: string,
    GIS_System_Info__c: string,
    GIS_Zip_Code__c: string,
    Id: string,
    LastModifiedDate: string,
    Service_Type__c: string,
    Status: string,
    Sub_Service_Type__c: string,
    attributes: Array<Object>
}


//                              //
//      Dummy Data Section      //
//                              //

const symbolReference = [
    {category: 'Animal Control', url: '9750d7d29ebe0f642bb414e7bb60a4d4'},
    {category: 'Building and Planning', url: '6f30eb2bf6323ab0383e57efab6c3dc1'},
    {category: 'Code Enforcement', url: 'e3dea662e30e1a880f31107ed2743d65'},
    {category: 'Drains', url: 'eedca6fac77ce62660fb33ee2b1e26a5'},
    {category: 'Facilities', url: '6fa0605b4d17e4fe7323cbbd0a40f3d2'},
    {category: 'Non-City', url: 'dbc53d72aa7fd12b0e35b259d8d05bc3'},
    {category: 'Homeless Camp', url: 'f0b03999436715744d4f42082d55837d'},
    {category: 'Parking', url: '3628d2b19fb65fa59c7760ac37ff392a'},
    {category: 'Parks', url: '88af0c6e7fd1f8f47e1283175cee8852'},
    {category: 'Sewer', url: '293d2daab0bc638de963005561a98a58'},
    {category: 'Solid Waste', url: '768a6272c424eb7c57837e0e5c4d0813'},
    {category: 'Streets', url: '86b083a8af0adc7acfc753f0d052689e'},
    {category: 'Urban Forestry', url: '2aee2d289cca97d5dc7c8c380b325ed8'},
    {category: 'Utility Billing', url: '77150615e9ef53a65a6cae6612e17c2d'},
    {category: 'Water', url: '334ddb09d796886d797edc23f896a2c2'},
    {category: 'Email Review', url: '48c427e81f51f55c6dfe8cd916106429'},
    {category: 'Shared Rideables', url: 'bc4c127d82817d628a6015ccdf073e63'},
    {category: 'Escalation', url: 'f3a7dd9487d9ca03b00ce5f015b8061c'},
    {category: 'Other', url: 'a7427c700f875c2e789f93802fc4d1fd'},
]

export const requestTypes = [
    {
        id: "a0Om0000003dz9rEAA",
        type: 'Animal Care',
        subTypes: [
            {
                id: "a0Om0000003dz9wEAA",
                subType: 'Contact Front Street Shelter',
                description: 'Questions about adoptions, spay/neuter resources, found animals, licensing and barking.'
            },
            {
                id: "a0Om0000003dzA0EAI",
                subType: 'Dead Animal',
                description: 'Report a dead animal in the public right of way.'
            },
            {
                id: "a0Om0000003dzA5EAI",
                subType: 'General: Animal Control',
                description: 'General Animal Control Questions'
            },
            {
                id: "a0Om0000003dzA1EAI",
                subType: 'Pet Complaint or Concerns',
                description: 'Report concerns with an owned animal.'
            },
            {
                id: "a0Om0000003dzA3EAI",
                subType: 'Stray or Loose Animal',
                description: 'Report an injured, sick, or aggressive stray animal.'
            },
        ]
    },
    {
        id: "a0Om0000003eSnjEAE",
        type: 'Building and Planning',
        subTypes: [
            {
                id: "a0Om0000003eSnlEAE",
                subType: 'General: Building and Planning',
                description: 'Questions or concerns regarding building, planning, or zoning.'
            },
        ]
    },
    {
        id: "a0Om0000005austEAA",
        type: 'Business Resources',
        subTypes: [
            {
                id: "a0Om0000005eha5EAA",
                subType: 'Access to Capital',
                description: 'Connecting businesses to lending partners and grant opportunities.',
            },
            {
                id: "a0Om0000005ehaBEAQ",
                subType: 'Business Assistance/Professional Services',
                description: 'Business technical assistance including, but not limited to: accounting, human resources, marketing, operations, site selection, strategic planning, succession planning, e-commerce, legal structure, etc.',
            },
            {
                id: "a0ODh000005jJR2MAM",
                subType: 'Economic Data',
                description: 'Assistance obtaining economic data including geographic and commercial real estate information through a variety of data sources such as ESRI and CoStar.',
            },
            {
                id: "a0ODh000005jJQxMAM",
                subType: 'Environmental Brownfields Assistance',
                description: 'Financial and technical assistance for brownfields assessment and remediation.',
            },
            {
                id: "a0Om0000005ehaCEAQ",
                subType: 'Financial Empowerment',
                description: 'Free one-on-one financial navigation and coaching.',
            },
            {
                id: "a0Om0000005authEAA",
                subType: 'General: Business Resources',
                description: 'For general business assistance and resource service requests.',
            },
            {
                id: "a0ODh000005jJQsMAM",
                subType: 'Navigating City of Sacramento Permits and Regulatory Environment',
                description: 'Assistance with permits (entertainment, business operations tax certificates, planning and building assistance, etc.), new or existing rules and regulations, etc.',
            },
            {
                id: "a0Om0000005YFcWEAW",
                subType: 'Workforce Development & Training',
                description: 'Resources for employers, and job and workforce readiness.',
            },
        ]
    },
    {
        id: "a0Om0000003eSnEEAU",
        type: 'Code Enforcement',
        subTypes: [
            {
                id: "a0Om0000003eSnMEAU",
                subType: 'Auto Repair',
                description: 'Report a home-based auto repair business or major auto repair taking place on the street.',
            },
            {
                id: "a0Om0000003eSnNEAU",
                subType: 'Basketball Hoop in Public Right of Way',
                description: 'Report a basketball hoop on the street or sidewalk.',
            },
            {
                id: "a0Om0000003eSnJEAU",
                subType: 'Business Compliance Entertainment',
                description: 'Report concerns with taxi\'s, entertainment venues like pubs or clubs.',
            },
            {
                id: "a0Om0000005DXeXEAW",
                subType: 'Business Compliance Shopping Cart',
                description: 'Report a stray shopping cart.',
            },
            {
                id: "a0Om00000062dGjEAI",
                subType: 'Business Compliance Short Term Rental',
                description: 'Report a concern with a short term rental.',
            },
            {
                id: "a0Om0000005DXecEAG",
                subType: 'Business Compliance Taxi Cab',
                description: 'Report a concern with a taxi cab.',
            },
            {
                id: "a0Om0000005DXehEAG",
                subType: 'Business Compliance Weeds',
                description: 'Report a lot with overgrown weeds or grass.',
            },
            {
                id: "a0Om0000003eSngEAE",
                subType: 'General: Code Enforcement',
                description: 'Questions regarding code or housing enforcement policies.',
            },
            {
                id: "a0Om0000003eSnWEAU",
                subType: 'Graffiti',
                description: 'Report graffiti on public and/or private property.',
            },
            {
                id: "a0Om0000003eSnaEAE",
                subType: 'Housing Complaint',
                description: 'Report structural or electrical concerns with a property.',
            },
            {
                id: "a0Om0000003eSnOEAU",
                subType: 'Junk & Debris',
                description: 'Report junk, debris, or trash on private property, in a front, rear or side yard or on a vacant lot. To report Illegal Dumping on a public street, please go to Solid Waste – Illegal Dumping. For dumping and trash related to encampments, use Homeless Camp – Trash.',
            },
            {
                id: "a0Om0000003eSnPEAU",
                subType: 'Landscaping',
                description: 'Report concerns with overgrown landscaping encroaching on the public right of way.',
            },
            {
                id: "a0Om0000003eSnREAU",
                subType: 'Mechanical Noise Complaint',
                description: 'Report mechanical noise like an air conditioner or leaf blower.',
            },
            {
                id: "a0Om0000003eSnQEAU",
                subType: 'Occupied Trailer On Private Property',
                description: 'Report an occupied trailer or RV parked on private property.',
            },
            {
                id: "a0Om0000003eSnVEAU",
                subType: 'Pest',
                description: 'Report roaches, mice, or rats in a rented property.',
            },
            {
                id: "a0Om0000003eSnUEAU",
                subType: 'Fences',
                description: 'Report a downed or damaged fence or an unfenced pool.',
            },
            {
                id: "a0Om0000003eSnSEAU",
                subType: 'Signs, Banners, or Fliers',
                description: 'Report illegal signage in the public right of way.',
            },
            {
                id: "a0Om0000004sEToEAM",
                subType: 'Stagnant Water',
                description: 'Report an unkempt pool, or other stagnant water causing mosquitos.',
            },
            {
                id: "a0Om0000003eSnKEAU",
                subType: 'Vehicle on Private Property',
                description: 'Report a non-operational vehicle on private property, like a driveway.',
            },
            {
                id: "a0Om0000003eSnXEAU",
                subType: 'Vehicle Abandoned on Street',
                description: 'Report a vehicle parked on a City street in excess of 72 hours.',
            },
            {
                id: "a0Om0000003eSnZEAU",
                subType: 'Work Without a Permit',
                description: 'Report construction work believed to be taking place without a permit.',
            },
            {
                id: "a0Om0000003eSnTEAU",
                subType: 'Yard or Garage Sale Complaint',
                description: 'Report a property holding excessive yard or garage sales.',
            },
            {
                id: "a0Om0000003eSneEAE",
                subType: 'Zoning: Detatched Accessory Structure',
                description: 'Report a detached structure like a carport or shed in the front or rear yard.',
            },
            {
                id: "a0Om0000003eSndEAE",
                subType: 'Zoning: Fencing',
                description: 'Report a downed or damaged fence or an unfenced pool.',
            },
            {
                id: "a0Om0000003eSnfEAE",
                subType: 'Zoning: Home Occupation',
                description: 'Report an unlicensed home-based business.',
            },
            {
                id: "a0Om0000003eSncEAE",
                subType: 'Zoning: Improper Land Use or Overpavement',
                description: 'Report an unauthorized recycling center or overly paved front yard.',
            },
        ]
    },
    {
        id: "a0Om0000003e1eCEAQ",
        type: 'Drains',
        subTypes: [
            {
                id: "a0Om0000003e1enEAA",
                subType: 'General: Drains',
                description: 'Non-urgent general drains questions. Please call for situations that require immediate attention.',
            }
        ]
    },
    {
        id: "a0Om0000003eSnmEAE",
        type: 'Homeless Camp',
        subTypes: [
            {
                id: "a0Om0000003eSnnEAE",
                subType: 'Homeless Concern',
                description: 'Report a camp or homeless concern on public property, excluding a park or bike trail.',
            },
            {
                id: "a0Om0000005oGQLEA2",
                subType: 'Homeless Camp-Trash',
                description: 'To report trash from a homeless camp.',
            },
            {
                id: "a0Om0000005qSdnEAE",
                subType: 'Homeless Encampment 500ft from School',
                description: 'Homeless Encampment Blocking Sidewalk',
            },
            {
                id: "a0Om0000004sETpEAM",
                subType: 'Homeless Camp at Park or Bike Trail',
                description: 'Report a homeless camp at a park or bike trail.',
            },
        ]
    },
    {
        id: "a0Om0000003eSnoEAE",
        type: 'Parking',
        subTypes: [
            {
                id: "a0Om0000003eSnpEAE",
                subType: 'Broken Meter or Payment Machine',
                description: 'Report a broken or malfunctioning meter or payment machine.',
            },
            {
                id: "a0Om0000003eSnqEAE",
                subType: 'Customer Service: Parking',
                description: "Questions regarding monthly parking, IOU's, or requests to contact Parking Staff.",
            },
            {
                id: "a0Om0000003eSnrEAE",
                subType: 'Enforcement Request',
                description: 'Report parking violations (blocking hydrant, parked in "no parking," etc.)',
            },
            {
                id: "a0Om0000003eSnsEAE",
                subType: 'General: Parking',
                description: 'General questions regarding parking policies or procedures.',
            },
        ]
    },
    {
        id: "a0Om0000003eI2lEAE",
        type: 'Parks',
        subTypes: [
            {
                id: "a0Om0000003eI2nEAE",
                subType: 'Broken or Damaged Park Fence or Gate',
                description: 'Report concerns with a fence or gate at a City Park.',
            },
            {
                id: "a0Om0000003eI2mEAE",
                subType: 'General: Parks',
                description: 'Questions about park policies or procedures.',
            },
            {
                id: "a0Om0000003eI2oEAE",
                subType: 'Grounds Cleaning',
                description: 'Request grounds cleaning or removal of trash at a City Park.',
            },
            {
                id: "a0Om0000003eI2pEAE",
                subType: 'Irrigation',
                description: 'Report concerns with sprinkler or irrigation systems at a City Park.',
            },
            {
                id: "a0Om0000003eI2rEAE",
                subType: 'Mowing or Trimming Request',
                description: 'Request mowing or trimming of trees or landscapes at a City Park.',
            },
            {
                id: "a0Om0000003eI2sEAE",
                subType: 'Other Park Concern',
                description: 'Report a non-listed concern to our Parks Department.',
            },
            {
                id: "a0Om0000003eI2tEAE",
                subType: 'Park Playground',
                description: 'Report concerns with playground or court equipment.',
            },
            {
                id: "a0Om0000003eI2vEAE",
                subType: 'Request a Park Ranger',
                description: 'Request a Park Ranger for safety concerns.',
            },
            {
                id: "a0Om0000003eI2uEAE",
                subType: 'Restrooms',
                description: 'Request clean up or maintenance for a park restroom.',
            },
        ]
    },
    {
        id: "a0Om0000003e80xEAA",
        type: 'Sewer',
        subTypes: [
            {
                id: "a0Om0000003e816EAA",
                subType: 'General: Sewer',
                description: 'General sewer questions.'
            },
        ]
    },
    {
        id: "a0Om0000003eI2iEAE",
        type: 'Shared Rideables',
        subTypes: [
            {
                id: "a0Om0000004C63xEAC",
                subType: 'Bird',
                description: 'Report an illegally parked BLACK BIRD bike or scooter.',
            },
            {
                id: "a0Om0000005xzDSEAY",
                subType: 'Helbiz',
                description: 'Report an illegally parked BLUE and BLACK HELBIZ scooter.',
            },
            {
                id: "a0Om0000003eI2kEAE",
                subType: 'Lime',
                description: 'Report an illegally parked GREEN LIME bike or scooter .',
            },
            {
                id: "a0Om0000005dycyEAA",
                subType: 'Razor',
                description: 'Report an illegally parked RED and BLACK RAZOR bike or scooter.',
            },
            {
                id: "a0ODh000005jqrBMAQ",
                subType: 'Superpedestrian',
                description: 'Report an illegally parked Superpedestrian scooter.',
            },
        ]
    },
    {
        id: "a0Om0000003dz9tEAA",
        type: 'Solid Waste',
        subTypes: [
            {
                id: "a0Om0000003dzA6EAI",
                subType: 'General: Solid Waste',
                description: 'Questions or concerns regarding Solid Waste policies or procedures. For assistance with a container issue, such as repair, replacement or missing cans please call 311.',
            },
            {
                id: "a0Om0000004knaiEAA",
                subType: 'Illegal Dumping',
                description: 'Report illegal dumping on a public street. For dumping and trash related to encampments, use Homeless Camp – Trash. For Junk and Debris on private property use Code Enforcement – Junk & Debris.',
            },
            {
                id: "a0Om0000003dzABEAY",
                subType: 'Missed Weekly Collection',
                description: 'Report a missed or partially serviced container.',
            },
            {
                id: "a0Om00000062fTKEAY",
                subType: 'Noise Complaint - RSW',
                description: 'General noise complaint.',
            },
            {
                id: "a0Om0000003dzA7EAI",
                subType: 'Recycle Guide or Dump Coupon Request',
                description: 'Request a replacement dump coupon or recycle guide.',
            },
            {
                id: "a0Om0000003dzA8EAI",
                subType: 'Schedule an Appointment Based Pick-Up',
                description: 'Request an appliance/ewaste, or motor oil appointment. Contact information is required to schedule any appointment based pick-up. Free household junk appointments have all been filled for this year. Scheduling will resume in February 2024.',
            },
        ]
    },
    {
        id: "a0Om0000003eI2TEAU",
        type: 'Streets',
        subTypes: [
            {
                id: "a0Om0000003eI2VEAU",
                subType: 'Bike Rack Issues',
                description: 'Report concerns with existing bike racks or request a new bike rack installation.',
            },
            {
                id: "a0Om0000003eI2WEAU",
                subType: 'Bikeway Issues',
                description: 'Report concerns with a bikeway, such as unsafe conditions like trash, or glass.',
            },
            {
                id: "a0Om0000003eI2XEAU",
                subType: 'Curb or Gutter',
                description: 'Report concerns regarding a curb or gutter such as unsafe conditions, or grading issues.',
            },
            {
                id: "a0Om0000003eI2UEAU",
                subType: 'General: Streets',
                description: 'General questions regarding policies and procedures about City Streets.',
            },
            {
                id: "a0Om0000003eI2aEAE",
                subType: 'Pothole',
                description: 'Report a pothole on a City street.',
            },
            {
                id: "a0Om0000003eI2eEAE",
                subType: 'Street Lighting',
                description: 'Report a malfunctioning lighting fixture, including street lamps.',
            },
            {
                id: "a0Om0000003eI2bEAE",
                subType: 'Sidewalk',
                description: 'Report a broken, damaged, or unsafe sidewalk.',
            },
            {
                id: "a0Om0000003eI2cEAE",
                subType: 'Signs and Markings',
                description: 'Report missing or damaged signs or repainting of street markings.',
            },
            {
                id: "a0Om0000003dzAFEAY",
                subType: 'Street Maintenance',
                description: 'Report items blocking a lane of traffic.',
            },
            {
                id: "a0Om0000003eI2fEAE",
                subType: 'Streetscapes',
                description: 'Report concerns with the landscaped section between the sidewalk & street, like overflowing sprinklers.',
            },
            {
                id: "a0Om0000003eI2hEAE",
                subType: 'Traffic Investigation',
                description: 'Request new speed bumps, signage, or street markings.',
            },
            {
                id: "a0Om0000003eI2gEAE",
                subType: 'Traffic Signals',
                description: 'Report a malfunctioning traffic signal.',
            },
        ]
    },
    {
        id: "a0Om0000003eAxdEAE",
        type: 'Urban Forestry',
        subTypes: [
            {
                id: "a0Om0000003eAxeEAE",
                subType: 'General: Urban Forestry',
                description: 'Questions regarding urban forestry policies or procedures.'
            },
            {
                id: "a0Om0000003eAxfEAE",
                subType: 'Tree Service Request',
                description: 'Request inspection or maintenance of a protected or City tree.'
            }
        ]
    },
    {
        id: "a0Om0000003eSnhEAE",
        type: 'Utility Billing',
        subTypes: [
            {
                id: "a0Om0000003eSniEAE",
                subType: 'General: Utility Billing',
                description: 'General utility billing questions.'
            }
        ]
    },
    {
        id: "a0Om0000003e81DEAQ",
        type: 'Water',
        subTypes: [
            {
                id: "a0Om0000003e81JEAQ",
                subType: 'General: Water',
                description: 'General water service questions.',
            },
            {
                id: "a0Om0000003e81SEAQ",
                subType: 'Water Conservation',
                description: 'Request information about virtual Water Wise House Calls, business and residential water conservation rebates or leak investigation if a leak letter was received.',
            },
            {
                id: "a0Om0000003e81REAQ",
                subType: 'Water Use Complaint',
                description: 'Report a water use concern.',
            },
        ]
    }
]

export const dummyDataHome = [
    {
        category: 'Dead Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Open'
    },
    {
        category: 'Parking Violation',
        type: 'Auto',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'Irrigation',
        type: 'Water',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'General Parking',
        type: 'Auto',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Closed'
    },
    {
        category: 'Stray or Loose Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Closed'
    },
]

export const dummyDataFAQ = [
    {
        tags: '',
        type: 'App Functionality',
        key: 1,
        question: 'How can I make requests on the map?',
        answer: 'Choose any address on the map, then click "Make A New Request" to make a new request.'
    },
    {
        tags: '',
        type: 'App Functionality',
        key: 2,
        question: 'How can I make a request in the app?',
        answer: 'You can make a request by clicking on the blue plus button on the center of the navigation bar.'
    },
    {
        tags: '',
        type: 'Services',
        key: 3,
        question: 'What services are offered by 311?',
        answer: '311 offers a large variety of services, all of which can be found on the Services page, which can be found under the Resources tab.'
    },
    {
        tags: '',
        type: 'Services',
        key: 4,
        question: 'How can I find more information about a particular service offered?',
        answer: 'You can find more information by clicking on one of the offered services on the Services page, which can be found under the Resources tab.'
    },
    {
        tags: '',
        type: 'General',
        key: 5,
        question: 'How long will it take for my request to be serviced?',
        answer: 'Request service times vary, but if your request has been submitted, we assure we are working on it. In case of an emergency, please instead call 911.'
    },
    {
        tags: '',
        type: 'General',
        key: 6,
        question: 'Who can I contact if I am having issues making requests?',
        answer: 'If you would like to talk directly to a city employee, please dial 311 to make a request over the phone.'
    },
]

export const newsFeedSites = [
    {Site: 'ABC10', url: 'https://www.abc10.com/feeds/syndication/rss/news'},
    {Site: 'Fox40', url: 'https://fox40.com/news/local-news/feed'},
    {Site: 'KCRA', url: 'https://www.kcra.com/topstories-rss'},
]

export const dummyDataNews = [
    {
        title: 'Modern Innovations in Forensic Technology Show Promising Results',
        uri: 'https://media.wired.co.uk/photos/606db6c4e46630a583ab3275/master/w_1600,c_limit/iStock_92896435_LARGE.jpg',
        url: 'https://www.wired.co.uk/article/crime-scene-technology',
        description: 'Sir Bernard Spilsbury was - by modern standards - an unlikely celebrity. As a forensic pathologist, he delved inside dead bodies to discover the truth behind some of the most notorious murders in the first half of the 20th century.',
    },
    {
        title: 'Tribute for Maine Mass Shooting Attracts Thousands',
        uri: 'https://i0.wp.com/sacramentocityexpress.com/wp-content/uploads/2021/08/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg?fit=5407%2C3605&ssl=1',
        url: 'https://fox40.com/news/national/ap-us-news/ap-more-than-1000-pay-tribute-to-maines-mass-shooting-victims-on-day-of-prayer-reflection-and-hope/',
        description: 'LEWISTON, Maine (AP) — Authorities in Maine spent Monday continuing to piece together the events that led to the worst mass shooting in the state’s history — with the suspect’s record of interaction with police and warning signs involving mental illness and violent threats emerging as key threads.',
    },
    {
        title: 'Domestic Violence Awareness Month',
        uri: 'https://www.saccounty.gov/news/latest-news/SiteAssets/Domestic%20Violence%20Awareness%20Month.png',
        url: 'https://www.saccounty.gov/news/latest-news/Pages/Uniting-Against-Domestic-Violence.aspx',
        description: 'October is Domestic Violence Awareness Month. Sacramento County’s Department of Child, Family and Adult Services (DCFAS) partners with several organizations to help victims of domestic violence. This month, DCFAS is raising awareness about domestic violence and sharing information about the services available.',
    },
]

//                                      //
//       Custom Functions Section       //
//                                      //

export function inclusiveRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateSudoId(digits: number)
{
    return Math.floor(Math.random() * Math.pow(10, Math.max(1, digits)))
}

//=====================================================================================================================================================================================//
//The below function generates a date string in a given format from a given Date object, the format string paramter is case insensitive                                                //
//arg1 can be any string but must include the following 3 substrings IN ANY ORDER ANYWHERE IN THE STRING (CASE INSENSITIVE): ('mm' OR 'mmm') AND ('dd' OR 'ddd') AND ('yy' OR 'yyyy')  //
//=====================================================================================================================================================================================//
//                                                                                                                                                                                     //
//FORMAT EXAMPLES: Using a Date object generated on 10/31/2023 (the date at the time of writing this [ Happy Halloween :) ])                                                           // 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//  Use         Format           Output                                                                                                                                                //
// Month    'mm' OR 'MM'     :     10                                                                                                                                                  //
// Month    'mmm' OR 'MMM'   :    Oct                                                                                                                                                  //
//  Day     'dd' OR 'DD'     :     31                                                                                                                                                  //
//  Day     'ddd' OR 'DDD'   :    Tue                                                                                                                                                  //
// Year     'yy' OR 'YY'     :     23                                                                                                                                                  //
// Year     'yyyy' OR 'YYYY' :   2023                                                                                                                                                  //
//                                                                                                                                                                                     //
//USAGE EXAMPLE: Using a Date object generated on 10/31/2023                                                                                                                           //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// dateToFormat('MMM dd, yYyY', new Date()) -> outputs string 'Oct 31, 2023'            !!!!!!!!!!!!!!!!EXAMPLE ON THIS LINE!!!!!!!!!!!!!!!!                                           //
//                                                                                                                                                                                     //
//=====================================================================================================================================================================================//
export function dateToFormat(arg1: string, arg2: Date): string
{
    let str = arg1.toLowerCase().slice()
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let mm = (str.includes('mmm') ? 'mmm' : 'mm')
    let dd = (str.includes('ddd') ? 'ddd' : 'dd')
    let yy = (str.includes('yyyy') ? 'yyyy' : 'yy')

    str = str.replace(mm, (mm === 'mm' ? (arg2.getMonth() + 1).toString().padStart(2, '0') : monthNames[arg2.getMonth()]))
    str = str.replace(dd, (dd === 'dd' ? (arg2.getDate()).toString().padStart(2, '0') : dayNames[arg2.getDay()]))
    str = str.replace(yy, (yy === 'yyyy' ? (arg2.getFullYear()).toString() : arg2.getFullYear().toString().slice(-2)))

    return str
}

//==============================================================//
//  Encodes query paramters according to arcGIS specifications  //
//==============================================================//

function encodeQueryParamter(query: string): string {
    let encodedString = encodeURIComponent(query)                   //basic URI encoding
    encodedString = encodedString.replace(/%20/g, '+')              //replace whitespaces with '+'
    encodedString = encodedString.replace(/'/g, '%' + (`'`).charCodeAt(0).toString(16))  //encode `'`, `(`, and `)` characters
    encodedString = encodedString.replace(/\(/g, '%' + ('(').charCodeAt(0).toString(16))
    encodedString = encodedString.replace(/\)/g, '%' + (')').charCodeAt(0).toString(16))
    return encodedString
}

//====================================================================//
//  Generates full request string to arcGIS endpoint, ready to fetch  //
//====================================================================//

export function generateEndpointUrl(whereClause: string | undefined, resultCount: number, paramters: Array<[string, string]>): string {
    // The endpoint's origin
    const endpointOrigin: string = 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/query?'

    // A where clause is necessary for every query so set default (I used OBJECTID to accomplish this because it should never be null)
    const defaultWhereClause: string = 'where=' + encodeQueryParamter('OBJECTID IS NOT NULL') + (whereClause !== undefined ? encodeQueryParamter(` AND ${whereClause}`) : '')

    // Set the required response fields, specify geometry required, specify spatial reference, specify json response format
    const defaultParameters: string = '&outFields=ReferenceNumber%2C+CategoryLevel1%2C+CategoryLevel2%2C+CategoryName%2C+CouncilDistrictNumber%2C+DateCreated%2C+DateUpdated%2C+DateClosed%2C+CrossStreet%2C+ZIP%2C+SFTicketID%2C+Address%2C+Data_Source%2C+PublicStatus%2C+Neighborhood%2C+SourceLevel1&returnGeometry=true&outSR=4326&inSR=4326&f=pjson'

    // initialize query string
    let queryString = endpointOrigin + defaultWhereClause

    // append any passed in parameters
    paramters.forEach((item) => {
        queryString += `&${item[0]}=${encodeQueryParamter(item[1])}`
    })

    queryString += `&resultRecordCount=${Math.max(1, resultCount)}` // append the required number of response results
    queryString += defaultParameters                                // append the default parameters

    return queryString
}

//==========================================================================================================//
//  Generate full request string to icon images endpoint based on CategoryLevel1 of object, ready to fetch  //
//  Also provides default url in case CategoryLevel1 is not matched to any existing value                   //
//==========================================================================================================//

export function generateSymbolUrl(categoryLevel1: string): string {
    const endpointOrigin: string = 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/images/'  // the image endpoint origin

    for (let i = 0; i < symbolReference.length; i++) {  // loop through symbol reference
        let subject = symbolReference[i]

        if (subject.category === categoryLevel1) {  // if category match...
            return endpointOrigin + subject.url     // return image endpoint origin with corresponding url appended
        }
    }

    return endpointOrigin + '361c2dfe548d1b53b9da23f9219a630d'  // no category match found? Return image endpoint origin with default url appended
}

//==========================================//
//  Get date from given number of days ago  //
//==========================================//

export function dateAtDaysAgo(daysAgo: number): Date {
    const dateNow: Date = new Date()
    dateNow.setDate(dateNow.getDate() - daysAgo)
    return dateNow
}

export function responseObjectToParameter(obj: responseType) {
    return {
        Subject: salesforceDevelopmentSignature,
        Service_Type__c: categoryLevelToType(obj.attributes.CategoryLevel1), // CategoryLevel1
        Sub_Service_Type__c: categoryLevelToType(obj.attributes.CategoryLevel2), // CategoryLevel2
        Council_District__c: obj.attributes.CouncilDistrictNumber, // CouncilDistrictNumber
        GIS_Street_Address__c: obj.attributes.CrossStreet, // CrossStreet
        GIS_Zip_Code__c: obj.attributes.ZIP, // ZIP
        Address__c: obj.attributes.Address, // Address
        GIS_System_Info__c: `${obj.attributes.Data_Source} ${obj.attributes.SourceLevel1}`, // "<Data_Source>  <SourceLevel1>"
        GIS_Neighborhood_Name__c: obj.attributes.Neighborhood, // Neighborhood
        Address_Geolocation__Latitude__s: obj.geometry.y,
        Address_Geolocation__Longitude__s: obj.geometry.x,
        description: '',
        returnRoute: ''
    }
}

export function ParameterResponseToResponseObject(paramResObj: ParamResponseType): responseType {
    return {
        attributes: {
            ReferenceNumber : paramResObj.CaseNumber, //
            CategoryLevel1 : typeToCategoryLevel(paramResObj.Service_Type__c), //
            CategoryLevel2 : typeToCategoryLevel(paramResObj.Sub_Service_Type__c), //
            CategoryName : `${typeToCategoryLevel(paramResObj.Service_Type__c)} ${typeToCategoryLevel(paramResObj.Sub_Service_Type__c)}`, //
            CouncilDistrictNumber : paramResObj.Council_District__c, //
            DateCreated : new Date(paramResObj.CreatedDate), 
            DateUpdated : new Date(paramResObj.LastModifiedDate), 
            DateClosed : (paramResObj.ClosedDate !== null ? new Date(paramResObj.ClosedDate) : null), 
            CrossStreet : paramResObj.GIS_Street_Address__c, 
            ZIP : paramResObj.GIS_Zip_Code__c, 
            SFTicketID : paramResObj.Id, 
            Address : paramResObj.Address__c, 
            Data_Source : paramResObj.GIS_System_Info__c.split(' ')[0], 
            PublicStatus : paramResObj.Status, 
            Neighborhood : paramResObj.GIS_Neighborhood_Name__c, 
            SourceLevel1 : paramResObj.GIS_System_Info__c.split(' ')[1]
        },
        geometry: {
            x: paramResObj.Address_Geolocation__Longitude__s, //longitude
            y: paramResObj.Address_Geolocation__Latitude__s //latitude
        }
    }
}

export function grabImmediateRoute(route: string): string {
    let result: string = ""

    if (route[route.length - 1] === '/') {
        return result
    }

    for (let i = route.length - 1; i > -1; i--) {
        if (route[i] === '/') {
        result = route.substring(i + 1)
        break;
        }
    }

    return result
}

export function categoryLevelToType(categoryLevel: string): string {
    for (let i = 0; i < requestTypes.length; i++) {
        if (requestTypes[i].type === categoryLevel) {
            return requestTypes[i].id
        }

        for (let j = 0; j < requestTypes[i].subTypes.length; j++) {
            if (requestTypes[i].subTypes[j].subType === categoryLevel) {
                return requestTypes[i].subTypes[j].id
            }
        }
    }

    return ''
}

export function typeToCategoryLevel(typeID: string) {
    for (let i = 0; i < requestTypes.length; i++) {
        if (requestTypes[i].id === typeID) {
            return requestTypes[i].type
        }

        for (let j = 0; j < requestTypes[i].subTypes.length; j++) {
            if (requestTypes[i].subTypes[j].id === typeID) {
                return requestTypes[i].subTypes[j].subType
            }
        }
    }

    return ''
}


//                                      //
//         Custom Styles Section        //
//                                      //

export const shadowUniversal = StyleSheet.create({ 
    default: {
        shadowColor: 'black', 
        shadowOffset: { 
            width: -2, 
            height: 4 
        }, 
        shadowOpacity: 0.33, 
        shadowRadius: 10,
        elevation: 5,
    },
    
    homeHeader: {
        shadowColor: 'black', 
        shadowOffset: { 
            width: 0,
            height: 4 
        }, 
        shadowOpacity: 0.33, 
        shadowRadius: 2,
        elevation: 5,
    }
})

//                                      //
//         Global Values Section        //
//                                      //

export const global = {
    baseBackground100: '#f5faff',
    baseBackground200: 'rgba(235, 235, 255, 0.45)',
    baseBackground300: 'rgba(255, 255, 255, 0.45)',

    baseWhite100: '#ffffff',

    baseBlue100: '#203d61',
    baseBlue200: 'rgba(32, 61, 97, 0.5)',

    baseGold100: '#fdaa1f',
    baseGold200: 'rgba(253, 170, 31, 0.5)',
    baseGold300: 'rgba(253, 170, 31, 0.33)',

    baseGrey100: '#6F6F6F',
    baseGrey200: 'rgba(112, 112, 112, 0.7)'
}


//                                      //
//         Global Font Section          //
//                                      //
// this value is designed to be read by every entity that displays text
// the user may change the font of the entire app, by making a selection in the settings page

let chosenFont: string = 'jbm';

export const globalFont= {
    chosenFont : chosenFont
}

export function fontSetter(newFont:string){
    globalFont.chosenFont = newFont;
}

export function fontGetter(){
    return globalFont.chosenFont;
}

//                                      //
//         Global Color Theme Section   //
//                                      //
// this value is designed to be read by every entity that displays color
// the user may change the color theme of the entire app, by making a selection in the settings page

let chosenColorTheme: any = 'lightMode';

export const globalColorTheme= {
    chosenColorTheme : chosenColorTheme,
    backgroundColor : '#ffffff',
    backgroundColor2 : '#ffffff',
    color : '#000000',
    theme : 'lightTheme',
    fontSize: 19,
    fontFamily: globalFont.chosenFont,
    paddingLeft: '5%',
    fontWeight: '500'
}

export function colorThemeSetter(newTheme:string){
    globalColorTheme.chosenColorTheme = newTheme;
    if (newTheme == 'lightTheme'){
        globalColorTheme.theme = 'lightTheme';
        globalColorTheme.backgroundColor = '#ffffff';   //background = white
        globalColorTheme.backgroundColor2 = '#ffffff';   //alternate background = white
        globalColorTheme.color = '#000000';             //textcolor = black
    }
    
    else if (newTheme == 'darkTheme'){
        globalColorTheme.theme = 'darkTheme';
        globalColorTheme.backgroundColor = '#3B3B3B';   //background = dark-gray
        globalColorTheme.backgroundColor2 = '#878787';   //alternate background = light-gray
        globalColorTheme.color = '#E7EAED';             //textcolor = off-white
        
    }

}








export function colorThemeGetter(property:string){
    if (property == 'color'){
        return globalColorTheme.color;
    }
    if (property == 'theme'){
        return globalColorTheme.theme;
    }
    if (property == 'backgroundColor'){
        return globalColorTheme.backgroundColor;
    }
    

}