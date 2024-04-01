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
                answer: 'The City of Sacramento is dedicated to helping business succeed. This means ensuring that businesses have the information and direct support they need to start, grow, and thrive. The list below features a summary of city resources as well as community resources available to Sacramento business owners and entrepreneurs.\n\nhttps://www.cityofsacramento.gov/city-manager/oied/business/small-business-guide\nthis webpage summarizes 11 key steps to launching a business within the City of Sacramento. Information ranges from establishing a legal business structure to verifying what permits you may need.\n\nhttps://linktr.ee/ceteamsac\nthis webpage contains links to current City and City-related information, programs, services, tools, resources, events, funding opportunities, volunteer opportunities, and more. We suggest you bookmark this webpage and check back often for updates.\n\nhttps://311.cityofsacramento.org/s/\nthis portal serves as a “one-stop-shop” where you can register and submit business resource requests. Business requests are just like the general 311 requests residents use for their needs. Through the business 311 portal, you can ask for help and receive assistance specific to your business needs. Types of business resources available include:\nAccess to capital—connecting businesses to lending partners and grant opportunities.\nBusiness assistance/professional services—business technical assistance including, but not limited to accounting, human resources, marketing, operations, site selection, strategic planning, succession planning, e-commerce, legal structure, etc.\nEconomic data—assistance obtaining economic data including geographic and commercial real estate information through a variety of data sources such as ESRI and CoStar.\nEnvironmental brownfields assistance—financial and technical assistance for brownfields assessment and remediation.\nFinancial empowerment—free one-on-one financial navigation and coaching.\nGeneral business resources—for general business assistance and resource service requests.\nNavigating City of Sacramento permits and regulatory environment—assistance with permits (entertainment, business operations tax certificates, planning and building assistance, etc.), new or existing rules and regulations, etc.\nWorkforce development and training—resources for employers, and job and workforce readiness.',
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
                answer: 'During the last week of February, the City mails out weed abatement notices to vacant lot owners.\n\nThe purpose of the notices is to remind vacant lot owners of the need to keep their properties maintained to minimize fire risks. Owners have until April 15th to comply with the notices before inspections begin.  Inspections are performed on a complaint basis and property owners are subject to penalties and fees if found in violation.\n\nIf you have received a weed abatement notice and have questions, please call (916) 808-7902 or email vacantlots@cityofsacramento.org.\n\nTo report a vacant lot with excessive weeds, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can a vehicle be parked on grass, dirt or gravel?​​​​​​',
                description: 'It is against City code to park a vehicle on an unimproved surface regardless oh whether the vehicle is visible from the street.',
                answer: 'It is against City code to park a vehicle on an unimproved surface regardless of whether the vehicle is visible from the street.\n\nAn unimproved surface includes but is not limited to, lawn, dirt, gravel, or anything other than a cemented area.\n\nTo report a vehicle parked on an unimproved surface, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I contact the Code Liaison Officer?​​​​​​',
                description: 'If your case has been assigned to the Code Liaison Officer, you may contact the office using the following ways.',
                answer: 'If your case has been assigned to the Code Liaison Officer, you may contact the office using the following ways.\n\nPhone:\n916.808.2633\nMonday - Friday 9 AM - 4 PM\nIf calling outside of office hours, please leave a detailed message.\n\nEmail\nCodeLiaison@cityofsacramento.org\n\nIf you would like to report a new code enforcement issue, please do so by submitting a case.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I submit a complaint about a cab or taxi?​​​​​​',
                description: 'If you experience a concern with a taxi cab while within city limits, you may file a complaint directly with 311.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'I believe my vehicle was towed, whom should I contact?​​​​​​',
                description: 'If you believe your vehicle was towed, please contact the Sacramento Police Department.',
                answer: 'If you received a vehicle violation notice, and you believe your vehicle has now been towed, please contact the Sacramento City Police Department\'s non-emergency line at 916.808.5471, and select option three.\n\nThe City of Sacramento contracts with multiple tow companies to handle vehicle towing. Each towing company stores vehicles & trailers at its impound yard. Service fees, hours of operation, and impound yard location vary with each company. The Sacramento City Police Department will provide information regarding which company towed a vehicle, and provide contact information for the specific company.\n\nIf you think your vehicle was towed in error, contact the Sacramento Code Enforcement Department, at 916.808.5473 to request a Tow Hearing.\n\nIf you would like to contest a tow that was not dismissed in the Tow Hearing, please file a claim with the City of Sacramento Clerk\'s Office.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find code compliance forms, like the demand request form?​​​​​​',
                description: 'Forms and Publications are available both online as well as at our Permit Service Counter.',
                answer: 'Online: http://www.cityofsacramento.org/Community-Development/Code-Compliance/Commonly%20Used%20Forms \n\nPermit Service counter:http://www.cityofsacramento.org/Community-Development/Contact-Us/CounterHours',
            },
            {
                id: generateSudoId(8),
                question: 'What are the residential fencing requirements?​​​​​​',
                description: 'Fencing around residential properties is not required, except around a pool. ',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'What can I do about noisy neighbors?​​​​​​',
                description: 'Excessive noise caused by the operation of non-mechanical devices, like amplified sound or musical instruments, should be reported to the Sacramento Police Department.',
                answer: 'Sacramento City Code defines standards for allowable interior and exterior noise levels for day and night-time.\n\nExcessive noise caused by the operation of non-mechanical devices, like amplified sound or musical instruments, should be reported to the Sacramento Police Department. To make a report, please call non-emergency police at 916-808-5471, and select option three.',
            },
            {
                id: generateSudoId(8),
                question: 'Do detached structures, like sheds or carports require a building permit?​​​​​​',
                description: 'Detached accessory structures, like a shed, carport, or playhouse, are not allowed in a front or side yard without a building permit.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are owners responsible for maintaining weeds and grass on their properties?​',
                description: 'Lots with a building or other structure must be maintained even if they are not occupied. ',
                answer: 'Lots with a building or other structure must be maintained even if they are not occupied.\n\nIf you observe weeds or grass in excess of 12", please report the property so that Code Enforcement can work with the owner to have it mowed. Property owners who fail to comply will have their property mowed by a City contractor at their expense.\n\nTo report an unkempt property, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​A property in my neighborhood is neglected, and storing junk and debris. What can be done?​',
                description: 'Property owners are legally required to maintain their property to the standards set forth in City Code. Properties that are neglected can be cited as a public nuisance.',
                answer: 'Property owners are legally required to maintain their property to the standards set forth in City Code.\n\nProperties that are neglected can be cited as a public nuisance. Neglect can include, but not limited to accumulation of junk and debris on the property, including furniture, automotive parts, household belongings, and a general accumulation of excessive trash.\n\nTo report an unmaintained property, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can an inoperble or junk vehicle be stored on a driveway?​​​​​​',
                description: 'City code prohibits storing an inoperable or junk vehicle in a driveway or a side yard that is visible from the street.',
                answer: 'Inoperative or junk vehicles can inspire negative perceptions about a neighborhood, and affect property values and safety.\n\nCity code prohibits storing an inoperable or junk vehicle in a driveway or a side yard that is visible from the street. An inoperable or junk vehicle is described as one with flat or missing tires or wheels, missing an engine, windshield or windows, or for any other reason that prevents the vehicle from being driveable.\n\nStorage of an unattractive vehicle is not a violation as long as the vehicle is capable of being driven.\n\nTo report an inoperable or junk vehicle. please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are street vendors allowed to operate within city limits?​',
                description: 'California law allows street vendors to operate.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'Do home-based businesses require a license?​​​​​​',
                description: 'Businesses located at a residential address within City limits must obtain and maintain a Home Occupation Permit. ',
                answer: 'Businesses located at a residential address within City limits must obtain and maintain a Home Occupation Permit.\n\nAdditionally, businesses operating in the City of Sacramento are required to have a Business Operation Tax Certificate.\n\nIf you prefer, not to fill out an application online, you may visit the  Revenue counter in person or mail an application to:\n\nCity Revenue Services Office\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814\n(916) 808-8500',
            },
            {
                id: generateSudoId(8),
                question: 'Can barbed wire be used on residential fencing?​​​​​​',
                description: 'Barbed wire, concertina wire, razor wire or similar materials, like embedded nails or broken glass, can cause significant injury and therefore are not permitted on residential property in Sacramento.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.',
                answer: 'A vehicle is allowed to be parked along a public street, so long as it is in compliance with area parking regulations and is not blocking a driveway, fire hydrant, or parked too close to a stop sign.\n\nVehicles cannot be parked on a public street for more than 72 consecutive hours without moving. Vehicles must be driven at least every 72 hours if parked on the street. Simply moving a vehicle a few feet does not qualify as driving the vehicle. Vehicles parked on a public street may be towed immediately if wrecked or dismantled or more than six (6) months out of registration.\n\nUnattached trailers may be parked on a public street for up to 4 hours.\n\nVehicles abandoned on private property are the responsibility of the property owner and must be towed at the property owner\'s expense.\n\nTo report an abandoned vehicle, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.',
                answer: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours.\n\nTrailers attached to a vehicle can remain on a city street for no more than 72 hours. All trailers must have current registration.\n\nTo report a trailer parked over the allowed time, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What can I do about graffiti in my neighborhood or on my property?​',
                description: 'The City of Sacramento\'s Community Development Department has a Graffiti Abatement Program designed to keep neighborhoods clean and attractive.',
                answer: 'Graffiti is a crime and graffiti in progress should be reported to the Sacramento Police Department immediately. If you witness graffiti in progress, please call non-emergency police at 916.808.5471 and select 3 to speak to a dispatcher.\n\nThe City of Sacramento\'s Community Development Department has a Graffiti Abatement Program designed to keep neighborhoods clean and attractive. This is achieved through various activities including abatement programs, educational outreach, community involvement, and police enforcement. City crews will abate graffiti on City property, street and traffic signs, streetlight and traffic signal poles and boxes. City crews will also document graffiti on private property. To report graffiti, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can a commercial property be fenced?​​​​​​',
                description: 'A permit may be required for fences on or around a commercial property.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find the complete list of City code?​​​​​​',
                description: 'A complete list of Sacramento City Codes can be found online.',
                answer: 'The Sacramento City Council has adopted laws specifically designed to address blight, nuisances, and to maintain a clean environment for all citizens in our community.\n\nA complete list of Sacramento City Codes can be found here.\nhttp://www.qcode.us/codes/sacramento/',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any restrictions on using leaf blowers?​​​​​​',
                description: 'Portable gasoline-powered leaf blowers are permitted to be operated in the City during specific time frames. There are no restrictions on the use of electric leaf blowers.',
                answer: 'Portable gasoline-powered leaf blowers are permitted to be operated in the City during specific time frames.\nMonday - Saturday: 9:00 AM to 6:00 PM\nSunday: 10:00 AM to 4:00 PM\n\nUse of all portable blowers is prohibited when the Air Quality Index (AQI) is at or above 101. This includes commercial and residential use of electric and gas-powered portable blowers.\n\nTo report a gas-powered leaf blower being used outside of the allowed hours or when the AQI is at or above 101, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'What are the rules regarding personal marijuana cultivation?​​​​​​',
                description: 'In the City of Sacramento, it is legal to grow up to six marijuana plants for personal use.',
                answer: 'In the City of Sacramento, it is legal to grow up to six marijuana plants for personal use. All plants must be grown indoors. City code prohibits the growing of marijuana plants outdoors. If you would like to report outdoor marijuana growth, or a suspected grow house (more than 6 marijuana plants growing indoors), please call the Sacramento Police Department’s non-emergency line at 916.808.5471 and select option three.\n\nFor information relating to the operation of a cannabis business, including information on how to obtain an operator permit, please visit the Office of Cannabis Policy and Enforcement.\n\nIf you would like to open a cannabis-related business and have questions regarding the zoning of a property, please email zoning@cityofsacramento.org',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can the City help with mold problems at a rental property?​',
                description: 'While the City will not test for mold, a housing inspector will inspect for water leaks or causes of excessive moisture',
                answer: 'While the City will not test for mold, a housing inspector will inspect for water leaks or causes of excessive moisture.\n\nIf a concern is identified, the property owner will be notified and required to resolve the leak or cause of excessive moisture. Mold testing can be done by a third party professional of your choice.\n\nTo report a water leak or excessive moisture at a rental property, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I check the burn day status?​​​​​​',
                description: 'The Check Before You Burn program implemented by the Sac Metro Air District provides residents with an easy way to check if burning is allowed. ',
                answer: 'Every year from November through February the Sac Metro Air District wood-burning regulation prohibits the use of all wood and pellet-burning appliances when fine particle pollution is forecast to be high. This law applies to residents and businesses in unincorporated Sacramento County, Citrus Heights, Elk Grove, Folsom, Galt, Isleton, Rancho Cordova, and Sacramento.\n\nThe Check Before You Burn program implemented by the Sac Metro Air District provides residents with an easy way to check if burning is allowed.\n\nhttp://www.airquality.org/residents/fireplaces-wood-stoves/check-before-you-burn',
            },
            {
                id: generateSudoId(8),
                question: 'How can I open a cannabis related business, like a dispensary or manufacturing facility?​​​​​​',
                description: 'The City of Sacramento currently allows dispensaries, cultivation, nonvolatile manufacturing and testing in specific zones within the city, subject to a set of regulations.',
                answer: 'The City of Sacramento currently allows dispensaries, cultivation, nonvolatile manufacturing and testing in specific zones within the city, subject to a set of regulations. A City-issued permit is required in order to obtain the mandatory State license.\n\nTo find out more and begin the permitting process, please visit us here:\nhttp://www.cityofsacramento.org/Finance/Revenue/Sacramento-Marijuana-Information/Business-Information',
            },
            {
                id: generateSudoId(8),
                question: 'Can I place signs and banners in the public right of way?​​​​​​',
                description: 'Signs and banners are generally not allowed in the public right-of-way.',
                answer: 'Signs and banners are generally not allowed in the public right-of-way except as listed in the exemptions section of the city code (15.148.600).\n\nIf you have observed a sign or banner that you believe should not be up, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Is there a requirement to maintain a vacant property?​​​​​​',
                description: 'Properties that are vacant and neglected can be cited as a public nuisance.',
                answer: 'The City of Sacramento has a vacant building ordinance to identify and monitor vacant properties within City limits.\n\nThe ordinance states that:\nProperty owners must post a notice in a conspicuous place on the front of the building that provides the name, address, and phone number of the property owner.\nStructures planned to remain vacant more than 30 days be placed on a fee-based monitoring program.\nIf a building inspector responds to a property being monitored, a fee will be incurred for each visit.\nFines may be levied if the property is not clean and secure. \nThe owner of a vacant building in violation may be cited and incur financial penalties. A penalty up to $1,000 is imposed for the first violation. Fines can increase with each subsequent violation\n\nIf one or more of these conditions exist, please report the property so that a Housing Inspector can conduct a visit to assess the situation.\nExterior not up to Code\nWindows and/or doors are boarded, not ready for occupancy\nStructure is a neighborhood blight and may include debris or broken windows\nStructure attracts transients or crime\nStructure is neglected by owner\nPaint peeling throughout structure\n\nTo report an unkempt property, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'What can be done about a vacant lot that is not being maintained?​​​​​​',
                description: 'Vacant lots must be maintained to avoid becoming a fire hazard or neighborhood blight. ',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'Is it legal to live in a vehicle?​​​​​​',
                description: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours. ',
                answer: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours.\n\nConcerns regarding occupied vehicles should be directed to the Sacramento City Police department\'s non-emergency line at 916.808.5474. Please select option 3 to speak with an officer.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Is a permit required to have live music at a club or venue?​',
                description: 'Venues that provide ongoing entertainment are required to obtain and maintain a permit.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How are airport taxi companies selected?​',
                description: 'The Sacramento International Airport establishes it\'s own taxi cab & towing service contracts which are then administered by the County of Sacramento.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'Who removes abandoned or stray shopping carts?​​​​​​',
                description: 'The City will respond to reports of abandoned or stray shopping carts.',
                answer: 'Full article not available currently.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report an unsafe elevator?​​​​​​',
                description: 'The Cal OSHA Elevator Unit responds to public reports of unsafe, damaged or malfunctioning elevators in buildings open to the public, including privately owned and governmental office buildings and apartment buildings.',
                answer: 'Full article not available currently.',
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
                answer: 'Keeping the drains in your neighborhood free of leaves and debris is essential to keep water flowing, and preventing flooding. Plugged gutter drains can cause serious flooding problems in Sacramento and should be addressed immediately.\n\nTo report a clogged drain, please call us so a crew can be dispatched as quickly as possible. You can reach us by dialing 311 or 916.808.5011',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.\n\nPhone:\n916.808.5454, option 2\nMonday - Thursday 8 AM-4 PM\nFriday: 8 AM-11:30 AM\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday, 8 AM - 4 PM\nFriday 8 AM - 11 AM\n\nOnline: https://secure8.i-doxs.net/CityofSacramento/ \n\nBy Mail:\nCity of Sacramento Utility Billing\nPO Box 2770\nSacramento, CA 95812-2770\n\nFor all other City bills or invoices, please visit the Revenue Department in person or send a payment by mail.\n\nIn-Person:\n915 I Street (New City Hall), First Floor, Room 1214.\nMonday - Friday 8:30 AM - 4:30 PM\n\nBy Mail:\nCity of Sacramento Revenue Services\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814',
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
                answer: 'The City of Sacramento is actively engaged in regional efforts to prevent and end homelessness through the support of and participation in local initiatives. In 2014, recognizing the importance of this issue to the City and the entire Sacramento region, and with the goal of ending homelessness, the Mayor and City Council established the role of Homeless Services Coordinator and the City Manager added this position to his staff.  You can read more about the Homeless Service Coordinator\'s efforts here.\nhttps://homeless.cityofsacramento.org/faqs#:~:text=A%3A%20Generally%2C%20in%20the%20City,occupied%20vehicles%20on%20City%20streets \n\nThe 311 Center receives reports of homeless encampments. An Agent will collect details of the encampment and generate a service request for the Department of Community Response. The Department of Community Response will review the submission, generally within a few days. However, due to the hundreds of requests received each month, a response may not be possible.\n\nIf your concern involves illegal activity or the safety of others, please report the situation to non-emergency police. You can reach an officer by calling 916.808.5471 and selecting option 3.\n\nTo report a homeless camp, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any homeless shelters operating within the City?​​​​​​',
                description: 'The City\'s winter shelter is up and running and bringing services to those most in need from December through March.',
                answer: 'The City of Sacramento has been engaged in innovative solutions to bring services and housing to those most in need, and to address the community impacts of unsheltered homelessness.\n\nThe City\'s winter shelter is up and running and bringing services to those most in need from December through March. Additional sheltering options are being developed. For more information, please visit us here.\nhttp://www.cityofsacramento.org/City-Manager/Divisions-Programs/Homeless-Coordination/Homeless-Triage-Shelters',
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
                answer: 'Vehicles that have five or more unpaid parking citations are subject to booting.\n\nOnce a boot has been placed, an owner has 72 hours to pay the citations and the $100 boot fee. Payment plans are available on an individual basis.  If payment is not received within 72 hours, the vehicle will be towed.\n\nDrivers of booted vehicles can call 916.808.7201, Monday – Friday between 9 AM - 4 PM  to speak to a representative. More information can also be found here.\n http://www.cityofsacramento.org/Public-Works/Parking-Services/Parking-Enforcement/Vehicle-Immobilization',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What are the entrance and exit times at a City-owned garage when I have a reservation?​',
                description: 'In a City-owned garage, those with prepaid reservations may enter the lot as early as two hours before the event time and leave by 6 AM on the following day.',
                answer: 'In a City-owned garage, those with prepaid reservations may enter the lot as early as two hours before the event time. If entry into the garage is desired prior to the allowed time, a ticket must be pulled and the vehicle will need to pay and exit the garage to use the prepaid pass. Exit time in a City garage is by 6 AM the following day.\n\nIn a private garage, event-goers should plan to arrive and leave according to the time on their pass.',
            },
            {
                id: generateSudoId(8),
                question: 'Is monthly parking available at garages or lots?​​​​​​',
                description: 'Monthly parking is offered at select garages and lots.',
                answer: 'Monthly parking is offered at the following garages (based on availability):\nCapitol Garage\nMemorial Garage\nCity Hall Garage\nTower Bridge Garage\nOld Sacramento Garage\n\nThe following private parking garages also offer monthly parking through the Parking Division’s Parking Management Services (based on availability):\n1801 L Street\nFremont Mews\n\nTo view current availability, or add your name to the waitlist, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Lots-and-Garages/Monthly-Parking/Monthly-Parking-WaitList-2018',
            },
            {
                id: generateSudoId(8),
                question: 'Who enforces parking in private lots and gated communities?​​​​​​',
                description: 'In privately-owned lots not contracted by the City or in gated communities, Officers may only enforce fire lanes or disabled parking spot violations provided there is clear signage posted.  ',
                answer: 'The City of Sacramento Parking Enforcement Division enforces restrictions involving on-street parking, City-owned parking garages and lots, and privately-owned garages and lots for which the City has been contracted.\n\nIn privately-owned lots not contracted by the City or in gated communities, Officers may only enforce fire lanes or disabled parking spot violations provided there is clear signage posted.\n\nTo report a parking violation, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'When are parking hours enforced?​​​​​​',
                description: 'In an effort to manage the supply of on-street parking spaces and promote turnover, the City has established area-specific operating hours at metered and non-metered parking spaces.',
                answer: 'Parking operating hours and days regulate both meters and non-metered parking spaces. For meters, these are the hours and days when a meter requires a payment to park. For non-metered spaces, these are the hours and days when parking is restricted by a time limit.\n\nGenerally, meters require payment starting at 8 AM. The end time for payment requirements depends on the area. Please see this map for specific are rules.\nhttp://www.cityofsacramento.org/-/media/Corporate/Files/Public-Works/Publications/Parking/Parking-Operating-HoursMapAUG2016.pdf?la=en \n\nIn most areas, meter payments and time zone regulations are not in effect on Sunday. This means that meters do not require payment and there is no time limit restrictions at non-metered areas. However, all other parking restrictions are still enforced. Please check the posted signage on the side of the street you are parked as some areas may differ due to permit regulations.\n\nThe exception to operating hours and days is in Old Sacramento, where meters require payment every day of the week from 10 a.m. - 10 p.m. Time limit restrictions are also in effect during those days and hours.\n\nDue to regulations on some streets to accommodate programs such as Residential Parking Permits (RPP), operating hours and days may vary. Always check the meter screen or posted signage on the section of the block where you park.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I pay a parking IOU?​​​​​​',
                description: 'If you received an IOU for unpaid parking garage fees, your payment can be made in person at City of Sacramento Revenue Office or via U.S. mail.',
                answer: 'IOU certificates are occasionally issued when someone exiting a Sacramento City parking garage is unable to pay the parking fee. If you received an IOU for unpaid parking garage fees, your payment can be made in person at City of Sacramento Revenue Office or via U.S. mail. All forms of payment are accepted. The account holder must be present with a valid ID when payment is made at the Revenue office, using a check or credit card. Payments will not be accepted over the phone.\n\nPayment is due 7 days after issuance of the IOU, per City Code 10.44.090. If payment is not received within 7 days a late fee will be added to the fee due. Extended delay will result in the IOU converting to a parking citation.\n\nWalk-in address:\n915 I Street (New City Hall), Room 1214\nMonday through Friday 8:30am - 4:30pm\n\nMailing Address:\n915 I Street, Room 1214\nSacramento, CA 95814',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I obtain a temporary parking pass for my visitors?​',
                description: 'If you live in an area with permitted parking and are expecting visitors, there are several ways to help your guests with parking.',
                answer: 'If you live in an area with permitted parking and are expecting visitors, there are several ways to help your guests with parking.\n\nGuests may use your City-issued visitor\'s pass.\n\nResidents with a valid vehicle or guest permit may utilize the online Residential Permit Portal to order 24-hour Temporary Parking Permits for guest vehicles.\n\nTemporary Parking Permits, for guests parking longer than 24 hours can be obtained at the City of Sacramento City Revenue Office.  Click link for most up to date Revenue Hours: http://www.cityofsacramento.org/Finance/Revenue \n\nFor gatherings exceeding 10 vehicles, residents may email parkingcsr@cityofsacramento.org to request a Parking Enforcement Accommodation. Requests must be made at least five business days prior to an event. Accommodation requests must be confirmed by a Parking Enforcement representative before they are considered as accepted.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I request a refund for a meter payment?​​​​​​',
                description: 'If you believe you have been overcharged due to an error at a parking meter or parking machine please complete a Refund Request Form to have your claim reviewed.',
                answer: 'If you believe you have been overcharged due to an error at a parking meter or parking machine, please complete a Refund Request Form to have your claim reviewed.  Please attach any supporting documentation to help with the review of your refund request, including receipts, bank statements, ticket stubs, confirmations, etc.  Insufficient documentation may result in delays or denial of refund requests.\n\nYour request form and supporting documents may be mailed, faxed, hand-delivered, or emailed.  Please allow 4-6 weeks for processing of refunds.\n\nMail\nParking Administration\n300 Richards Blvd, Second Floor\nSacramento, CA 95811\n*There is no public counter at this address*\n\nFax\n916.808.5115\n\nEmail\nParkingCSR@cityofsacramento.org\n\nIn-Person\nPlease bring all paperwork and an ID to:\nCity of Sacramento Revenue Office\n915 I Street, New City Hall, Room 1214',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispute a parking citation?​​​​​​',
                description: 'If you believe a parking citation has been issued in error, it can be contested within 21 days of issue, via a written letter or online',
                answer: 'If you believe a parking citation has been issued in error, it can be contested within 21 days of issue, via a written letter or online. There is no option to contest a citation in-person.\n\nCitation contests will place the citation on hold until a review is complete and a decision has been made. Late fees will not accumulate during the contest process.\n\nThe review process can take up to six months. A letter explaining the outcome will be mailed once a decision has been reached. \n\nFor more information on the contest process, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Online-Citation-Services',
            },
            {
                id: generateSudoId(8),
                question: 'What can I do if I am parked and blocked in by another vehicle?​​​​​​',
                description: 'If you are blocked in by another vehicle, we are unable to remove it.',
                answer: 'There is no law authorizing the removal of a vehicle that is legally parked, regardless of the inconvenience to another driver. However, if the vehicle is outside the marked parking space lines or brackets, a City Parking Enforcement Officer may respond and cite the violating vehicle.',
            },
            {
                id: generateSudoId(8),
                question: 'I lost my monthly parking card. How can I get it replaced?​​​​​​',
                description: 'If a monthly parking card is lost, a Monthly Garage Access Card Application Agreement Form will need to be submitted to have the card replaced.',
                answer: 'If a monthly parking card is lost, a Monthly Garage Access Card Application Agreement Form will need to be submitted to have the card replaced.\n\nThe Monthly Garage Access Card Application Agreement Form and $10 payment can be submitted in-person at the following location:\n\nCity of Sacramento, Revenue Division\n\nNew City Hall, 915 I Street, Room 1214. It is the first room on your right when you walk into the building.\n\nIf you prefer, you may mail an application and a check or money order payable to the City of Sacramento to:\n\nCity of Sacramento, Parking Division\n300 Richards Blvd., Second Floor\nSacramento, CA 95811\n*Please note this is not a public counter, and walk-in processing is not available at this location.*\n\nOnce the application has been processed, a new card will be issued and be available to use immediately. You can find the Monthly Garage Access Card Application Agreement Form here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Forms-and-Applications',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Are there special parking programs for electric vehicles?​',
                description: 'Electric vehicles that are owned or leased by individuals or enterprises are eligible for special monthly parking programs in designated City of Sacramento parking facilities.',
                answer: 'Electric vehicles that are owned or leased by individuals or enterprises are eligible for special monthly parking programs in designated City of Sacramento parking facilities.\n\nTo qualify for the Electric Vehicle Parking Program, vehicles must be 100 percent electric. Hybrid vehicles do not qualify for the Electric Vehicle Parking Program. Participation in the Electric Vehicle Parking Program does not guarantee a parking space in the garage or at a charging station. All parking is on an availability basis.\n\nFor more information about the program click here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Discount-Programs/Electric-Vehicle',
            },
            {
                id: generateSudoId(8),
                question: 'What do the different curb colors mean?​​​​​​',
                description: 'Curbs are painted with different colors to signify different parking restrictions.',
                answer: 'Curbs are painted with different colors to signify different parking restrictions.\n\nRed: No stopping, standing, or parking.\n\nBlue: Parking is permitted only for a disabled person or a driver of a disabled person.\n\nGreen: Park for a limited time.\n\nWhite: Stop only long enough to pick up or drop off passengers or mail.\n\nYellow: Stop no longer than the time posted to load or unload passengers or freight.\n\nTo report a vehicle improperly parked, please submit a case.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I extend my parking time?​​​​​​',
                description: 'If you parked at a meter that uses the Pay-by- Plate feature, it is possible to extend your parking time using the Parkmobile system.',
                answer: 'If you parked at a meter that uses the Pay-by- Plate feature, it is possible to extend your parking time using the Parkmobile system. Parking time must be extended before the initial time expires.  \n\nTo extend your time, log into the Parkmobile APP or visit www.parkmobile.com and enter the zone number located on the sign or meter. Before making payment, please make sure that your vehicle\'s license plate is entered correctly in the Parkmobile system. \n\nFor more information on Parkmobile, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Street-Parking/Parkmobile',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park on the sidewalk?​​​​​​',
                description: 'Parking a vehicle on the sidewalk obstructs the right of way and can pose a hazard for pedestrians.',
                answer: 'Parking a vehicle on the sidewalk obstructs the right of way and can pose a hazard for pedestrians. For this reason, parking on a sidewalk is not allowed under any circumstances.\n\nTo report a vehicle parked on the sidewalk, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park in the bike lane?​​​​​​',
                description: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing.',
                answer: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing. Vehicles parked in bike lanes may be cited by a Parking Enforcement Officer. \n\nTo report a vehicle parked in a bike lane, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I cancel my monthly parking pass?​​​​​​',
                description: 'To cancel your monthly parking pass, please complete the Monthly Parking Change Order Form.',
                answer: 'To cancel your monthly parking pass, please complete the Monthly Parking Change Order Form.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Parking-Permits/Monthly-Parking/Monthly-Change-Form \n\nIf you prefer, you may also print the form and mail it to :\nCity of Sacramento, Parking Services\n300 Richards Blvd., Second Floor\nSacramento, CA 95811\n*There is no walk-in service at this location* ',
            },
            {
                id: generateSudoId(8),
                question: 'Can on-street parking meters or spaces be reserved?​​​​​​',
                description: 'The City of Sacramento will accept reservations of metered parking spaces, and unmetered parking spaces for construction projects or special events.',
                answer: 'The City of Sacramento will accept reservations of metered parking spaces, and unmetered parking spaces for construction projects or special events. Reservations must be received a minimum of 10 business days before the effective date.\n\nAn online application can be filled out by visiting us here\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Meters/Reservations/Request-Application',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any parking discount programs available?​​​​​​',
                description: 'The City offers a variety of parking discount programs.',
                answer: 'The City of Sacramento offers many discounted parking options to meet various parking needs. Search for one that works for you!\nhttps://www.cityofsacramento.gov/public-works/parking',
            },
            {
                id: generateSudoId(8),
                question: 'Are there any parking discounts for college students?​​​​​​',
                description: 'Carpool permits are available to Sacramento City College (SCC) students on a first-come, first-served basis. ',
                answer: 'Carpool permits are available to Sacramento City College (SCC) students on a first-come, first-served basis. \n\nStudent carpool permits are free of charge and issued in limited numbers. Applications are available at the start of each semester in the Sacramento City College Administration Office. Completed applications and all required documentation must be submitted in-person at the City of Sacramento Revenue Division. \n\n915 I Street, Room 1214\nMonday - Friday \n8:30 AM-4:30 PM\n\nEligibility\n\nMust be a current student registered at Sacramento City College (student carpool parking is not available at Sac State-CSUS).  All carpoolers must apply together, in-person at the City of Sacramento Revenue Office (915 I Street), and each must bring:\n\nStudent ID (current)\n\nSchedule of courses (from the Administration Office of SCC) for all carpoolers\n\nA "Carpool Schedule" form, available at the SCC Administration Office\n\nRegistration certificates for all vehicles being used by the carpool group.\n\nCarpoolers need to show proof, via their class schedules that they arrive and leave school around the same time. SCC school schedules must be stamped by a representative at the college when submitted for permit application.\n\nFor additional information, call the City of Sacramento Revenue Office at 916-808-8500.',
            },
            {
                id: generateSudoId(8),
                question: 'What are the clearances at City-owned garages?​​​​​​',
                description: 'Below you will find the clearances for City owned garages.',
                answer: 'Below you will find the clearances for City-owned garages. \n\nCity Hall	10th Street & I Street, 11th Street & I Street 6\'10"\n\nCapitol Garage	10th Street & L Street 6\'9"\n\nOld Sac Garage	2nd Street & I Street 6\'9"\n\nTower Bridge Garage	Front Street & Capitol Avenue 6\'9"\n\nMemorial Garage	14th Street & H Street 7\'0"\n\nEast End Garage	17th Street between Capitol Avenue & L Street 7\'0"\n\n1801 L Street	18th Street & L Street 8\'2"',
            },
            {
                id: generateSudoId(8),
                question: 'What are the parking rules at the Amtrak lot?​​​​​​',
                description: 'Amtrak Lot 293 is available for unlimited parking.',
                answer: 'Amtrak Lot 293 is available for unlimited parking.\n\nIf you are planning to park for 12 days or longer, it is advised that you purchase a monthly hangtag in advance from the Revenue Department. This is more cost-effective and saves you from having to manually add time if needed.\n\nFor more information about monthly parking, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Lots-and-Garages/Monthly-Parking',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a vehicle be parked on the street? When is it considered abandoned?​​​​​​',
                description: 'Vehicles cannot be parked on a public street for more than 72 consecutive hours without moving.',
                answer: 'A vehicle is allowed to be parked along a public street, so long as it is in compliance with area parking regulations and is not blocking a driveway, fire hydrant, or parked too close to a stop sign.\n\nVehicles cannot be parked on a public street for more than 72 consecutive hours without moving. Vehicles must be driven at least every 72 hours if parked on the street. Simply moving a vehicle a few feet does not qualify as driving the vehicle. Vehicles parked on a public street may be towed immediately if wrecked or dismantled or more than six (6) months out of registration.\n\nUnattached trailers may be parked on a public street for up to 4 hours.\n\nVehicles abandoned on private property are the responsibility of the property owner and must be towed at the property owner\'s expense. \n\nTo report an abandoned vehicle, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How long can a trailer be parked on the street?​​​​​​',
                description: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours. Trailers attached to a vehicle can remain on a city street for no more than 72 hours.',
                answer: 'Unattached trailers of any kind can be left on a city street for no more than 4 hours.\n\nTrailers attached to a vehicle can remain on a city street for no more than 72 hours. All trailers must have current registration.\n\nTo report a trailer parked over the allowed time, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I park at a broken meter?​​​​​​',
                description: 'There are several options you can take when you come across a broken meter.',
                answer: 'The City currently uses meters or payment machines to collect parking fees. There may be times when a meter or payment machine malfunctions by not accepting payment, or failing to provide time. \n\nBelow are common resolutions for malfunctions depending on the type of machine you are at.\n\nIndividual Space Parking Meters\n\nIf an Individual Space Parking Meter is out of service,  and an officer can verify the meter is malfunctioning, a parking citation will not be issued for non-payment. \n\nIf you park at a meter that is refusing payment, you can pay through the Park Mobile app without any service fee. Parking at a meter without payment is at your own risk. If you decide to stay parked, you can call 311 to report the meter.\n\nPlease have the meter identification number available when reporting a parking meter problem. ID numbers begin with the letters PKGS and are visible on the meter\'s display screen or a label attached to the meter or pole. A reference number will be provided to you for your records. \n\nPay by Plate\n\nIf an area Pay by Plate machine is malfunctioning, payment can be made at another machine. There will typically be a functioning Pay by Plate machine within walking distance of parking spaces in these areas. Please make payment at an operating machine to ensure you don\'t receive a citation.\n\nIn either situation, leaving a note inside the vehicle is not sufficient to avoid a parking citation nor dismissal of an issued parking citation. If you do receive a citation, you may contest it online.\nhttp://www.cityofsacramento.org/Police/How-Do-I/Contest-A-Parking-Citation',
            },
            {
                id: generateSudoId(8),
                question: 'In addition to obeying time limits, are there any other parking rules I should obey?​​​​​​',
                description: 'In addition to obeying posted time limits, there are some simple rules to keep in mind when parking to ensure you do not receive a parking citation.',
                answer: 'In addition to obeying posted time limits, there are some simple rules to keep in mind when parking to ensure you do not receive a parking citation.\n\nFollow the parking rules for colored curbs.\n\nParking at a corner is allowed except when specified otherwise with a sign or colored curb marking or when the corner is a crosswalk regardless of whether it is marked. \n\nDo not block a crosswalk, even if it is not marked. \n\nStay within the parking lines painted on the street. \n\nKeep your tires within 18" of the curb\n\nPark with the flow of traffic. \n\nDon\'t block a driveway. \n\nDon\'t block a hydrant or park within 15 feet of either side. \n\nDon\'t park in front of posted bus signage or where you might prevent a bus from parking.\n\nTo report a parking violation, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'Are commercial vehicles allowed to park on a public street?​​​​​​',
                description: 'Commercial vehicles may park on a street for up to 72 hours, permitted they do not obstruct the sidewalk, prevent other vehicles from safely passing, or exceed the weight limit when in a residential area.',
                answer: 'Commercial vehicles may park on a street for up to 72 hours, permitted they do not obstruct the sidewalk, prevent other vehicles from safely passing, or exceed the weight limit when in a residential area. \n\nCommercial vehicles weighing over 10,000lbs are prohibited from parking in residential areas unless the vehicle is actively making pickups or deliveries.\n\nTo report a commercial vehicle improperly parked, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I continue to stay parked on the same block after the meter expires?​​​​​​',
                description: 'If you have exceeded the allowed time at a parking spot, City Code requires that the vehicle be moved at least two blocks.',
                answer: 'If you have exceeded the allowed time at a parking spot, City Code requires that the vehicle be moved at least two blocks.\n\nThe vehicle can be legally parked in the area again after time has passed equal to the maximum time allowed. For example, if meters on the block offer a maximum of two-hour parking,  the vehicle may return to the same block without penalty after 2 hours. ',
            },
            {
                id: generateSudoId(8),
                question: 'I have questions about making a parking reservation, where can I find answers?​​​​​​',
                description: 'Answers to all of your parking reservation questions can be found online.',
                answer: 'Answers to all of your parking reservation questions can be found here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Event-Parking/Parking-Reservations \n\nTo make a reservation, please visit www.reserve.sacpark.org.',
            },
            {
                id: generateSudoId(8),
                question: 'Are parked vehicles allowed to block a driveway?​​​​​​',
                description: 'A parked vehicle may not block a driveway. ',
                answer: 'A parked vehicle may not block a driveway.\n\nIf your driveway is being blocked by a vehicle, and you would like it towed, please contact non-emergency police at 916.808.5471 and select option three to speak with an officer.\n\nTo have a vehicle blocking your driveway cited, please submit a request',
            },
            {
                id: generateSudoId(8),
                question: 'Are City-owned garages and lots monitored by a security company?​​​​​​',
                description: 'All City-owned parking facilities are monitored by 24-hour security staff.',
                answer: 'All City-owned parking facilities are monitored by 24-hour security staff.\n\nIf security is needed in a City-owned facility, please press the call button on the gate equipment or payment machines located at each exit. If the situation is an emergency, please dial 911.',
            },
            {
                id: generateSudoId(8),
                question: 'Are there parking options available to contractors working on properties where parking is limited?​​​​​​',
                description: 'A resident or business in a metered or time-limited parking area may allow a building contractor to display the resident\'s visitor parking placard to park.',
                answer: 'A resident or business in a metered or time-limited parking area may allow a building contractor to display the resident\'s visitor parking placard to park. \n\nIf a visitor permit is not available, one of two parking permits can be obtained depending on the circumstances. \n\nTemporary Construction Permits\n\nThe Parking Services Division provides Temporary Construction Parking Permits to contractors who carry large, or heavy equipment or materials in the bed of their truck. Simple hand tools and/or maps are not considered heavy equipment. A contractor\'s vehicle must be registered as "Commercial" with the DMV and the permit is only valid for metered and time-limited spaces only. Temporary Construction Permits are not intended for use in Residential Permitted areas. For more information, and to fill out an application, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Street-Parking/Parking-Permits/Temporary-Construction  \n\nTemporary Home Improvement Permit\n\nTemporary Home Improvement Permits allow home improvement or service technicians to park at a service home. These permits may be obtained by either the resident or the contractor.\n\nPlease complete a Temporary Permit Application and submit a copy of the contract that reflects the scope of work being done at the residence, including the address where the work will be performed, the dates of service, and the company name of the contractor performing the work. These permits are in the form of placards that must be displayed on the vehicle dashboard on the driver\'s side, but not as to obstruct the view of the Vehicle Identification Number (VIN).\nhttp://www.cityofsacramento.org/-/media/Corporate/Files/Public-Works/Forms/Parking/Temporary-Parking-Permit-Application.pdf?la=en ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Is parking in an alley allowed?​',
                description: 'Parking in an alley is only allowed in specific situations.',
                answer: 'Parking in an alley is only allowed in specific situations.\n\nCommercial vehicles may park in an alley for up to thirty minutes without a permit. If a delivery permit has been obtained, a commercial vehicle may be allowed to park for an extended amount of time. \n\nNon-commercial vehicles may not park in an alley unless a delivery permit has been obtained. \n\nTo obtain an alley permit, please visit the Revenue Counter located at 915 I Street, Room 1214. It is the first room on your left. Counter hours are Tuesday, Wednesday and Thursday – 9 a.m. to 4:30 p.m. (Counter closed on Monday and Friday) \n\nTo obtain a delivery permit, you will need to complete the application and then submit to the Revenue Office.  The application can be found here: http://www.cityofsacramento.org/Public-Works/Parking-Services/Street-Parking/Parking-Permits/Delivery',
            },
            {
                id: generateSudoId(8),
                question: 'How can I obtain security video from a City-owned garage or lot?​​​​​​',
                description: 'Parking garage and lot security camera recordings may be requested by submitting a public records request with the City Clerk.',
                answer: 'Parking garage and lot security camera recordings may be requested by submitting a public records request with the City Clerk. \n\nFor more information, or to submit a public records request, please visit us here.\nhttps://sacramentoca.mycusthelp.com/webapp/_rs/(S(3y20i0yg0ruhgb134fpb3bh4))/supporthome.aspx',
            },
            {
                id: generateSudoId(8),
                question: 'Do City-owned garages have a lost and found?​​​​​​',
                description: 'Items found in a City-owned garage or lot are turned into the police department.',
                answer: 'Items found in a City-owned garage or lot are turned into the police department. Please call 916.808.5471 and select option three to speak to an officer to see if your item was turned in.',
            },
            {
                id: generateSudoId(8),
                question: 'What holidays are included in free meter days?​​​​​​',
                description: 'The City offers free metered parking on several holidays.',
                answer: 'The City offers free metered parking on the following holidays.\n\nNew Year Day (January 1st)\n\nMartin Luther King, Jr.\'s Birthday (Third Monday of January) *\n\nWashington\'s Birthday and President\'s Day (Third Monday of February) *\n\nCesar Chavez Day (March 31st) *\n\nMemorial Day (Last Monday of May)\n\nJuly 4th\n\nLabor Day\n\nVeterans Day (November 11th)*\n\nThanksgiving Day\n\nChristmas Day\n\n*If any of the holidays listed above fall on Sunday, the Monday following is a holiday. Meters in Old Sacramento require payment every day, including Sunday. Therefore, meters in Old Sacramento will still require payment if the holiday falls on a Sunday and will be free on the following Monday. ',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report a vehicle that is illegally parked in a disabled parking space?​​​​​​',
                description: 'Vehicles parked without a placard may be cited by Parking Enforcement Officers. ',
                answer: 'Vehicles parked in a disabled parking space must display a current and valid placard. Vehicles parked without a placard may be cited by Parking Enforcement Officers. \n\nTo report a vehicle parked without the appropriate placard, please submit a request ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I block the street to prevent or reserve parking?​​​​​​',
                description: 'The street is a public right-of-way and cannot be blocked or reserved unless a permit has been issued.',
                answer: 'The street is a public right-of-way and cannot be blocked or reserved unless a permit has been issued. Placing trash cans, signs, or other objects to save parking is prohibited. \n\nTo report a public street being illegally blocked, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'Who can park in front of a home or business?​​​​​​',
                description: 'There is no ownership over the street parking available in front of a residence or business.',
                answer: 'There is no ownership over the street parking available in front of a residence or business. The street is a public right-of-way, and anyone can park on a public street as long as they are adhering to the posted signs and parking regulations.',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find motorcycle parking?​​​​​​',
                description: 'Throughout the downtown area, designated motorcycle parking spaces can be found.',
                answer: 'Throughout the downtown area, designated motorcycle parking spaces can be found.\n\nDesignated motorcycle parking spaces are available free of charge. Motorcycles who choose to park at non-designated spaces must still pay the meter fees.\n\nTo view a list of designated spaces, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Discount-Programs/Motorcycle-Parking ',
            },
            {
                id: generateSudoId(8),
                question: 'Can I share my monthly parking pass?​​​​​​',
                description: 'Monthly access cards are assigned to a single driver and may not be shared.',
                answer: 'Monthly access cards are assigned to a single driver and may not be shared.\n\nA single driver may register up to 4 vehicles to his or her card, has long as they are all registered to the cardholder. ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What type of parking meters does the City use?​',
                description: 'The City of Sacramento utilizes four different types of parking meters.',
                answer: 'The City of Sacramento utilizes four different types of parking meters.\n\nPay & Display\n\nThese tall green kiosks/meters (about 24"x24"x6\') print out a receipt sticker which is to be placed on the inside window of the parked vehicle as evidence of payment. These meters accept only coin and credit cards; paper money is not accepted. These meters do not accept meter debit cards.\n\nPay-by-License Plate\n\nThese meters are typically in off-street parking lots and accept payment for a specific, marked space. Parking Enforcement officers are automatically notified which parking spaces have been paid and for how long. The machines have the option to print out a receipt. The receipt does not need to be displayed in the vehicle. Parking periods at these meters can be extended remotely using the Parkmobile system and a mobile device. These meters accept coins, credit cards, and paper money.\n\nSmart Meters\n\nThese are the newest meters and accept payment by coin and credit card. Smart meters that that display a green Parkmobile sticker also accept payments through mobile devices. Customers who pay using a credit card can download a receipt of their parking transaction by clicking here. No receipts are printed. If time is displayed on the meter then the credit card (or coin money) was processed and accepted. If no time displays on the meter then no charge was made and parking is not approved. If you would like a receipt every time you use a Smart Meter, you can sign up for an online account.\n\nCoin Operated Meters\n\nThese meters are the older designed meters that take coins only and they are located throughout the city. All 10-hour meters are coin-operated. No receipts are printed from these meters.  ',
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
                answer: 'It is not a violation of City code to live in a vehicle, such as a car, truck, RV, or camper, as long as the vehicle is moved every 72 hours. \n\nConcerns regarding occupied vehicles should be directed to the Sacramento City Police department\'s non-emergency line at 916.808.5474. Please select option 3 to speak with an officer',
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
                answer: 'If you observe an emergency or life-threatening event in a City park, please dial 911.\n\nFor other issues, the Sacramento City Park Rangers will come out for citizen safety concerns, permit issues, on-site safety problems, park disputes, and observing and monitoring park special events. Officers are on duty from 6 AM until 10 PM, every day of the year including holidays. ',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​I think I lost a personal item at a City park, where can I check to see if it\'s been found?​',
                description: 'If you believe you lost an item at a City park, please call 916.808.6060 to check to see if it\'s been found.',
                answer: 'If you believe you lost an item at a City park, please call 916.808.6060 to check to see if it\'s been found.',
            },
            {
                id: generateSudoId(8),
                question: 'I reserved space at a park and arrived to find someone already there. What can I do?​​​​​​',
                description: 'If you arrive at your reserved park space and find someone\'s already occupied the space, please 311 or 916.808.5011 so that a Park Ranger can be dispatched to assist.',
                answer: 'If you arrive at your reserved park space and find someone\'s already occupied the space, please 311 or 916.808.5011 so that a Park Ranger can be dispatched to assist.\n\nIt is important to note that park reservations are held only until 11 AM. If no one has arrived to take responsibility for the reserved spot by that time, it may be used by another person or group and reservation fees will not be refunded.',
            },
            {
                id: generateSudoId(8),
                question: 'Are there power outlets available at City-owned parks?​​​​​​',
                description: 'Electrical outlets are found in City parks only at some amphitheaters.',
                answer: 'Electrical outlets are found in City parks only at some amphitheaters.\n\nElectrical power will be made available only when requested as part of a reservation. Outside of the performance areas, electrical outlets are not available.',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks.',
                answer: 'The City operates multiple types and sizes of parks, including Neighborhood, Community, and Regional parks, ranging in size from 2 to 200 acres.\n\nAll parks are irrigated and many operate using automatic timers. Because parks are frequently scheduled for social and sporting events, parks are not required to adhere to the scheduled watering days. Additionally, Parks staff may need to make repairs and tests of the irrigation systems during their normal work shifts that may be contrary to residential watering times.\n\nRegardless of when we water, our goal will always be to conserve and water wisely.  If you notice a sprinkler causing water to run-off into the sidewalk, a broken sprinkler, one spraying inappropriately, an area of a park not being watered sufficiently, or any other park irrigation issue, please let us know so we can take care of it. \n\nTo report a watering or irrigation concern, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I reserve space at a City park?​​​​​​',
                description: 'City Parks are a favorite place for picnics, family get-togethers, and office outings. A Certificate of Park Use entitles you to a specific group picnic area in a City Park.',
                answer: 'City Parks are a favorite place for picnics, family get-togethers, and office outings. A Certificate of Park Use entitles you to a specific group picnic area in a City Park. Group Areas may include multiple tables, barbecues, or a shade structure. Permits are issued for the convenience of users and guarantee exclusive use of a particular location for a specific day and time.\n\nA Certificate for Park Use is required for any activity with 50 or more people and/or in which assembly is intended to last more than 30 minutes. Applications for Park Use may be submitted one year in advance and must be made a minimum of 2 days in advance.\n\nApplications are processed in the order they are received. Walk-in customers have priority over emailed, faxed, and mailed applications. To download and print an application, please visit us here. For information on park availability please call the Park Permit Office at 916.808.6060 or email sacrecreation@cityofsacramento.org.\n\nIt is important to note that park reservations are held only until 11 AM. If no one has arrived to take responsibility for the reserved spot by that time, it may be used by another person or group and reservation fees will not be refunded.\n\nIf you arrive by 11 AM for reserved park space and find someone not honoring your reservation, call 311 or 916-264-5011. A Park Ranger will be dispatched to assist.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report concerns with lighting at a City park?​​​​​​',
                description: 'City staff maintains the lighting features at our parks.',
                answer: 'The City operates multiple types and sizes of parks, including Neighborhood, Community, and Regional parks, ranging in size from 2 to 200 acres. Many of these parks include lighting features maintained by city staff. \n\nLighting is intended to support the various amenities in each park. Parks with basketball or tennis courts have court lighting that can be turned on by players when the court is in use. These lights use timers and will shut off automatically.\n\nLarger parks may contain lighted sports fields. Lighting at these facilities requires a reservation. To report lighting problems in this situation, please call us so that we can respond. We can be reached by dialing 311 or 916.808.5011.\n\nTo report general lighting concerns, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Are motorized vehicles allowed in City parks?​​​​​​',
                description: 'City of Sacramento maintenance vehicles are the only vehicles permitted inside a City park.',
                answer: 'City of Sacramento maintenance vehicles are the only vehicles permitted inside a City park. No other vehicles of any type are allowed outside the designated parking area in any City park or on any City-owned bike trail. This includes cars, trucks, motorcycles, mini-bikes, motor-powered scooters, etc.\n\nTo report a motorized vehicle in a City park, please submit a request. ',
            },
            {
                id: generateSudoId(8),
                question: 'My property borders a City park. Who is responsible for maintaining the fence?​​​​​​',
                description: 'When residential fences are along the property line of a City of Sacramento park, the property owner is solely responsible for the maintenance of the fence.',
                answer: 'When residential fences are along the property line of a City of Sacramento park, the property owner is solely responsible for the maintenance of the fence. \n\nFence material, height, and position on the property must follow the City code. All fencing viewable from the public right of way must be kept in good repair.\n\nTo report concerns with a fence bordering a City park, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Do City parks have operating hours?​​​​​​',
                description: 'Sacramento City parks are open from sunrise to sunset every day of the year.',
                answer: 'Sacramento City parks are open from sunrise to sunset every day of the year. \n\nSome city parks have an adjacent athletic field or court with lights that are scheduled on a permitted basis. When lights are on, people may be present at these facilities.',
            },
            {
                id: generateSudoId(8),
                question: 'Is drinking or smoking allowed in City parks?​​​​​​',
                description: 'The consumption of alcoholic beverages or smoking of any kind is prohibited in City parks at all times.',
                answer: 'The consumption of alcoholic beverages or smoking of any kind is prohibited in City parks at all times.\n\nTo report this activity, and request a ranger, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I obtain a boat launch pass?​​​​​​',
                description: 'The City offers boat launch passes valid for use at Miller Park and Garcia Bend launch ramps.',
                answer: 'The City offers boat launch passes valid for use at Miller Park and Garcia Bend launch ramps.\n\nAnnual passes are sold at the Marina and Revenue Service offices. Boat Launch tags must be displayed on the vehicle\'s rear-view mirror and be clearly visible to a Parking Control Officer. The cost for an annual pass is $80 and $40 for low-income seniors over 65 and on Medi-Cal or low-income persons having an Electronic Benefits Transfer (EBT) card issued by the County Department of Health and Human Services.\n\nSacramento Marina Administration Office\n2710 Ramp Way\nSacramento, CA 95818\n\nor\nCity Revenue Services Office\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814\n\nFor more information about a monthly pass, visit us here.\nhttp://www.cityofsacramento.org/Public-Works/SacMarina/Launch-Ramp',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for maintaining playground equipment at City parks? ​​​​​​',
                description: 'Park staff takes pride in maintaining the playground equipment so that it can be safely enjoyed.',
                answer: 'The City operates multiple types and sizes of parks. Most have playground equipment offering recreational opportunities for children.  \n\nPark staff takes pride in maintaining the playground equipment so that it can be safely enjoyed. If you observe an issue with playground equipment that you believe poses a safety concern, please call us to report it. You can reach us at 311 or 916.808.5011.\n\nTo report concerns that are not urgent in nature, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains the restrooms at City parks?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, including the public restrooms.',
                answer: 'The City operates multiple types and sizes of parks. Most have playground equipment offering recreational opportunities for children. \n\nPark staff takes pride in maintaining the playground equipment so that it can be safely enjoyed. If you observe an issue with playground equipment that you believe poses a safety concern, please call us to report it. You can reach us at 311 or 916.808.5011.\n\nTo report concerns that are not urgent in nature, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City park grounds?​​​​​​',
                description: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, athletic fields, and bike trails.',
                answer: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, athletic fields, and bike trails. Staff clean-up litter, debris, and empty waste containers daily along with performing many other tasks to maintain the beauty and serviceability of the City\'s parks.\n\nTo report concerns with a City park, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for mowing City parks?​​​​​​',
                description: 'The City makes regular mowing part of each park\'s scheduled maintenance.',
                answer: 'The Department of Youth, Parks, & Community Enrichment provides maintenance for the City\'s park system, athletic fields, and bike trails.\n\nThe City of Sacramento has over 200 parks and parkways totaling nearly 3,000 acres of land. Additionally, we have over 88 miles of off-street trails and several dog parks. Regular mowing is part of each park\'s scheduled maintenance. Scheduling and frequency vary according to the season.\n\nA list of all parks in the city and amenities of each can be found here.\nhttp://www.cityofsacramento.org/ParksandRec/Parks \n\nTo report a park in need of mowing, please submit a request.',
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
                answer: 'Manhole covers, circular metal plates in the roadway, provide access for City crews into the sewer system.\n\nOccasionally, manhole covers may become displaced, or even removed. This can pose a significant public hazard and should be reported immediately. To make a report, please call us at 311 or 916.808.5011.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.\n\nPhone:\n916.808.5454, option 2\nMonday - Thursday 8 AM-4 PM\nFriday: 8 AM-11:30 AM\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday, 8 AM - 4 PM\nFriday 8 AM - 11 AM\n\nOnline: https://secure8.i-doxs.net/CityofSacramento/ \n\nBy Mail:\nCity of Sacramento Utility Billing\nPO Box 2770\nSacramento, CA 95812-2770\n\nFor all other City bills or invoices, please visit the Revenue Department in person or send a payment by mail.\n\nIn-Person:\n915 I Street (New City Hall), First Floor, Room 1214.\nMonday - Friday 8:30 AM - 4:30 PM\n\nBy Mail:\nCity of Sacramento Revenue Services\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814',
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
                answer: 'If you have used your free junk pickups, you may schedule a paid bulky waste pickup. Bulky waste pickups are scheduled only on a property\'s regular service day. The fee for a paid pickup is $39.48.\n\nThe bulky waste pickup program is popular and appointments fill up quickly. When scheduling, the next available appointment date will be offered. No option is available to expedite an appointment.\n\nTo schedule a bulky waste pickup, please contact the Sacramento City Utility Billing Office at 916.808.5454 and select option two.  Billing Office hours are:\n\nMonday through Thursday, 8 AM to 4 PM and Friday, 8 AM to 11:30 AM',
            },
            {
                id: generateSudoId(8),
                question: 'I am missing a garbage, recycle, or organics can. Will the City deliver a replacement?​​​​​​',
                description: 'The City will replace a missing container free of charge.',
                answer: 'The City will replace a missing container free of charge.\n\nProperty owners may order additional containers  at the following rates:\n\nAdditional Garbage container, monthly\n96 Gallon - $25.76\n64 Gallon - $21.82\n32 Gallon - $18.83\n\nAdditional Recycle container, monthly\n$2.79 regardless of size\n\nAdditional Organics container, monthly\n90 Gallon- $6.23\n\nTo request a replacement or additional garbage, recycle, or lawn container, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'I need assistance getting my trash cans out. Can the City help?​​​​​​',
                description: 'The City of Sacramento offers help to disabled customers needing assistance in getting their solid waste containers out for service.',
                answer: 'The City of Sacramento offers help to disabled customers needing assistance in getting their solid waste containers out for service. The service is offered at no additional charge to property owners and tenants. Once enrolled in the program, each service day the driver will enter the customer\'s property, wheel the container to the street, empty it, and return the container to its storage location. Disabled service is available for all commodity types, garbage, lawn, and recycle.\n\nDisabled service requires submission of a form signed by a doctor, verifying the customer\'s need for assistance.  A separate form is available for customers who\'s religious beliefs conflict with the medical requirement.  \n\nRecertification in the Disabled Service Program is required every 2 years. Customers will be notified by the Utility Billing office when recertification is needed.  Customers indicating a permanent disability on their application are not required to reapply.\n\nTo request an application for disabled service, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I schedule a household junk pick-up?​​​​​​',
                description: 'The City provides two free appointments per calendar year for the removal of acceptable household junk, including yard waste.',
                answer: 'The City provides two free appointments per calendar year for the removal of acceptable household junk, including yard waste.\n\nThe Household Junk Pickup program runs from February through the end of October. Appointments will always be scheduled the day before your normal garbage collection day. Residents can start contacting 311 to schedule an appointment starting at the end of January. Appointments usually fill up by the middle of September so it is suggested to schedule as soon as you can. Unused appointments do not roll over into the next calendar year.\n\nBoth annual appointments may be scheduled for the same day if the pile of materials will exceed the single-appointment limit. When requesting an appointment, please keep in mind available dates may be out as far as four weeks.\n\nPick-up Requirements:\n\nThe entire pile must not exceed 4\' x 4\' x 9\' feet in length.\n\nMaterials should be placed at the curb no earlier than 24 hours before the scheduled appointment, or by 6:00 AM on the scheduled appointment day. Do not place items on a driveway, front yard, sidewalk, or in an alley as they will not be removed.\n\nAll cancellations or reschedule requests should be made by 5pm two business days prior to the appointment date. Cancellation requests received with less than 2 business days notice may result in the appointment being counted as used, even if no items are set out for removal.\n\nAcceptable items include:\n\nFurniture, including mattresses.\n\nMiscellaneous household items.\n\nYard waste, including tree branches no longer than six feet in length. Whole tree stumps will not be removed and will need to be cut down.\n\nWood, fencing, or pipes no longer than six feet in length. Fencing must also be fully disassembled. (No treated wood.)\n\nUp to four tires, and four rims as long as they have been separated.\n\nAs of January 1,2021, treated wood will be considered hazardous waste and will not be accepted in the household junk program. (Fence posts, Sill plates, Decking, Patio Posts, Railroad ties, Landscape timbers, etc.)\n\nThe following items will NOT be collected. \n\nAppliances and/or electronic waste. These items are removed as part of our E-Waste program.\n\nBatteries and/or bulb collection services are no longer available for pickup through the city of Sacramento.\n\nMotor oil. This is removed separately by appointment.\n\nLiquid Waste (such as paint, paint thinner)\n\nHousehold Hazardous Waste (chemicals). These items may be dropped off at a transfer station.\n\nConcrete or Brick\n\nDirt, Rocks, Sod, or Sand\n\nAuto Parts\n\nJunk Vehicles\n\nTreated Wood\n\nTo schedule a junk pickup, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I change the size of my garbage, recycle, or organics can?​​​​​​',
                description: 'Requests for a change in the size of garbage or recycle cans, regardless of whether it increases or decreases the monthly bill, must be made by the property owner.',
                answer: 'Property owners can request a change in the garbage or recycle container size at any time. One exchange in a six month period is allowed, free of charge. An additional fee will be applied to the account for additional exchanges within the six month period.\n\nRequests for a change in the size of garbage or recycle cans, regardless of whether it increases or decreases the monthly bill, must be made by the property owner. We\'re unable to process this request if you are the tenant, even if you are listed on the account.\n\nONLY organics exempt customers will have the option to receive the new 32 gallon food waste container, or a standard organics container that is 96 gallon.  Organics exempt customers who have the 96 gallon container will be able to request and switch to a 32 gallon food waste container in early 2023 when the city has more inventory.\n\n***Note***\nNo properties can request an additional 30g Food Waste container.  Customers who are yard waste exempt with a 30g Food Waste container can go up to the 90g Organics container, but an additional 30g Food Waste is not an option. \n\nPlease check the Recycling Solid Waste website for the most up to date container rates.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/2022-Rate-Adjustments \n\nTo make a change in your garbage or recycle container size, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of a Christmas tree?​​​​​​',
                description: 'If you receive yard waste services from the City of Sacramento, you can place Christmas trees in the street for pickup as part of the City\'s Leaf Season service.',
                answer: 'If you receive organics services from the City of Sacramento, you can place Christmas trees in the street for pickup as part of the City\'s Leaf Season service. If you are not an organics customer, you can take your tree to one of several drop off locations listed here.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Yard-Waste/Christmas-Tree-Recycling \n\nHoliday Tree Recycling Guidelines:\n\nTrees should be clean of all lights, decorations, tinsel, tree stands, and nails.\n\nFlocked trees will be accepted.\n\nThe city will collect up to 5 trees. Loads in excess of 5 trees will only be accepted at Elder Creek, Kiefer Landfill, and the North Area Recovery Station.\n\nIf you miss the citywide tree collection, you can put your tree in your organics container. Please cut the tree into pieces that will fit completely into the container with the lid closed.',
            },
            {
                id: generateSudoId(8),
                question: 'What is leaf season? When is it?​​​​​​',
                description: 'From November 1st through January 31st, the City of Sacramento is in Leaf Season.During this time City collects piles of yard waste from the street without an appointment.',
                answer: 'From November 1st through January 31st, the City of Sacramento is in Leaf Season.\n\nDuring this time, in addition to containerized organics service, the City also collects piles of yard waste from the street without an appointment. Properties with City provided lawn and garden service qualify for this free service.\n\nQualifying properties may place a 4\' X4\' X9\' pile of yard waste in the street for pickup. Because loose leaves have the possibility of clogging drains, we do ask that you fill your garden container before placing out a pile. Piles may be placed in the street at any time and will be picked up according to the Collection Schedule.\n\nDates are approximate and may change depending on the number of piles set out and current weather conditions. If you don\'t see a collection date for your address, you may not be using the official billing address for the location. This is common for multi-residential properties, like a duplex. If this is the case, please obtain the billing address for the property and check again.\n\nIf you are using the billing address, and still do not see a schedule, this may indicate the City of Sacramento does not service the location. \n\nAcceptable Yard Waste Materials:\nLeaves\nGrass trimmings\nTree and shrub pruning\'s\nChristmas Trees\nSod (with dirt removed)\n\nPile Guidelines:\n\nPiles should be no more than five cubic yards in size (4\'X4\'X9\' pile).  Limbs must be cut to three feet or less in length and no more than four inches in diameter.\n\nPile must be on the public street, do not place in an alley or driveway, or block the street or sidewalk. Place the pile 6 feet away from parked vehicles.\n\nAvoid placing materials in bike lanes whenever possible\n\nPlace the pile six feet from any obstruction (cars, boats, basketball hoops, etc.)\n\nMake sure there is space between the curb and pile to allow water to flow to storm drains.\n\nLeaves should not be bagged.\n\nChristmas Trees will be accepted in piles\n\nMaterials Not Accepted:\nTrash and debris\nPet feces\nAn excessive amount of dirt\nLumber and concrete',
            },
            {
                id: generateSudoId(8),
                question: 'Will the City replace the wheel on my garbage, organics or recycle container?​​​​​​',
                description: 'Damaged containers will be repaired at the City\'s expense. ',
                answer: 'Does your City-issued garbage, recycle, or organics container not roll to the curb like it once did? Perhaps they need a wheel replacement. \n\nDamaged containers will be repaired at the City\'s expense. \n\nTo report a damaged container, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Will the City replace a broken or damaged lid on my garbage, recycle, or organics container?​​​​​​',
                description: 'If your garbage, recycle, or lawn and garden container have a broken or missing lid, let us know and we\'ll get it taken care of.',
                answer: 'If your garbage, recycle, or organics container have a broken or missing lid, let us know and we\'ll get it taken care of.\n\nBroken containers will be repaired at the City\'s expense.\n\nTo request a damaged container be replaced, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'There is a stray can in my neighborhood. Can someone come to remove it?​​​​​​',
                description: 'If you find a stray container in your neighborhood, please report it so that it can be picked up by the Recycling Solid Waste team.',
                answer: 'If you find a stray container in your neighborhood, please report it so that it can be picked up by the Recycling Solid Waste team.\n\nTo report a stray can, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Can I contract with the City to provide commercial dumpster services?​​​​​​',
                description: 'The City of Sacramento does not provide commercial collection services.',
                answer: 'The City of Sacramento does not provide commercial collection services.\n\nIf you need commercial garbage, recycling, or organics services, please contact one of the franchised haulers authorized by Recycling Solid Waste Waste Compliance.\nhttps://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Commercial-Services/Commercial-Haulers',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of hazardous waste?​​​​​​',
                description: 'Products, such as paint cleaners, oil, batteries, and pesticides require special care and should not be thrown into residential waste containers.',
                answer: 'Products, such as paint cleaners, oil, batteries, and pesticides require special care and should not be thrown into residential waste containers. These products may contain corrosive, toxic, ignitable, or reactive ingredients and are considered household hazardous waste (HHW). \n\nTo get more information about household hazardous waste and how to dispose of it, visit us here.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Household-Hazardous-Waste',
            },
            {
                id: generateSudoId(8),
                question: 'Can a household junk pick up be scheduled if I live on a private street?​​​​​​',
                description: 'Household junk pickups are provided to all properties with City garbage service, including those on private streets',
                answer: 'Household junk pickups are provided to all properties with City garbage service, including those on private streets. There is no longer a need for a waiver to be signed to provide this service.\n\nTo schedule a household junk pickup, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I dispose of used motor oil?​​​​​​',
                description: 'City of Sacramento residents can conveniently recycle used motor oil and motor oil filters without leaving home.',
                answer: 'City of Sacramento residents can conveniently recycle used motor oil and motor oil filters without leaving home.\n\nThe City of Sacramento recycling crew will collect up to 2 gallons of motor oil and 2 oil filters per appointment. This is an appointment-only service. Please do not leave the oil out prior to your scheduled appointment. There are no limits on the number of appointments a City resident can schedule.\n\nSimply follow these steps:\n\nPlace used oil in one-gallon, clear plastic jugs with a screw-on cap (i.e. milk or water jug; secure the cap with tape). The City no longer provides containers. Containers used to hold material will not be returned. \n\nPlace DRAINED oil filter(s) in a sealed, leak-proof bag with the holes facing up.\n\nPlace your waste out for disposal by 6:00 AM on the day of your appointment.\n\nPlace items in a safe spot on your driveway or near a garage or porch. Items should be in plain view from the street. Please do not put materials on the sidewalk, in the gutter, or on the street.\n\nThe Sacramento oil recycling program accepts motor oil only. Cooking oil will not be collected\n\nNEVER contaminate used oil by mixing with other auto fluids. \n\n\nTo schedule a motor oil pickup appointment, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I schedule a battery and light bulb pickup?​',
                description: 'The door to door collection of batteries and bulbs was discontinued in August of 2019. ',
                answer: 'The door to door collection of batteries and bulbs was discontinued in August of 2019. \n\nBattery disposal locations can be found here.\nhttp://www.cityofsacramento.org/public-works/RSW/Collection-Services/Household-Hazardous-Waste/Batteries \n\nLight bulbs can be dropped off at a Household Hazardous Waste facility.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Household-Hazardous-Waste/HHW-Drop-Off-Facilities',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I schedule an EWaste/Electronics Pickup?​',
                description: 'All residential Solid Waste customers can schedule two appointments for appliance and e-waste collection in a calendar year.',
                answer: 'All residential Solid Waste customers can schedule two appointments for appliance and e-waste collection in a calendar year. The appliance e-waste program operates year-round. Unused appointments do not roll over into the next calendar year. All appointments are available on a first-come, first-served basis.\n\nPick-up Requirements:\nThere is a minimum weight of at least 10 lbs. per pickup.\n\nMaterials should be out no earlier than 24 hours before the scheduled appointment.\n\nMaterials must be placed out for collection by 6:00 AM on the scheduled appointment day.\n\nMaterials must be placed at the front of the property, be clearly visible from the street, and on a paved surface such as the driveway. Items may not be placed on the sidewalk, in the street, or in an alley. The ideal placement location is at the end of the driveway, away from any vehicles.\n\nAppliances, such as refrigerators and freezers, must be empty.\n\nAll cancellations or reschedule requests should be made 2 business days prior to the scheduled appointment date. Cancellation requests received with less than 2 business days notice may result in the appointment being counted as used, even if no items are set out for removal.\n\nAccepted Items:\n\nUp to two (2) large appliances and up to four (4) large e-waste items. A box of small E-Waste may be substituted for one appliance. All items set out for pickup must be whole and complete.\n\nAppliances\nAir Conditioner\nDehumidifier\nDishwasher\nDryer\nFreezer\nFurnace\nHot Water Heater\nMicrowave\nOven\nRefrigerator\nStove/Range\nTrash Compactor\nWashing Machine\nWater Heater\nEwaste\nCRT monitors and TVs\nLCD monitors and TVs\nLED monitors and TVs\nPlasma televisions\nProjection televisions\nDesktop PCs\nLaptop PCs\nServers\nNetwork Equipment\nTelecom Equipment\nPrinters\nCopiers\nFax Machines\nMulti-Function Devices\nLaser Scanners\nTelecom Equipment\nHard Drives\nAll Computer Peripherals\nHousehold Appliances\nVacuums\nHair Dryers\nToasters\nStereo Equipment\nSmall Kitchen Appliances\nCD & Tape Players\nVCR\'s and DVD Players\nCalculators\nTelephones\nCell Phones & PDA\'s\nDigital Cameras\nSpeakers\nElectronic Cables\nVideo Game Consoles\nCar Stereos\nPower Cords & Strips\nKeyboards & Mice\nPrinted Circuit Boards\nPower Supply Units\nSpeakers\n\nTo schedule an Ewaste appointment, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​When are garbage containers delivered at newly built properties?​',
                description: 'Utility Billing: After a billing account has been created, a date for container delivery will be set-up.',
                answer: 'The Utility Billing team takes care of setting up service for newly built homes.\n\nAfter a billing account has been created, a date for container delivery will be set-up. If your containers have not arrived when you take occupancy of the property, please contact the  Utility Billing office at 916.808.5454 and select option two.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​​​How can I request a recycle guide or dump coupon?​​​​​​',
                description: 'A printed recycle guide that includes a dump coupon is mailed out to every property mid-year.',
                answer: 'A printed recycle guide that includes a dump coupon is mailed out to every property mid-year.\n\nThe guide provides information about scheduling and identifies materials that are acceptable to place in the recycle container. The guide also contains information about the other services provided by the City\'s Recycling and Solid Waste division, as well as your yearly dump coupon.\n\nTo replace a misplaced recycle guide or dump coupon, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Should I wash my recyclables before placing them in the bin?​​​​​​',
                description: 'When recycling approved materials, it is preferred that the items be clean of most residue.',
                answer: 'The market for recyclable items has become more complicated and so we must make better choices about reducing our reliance on plastics, reusing items where we can, and putting the right items in the blue recycle bin.\n\nWhen recycling approved materials, it is preferred that the items be clean of most residue. For information on what\'s accepted in your recycling container, please visit us here.\nhttp://www.cityofsacramento.org/public-works/RSW/Collection-Services/Recycling',
            },
            {
                id: generateSudoId(8),
                question: 'Can I change the day or frequency my recycling can is serviced?​​​​​​',
                description: 'The City recycling service is provided on a fixed every-other-week schedule. There is no ability to change the week your can is serviced. ',
                answer: 'The City recycling service is provided on a fixed every-other-week schedule. There is no ability to change the week your can is serviced. \n\nTo find your specific recycling week, please use the Collection Calendar.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Collection-Calendar',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I find my garbage collection days and set-up reminders?​​​​​​',
                description: 'Our collection calendar allows you to view, download, and print a service calendar specific to your address.',
                answer: 'Our collection calendar allows you to view, download, and print a service calendar specific to your address.\n\nWhile there, you can also set weekly reminder alerts via text or email. To check your service day, or set up a reminder, visit us here.\nhttp://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Collection-Calendar ',
            },
            {
                id: generateSudoId(8),
                question: 'Where should I store my City-issued trash cans?​​​​​​',
                description: 'Solid Waste containers must be placed in a storage location within, adjacent to, or behind a structure, building, fence, landscaping, or another barrier, which substantially screens the view of the containers from the street or public right-of-way.',
                answer: 'Solid Waste containers must be placed in a storage location within, adjacent to, or behind a structure, building, fence, landscaping, or another barrier, which substantially screens the view of the containers from the street or public right-of-way. Solid Waste containers are not permitted to be visible from the public right of way.\n\nSolid Waste (garbage, yard waste, recycle) containers may only be on the street 12 hours before, or after scheduled collection day, unless instructed by the city staff. Containers may not be used to prevent vehicles from parking on the street.\n\nTo report trash containers visible from the street, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.\n\nPhone:\n916.808.5454, option 2\nMonday - Thursday 8 AM-4 PM\nFriday: 8 AM-11:30 AM\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday, 8 AM - 4 PM\nFriday 8 AM - 11 AM\n\nOnline: https://secure8.i-doxs.net/CityofSacramento/ \n\nBy Mail:\nCity of Sacramento Utility Billing\nPO Box 2770\nSacramento, CA 95812-2770\n\nFor all other City bills or invoices, please visit the Revenue Department in person or send a payment by mail.\n\nIn-Person:\n915 I Street (New City Hall), First Floor, Room 1214.\nMonday - Friday 8:30 AM - 4:30 PM\n\nBy Mail:\nCity of Sacramento Revenue Services\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814',
            },
            {
                id: generateSudoId(8),
                question: 'How does the City address illegal dumping?​​​​​​',
                description: 'If you see a pile of debris on a public street, please report it.',
                answer: 'Illegal dumping is a crime and a blight on our neighborhoods.\n\nIf you see a pile of debris on a public street- don\'t wait - report it. Piles left behind frequently become dumping grounds for additional material. The faster the problem is reported, the sooner enforcement and removal can begin. Provide as accurate a location as possible, including address, or cross street nearest the pile, and items included in the pile.\n\nIf you witness illegal dumping in progress, please note the license plate, vehicle make and model, and description of the violator and notify non-emergency police at 916.808.5011.\n\nThe City\'s reward program can provide up to $1,000 to persons providing information to the City which results in either an administrative penalty for the violator or an arrest and misdemeanor conviction. Details on how the reward program works and who is eligible are available here.\nhttps://www.cityofsacramento.org/Public-Works/RSW/Collection-Services/Illegal-Dumping',
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
                answer: 'Parking in bicycle lanes is not allowed as it prohibits cyclists and motorists from safely passing. Vehicles parked in bike lanes may be cited by a Parking Enforcement Officer.\n\nTo report a vehicle parked in a bike lane, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can I request a bike rack to be installed?​',
                description: 'Bike racks can be installed on City-owned property or right-of-way locations.',
                answer: 'Sacramento strives to be a bike-friendly city with a variety of racks placed throughout the city. You can view a map of rack locations here.\nhttp://www.cityofsacramento.org/Public-Works/Transportation/Programs-and-Services/Bicycling-Program \n\nAdditional racks can be installed on City-owned property or right-of-way locations. Installation is free to businesses and property owners. \n\nFor more information, or to request a new bike rack installation, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Transportation/Programs-and-Services/Bicycling-Program/Apply-Now',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for the maintenance of curbs and gutters?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance of the public street-side curbs and gutters. Curbs and gutters on private property are the responsibility of the property owner.',
                answer: 'The City of Sacramento is responsible for the maintenance of the public street-side curbs and gutters. Curbs and gutters on private property are the responsibility of the property owner.\n\nStaff from the City\'s Concrete Department will respond to reports of damaged or unsafe curb and gutter surfaces within 48 hours. An inspection will occur to ensure the area is safe. \n\nSacramento City Code 12.32 identifies property owners as responsible to maintain the sidewalk adjacent to their property in such a way that does not endanger persons, property, or interfere with public convenience. If a concern is discovered, City staff will notify the appropriate property owner and coordinate the repair.\n\nFor more information, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Maintenance-Services/Sidewalks-Curbs-Gutters \n\nTo report a concern with a sidewalk, curb, or gutter, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Do I need a permit to block the sidewalk or street?​',
                description: 'A permit is required to perform work within the public right-of-way.',
                answer: 'A permit is required to perform work within the public right-of-way (usually a sidewalk, street, alley, or easement) or to use portions of a street for exclusive purposes, such as placing a moving pod.  \n\nFor more information, please contact the Encroachment team at 916.808.6810 or visit us here.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​​​Can I request speed bumps to be installed to deter speeding in my neighborhood?​​​​​​',
                description: 'Unless chronic speeding problems exist on your street, speed lumps are not warranted. Traffic control, such as police enforcement, is usually a better alternative',
                answer: 'Speed humps or lumps are raised "bumps" placed across residential streets. They are designed to calm traffic in residential areas and near parks and schools. \n\nUnless chronic speeding problems exist on your street, speed lumps are not warranted. Traffic control, such as police enforcement, is usually a better alternative. Speed lumps are used for streets where traditional methods of slowing traffic have not been effective. A residential street will qualify for the City\'s Speed Lump\n\nProgram based on the following criteria:\n\nThe two-lane street must be mainly residential or else have a park or school on the street.\n\nThe residential street (or the part being considered) must be at least 750 feet long with no four-way intersections.\n\nThere can be no other traffic control devices on the street segment such as four-way stop signs, traffic signals, etc.\n\nThe speed limit must be 30 miles per hour or less.\n\nSpeeding of 5 miles per hour or higher over the speed limit occurs on the street.\n\nThe street must be approved by Regional Transit and the Fire Department.\n\nA Speed Lump petition must be signed by at least 10 residents from separate households to begin the assessment process. To learn more and download a petition, visit the Speed Lump Program page.\nhttp://www.cityofsacramento.org/Public-Works/Transportation/Programs-and-Services/Traffic-Calming/Speed-Lumps',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report a damaged or malfunctioning street light?​​​​​​',
                description: 'If you observe a malfunctioning street light, street light on during the day, or a street light with damage, please report it.',
                answer: 'The City maintains approximately 40,000 street lights within the city limits.\n\nIf you observe a malfunctioning street light, street light on during the day, or a street light with damage, please report it.\n\nTo report a concern with a street light, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for the maintenance of the sidewalk?​​​​​​',
                description: 'Sacramento City Code identifies property owners as responsible (including financially) to maintain the sidewalk adjacent to their property in such a way that it does not endanger persons, property, or interfere with public convenience.',
                answer: 'Broken or damaged sidewalks can be an eyesore and an inconvenience for citizens. Cracks, spacing, and uneven surfaces in the sidewalk can impede public access and pose a serious hazard for passers-by. Sacramento City Code 12.32 identifies property owners as responsible (including financially) to maintain the sidewalk adjacent to their property in such a way that it does not endanger persons, property, or interfere with public convenience.\n\nCity inspectors will evaluate reports of damaged sidewalks and contact the associated property owner when the need for repair is confirmed.  Property owners may elect to hire a licensed contractor, perform the work themselves, or choose to have the City assign the work to a contractor and be billed.  All work, regardless of who performs it, must meet the City’s specifications as to the time of completion, materials, and workmanship.\n\nWhen work is completed under contract with the City of Sacramento, qualifying property owners may elect a payment plan option, which allows repayment of the sidewalk repair bill in installments with no interest.\n\nIf after sixty (60) days from receiving notification of needed sidewalk repair, no action has been taken to begin necessary repairs, or the property owner fails to complete the repairs in the time permitted, the City of Sacramento will repair the sidewalk at the property owners expense.\n\nFor answers to our most frequently asked questions, visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Maintenance-Services/Sidewalks-Curbs-Gutters \n\nTo report a concern with a sidewalk, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report concerns with missing or damaged street signs?​​​​​​',
                description: 'The city maintains approximately 100,000 traffic and street name signs.',
                answer: 'The city maintains approximately 100,000 traffic and street name signs.\n\nMissing or displaced traffic signs, like stop signs, can pose a significant public safety concern, and should be reported immediately. To report an urgent concern regarding a traffic sign please 311 or 916.808.5011.\n\nTo report a non-urgent matter, like a damaged or missing street name sign, please submit a request. \n\nPlease note: City of Sacramento street name signs are green. If you see a white street name sign, you are no longer within City limits and we will be unable to assist.',
            },
            {
                id: generateSudoId(8),
                question: 'Can garbage cans or leaf piles be placed in the bike lane?​​​​​​',
                description: 'In many parts of Sacramento, cyclists are required to share the bike lane with leaf piles or garbage containers due to the limited amount of space for both.',
                answer: 'In many parts of Sacramento, cyclists are required to share the bike lane with leaf piles or garbage containers due to the limited amount of space for both.\n\nWhile leaf piles and cans need to be out for servicing, they are not permitted to remain in the street for long periods of time.  Containers left out beyond their service day or leaf piles outside of leaf season, November through January, can be reported.\n\nTo report cans or leaf piles left in bike lanes, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I report concerns with a bike trail?​',
                description: 'The City of Sacramento maintains miles of bike trails.',
                answer: 'The City of Sacramento maintains miles of bike trails.\n\nHoles, cracks, and uneven asphalt in bike trails can be a concern for cyclists and others on the trail. Please report damaged bike trails, clearly describing the location of the trail damage, and providing as much detail as possible about the damage.\n\nTo report concerns with a bike trail, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'How can I report junk or debris in the bike lane?​​​​​​',
                description: 'Occasionally, junk or debris is dumped in the bikeway making for dangerous conditions for riders. These conditions should be reported so that a City crew can respond and remove the material.',
                answer: 'Sacramento has an extensive bikeway network, making it easy to get around on your bike in the City. Occasionally, junk or debris is dumped in the bikeway making for dangerous conditions for riders. These conditions should be reported so that a City crew can respond and remove the material. \n\nTo report junk or debris in a bike lane, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What is street resurfacing and when does it take place?​',
                description: 'The City resurfaces streets to maintain their safety.',
                answer: 'Street Resurfacing in the City of Sacramento is scheduled based on a 5-year plan. Typically, street resurfacing occurs in the summer and fall.\n\nResidents in a planned resurface area will be mailed information in advance of the construction and notified again with an informative door-hanger three to five days before resurfacing is scheduled to begin. The notice will contain information regarding the road-work schedule and how to prepare for the interruption. Barricades will be placed on the affected street indicating the days parking will be restricted.\n\nFor more information, or to see the current resurfacing map, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Maintenance-Services/Street-Maintenance/Resurfacing-Program',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City-owned landscaped areas like medians and streetscapes?​​​​​​',
                description: 'The City of Sacramento is responsible for the maintenance and repair of public landscaping.',
                answer: 'The City of Sacramento is responsible for the maintenance and repair of public landscaping, including medians, special district-funded street frontages along arterial roadways, neighborhood gateways, and other public spaces. Routine landscape maintenance operations such as mowing, trimming, weeding, and irrigation are provided by contracted landscape maintenance companies.\n\nTo report concerns with water waste, vandalism, or general upkeep, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Does the City have any bike parking programs?​',
                description: 'The City of Sacramento offers both free and low-cost options for bicyclists who work, visit or live downtown.',
                answer: 'The City of Sacramento offers both free and low-cost options for bicyclists who work, visit or live downtown. Bicycle racks are located throughout the city and are free to use.\n\nTo read more about the programs available, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Parking-Services/Discount-Programs/Bicycle-Parking-Programs',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for maintaining the street and addressing potholes?​​​​​​',
                description: 'The City of Sacramento maintains the public streets.',
                answer: 'Each year, on a rotational basis, one-third of city streets are examined to determine what treatment may be needed. The City of Sacramento uses this information to update a five-year resurfacing plan to ensure the existing road infrastructure is operating at a satisfactory level. Information about which streets are included in the resurfacing program can be found here. \n\nOccasionally, regardless of ongoing preventive work, holes develop in the roadway. These potholes can increase in size if not repaired quickly. Please let us know if you see potholes in the roadway. Once reported, a Street Maintenance crew will inspect the location. Hazards will be repaired immediately.\n\nLarge objects in the roadway can be a safety hazard for vehicles and should be reported promptly.\n\nTo report a pothole or an object in the roadway, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I report concerns with a traffic signal?​',
                description: 'Traffic Signal problems can pose serious public safety hazards and are responded to immediately.',
                answer: 'The City currently operates over 700 intersections controlled by traffic signals. Over 300 traffic signals are connected to the City\'s Traffic Operation Center, allowing signal timing to be managed to meet the dynamic needs of the area.  \n\nTraffic Signal problems can pose serious public safety hazards and are responded to immediately.  \n\nTo report a traffic signal problem, please call 311 or 916.808.5011. Please do submit an online request as this may cause a delay in response.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Who maintains street markings?​',
                description: 'The City maintains street markings of many types.',
                answer: 'The City maintains street markings of many types.\n\nIf you notice painted marks on the street or curb that are no longer visible or are in poor condition, please let us know.  When reporting a concern, please describe the type of markings, crosswalk, stop markings, turn lane boundaries, etc, and the exact location.\n\nTo report a concern with street markings, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Can I place a banner on a street pole?​',
                description: 'Placement of banners on city-owned light poles requires a permit from the City of Sacramento',
                answer: 'Placement of banners on city-owned light poles requires a permit from the City of Sacramento.  Approval from the local business association is also required in areas where one exists, \n\nFor more information or to obtain an application, please visit us here.\nhttp://www.cityofsacramento.org/Public-Works/Engineering-Services/Permits/Encroachment-Permits',
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
                answer: 'The City\'s Urban Forestry department is responsible for the maintenance of City-owned street trees and for the removal of trees, or tree limbs, that are blocking the public right-of-way.\n\nUrban Forestry maintains emergency response crews to clear the right-of-way and remove public tree debris from private property.  \n\nTo report a fallen tree limb, please call 311 or 916.808.5011 so that we can respond immediately. ',
            },
            {
                id: generateSudoId(8),
                question: 'Who maintains City trees and how can I request a tree be pruned?​​​​​​',
                description: 'The City of Sacramento\'s Urban Forestry division provides maintenance to city street trees, trees in the public right-of-way, and trees on City property.',
                answer: 'The City of Sacramento\'s Urban Forestry division provides maintenance to city street trees, trees in the public right-of-way, and trees on City property. The City\'s Parks Department provides maintenance for trees in City parks.\n\nThe City maintains a multi-year tree inspection and pruning cycle, ensuring each City tree is reviewed regularly. The current pruning cycle is approximately 5 years. A tree\'s location, species, and size affect it\'s how frequently it is inspected. Trees may be pruned out of cycle if the tree is impacting private property, the right-of-way such as road and sidewalk clearance, or if the tree represents a safety hazard.\n\nOnly City staff is allowed to prune a City-owned tree. If you suspect and pruning or removing of a City tree, please call 311 or 916.808.5011.\n\nTo report a City tree you believe requires out of cycle pruning, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Who can remove tree limbs in power lines?​',
                description: 'The removal of trees in power lines requires specialized methods and training and is therefore performed by SMUD. ',
                answer: 'The removal of trees in power lines requires specialized methods and training and is therefore performed by SMUD.\n\nFor information on tree maintenance performed by SMUD, please call 916.732.5854',
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
                answer: 'There are a variety of ways to contact the Utilities Billing Department.\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday 8 AM-4 PM\nFriday - 8AM-11:30AM\n\nBy Phone:\n916-808-5454, option 2\nMonday - Thursday 8 AM-4 PM and Friday 8 AM-11:30 AM.\n\nBy Mail, including payments:\nPO Box 2770\nSacramento, CA 95812-2770\n\nEmail:\nutilitiescs@cityofsacramento.org',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​I have a rental property, who is responsible for the utility payments?​',
                description: 'Regardless of who occupies a home, the property owner is ultimatley responsible for costs relating to billed City services such as water, sewer, storm drain, and solid waste services.',
                answer: 'Regardless of who occupies a home, the property owner is ultimately responsible for costs relating to billed City services such as water, sewer, storm drain, and solid waste services. \n\nIf a tenant has been added to a Utility Account but is not making payments, the responsibility for the account is with the property owner. The City of Sacramento will not pursue a tenant for payment.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I pay a City invoice or utility bill?​',
                description: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.',
                answer: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.\n\nPhone:\n916.808.5454, option 2\nMonday - Thursday 8 AM-4 PM\nFriday: 8 AM-11:30 AM\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday, 8 AM - 4 PM\nFriday 8 AM - 11 AM\n\nOnline: https://secure8.i-doxs.net/CityofSacramento/ \n\nBy Mail:\nCity of Sacramento Utility Billing\nPO Box 2770\nSacramento, CA 95812-2770\n\nFor all other City bills or invoices, please visit the Revenue Department in person or send a payment by mail.\n\nIn-Person:\n915 I Street (New City Hall), First Floor, Room 1214.\nMonday - Friday 8:30 AM - 4:30 PM\n\nBy Mail:\nCity of Sacramento Revenue Services\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814',
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
                answer: 'Standard water pressure in the City of Sacramento is 35-42 psi.\n\nIf you suspect your water pressure is below the minimum, a water team member can test an outside faucet. Inside water pressure can be verified by a private plumbing company.\n\nTo have your outside water pressure tested, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Does the City address water misuse?​​​​​​',
                description: 'If you observe water misuse taking place, please report it. Our Water Conservation team will work with the property owner to provide education on water conservation.',
                answer: 'Sacramento City watering schedules for residential and commercial water customers change during daylight savings. The current schedule can always be found here.\nhttp://www.cityofsacramento.org/Utilities/Conservation \n\nIf you observe water misuse taking place, please report it. Our Water Conservation team will work with the property owner to provide education on water conservation.\n\nWater misuse can include:\n\nGutter or pavement flooding\n\nFlooding a neighbor\'s property\n\nWatering at the wrong time\n\nWatering on a wrong day\n\nLeaking or faulty water fixture\n\nWashing a vehicle on a wrong day\n\nWashing a vehicle without a shut-off nozzle\n\nWashing down a paved area\n\n\nWhen reporting water misuse, please provide the following:\n\nDay and time misuse was observed\n\nLocation;  front, back, side, rear yard\n\nHow long the misuse has been occurring\n\nIf the misuse is currently happening\n\nIf this is a reoccurring concern, please indicate how often you\'ve witnessed the misuse.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Why does my drinking water smell during the summer?​',
                description: 'Every summer, river water levels drop, and outside temperatures rise. These seasonal changes along with the presence of certain nutrients in the water can cause a change in smell and taste of our drinking water.',
                answer: 'A large part of the City of Sacramento drinking water comes from the Sacramento and American Rivers.\n\nEvery summer, river water levels drop, and outside temperatures rise. These seasonal changes along with the presence of certain nutrients in the water can cause a change in smell and taste of our drinking water. The City Department of Utilities treats this alga but the parts that are left can cause an odor and taste that sensitive groups may detect.\n\nThese compounds, also found in soil and mushrooms, have strong earthy tastes and odors that people can detect at water concentrations of less than 10 parts per trillion (ppt). A recommendation to counteract the taste and odor is to chill or add lemon juice to the water prior to consumption.\n\nYou can read the latest Water Consumer Confidence Report here.\nhttp://www.cityofsacramento.org/Utilities/Water/Water-Quality/Drinking-Water-Quality-FAQs',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Am I able to request the water be turned off or on for repairs?​',
                description: 'Water can be turned off or on to allow repairs to take place.',
                answer: 'Water can be turned off or on to allow repairs to take place. Water will not be turned off at an owner\'s request due to a tenant\'s non-payment. If water service has been terminated due to non-payment, the account must be paid in full before service can be restored. To make a payment, please call our Utility Billing team at 916.808.5454 and select option 2. Staff is available Monday - Thursday 8 AM - 4 PM, and Friday from 8 AM-11 AM. \n\nRequests for water service to be turned on require that a person over the age of 18 be present at the time of service. We will be unable to complete your request if this requirement can not be met. Requests for water to be restored are only processed Monday - Friday from 8 AM to 10 PM.\n\nIf water needs to be turned off, there is no requirement for someone to be present. Requests for water to be turned off are processed  24 hours a day, every day of the year.  \n\nOnce a water request is received, a crew will be dispatched and respond to the location within two hours. We are unable to preschedule these requests. \n\nTo turn water services off or on, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: 'Who is responsible for watering City parks?​​​​​​',
                description: 'City staff is responsible for watering City parks.',
                answer: 'The City operates multiple types and sizes of parks, including Neighborhood, Community, and Regional parks, ranging in size from 2 to 200 acres.  \n\nAll parks are irrigated and many operate using automatic timers. Because parks are frequently scheduled for social and sporting events, parks are not required to adhere to the scheduled watering days. Additionally, Parks staff may need to make repairs and tests of the irrigation systems during their normal work shifts that may be contrary to residential watering times.\n\nRegardless of when we water, our goal will always be to conserve and water wisely.  If you notice a sprinkler causing water to run-off into the sidewalk, a broken sprinkler, one spraying inappropriately, an area of a park not being watered sufficiently, or any other park irrigation issue, please let us know so we can take care of it. \n\nTo report a watering or irrigation concern, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​What are the current watering guidelines?​',
                description: 'While emergency watering restrictions ended in August 2017, the City of Sacramento made long-term water conservation a way of life by adopting a permanent watering schedule of two days-per-week from March through October, and one day-per-week from November through February.',
                answer: 'While emergency watering restrictions ended in August 2017, the City of Sacramento made long-term water conservation a way of life by adopting a permanent watering schedule of two days-per-week from March through October, and one day-per-week from November through February. The current schedule can always be found here.\nhttp://www.cityofsacramento.org/Utilities/Water/Conservation/Water-Wise-Tools/Watering-Scedule-Ordinances \n\nThe Spring Watering Schedule begins March 1 and runs through October 31. Watering days are based on your odd or even address. Even-numbered businesses water on Wednesday and Sunday. Odd-numbered business water on Tuesday and Saturday.\n\nThe Winter Watering Schedule begins November 1 and runs through February 28.  Watering is reduced to one day per week, either on Saturday or Sunday. Businesses may pick their watering day. No weekday watering is permitted. The remainder of the year, watering is allowed two days per week. Watering days are based on your odd or even address.\n\nRegardless of the season, watering is allowed from 7 PM-10 AM only. Visit Watering Schedule for more details and handy, downloadable infographics. No over-watering (excessive water running off properties and onto sidewalks or gutters, or ponding of water on properties) is allowed, nor is watering allowed within 48 hours of measurable rain (1/8”).\n\nTo report water misuse, please submit a request.',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​How can I reach the Water Conservation staff?​',
                description: 'Water Conservation Department staff is available to answer your questions or concerns.',
                answer: 'Water Conservation Department staff is available to answer your questions or concerns. You can reach them directly at 916.808.5605',
            },
            {
                id: generateSudoId(8),
                question: 'Is the City still in the process of upgrading water meters?​​​​​​',
                description: 'The City\'s water meter replacement project began in May 2017 and is scheduled to continue through 2021.',
                answer: 'The City of Sacramento\'s Department of Utilities is installing water meters, advancing metering communications technology, abandoning some backyard water mains, and installing new mains placed in the street right-of-way as part of the Meters Matter program. Work began in May 2017 and is scheduled to continue through 2021.\n\nWhen water meter construction takes place in your neighborhood, you will always have access to your home. However, access to parking on your street may be temporarily restricted while construction takes place.\n\nWhen construction occurs at your property:\nWater could be shut off for up to 4 hours\n\nAccess to your yards may be necessary\n\nSidewalk closures and traffic delays may occur\n\n\nTo view the current project areas, visit us here.\nhttp://www.cityofsacramento.org/Utilities/Water/Conservation/Water-Wise-Tools/Water-Meters',
            },
            {
                id: generateSudoId(8),
                question: 'I received a notice about the quality of my drinking water. Is it legitimate?​​​​​​',
                description: 'When water quality issues have been identified, the City will issue water advisory notices in conjunction with the State Water Resource Board.',
                answer: 'The City continuously monitors the quality of our drinking water including the treatment processes and distribution system to ensure that issues are quickly identified and corrected. Our facilities are securely maintained and suspected breaches are thoroughly investigated to safeguard the quality of our drinking water. City water meets or exceeds state and federal drinking water standards.\n\nWhen water quality issues have been identified, the City will issue water advisory notices in conjunction with the State Water Resource Board. Common triggers include bacteria in samples, tampering, or vandalism that lead to contamination, a natural disaster such as flooding or earthquake, or a disruption in the treatment or distribution systems.  \n\nWhen a notice is issued, the specific water quality concern will be identified along with the recommended solution. Notices will be released via news outlets, social media channels, and door to door visits to ensure the public is appropriately informed. \n\nSacramento Water Quality staff is available to answer questions or concerns regarding the quality of our drinking water. Staff can be reached directly at 916.808.3737',
            },
            {
                id: generateSudoId(8),
                question: '​​​​​Where can I find the latest water quality report?​',
                description: 'The latest available water quality report is available online.',
                answer: 'The City of Sacramento provides an annual report on its water quality.\n\nIn June of every year, reports are mailed to all City of Sacramento Water customers. You can read the latest available report here.\nhttp://www.cityofsacramento.org/Utilities/Education/water-quality',
            },
            {
                id: generateSudoId(8),
                question: 'Where can I pay a City invoice or utility bill?​​​​​​',
                description: 'Where can I pay a City invoice or utility bill?',
                answer: 'You may pay your City Utility bill for water, sewer, drains, and trash by phone, in person, online, or by mail.\n\nPhone:\n916.808.5454, option 2\nMonday - Thursday 8 AM-4 PM\nFriday: 8 AM-11:30 AM\n\nIn-Person:\n1395 35th Avenue\nSacramento, CA 95822\nMonday - Thursday, 8 AM - 4 PM\nFriday 8 AM - 11 AM\n\nOnline: https://secure8.i-doxs.net/CityofSacramento/ \n\nBy Mail:\nCity of Sacramento Utility Billing\nPO Box 2770\nSacramento, CA 95812-2770\n\nFor all other City bills or invoices, please visit the Revenue Department in person or send a payment by mail.\n\nIn-Person:\n915 I Street (New City Hall), First Floor, Room 1214.\nMonday - Friday 8:30 AM - 4:30 PM\n\nBy Mail:\nCity of Sacramento Revenue Services\n915 I Street (New City Hall), Room 1214\nSacramento, CA 95814',
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