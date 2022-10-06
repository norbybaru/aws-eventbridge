# Create an EventBridge rule and API destination to route events to an external API and Setup Dead Letter Queue (DLQ)

This pattern configures an EventRule rule that routes to an API Destinations target. It configures a Connection, which contains the authorization for the API endpoint, and the API, which contains the URL, http method, and other configuration information.

You could use https://webhook.site/ to test webhook as its a free service
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