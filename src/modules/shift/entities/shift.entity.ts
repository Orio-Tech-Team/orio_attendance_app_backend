import { GenericEntity } from "src/generic/generic.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Employee } from '../../employee/entities/employee.entity';

@Entity('shifts')
export class Shift extends GenericEntity{
    @Column('time',{nullable:false})
    start_time : Date

    @Column('time',{nullable:false})
    end_time : Date

    @Column({nullable:false , length:1})
    type : string

    @OneToMany(()=>Employee , (employee) => employee.shift)
    employee : Employee[]

}