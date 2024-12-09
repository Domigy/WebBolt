import { Injectable } from '@nestjs/common';
import { CreateTermekekDto } from './dto/create-termekek.dto';
import { UpdateTermekekDto } from './dto/update-termekek.dto';
import { PrismaService } from 'src/prisma.service';



@Injectable()
export class TermekekService {
  
  constructor(private readonly db: PrismaService){}

  create(createTermekekDto: CreateTermekekDto) {
    return 'This action adds a new termekek';
  }

  findAll() {
    return this.db.termekek.findMany();
  }

  findOne(id: number) {
    return this.db.termekek.findUnique({where: {id}});
               }

  update(id: number, updateTermekekDto: UpdateTermekekDto) {
    return `This action updates a #${id} termekek`;
  }

  remove(id: number) {
    return `This action removes a #${id} termekek`;
  }
}
