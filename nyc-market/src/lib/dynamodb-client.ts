import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import * as dotenv from 'dotenv';

dotenv.config()

const dynamoDb = new DynamoDBClient({ region: "eu-west-1" })
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDb);
const tableName = process.env.TABLE_NAME;

export const saveItem = async function(item: any) {
    try {
        const params: PutCommandInput = {
            TableName: tableName,
            Item: item
        };

        const response = await dynamoDBDocumentClient.send(new PutCommand(params));
        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}