export interface Serializable<T> {
  deserialize(json: any): T;
}
