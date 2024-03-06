import { generateSudoId } from "./customs"

export const places = [
    { "id": 229340, "address": "123 Main St, Cityville, USA", "latitude": 38.54269, "longitude": -121.523169},
    { "id": 3834644, "address": "456 Elm Ave, Townburg, USA", "latitude": 38.2258, "longitude": -121.0429104},
    { "id": 2394157, "address": "789 Oak Ln, Villagetown, USA", "latitude": 38.461599, "longitude": -121.620098},
    { "id": 5251795, "address": "101 Pine Rd, Hamletville, USA", "latitude": 38.468683, "longitude": -121.0916332},
    { "id": 3043874, "address": "202 Maple Dr, Boroughburg, USA", "latitude": 38.684932, "longitude": -121.45636},
    { "id": 7099464, "address": "303 Cedar St, Settlement City, USA", "latitude": 38.563753, "longitude": -121.57364},
    { "id": 1323630, "address": "404 Birch Ct, Townshipville, USA", "latitude": 38.939483, "longitude": -121.379198},
    { "id": 5439653, "address": "505 Redwood Ln, Districtburg, USA", "latitude": 38.287395, "longitude": -121.161071},
    { "id": 3514649, "address": "606 Spruce Pl, Burgville, USA", "latitude": 38.579314, "longitude": -121.348313},
    { "id": 9524742, "address": "707 Fir Blvd, Metroville, USA", "latitude": 38.626642, "longitude": -121.567836},
    { "id": 8435275, "address": "808 Cedar Ave, Citytown, USA", "latitude": 38.628412, "longitude": -121.602672},
    { "id": 1383916, "address": "909 Pine Ln, Villagetown, USA", "latitude": 38.519535, "longitude": -121.11682},
    { "id": 6181612, "address": "1210 Elm Rd, Districtburg, USA", "latitude": 38.251556, "longitude": -121.703942},
    { "id": 422640, "address": "1311 Oak Dr, Townshipville, USA", "latitude": 38.0705825, "longitude": -121.608236},
    { "id": 4477636, "address": "1412 Maple Ct, Cityville, USA", "latitude": 38.253553, "longitude": -121.83795},
    { "id": 3094015, "address": "1513 Birch Ln, Settlement City, USA", "latitude": 38.729551, "longitude": -121.291879},
    { "id": 6559184, "address": "1614 Redwood Pl, Metroville, USA", "latitude": 38.0738234, "longitude": -121.433985},
    { "id": 6170636, "address": "1715 Spruce Blvd, Hamletville, USA", "latitude": 38.328068, "longitude": -121.552166},
    { "id": 2385641, "address": "1816 Fir Ave, Townburg, USA", "latitude": 38.570108, "longitude": -121.215329},
    { "id": 6701817, "address": "1917 Cedar Ln, Burgville, USA", "latitude": 38.682796, "longitude": -121.718173},
    { "id": 4446277, "address": "2020 Pine St, Citytown, USA", "latitude": 38.0981416, "longitude": -121.847235},
    { "id": 2622378, "address": "2121 Elm Ave, Boroughburg, USA", "latitude": 38.320001, "longitude": -121.278212},
    { "id": 5022329, "address": "2222 Oak Rd, Settlement City, USA", "latitude": 38.785473, "longitude": -121.596152},
    { "id": 6938958, "address": "2323 Maple Dr, Townshipville, USA", "latitude": 38.885377, "longitude": -121.387116},
    { "id": 5457012, "address": "2453 Birch Ct, Villagetown, USA", "latitude": 38.563677, "longitude": -121.671019},
    { "id": 6001420, "address": "2525 Redwood Ln, Hamletville, USA", "latitude": 38.916442, "longitude": -121.843448},
    { "id": 9789155, "address": "2626 Spruce Rd, Metroville, USA", "latitude": 38.372066, "longitude": -121.138778},
    { "id": 3255439, "address": "2727 Fir Pl, Burgville, USA", "latitude": 38.144108, "longitude": -121.463389},
    { "id": 4254376, "address": "2828 Cedar Blvd, Cityville, USA", "latitude": 38.944949, "longitude": -121.119353},
    { "id": 3891625, "address": "2929 Pine Ave, Districtburg, USA", "latitude": 38.0822131, "longitude": -121.686526},
    { "id": 3280542, "address": "3030 Elm Ln, Settlement City, USA", "latitude": 38.437475, "longitude": -121.687835},
    { "id": 9926705, "address": "3131 Oak Ct, Townburg, USA", "latitude": 38.559501, "longitude": -121.411901},
    { "id": 9039708, "address": "3232 Maple Ln, Villagetown, USA", "latitude": 38.616965, "longitude": -121.412141},
    { "id": 3197849, "address": "3333 Birch Pl, Hamletville, USA", "latitude": 38.639821, "longitude": -121.551253},
    { "id": 2329949, "address": "3434 Redwood Blvd, Boroughburg, USA", "latitude": 38.566192, "longitude": -121.194945},
    { "id": 4343924, "address": "3535 Spruce Ave, Citytown, USA", "latitude": 38.633727, "longitude": -121.303575},
    { "id": 6893410, "address": "3636 Fir Rd, Metroville, USA", "latitude": 38.712507, "longitude": -121.131211},
    { "id": 3914582, "address": "3737 Cedar Dr, Townshipville, USA", "latitude": 38.220027, "longitude": -121.70495},
    { "id": 2684264, "address": "3838 Pine Ct, Settlement City, USA", "latitude": 38.999551, "longitude": -121.942291},
    { "id": 4243941, "address": "3939 Elm Ln, Burgville, USA", "latitude": 38.551236, "longitude": -121.639619},
    { "id": 2757840, "address": "4040 Maple Blvd, Cityville, USA", "latitude": 38.748211, "longitude": -121.534137},
    { "id": 965049, "address": "4141 Oak Pl, Districtburg, USA", "latitude": 38.494812, "longitude": -121.486674},
    { "id": 4543384, "address": "4242 Birch Rd, Villagetown, USA", "latitude": 38.954915, "longitude": -121.181113},
    { "id": 6241417, "address": "4343 Redwood Ct, Hamletville, USA", "latitude": 38.0721395, "longitude": -121.560142},
    { "id": 4198915, "address": "4444 Spruce Ln, Boroughburg, USA", "latitude": 38.190417, "longitude": -121.309449},
    { "id": 6281768, "address": "4545 Fir Blvd, Citytown, USA", "latitude": 38.570502, "longitude": -121.432271},
    { "id": 1872850, "address": "4646 Cedar Ave, Metroville, USA", "latitude": 38.990142, "longitude": -121.335836},
    { "id": 4297116, "address": "4747 Pine Rd, Settlement City, USA", "latitude": 38.642413, "longitude": -121.78113},
    { "id": 4589410, "address": "4848 Elm Dr, Townshipville, USA", "latitude": 38.254164, "longitude": -121.835786},
    { "id": 381453, "address": "4949 Maple Ct, Burgville, USA", "latitude": 38.747652, "longitude": -121.464329},
    { "id": 5535553, "address": "5050 Oak Pl, Cityville, USA", "latitude": 38.332592, "longitude": -121.296976},
    { "id": 2463660, "address": "5151 Birch Blvd, Districtburg, USA", "latitude": 38.659156, "longitude": -121.724514},
    { "id": 7231570, "address": "5252 Redwood Ln, Villagetown, USA", "latitude": 38.416407, "longitude": -121.198976},
    { "id": 892753, "address": "5353 Spruce Ave, Hamletville, USA", "latitude": 38.860116, "longitude": -121.113555},
    { "id": 4692428, "address": "5454 Fir Rd, Boroughburg, USA", "latitude": 38.152202, "longitude": -121.789209},
    { "id": 9684549, "address": "5555 Cedar Ct, Citytown, USA", "latitude": 38.0420962, "longitude": -121.402267},
    { "id": 2639835, "address": "5656 Pine Blvd, Metroville, USA", "latitude": 38.482425, "longitude": -121.480465},
    { "id": 896816, "address": "5757 Elm Ave, Townshipville, USA", "latitude": 38.970222, "longitude": -121.247439},
    { "id": 5203521, "address": "5858 Maple Ln, Settlement City, USA", "latitude": 38.690729, "longitude": -121.436556},
    { "id": 1660118, "address": "5959 Birch Pl, Townburg, USA", "latitude": 38.0669702, "longitude": -121.51883},
    { "id": 315535, "address": "6060 Redwood Rd, Burgville, USA", "latitude": 38.506376, "longitude": -121.0506166},
    { "id": 1574899, "address": "6161 Spruce Ct, Cityville, USA", "latitude": 38.838622, "longitude": -121.288504},
    { "id": 9191458, "address": "6262 Fir Ln, Districtburg, USA", "latitude": 38.56108, "longitude": -121.0761659},
    { "id": 2421334, "address": "6363 Cedar Dr, Villagetown, USA", "latitude": 38.170306, "longitude": -121.0759089},
    { "id": 2807523, "address": "6464 Pine Pl, Hamletville, USA", "latitude": 38.231941, "longitude": -121.908276},
    { "id": 2147150, "address": "6565 Elm Blvd, Boroughburg, USA", "latitude": 38.63012, "longitude": -121.368745},
    { "id": 9874343, "address": "6666 Maple Ave, Citytown, USA", "latitude": 38.258517, "longitude": -121.0939225},
    { "id": 4790476, "address": "6767 Oak Rd, Metroville, USA", "latitude": 38.88181, "longitude": -121.43872},
    { "id": 4675425, "address": "6868 Birch Ln, Townshipville, USA", "latitude": 38.289195, "longitude": -121.452238},
    { "id": 2310927, "address": "6969 Redwood Ct, Settlement City, USA", "latitude": 38.197676, "longitude": -121.905676},
    { "id": 9140465, "address": "7070 Spruce Ln, Burgville, USA", "latitude": 38.0848945, "longitude": -121.919353},
    { "id": 9105454, "address": "7171 Fir Blvd, Cityville, USA", "latitude": 38.97522, "longitude": -121.293351},
    { "id": 206081, "address": "7272 Cedar Ave, Districtburg, USA", "latitude": 38.5972, "longitude": -121.51347},
    { "id": 3712147, "address": "7373 Pine Pl, Villagetown, USA", "latitude": 38.25315, "longitude": -121.255992},
    { "id": 461337, "address": "7474 Elm Blvd, Hamletville, USA", "latitude": 38.0639434, "longitude": -121.881006},
    { "id": 1606643, "address": "7575 Maple Rd, Boroughburg, USA", "latitude": 38.125891, "longitude": -121.419221},
    { "id": 3814841, "address": "7676 Oak Ln, Citytown, USA", "latitude": 38.205343, "longitude": -121.468141},
    { "id": 1970043, "address": "7777 Birch Dr, Metroville, USA", "latitude": 38.272043, "longitude": -121.579893},
    { "id": 5861699, "address": "7878 Redwood Ct, Settlement City, USA", "latitude": 38.0996027, "longitude": -121.910402},
    { "id": 1844107, "address": "7979 Spruce Ave, Townshipville, USA", "latitude": 38.406755, "longitude": -121.214555},
    { "id": 9158851, "address": "8080 Fir Rd, Burgville, USA", "latitude": 38.852457, "longitude": -121.95112},
    { "id": 8609835, "address": "8181 Cedar Pl, Cityville, USA", "latitude": 38.672932, "longitude": -121.0425888},
    { "id": 8232515, "address": "8282 Pine Blvd, Districtburg, USA", "latitude": 38.315747, "longitude": -121.658922},
    { "id": 3527961, "address": "8383 Elm Ln, Villagetown, USA", "latitude": 38.0850902, "longitude": -121.654689},
    { "id": 7668680, "address": "8484 Maple Ave, Hamletville, USA", "latitude": 38.302266, "longitude": -121.754506},
    { "id": 766273, "address": "8585 Birch Rd, Boroughburg, USA", "latitude": 38.320634, "longitude": -121.570544},
    { "id": 4990471, "address": "8686 Redwood Pl, Citytown, USA", "latitude": 38.584987, "longitude": -121.164423},
    { "id": 9205381, "address": "8787 Spruce Blvd, Metroville, USA", "latitude": 38.503013, "longitude": -121.659648},
    { "id": 7049632, "address": "8888 Fir Ave, Settlement City, USA", "latitude": 38.724218, "longitude": -121.85694},
    { "id": 5161197, "address": "8989 Cedar Ln, Townshipville, USA", "latitude": 38.590815, "longitude": -121.388075},
    { "id": 6881520, "address": "9090 Pine Dr, Burgville, USA", "latitude": 38.474169, "longitude": -121.909582},
    { "id": 9207801, "address": "9191 Elm Pl, Cityville, USA", "latitude": 38.123111, "longitude": -121.705363},
]

