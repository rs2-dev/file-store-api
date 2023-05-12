import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OpenRS2BuildNumber {
    @Field(type => Int, { nullable: true })
    major: number | null;

    @Field(type => Int, { nullable: true })
    minor: number | null;
}


@ObjectType()
export class OpenRS2FileStore {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    scope: 'runescape' | string | null;

    @Field({ nullable: true })
    game: 'runescape' | 'darkscape' | string | null;

    @Field({ nullable: true })
    environment: 'live' | 'beta' | string | null;

    @Field({ nullable: true })
    language: 'en' | 'de' | 'fr' | 'pt' | string | null;

    @Field(type => [OpenRS2BuildNumber], { nullable: true })
    builds: OpenRS2BuildNumber[] | null;

    @Field({ nullable: true })
    timestamp: string | null; // ISO 8601 format


    @Field(type => [String], { nullable: true })
    sources: string[] | null;

    @Field(type => Int, { nullable: true })
    valid_indexes: number | null;

    @Field(type => Int, { nullable: true })
    indexes: number | null;

    @Field(type => Int, { nullable: true })
    valid_groups: number | null;

    @Field(type => Int, { nullable: true })
    groups: number | null;

    @Field(type => Int, { nullable: true })
    valid_keys: number | null;

    @Field(type => Int, { nullable: true })
    keys: number | null;

    @Field(type => Int, { nullable: true })
    size: number | null;

    @Field(type => Int, { nullable: true })
    blocks: number | null;

    @Field({ nullable: true })
    disk_store_valid: boolean | null;
}
