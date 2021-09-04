import {
  Controller,
  Get,
  Req,
  Res,
  HttpCode,
  Header,
  Redirect,
  Param,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  UsePipes,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exception/http-exception.filter';
import { ForbiddenException } from '../common/exception/forbidden.exception';
import {
  JoiValidationPipe,
  ValidationPipe,
} from '../common/pipe/validate.pipe';
import { IsString, IsInt } from 'class-validator';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from '../common/guard/roles.decorator';
import { LoggingInterceptor } from '../common/interceptor/logging.interceptor';
import { User } from '../common/decorator/user.decorator';

type regesRes = {
  name: string;
  code: number;
};

export class CreateCatDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}

interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  findAll(@Req() request: Request, @Res() reponse: Response): void {
    // console.log(request);
    //   return 'This action returns all cats'
    reponse.status(200).send('aaa???');
  }
  @Get('alls')
  findAlls(): { msg: string; code: number } {
    return {
      msg: 'success',
      code: 200,
    };
  }
  @Get('yg*j')
  @HttpCode(200)
  @Header('Cache-Control', '1000')
  //   @Redirect('https://nestjs.com', 301)
  regexGet(
    @Req() request: Request,
    @Res() reponse: Response,
    @Query('version') version: number,
  ): void {
    const name: string = request.url as string;
    const code = reponse.statusCode;
    console.log('code', code);
    console.log('version', version);
    const resObj: regesRes = {
      name,
      code,
    };
    // return {
    //   name,
    //   code: 200,
    // };
    reponse.send(resObj);
    // return '111';
  }
  @Get('promise')
  async findAllPromise(): Promise<any[]> {
    return [];
  }
  @Get('name/:id')
  findOne(@Param() params): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  //   @Post()
  //   async create(@Body() createCatDto: CreateCatDto): Promise<CreateCatDto> {
  //     return createCatDto;
  //   }
  @Post()
  @UseFilters(new HttpExceptionFilter())
  //   @UsePipes(new JoiValidationPipe(createCatSchema))
  //   @UsePipes(new ValidationPipe())
  //   @UsePipes(ValidationPipe)
  //   @UseGuards(RolesGuard)
  //   @UseGuards(new RolesGuard())
  //   @SetMetadata('roles', ['admin'])
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  //   @Get('findAllcat')
  //   async findAllCat(@User() user: UserEntity): Promise<Cat[]> {
  //     console.log(user);
  //     return this.catsService.findAll();
  //   }
}
