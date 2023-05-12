import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { OpenRS2Service } from '../openrs2/openrs2-service';
import { InjectRepository } from '@nestjs/typeorm';
import { FileStoreEntity } from './file-store.entity';
import { Repository } from 'typeorm';
import { FileStoreSource } from './file-store-source';

@Injectable()
export class FileStoreService {

    constructor(
        @InjectRepository(FileStoreEntity) private readonly fileStoreRepository: Repository<FileStoreEntity>,
        private readonly openRS2Service: OpenRS2Service,
    ) {
    }

    async uploadOpenRS2FileStore(name: string, openRS2Id: number): Promise<FileStoreEntity> {
        const openRS2FileStoreDetails = await this.openRS2Service.getOpenRS2FileStore(openRS2Id);

        if (!openRS2FileStoreDetails) {
            throw new NotFoundException(`OpenRS2 file store ${openRS2Id} was not found.`);
        }

        if (!openRS2FileStoreDetails?.builds?.[0]?.major) {
            throw new InternalServerErrorException(`OpenRS2 file store ${openRS2Id} does not have a valid major build number.`);
        }

        const fileStoreEntity = new FileStoreEntity();
        fileStoreEntity.name = name;
        fileStoreEntity.build = String(openRS2FileStoreDetails.builds[0].major);
        fileStoreEntity.source = FileStoreSource.OPENRS2;

        return await this.fileStoreRepository.save(fileStoreEntity);
    }

}
