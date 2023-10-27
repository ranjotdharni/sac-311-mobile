export const dummyDataHome = [
    {
        category: 'Dead Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * (200 - 1) + 1 ),
        date: new Date(),
        status: 'Open'
    },
    {
        category: 'Parking Violation',
        type: 'Auto',
        number: Math.floor( Math.random() * (200 - 1) + 1 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'Irrigation',
        type: 'Water',
        number: Math.floor( Math.random() * (200 - 1) + 1 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'General Parking',
        type: 'Auto',
        number: Math.floor( Math.random() * (200 - 1) + 1 ),
        date: new Date(),
        status: 'Closed'
    },
    {
        category: 'Stray or Loose Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * (200 - 1) + 1 ),
        date: new Date(),
        status: 'Closed'
    },
]

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