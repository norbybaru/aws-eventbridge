# AWS SAM EVENT BRIDGE SERVERLESS PATTERNS

Amazon EventBridge is a new service that changed how we develop Serverless applications. 
This service allow us to develop a fully event-driven application by connecting multiple 
services together - AWS services, custom services and third party services.

EventBridge delivers a stream of real-time data from AWS services, SaaS applications and 
your own applications to different types of targets without writing code. 
The publisher sends a JSON event to an event bus, and to receive events, you create a rule. 
If the published event matches with a rule, the event is routed to up to five targets. 
EventBridge is directly integrated with over 130 event sources and over 35 targets.

Infrastructure as code framework using AWS SAM

## EventBridge Features
- Advanced event rules filtering.
- Content-based event filtering.
- Schema registry.
- Message transformation.
- Custom events.
- Archive and replay events.
- SaaS apps integration.
- API destinations.

## Topics Covered:
- AWS SAM
- Event-driven applications
- Amazon Eventbridge
- Event bus
- Dead Letter Queues
- Serverless applications

You will need to deploy each microservice individually - order-manager, blue-pizza, thai-food and nyc-market
## Requirement:
- AWS Account
- AWS CLI keys setup
- AWS SAM CLI