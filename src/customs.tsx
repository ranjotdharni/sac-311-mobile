//                              //
//             Imports          //
//                              //

import { StyleSheet } from 'react-native'
import { Region } from 'react-native-maps'

//                              //
//             Variables        //
//                              //

export const salesforceDevelopmentSignature: string = '311MigrationDev' // IF YOU CHANGE THIS, CHANGE 'ParamType' BELOW AS WELL!!!!!!!!!!!!!!!!!!!

export const salesforceSandboxUrl: string = 'https://saccity--qa.sandbox.my.salesforce.com/services/data/v60.0'

export const DEFAULT_REGION: Region = {
    latitude: 38.574713,
    longitude: -121.491489,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0121,
}

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

//for homepage news carousel RSS feed integration
export interface Article {
    id: string;
    title: string;
    imgUrl: string;
    link: string;
    desc: string;
}


//                              //
//      Dummy Data Section      //
//                              //

export const symbolReference = [
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
        type: 'Animal Control',
        subTypes: [
            {
                id: "a0Om0000003dz9wEAA",
                subType: 'Contact Front Street Shelter',
                description: 'Questions about adoptions, spay/neuter resources, found animals, licensing and barking.',
                desc2: 'Front Street staff are available to help answer questions about adoptions, spay and neuter resources, lost and found pets, licensing, and nuisance barking. As barking complaints may not be made anonymously, please provide us with your name and address.'
            },
            {
                id: "a0Om0000003dzA0EAI",
                subType: 'Dead Animal',
                description: 'Report a dead animal in the public right of way.',
                desc2: 'An Animal Control Officer will respond to requests to remove a dead animal from the public right-of-way, like a sidewalk or street. Deceased animals weighing 10 pounds or less may be placed in a plastic bag and disposed of in a trash receptacle.'
            },
            {
                id: "a0Om0000003dzA5EAI",
                subType: 'General: Animal Control',
                description: 'General Animal Control Questions',
                desc2: 'If you’re inquiring about the status or identification of an animal, please visit us in person. For all other questions, please describe your concern in detail and provide your contact information so that we may assist you.'
            },
            {
                id: "a0Om0000003dzA1EAI",
                subType: 'Pet Complaint or Concerns',
                description: 'Report concerns with an owned animal.',
                desc2: "Suspected animal neglect should be reported to Animal Control so that an Officer can check on the animal's condition. When submitting this request, please provide the address where the animal lives and a detailed description of the animal and concern."
            },
            {
                id: "a0Om0000003dzA3EAI",
                subType: 'Stray or Loose Animal',
                description: 'Report an injured, sick, or aggressive stray animal.',
                desc2: 'If you see a loose dog in a busy area, it’s best not to try to catch them, as they may run into traffic. If you’ve already captured the dog, you can bring the dog to the shelter between 12pm-5pm 7 days a week. Appointments are highly encouraged.'
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
                description: 'Questions or concerns regarding building, planning, or zoning.',
                desc2: 'Limited in-person appointments for building and planning are available Tuesdays and Wednesdays from 9:00 a.m. to 3:30 p.m. Assistance is also available by email. Please include the address and a detailed summary so that we can better assist you.'
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
                desc2: ''
            },
            {
                id: "a0Om0000005ehaBEAQ",
                subType: 'Business Assistance/Professional Services',
                description: 'Business technical assistance including, but not limited to: accounting, human resources, marketing, operations, site selection, strategic planning, succession planning, e-commerce, legal structure, etc.',
                desc2: ''
            },
            {
                id: "a0ODh000005jJR2MAM",
                subType: 'Economic Data',
                description: 'Assistance obtaining economic data including geographic and commercial real estate information through a variety of data sources such as ESRI and CoStar.',
                desc2: ''
            },
            {
                id: "a0ODh000005jJQxMAM",
                subType: 'Environmental Brownfields Assistance',
                description: 'Financial and technical assistance for brownfields assessment and remediation.',
                desc2: ''
            },
            {
                id: "a0Om0000005ehaCEAQ",
                subType: 'Financial Empowerment',
                description: 'Free one-on-one financial navigation and coaching.',
                desc2: ''
            },
            {
                id: "a0Om0000005authEAA",
                subType: 'General: Business Resources',
                description: 'For general business assistance and resource service requests.',
                desc2: ''
            },
            {
                id: "a0ODh000005jJQsMAM",
                subType: 'Navigating City of Sacramento Permits and Regulatory Environment',
                description: 'Assistance with permits (entertainment, business operations tax certificates, planning and building assistance, etc.), new or existing rules and regulations, etc.',
                desc2: ''
            },
            {
                id: "a0Om0000005YFcWEAW",
                subType: 'Workforce Development & Training',
                description: 'Resources for employers, and job and workforce readiness.',
                desc2: ''
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
                desc2: 'A private residence may not be used to conduct business as an auto repair shop. If you are reporting a suspected auto repair business, please provide the address, a detailed description of the work taking place, and the hours the activities are happening.'
            },
            {
                id: "a0Om0000003eSnNEAU",
                subType: 'Basketball Hoop in Public Right of Way',
                description: 'Report a basketball hoop on the street or sidewalk.',
                desc2: 'A basketball hoop is allowed on private property as long as it does not impede on the public right of way. Hoops may not be kept on a sidewalk, or in the street. When reporting a basketball hoop, please include the address where the hoop is located.'
            },
            {
                id: "a0Om0000003eSnJEAU",
                subType: 'Business Compliance Entertainment',
                description: 'Report concerns with taxi\'s, entertainment venues like pubs or clubs.',
                desc2: 'The Business Compliance Unit works to address concerns about entertainment venues like bars or clubs. When reporting a concern, please include the address and a detailed description of the situation.'
            },
            {
                id: "a0Om0000005DXeXEAW",
                subType: 'Business Compliance Shopping Cart',
                description: 'Report a stray shopping cart.',
                desc2: 'The Business Compliance Unit works to address concerns regarding stray shopping carts. When reporting a concern, please include the address and a detailed description of the situation.'
            },
            {
                id: "a0Om00000062dGjEAI",
                subType: 'Business Compliance Short Term Rental',
                description: 'Report a concern with a short term rental.',
                desc2: 'The Business Compliance Unit works to address concerns regarding short term rentals. When reporting a concern, please include the address and a detailed description of the situation.'
            },
            {
                id: "a0Om0000005DXecEAG",
                subType: 'Business Compliance Taxi Cab',
                description: 'Report a concern with a taxi cab.',
                desc2: 'The Business Compliance Unit works to address concerns regarding taxi cabs. When reporting a concern, please include a detailed description of the incident including the cab/taxi number and the location of travel.'
            },
            {
                id: "a0Om0000005DXehEAG",
                subType: 'Business Compliance Weeds',
                description: 'Report a lot with overgrown weeds or grass.',
                desc2: 'The Business Compliance Unit addresses concerns regarding vacant lots with no structures that have overgrown weeds or grass. When reporting a concern, please include the address closest to the lot and a detailed description of the concern.'
            },
            {
                id: "a0Om0000003eSngEAE",
                subType: 'General: Code Enforcement',
                description: 'Questions regarding code or housing enforcement policies.',
                desc2: 'Please provide us with a detailed description of your question or concern so that we can properly answer or redirect your request. Please note 311 is unable to provide legal advice or specific details regarding an open case.'
            },
            {
                id: "a0Om0000003eSnWEAU",
                subType: 'Graffiti',
                description: 'Report graffiti on public and/or private property.',
                desc2: 'City crews abate graffiti & offer removal supplies & color matching assistance to the public. When reporting graffiti, please provide a detailed description of the type of graffiti and its location. If possible, please include a picture in your request.'
            },
            {
                id: "a0Om0000003eSnaEAE",
                subType: 'Housing Complaint',
                description: 'Report structural or electrical concerns with a property.',
                desc2: 'Housing officers respond to a variety of concerns regarding the safety of a property, residential or commercial. When submitting this case, please provide a detailed description of the issue and the property\'s address.'
            },
            {
                id: "a0Om0000003eSnOEAU",
                subType: 'Junk & Debris',
                description: 'Report junk, debris, or trash on private property, in a front, rear or side yard or on a vacant lot. To report Illegal Dumping on a public street, please go to Solid Waste – Illegal Dumping. For dumping and trash related to encampments, use Homeless Camp – Trash.',
                desc2: 'Code Enforcement addresses reports of junk/debris in the front, side, or rear of a property. Items on the sidewalk or street should be reported as illegal dumping. Please include an exact address and detailed description of the items in your request.'
            },
            {
                id: "a0Om0000003eSnPEAU",
                subType: 'Landscaping',
                description: 'Report concerns with overgrown landscaping encroaching on the public right of way.',
                desc2: 'The City will address concerns regarding overgrown grass or weeds on private property or greenery that is impeding on the public right of way. The City is unable to direct Citizens to prune or maintain trees on private property.'
            },
            {
                id: "a0Om0000003eSnREAU",
                subType: 'Mechanical Noise Complaint',
                description: 'Report mechanical noise like an air conditioner or leaf blower.',
                desc2: 'Code Enforcement will address reports of leaf blowers or loud mechanical noise like air conditioners. For concerns regarding loud music, or people, please contact Sac PD non-emergency at 916.808.5471.'
            },
            {
                id: "a0Om0000003eSnQEAU",
                subType: 'Occupied Trailer On Private Property',
                description: 'Report an occupied trailer or RV parked on private property.',
                desc2: 'A 25\' setback is required to store an RV on private property. RV\'s may not be parked or lived in on a driveway, side or rear yard, nor can they have electrical hookups. When submitting this request, please provide the address where the vehicle resides.'
            },
            {
                id: "a0Om0000003eSnVEAU",
                subType: 'Pest',
                description: 'Report roaches, mice, or rats in a rented property.',
                desc2: 'Property owners are responsible for maintaining a proper pest control program. If you are a tenant whose landlord is refusing to address mice, roaches, or rats, please provide a detailed description of the problem and include your contact information.'
            },
            {
                id: "a0Om0000003eSnUEAU",
                subType: 'Fences',
                description: 'Report a downed or damaged fence or an unfenced pool.',
                desc2: ''
            },
            {
                id: "a0Om0000003eSnSEAU",
                subType: 'Signs, Banners, or Fliers',
                description: 'Report illegal signage in the public right of way.',
                desc2: 'Signs or banners are generally not allowed in the public right-of-way. When reporting a sign or banner imposing on the public right of way, like a sidewalk or utility post, please describe the signs, its location, and include a picture when possible.'
            },
            {
                id: "a0Om0000004sEToEAM",
                subType: 'Stagnant Water',
                description: 'Report an unkempt pool, or other stagnant water causing mosquitos.',
                desc2: ''
            },
            {
                id: "a0Om0000003eSnKEAU",
                subType: 'Vehicle on Private Property',
                description: 'Report a non-operational vehicle on private property, like a driveway.',
                desc2: 'Inoperable vehicles may not be stored in a driveway or a side yard that is visible from the street. Cars, trucks, RVs, or boats parked in driveways, or paved side yards are permitted, as long as they are whole and complete and capable of being driven.'
            },
            {
                id: "a0Om0000003eSnXEAU",
                subType: 'Vehicle Abandoned on Street',
                description: 'Report a vehicle parked on a City street in excess of 72 hours.',
                desc2: 'Unoccupied vehicles cannot be parked on a public street for more than 72 hours without moving. Occupied vehicles are currently exempt from this rule due to the stay at home order. Please include the vehicle\'s exact location in your request.'
            },
            {
                id: "a0Om0000003eSnZEAU",
                subType: 'Work Without a Permit',
                description: 'Report construction work believed to be taking place without a permit.',
                desc2: 'A permit is required for new construction, additions, remodeling, roofing, or repairs to electrical, mechanical, and plumbing systems. When reporting suspected work without a permit, please provide an exact address and a description of the work.'
            },
            {
                id: "a0Om0000003eSnTEAU",
                subType: 'Yard or Garage Sale Complaint',
                description: 'Report a property holding excessive yard or garage sales.',
                desc2: 'Private properties are allowed one-yard sale per calendar year, not to exceed two consecutive days a year. When reporting excessive yard sales, please provide the property\'s exact address.'
            },
            {
                id: "a0Om0000003eSneEAE",
                subType: 'Zoning: Detatched Accessory Structure',
                description: 'Report a detached structure like a carport or shed in the front or rear yard.',
                desc2: 'Detached accessory structures, like a shed or garage, are not allowed in a front or street-side yard without a permit. Structures no larger than 10x12 are allowed without a permit in a backyard. Please provide an address when submitting this case.'
            },
            {
                id: "a0Om0000003eSndEAE",
                subType: 'Zoning: Fencing',
                description: 'Report a downed or damaged fence or an unfenced pool.',
                desc2: 'Fences visible from the public right of way are required to be properly maintained so as not to create a hazard, public nuisance, or blight. Concerns with backyard fences are civil issues and will not be addressed by Code Enforcement.'
            },
            {
                id: "a0Om0000003eSnfEAE",
                subType: 'Zoning: Home Occupation',
                description: 'Report an unlicensed home-based business.',
                desc2: 'A private residence may not be used to conduct business. When submitting a report for a suspected home-based business, please provide a detailed description of the suspected business and the home\'s exact address.'
            },
            {
                id: "a0Om0000003eSncEAE",
                subType: 'Zoning: Improper Land Use or Overpavement',
                description: 'Report an unauthorized recycling center or overly paved front yard.',
                desc2: 'Zoning will address recycling centers, tire shops, or parking lots being operated out of inappropriately zoned lots. Zoning will also address private properties that have been over-paved. Please provide a detailed description and address for this case.'
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
                desc2: 'If you\'re requesting information about City drain services, please provide the address you\'re inquiring about so that we can better serve you. Situations that are urgent in nature, like a plugged drain, should be called into 311 or 916.808.5011.'
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
                desc2: 'Reports of camps are reviewed by the Department of Community Response. Due to the high volume of reports received, a response may not be possible in all cases. Concerns for personal safety or suspected illegal activity should be reported to Sac PD.'
            },
            {
                id: "a0Om0000005oGQLEA2",
                subType: 'Homeless Camp-Trash',
                description: 'To report trash from a homeless camp.',
                desc2: 'Please use this request type to submit a report of trash left behind from an encampment or to request trash clean-up around an encampment.'
            },
            {
                id: "a0Om0000005qSdnEAE",
                subType: 'Homeless Encampment 500ft from School',
                description: 'Homeless Encampment Blocking Sidewalk',
                desc2: 'Report encampments within 500 feet from a Pre-K – 12 School.'
            },
            {
                id: "a0Om0000004sETpEAM",
                subType: 'Homeless Camp at Park or Bike Trail',
                description: 'Report a homeless camp at a park or bike trail.',
                desc2: 'Reports of camps at parks or bike trails are responded to by Park Rangers. When submitting a request, please provide a detailed description of the concern and its location within the park.'
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
                desc2: 'Reports of broken, vandalized, or otherwise non-working meters are reviewed by the City\'s Meter Shop. You may choose to stay parked at a broken meter at your own risk. Issued citations may be contested via the City Website.'
            },
            {
                id: "a0Om0000003eSnqEAE",
                subType: 'Customer Service: Parking',
                description: "Questions regarding monthly parking, IOU's, or requests to contact Parking Staff.",
                desc2: 'Parking Customer Service can assist with questions regarding monthly parking, IOU\'s, requests to contact Parking Staff, and lots more. Staff cannot retract a citation. When submitting a request, please include your contact information.'
            },
            {
                id: "a0Om0000003eSnrEAE",
                subType: 'Enforcement Request',
                description: 'Report parking violations (blocking hydrant, parked in "no parking," etc.)',
                desc2: 'Officers are on duty 7:30am-10pm Sun-Mon and 7:30am-11pm Tues-Sat, excluding Holidays. Please include the make, model, vehicle plate number as well as a description of the violation and location.'
            },
            {
                id: "a0Om0000003eSnsEAE",
                subType: 'General: Parking',
                description: 'General questions regarding parking policies or procedures.',
                desc2: 'If you have a general question about on or off-street parking services, please provide us with your contact information and a description of the concern. For citation contests, please follow the instructions located on the back of your citation.'
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
                desc2: 'The Park Maintenance team responds to reports of a City Park fence or gate that is in need of repair. Please include a detailed description of the fence\'s location and the name of the park when submitting your request.'
            },
            {
                id: "a0Om0000003eI2mEAE",
                subType: 'General: Parks',
                description: 'Questions about park policies or procedures.',
                desc2: 'If you have general questions about City parks, please provide us with a detailed description of your concern and your contact information. You may also want to check our Answers page for answers to our most asked questions.'
            },
            {
                id: "a0Om0000003eI2oEAE",
                subType: 'Grounds Cleaning',
                description: 'Request grounds cleaning or removal of trash at a City Park.',
                desc2: 'The Park Maintenance team responds to requests for clean up of a City Park. When submitting this request, please include a detailed description of the concern, its location in the park, and the park name.'
            },
            {
                id: "a0Om0000003eI2pEAE",
                subType: 'Irrigation',
                description: 'Report concerns with sprinkler or irrigation systems at a City Park.',
                desc2: 'Faulty irrigation devices, like sprinklers, are repaired by our Park Maintenance Team. When submitting this request, please include a detailed description of the concern, its location in the park, and the park name.'
            },
            {
                id: "a0Om0000003eI2rEAE",
                subType: 'Mowing or Trimming Request',
                description: 'Request mowing or trimming of trees or landscapes at a City Park.',
                desc2: 'Reports of overgrown weeds or grass are addressed by our Park Maintenance Team. When submitting this request, please include a detailed description of the concern, its location in the park, and the park name.'
            },
            {
                id: "a0Om0000003eI2sEAE",
                subType: 'Other Park Concern',
                description: 'Report a non-listed concern to our Parks Department.',
                desc2: 'If you have observed a concern at a park that does not fit into the available categories, please provide a detailed description of the concern, its location in the park, and the park name.'
            },
            {
                id: "a0Om0000003eI2tEAE",
                subType: 'Park Playground',
                description: 'Report concerns with playground or court equipment.',
                desc2: 'The maintenance and safety of our park playground equipment are important to us. When submitting this request, please include a detailed description of the concern, its location in the park, and the park name.'
            },
            {
                id: "a0Om0000003eI2vEAE",
                subType: 'Request a Park Ranger',
                description: 'Request a Park Ranger for safety concerns.',
                desc2: 'Park Rangers respond to concerns regarding safety at a City park. When submitting this request, please include a detailed description of the concern, its location in the park, and the park name. A Ranger will respond as quickly as possible.'
            },
            {
                id: "a0Om0000003eI2uEAE",
                subType: 'Restrooms',
                description: 'Request clean up or maintenance for a park restroom.',
                desc2: 'Our Park Maintenance Team responds to concerns regarding the cleanliness or maintenance of park restrooms. Please include the details and the park name. For restroom concerns on your scheduled reservation day, please call us at 311 or 916.808.5011.'
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
                description: 'General sewer questions.',
                desc2: 'If you are requesting information about City Sewer services, please provide us with an address. Situations that require an immediate response, like overflowing or backed-up sewage, should be called in so that a crew can respond as quickly as possible.'
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
                desc2: 'Shared bikes or scooters should be returned to a bike rack or drop zone after use. If you observe a BLACK bike or scooter that is illegally parked, please submit a request and include a detailed description of its location.'
            },
            {
                id: "a0Om0000005xzDSEAY",
                subType: 'Helbiz',
                description: 'Report an illegally parked BLUE and BLACK HELBIZ scooter.',
                desc2: 'Shared bikes or scooters should be returned to a bike rack or drop zone after use. If you observe a BLUE and BLACK scooter that is illegally parked, please submit a request and include a detailed description of its location.'
            },
            {
                id: "a0Om0000003eI2kEAE",
                subType: 'Lime',
                description: 'Report an illegally parked GREEN LIME bike or scooter .',
                desc2: 'Shared bikes or scooters should be returned to a bike rack or drop zone after use. If you observe a GREEN bike or scooter that is illegally parked, please submit a request and include a detailed description of its location.'
            },
            {
                id: "a0Om0000005dycyEAA",
                subType: 'Razor',
                description: 'Report an illegally parked RED and BLACK RAZOR bike or scooter.',
                desc2: 'Shared bikes or scooters should be returned to a bike rack or drop zone after use. If you observe a RED and BLACK scooter that is illegally parked, please submit a request and include a detailed description of its location.'
            },
            {
                id: "a0ODh000005jqrBMAQ",
                subType: 'Superpedestrian',
                description: 'Report an illegally parked Superpedestrian scooter.',
                desc2: 'Shared scooters should be returned to a bike rack or drop zone after use. If you observe a Yellow and Gray scooter that is illegally parked, please submit a request and include a detailed description of its location.'
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
                desc2: 'If you are requesting information about City trash services, please provide us with the address you\'re inquiring about so that we can better serve you. For assistance with your bill, or to make a payment, please call 916-808-5454 and select option 2.'
            },
            {
                id: "a0Om0000004knaiEAA",
                subType: 'Illegal Dumping',
                description: 'Report illegal dumping on a public street. For dumping and trash related to encampments, use Homeless Camp – Trash. For Junk and Debris on private property use Code Enforcement – Junk & Debris.',
                desc2: 'Our Solid Waste Team removes illegal dumping in the public right of way. They can also investigate and prosecute individuals who illegally dump. To report trash on private property, please submit a Code Enforcement case.'
            },
            {
                id: "a0Om0000003dzABEAY",
                subType: 'Missed Weekly Collection',
                description: 'Report a missed or partially serviced container.',
                desc2: 'If we missed servicing your container, please let us know so that we schedule return service. To ensure we\'re able to go back out, please report missed service within two days of your collection day.'
            },
            {
                id: "a0Om00000062fTKEAY",
                subType: 'Noise Complaint - RSW',
                description: 'General noise complaint.',
                desc2: ''
            },
            {
                id: "a0Om0000003dzA7EAI",
                subType: 'Recycle Guide or Dump Coupon Request',
                description: 'Request a replacement dump coupon or recycle guide.',
                desc2: 'A printed recycle guide that includes a dump coupon is mailed out mid-year. Guides are mailed to the service address, not the billing address. If you didn\'t receive a guide or misplaced it, we are able to send out a replacement.'
            },
            {
                id: "a0Om0000003dzA8EAI",
                subType: 'Schedule an Appointment Based Pick-Up',
                description: 'Request an appliance/ewaste, or motor oil appointment. Contact information is required to schedule any appointment based pick-up. Free household junk appointments have all been filled for this year. Scheduling will resume in February 2024.',
                desc2: 'Household junk appointments are only available February through October. Appliance/e-waste appointments are available year-round. Contact information is required to schedule any appointment based pick-up.'
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
                desc2: 'The City will install bicycle racks or shared-rideable drop zones on public property where there is a demonstrated need. Please include your property address when submitting this request.'
            },
            {
                id: "a0Om0000003eI2WEAU",
                subType: 'Bikeway Issues',
                description: 'Report concerns with a bikeway, such as unsafe conditions like trash, or glass.',
                desc2: 'The City of Sacramento continues to make our City friendlier for bicycling. If you observe concerns with a bikeway, please report it. When submitting this request, please provide a detailed summary of the concern and its location.'
            },
            {
                id: "a0Om0000003eI2XEAU",
                subType: 'Curb or Gutter',
                description: 'Report concerns regarding a curb or gutter such as unsafe conditions, or grading issues.',
                desc2: 'The City maintains all curbs. If you observe a concern, please submit a request that includes a detailed description and the location.'
            },
            {
                id: "a0Om0000003eI2UEAU",
                subType: 'General: Streets',
                description: 'General questions regarding policies and procedures about City Streets.',
                desc2: 'If you\'re requesting information about general street services, please provide the address you\'re inquiring about so that we can better serve you.'
            },
            {
                id: "a0Om0000003eI2aEAE",
                subType: 'Pothole',
                description: 'Report a pothole on a City street.',
                desc2: 'Our Street Maintenance team responds to reports of potholes in real-time. When submitting a request, please provide a detailed description of the concern and its location.'
            },
            {
                id: "a0Om0000003eI2eEAE",
                subType: 'Street Lighting',
                description: 'Report a malfunctioning lighting fixture, including street lamps.',
                desc2: 'Malfunctioning street lights can be repaired by our City team. When submitting a request, please provide a detailed description.'
            },
            {
                id: "a0Om0000003eI2bEAE",
                subType: 'Sidewalk',
                description: 'Report a broken, damaged, or unsafe sidewalk.',
                desc2: 'Property owners are responsible for maintaining the sidewalk in front of their properties. The City will inspect reports of damaged sidewalks. If you observe a concern, please submit a request that includes a detailed description and the location.'
            },
            {
                id: "a0Om0000003eI2cEAE",
                subType: 'Signs and Markings',
                description: 'Report missing or damaged signs or repainting of street markings.',
                desc2: 'The City maintains street signage. If you observe a concern, please submit a request that includes a detailed description and the location.'
            },
            {
                id: "a0Om0000003dzAFEAY",
                subType: 'Street Maintenance',
                description: 'Report items blocking a lane of traffic.',
                desc2: 'Reports of items in the roadway should be reported immediately. When submitting a request, please include a detailed description of the concern and its location.'
            },
            {
                id: "a0Om0000003eI2fEAE",
                subType: 'Streetscapes',
                description: 'Report concerns with the landscaped section between the sidewalk & street, like overflowing sprinklers.',
                desc2: 'Concerns with the landscaped section between the sidewalk & street, like overflowing sprinklers, are addressed in real-time by our City crew. When submitting a case, please provide a detailed description of the concern and its location.'
            },
            {
                id: "a0Om0000003eI2hEAE",
                subType: 'Traffic Investigation',
                description: 'Request new speed bumps, signage, or street markings.',
                desc2: 'Requests for new speed bumps, signage, or street markings are reviewed by our Transportation team. Please include a detailed description of the concern and location. This request requires your contact information. Anonymous requests will not be reviewed.'
            },
            {
                id: "a0Om0000003eI2gEAE",
                subType: 'Traffic Signals',
                description: 'Report a malfunctioning traffic signal.',
                desc2: 'Concerns with traffic signals should be reported immediately. When submitting a concern, please include a detailed description of the complaint, the location, and your direction of travel.'
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
                description: 'Questions regarding urban forestry policies or procedures.',
                desc2: 'For general questions about the services our Urban Forestry team provides, please submit a request and provide us with a detailed description of your concern. You may also want to check our Answers page for answers to our most asked questions.'
            },
            {
                id: "a0Om0000003eAxfEAE",
                subType: 'Tree Service Request',
                description: 'Request inspection or maintenance of a protected or City tree.',
                desc2: 'The City of Sacramento\'s Urban Forestry division provides maintenance to city street trees, trees in the public right-of-way, and trees on City property. They also inspect trees on private property to determine if a tree qualifies for removal.'
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
                description: 'General utility billing questions.',
                desc2: 'If you\'re requesting information about City utility services, please provide the address you\'re inquiring about so that we can better serve you. For assistance with your bill, or to make a payment, please call 916-808-5454 and select option 2.'
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
                desc2: 'If you\'re requesting information about City water services, please provide the address you\'re inquiring about so that we can better serve you. Situations that are urgent in nature, like a leak or broken pipe, should be called into 311 or 916.808.5011.'
            },
            {
                id: "a0Om0000003e81SEAQ",
                subType: 'Water Conservation',
                description: 'Request information about virtual Water Wise House Calls, business and residential water conservation rebates or leak investigation if a leak letter was received.',
                desc2: 'Request information about virtual Water Wise House Calls, business and residential water conservation rebates or leak investigation if a leak letter was received.'
            },
            {
                id: "a0Om0000003e81REAQ",
                subType: 'Water Use Complaint',
                description: 'Report a water use concern.',
                desc2: 'When reporting information to the City, please be sure to include; days and times the watering is occurring, the address of where the water misuse is taking place, and any pattern to the watering, like the frequency.'
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
// ^the only reason the above function call's input string uses both upper and lowercase characters is to demonstrate that this function is case insensitive!                          //
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
    baseGrey200: 'rgba(112, 112, 112, 0.7)',

    darkGrey100: '#333232',
    darkGrey200: 'rgba(51, 50, 50, 0.6)'
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
// NOTE: any theming changes expected to happen without an app refresh, requires in-line style formitting.

let chosenColorTheme: any = 'lightMode'; // default theme

export const globalColorTheme= { // default theme
    chosenColorTheme : chosenColorTheme,
    backgroundColor : '#ffffff',
    backgroundColor2 : '#ffffff',
    text : '#E7EAED',
    color : '#000000',
    blue : '#203d61',
    theme : 'lightTheme',
    opposite : '#3B3B3B',
    fontSize: 19,
    fontFamily: globalFont.chosenFont,
    paddingLeft: '5%',
    fontWeight: '500'
}

export function colorThemeSetter(newTheme:string){ // called by the toggle within the settings page
    globalColorTheme.chosenColorTheme = newTheme;
    if (newTheme == 'lightTheme'){
        globalColorTheme.theme = 'lightTheme';
        globalColorTheme.backgroundColor = '#ffffff';   //background = white
        globalColorTheme.backgroundColor2 = '#ffffff';   //alternate background = white
        globalColorTheme.color = '#000000';             //textcolor = black
        globalColorTheme.blue = '#203d61';             //textcolor = dark blue
        globalColorTheme.text = '#E7EAED';              //textcolor = off-white
        globalColorTheme.opposite = '#3B3B3B';              // textcolor = dark-gray
    }
    
    else if (newTheme == 'darkTheme'){
        globalColorTheme.theme = 'darkTheme';
        globalColorTheme.backgroundColor = '#3B3B3B';   //background = dark-gray
        globalColorTheme.backgroundColor2 = '#878787';   //alternate background = light-gray
        globalColorTheme.color = '#E7EAED';             //textcolor = off-white
        globalColorTheme.blue = '#33619b';             //textcolor = light blue
        globalColorTheme.text = '#E7EAED';              //textcolor = off-white
        globalColorTheme.opposite = '#E7EAED';              // textcolor = off-white
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