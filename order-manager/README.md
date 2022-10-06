# Order Manager (Producer/Event Source)

Order manage will be acting as a producer of the event for restaurant. 
Whenever a customer place a meal on a specific restaurant, the order manage will take care of 
putting an event to the bus for the appropriate restaurant to be notified and proceed with order.

## Deploy
```sh
sam deploy --guide
```

## Test
- To test Producer and Consumers, make sure to deploy all micro services using `AWS SAM`. 
- Replace `AWS_API_GATEWAY_URL` with correct url return via cli output when deploying `order-manager`
- Use curl or preferred http client to trigger request below
```sh
curl --location --request POST 'https://{AWS_API_GATEWAY_URL}/api/orders/create' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "restaurant": "thai-food",
    "order": {
        "item": "noodles",
        "price": 100
    },
    "customer": {
        "name": "Jane Doe",
        "email": "jane@exmaple.com"
    }
}'
```

## Cleanup
### Destroy
```sh
sam destroy
```

### Confirm Stack been deleted
```sh
 aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus"
```