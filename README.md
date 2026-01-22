# Amazon Freight AI Chat Prototype

A clickable prototype demonstrating an AI-powered chat experience for Amazon Freight shippers.

## Features

- **Interactive Chat Interface**: Conversational AI assistant for freight operations
- **6 Realistic Scenarios**:
  1. Quote Request & Rate Negotiation
  2. Order Tracking & ETA Updates
  3. Schedule Pickup for Existing Order
  4. Multi-Stop Quote with Complex Requirements
  5. Execution Status & Issue Resolution
  6. Quick Reorder from History

- **Deep Links**: Seamless transitions to web UI for complex tasks
- **Sample Data**: Pre-populated orders and tracking information
- **Responsive Design**: Clean, professional interface

## How to Use

1. Open `index.html` in a web browser
2. Choose a scenario from the dropdown menu to see automated conversations
3. Click on orders in the sidebar to track them
4. Use quick action buttons for common tasks
5. Type your own messages to interact with the AI
6. Click deep links to see modal representations of web workflows

## Scenarios

### 1. Quote Request & Negotiation
Demonstrates getting quotes, negotiating rates, and booking shipments with the AI gathering information conversationally.

### 2. Order Tracking & ETA
Shows real-time tracking updates, timeline views, and proactive notifications about shipment status.

### 3. Schedule Pickup
Illustrates scheduling pickup for existing orders with time window selection and BOL generation.

### 4. Multi-Stop Quote
Demonstrates how complex multi-stop shipments transition to a visual builder interface.

### 5. Delayed Order Resolution
Shows how the AI handles exceptions, explains delays, and offers solutions like expedited service.

### 6. Quick Reorder
Demonstrates using order history to quickly repeat previous shipments with updated pricing.

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks required)
- Modular code structure:
  - `index.html` - Main structure
  - `styles.css` - All styling
  - `data.js` - Sample order and quote data
  - `scenarios.js` - Conversation flows
  - `app.js` - Application logic and interactions

## Design Principles

- **Conversational Efficiency**: Natural information gathering without rigid forms
- **Smart Handoffs**: Complex tasks redirect to web UI with context preserved
- **Proactive Assistance**: AI suggests solutions before being asked
- **Transparency**: Clear status updates with specific details
- **Context Retention**: AI remembers order history and preferences

## Deep Link Integration

The prototype demonstrates how chat seamlessly integrates with web workflows:
- Quote IDs and order numbers passed via URL parameters
- Pre-filled forms maintain user context
- Modal overlays simulate web page transitions
- Users never lose progress when switching between chat and web

---

Built to demonstrate AI-powered freight brokerage experiences for Amazon Freight.
