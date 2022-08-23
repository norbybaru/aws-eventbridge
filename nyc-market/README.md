# Create an EventBridge rule and API destination to route events to an external API

This pattern configures an EventRule rule that routes to an API Destinations target. It configures a Connection, which contains the authorization for the API endpoint, and the API, which contains the URL, http method, and other configuration information.

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