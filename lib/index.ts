/* tslint:disable ban-types */
/* tslint:disable interface-name */
/* tslint:disable variable-name */

import { Storage } from "@dizmo/types-storage";
import { UUID } from "@dizmo/types-uuid";

export interface Bundle {
    [key: string]: any;
}

export interface Bundle {
    identifier: string;
}

export interface Bundle {
    privateStorage: Storage;
    publicStorage: Storage;
}

export interface Bundle {
    getAttribute:
    <T>(path: string) => T;
    setAttribute:
    <T>(path: string, value: T) => void;
}

export interface Bundle {
    subscribeToAttribute:
    <T>(path: string,
        callback: (path: string, value: T, old_value?: T) => void,
        subscribed_callback?: Function,
    ) => UUID;

    subscribeToAttributeConditional:
    <T>(path: string, condition: string | boolean | number,
        callback: (path: string, value: T, old_value?: T) => void,
        subscribed_callback?: Function,
    ) => UUID;

    unsubscribeAttribute:
    <T>(subscription_id: UUID) => void;
}

export interface Bundle {
    getDizmos:
    <T extends any/*Dizmo*/>() => T[];
    instantiateDizmo: (
        attributes: Object,
        public_properties: Object,
        private_properties: Object,
        callback?: Function,
    ) => void;
    uninstall:
    () => void;
}

export default Bundle;
