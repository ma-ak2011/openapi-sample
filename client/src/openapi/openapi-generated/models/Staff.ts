/* tslint:disable */
/* eslint-disable */
/**
 * Implementing Server Side Kotlin
 * Sample API of Hands On Server Side Kotlin
 *
 * The version of the OpenAPI document: 0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Staff
 */
export interface Staff {
    /**
     * 
     * @type {number}
     * @memberof Staff
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    lastName: string;
    /**
     * 
     * @type {Date}
     * @memberof Staff
     */
    birthDate: Date;
}

/**
 * Check if a given object implements the Staff interface.
 */
export function instanceOfStaff(value: object): value is Staff {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('birthDate' in value) || value['birthDate'] === undefined) return false;
    return true;
}

export function StaffFromJSON(json: any): Staff {
    return StaffFromJSONTyped(json, false);
}

export function StaffFromJSONTyped(json: any, ignoreDiscriminator: boolean): Staff {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'birthDate': (new Date(json['birthDate'])),
    };
}

export function StaffToJSON(value?: Staff | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'birthDate': ((value['birthDate']).toISOString()),
    };
}
