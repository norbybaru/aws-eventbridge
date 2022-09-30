# Order Manager (Producer/Event Source)

Order manage will be acting as a producer of the event for restaurant. 
Whenever a customer place a meal on a specific restaurant, the order manage will take care of 
putting an event to the bus for the appropriate restaurant to be notified and proceed with order.

## Deploy
```sh
sam deploy --guide
```

## Cleanup
### Delete Stack
```sh
sam delete --stack-name STACK_NAME.
```

### Confirm Stack been deleted
```sh
 aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus"
```