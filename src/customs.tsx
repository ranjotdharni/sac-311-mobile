//                              //
//             Imports          //
//                              //

import { StyleSheet } from 'react-native'

//                              //
//      Static Types Section    //
//                              //

export interface responseType {
    attributes: {
        ReferenceNumber : string, 
        CategoryLevel1 : string, 
        CategoryLevel2 : string, 
        CategoryName : string, 
        CouncilDistrictNumber : string, 
        DateCreated : number, 
        DateUpdated : number, 
        DateClosed : number, 
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

//                              //
//      Dummy Data Section      //
//                              //

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
    const defaultParameters: string = '&outFields=ReferenceNumber%2C+CategoryLevel1%2C+CategoryLevel2%2C+CategoryName%2C+CouncilDistrictNumber%2C+DateCreated%2C+DateUpdated%2C+DateClosed%2C+CrossStreet%2C+ZIP%2C+SFTicketID%2C+Address%2C+Data_Source%2C+PublicStatus%2C+Neighborhood%2C+SourceLevel1&returnGeometry=true&outSR=4326&f=pjson'

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
    baseBackground100: '#ffffff',

    baseBlue100: '#2F2DA3',
    baseBlue200: 'rgba(47, 45, 163, 0.5)',

    baseGold100: '#BEA315',
    baseGold200: 'rgba(190, 163, 21, 0.5)',
    baseGold300: 'rgba(190, 163, 21, 0.33)',

    baseGrey100: '#6F6F6F',
}