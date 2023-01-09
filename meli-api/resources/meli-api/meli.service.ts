import { Injectable } from '@nestjs/common';
import meliInstance from '@resources/instances/meli.instance';
import { AxiosInstance, AxiosResponse } from 'axios';
import { SearchProductDto } from './dto/search-product.dto';
import { ItemResult, ProductDescription } from './types';

@Injectable()
export class MeliService {
  instanceHttp: AxiosInstance;

  constructor() {
    this.instanceHttp = meliInstance;
  }

  getProducts(query: string): Promise<AxiosResponse<SearchProductDto>> {
    return meliInstance.get<SearchProductDto>('sites/MLA/search', {
      params: { q: query },
    });
  }

  getProductById(id: string): Promise<AxiosResponse<ItemResult>> {
    return meliInstance.get<ItemResult>(`items/${id}`);
  }

  getDescriptionByProduct(
    id: string,
  ): Promise<AxiosResponse<ProductDescription>> {
    return meliInstance.get<ProductDescription>(`items/${id}/description`);
  }
}
