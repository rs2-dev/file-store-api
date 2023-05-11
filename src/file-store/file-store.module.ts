import { Module } from '@nestjs/common';
import { FileStoreResolver } from './file-store.resolver';

@Module({
    imports: [
    ],
    providers: [
        FileStoreResolver,
    ],
})
export class FileStoreModule {}
