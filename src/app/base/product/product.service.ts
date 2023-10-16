import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product, ProductData } from "./product";
import { Observable, map } from 'rxjs';

@Injectable()
export class ProductService{
    constructor (private httpClient: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.httpClient.get<ProductData>('../../../assets/products.json').pipe(map(u=>u.data));
    }
}