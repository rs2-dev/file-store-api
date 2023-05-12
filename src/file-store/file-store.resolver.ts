import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileStoreEntity } from './file-store.entity';
import { FileStoreService } from './file-store.service';

@Resolver(of => FileStoreEntity)
export class FileStoreResolver {

    constructor(private readonly fileStoreService: FileStoreService) {
    }

    @Query(returns => FileStoreEntity)
    getFileStore(): FileStoreEntity {
        return new FileStoreEntity();
    }

    @Mutation(returns => FileStoreEntity)
    async uploadOpenRS2FileStore(
        @Args({ name: 'name', type: () => String }) name: string,
        @Args({ name: 'openRS2Id', type: () => Int }) openRS2Id: number,
    ): Promise<FileStoreEntity> {
        return this.fileStoreService.uploadOpenRS2FileStore(name, openRS2Id);
    }

}
