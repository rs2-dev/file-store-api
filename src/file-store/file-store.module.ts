import { Module } from '@nestjs/common';
import { FileStoreResolver } from './file-store.resolver';
import { FileStoreService } from './file-store.service';
import { OpenRS2Module } from '../openrs2/openrs2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileStoreEntity } from './file-store.entity';

@Module({
    imports: [
        OpenRS2Module,
        TypeOrmModule.forFeature([ FileStoreEntity ]),
    ],
    providers: [
        FileStoreResolver,
        FileStoreService,
    ],
})
export class FileStoreModule {}
