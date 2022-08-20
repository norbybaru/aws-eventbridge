import { FromSchema } from "json-schema-to-ts";
import { RouteShorthandOptions } from "fastify";

const OrderSchema = {
    type: 'object',
    properties: {
        restaurant: { enum: ['blue-pizza', 'thai-food']},
        customer: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                email: {type: 'string'},
            },
            required: ['name', 'email']
        },
        order: {
            type: 'object',
            properties: {
                item: {type: 'string'},
                price: {type: 'number'},
            },
            required: ['item', 'price']
        }
    },
    required: ['restaurant', 'customer', 'order'],
} as const;

const CreateOrderSchema: RouteShorthandOptions = {
    schema: {
        body: {
            OrderSchema
        },
        response: {
            201: {
                data: OrderSchema
            }
        }
    }
}

type Order = FromSchema<typeof OrderSchema>

export {Order, CreateOrderSchema}