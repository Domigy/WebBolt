import { PartialType } from '@nestjs/mapped-types';
import { CreateTermekekDto } from './create-termekek.dto';

export class UpdateTermekekDto extends PartialType(CreateTermekekDto) {}
