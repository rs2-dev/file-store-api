import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileStoreEntity {
    @Field(type => String)
    name: string;

    @Field(type => Int)
    build: number;
}