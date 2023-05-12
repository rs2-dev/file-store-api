import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OpenRS2Service } from './openrs2-service';
import { OpenRS2Resolver } from './openrs2.resolver';

@Module({
    imports: [
        HttpModule,
    ],
    providers: [
        OpenRS2Resolver,
        OpenRS2Service,
    ],
    exports: [
        OpenRS2Service,
    ],
})
export class OpenRS2Module {}
