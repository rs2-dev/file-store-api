import { Query, Resolver } from '@nestjs/graphql';
import { FileStoreEntity } from './file-store.entity';

@Resolver(of => FileStoreEntity)
export class FileStoreResolver {

    @Query(returns => FileStoreEntity)
    getFileStore(): FileStoreEntity {
        return new FileStoreEntity();
    }

}
