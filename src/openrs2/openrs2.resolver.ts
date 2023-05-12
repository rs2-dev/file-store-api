import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OpenRS2FileStore } from './openrs2.model';
import { OpenRS2Service } from './openrs2-service';

@Resolver(of => OpenRS2FileStore)
export class OpenRS2Resolver {

    constructor(private readonly openRS2Service: OpenRS2Service) {
    }

    @Query(returns => [OpenRS2FileStore])
    async searchOpenRS2FileStores(
        @Args({ name: 'build', type: () => String }) build: string,
    ): Promise<OpenRS2FileStore[]> {
        return this.openRS2Service.findOpenRS2FileStores('runescape', build);
    }

}
