import { Shift } from './entities/shift.entity';
import { Repository } from 'typeorm';
export declare class ShiftService {
    private readonly shiftRepository;
    constructor(shiftRepository: Repository<Shift>);
}
