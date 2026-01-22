// Sample data for the prototype
const orders = {
    'AF-29384': {
        id: 'AF-29384',
        route: 'Seattle, WA → Atlanta, GA',
        status: 'In Transit',
        freight: '2 pallets',
        currentLocation: 'Salt Lake City, UT',
        originalETA: 'Feb 4 by 5 PM',
        updatedETA: 'Feb 4 by 3 PM',
        timeline: [
            { date: 'Jan 27, 10:04 AM', event: 'Picked up', location: 'Seattle, WA' },
            { date: 'Jan 27, 11:32 AM', event: 'Departed origin terminal', location: 'Seattle, WA' },
            { date: 'Jan 28, 8:15 AM', event: 'In transit', location: 'Boise, ID' },
            { date: 'Jan 29, 6:42 AM', event: 'In transit', location: 'Salt Lake City, UT' },
            { date: 'Jan 29, 7:15 AM', event: 'Departed hub', location: 'Salt Lake City, UT' }
        ]
    },
    'AF-31205': {
        id: 'AF-31205',
        route: 'Dallas, TX → Boston, MA',
        status: 'Ready to Ship',
        freight: '4 pallets',
        service: 'Expedited (3-4 days)',
        pickupAddress: '4521 Commerce St, Dallas, TX 75226',
        deliveryAddress: '125 Summer St, Boston, MA 02110'
    },
    'AF-28192': {
        id: 'AF-28192',
        route: 'Chicago, IL → Miami, FL',
        status: 'Delayed',
        freight: '1 pallet',
        originalETA: 'Jan 20 by 5 PM',
        newETA: 'Jan 22 by 12 PM',
        currentLocation: 'Nashville, TN terminal',
        delayReason: 'Weather delay (winter storm in Tennessee)',
        originalRate: 1247,
        timeline: [
            { date: 'Jan 19, 2:30 PM', event: 'Departed Memphis hub', location: 'Memphis, TN' },
            { date: 'Jan 19, 6:45 PM', event: 'Winter storm warning issued', location: 'I-40 corridor' },
            { date: 'Jan 19, 8:20 PM', event: 'Driver diverted to terminal', location: 'Nashville, TN' },
            { date: 'Jan 20', event: 'Roads closed, shipment held', location: 'Nashville, TN' },
            { date: 'Jan 21 (today)', event: 'Roads reopening, preparing for departure', location: 'Nashville, TN' }
        ]
    },
    'AF-26483': {
        id: 'AF-26483',
        route: 'Denver, CO → Houston, TX',
        date: 'Dec 18',
        freight: '3 pallets, electronics',
        rate: 892,
        pickupAddress: '1635 Wynkoop St, Denver, CO 80202',
        deliveryAddress: '5718 Westheimer Rd, Houston, TX 77057',
        details: '3 pallets (48x40x48", 650 lbs each), Standard service, Liftgate delivery'
    }
};

const quotes = {
    standard: { name: 'Standard (5-7 days)', price: 847, days: '5-7' },
    expedited: { name: 'Expedited (3-4 days)', price: 1124, days: '3-4' },
    express: { name: 'Express (2-3 days)', price: 1456, days: '2-3' }
};
