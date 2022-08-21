import { EventBridgeClient } from "@aws-sdk/client-eventbridge";

export const eventBridge = new EventBridgeClient({region: 'eu-west-1'});
