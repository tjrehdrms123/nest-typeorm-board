import { JoinColumn, Entity, ManyToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { AnimalEntity } from 'src/animal/entities/animal.entity';
import { GuardianEntity } from 'src/guardian/entities/guardian.entity';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'guardian_animal',
})
export class GuardianAnimalEntity extends CommonEntity {

  @IsString()
  @ManyToOne(() => GuardianEntity, { eager: true })
  @IsNotEmpty({ message: 'Guardian ID를 입력해주세요.' })
  @JoinColumn({ name: 'guardian_id', referencedColumnName: 'id' })
  @ApiProperty({
    example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
    description: '보호자 ID',
    required: true
  })
  guardian_id: GuardianEntity;

  @IsString()
  @IsNotEmpty({ message: 'Animal ID를 입력해주세요.' })
  @ManyToOne(() => AnimalEntity, { eager: true })
  @JoinColumn({ name: 'animal_id', referencedColumnName: 'id' })
  @ApiProperty({
    example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
    description: '반려견 ID',
    required: true
  })
  animal_id: AnimalEntity;
}
