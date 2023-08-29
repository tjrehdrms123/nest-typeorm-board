import { PickType } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/entities/animal.entity';

export class CreateAnimalDto extends PickType(AnimalEntity , ['name','introduction','sex','uploads_id','animal_type_id', 'qr_id'] as const) {}