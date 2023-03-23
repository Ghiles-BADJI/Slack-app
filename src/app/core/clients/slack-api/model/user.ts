/**
 * Slack API
 * The slack API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface User { 
    id: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    dateOfBirth: string;
    photoUrl?: string;
    friends: Array<User>;
}
