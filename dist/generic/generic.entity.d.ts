export declare class GenericEntity {
    id: number;
    status: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    toJSON(): Record<string, any>;
}
