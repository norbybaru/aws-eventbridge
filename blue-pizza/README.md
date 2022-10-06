# EventBridge Rule to route Event to Blue Pizza (Consumer/Event Target)

Blue Pizza is a restaurant which process meal order received from our Order Manager.
Orders will be processed only once event rule matches the configured for this restaurant on the bus.

## Event Rules
```
source:
    - 'app.orderManager.com'
detail-type:
    - 'order'
detail:
    restaurant:
        - 'blue-pizza'
```                  

## Deploy
```sh
sam deploy --guide
```

## Cleanup
### Destroy
```sh
sam delete
```

### Confirm Stack been deleted
```sh
 aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus"
```