// Scenario definitions
const scenarios = {
    multimodal: [
        { type: 'user', text: 'I need high-speed shipping from Phoenix to New York - within 2 days if possible' },
        { type: 'ai', text: 'I can help with that. Let me check expedited options for Phoenix to New York.<br><br>What type of freight are you shipping and approximate weight?' },
        { type: 'user', text: '3 pallets, about 2,400 lbs total' },
        { 
            type: 'ai', 
            html: `Perfect. For a 2-day delivery, I have a multimodal solution that combines ground and air:
                <div class="quote-card">
                    <div class="quote-option">
                        <strong>Multimodal Express (46 hours): $24,500</strong>
                        <div style="margin-top: 0.5rem; font-size: 0.9rem;">
                            <div><strong>Leg 1:</strong> LTL Pickup Phoenix → PHX7 Air Hub (4 hrs)</div>
                            <div><strong>Leg 2:</strong> Air Cargo PHX7 → JFK9 (5 hrs)</div>
                            <div><strong>Leg 3:</strong> LTL Delivery JFK9 → New York (2 hrs)</div>
                            <div style="margin-top: 0.5rem; color: #666;">+ 35 hrs processing/handling time</div>
                        </div>
                    </div>
                </div>
                This is premium service for time-critical freight. Would you like to see a more economical option?`
        },
        { type: 'user', text: 'Yes, what else do you have?' },
        { 
            type: 'ai', 
            html: `Here's a standard ground option:
                <div class="quote-card">
                    <div class="quote-option">
                        <strong>Full Truckload (75 hours): $7,560</strong>
                        <div style="margin-top: 0.5rem; font-size: 0.9rem;">
                            <div>Direct truck Phoenix → New York</div>
                            <div>Estimated delivery: 3.1 days</div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding: 0.75rem; background: #f0f8ff; border-left: 3px solid #0073bb; border-radius: 4px;">
                    <strong>Cost comparison:</strong><br>
                    Multimodal saves ~29 hours but costs $16,940 more<br>
                    Ground option is 68% less expensive
                </div>
                Which option works better for your timeline and budget?`
        },
        { type: 'user', text: 'The multimodal is expensive but I need it fast. Can you break down the costs?' },
        { 
            type: 'ai', 
            html: `Here's the cost breakdown for the Multimodal Express option:
                <div class="quote-card">
                    <div style="padding: 1rem; background: #fafafa; border-radius: 4px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Leg 1: LTL Pickup (Phoenix → PHX7)</span>
                            <strong>$850</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Leg 2: Air Cargo (PHX7 → JFK9)</span>
                            <strong>$21,200</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Leg 3: LTL Delivery (JFK9 → New York)</span>
                            <strong>$950</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Handling & Coordination</span>
                            <strong>$1,200</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Insurance (2,400 lbs @ $50/lb)</span>
                            <strong>$300</strong>
                        </div>
                        <div style="border-top: 2px solid #ddd; margin-top: 0.5rem; padding-top: 0.5rem; display: flex; justify-content: space-between; font-size: 1.1rem;">
                            <strong>Total</strong>
                            <strong>$24,500</strong>
                        </div>
                    </div>
                </div>
                The air cargo leg is the primary cost driver. Would you like to proceed with this option?`
        },
        { type: 'user', text: 'Yes, book the multimodal express' },
        { 
            type: 'ai', 
            html: `Excellent! I'll set up your multimodal shipment. I need:
                <ul>
                    <li>Pickup address & contact in Phoenix</li>
                    <li>Delivery address & contact in New York</li>
                    <li>Commodity description (for air cargo compliance)</li>
                    <li>Preferred pickup date/time</li>
                </ul>
                <a href="#" class="deep-link" data-modal="booking">Complete Booking Form →</a>`
        }
    ],
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
    ],

    missedpickup: [
        { type: 'user', text: 'Our pickup was missed today for order AF-32194' },
        { type: 'ai', text: 'I apologize for the inconvenience. Let me look into this right away. Can you confirm the site location where the pickup was scheduled?' },
        { type: 'user', text: 'Portland warehouse, 2850 NW Industrial St' },
        { 
            type: 'ai', 
            html: `Checking order AF-32194 and pickup status...<br><br>
                <div class="tracking-card">
                    <h3>Order AF-32194</h3>
                    <div style="margin: 0.5rem 0;">Portland, OR → Sacramento, CA</div>
                    <div><strong>Scheduled pickup:</strong> Today, Jan 22, 10 AM - 2 PM</div>
                    <div><strong>Status:</strong> <span class="status-badge error">Pickup Delayed</span></div>
                    <div style="margin-top: 1rem; padding: 0.75rem; background: #fff3cd; border-left: 3px solid #ffc107; border-radius: 4px;">
                        <strong>Reason:</strong> Driver arrived but was unable to complete pickup. Your shipment requires a trailer with roll doors for loading access, but the assigned trailer had swing doors. We're working to dispatch a compliant trailer.
                    </div>
                </div>
                I can reschedule this for you today. Would you like to see available time slots?`
        },
        { type: 'user', text: 'Yes, we need this picked up today' },
        { 
            type: 'ai', 
            html: `I have two options available today with roll-door trailers:
                <div class="quote-card">
                    <div class="quote-option">
                        <strong>Option 1: 3:00 PM - 5:00 PM</strong>
                        <div style="margin-top: 0.5rem; font-size: 0.9rem;">
                            <div>Driver: Unit 847 (roll-door trailer confirmed)</div>
                            <div>ETA to your location: 2:45 PM</div>
                        </div>
                    </div>
                    <div class="quote-option">
                        <strong>Option 2: 5:30 PM - 7:30 PM</strong>
                        <div style="margin-top: 0.5rem; font-size: 0.9rem;">
                            <div>Driver: Unit 923 (roll-door trailer confirmed)</div>
                            <div>ETA to your location: 5:15 PM</div>
                        </div>
                    </div>
                </div>
                Which time works better for your team?`
        },
        { type: 'user', text: 'The 3 PM slot works' },
        { 
            type: 'ai', 
            html: `<div class="action-card">
                    <span class="status-badge success">✓ Pickup rescheduled</span>
                    <ul style="margin-top: 0.5rem;">
                        <li><strong>Order:</strong> AF-32194</li>
                        <li><strong>New pickup time:</strong> Today, Jan 22, 3:00 PM - 5:00 PM</li>
                        <li><strong>Location:</strong> 2850 NW Industrial St, Portland, OR</li>
                        <li><strong>Driver:</strong> Unit 847 (roll-door trailer)</li>
                        <li><strong>Driver ETA:</strong> 2:45 PM</li>
                    </ul>
                </div>
                Your contact will receive a call 30 minutes before arrival. I've also applied a service credit to your account for the inconvenience. Is there anything else I can help with?`
        }
    ],

    custody: [
        { type: 'user', text: 'I need a chain of custody report for order AF-28471' },
        { type: 'ai', text: 'I can generate that for you. Let me pull the complete custody record for AF-28471...' },
        { 
            type: 'ai', 
            html: `<div class="tracking-card">
                    <h3>Chain of Custody Report</h3>
                    <div style="margin: 0.5rem 0;"><strong>Order ID:</strong> AF-28471</div>
                    <div><strong>Shipment ID:</strong> AMZN-SEA-2024-28471-A</div>
                    <div><strong>Barcode:</strong> 1Z9847AF28471000</div>
                    <div style="margin-top: 1rem; padding: 0.75rem; background: #f0f8ff; border-radius: 4px;">
                        <strong>Route:</strong> Seattle, WA → Miami, FL<br>
                        <strong>Commodity:</strong> Medical Equipment (Temperature Controlled)<br>
                        <strong>Purpose:</strong> Commercial Delivery
                    </div>
                </div>
                
                <div style="margin-top: 1rem; font-size: 0.9rem;">
                    <strong>CUSTODY EVENTS:</strong>
                    
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: #fafafa; border-left: 3px solid #0073bb; border-radius: 4px;">
                        <strong>1. Loading & Pickup</strong><br>
                        <strong>Date/Time:</strong> Jan 15, 2026 09:23 AM PST<br>
                        <strong>Location:</strong> 1918 8th Ave, Seattle, WA 98101<br>
                        <div style="width: 100%; max-width: 300px; height: 150px; margin: 0.5rem 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; position: relative;">
                            <div style="text-align: center;">
                                <div style="font-size: 2rem;">📍</div>
                                <div style="font-size: 0.9rem; margin-top: 0.5rem;">Seattle, WA</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">47.6149°N, 122.3386°W</div>
                            </div>
                        </div>
                        <strong>Handler:</strong> Sarah Chen (Shipper) - Signature verified<br>
                        <strong>Driver:</strong> Marcus Johnson (CDL: WA-8847392) - Unit 624<br>
                        <strong>Carrier:</strong> Amazon Freight (USDOT: 3924847)<br>
                        <strong>Security:</strong> Seal #AF-28471-001 applied, Temp-controlled trailer<br>
                        <strong>Condition:</strong> 3 pallets loaded, packaging intact
                    </div>
                    
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: #fafafa; border-left: 3px solid #0073bb; border-radius: 4px;">
                        <strong>2. Hub Transfer - Seattle</strong><br>
                        <strong>Date/Time:</strong> Jan 15, 2026 11:47 AM PST<br>
                        <strong>Location:</strong> Amazon Freight Hub SEA7, Kent, WA<br>
                        <strong>Handler:</strong> David Park (Hub Supervisor) - Signature verified<br>
                        <strong>Security:</strong> Seal #AF-28471-001 verified intact, no tampering<br>
                        <strong>Action:</strong> Cross-dock transfer to long-haul trailer<br>
                        <strong>New Seal:</strong> #AF-28471-002 applied<br>
                        <strong>Driver:</strong> Jennifer Martinez (CDL: TX-4729183) - Unit 892
                    </div>
                    
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: #fafafa; border-left: 3px solid #0073bb; border-radius: 4px;">
                        <strong>3. En-Route Inspection</strong><br>
                        <strong>Date/Time:</strong> Jan 17, 2026 02:15 PM CST<br>
                        <strong>Location:</strong> Rest Stop, Dallas, TX<br>
                        <strong>Handler:</strong> Jennifer Martinez (Driver)<br>
                        <strong>Security:</strong> Seal #AF-28471-002 verified intact<br>
                        <strong>Condition:</strong> Temperature log verified (2-8°C maintained)<br>
                        <strong>Action:</strong> Routine safety inspection, no door opening
                    </div>
                    
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: #fafafa; border-left: 3px solid #0073bb; border-radius: 4px;">
                        <strong>4. Hub Transfer - Atlanta</strong><br>
                        <strong>Date/Time:</strong> Jan 18, 2026 08:32 AM EST<br>
                        <strong>Location:</strong> Amazon Freight Hub ATL4, Atlanta, GA<br>
                        <strong>Handler:</strong> Robert Williams (Hub Supervisor) - Signature verified<br>
                        <strong>Security:</strong> Seal #AF-28471-002 verified intact, broken for inspection<br>
                        <strong>Inspection:</strong> All 3 pallets accounted for, packaging intact<br>
                        <strong>New Seal:</strong> #AF-28471-003 applied<br>
                        <strong>Driver:</strong> Carlos Rodriguez (CDL: FL-8392847) - Unit 447
                    </div>
                    
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: #fafafa; border-left: 3px solid #28a745; border-radius: 4px;">
                        <strong>5. Final Delivery</strong><br>
                        <strong>Date/Time:</strong> Jan 19, 2026 10:18 AM EST<br>
                        <strong>Location:</strong> 1450 Brickell Ave, Miami, FL 33131<br>
                        <div style="width: 100%; max-width: 300px; height: 150px; margin: 0.5rem 0; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 4px; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; position: relative;">
                            <div style="text-align: center;">
                                <div style="font-size: 2rem;">📍</div>
                                <div style="font-size: 0.9rem; margin-top: 0.5rem;">Miami, FL</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">25.7617°N, 80.1918°W</div>
                            </div>
                        </div>
                        <strong>Driver:</strong> Carlos Rodriguez (CDL: FL-8392847)<br>
                        <strong>Receiver:</strong> Dr. Amanda Foster (Receiving Manager) - Signature verified<br>
                        <strong>Security:</strong> Seal #AF-28471-003 verified intact, broken at delivery<br>
                        <strong>Condition:</strong> All 3 pallets delivered, no damage reported<br>
                        <strong>POD:</strong> Signed delivery receipt on file
                    </div>
                </div>
                
                <div style="margin-top: 1rem; padding: 0.75rem; background: #d4edda; border-left: 3px solid #28a745; border-radius: 4px;">
                    <strong>✓ Chain of Custody Complete</strong><br>
                    Total transit time: 4 days, 0 hours, 55 minutes<br>
                    Security seals: 3 applied, all verified intact at checkpoints<br>
                    Door openings: 2 (authorized hub transfers only)<br>
                    Temperature compliance: 100% maintained
                </div>
                
                <div style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                    Report generated: Jan 22, 2026 02:44 PM EST<br>
                    Full documentation including signatures and photos available upon request.
                </div>`
        }
    ],

    escalation: [
        { type: 'user', text: 'I need to reschedule my pickup for today - order AF-33582' },
        { type: 'ai', text: 'I can help with that. Let me check the current pickup details for AF-33582...' },
        { 
            type: 'ai', 
            html: `<div class="tracking-card">
                    <h3>Order AF-33582</h3>
                    <div style="margin: 0.5rem 0;">Chicago, IL → Boston, MA</div>
                    <div><strong>Current pickup:</strong> Today, Jan 24, 2:00 PM - 4:00 PM</div>
                    <div><strong>Location:</strong> 350 N Orleans St, Chicago, IL</div>
                    <div><strong>Freight:</strong> 4 pallets, 3,200 lbs</div>
                </div>
                What time would you like to reschedule for?`
        },
        { type: 'user', text: 'We need it picked up earlier today, like 10 AM to noon' },
        { type: 'ai', text: 'Let me check same-day availability for a 10 AM - 12 PM window...' },
        { 
            type: 'ai', 
            html: `<div style="padding: 0.75rem; background: #fff3cd; border-left: 3px solid #ffc107; border-radius: 4px;">
                    <strong>⚠ Limited Capacity</strong><br>
                    I'm unable to confirm same-day pickup for the 10 AM - 12 PM window. Our Chicago area is at capacity for morning slots today.
                </div>
                <div style="margin-top: 1rem;">
                    I can offer these alternatives:
                    <ul>
                        <li><strong>Tomorrow morning:</strong> Jan 25, 8 AM - 12 PM (guaranteed)</li>
                        <li><strong>Today evening:</strong> Jan 24, 6 PM - 8 PM (available)</li>
                    </ul>
                </div>
                Would either of these work, or would you like me to connect you with a specialist who can explore additional options?`
        },
        { type: 'user', text: 'I really need it today. Can someone help find a solution?' },
        { 
            type: 'ai', 
            html: `<div style="padding: 0.75rem; background: #e7f3ff; border-left: 3px solid #0073bb; border-radius: 4px;">
                    <strong>Connecting you to a specialist...</strong><br>
                    I'm transferring you to our capacity team who can work on securing same-day pickup options.
                </div>`
        },
        { 
            type: 'ai', 
            html: `<div style="padding: 1rem; background: #f0f8ff; border: 2px solid #0073bb; border-radius: 8px; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <div style="width: 40px; height: 40px; background: #0073bb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">A</div>
                        <div>
                            <strong>Alejandro Martinez</strong><br>
                            <span style="font-size: 0.9rem; color: #666;">Capacity Specialist</span>
                        </div>
                    </div>
                    Hi, I'm Alejandro, happy to assist further here. Let me see how we can reschedule for the same day...
                </div>`
        }
    ]
};
