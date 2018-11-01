/* tslint:disable:ban-types interface-name */
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
        callback: (path: string, value: T) => void,
        subscribedCallback?: Function,
    ) => UUID;

    subscribeToAttributeConditional:
    <T>(path: string, condition: string | boolean | number,
        callback: (path: string, value: T) => void,
        subscribedCallback?: Function,
    ) => UUID;

    unsubscribeAttribute:
    <T>(subscriptionId: UUID) => void;
}

export interface Bundle {
    getUpdateInformation:
    () => any;
    update:
    () => void;
}

export interface Bundle {
    getDizmos:
    <T extends Bundle>() => T[];
    instantiateDizmo: (
        attributes?: object,
        publicProperties?: object,
        privateProperties?: object,
        callback?: Function,
    ) => void;
    uninstall:
    () => void;
}

export default Bundle;
