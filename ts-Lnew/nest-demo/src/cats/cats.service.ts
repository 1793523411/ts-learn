import { Injectable } from '@nestjs/common';

interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat);
    this.cats.push(cat);
    console.log(this.cats);
  }

  findAll(): Cat[] {
    console.log(this.cats);
    return this.cats;
  }
}
