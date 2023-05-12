import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { OpenRS2FileStore } from './openrs2.model';

@Injectable()
export class OpenRS2Service {

    readonly openRS2Endpoint = 'https://archive.openrs2.org';

    constructor(private readonly http: HttpService) {
    }

    async getAvailableFileStores(): Promise<OpenRS2FileStore[]> {
        const response = await lastValueFrom(this.http.get<OpenRS2FileStore[]>(
            `${this.openRS2Endpoint}/caches.json`
        ));
        return response.data;
    }

    async findOpenRS2FileStores(game: string, build: string): Promise<OpenRS2FileStore[]> {
        return (await this.getAvailableFileStores())?.filter(
            c => c.scope === 'runescape' && c.game === 'runescape' && c.builds.find(b => String(b.major) === build)
        ) || [];
    }

    async getOpenRS2FileStore(id: number): Promise<OpenRS2FileStore | null> {
        return (await this.getAvailableFileStores())?.find(
            c => c.id === id
        ) || null;
    }

    async getOpenRS2FileStoreData(id: number, scope: string = 'runescape'): Promise<any> {
        return lastValueFrom(this.http.get(
            `${this.openRS2Endpoint}/caches/${scope}/${id}/disk.zip`,
            { responseType: 'arraybuffer' },
        ));
    }

}
