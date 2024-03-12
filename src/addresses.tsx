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
export const answerTypes = [
    {
        id: generateSudoId(8),
        type: 'Animal Control',
        questions: [
            {
                id: generateSudoId(8),
                question: '​​​​​​​Can I receive a citation for failing to license my pet?',
                description: '​​​​​​​Owners of unlicensed pets may receive citations and incur up to a $300 fee.',
                answer: 'When it is time for Sacramento pet owners to renew their pet’s license, we will send an initial courtesy letter reminding them to license. If they have not renewed their license within 30 days, a second letter will be sent stating that non-compliance will result in a correctable citation. Should non-compliance continue, the pet owner will receive a correctable $300 citation (pursuant to SCC 9.44.490/430), which will be waived if a license is obtained within 30 days of receiving the citation. Failure to license within the stated grace period will result in a permanent citation in the full amount of $300. \n\nThe goal of the program is not to penalize City residents, but to provide a more consistent educational and explanatory process that will increase compliance',
            },
            {
                id: generateSudoId(8),
                question: 'Does Front Street accept donations?​​​​​​',
                description: 'Your support helps provide quality care for more than 11,000 animals that come to our shelter each year',
                answer: 'The Front Street shelter relies on donations to provide many of it’s programs, services, and life-saving outcomes. You can make a monetary donation or donate physical items by following the instructions on the shelter’s “Donate” page of their website: https://www.cityofsacramento.org/Community-Development/Animal-Care/Donate',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Is there a fee for claiming a lost pet at Front Street?​',
                description: 'When an animal has been impounded at the Front Street Shelter, a fee may be imposed before the animal is released to its owner.',
                answer: 'When an animal has been impounded at the Front Street Shelter, a fee may be imposed before the animal is released to its owner. The shelter\'s goal is to get pets back home, please go to the shelter and speak to them about reclaiming your pet and discuss any associated fees. Animal redemption fees are only discussed in person.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I find free pet food?​',
                description: 'Through the Front Street Animal Shelter\'s Titanic\'s Pantry, free dog and cat food is offered to Sacramento residents in need.',
                answer: 'There are several free dog and cat food resources in Sacramento. These can be found at https://www.cityofsacramento.org/Community-Development/Animal-Care/General-Information/Pet-Food-Pantry \n\nFood distributed at Titanic\'s Pantry is donated, so the type of food offered varies daily, and food may not always be available. ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I take feral cats to be spayed or neutered?​',
                description: 'The Sacramento SPCA offers free feral cat spay/neuter surgeries every Sunday',
                answer: 'There are several organizations that offer spay/neuter for feral cats. A list of these resources can be found on the “Services” tab of the shelter’s website or at https://www.cityofsacramento.org/Community-Development/Animal-Care/General-Information/Feral-Cats',
            },
            {
                id: generateSudoId(8),
                question: 'What are pet licenses and how can I obtain or renew one?​​​​​​',
                description: 'The Front Street Animal Shelter issues pet licenses for residents who reside within the Sacramento city limits.',
                answer: 'The Front Street Animal Shelter issues pet licenses for residents within the Sacramento city limits. If you reside in the county limits of Sacramento, please license your pet with the Bradshaw Animal Shelter. \n\nLicenses are required by state law. \n\nThe Front Street Animal Shelter has partnered with DocuPet to provide an enhanced pet licensing experience for City of Sacramento residents. Dog and cat licenses can now be purchased and renewed at CityofSacramento.DocuPet.com. This new, easy-to-use online licensing service provides a quick and easy process to license your pet in the City of Sacramento.\n\nIf you are having difficulty purchasing a license, please contact Docupet Customer Service first. They can be reached at 877-239-6072 or info@docupet.com. If they are not able to resolve your concern, please call back and we will connect you with a shelter customer service rep.\n\nWhen your license is due, you will receive notifications by mail and email. Discounts are available for spayed/neutered animals and for seniors.\n\nInformation on fees and discounts, as well as other information about licensing can be found at https://www.cityofsacramento.org/Community-Development/Animal-Care/Pet-Licenses',
            },
            {
                id: generateSudoId(8),
                question: 'How can I volunteer at Front Street?​​​​​​',
                description: 'The Front Street Animal Shelter is always interested in volunteers who want to help our animals find their new forever homes',
                answer: 'The Front Street Animal Shelter is always interested in volunteers who want to help our animals find their new forever homes. We couldn\'t do it without our committed volunteers! You can be involved in a variety of ways, helping with morning cleaning, the pet food pantry, training the dogs, socializing the cats, fostering animals, special projects, fundraisers &events, and much more!\n\nMore information on volunteer opportunities for teens and adults, senior projects and community service projects, along with our online application and orientation videos, can be found at https://www.cityofsacramento.org/Community-Development/Animal-Care/Volunteer',
            },
            {
                id: generateSudoId(8),
                question: 'What can I do about stray cats?​​​​​​',
                description: 'The City of Sacramento considers cats to be free-roaming animals, regardless of whether they are owned or feral.',
                answer: 'The City of Sacramento considers cats to be free-roaming animals, regardless of whether they are owned or feral. Unlike dogs, cats may roam freely throughout the City, are not required to be on a leash, and do not need to be confined on the owner\'s property.\n\nThe City will only respond to issues involving cats when the animal is sick or injured.\n\nIf you have feral cats in your neighborhood, please visit https://www.coalition4cats.org/ for information on living with feral cats.\n\nThe City discourages the trapping of healthy cats unless strictly for the purpose of spaying or neutering. The relocation of cats is a violation of state law.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I surrender a pet at Front Street?​​​​​​',
                description: 'The City of Sacramento Animal Care Services does not accept owned animal surrenders.',
                answer: 'The City of Sacramento Animal Care Services does not accept owned animal surrenders.\n\nTo surrender an owned animal, please call the Sacramento SPCA at 916-383-7387. An appointment is needed.',
            },
            {
                id: generateSudoId(8),
                question: 'Can you help me find a lost pet?​​​​​​',
                description: 'If your pet has been lost, we encourage you to text STRAY to 555888 to get a free pet-finding guide with video tutorials & links to our shelter\'s lost pets every 3 days.',
                answer: 'If your pet has been lost, we encourage you to text LOST to 833-511-0426 to get video tutorials, links to pages to post your lost pet, and a link to the shelter’s new animals every 3 days. You can also go to https://www.cityofsacramento.org/Community-Development/Animal-Care/Lost-and-Found.\n\nOur online listing of stray animals is updated every hour. The online listing only displays LIVE animals that were either picked up by one of our animal control officers or brought to the shelter by concerned citizens. Deceased animals are NOT shown on the website, but their descriptions and location found are listed in a binder at the shelters front office. \n\nAnimals dropped off to the shelter will be held for a minimum of 3 days in order to give an owner the opportunity to look for his/her lost pet. The hold is extended if an animal has a microchip or if an animal is wearing a license tag, a rabies tag, and/or a personalized tag. If we receive information that the owner has been incarcerated or hospitalized, we will extend the hold in those situations as well. Once the holding period has ended, an animal may be placed for adoption, transferred to another shelter or rescue group, or be placed in the shelter\'s foster care system. An animal may be euthanized immediately if the animal is suffering from a serious medical condition or injury and/or is not responding to treatment. Also, if an animal does not pass the behavior evaluation, the animal may be euthanized.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find free or low cost spay or neuter services?​​​​​​',
                description: 'If you live in the City of Sacramento and meet income guidelines, we may be able to assist you in getting your animal spayed or neutered.',
                answer: 'Several programs exist to provide low cost spay and neuter. A current list of programs can be found on the shelter\'s website https://www.cityofsacramento.org/Community-Development/Animal-Care/General-Information',
            },
            {
                id: generateSudoId(8),
                question: 'I found a pet. What should I do?​​​​​​',
                description: 'If you have found a lost pet, we encourage you to fill out a found animal report.  ',
                answer: 'If you have found a lost pet, it is very helpful to the shelter if you can hold onto them until the owner is found, or for at least a couple days before bringing them to the shelter. Tips for finding an owner can be found at cityofsacramento.org/found\n\nIf you\'ve found a stray animal and are interested in keeping it if its owner isn\'t found, the City of Sacramento advises that you keep the animal in your care. If after 90 days of diligently looking for the owner, one is not found, you will legally become the animal\'s owner.\n\nIf you dropped off a found animal at the shelter, and now would like to adopt it, you will need to go through the adoption process once the animal becomes available.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I foster animals for Front Street?​​​​​​',
                description: 'Foster homes provide an alternative to the shelter’s kennel environment for animals in need of time, attention, care, socializing and recovery.',
                answer: 'Yes, you can sign up to foster at this link Become a foster volunteer today!. You will need to take an online class before you can foster. More information about fostering:\n\nFoster homes provide an alternative to the shelter’s kennel environment for animals in need of time, attention, care, socializing, and recovery. Foster families provide special attention and time that shelter staff cannot.\n\nMany dogs & cats cannot go directly into the shelter’s adoption program due to health, behavioral issues, or age. Young kittens & puppies need foster care until they are 8 weeks old, at which time they can be legally adopted. Sick or injured animals need foster care until they are well enough for adoption. In some cases, a foster home is needed to help an animal transition from the stress of having been abandoned at a shelter.\n\nWhat does a Foster Family do?\n\n-Provide a safe, clean, caring environment\n-Provide food, water, litter, toys, playtime, & lots of love (the shelter provides supplies to foster families, as needed!)\n-Provide exercise & socialization as appropriate; as well as monitor medical and/or behavioral issues\n-Transport to/from any necessary vet appointments or offsite adoption events.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I microchip my pet?​​​​​​',
                description: 'For owned animals, microchipping is available at the Free Vaccination and Microchip Clinic.',
                answer: 'For owned animals, microchipping is available at a private veterinarian or the Free Vaccination and Microchip Clinic.',
            },
            {
                id: generateSudoId(8),
                question: 'How many pets can one home have?​​​​​​',
                description: 'Each household within the city limits of Sacramento can have no more than 3 dogs and 7 cats.',
                answer: 'Each household within the city limits of Sacramento can have no more than 3 dogs and 7 cats. A dog is counted towards that limit if the dog is over the age of 4 months, while a cat is counted towards that limit if the cat is over the age of 2 months (see Sacramento City Code 9.44.370). Service animals do not count towards these totals.\n\nIn addition, it is permissible for a resident within the city limits of Sacramento to own a potbelly pig. A potbelly pig cannot be more than 22 inches high at the shoulder or weigh more than 150 pounds. Also, any male potbelly pig over the age of 4 months must be neutered (see Sacramento City Code 9.44.320). The number of potbelly pigs allowed is no more than 3, however, this limit is connected to the limit of dogs. In other words, a resident is not allowed more than a combination of 3 dogs and potbelly pigs.\n\nTo report a home exceeding the allowed limits, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Does Front Street provide euthanasia services?​',
                description: 'Due to the shelter\'s limited capacity, we are not able to provide euthanasia services for owned animals.',
                answer: 'Due to the shelter\'s limited capacity, we are not able to provide euthanasia services for owned animals.\n\nFor assistance with this service, please contact the Sacramento SPCA at 916-504-2851. You will have to make an appointment with them directly. If the SPCA isn\'t an option, contact your local vet to assist.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What is Front Street Shelter\'s Tax ID number?​',
                description: 'Front Street\'s Shelter Tax ID number is 94-6000410. ',
                answer: 'Front Street\'s Shelter Tax ID number is 94-6000410. \n\nFront Street\'s primary non-profit group, Friends of Front Street Shelter, is a 501(c)(3). Their  EIN number is 68-0477042.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What can be done about aggressive animals?​',
                description: 'The City of Sacramento Animal Control Department will respond to reports of loose animals that are actively threatening the health of a human or animal.',
                answer: 'The City of Sacramento Animal Control Department will respond to reports of loose animals that are actively threatening the health of a human or animal.\n\nTo report an aggressive animal, please call us at 311 or 916.808.5011 so that we can respond immediately.',
            },
            {
                id: generateSudoId(8),
                question: 'What can be done about excessive barking?​​​​​​',
                description: 'When a complaint is received, the City of Sacramento Animal Care Services will notify dog owners via mail that his/her dog is creating a nuisance.',
                answer: 'Animals make noise - dogs bark, cats meow, and roosters crow. Some people are "sound-sensitive" and have little tolerance for such noises, while others are very tolerant and may not even notice. Most people don\'t complain until the noise becomes unbearable or constant. Then, they want a quick resolution to the problem.\n\nWhen a complaint is received, the City of Sacramento Animal Care Services will notify dog owners via mail that his/her dog is creating a nuisance. The dog owner will also receive educational material to help facilitate behavior modification as well as alternative suggestions for improvement.\n\nWhile we try to educate the dog owner with possible solutions, it is unrealistic to think the problem can be rectified immediately. There are certainly some distractions that could be considered acceptable, such as cats, wildlife, trespassers, and playing. Even though there may be acceptable forms of barking, they will not necessarily be considered as an acceptable excuse for excessive or annoying barking. Please recognize that behavior modification is not an overnight occurrence and that changing behavior will take time and patience.\n\nWe recommend that you speak with the dog owner about the problem and explain that the barking is disturbing. Many owners believe that if there are no complaints, then the neighbors are comfortable with the situation. Often, however, the owners are not home during the episodes and are completely unaware of the problem.\n\nIf speaking to an owner is not an option, or has not been successful a complaint may be filed with the 311 Call Center. To file a request, you will need to provide the following:\n\n-The exact address where the dog lives\n-Your first and last name, as well as your mailing address. Barking dog complaints will not be accepted anonymously.\n\nAfter filing a complaint, the following will take place:\n\nNotices will be mailed to the dog owner. The complainant’s personal information is not provided to the dog owner.\nThe dog owner is given 30 days to correct the situation. If after 30 days from your initial complaint, the problem is not modified to a reasonable level, contact 311 again. A second letter will be mailed to the dog owner advising them that failure to comply may result in an administrative citation (SCC 9.44.220c). \n\nThe Barking Abatement Unit will determine a resolution based on the information provided by all parties. If the dog owner receives and appeals an administrative citation, you will be required to testify at the appeal hearing.',
            },
            {
                id: generateSudoId(8),
                question: 'My neighbor\'s dog is always loose, what can I do?​​​​​​',
                description: 'While dogs may run freely on their own property (or within a designated "Dog Park" area), they must be on a leash all other times',
                answer: 'While dogs may run freely on their own property (or within a designated "Dog Park" area), they must be on a leash all other times. Animal Control will address complaints of owned animals who are allowed to run loose outside of their property.\n\nTo report an unleashed dog, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'What can be done about aggressive wildlife?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is actively threatening the well-being of a human or animal.',
                answer: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is actively threatening the well-being of a human or animal. Wildlife can be defined as a non-domesticated animal such as squirrels, snakes, bats, raccoons, etc.\n\nTo report aggressive wildlife, please call us at 311 or 916.808.5011 so that we can respond immediately. ',
            },
            {
                id: generateSudoId(8),
                question: 'Who can help a stray animal that appears to be sick or injured?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a stray animal that is showing signs of illness or has a visible injury.',
                answer: 'The City of Sacramento Animal Control Department will respond to complaints of a stray animal that is showing signs of illness or has a visible injury. A stray is defined as a domestic animal (i.e. cat, dog) whose owner is unknown.\n\nTo report a stray animal that appears to be sick or injured, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​I was bitten by an animal. What should I do?​',
                description: 'The City of Sacramento Animal Control Department will investigate any complaint of an animal bite.',
                answer: 'The City of Sacramento Animal Control Department will investigate any complaint of an animal bite.\n\nA bite is defined as an injury (scratch or bite) inflicted by a dog or cat that has broken the skin of a person. Animal Care Officers will respond to reports of animal bites that occur within the City of Sacramento or involve an animal that lives within the City of Sacramento.\n\nTo report a bite, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'What can be done about nuisance wildlife?​​​​​​',
                description: 'The City does not have an active control or eradication program for native wildlife.',
                answer: 'The City does not have an active control or eradication program for native wildlife. In most cases, the best solution is to accept those wild creatures are residents of Sacramento also and develop ways to coexist with them.\n\nIf wildlife (including skunks, raccoons, squirrels, etc.) have become a nuisance, you can make your property less attractive by removing potential food sources such as outdoor pet food, koi ponds, and fallen tree fruit. You can also ensure that potential den areas, such as crawl spaces are not accessible. We encourage you to speak with your neighbors about taking similar precautions.  \n\nThe Front Street Shelter discourages residents from trapping wildlife.  If necessary, check local listings for a pest control organization to assist with wildlife removal.',
            },
            {
                id: generateSudoId(8),
                question: 'My pet died. Can Front Street help?​​​​​​',
                description: 'Deceased pets may be buried on the owner\'s property, taken to a veterinary clinic, pet cemetery, or rendering plant. ',
                answer: 'Deceased pets may be buried on the owner\'s property, taken to a veterinary clinic, pet cemetery, or rendering plant. Some veterinary organizations offer mobile support and may pick up dead animals. Wildlife control companies may also offer on-site services.\n\nIn the City of Sacramento, animals weighing less than 10 pounds may be deposited in City garbage containers.',
            },
            {
                id: generateSudoId(8),
                question: 'My pet was stolen. Can you help?​​​​​​',
                description: 'Animal Control is unable to assist with concerns regarding a stolen pet.',
                answer: 'Animal Control is unable to assist with concerns regarding a stolen pet. Pets are considered property and should be reported as stolen to the Police.\n\nTo report a stolen pet please call the non-emergency police line at 916-808-5471 and select option 3 to file the report.',
            },
            {
                id: generateSudoId(8),
                question: 'Who removes dead animals in the street or sidewalk?​​​​​​',
                description: 'A Sacramento City Animal Control Officer will respond to requests to remove a dead animal from the public right-of-way.',
                answer: 'A Sacramento City Animal Control Officer will respond to requests to remove a dead animal from the public right-of-way. The public right of way is defined as the sidewalk, street, or gutter.\n\nIf an animal has died on your property and weighs less than 10 lbs, you may dispose of it in your trash.\n\nTo report a dead animal in the public right of way, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'How long can an animal be tethered?​​​​​​',
                description: 'Within the City of Sacramento limits, it is not permissible to tether an animal (on a leash, attached to a fixed object) for longer than a total of 3 hours in a 24 hour period.',
                answer: 'Within the City of Sacramento limits, it is not permissible to tether an animal (on a leash, attached to a fixed object) for longer than a total of 3 hours in a 24 hour period.\n\nExceptions are made for animals tethered to a cable run system.\n\nTo report an animal being tethered excessively, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I report suspected animal cruelty?​',
                description: 'If you witness animal cruelty, please report the incident immediately.',
                answer: 'Animal cruelty is the act of physically harming an animal such as kicking, striking, or burning. If you witness animal cruelty, please report the incident immediately.\n\nTo report animal cruelty please call 311 or 916-264-5011. To avoid a delay in response, please do not submit an animal cruelty report online.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can rabbits be kept as pets?​',
                description: 'Rabbits are permitted as pets in Sacramento City.  Rabbits must not be free-roaming - that is, they must remain on their own property.',
                answer: 'Rabbits are permitted as pets in Sacramento City.  Rabbits must not be free-roaming - that is, they must remain on their own property. Up to three rabbits may be kept per property.\n\nRabbits are permitted only as pets; animals kept for other purposes are considered livestock and are prohibited.',
            },
            {
                id: generateSudoId(8),
                question: 'Can mini potbelly pigs be kept as pets?​​​​​​',
                description: 'Miniature (potbelly) pigs are permitted as pets in Sacramento City.',
                answer: 'Miniature (potbelly) pigs are permitted as pets in Sacramento City. Pigs must be licensed within 30 days of becoming residents of Sacramento. All male potbelly pigs must be neutered, licensed, and have rabies shot by four weeks old.  Licenses are obtained through the Front Street Shelter. A pig kept within city limits may not be more than 22" high at the shoulder nor weigh more than 150 pounds. There is a limit of three pigs per property; pigs count toward the same household limit as dogs (combined limit of 3).  All potbelly pigs must wear a collar with its license tag attached.  \n\nOnce a potbelly pig weighs more than 150 lbs and/or stands higher than 22 inches at the shoulder, it is considered a swine and will need to be removed from the property- unless the property is grandfathered for agriculture.\n\nIf you suspect an overgrown pig is being kept as a pet in an improperly zoned area, please submit a case. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I report injured wildlife?​​​​​​',
                description: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is showing signs of illness or has a visible injury.',
                answer: 'The City of Sacramento Animal Control Department will respond to complaints of a wild animal that is showing signs of illness or has a visible injury. Wildlife can be defined as a non-domesticated animal such as large cats, squirrels, raccoons, skunks, or large birds of prey. \n\nSmall birds, like pigeons or sparrows, can be dropped off at the Wildlife Care Association in McClellan. \n\nTo report injured wildlife, please call us at 311 or 916-808-5011 so that we can respond immediately.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can I report an animal running in traffic?​',
                description: 'Dogs running loose on major roadways, freeways, or highways are at risk of sustaining injuries or causing traffic accidents.',
                answer: 'Dogs running loose on major roadways, freeways, or highways are at risk of sustaining injuries or causing traffic accidents. An Animal Control Officer will respond to these situations in hopes of safely capturing the dog. Because relocation of wildlife is against California state law, Officers will not respond to reports of wildlife in traffic. \n\nTo report a dog in traffic, please call 311 or 916-808-5011 so that we can address this situation immediately. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I keep pet chickens on my property?​​​​​​',
                description: 'Within the City of Sacramento limits, a resident is allowed to have backyard chickens on their property as long as established conditions are met.',
                answer: 'Within the City of Sacramento limits, a resident is allowed to have backyard chickens on their property as long as the following conditions are met.\n\n-A maximum of three (3) chickens per residential parcel.\n-Roosters are prohibited.\n-Slaughtering is prohibited.\n-Coop may only be kept in the rear yard.\n-Coop may not be closer than 20 feet to the nearest neighboring dwelling.\n-Coop must be well-maintained and clean, and be a minimum of 15 square feet and a maximum of 42 square feet.\n-Coop must have four walls and a roof and be constructed of suitable material. Chickens must always be confined and properly caged in a coop. Chickens are prohibited from being a noise disturbance.\n-Chickens must be provided with adequate food, water, a nesting box, and proper ventilation.\n-Feed must be stored properly to prevent spoilage and to prevent access to other animals and rodents.\n-Feces and feathers must be removed every 24 hours and shall be stored in an airtight container prior to disposal. The use of city-issued garbage containers is acceptable.\n-An annual license and permit are required. There is a  $15 annual coop permit fee and a $10 annual licensing fee per chicken.\n\nTo report backyard chickens not being kept in accordance with the required conditions, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I keep bees on my property?​​​​​​',
                description: 'Unless the property is zoned “A” or “A-OS”, no more than two beehives per parcel are allowed. ',
                answer: 'For beekeeping or removal, refer to www.sacbeekeepers.org for resources. There are also beekeeping stores in Sacramento that may be able to offer assistance setting up or managing beehives.\n\nBeekeeping regulations can be found in Section 9.44.330 of the Sacramento City Code.  Unless the property is zoned “A” or “A-OS”, no more than two beehives per parcel are allowed. \n\nBeekeeping Best Practices\n-Beekeeper’s associations generally recommend the following measures to minimize conflicts with neighbors.  The primary goal is to avoid the bee colony’s flight path, which is concentrated within the first ten feet from the colony’s entrance:\n-Hives should be placed in a quiet area and not directly against a neighboring property unless a solid fence or dense plant barrier of six feet or higher forms the property boundary.\n-Where there is no fence or flyway barrier, orient the entrance to the hive away from the entrances and walkways, and toward the most distant property line.\n-Maintain a clear flight path at least ten feet from the hive entrance.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I keep a venomous animal as a pet?​​​​​​',
                description: 'In the City of Sacramento, a special permit is required to keep a rattlesnake or other venomous animal.',
                answer: 'In the City of Sacramento, a special permit is required to keep a rattlesnake or other venomous animal. The special permit application must be submitted to Animal Care Services for approval by the Chief Animal Control Officer and must be renewed annually. An officer from Sacramento City Animal Control may inspect the premises at any time to ensure animals are being maintained safely. \n\nTo obtain a permit, please visit Front Street Shelter at 2127 Front Street. The shelter is open daily from 12 PM-5 PM.',
            },
            {
                id: generateSudoId(8),
                question: 'Can exotic animals be kept as pets?​​​​​​',
                description: 'Requests to keep exotic animals or wildlife (as described in the City Ordinances) in the city will be reviewed by the Chief Animal Control officer on a case by case basis.',
                answer: 'Requests to keep exotic animals or wildlife (as described in the City Ordinances) in the city will be reviewed by the Chief Animal Control officer on a case by case basis.\n\nYou may submit a request for consideration by using the Shelter Contact option under Animal Care. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can dogs be off leash at a park?​​​​​​',
                description: 'The City of Sacramento maintains eleven (11) “Dog Parks”, each with an area where dogs may run freely. At these facilities, dogs may be off a leash only within the designated, fenced area.',
                answer: 'The City of Sacramento maintains eleven (11) “Dog Parks”, each with an area where dogs may run freely. At these facilities, dogs may be off a leash only within the designated, fenced area. Outside the fenced area, and in all other City parks, dogs must remain on a leash and under control always. It is a misdemeanor to allow a dog to roam freely in a city park and a citation may be issued.\n\nDog parks are "use at your own risk". The City will not respond to incidents that occur inside a dog park. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can an animal be left in a car or other type of vehicle?​​​​​​',
                description: 'Leaving pets locked in cars is never safe, but when the weather gets warmer, it can be deadly. High temperatures can cause irreparable organ damage and even death.',
                answer: 'Leaving pets locked in cars is never safe, but when the weather gets warmer, it can be deadly. High temperatures can cause irreparable organ damage and even death.\n\nIn the summer months, daytime temperatures can fluctuate significantly, and an animal left in a vehicle can quickly become endangered due to extreme heat. Animal Control Officers will respond to complaints of an animal in a vehicle, when the vehicle\'s parked in direct sunlight and the outdoor temperature exceeds 70° F, or if the animal is exhibiting signs of distress. Officers will also respond when an animal is inside a vehicle in freezing temperatures.\n\nAnimals can remain in a vehicle for an extended period of time, provided the temperature does not create a dangerous situation, and they are being cared for. Sacramento City Code 9.44.290 (b) states animals left in a vehicle in mild weather for long periods of time, must be provided water and food.\n\nTo report an endangered animal in a vehicle, please call 311 or 916-264-5011. Please do not send an email as these requests must be handled as they are happening to prevent injury to the animal.',
            }
        ]  
    },
    {
        id: generateSudoId(8),
        type: 'Building and Planning',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How can I contact the Building Department?​​​​​​',
                description: 'Building and Planning: Building department staff is available in person or via email.',
                answer: 'Building department staff is available via email to answer your questions. \n\nThe Community Development Department counter is now open to the public for limited in-person appointments. Please see the link below:\nhttp://www.cityofsacramento.org/Community-Development/Building/Permit-Services/Public-Counter-Hours-and-Contact\n\nYou may email your question to ezpermit@cityofsacramento.org, call the message line 916-808-5318, or we may be able to assist through our online services.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I submit self-certification of a smoke or carbon monoxide detector?​​​​​​',
                description: 'Building and Planning: If your building permit requires the self-certification of a smoke or carbon monoxide detector, please download this form and follow the submission instructions. ',
                answer: 'If your building permit requires the self-certification of a smoke or carbon monoxide detector, please download this form and follow the submission instructions.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I obtain signatures for a demolition permit?​​​​​​',
                description: 'A demolition permit may require several signatures.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'When is a building permit needed?​​​​​​',
                description: 'A building permit is required for projects such as new construction, additions, tenant improvements, pools, spas, signs, remodeling, and work on electrical, mechanical, and plumbing systems.',
                answer: 'A demolition permit may require several signatures. \n\nUtility Sign-Off \nA utility signature is only required for commercial properties.  Residential homes do not require a signature from utilities.\nRequest for demolition permit signs offs are processed by the 311 Call Center on behalf of the Utilities Department. Please call 311 or 916.808.5011 to request an inspection. \n\nSolid Waste\nAll demolition projects, projects covered by CALGreen and building permits fall under the Construction and Demolition (C&D) ordinance which requires that 65 percent of all debris generated during the course of a project must be recycled.\n\nFor information on how to meet this requirement, please visit us here. \n\nUrban Forestry\nRequest for an arborist sign off on a demolition permit can be emailed to urbanforestry@cityofsacramento.org. You may also call 916.808.6257 with any questions.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I search for and view planning applications and building permit information?​​​​​​',
                description: 'The AgencyCounter tool can be used to search and view planning applications and building permit information. This replaces the former program, Development Tracker.',
                answer: 'The AgencyCounter tool can be used to search and view planning applications and building permit information.\n\nIn addition to viewing building permit history, the tracker allows the community the ability to:\n-Track the planning and building permit activity and history for a specific property or area of the city in easily understood terms.\n-Sign up for auto notification via email when planning or building permit activity occurs at a specified property.\n-Contact the assigned project planner for more information or to submit comments. \n-Download project exhibits and other application materials.\n-Find out city-wide or neighborhood-specific trends through simple maps, graphs, and visualizations.\n-Better understand the planning and development process.\n\nIf the record you\'re seeking can\'t be found on the tracker, please submit a request for records with the City Clerk.',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Business Resources',
        questions: [
            {
                id: generateSudoId(8),
                question: 'What business resources are available in the Sacramento area?​​​​​​',
                description: 'Tap to see details.',
                answer: 'California Capital – From their Women’s Business Center, Procurement Technical Assistance Center, business information center, and veterans one-stop shop, to data and mapping services, the CA State loan guarantee program and micro lending programs, CA Capital has a variety of programs and services to support entrepreneurs and business owners at every stage.\n\nSacramento Valley Small Business Development Cetner (SBDC)—follow this link to sign up for free business services through Sacramento’s local SBDC, an organization funded by the government to offer complimentary training and counseling for small businesses. Types of assistance include:\n-Business planning\n-Financial management\n-Marketing\n-Access to capital \n\nU.S. Small Business Administration (SBA) Sacramento District Office—follow this link to sign up for services offered by the SBA, a department within the federal government dedicated to helping small businesses. Services include information on SBA funding opportunities, counseling, federal contracting certifications, and disaster recovery. \n-Online events\n\nCapital Corridor Service Corps of Retired Executives (SCORE)—follow this link to access the resources offered by SCORE, an association of working and retired executives and business owners who donate their time and expertise to serve as volunteer business counselors. Services include:\n-Find a mentor\n-Attend a workshop\n-Access templates and resources\n\nLocal Business Support Organizations — depending on your location, affiliations, and interests, you may be able to benefit from the services offered by these business support organizations.\n-Property and Business Improvement Districts (PBIDs)\n>Del Paso Boulevard Partnership \n>Downtown Sacramento Partnership \n>Florin Road Partnership \n>Franklin Boulevard Business Association \n>Greater Broadway District \n>The Handle District \n>Mack Road Partnership \n>Midtown Business Association \n>Oak Park Business Association \n>Power Inn Alliance \n>The River District \n>Stockton Boulevard Partnership \n>80 Watt District \n-Chambers of Commerce\n>California Chamber of Commerce \n>California Black Chamber of Commerce \n>East Sacramento Chamber of Commerce \n>Natomas Chamber of Commerce \n>North Sacramento Chamber of Commerce \n>Sacramento Area Women’s Chamber of Commerce \n>Sacramento Asian Pacific Chamber of Commerce \n>Sacramento Black Chamber of Commerce \n>Sacramento Hispanic Chamber of Commerce \n>Sacramento Metropolitan Chamber of Commerce \n>Sacramento Rainbow Chamber of Commerce \n>Slavic American Chamber of Commerce \n-Business Centers\n>Northern California Veteran Business Outreach Center\n>Sacramento County Business Environmental Resource Center (BERC)\n>The Sacramento State Center for Small Business\n>The Sacramento State Carlsen Center for Innovation and Entrepreneurship\n>California Mosaic Small Business Center \n\nBanks, Credit Unions, Community Banks, CDFIs – Below is a non-exhausted list of financial institutions to support your business’ launch or growth.\n-CDFIs\n>California Capital\n>Opening Doors\n>Community Vision\n-Credit Unions\n>Self-Help Credit Union\n>Golden 1 Credit Union\n>Safe Credit Union\n-Traditional Banks\n>US Bank\n>Five Star Bank\n>Tri Counties Bank\n-State of California\n>Infrastructure and Economic Development Bank (IBank)',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What business resources does the City of Sacramento provide?​',
                description: 'Tap to see details.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Code Enforcement',
        questions: [
            {
                id: generateSudoId(8),
                question: 'What is the weed abatement program?​​​​​​',
                description: 'During the last week of February, the City mails out weed abatement notices to vacant lot owners.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can a vehicle be parked on grass, dirt or gravel?​​​​​​',
                description: 'It is against City code to park a vehicle on an unimproved surface regardless oh whether the vehicle is visible from the street.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I contact the Code Liaison Officer?​​​​​​',
                description: 'If your case has been assigned to the Code Liaison Officer, you may contact the office using the following ways.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I submit a complaint about a cab or taxi?​​​​​​',
                description: 'If you experience a concern with a taxi cab while within city limits, you may file a complaint directly with 311.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I believe my vehicle was towed, whom should I contact?​​​​​​',
                description: 'If you believe your vehicle was towed, please contact the Sacramento Police Department.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find code compliance forms, like the demand request form?​​​​​​',
                description: 'Forms and Publications are available both online as well as at our Permit Service Counter.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What are the residential fencing requirements?​​​​​​',
                description: 'Fencing around residential properties is not required, except around a pool. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What can I do about noisy neighbors?​​​​​​',
                description: 'Excessive noise caused by the operation of non-mechanical devices, like amplified sound or musical instruments, should be reported to the Sacramento Police Department.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Do detached structures, like sheds or carports require a building permit?​​​​​​',
                description: 'Detached accessory structures, like a shed, carport, or playhouse, are not allowed in a front or side yard without a building permit.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are owners responsible for maintaining weeds and grass on their properties?​',
                description: 'Lots with a building or other structure must be maintained even if they are not occupied. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​A property in my neighborhood is neglected, and storing junk and debris. What can be done?​',
                description: 'Property owners are legally required to maintain their property to the standards set forth in City Code. Properties that are neglected can be cited as a public nuisance.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can an inoperble or junk vehicle be stored on a driveway?​​​​​​',
                description: 'City code prohibits storing an inoperable or junk vehicle in a driveway or a side yard that is visible from the street.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are street vendors allowed to operate within city limits?​',
                description: 'California law allows street vendors to operate.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Do home-based businesses require a license?​​​​​​',
                description: 'Businesses located at a residential address within City limits must obtain and maintain a Home Occupation Permit. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can barbed wire be used on residential fencing?​​​​​​',
                description: 'Barbed wire, concertina wire, razor wire or similar materials, like embedded nails or broken glass, can cause significant injury and therefore are not permitted on residential property in Sacramento.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What can I do about graffiti in my neighborhood or on my property?​',
                description: 'The City of Sacramento\'s Community Development Department has a Graffiti Abatement Program designed to keep neighborhoods clean and attractive.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can a commercial property be fenced?​​​​​​',
                description: 'A permit may be required for fences on or around a commercial property.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find the complete list of City code?​​​​​​',
                description: 'A complete list of Sacramento City Codes can be found online.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any restrictions on using leaf blowers?​​​​​​',
                description: 'Portable gasoline-powered leaf blowers are permitted to be operated in the City during specific time frames. There are no restrictions on the use of electric leaf blowers.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What are the rules regarding personal marijuana cultivation?​​​​​​',
                description: 'In the City of Sacramento, it is legal to grow up to six marijuana plants for personal use.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can the City help with mold problems at a rental property?​',
                description: 'While the City will not test for mold, a housing inspector will inspect for water leaks or causes of excessive moisture',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I check the burn day status?​​​​​​',
                description: 'The Check Before You Burn program implemented by the Sac Metro Air District provides residents with an easy way to check if burning is allowed. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I open a cannabis related business, like a dispensary or manufacturing facility?​​​​​​',
                description: 'The City of Sacramento currently allows dispensaries, cultivation, nonvolatile manufacturing and testing in specific zones within the city, subject to a set of regulations.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I place signs and banners in the public right of way?​​​​​​',
                description: 'Signs and banners are generally not allowed in the public right-of-way.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is there a requirement to maintain a vacant property?​​​​​​',
                description: 'Properties that are vacant and neglected can be cited as a public nuisance.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What can be done about a vacant lot that is not being maintained?​​​​​​',
                description: 'Vacant lots must be maintained to avoid becoming a fire hazard or neighborhood blight. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is it legal to live in a vehicle?​​​​​​',
                description: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Is a permit required to have live music at a club or venue?​',
                description: 'Venues that provide ongoing entertainment are required to obtain and maintain a permit.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How are airport taxi companies selected?​',
                description: 'The Sacramento International Airport establishes it\'s own taxi cab & towing service contracts which are then administered by the County of Sacramento.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who removes abandoned or stray shopping carts?​​​​​​',
                description: 'The City will respond to reports of abandoned or stray shopping carts.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report an unsafe elevator?​​​​​​',
                description: 'The Cal OSHA Elevator Unit responds to public reports of unsafe, damaged or malfunctioning elevators in buildings open to the public, including privately owned and governmental office buildings and apartment buildings.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Drains',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How do I report a clogged or flooded drain? ​​​​​​',
                description: 'To report a clogged drain, please call us so a crew can be dispatched as quickly as possible.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Homeless Camp',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How is the City addressing homeless camps?​​​​​​',
                description: 'The City of Sacramento is actively engaged in regional efforts to prevent and end homelessness through the support of and participation in local initiatives',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any homeless shelters operating within the City?​​​​​​',
                description: 'The City\'s winter shelter is up and running and bringing services to those most in need from December through March.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parking',
        questions: [
            {
                id: generateSudoId(8),
                question: 'My vehicle was booted, how can I have it removed?​​​​​​',
                description: 'Once a boot has been placed, an owner has 72 hours to pay the citations and the $100 boot fee.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What are the entrance and exit times at a City-owned garage when I have a reservation?​',
                description: 'In a City-owned garage, those with prepaid reservations may enter the lot as early as two hours before the event time and leave by 6 AM on the following day.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is monthly parking available at garages or lots?​​​​​​',
                description: 'Monthly parking is offered at select garages and lots.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who enforces parking in private lots and gated communities?​​​​​​',
                description: 'In privately-owned lots not contracted by the City or in gated communities, Officers may only enforce fire lanes or disabled parking spot violations provided there is clear signage posted.  ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'When are parking hours enforced?​​​​​​',
                description: 'In an effort to manage the supply of on-street parking spaces and promote turnover, the City has established area-specific operating hours at metered and non-metered parking spaces.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I pay a parking IOU?​​​​​​',
                description: 'If you received an IOU for unpaid parking garage fees, your payment can be made in person at City of Sacramento Revenue Office or via U.S. mail.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I obtain a temporary parking pass for my visitors?​',
                description: 'If you live in an area with permitted parking and are expecting visitors, there are several ways to help your guests with parking.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I request a refund for a meter payment?​​​​​​',
                description: 'If you believe you have been overcharged due to an error at a parking meter or parking machine please complete a Refund Request Form to have your claim reviewed.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispute a parking citation?​​​​​​',
                description: 'If you believe a parking citation has been issued in error, it can be contested within 21 days of issue, via a written letter or online',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What can I do if I am parked and blocked in by another vehicle?​​​​​​',
                description: 'If you are blocked in by another vehicle, we are unable to remove it.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I lost my monthly parking card. How can I get it replaced?​​​​​​',
                description: 'If a monthly parking card is lost, a Monthly Garage Access Card Application Agreement Form will need to be submitted to have the card replaced.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are there special parking programs for electric vehicles?​',
                description: 'Electric vehicles that are owned or leased by individuals or enterprises are eligible for special monthly parking programs in designated City of Sacramento parking facilities.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What do the different curb colors mean?​​​​​​',
                description: 'Curbs are painted with different colors to signify different parking restrictions.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I extend my parking time?​​​​​​',
                description: 'If you parked at a meter that uses the Pay-by- Plate feature, it is possible to extend your parking time using the Parkmobile system.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park on the sidewalk?​​​​​​',
                description: 'Parking a vehicle on the sidewalk obstructs the right of way and can pose a hazard for pedestrians.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park in the bike lane?​​​​​​',
                description: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I cancel my monthly parking pass?​​​​​​',
                description: 'To cancel your monthly parking pass, please complete the Monthly Parking Change Order Form.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can on-street parking meters or spaces be reserved?​​​​​​',
                description: 'The City of Sacramento will accept reservations of metered parking spaces, and unmetered parking spaces for construction projects or special events.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any parking discount programs available?​​​​​​',
                description: 'The City offers a variety of parking discount programs.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any parking discounts for college students?​​​​​​',
                description: 'Carpool permits are available to Sacramento City College (SCC) students on a first-come, first-served basis. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What are the clearances at City-owned garages?​​​​​​',
                description: 'Below you will find the clearances for City owned garages.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What are the parking rules at the Amtrak lot?​​​​​​',
                description: 'Amtrak Lot 293 is available for unlimited parking.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park at a broken meter?​​​​​​',
                description: 'There are several options you can take when you come across a broken meter.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'In addition to obeying time limits, are there any other parking rules I should obey?​​​​​​',
                description: 'In addition to obeying posted time limits, there are some simple rules to keep in mind when parking to ensure you do not receive a parking citation.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are commercial vehicles allowed to park on a public street?​​​​​​',
                description: 'Commercial vehicles may park on a street for up to 72 hours, permitted they do not obstruct the sidewalk, prevent other vehicles from safely passing, or exceed the weight limit when in a residential area.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I continue to stay parked on the same block after the meter expires?​​​​​​',
                description: 'If you have exceeded the allowed time at a parking spot, City Code requires that the vehicle be moved at least two blocks.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I have questions about making a parking reservation, where can I find answers?​​​​​​',
                description: 'Answers to all of your parking reservation questions can be found online.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are parked vehicles allowed to block a driveway?​​​​​​',
                description: 'A parked vehicle may not block a driveway. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are City-owned garages and lots monitored by a security company?​​​​​​',
                description: 'All City-owned parking facilities are monitored by 24-hour security staff.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there parking options available to contractors working on properties where parking is limited?​​​​​​',
                description: 'A resident or business in a metered or time-limited parking area may allow a building contractor to display the resident\'s visitor parking placard to park.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Is parking in an alley allowed?​',
                description: 'Parking in an alley is only allowed in specific situations.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I obtain security video from a City-owned garage or lot?​​​​​​',
                description: 'Parking garage and lot security camera recordings may be requested by submitting a public records request with the City Clerk.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Do City-owned garages have a lost and found?​​​​​​',
                description: 'Items found in a City-owned garage or lot are turned into the police department.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What holidays are included in free meter days?​​​​​​',
                description: 'The City offers free metered parking on several holidays.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report a vehicle that is illegally parked in a disabled parking space?​​​​​​',
                description: 'Vehicles parked without a placard may be cited by Parking Enforcement Officers. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I block the street to prevent or reserve parking?​​​​​​',
                description: 'The street is a public right-of-way and cannot be blocked or reserved unless a permit has been issued.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who can park in front of a home or business?​​​​​​',
                description: 'There is no ownership over the street parking available in front of a residence or business.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find motorcycle parking?​​​​​​',
                description: 'Throughout the downtown area, designated motorcycle parking spaces can be found.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I share my monthly parking pass?​​​​​​',
                description: 'Monthly access cards are assigned to a single driver and may not be shared.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What type of parking meters does the City use?​',
                description: 'The City of Sacramento utilizes four different types of parking meters.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Does the City provide a press parking pass?​​​​​​',
                description: 'The City of Sacramento offers a parking "Press Pass" to qualifying members of the media free of charge.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is it legal to live in a vehicle?​​​​​​',
                description: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Parks',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How can I report criminal activity taking place at a park?​​​​​​',
                description: 'If you observe an emergency or life-threatening event in a City park, please dial 911.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​I think I lost a personal item at a City park, where can I check to see if it\'s been found?​',
                description: 'If you believe you lost an item at a City park, please call 916.808.6060 to check to see if it\'s been found.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I reserved space at a park and arrived to find someone already there. What can I do?​​​​​​',
                description: 'If you arrive at your reserved park space and find someone\'s already occupied the space, please 311 or 916.808.5011 so that a Park Ranger can be dispatched to assist.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are there power outlets available at City-owned parks?​​​​​​',
                description: 'Electrical outlets are found in City parks only at some amphitheaters.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I reserve space at a City park?​​​​​​',
                description: 'City Parks are a favorite place for picnics, family get-togethers, and office outings. A Certificate of Park Use entitles you to a specific group picnic area in a City Park.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report concerns with lighting at a City park?​​​​​​',
                description: 'City staff maintains the lighting features at our parks.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Are motorized vehicles allowed in City parks?​​​​​​',
                description: 'City of Sacramento maintenance vehicles are the only vehicles permitted inside a City park.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'My property borders a City park. Who is responsible for maintaining the fence?​​​​​​',
                description: 'When residential fences are along the property line of a City of Sacramento park, the property owner is solely responsible for the maintenance of the fence.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Do City parks have operating hours?​​​​​​',
                description: 'Sacramento City parks are open from sunrise to sunset every day of the year.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is drinking or smoking allowed in City parks?​​​​​​',
                description: 'The consumption of alcoholic beverages or smoking of any kind is prohibited in City parks at all times.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I obtain a boat launch pass?​​​​​​',
                description: 'The City offers boat launch passes valid for use at Miller Park and Garcia Bend launch ramps.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for maintaining playground equipment at City parks? ​​​​​​',
                description: 'Park staff takes pride in maintaining the playground equipment so that it can be safely enjoyed.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains the restrooms at City parks?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, including the public restrooms.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City park grounds?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, athletic fields, and bike trails.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for mowing City parks?​​​​​​',
                description: 'The City makes regular mowing part of each park\'s scheduled maintenance.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Sewer',
        questions: [
            {
                id: generateSudoId(8),
                question: '​​​​​Can a missing or damaged manhole/sewer cover be replaced?​',
                description: 'Occasionally, manhole covers may become displaced, or even removed. This can pose a significant public hazard and should be reported immediately.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Solid Waste',
        questions: [
            {
                id: generateSudoId(8),
                question: 'I\'ve used my free junk appointments, can I pay for a pickup?​​​​​​',
                description: 'If you have used your free junk pickups, you may schedule a paid bulky waste pickup.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I am missing a garbage, recycle, or organics can. Will the City deliver a replacement?​​​​​​',
                description: 'The City will replace a missing container free of charge.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I need assistance getting my trash cans out. Can the City help?​​​​​​',
                description: 'The City of Sacramento offers help to disabled customers needing assistance in getting their solid waste containers out for service.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I schedule a household junk pick-up?​​​​​​',
                description: 'The City provides two free appointments per calendar year for the removal of acceptable household junk, including yard waste.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I change the size of my garbage, recycle, or organics can?​​​​​​',
                description: 'Requests for a change in the size of garbage or recycle cans, regardless of whether it increases or decreases the monthly bill, must be made by the property owner.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of a Christmas tree?​​​​​​',
                description: 'If you receive yard waste services from the City of Sacramento, you can place Christmas trees in the street for pickup as part of the City\'s Leaf Season service.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'What is leaf season? When is it?​​​​​​',
                description: 'From November 1st through January 31st, the City of Sacramento is in Leaf Season.During this time City collects piles of yard waste from the street without an appointment.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Will the City replace the wheel on my garbage, organics or recycle container?​​​​​​',
                description: 'Damaged containers will be repaired at the City\'s expense. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Will the City replace a broken or damaged lid on my garbage, recycle, or organics container?​​​​​​',
                description: 'If your garbage, recycle, or lawn and garden container have a broken or missing lid, let us know and we\'ll get it taken care of.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'There is a stray can in my neighborhood. Can someone come to remove it?​​​​​​',
                description: 'If you find a stray container in your neighborhood, please report it so that it can be picked up by the Recycling Solid Waste team.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I contract with the City to provide commercial dumpster services?​​​​​​',
                description: 'The City of Sacramento does not provide commercial collection services.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of hazardous waste?​​​​​​',
                description: 'Products, such as paint cleaners, oil, batteries, and pesticides require special care and should not be thrown into residential waste containers.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can a household junk pick up be scheduled if I live on a private street?​​​​​​',
                description: 'Household junk pickups are provided to all properties with City garbage service, including those on private streets',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of used motor oil?​​​​​​',
                description: 'City of Sacramento residents can conveniently recycle used motor oil and motor oil filters without leaving home.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I schedule a battery and light bulb pickup?​',
                description: 'The door to door collection of batteries and bulbs was discontinued in August of 2019. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I schedule an EWaste/Electronics Pickup?​',
                description: 'All residential Solid Waste customers can schedule two appointments for appliance and e-waste collection in a calendar year.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​When are garbage containers delivered at newly built properties?​',
                description: 'Utility Billing: After a billing account has been created, a date for container delivery will be set-up.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​​​How can I request a recycle guide or dump coupon?​​​​​​',
                description: 'A printed recycle guide that includes a dump coupon is mailed out to every property mid-year.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Should I wash my recyclables before placing them in the bin?​​​​​​',
                description: 'When recycling approved materials, it is preferred that the items be clean of most residue.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can I change the day or frequency my recycling can is serviced?​​​​​​',
                description: 'The City recycling service is provided on a fixed every-other-week schedule. There is no ability to change the week your can is serviced. ',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find my garbage collection days and set-up reminders?​​​​​​',
                description: 'Our collection calendar allows you to view, download, and print a service calendar specific to your address.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where should I store my City-issued trash cans?​​​​​​',
                description: 'Solid Waste containers must be placed in a storage location within, adjacent to, or behind a structure, building, fence, landscaping, or another barrier, which substantially screens the view of the containers from the street or public right-of-way.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How does the City address illegal dumping?​​​​​​',
                description: 'If you see a pile of debris on a public street, please report it.',
                answer: '',
            }           
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Streets',
        questions: [
            {
                id: generateSudoId(8),
                question: '​​​​​Can I park in the bike lane?​',
                description: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can I request a bike rack to be installed?​',
                description: 'Bike racks can be installed on City-owned property or right-of-way locations.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for the maintenance of curbs and gutters?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance of the public street-side curbs and gutters. Curbs and gutters on private property are the responsibility of the property owner.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Do I need a permit to block the sidewalk or street?​',
                description: 'A permit is required to perform work within the public right-of-way.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​​​Can I request speed bumps to be installed to deter speeding in my neighborhood?​​​​​​',
                description: 'Unless chronic speeding problems exist on your street, speed lumps are not warranted. Traffic control, such as police enforcement, is usually a better alternative',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report a damaged or malfunctioning street light?​​​​​​',
                description: 'If you observe a malfunctioning street light, street light on during the day, or a street light with damage, please report it.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for the maintenance of the sidewalk?​​​​​​',
                description: 'Sacramento City Code identifies property owners as responsible (including financially) to maintain the sidewalk adjacent to their property in such a way that it does not endanger persons, property, or interfere with public convenience.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report concerns with missing or damaged street signs?​​​​​​',
                description: 'The city maintains approximately 100,000 traffic and street name signs.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Can garbage cans or leaf piles be placed in the bike lane?​​​​​​',
                description: 'In many parts of Sacramento, cyclists are required to share the bike lane with leaf piles or garbage containers due to the limited amount of space for both.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I report concerns with a bike trail?​',
                description: 'The City of Sacramento maintains miles of bike trails.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report junk or debris in the bike lane?​​​​​​',
                description: 'Occasionally, junk or debris is dumped in the bikeway making for dangerous conditions for riders. These conditions should be reported so that a City crew can respond and remove the material.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What is street resurfacing and when does it take place?​',
                description: 'The City resurfaces streets to maintain their safety.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City-owned landscaped areas like medians and streetscapes?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance and repair of public landscaping.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Does the City have any bike parking programs?​',
                description: 'The City of Sacramento offers both free and low-cost options for bicyclists who work, visit or live downtown.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for maintaining the street and addressing potholes?​​​​​​',
                description: 'The City of Sacramento maintains the public streets.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I report concerns with a traffic signal?​',
                description: 'Traffic Signal problems can pose serious public safety hazards and are responded to immediately.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Who maintains street markings?​',
                description: 'The City maintains street markings of many types.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can I place a banner on a street pole?​',
                description: 'Placement of banners on city-owned light poles requires a permit from the City of Sacramento',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Urban Foresty',
        questions: [
            {
                id: generateSudoId(8),
                question: 'Who removes fallen tree limbs in the public right-of-way?​​​​​​',
                description: 'The City\'s Urban Forestry department is responsible for the maintenance of City-owned street trees and for the removal of trees, or tree limbs, that are blocking the public right-of-way.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City trees and how can I request a tree be pruned?​​​​​​',
                description: 'The City of Sacramento\'s Urban Forestry division provides maintenance to city street trees, trees in the public right-of-way, and trees on City property.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Who can remove tree limbs in power lines?​',
                description: 'The removal of trees in power lines requires specialized methods and training and is therefore performed by SMUD. ',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Utility Billing',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How can I contact the Utility Billing Department?​​​​​​',
                description: 'There are a variety of ways to contact the Utilities Billing Department.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​I have a rental property, who is responsible for the utility payments?​',
                description: 'Regardless of who occupies a home, the property owner is ultimatley responsible for costs relating to billed City services such as water, sewer, storm drain, and solid waste services.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'Water',
        questions: [
            {
                id: generateSudoId(8),
                question: 'What is the standard City water pressure?​​​​​​',
                description: 'Standard water pressure in the City of Sacramento is 35-42 psi.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Does the City address water misuse?​​​​​​',
                description: 'If you observe water misuse taking place, please report it. Our Water Conservation team will work with the property owner to provide education on water conservation.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Why does my drinking water smell during the summer?​',
                description: 'Every summer, river water levels drop, and outside temperatures rise. These seasonal changes along with the presence of certain nutrients in the water can cause a change in smell and taste of our drinking water.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Am I able to request the water be turned off or on for repairs?​',
                description: 'Water can be turned off or on to allow repairs to take place.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What are the current watering guidelines?​',
                description: 'While emergency watering restrictions ended in August 2017, the City of Sacramento made long-term water conservation a way of life by adopting a permanent watering schedule of two days-per-week from March through October, and one day-per-week from November through February.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I reach the Water Conservation staff?​',
                description: 'Water Conservation Department staff is available to answer your questions or concerns.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Is the City still in the process of upgrading water meters?​​​​​​',
                description: 'The City\'s water meter replacement project began in May 2017 and is scheduled to continue through 2021.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'I received a notice about the quality of my drinking water. Is it legitimate?​​​​​​',
                description: 'When water quality issues have been identified, the City will issue water advisory notices in conjunction with the State Water Resource Board.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I find the latest water quality report?​',
                description: 'The latest available water quality report is available online.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'Where can I pay a City invoice or utility bill?',
                answer: '',
            }
        ]
    },
    {
        id: generateSudoId(8),
        type: 'FAQ',
        questions: [
            {
                id: generateSudoId(8),
                question: 'How can I make requests on the map?',
                description: 'Choose any address on the map, then click "Make A New Request" to make a new request.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I make a request in the app?​​​​​​',
                description: 'You can make a request by clicking on the blue plus button on the center of the navigation bar.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: '​​​​What services are offered by 311?​',
                description: '311 offers a large variety of services, all of which can be found on the Services page, which can be found under the Resources tab.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How can I find more information about a particular service offered?',
                description: 'You can find more information by clicking on one of the offered services on the Services page, which can be found under the Resources tab.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'How long will it take for my request to be serviced?',
                description: 'Request service times vary, but if your request has been submitted, we assure we are working on it. In case of an emergency, please instead call 911.',
                answer: '',
            },
            {
                id: generateSudoId(8),
                question: 'Who can I contact if I am having issues making requests?',
                description: 'If you would like to talk directly to a city employee, please dial 311 to make a request over the phone.',
                answer: '',
            },
        ]
    },
]