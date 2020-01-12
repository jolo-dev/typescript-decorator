import "reflect-metadata";

export type EntityTypeInstance<T> = new (...args: any[]) => T;

export class EntityFactory {

    static fromPersistenceObject<T extends IEntity>(obj: Object, type: EntityTypeInstance<T>): T {
        // TODO: Implement
        return {} as T;
    }

}

export interface IEntity {
    getPersistenceObject(): any;
}

export default class BaseEntity implements IEntity {

    getPersistenceObject(): any {
        // TODO: Implement
        let output = {};
        return output;
    }

}
