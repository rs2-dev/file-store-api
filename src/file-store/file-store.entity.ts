import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FileStoreSource } from './file-store-source';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'file_store' })
export class FileStoreEntity {
    @PrimaryColumn({ nullable: false, unique: true })
    @Field(type => String)
    name: string;

    @Column({ nullable: false })
    @Field(type => String)
    build: string;

    @Column({ nullable: false })
    @Field(type => FileStoreSource)
    source: FileStoreSource;
}