// Main application logic
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const clearBtn = document.getElementById('clear-chat');
const scenarioSelector = document.getElementById('scenario-selector');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

let currentScenario = null;
let currentStep = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
    clearBtn.addEventListener('click', clearChat);
    scenarioSelector.addEventListener('change', loadScenario);
    
    // Quick actions
    document.querySelectorAll('.quick-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'quote') loadScenario({ target: { value: 'quote' }});
            if (action === 'track') loadScenario({ target: { value: 'tracking' }});
            if (action === 'schedule') loadScenario({ target: { value: 'schedule' }});
        });
    });
    
    // Order items
    document.querySelectorAll('.order-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const orderId = e.currentTarget.dataset.order;
            trackOrder(orderId);
        });
    });
    
    // Modal close
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage('user', text);
    chatInput.value = '';
    
    // Simple response logic
    setTimeout(() => {
        if (text.toLowerCase().includes('track') || text.toLowerCase().includes('af-')) {
            const orderId = text.match(/AF-\d+/i)?.[0];
            if (orderId && orders[orderId]) {
                showOrderTracking(orderId);
            } else {
                addMessage('ai', 'I can help you track an order. Please provide the order ID (format: AF-XXXXX).');
            }
        } else if (text.toLowerCase().includes('quote') || text.toLowerCase().includes('ship')) {
            addMessage('ai', 'I can help you get a quote. Where are you shipping from and to?');
        } else if (text.toLowerCase().includes('schedule') || text.toLowerCase().includes('pickup')) {
            addMessage('ai', 'I can help you schedule a pickup. Do you have an existing order ID, or would you like to create a new shipment?');
        } else {
            addMessage('ai', 'I can help you with quotes, tracking, scheduling pickups, and more. What would you like to do?');
        }
    }, 500);
}

function loadScenario(e) {
    const scenarioName = e.target.value;
    if (!scenarioName) return;
    
    clearChat();
    currentScenario = scenarios[scenarioName];
    currentStep = 0;
    
    playScenario();
}

function playScenario() {
    if (!currentScenario || currentStep >= currentScenario.length) return;
    
    const message = currentScenario[currentStep];
    const delay = message.type === 'user' ? 800 : 1200;
    
    if (message.type === 'user') {
        showTypingIndicator();
    }
    
    setTimeout(() => {
        removeTypingIndicator();
        
        if (message.html) {
            addMessageHTML(message.type, message.html);
        } else {
            addMessage(message.type, message.text);
        }
        
        currentStep++;
        
        // Auto-play next message
        if (currentStep < currentScenario.length) {
            setTimeout(() => playScenario(), 1500);
        }
    }, delay);
}

function addMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addMessageHTML(type, html) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<div class="message-content">${html}</div>`;
    chatMessages.appendChild(messageDiv);
    
    // Add event listeners to deep links
    messageDiv.querySelectorAll('.deep-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalType = e.target.dataset.modal;
            showModal(modalType);
        });
    });
    
    scrollToBottom();
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'message ai typing';
    indicator.innerHTML = `
        <div class="message-content typing-indicator">
            <span></span><span></span><span></span>
        </div>
    `;
    chatMessages.appendChild(indicator);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = chatMessages.querySelector('.typing');
    if (indicator) indicator.remove();
}

function clearChat() {
    chatMessages.innerHTML = `
        <div class="message ai">
            <div class="message-content">
                Hi! I'm Miles, your Amazon Freight expert. I can help you with:
                <ul>
                    <li>Getting quotes and booking shipments</li>
                    <li>Tracking orders and checking ETAs</li>
                    <li>Scheduling pickups</li>
                    <li>Negotiating rates</li>
                </ul>
                What can I help you with today?
            </div>
        </div>
    `;
    currentScenario = null;
    currentStep = 0;
    scenarioSelector.value = '';
}

function trackOrder(orderId) {
    clearChat();
    showOrderTracking(orderId);
}

function showOrderTracking(orderId) {
    const order = orders[orderId];
    if (!order) {
        addMessage('ai', `I couldn't find order ${orderId}. Please check the order ID and try again.`);
        return;
    }
    
    let html = `Looking up ${orderId}...<br><br>
        <div class="tracking-card">
            <h3>Order ${order.id}</h3>
            <div style="margin: 0.5rem 0;">${order.freight}, ${order.route}</div>
            <div><strong>Status:</strong> <span class="status-badge ${order.status === 'In Transit' ? 'success' : order.status === 'Delayed' ? 'error' : 'warning'}">${order.status}</span></div>`;
    
    if (order.currentLocation) {
        html += `<div><strong>Current Location:</strong> ${order.currentLocation}</div>`;
    }
    
    if (order.originalETA) {
        html += `<div><strong>Original ETA:</strong> ${order.originalETA}</div>`;
    }
    
    if (order.updatedETA) {
        html += `<div><strong>Updated ETA:</strong> ${order.updatedETA}</div>`;
    }
    
    if (order.newETA) {
        html += `<div><strong>New ETA:</strong> ${order.newETA}</div>`;
    }
    
    if (order.delayReason) {
        html += `<div><strong>Reason:</strong> ${order.delayReason}</div>`;
    }
    
    html += `</div>`;
    
    if (order.timeline) {
        html += `<br>Recent activity:<div class="tracking-timeline">`;
        order.timeline.slice(-3).forEach(item => {
            html += `<div class="timeline-item"><strong>${item.date}</strong> - ${item.event} (${item.location})</div>`;
        });
        html += `</div>`;
        html += `<a href="#" class="deep-link" data-modal="tracking">View Full Tracking Details →</a>`;
    }
    
    addMessageHTML('ai', html);
}

