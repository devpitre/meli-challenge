import { Filter, ItemResult } from '../types';

export class SearchProductDto {
  results: ItemResult[];
  filters: Filter[];
}
