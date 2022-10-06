# EventBridge Rule to route Event to Thai Food (Consumer/Event Target)

Thai Food is a restaurant which process meal order received from our Order Manager.
Orders will be processed only once event rule matches the configured for this restaurant on the bus.

## Event Rules
```
source:
    - 'app.orderManager.com'
detail-type:
    - 'order'
detail:
    restaurant:
        - 'thai-food'
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