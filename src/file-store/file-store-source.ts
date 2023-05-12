import { registerEnumType } from '@nestjs/graphql';

export enum FileStoreSource {
    OPENRS2 = 'OPENRS2',
    UPLOAD = 'UPLOAD',
}

registerEnumType(FileStoreSource, {
    name: 'FileStoreSource',
});
