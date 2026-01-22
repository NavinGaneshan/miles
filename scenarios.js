// Scenario definitions
const scenarios = {
    quote: [
        { type: 'user', text: 'I need to ship 2 pallets from Seattle to Atlanta next week' },
        { type: 'ai', text: 'I can help you get a quote. Let me gather some details:<br><br><strong>Origin:</strong> Seattle, WA<br><strong>Destination:</strong> Atlanta, GA<br><strong>Freight:</strong> 2 pallets<br><strong>Timeframe:</strong> Next week<br><br>What are the dimensions and weight of each pallet?' },
        { type: 'user', text: 'Each is 48x40x60 inches, about 800 lbs' },
        { type: 'ai', text: 'Got it. Any special requirements? (refrigerated, liftgate, inside delivery, etc.)' },
        { type: 'user', text: 'Need liftgate at delivery' },
        { 
            type: 'ai', 
            html: `Perfect. I found 3 options for pickup Jan 27-31:
                <div class="quote-card">
                    <div class="quote-option" data-quote="standard">
                        <strong>Standard (5-7 days): $847</strong>
                        <div>Pickup: Jan 27-31 • Delivery: Feb 3-5</div>
                    </div>
                    <div class="quote-option" data-quote="expedited">
                        <strong>Expedited (3-4 days): $1,124</strong>
                        <div>Pickup: Jan 27-29 • Delivery: Jan 31-Feb 2</div>
                    </div>
                    <div class="quote-option" data-quote="express">
                        <strong>Express (2-3 days): $1,456</strong>
                        <div>Pickup: Jan 27-28 • Delivery: Jan 29-30</div>
                    </div>
                </div>
                All include liftgate delivery. Which interests you?`
        },
        { type: 'user', text: 'Standard is too high. I usually pay around $750 for this lane' },
        { 
            type: 'ai', 
            html: `I understand. Let me check if we can get closer to your target rate.<br><br>
                <div class="action-card">
                    <span class="status-badge success">✓ Negotiated rate available: $789</span> for Standard service (5-7 days)
                    <ul style="margin-top: 0.5rem;">
                        <li>Pickup window: Jan 27-29</li>
                        <li>Estimated delivery: Feb 3-5</li>
                        <li>Includes liftgate delivery</li>
                    </ul>
                </div>
                Does this work for you?`
        },
        { type: 'user', text: 'Yes, book it' },
        { 
            type: 'ai', 
            html: `Great! I need a few more details to complete the booking:
                <ul>
                    <li>Pickup address & contact</li>
                    <li>Delivery address & contact</li>
                    <li>Commodity description</li>
                </ul>
                Or I can take you to our booking form with this quote pre-filled:<br>
                <a href="#" class="deep-link" data-modal="booking">Complete Booking →</a>`
        }
    ],

    tracking: [
        { type: 'user', text: 'Where\'s my shipment? Order AF-29384' },
        { 
            type: 'ai', 
            html: `Looking up AF-29384...<br><br>
                <div class="tracking-card">
                    <h3>Order AF-29384</h3>
                    <div style="margin: 0.5rem 0;">2 pallets, Seattle → Atlanta</div>
                    <div><strong>Status:</strong> <span class="status-badge success">In Transit</span></div>
                    <div><strong>Current Location:</strong> Salt Lake City, UT (as of 6:42 AM today)</div>
                    <div><strong>Original ETA:</strong> Feb 4 by 5 PM</div>
                    <div><strong>Updated ETA:</strong> <span style="color: #155724;">Feb 4 by 3 PM ✓ (ahead of schedule)</span></div>
                    <div style="margin-top: 0.75rem; font-size: 0.9rem; color: #666;">Last scan: Salt Lake City hub, departed 7:15 AM</div>
                </div>
                Want real-time updates? I can text you when it's out for delivery.`
        },
        { type: 'user', text: 'Yes please. Also why is it ahead of schedule?' },
        { 
            type: 'ai', 
            text: `✓ You'll get a text when it's out for delivery.<br><br>Your shipment is ahead of schedule because:
                <ul>
                    <li>Pickup completed 4 hours early (Jan 27, 10 AM vs 2 PM window)</li>
                    <li>Driver made excellent time on I-80 corridor</li>
                    <li>No weather delays in the mountain passes</li>
                </ul>
                Anything else you need?`
        },
        { type: 'user', text: 'Can I see the full tracking timeline?' },
        { 
            type: 'ai', 
            html: `Here's the detailed tracking for AF-29384:
                <div class="tracking-timeline">
                    <div class="timeline-item"><strong>Jan 27, 10:04 AM</strong> - Picked up (Seattle, WA)</div>
                    <div class="timeline-item"><strong>Jan 27, 11:32 AM</strong> - Departed origin terminal</div>
                    <div class="timeline-item"><strong>Jan 28, 8:15 AM</strong> - In transit (Boise, ID)</div>
                    <div class="timeline-item"><strong>Jan 29, 6:42 AM</strong> - In transit (Salt Lake City, UT)</div>
                    <div class="timeline-item"><strong>Jan 29, 7:15 AM</strong> - Departed hub (Salt Lake City, UT)</div>
                </div>
                For the full map view and proof of delivery photos:<br>
                <a href="#" class="deep-link" data-modal="tracking">View Tracking Details →</a>`
        }
    ],

    schedule: [
        { type: 'user', text: 'I need to schedule pickup for order AF-31205' },
        { 
            type: 'ai', 
            html: `Looking up AF-31205...<br><br>
                <div class="tracking-card">
                    <h3>Order AF-31205</h3>
                    <div>4 pallets, Dallas → Boston</div>
                    <div><strong>Status:</strong> <span class="status-badge warning">Ready to Ship (awaiting pickup)</span></div>
                    <div><strong>Service:</strong> Expedited (3-4 days)</div>
                </div>
                What date works for pickup?`
        },
        { type: 'user', text: 'Tomorrow between 1-3 PM' },
        { 
            type: 'ai', 
            html: `Checking availability for Jan 22, 1-3 PM pickup in Dallas...<br><br>
                <div class="action-card">
                    <span class="status-badge success">✓ Pickup confirmed:</span>
                    <ul style="margin-top: 0.5rem;">
                        <li><strong>Date:</strong> Thursday, Jan 22</li>
                        <li><strong>Window:</strong> 1:00 PM - 3:00 PM</li>
                        <li><strong>Location:</strong> 4521 Commerce St, Dallas, TX 75226</li>
                        <li><strong>Estimated delivery:</strong> Jan 26-27</li>
                    </ul>
                </div>
                You'll receive a call 30 minutes before the driver arrives.<br><br>
                Confirmation sent to your email. Need a BOL (Bill of Lading)?`
        },
        { type: 'user', text: 'Yes' },
        { 
            type: 'ai', 
            html: `I can generate your BOL now. Do you want to:
                <ol>
                    <li>Download PDF immediately</li>
                    <li>Fill in additional details first (PO numbers, special instructions, etc.)</li>
                </ol>`
        },
        { type: 'user', text: 'Need to add PO number and special handling notes' },
        { 
            type: 'ai', 
            html: `I'll take you to the BOL editor with your order details pre-filled:<br>
                <a href="#" class="deep-link" data-modal="bol">Edit BOL →</a><br><br>
                You can add:
                <ul>
                    <li>PO numbers</li>
                    <li>Special instructions</li>
                    <li>Shipper/consignee details</li>
                    <li>Commodity descriptions</li>
                </ul>
                Then download or email it directly.`
        }
    ],

    multistop: [
        { type: 'user', text: 'I need a quote for a multi-stop shipment' },
        { type: 'ai', text: 'I can help with that. How many stops total (including pickup and final delivery)?' },
        { type: 'user', text: 'Pickup in Phoenix, deliver to 3 locations in California' },
        { type: 'ai', text: 'Got it - 1 pickup, 3 deliveries. Let me gather details:<br><br><strong>Pickup location:</strong> Phoenix, AZ - what\'s the address?' },
        { type: 'user', text: '2847 E Van Buren St, Phoenix 85008' },
        { type: 'ai', text: 'Thanks. What are the 3 delivery locations?' },
        { type: 'user', text: 'San Diego, Los Angeles, and San Francisco' },
        { 
            type: 'ai', 
            html: `Perfect. For each stop, I need:
                <ul>
                    <li>Full address</li>
                    <li>Freight details (pallets/weight)</li>
                    <li>Any special requirements</li>
                </ul>
                This is getting detailed - would you prefer to use our multi-stop quote builder? It's easier to visualize and edit:<br>
                <a href="#" class="deep-link" data-modal="multistop">Build Multi-Stop Quote →</a><br><br>
                Or I can continue gathering details here in chat.`
        },
        { type: 'user', text: 'Use the builder' },
        { 
            type: 'ai', 
            html: `Great choice! I've pre-filled what we discussed:
                <ul>
                    <li>Origin: Phoenix, AZ (2847 E Van Buren St)</li>
                    <li>3 delivery stops in CA (you'll add specific addresses)</li>
                </ul>
                The builder lets you:
                <ul>
                    <li>Drag to reorder stops for optimal routing</li>
                    <li>Set time windows for each delivery</li>
                    <li>Add freight details per stop</li>
                    <li>See pricing update in real-time</li>
                </ul>
                <a href="#" class="deep-link" data-modal="multistop">Open Multi-Stop Builder →</a>`
        }
    ],

    delayed: [
        { type: 'user', text: 'What\'s the status on AF-28192? It was supposed to deliver yesterday' },
        { 
            type: 'ai', 
            html: `Let me check AF-28192 immediately...<br><br>
                <div class="tracking-card">
                    <h3>Order AF-28192</h3>
                    <div>Chicago → Miami</div>
                    <div><strong>Status:</strong> <span class="status-badge error">⚠️ Delayed</span></div>
                    <div><strong>Original ETA:</strong> Jan 20 by 5 PM</div>
                    <div><strong>New ETA:</strong> Jan 22 by 12 PM</div>
                    <div><strong>Reason:</strong> Weather delay (winter storm in Tennessee)</div>
                    <div style="margin-top: 0.75rem;"><strong>Current location:</strong> Nashville, TN terminal (waiting for road conditions to improve)</div>
                </div>
                I see this missed your delivery date. Would you like me to:
                <ol>
                    <li>Expedite remaining transit (additional $180)</li>
                    <li>Explore alternative routing</li>
                    <li>Connect you with our operations team</li>
                </ol>`
        },
        { type: 'user', text: 'What caused the delay exactly?' },
        { 
            type: 'ai', 
            html: `Here's what happened:
                <div class="tracking-timeline">
                    <div class="timeline-item"><strong>Jan 19, 2:30 PM</strong> - Shipment departed Memphis hub on schedule</div>
                    <div class="timeline-item"><strong>Jan 19, 6:45 PM</strong> - Winter storm warning issued for I-40 corridor (TN)</div>
                    <div class="timeline-item"><strong>Jan 19, 8:20 PM</strong> - Driver diverted to Nashville terminal for safety</div>
                    <div class="timeline-item"><strong>Jan 20</strong> - Roads closed, shipment held at terminal</div>
                    <div class="timeline-item"><strong>Jan 21 (today)</strong> - Roads reopening, preparing for departure</div>
                </div>
                The delay was due to severe weather making I-40 through Tennessee impassable. Safety protocols required the driver to stop.`
        },
        { type: 'user', text: 'Will I be charged for the delay?' },
        { 
            type: 'ai', 
            html: `No, weather delays are covered under our service guarantee. You won't be charged for:
                <ul>
                    <li>The 2-day delay</li>
                    <li>Any storage fees at the Nashville terminal</li>
                </ul>
                Your original rate of $1,247 stands.<br><br>
                Would you like me to expedite the remaining transit to minimize further delay? This would get it to Miami by tomorrow evening (Jan 22, 8 PM) instead of Jan 22, 12 PM.`
        },
        { type: 'user', text: 'How much to expedite?' },
        { 
            type: 'ai', 
            html: `Expedited service for the remaining leg: <strong>$180</strong><br><br>
                This includes:
                <ul>
                    <li>Priority loading when roads reopen</li>
                    <li>Direct routing (no additional stops)</li>
                    <li>Delivery by Jan 22, 8 PM</li>
                </ul>
                Want me to apply this upgrade?`
        },
        { type: 'user', text: 'Yes do it' },
        { 
            type: 'ai', 
            html: `<div class="action-card">
                    <span class="status-badge success">✓ Expedited service applied to AF-28192</span>
                    <ul style="margin-top: 0.5rem;">
                        <li>New ETA: Jan 22 by 8 PM</li>
                        <li>Additional charge: $180</li>
                        <li>Updated total: $1,427</li>
                    </ul>
                </div>
                You'll get text updates when:
                <ul>
                    <li>Shipment departs Nashville</li>
                    <li>Driver is 2 hours from delivery</li>
                    <li>Delivery is complete</li>
                </ul>
                Confirmation sent to your email. Anything else?`
        }
    ],

    reorder: [
        { type: 'user', text: 'I need to ship the same thing as last month from Denver to Houston' },
        { 
            type: 'ai', 
            html: `Looking at your recent Denver → Houston shipments...<br><br>
                Found 2 recent shipments:
                <ol>
                    <li><strong>AF-26483</strong> (Dec 18) - 3 pallets, electronics, $892</li>
                    <li><strong>AF-27104</strong> (Dec 29) - 1 pallet, machinery parts, $445</li>
                </ol>
                Which one do you want to repeat?`
        },
        { type: 'user', text: 'The 3 pallet one' },
        { 
            type: 'ai', 
            html: `Perfect. I'll set up a quote based on <strong>AF-26483</strong>:
                <div class="quote-card">
                    <h4>Original shipment:</h4>
                    <ul>
                        <li>3 pallets (48x40x48", 650 lbs each)</li>
                        <li>Denver, CO → Houston, TX</li>
                        <li>Standard service</li>
                        <li>Liftgate delivery</li>
                        <li>Rate: $892</li>
                    </ul>
                    <h4 style="margin-top: 1rem;">New quote for same lane:</h4>
                    <ul>
                        <li><strong>Current rate: $847</strong> (fuel surcharge decreased)</li>
                        <li>Pickup available: Jan 23-27</li>
                        <li>Delivery: 5-7 days</li>
                    </ul>
                </div>
                Want to book this, or adjust anything?`
        },
        { type: 'user', text: 'Same pickup address as before?' },
        { 
            type: 'ai', 
            text: `Yes:<br>
                <strong>Pickup:</strong> 1635 Wynkoop St, Denver, CO 80202<br>
                <strong>Delivery:</strong> 5718 Westheimer Rd, Houston, TX 77057<br><br>
                Both addresses from AF-26483. Need to change either one?`
        },
        { type: 'user', text: 'No, book it for pickup on Friday' },
        { 
            type: 'ai', 
            text: `✓ <strong>Booking for Friday, Jan 24</strong><br><br>
                What pickup time window works?
                <ul>
                    <li>Morning (8 AM - 12 PM)</li>
                    <li>Afternoon (12 PM - 5 PM)</li>
                    <li>Specific window (tell me the hours)</li>
                </ul>`
        },
        { type: 'user', text: 'Morning' },
        { 
            type: 'ai', 
            html: `<div class="action-card">
                    <span class="status-badge success">✓ Order confirmed: AF-31847</span>
                    <ul style="margin-top: 0.5rem;">
                        <li><strong>Pickup:</strong> Friday, Jan 24, 8 AM - 12 PM</li>
                        <li><strong>Delivery:</strong> Jan 29-31</li>
                        <li><strong>Rate:</strong> $847</li>
                        <li><strong>Service:</strong> Standard with liftgate</li>
                    </ul>
                </div>
                Confirmation and BOL sent to your email. You'll get a call 30 min before pickup.`
        }
    ]
};
