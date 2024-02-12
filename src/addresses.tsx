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

export const requestTypes = [
    {
        id: generateSudoId(8),
        type: 'Animal Care',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Contact Front Street Shelter',
                description: 'Questions about adoptions, spay/neuter resources, found animals, licensing and barking.'
            },
            {
                id: generateSudoId(8),
                subType: 'Dead Animal',
                description: 'Report a dead animal in the public right of way.'
            },
            {
                id: generateSudoId(8),
                subType: 'General: Animal Control',
                description: 'General Animal Control Questions'
            },
            {
                id: generateSudoId(8),
                subType: 'Pet Complaint or Concerns',
                description: 'Report concerns with an owned animal.'
            },
            {
                id: generateSudoId(8),
                subType: 'Stray or Loose Animal',
                description: 'Report an injured, sick, or aggressive stray animal.'
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Building and Planning',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Building and Planning',
                description: 'Questions or concerns regarding building, planning, or zoning.'
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Business Resources',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Access to Capital',
                description: 'Connecting businesses to lending partners and grant opportunities.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Assistance/Professional Services',
                description: 'Business technical assistance including, but not limited to: accounting, human resources, marketing, operations, site selection, strategic planning, succession planning, e-commerce, legal structure, etc.',
            },
            {
                id: generateSudoId(8),
                subType: 'Economic Data',
                description: 'Assistance obtaining economic data including geographic and commercial real estate information through a variety of data sources such as ESRI and CoStar.',
            },
            {
                id: generateSudoId(8),
                subType: 'Environmental Brownfields Assistance',
                description: 'Financial and technical assistance for brownfields assessment and remediation.',
            },
            {
                id: generateSudoId(8),
                subType: 'Financial Empowerment',
                description: 'Free one-on-one financial navigation and coaching.',
            },
            {
                id: generateSudoId(8),
                subType: 'General: Business Resources',
                description: 'For general business assistance and resource service requests.',
            },
            {
                id: generateSudoId(8),
                subType: 'Navigating City of Sacramento Permits and Regulatory Environment',
                description: 'Assistance with permits (entertainment, business operations tax certificates, planning and building assistance, etc.), new or existing rules and regulations, etc.',
            },
            {
                id: generateSudoId(8),
                subType: 'Workforce Development & Training',
                description: 'Resources for employers, and job and workforce readiness.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Code Enforcement',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Auto Repair',
                description: 'Report a home-based auto repair business or major auto repair taking place on the street.',
            },
            {
                id: generateSudoId(8),
                subType: 'Basketball Hoop in Public Right of Way',
                description: 'Report a basketball hoop on the street or sidewalk.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Compliance Entertainment',
                description: 'Report concerns with taxi\'s, entertainment venues like pubs or clubs.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Compliance Shopping Cart',
                description: 'Report a stray shopping cart.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Compliance Short Term Rental',
                description: 'Report a concern with a short term rental.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Compliance Taxi Cab',
                description: 'Report a concern with a taxi cab.',
            },
            {
                id: generateSudoId(8),
                subType: 'Business Compliance Weeds',
                description: 'Report a lot with overgrown weeds or grass.',
            },
            {
                id: generateSudoId(8),
                subType: 'General: Code Enforcement',
                description: 'Questions regarding code or housing enforcement policies.',
            },
            {
                id: generateSudoId(8),
                subType: 'Graffiti',
                description: 'Report graffiti on public and/or private property.',
            },
            {
                id: generateSudoId(8),
                subType: 'Housing Complaint',
                description: 'Report structural or electrical concerns with a property.',
            },
            {
                id: generateSudoId(8),
                subType: 'Junk & Debris',
                description: 'Report junk, debris, or trash on private property, in a front, rear or side yard or on a vacant lot. To report Illegal Dumping on a public street, please go to Solid Waste – Illegal Dumping. For dumping and trash related to encampments, use Homeless Camp – Trash.',
            },
            {
                id: generateSudoId(8),
                subType: 'Landscaping',
                description: 'Report concerns with overgrown landscaping encroaching on the public right of way.',
            },
            {
                id: generateSudoId(8),
                subType: 'Mechanical Noise Complaint',
                description: 'Report mechanical noise like an air conditioner or leaf blower.',
            },
            {
                id: generateSudoId(8),
                subType: 'Occupied Trailer On Private Property',
                description: 'Report an occupied trailer or RV parked on private property.',
            },
            {
                id: generateSudoId(8),
                subType: 'Pest',
                description: 'Report roaches, mice, or rats in a rented property.',
            },
            {
                id: generateSudoId(8),
                subType: 'Fences',
                description: 'Report a downed or damaged fence or an unfenced pool.',
            },
            {
                id: generateSudoId(8),
                subType: 'Signs, Banners, or Fliers',
                description: 'Report illegal signage in the public right of way.',
            },
            {
                id: generateSudoId(8),
                subType: 'Stagnant Water',
                description: 'Report an unkempt pool, or other stagnant water causing mosquitos.',
            },
            {
                id: generateSudoId(8),
                subType: 'Vehicle on Private Property',
                description: 'Report a non-operational vehicle on private property, like a driveway.',
            },
            {
                id: generateSudoId(8),
                subType: 'Vehicle Abandoned on Street',
                description: 'Report a vehicle parked on a City street in excess of 72 hours.',
            },
            {
                id: generateSudoId(8),
                subType: 'Work Without a Permit',
                description: 'Report construction work believed to be taking place without a permit.',
            },
            {
                id: generateSudoId(8),
                subType: 'Yard or Garage Sale Complaint',
                description: 'Report a property holding excessive yard or garage sales.',
            },
            {
                id: generateSudoId(8),
                subType: 'Zoning: Detatched Accessory Structure',
                description: 'Report a detached structure like a carport or shed in the front or rear yard.',
            },
            {
                id: generateSudoId(8),
                subType: 'Zoning: Fencing',
                description: 'Report a downed or damaged fence or an unfenced pool.',
            },
            {
                id: generateSudoId(8),
                subType: 'Zoning: Home Occupation',
                description: 'Report an unlicensed home-based business.',
            },
            {
                id: generateSudoId(8),
                subType: 'Zoning: Improper Land Use or Overpavement',
                description: 'Report an unauthorized recycling center or overly paved front yard.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Drains',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Drains',
                description: 'Non-urgent general drains questions. Please call for situations that require immediate attention.',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Homeless Camp',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Homeless Concern',
                description: 'Report a camp or homeless concern on public property, excluding a park or bike trail.',
            },
            {
                id: generateSudoId(8),
                subType: 'Homeless Camp-Trash',
                description: 'To report trash from a homeless camp.',
            },
            {
                id: generateSudoId(8),
                subType: 'Homeless Encampment 500ft from School',
                description: 'Homeless Encampment Blocking Sidewalk',
            },
            {
                id: generateSudoId(8),
                subType: 'Homeless Camp at Park or Bike Trail',
                description: 'Report a homeless camp at a park or bike trail.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parking',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Broken Meter or Payment Machine',
                description: 'Report a broken or malfunctioning meter or payment machine.',
            },
            {
                id: generateSudoId(8),
                subType: 'Customer Service: Parking',
                description: "Questions regarding monthly parking, IOU's, or requests to contact Parking Staff.",
            },
            {
                id: generateSudoId(8),
                subType: 'Enforcement Request',
                description: 'Report parking violations (blocking hydrant, parked in "no parking," etc.)',
            },
            {
                id: generateSudoId(8),
                subType: 'General: Parking',
                description: 'General questions regarding parking policies or procedures.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parks',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Broken or Damaged Park Fence or Gate',
                description: 'Report concerns with a fence or gate at a City Park.',
            },
            {
                id: generateSudoId(8),
                subType: 'General: Parks',
                description: 'Questions about park policies or procedures.',
            },
            {
                id: generateSudoId(8),
                subType: 'Grounds Cleaning',
                description: 'Request grounds cleaning or removal of trash at a City Park.',
            },
            {
                id: generateSudoId(8),
                subType: 'Irrigation',
                description: 'Report concerns with sprinkler or irrigation systems at a City Park.',
            },
            {
                id: generateSudoId(8),
                subType: 'Mowing or Trimming Request',
                description: 'Request mowing or trimming of trees or landscapes at a City Park.',
            },
            {
                id: generateSudoId(8),
                subType: 'Other Park Concern',
                description: 'Report a non-listed concern to our Parks Department.',
            },
            {
                id: generateSudoId(8),
                subType: 'Park Playground',
                description: 'Report concerns with playground or court equipment.',
            },
            {
                id: generateSudoId(8),
                subType: 'Request a Park Ranger',
                description: 'Request a Park Ranger for safety concerns.',
            },
            {
                id: generateSudoId(8),
                subType: 'Restrooms',
                description: 'Request clean up or maintenance for a park restroom.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Sewer',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Sewer',
                description: 'General sewer questions.'
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Shared Rideables',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Bird',
                description: 'Report an illegally parked BLACK BIRD bike or scooter.',
            },
            {
                id: generateSudoId(8),
                subType: 'Helbiz',
                description: 'Report an illegally parked BLUE and BLACK HELBIZ scooter.',
            },
            {
                id: generateSudoId(8),
                subType: 'Lime',
                description: 'Report an illegally parked GREEN LIME bike or scooter .',
            },
            {
                id: generateSudoId(8),
                subType: 'Razor',
                description: 'Report an illegally parked RED and BLACK RAZOR bike or scooter.',
            },
            {
                id: generateSudoId(8),
                subType: 'Superpedestrian',
                description: 'Report an illegally parked Superpedestrian scooter.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Solid Waste',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Solid Waste',
                description: 'Questions or concerns regarding Solid Waste policies or procedures. For assistance with a container issue, such as repair, replacement or missing cans please call 311.',
            },
            {
                id: generateSudoId(8),
                subType: 'Illegal Dumping',
                description: 'Report illegal dumping on a public street. For dumping and trash related to encampments, use Homeless Camp – Trash. For Junk and Debris on private property use Code Enforcement – Junk & Debris.',
            },
            {
                id: generateSudoId(8),
                subType: 'Missed Weekly Collection',
                description: 'Report a missed or partially serviced container.',
            },
            {
                id: generateSudoId(8),
                subType: 'Noise Complaint - RSW',
                description: 'General noise complaint.',
            },
            {
                id: generateSudoId(8),
                subType: 'Recycle Guide or Dump Coupon Request',
                description: 'Request a replacement dump coupon or recycle guide.',
            },
            {
                id: generateSudoId(8),
                subType: 'Schedule an Appointment Based Pick-Up',
                description: 'Request an appliance/ewaste, or motor oil appointment. Contact information is required to schedule any appointment based pick-up. Free household junk appointments have all been filled for this year. Scheduling will resume in February 2024.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Streets',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'Bike Rack Issues',
                description: 'Report concerns with existing bike racks or request a new bike rack installation.',
            },
            {
                id: generateSudoId(8),
                subType: 'Bikeway Issues',
                description: 'Report concerns with a bikeway, such as unsafe conditions like trash, or glass.',
            },
            {
                id: generateSudoId(8),
                subType: 'Curb or Gutter',
                description: 'Report concerns regarding a curb or gutter such as unsafe conditions, or grading issues.',
            },
            {
                id: generateSudoId(8),
                subType: 'General: Streets',
                description: 'General questions regarding policies and procedures about City Streets.',
            },
            {
                id: generateSudoId(8),
                subType: 'Pothole',
                description: 'Report a pothole on a City street.',
            },
            {
                id: generateSudoId(8),
                subType: 'Street Lighting',
                description: 'Report a malfunctioning lighting fixture, including street lamps.',
            },
            {
                id: generateSudoId(8),
                subType: 'Sidewalk',
                description: 'Report a broken, damaged, or unsafe sidewalk.',
            },
            {
                id: generateSudoId(8),
                subType: 'Signs and Markings',
                description: 'Report missing or damaged signs or repainting of street markings.',
            },
            {
                id: generateSudoId(8),
                subType: 'Street Maintenance',
                description: 'Report items blocking a lane of traffic.',
            },
            {
                id: generateSudoId(8),
                subType: 'Streetscapes',
                description: 'Report concerns with the landscaped section between the sidewalk & street, like overflowing sprinklers.',
            },
            {
                id: generateSudoId(8),
                subType: 'Traffic Investigation',
                description: 'Request new speed bumps, signage, or street markings.',
            },
            {
                id: generateSudoId(8),
                subType: 'Traffic Signals',
                description: 'Report a malfunctioning traffic signal.',
            },
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Urban Forestry',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Urban Forestry',
                description: 'Questions regarding urban forestry policies or procedures.'
            },
            {
                id: generateSudoId(8),
                subType: 'Tree Service Request',
                description: 'Request inspection or maintenance of a protected or City tree.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Utility Billing',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Utility Billing',
                description: 'General utility billing questions.'
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Water',
        subTypes: [
            {
                id: generateSudoId(8),
                subType: 'General: Water',
                description: 'General water service questions.',
            },
            {
                id: generateSudoId(8),
                subType: 'Water Conservation',
                description: 'Request information about virtual Water Wise House Calls, business and residential water conservation rebates or leak investigation if a leak letter was received.',
            },
            {
                id: generateSudoId(8),
                subType: 'Water Use Complaint',
                description: 'Report a water use concern.',
            },
        ]
    }
]