function showModal(type) {
    let content = '';
    
    if (type === 'booking') {
        content = `
            <h2>Complete Booking</h2>
            <p>This would open the Amazon Freight booking form with your quote pre-filled.</p>
            <div style="background: #f9f9f9; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
                <h3>Pre-filled Information:</h3>
                <ul>
                    <li>Route: Seattle, WA → Atlanta, GA</li>
                    <li>Freight: 2 pallets (48x40x60", 800 lbs each)</li>
                    <li>Service: Standard (5-7 days)</li>
                    <li>Rate: $789 (negotiated)</li>
                    <li>Special requirements: Liftgate delivery</li>
                </ul>
                <p style="margin-top: 1rem;">You would complete:</p>
                <ul>
                    <li>Pickup address & contact information</li>
                    <li>Delivery address & contact information</li>
                    <li>Commodity description</li>
                    <li>Preferred pickup date/time</li>
                </ul>
            </div>
        `;
    } else if (type === 'tracking') {
        content = `
            <h2>Full Tracking Details - AF-29384</h2>
            <div style="background: #f9f9f9; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
                <h3>Shipment Information</h3>
                <p><strong>Route:</strong> Seattle, WA → Atlanta, GA</p>
                <p><strong>Freight:</strong> 2 pallets</p>
                <p><strong>Service:</strong> Standard (5-7 days)</p>
                <p><strong>Status:</strong> In Transit - Ahead of Schedule</p>
                
                <h3 style="margin-top: 1.5rem;">Complete Timeline</h3>
                <div class="tracking-timeline">
                    <div class="timeline-item"><strong>Jan 27, 10:04 AM</strong> - Picked up (Seattle, WA)</div>
                    <div class="timeline-item"><strong>Jan 27, 11:32 AM</strong> - Departed origin terminal</div>
                    <div class="timeline-item"><strong>Jan 28, 8:15 AM</strong> - In transit (Boise, ID)</div>
                    <div class="timeline-item"><strong>Jan 29, 6:42 AM</strong> - In transit (Salt Lake City, UT)</div>
                    <div class="timeline-item"><strong>Jan 29, 7:15 AM</strong> - Departed hub (Salt Lake City, UT)</div>
                </div>
                
                <p style="margin-top: 1rem;"><em>This modal would also include an interactive map showing the shipment's route and current location.</em></p>
            </div>
        `;
    } else if (type === 'bol') {
        content = `
            <h2>Edit Bill of Lading - AF-31205</h2>
            <div style="background: #f9f9f9; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
                <h3>Pre-filled Information:</h3>
                <ul>
                    <li>Shipper: John's Logistics, 4521 Commerce St, Dallas, TX 75226</li>
                    <li>Consignee: 125 Summer St, Boston, MA 02110</li>
                    <li>Freight: 4 pallets</li>
                    <li>Service: Expedited (3-4 days)</li>
                    <li>Pickup: Jan 22, 1-3 PM</li>
                </ul>
                
                <h3 style="margin-top: 1.5rem;">Add Additional Details:</h3>
                <p><strong>PO Number:</strong> <input type="text" placeholder="Enter PO number" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; margin-top: 0.5rem;"></p>
                <p style="margin-top: 1rem;"><strong>Special Instructions:</strong></p>
                <textarea placeholder="Enter special handling notes..." style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; height: 100px; margin-top: 0.5rem;"></textarea>
                
                <div style="margin-top: 1.5rem;">
                    <button class="btn-primary">Download PDF</button>
                    <button class="btn-secondary" style="margin-left: 0.5rem;">Email BOL</button>
                </div>
            </div>
        `;
    } else if (type === 'multistop') {
        content = `
            <h2>Multi-Stop Quote Builder</h2>
            <div style="background: #f9f9f9; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
                <h3>Route Overview</h3>
                <div style="background: white; padding: 1rem; border-radius: 4px; margin-top: 0.5rem;">
                    <div style="padding: 0.5rem; border-left: 3px solid #ff9900; margin-bottom: 0.5rem;">
                        <strong>1. Pickup</strong><br>
                        2847 E Van Buren St, Phoenix, AZ 85008
                    </div>
                    <div style="padding: 0.5rem; border-left: 3px solid #ddd; margin-bottom: 0.5rem;">
                        <strong>2. Delivery Stop 1</strong><br>
                        <input type="text" placeholder="Enter San Diego address" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; margin-top: 0.25rem;">
                    </div>
                    <div style="padding: 0.5rem; border-left: 3px solid #ddd; margin-bottom: 0.5rem;">
                        <strong>3. Delivery Stop 2</strong><br>
                        <input type="text" placeholder="Enter Los Angeles address" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; margin-top: 0.25rem;">
                    </div>
                    <div style="padding: 0.5rem; border-left: 3px solid #ddd;">
                        <strong>4. Delivery Stop 3</strong><br>
                        <input type="text" placeholder="Enter San Francisco address" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; margin-top: 0.25rem;">
                    </div>
                </div>
                
                <p style="margin-top: 1rem;"><em>This interactive builder would allow you to drag stops to reorder them, add freight details for each stop, set time windows, and see real-time pricing updates.</em></p>
                
                <div style="margin-top: 1.5rem;">
                    <button class="btn-primary">Calculate Quote</button>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