export const articleTypes = [
    {
        id: generateSudoId(8),
        type: 'Animal Control',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: '​​​​​​​Can I receive a citation for failing to license my pet?',
                description: '​​​​​​​Owners of unlicensed pets may receive citations and incur up to a $300 fee.'
            },
            {
                id: generateSudoId(8),
                subType: 'Does Front Street accept donations?​​​​​​',
                description: 'Your support helps provide quality care for more than 11,000 animals that come to our shelter each year'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Is there a fee for claiming a lost pet at Front Street?​',
                description: 'When an animal has been impounded at the Front Street Shelter, a fee may be imposed before the animal is released to its owner.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I find free pet food?​',
                description: 'Through the Front Street Animal Shelter\'s Titanic\'s Pantry, free dog and cat food is offered to Sacramento residents in need.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I take feral cats to be spayed or neutered?​',
                description: 'The Sacramento SPCA offers free feral cat spay/neuter surgeries every Sunday'
            },
            {
                id: generateSudoId(8),
                subType: 'What are pet licenses and how can I obtain or renew one?​​​​​​',
                description: 'The Front Street Animal Shelter issues pet licenses for residents who reside within the Sacramento city limits.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I volunteer at Front Street?​​​​​​',
                description: 'The Front Street Animal Shelter is always interested in volunteers who want to help our animals find their new forever homes'
            },
            {
                id: generateSudoId(8),
                subType: 'What can I do about stray cats?​​​​​​',
                description: 'The City of Sacramento considers cats to be free-roaming animals, regardless of whether they are owned or feral.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I surrender a pet at Front Street?​​​​​​',
                description: 'The City of Sacramento Animal Care Services does not accept owned animal surrenders.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can you help me find a lost pet?​​​​​​',
                description: 'If your pet has been lost, we encourage you to text STRAY to 555888 to get a free pet-finding guide with video tutorials & links to our shelter\'s lost pets every 3 days.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I find free or low cost spay or neuter services?​​​​​​',
                description: 'If you live in the City of Sacramento and meet income guidelines, we may be able to assist you in getting your animal spayed or neutered.'
            },
            {
                id: generateSudoId(8),
                subType: 'I found a pet. What should I do?​​​​​​',
                description: 'If you have found a lost pet, we encourage you to fill out a found animal report.  '
            },
            {
                id: generateSudoId(8),
                subType: 'Can I foster animals for Front Street?​​​​​​',
                description: 'Foster homes provide an alternative to the shelter’s kennel environment for animals in need of time, attention, care, socializing and recovery.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I microchip my pet?​​​​​​',
                description: 'For owned animals, microchipping is available at the Free Vaccination and Microchip Clinic.'
            },
            {
                id: generateSudoId(8),
                subType: 'How many pets can one home have?​​​​​​',
                description: 'Each household within the city limits of Sacramento can have no more than 3 dogs and 7 cats.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Does Front Street provide euthanasia services?​',
                description: 'Due to the shelter\'s limited capacity, we are not able to provide euthanasia services for owned animals.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What is Front Street Shelter\'s Tax ID number?​',
                description: 'Front Street\'s Shelter Tax ID number is 94-6000410. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What can be done about aggressive animals?​',
                description: 'The City of Sacramento Animal Control Department will respond to reports of loose animals that are actively threatening the health of a human or animal.'
            },
            {
                id: generateSudoId(8),
                subType: 'What can be done about excessive barking?​​​​​​',
                description: 'When a complaint is received, the City of Sacramento Animal Care Services will notify dog owners via mail that his/her dog is creating a nuisance.'
            },
            {
                id: generateSudoId(8),
                subType: 'My neighbor\'s dog is always loose, what can I do?​​​​​​',
                description: 'While dogs may run freely on their own property (or within a designated "Dog Park" area), they must be on a leash all other times'
            },
            {
                id: generateSudoId(8),
                subType: 'What can be done about aggressive wildlife?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is actively threatening the well-being of a human or animal.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who can help a stray animal that appears to be sick or injured?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a stray animal that is showing signs of illness or has a visible injury.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​I was bitten by an animal. What should I do?​',
                description: 'The City of Sacramento Animal Control Department will investigate any complaint of an animal bite.'
            },
            {
                id: generateSudoId(8),
                subType: 'What can be done about nuisance wildlife?​​​​​​',
                description: 'The City does not have an active control or eradication program for native wildlife.'
            },
            {
                id: generateSudoId(8),
                subType: 'My pet died. Can Front Street help?​​​​​​',
                description: 'Deceased pets may be buried on the owner\'s property, taken to a veterinary clinic, pet cemetery, or rendering plant. '
            },
            {
                id: generateSudoId(8),
                subType: 'My pet was stolen. Can you help?​​​​​​',
                description: 'Animal Control is unable to assist with concerns regarding a stolen pet.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who removes dead animals in the street or sidewalk?​​​​​​',
                description: 'A Sacramento City Animal Control Officer will respond to requests to remove a dead animal from the public right-of-way.'
            },
            {
                id: generateSudoId(8),
                subType: 'How long can an animal be tethered?​​​​​​',
                description: 'Within the City of Sacramento limits, it is not permissible to tether an animal (on a leash, attached to a fixed object) for longer than a total of 3 hours in a 24 hour period.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I report suspected animal cruelty?​',
                description: 'If you witness animal cruelty, please report the incident immediately.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Can rabbits be kept as pets?​',
                description: 'Rabbits are permitted as pets in Sacramento City.  Rabbits must not be free-roaming - that is, they must remain on their own property.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can mini potbelly pigs be kept as pets?​​​​​​',
                description: 'Miniature (potbelly) pigs are permitted as pets in Sacramento City.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I report injured wildlife?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is showing signs of illness or has a visible injury.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Can I report an animal running in traffic?​',
                description: 'Dogs running loose on major roadways, freeways, or highways are at risk of sustaining injuries or causing traffic accidents.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I keep pet chickens on my property?​​​​​​',
                description: 'Within the City of Sacramento limits, a resident is allowed to have backyard chickens on their property as long as established conditions are met.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I keep bees on my property?​​​​​​',
                description: 'Unless the property is zoned “A” or “A-OS”, no more than two beehives per parcel are allowed. '
            },
            {
                id: generateSudoId(8),
                subType: 'Can I keep a venomous animal as a pet?​​​​​​',
                description: 'In the City of Sacramento, a special permit is required to keep a rattlesnake or other venomous animal.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can exotic animals be kept as pets?​​​​​​',
                description: 'Requests to keep exotic animals or wildlife (as described in the City Ordinances) in the city will be reviewed by the Chief Animal Control officer on a case by case basis.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can dogs be off leash at a park?​​​​​​',
                description: 'The City of Sacramento maintains eleven (11) “Dog Parks”, each with an area where dogs may run freely. At these facilities, dogs may be off a leash only within the designated, fenced area.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can an animal be left in a car or other type of vehicle?​​​​​​',
                description: 'Leaving pets locked in cars is never safe, but when the weather gets warmer, it can be deadly. High temperatures can cause irreparable organ damage and even death.'
            }
        ]  
    },
    {
        id: generateSudoId(8),
        type: 'Building and Planning',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'How can I contact the Building Department?​​​​​​',
                description: 'Building and Planning: Building department staff is available in person or via email.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I submit self-certification of a smoke or carbon monoxide detector?​​​​​​',
                description: 'Building and Planning: If your building permit requires the self-certification of a smoke or carbon monoxide detector, please download this form and follow the submission instructions. '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I obtain signatures for a demolition permit?​​​​​​',
                description: 'A demolition permit may require several signatures. '
            },
            {
                id: generateSudoId(8),
                subType: 'When is a building permit needed?​​​​​​',
                description: 'A building permit is required for projects such as new construction, additions, tenant improvements, pools, spas, signs, remodeling, and work on electrical, mechanical, and plumbing systems.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I search for and view planning applications and building permit information?​​​​​​',
                description: 'The AgencyCounter tool can be used to search and view planning applications and building permit information. This replaces the former program, Development Tracker.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Business Resources',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'What business resources are available in the Sacramento area?​​​​​​',
                description: 'Tap to see details.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What business resources does the City of Sacramento provide?​',
                description: 'Tap to see details.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Code Enforcement',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'What is the weed abatement program?​​​​​​',
                description: 'During the last week of February, the City mails out weed abatement notices to vacant lot owners.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can a vehicle be parked on grass, dirt or gravel?​​​​​​',
                description: 'It is against City code to park a vehicle on an unimproved surface regardless oh whether the vehicle is visible from the street.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I contact the Code Liaison Officer?​​​​​​',
                description: 'If your case has been assigned to the Code Liaison Officer, you may contact the office using the following ways.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I submit a complaint about a cab or taxi?​​​​​​',
                description: 'If you experience a concern with a taxi cab while within city limits, you may file a complaint directly with 311.'
            },
            {
                id: generateSudoId(8),
                subType: 'I believe my vehicle was towed, whom should I contact?​​​​​​',
                description: 'If you believe your vehicle was towed, please contact the Sacramento Police Department.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I find code compliance forms, like the demand request form?​​​​​​',
                description: 'Forms and Publications are available both online as well as at our Permit Service Counter.'
            },
            {
                id: generateSudoId(8),
                subType: 'What are the residential fencing requirements?​​​​​​',
                description: 'Fencing around residential properties is not required, except around a pool. '
            },
            {
                id: generateSudoId(8),
                subType: 'What can I do about noisy neighbors?​​​​​​',
                description: 'Excessive noise caused by the operation of non-mechanical devices, like amplified sound or musical instruments, should be reported to the Sacramento Police Department.'
            },
            {
                id: generateSudoId(8),
                subType: 'Do detached structures, like sheds or carports require a building permit?​​​​​​',
                description: 'Detached accessory structures, like a shed, carport, or playhouse, are not allowed in a front or side yard without a building permit.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Are owners responsible for maintaining weeds and grass on their properties?​',
                description: 'Lots with a building or other structure must be maintained even if they are not occupied. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​A property in my neighborhood is neglected, and storing junk and debris. What can be done?​',
                description: 'Property owners are legally required to maintain their property to the standards set forth in City Code. Properties that are neglected can be cited as a public nuisance.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can an inoperble or junk vehicle be stored on a driveway?​​​​​​',
                description: 'City code prohibits storing an inoperable or junk vehicle in a driveway or a side yard that is visible from the street.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Are street vendors allowed to operate within city limits?​',
                description: 'California law allows street vendors to operate.'
            },
            {
                id: generateSudoId(8),
                subType: 'Do home-based businesses require a license?​​​​​​',
                description: 'Businesses located at a residential address within City limits must obtain and maintain a Home Occupation Permit. '
            },
            {
                id: generateSudoId(8),
                subType: 'Can barbed wire be used on residential fencing?​​​​​​',
                description: 'Barbed wire, concertina wire, razor wire or similar materials, like embedded nails or broken glass, can cause significant injury and therefore are not permitted on residential property in Sacramento.'
            },
            {
                id: generateSudoId(8),
                subType: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.'
            },
            {
                id: generateSudoId(8),
                subType: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What can I do about graffiti in my neighborhood or on my property?​',
                description: 'The City of Sacramento\'s Community Development Department has a Graffiti Abatement Program designed to keep neighborhoods clean and attractive.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can a commercial property be fenced?​​​​​​',
                description: 'A permit may be required for fences on or around a commercial property.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I find the complete list of City code?​​​​​​',
                description: 'A complete list of Sacramento City Codes can be found online.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there any restrictions on using leaf blowers?​​​​​​',
                description: 'Portable gasoline-powered leaf blowers are permitted to be operated in the City during specific time frames. There are no restrictions on the use of electric leaf blowers.'
            },
            {
                id: generateSudoId(8),
                subType: 'What are the rules regarding personal marijuana cultivation?​​​​​​',
                description: 'In the City of Sacramento, it is legal to grow up to six marijuana plants for personal use.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Can the City help with mold problems at a rental property?​',
                description: 'While the City will not test for mold, a housing inspector will inspect for water leaks or causes of excessive moisture'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I check the burn day status?​​​​​​',
                description: 'The Check Before You Burn program implemented by the Sac Metro Air District provides residents with an easy way to check if burning is allowed. '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I open a cannabis related business, like a dispensary or manufacturing facility?​​​​​​',
                description: 'The City of Sacramento currently allows dispensaries, cultivation, nonvolatile manufacturing and testing in specific zones within the city, subject to a set of regulations.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I place signs and banners in the public right of way?​​​​​​',
                description: 'Signs and banners are generally not allowed in the public right-of-way.'
            },
            {
                id: generateSudoId(8),
                subType: 'Is there a requirement to maintain a vacant property?​​​​​​',
                description: 'Properties that are vacant and neglected can be cited as a public nuisance.'
            },
            {
                id: generateSudoId(8),
                subType: 'What can be done about a vacant lot that is not being maintained?​​​​​​',
                description: 'Vacant lots must be maintained to avoid becoming a fire hazard or neighborhood blight. '
            },
            {
                id: generateSudoId(8),
                subType: 'Is it legal to live in a vehicle?​​​​​​',
                description: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Is a permit required to have live music at a club or venue?​',
                description: 'Venues that provide ongoing entertainment are required to obtain and maintain a permit.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How are airport taxi companies selected?​',
                description: 'The Sacramento International Airport establishes it\'s own taxi cab & towing service contracts which are then administered by the County of Sacramento.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who removes abandoned or stray shopping carts?​​​​​​',
                description: 'The City will respond to reports of abandoned or stray shopping carts.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report an unsafe elevator?​​​​​​',
                description: 'The Cal OSHA Elevator Unit responds to public reports of unsafe, damaged or malfunctioning elevators in buildings open to the public, including privately owned and governmental office buildings and apartment buildings.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Drains',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'How do I report a clogged or flooded drain? ​​​​​​',
                description: 'To report a clogged drain, please call us so a crew can be dispatched as quickly as possible.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Homeless Camp',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'How is the City addressing homeless camps?​​​​​​',
                description: 'The City of Sacramento is actively engaged in regional efforts to prevent and end homelessness through the support of and participation in local initiatives'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there any homeless shelters operating within the City?​​​​​​',
                description: 'The City\'s winter shelter is up and running and bringing services to those most in need from December through March.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parking',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'My vehicle was booted, how can I have it removed?​​​​​​',
                description: 'Once a boot has been placed, an owner has 72 hours to pay the citations and the $100 boot fee.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What are the entrance and exit times at a City-owned garage when I have a reservation?​',
                description: 'In a City-owned garage, those with prepaid reservations may enter the lot as early as two hours before the event time and leave by 6 AM on the following day.'
            },
            {
                id: generateSudoId(8),
                subType: 'Is monthly parking available at garages or lots?​​​​​​',
                description: 'Monthly parking is offered at select garages and lots.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who enforces parking in private lots and gated communities?​​​​​​',
                description: 'In privately-owned lots not contracted by the City or in gated communities, Officers may only enforce fire lanes or disabled parking spot violations provided there is clear signage posted.  '
            },
            {
                id: generateSudoId(8),
                subType: 'When are parking hours enforced?​​​​​​',
                description: 'In an effort to manage the supply of on-street parking spaces and promote turnover, the City has established area-specific operating hours at metered and non-metered parking spaces.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I pay a parking IOU?​​​​​​',
                description: 'If you received an IOU for unpaid parking garage fees, your payment can be made in person at City of Sacramento Revenue Office or via U.S. mail.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I obtain a temporary parking pass for my visitors?​',
                description: 'If you live in an area with permitted parking and are expecting visitors, there are several ways to help your guests with parking.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I request a refund for a meter payment?​​​​​​',
                description: 'If you believe you have been overcharged due to an error at a parking meter or parking machine please complete a Refund Request Form to have your claim reviewed.  '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I dispute a parking citation?​​​​​​',
                description: 'If you believe a parking citation has been issued in error, it can be contested within 21 days of issue, via a written letter or online'
            },
            {
                id: generateSudoId(8),
                subType: 'What can I do if I am parked and blocked in by another vehicle?​​​​​​',
                description: 'If you are blocked in by another vehicle, we are unable to remove it.'
            },
            {
                id: generateSudoId(8),
                subType: 'I lost my monthly parking card. How can I get it replaced?​​​​​​',
                description: 'If a monthly parking card is lost, a Monthly Garage Access Card Application Agreement Form will need to be submitted to have the card replaced.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Are there special parking programs for electric vehicles?​',
                description: 'Electric vehicles that are owned or leased by individuals or enterprises are eligible for special monthly parking programs in designated City of Sacramento parking facilities.'
            },
            {
                id: generateSudoId(8),
                subType: 'What do the different curb colors mean?​​​​​​',
                description: 'Curbs are painted with different colors to signify different parking restrictions.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I extend my parking time?​​​​​​',
                description: 'If you parked at a meter that uses the Pay-by- Plate feature, it is possible to extend your parking time using the Parkmobile system.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I park on the sidewalk?​​​​​​',
                description: 'Parking a vehicle on the sidewalk obstructs the right of way and can pose a hazard for pedestrians.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I park in the bike lane?​​​​​​',
                description: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I cancel my monthly parking pass?​​​​​​',
                description: 'To cancel your monthly parking pass, please complete the Monthly Parking Change Order Form.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can on-street parking meters or spaces be reserved?​​​​​​',
                description: 'The City of Sacramento will accept reservations of metered parking spaces, and unmetered parking spaces for construction projects or special events.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there any parking discount programs available?​​​​​​',
                description: 'The City offers a variety of parking discount programs.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there any parking discounts for college students?​​​​​​',
                description: 'Carpool permits are available to Sacramento City College (SCC) students on a first-come, first-served basis. '
            },
            {
                id: generateSudoId(8),
                subType: 'What are the clearances at City-owned garages?​​​​​​',
                description: 'Below you will find the clearances for City owned garages.'
            },
            {
                id: generateSudoId(8),
                subType: 'What are the parking rules at the Amtrak lot?​​​​​​',
                description: 'Amtrak Lot 293 is available for unlimited parking.'
            },
            {
                id: generateSudoId(8),
                subType: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.'
            },
            {
                id: generateSudoId(8),
                subType: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I park at a broken meter?​​​​​​',
                description: 'There are several options you can take when you come across a broken meter.'
            },
            {
                id: generateSudoId(8),
                subType: 'In addition to obeying time limits, are there any other parking rules I should obey?​​​​​​',
                description: 'In addition to obeying posted time limits, there are some simple rules to keep in mind when parking to ensure you do not receive a parking citation.  '
            },
            {
                id: generateSudoId(8),
                subType: 'Are commercial vehicles allowed to park on a public street?​​​​​​',
                description: 'Commercial vehicles may park on a street for up to 72 hours, permitted they do not obstruct the sidewalk, prevent other vehicles from safely passing, or exceed the weight limit when in a residential area. '
            },
            {
                id: generateSudoId(8),
                subType: 'Can I continue to stay parked on the same block after the meter expires?​​​​​​',
                description: 'If you have exceeded the allowed time at a parking spot, City Code requires that the vehicle be moved at least two blocks. '
            },
            {
                id: generateSudoId(8),
                subType: 'I have questions about making a parking reservation, where can I find answers?​​​​​​',
                description: 'Answers to all of your parking reservation questions can be found online.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are parked vehicles allowed to block a driveway?​​​​​​',
                description: 'A parked vehicle may not block a driveway. '
            },
            {
                id: generateSudoId(8),
                subType: 'Are City-owned garages and lots monitored by a security company?​​​​​​',
                description: 'All City-owned parking facilities are monitored by 24-hour security staff.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there parking options available to contractors working on properties where parking is limited?​​​​​​',
                description: 'A resident or business in a metered or time-limited parking area may allow a building contractor to display the resident\'s visitor parking placard to park. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Is parking in an alley allowed?​',
                description: 'Parking in an alley is only allowed in specific situations.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I obtain security video from a City-owned garage or lot?​​​​​​',
                description: 'Parking garage and lot security camera recordings may be requested by submitting a public records request with the City Clerk. '
            },
            {
                id: generateSudoId(8),
                subType: 'Do City-owned garages have a lost and found?​​​​​​',
                description: 'Items found in a City-owned garage or lot are turned into the police department.'
            },
            {
                id: generateSudoId(8),
                subType: 'What holidays are included in free meter days?​​​​​​',
                description: 'The City offers free metered parking on several holidays.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report a vehicle that is illegally parked in a disabled parking space?​​​​​​',
                description: 'Vehicles parked without a placard may be cited by Parking Enforcement Officers. '
            },
            {
                id: generateSudoId(8),
                subType: 'Can I block the street to prevent or reserve parking?​​​​​​',
                description: 'The street is a public right-of-way and cannot be blocked or reserved unless a permit has been issued.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who can park in front of a home or business?​​​​​​',
                description: 'There is no ownership over the street parking available in front of a residence or business.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I find motorcycle parking?​​​​​​',
                description: 'Throughout the downtown area, designated motorcycle parking spaces can be found.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I share my monthly parking pass?​​​​​​',
                description: 'Monthly access cards are assigned to a single driver and may not be shared.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What type of parking meters does the City use?​',
                description: 'The City of Sacramento utilizes four different types of parking meters.'
            },
            {
                id: generateSudoId(8),
                subType: 'Does the City provide a press parking pass?​​​​​​',
                description: 'The City of Sacramento offers a parking "Press Pass" to qualifying members of the media free of charge. '
            },
            {
                id: generateSudoId(8),
                subType: 'Is it legal to live in a vehicle?​​​​​​',
                description: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours. '
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parks',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'How can I report criminal activity taking place at a park?​​​​​​',
                description: 'If you observe an emergency or life-threatening event in a City park, please dial 911.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​I think I lost a personal item at a City park, where can I check to see if it\'s been found?​',
                description: 'If you believe you lost an item at a City park, please call 916.808.6060 to check to see if it\'s been found.'
            },
            {
                id: generateSudoId(8),
                subType: 'I reserved space at a park and arrived to find someone already there. What can I do?​​​​​​',
                description: 'If you arrive at your reserved park space and find someone\'s already occupied the space, please 311 or 916.808.5011 so that a Park Ranger can be dispatched to assist.'
            },
            {
                id: generateSudoId(8),
                subType: 'Are there power outlets available at City-owned parks?​​​​​​',
                description: 'Electrical outlets are found in City parks only at some amphitheaters.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks. '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I reserve space at a City park?​​​​​​',
                description: 'City Parks are a favorite place for picnics, family get-togethers, and office outings. A Certificate of Park Use entitles you to a specific group picnic area in a City Park.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report concerns with lighting at a City park?​​​​​​',
                description: 'City staff maintains the lighting features at our parks. '
            },
            {
                id: generateSudoId(8),
                subType: 'Are motorized vehicles allowed in City parks?​​​​​​',
                description: 'City of Sacramento maintenance vehicles are the only vehicles permitted inside a City park.'
            },
            {
                id: generateSudoId(8),
                subType: 'My property borders a City park. Who is responsible for maintaining the fence?​​​​​​',
                description: 'When residential fences are along the property line of a City of Sacramento park, the property owner is solely responsible for the maintenance of the fence. '
            },
            {
                id: generateSudoId(8),
                subType: 'Do City parks have operating hours?​​​​​​',
                description: 'Sacramento City parks are open from sunrise to sunset every day of the year.  '
            },
            {
                id: generateSudoId(8),
                subType: 'Is drinking or smoking allowed in City parks?​​​​​​',
                description: 'The consumption of alcoholic beverages or smoking of any kind is prohibited in City parks at all times. '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I obtain a boat launch pass?​​​​​​',
                description: 'The City offers boat launch passes valid for use at Miller Park and Garcia Bend launch ramps.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for maintaining playground equipment at City parks? ​​​​​​',
                description: 'Park staff takes pride in maintaining the playground equipment so that it can be safely enjoyed.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who maintains the restrooms at City parks?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, including the public restrooms. '
            },
            {
                id: generateSudoId(8),
                subType: 'Who maintains City park grounds?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, athletic fields, and bike trails.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for mowing City parks?​​​​​​',
                description: 'The City makes regular mowing part of each park\'s scheduled maintenance.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Sewer',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: '​​​​​Can a missing or damaged manhole/sewer cover be replaced?​',
                description: 'Occasionally, manhole covers may become displaced, or even removed. This can pose a significant public hazard and should be reported immediately'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Solid Waste',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'I\'ve used my free junk appointments, can I pay for a pickup?​​​​​​',
                description: 'If you have used your free junk pickups, you may schedule a paid bulky waste pickup'
            },
            {
                id: generateSudoId(8),
                subType: 'I am missing a garbage, recycle, or organics can. Will the City deliver a replacement?​​​​​​',
                description: 'The City will replace a missing container free of charge.'
            },
            {
                id: generateSudoId(8),
                subType: 'I need assistance getting my trash cans out. Can the City help?​​​​​​',
                description: 'The City of Sacramento offers help to disabled customers needing assistance in getting their solid waste containers out for service'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I schedule a household junk pick-up?​​​​​​',
                description: 'The City provides two free appointments per calendar year for the removal of acceptable household junk, including yard waste.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I change the size of my garbage, recycle, or organics can?​​​​​​',
                description: 'Requests for a change in the size of garbage or recycle cans, regardless of whether it increases or decreases the monthly bill, must be made by the property owner.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I dispose of a Christmas tree?​​​​​​',
                description: 'If you receive yard waste services from the City of Sacramento, you can place Christmas trees in the street for pickup as part of the City\'s Leaf Season service.'
            },
            {
                id: generateSudoId(8),
                subType: 'What is leaf season? When is it?​​​​​​',
                description: 'From November 1st through January 31st, the City of Sacramento is in Leaf Season.During this time City collects piles of yard waste from the street without an appointment.'
            },
            {
                id: generateSudoId(8),
                subType: 'Will the City replace the wheel on my garbage, organics or recycle container?​​​​​​',
                description: 'Damaged containers will be repaired at the City\'s expense. '
            },
            {
                id: generateSudoId(8),
                subType: 'Will the City replace a broken or damaged lid on my garbage, recycle, or organics container?​​​​​​',
                description: 'If your garbage, recycle, or lawn and garden container have a broken or missing lid, let us know and we\'ll get it taken care of.'
            },
            {
                id: generateSudoId(8),
                subType: 'There is a stray can in my neighborhood. Can someone come to remove it?​​​​​​',
                description: 'If you find a stray container in your neighborhood, please report it so that it can be picked up by the Recycling Solid Waste team.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I contract with the City to provide commercial dumpster services?​​​​​​',
                description: 'The City of Sacramento does not provide commercial collection services.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I dispose of hazardous waste?​​​​​​',
                description: 'Products, such as paint cleaners, oil, batteries, and pesticides require special care and should not be thrown into residential waste containers.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can a household junk pick up be scheduled if I live on a private street?​​​​​​',
                description: 'Household junk pickups are provided to all properties with City garbage service, including those on private streets'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I dispose of used motor oil?​​​​​​',
                description: 'City of Sacramento residents can conveniently recycle used motor oil and motor oil filters without leaving home.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I schedule a battery and light bulb pickup?​',
                description: 'The door to door collection of batteries and bulbs was discontinued in August of 2019. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I schedule an EWaste/Electronics Pickup?​',
                description: 'All residential Solid Waste customers can schedule two appointments for appliance and e-waste collection in a calendar year.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​When are garbage containers delivered at newly built properties?​',
                description: 'Utility Billing: After a billing account has been created, a date for container delivery will be set-up.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​​​How can I request a recycle guide or dump coupon?​​​​​​',
                description: 'A printed recycle guide that includes a dump coupon is mailed out to every property mid-year.'
            },
            {
                id: generateSudoId(8),
                subType: 'Should I wash my recyclables before placing them in the bin?​​​​​​',
                description: 'When recycling approved materials, it is preferred that the items be clean of most residue.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can I change the day or frequency my recycling can is serviced?​​​​​​',
                description: 'The City recycling service is provided on a fixed every-other-week schedule. There is no ability to change the week your can is serviced. '
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I find my garbage collection days and set-up reminders?​​​​​​',
                description: 'Our collection calendar allows you to view, download, and print a service calendar specific to your address.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where should I store my City-issued trash cans?​​​​​​',
                description: 'Solid Waste containers must be placed in a storage location within, adjacent to, or behind a structure, building, fence, landscaping, or another barrier, which substantially screens the view of the containers from the street or public right-of-way.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.'
            },
            {
                id: generateSudoId(8),
                subType: 'How does the City address illegal dumping?​​​​​​',
                description: 'If you see a pile of debris on a public street, please report it.'
            }           
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Streets',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: '​​​​​Can I park in the bike lane?​',
                description: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Can I request a bike rack to be installed?​',
                description: 'Bike racks can be installed on City-owned property or right-of-way locations.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for the maintenance of curbs and gutters?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance of the public street-side curbs and gutters. Curbs and gutters on private property are the responsibility of the property owner.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Do I need a permit to block the sidewalk or street?​',
                description: 'A permit is required to perform work within the public right-of-way.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​​​Can I request speed bumps to be installed to deter speeding in my neighborhood?​​​​​​',
                description: 'Unless chronic speeding problems exist on your street, speed lumps are not warranted. Traffic control, such as police enforcement, is usually a better alternative'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report a damaged or malfunctioning street light?​​​​​​',
                description: 'If you observe a malfunctioning street light, street light on during the day, or a street light with damage, please report it.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for the maintenance of the sidewalk?​​​​​​',
                description: 'Sacramento City Code identifies property owners as responsible (including financially) to maintain the sidewalk adjacent to their property in such a way that it does not endanger persons, property, or interfere with public convenience.'
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report concerns with missing or damaged street signs?​​​​​​',
                description: 'The city maintains approximately 100,000 traffic and street name signs.'
            },
            {
                id: generateSudoId(8),
                subType: 'Can garbage cans or leaf piles be placed in the bike lane?​​​​​​',
                description: 'In many parts of Sacramento, cyclists are required to share the bike lane with leaf piles or garbage containers due to the limited amount of space for both.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I report concerns with a bike trail?​',
                description: 'The City of Sacramento maintains miles of bike trails. '
            },
            {
                id: generateSudoId(8),
                subType: 'How can I report junk or debris in the bike lane?​​​​​​',
                description: 'Occasionally, junk or debris is dumped in the bikeway making for dangerous conditions for riders. These conditions should be reported so that a City crew can respond and remove the material'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What is street resurfacing and when does it take place?​',
                description: 'The City resurfaces streets to maintain their safety.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who maintains City-owned landscaped areas like medians and streetscapes?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance and repair of public landscaping.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Does the City have any bike parking programs?​',
                description: 'The City of Sacramento offers both free and low-cost options for bicyclists who work, visit or live downtown.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for maintaining the street and addressing potholes?​​​​​​',
                description: 'The City of Sacramento maintains the public streets.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I report concerns with a traffic signal?​',
                description: 'Traffic Signal problems can pose serious public safety hazards and are responded to immediately.  '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Who maintains street markings?​',
                description: 'The City maintains street markings of many types.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Can I place a banner on a street pole?​',
                description: 'Placement of banners on city-owned light poles requires a permit from the City of Sacramento'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Urban Foresty',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Who removes fallen tree limbs in the public right-of-way?​​​​​​',
                description: 'The City\'s Urban Forestry department is responsible for the maintenance of City-owned street trees and for the removal of trees, or tree limbs, that are blocking the public right-of-way.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who maintains City trees and how can I request a tree be pruned?​​​​​​',
                description: 'The City of Sacramento\'s Urban Forestry division provides maintenance to city street trees, trees in the public right-of-way, and trees on City property.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Who can remove tree limbs in power lines?​',
                description: 'The removal of trees in power lines requires specialized methods and training and is therefore performed by SMUD. '
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Utility Billing',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'How can I contact the Utility Billing Department?​​​​​​',
                description: 'There are a variety of ways to contact the Utilities Billing Department.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​I have a rental property, who is responsible for the utility payments?​',
                description: 'Regardless of who occupies a home, the property owner is ultimatley responsible for costs relating to billed City services such as water, sewer, storm drain, and solid waste services.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Water',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'What is the standard City water pressure?​​​​​​',
                description: 'Standard water pressure in the City of Sacramento is 35-42 psi.'
            },
            {
                id: generateSudoId(8),
                subType: 'Does the City address water misuse?​​​​​​',
                description: 'If you observe water misuse taking place, please report it. Our Water Conservation team will work with the property owner to provide education on water conservation.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Why does my drinking water smell during the summer?​',
                description: 'Every summer, river water levels drop, and outside temperatures rise. These seasonal changes along with the presence of certain nutrients in the water can cause a change in smell and taste of our drinking water'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Am I able to request the water be turned off or on for repairs?​',
                description: 'Water can be turned off or on to allow repairs to take place.'
            },
            {
                id: generateSudoId(8),
                subType: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks. '
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​What are the current watering guidelines?​',
                description: 'While emergency watering restrictions ended in August 2017, the City of Sacramento made long-term water conservation a way of life by adopting a permanent watering schedule of two days-per-week from March through October, and one day-per-week from November through February.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​How can I reach the Water Conservation staff?​',
                description: 'Water Conservation Department staff is available to answer your questions or concerns.'
            },
            {
                id: generateSudoId(8),
                subType: 'Is the City still in the process of upgrading water meters?​​​​​​',
                description: 'The City\'s water meter replacement project began in May 2017 and is scheduled to continue through 2021.'
            },
            {
                id: generateSudoId(8),
                subType: 'I received a notice about the quality of my drinking water. Is it legitimate?​​​​​​',
                description: 'When water quality issues have been identified, the City will issue water advisory notices in conjunction with the State Water Resource Board.'
            },
            {
                id: generateSudoId(8),
                subType: '​​​​​Where can I find the latest water quality report?​',
                description: 'The latest available water quality report is available online.'
            },
            {
                id: generateSudoId(8),
                subType: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'Where can I pay a City invoice or utility bill?'
            }
        ]
    }
]