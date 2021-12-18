import type { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { ClassConstructor} from "class-transformer";
import { plainToClass } from "class-transformer";

@Injectable()
export class ParseQueryPipe implements PipeTransform<string> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const obj = plainToClass(metatype as ClassConstructor<any>, value);
    console.log("metatype ---> ", JSON.stringify(obj));
    return obj;
  }
}
