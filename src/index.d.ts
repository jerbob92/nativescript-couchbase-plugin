import { Common, Query, ReplicatorBase } from './couchbase-plugin.common';

export {
    Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem
}from './couchbase-plugin.common';

export declare class Couchbase extends Common {
    config: any;
    android: any;
    ios: any;

    constructor(name: string);

    open(): Promise<any>;

    createDocument(data: Object, documentId?: string): Promise<any>;

    getDocument(documentId: string): Promise<any>;

    updateDocument(documentId: string, data: any): Promise<any>;

    deleteDocument(documentId: string): Promise<any>;

    destroyDatabase(): Promise<any>;

    query(query?: Query): Promise<any[]>;

    createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    addDatabaseChangeListener(callback: any): Promise<any>;

    inBatch(batch: Promise<any>[]): Promise<any>;
}

export declare class Replicator extends ReplicatorBase {
    constructor(replicator: any);

    start(): void;

    stop(): void;

    isRunning(): boolean;

    setContinuous(isContinuous: boolean): void;

    setUserNameAndPassword(username: string, password: string): any;

    setSessionIdAndCookieName(sessionId: string, cookieName: string): any;

    setSessionId(sessionId: string): any;
}

