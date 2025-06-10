import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    
  }

  public async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Gravar dados
  public async set(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  // Ler dados
  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Apagar dados
  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Limpar tudo
  public async clear(): Promise<void> {
    await this._storage?.clear();
  }
}
