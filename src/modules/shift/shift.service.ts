import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shift } from './entities/shift.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShiftService {
    
    constructor(
        @InjectRepository(Shift)
        private readonly shiftRepository : Repository<Shift>
    ){}

}