// Cache service using Redis or in-memory
export class CacheService {
  private cache = new Map<string, any>();

  get(key: string) {
    return this.cache.get(key);
  }

  set(key: string, value: any, ttl?: number) {
    this.cache.set(key, value);
    if (ttl) {
      setTimeout(() => this.cache.delete(key), ttl);
    }
  }

  delete(key: string) {
    this.cache.delete(key);
  }
}

export const cacheService = new CacheService();