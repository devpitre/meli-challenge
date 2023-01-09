import { Author } from '@entities/author';

import { Injectable } from '@nestjs/common';
import { MeliService } from '@resources/meli-api/meli.service';
import { Filter, ItemResult } from '@resources/meli-api/types';
import { FindProductDto } from './dto/find-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private author: Author = {
    name: 'Carlos',
    lastName: 'Pitre',
  };

  constructor(private meliService: MeliService) {}

  private filterCategories(filters: Filter[]) {
    const categories: string[] = [];
    filters.forEach((filter) => {
      if (filter.id === 'category') {
        const { values } = filter;
        values.forEach((value) => {
          value.path_from_root.forEach((path) => {
            categories.push(path.name);
          });
        });
      }
    });
    return categories;
  }

  private filterItems(items: ItemResult[]): Product[] {
    const products: Product[] = [];
    items.forEach((item) => {
      const {
        address,
        attributes,
        currency_id,
        id,
        price,
        shipping,
        thumbnail,
        title,
      } = item;
      const condition = attributes.find(
        (attr) => attr.id === 'ITEM_CONDITION',
      ).value_name;

      products.push({
        id,
        condition,
        picture: thumbnail,
        title,
        free_shipping: shipping.free_shipping,
        price: {
          amount: price,
          currency: currency_id,
          decimals: 0,
        },
        state_name: address.state_name,
      });
    });
    return products;
  }

  async findAll(query: QueryProductDto): Promise<FindProductsDto> {
    const { q } = query;
    try {
      const { data } = await this.meliService.getProducts(q);
      const { filters, results } = data;

      const categories = this.filterCategories(filters);
      const items = this.filterItems(results.splice(0, 4));

      return {
        author: this.author,
        categories,
        items,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string): Promise<FindProductDto> {
    try {
      const [item, descriptionItem] = await Promise.all([
        this.meliService.getProductById(id),
        this.meliService.getDescriptionByProduct(id),
      ]);
      const { data: dataItem } = item;
      const { data: dataDescription } = descriptionItem;

      const {
        attributes,
        currency_id,
        price,
        shipping,
        thumbnail,
        title,
        sold_quantity,
      } = dataItem;
      const condition = attributes.find(
        (attr) => attr.id === 'ITEM_CONDITION',
      ).value_name;

      return {
        author: this.author,
        item: {
          id,
          condition,
          picture: thumbnail,
          title,
          free_shipping: shipping.free_shipping,
          price: {
            amount: price,
            currency: currency_id,
            decimals: 0,
          },
          description: dataDescription.plain_text,
          sold_quantity,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
}
