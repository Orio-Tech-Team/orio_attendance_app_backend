import { GenericEntity } from 'src/generic/generic.entity';
import { Cities } from '../../cities/entities/cities.entity';
import { EmployeeStation } from '../../employee/entities/employee-station.entity';
export declare class Station extends GenericEntity {
    station_code: string;
    station_name: string;
    latitude: string;
    longtitude: string;
    radius: number;
    city_code: string;
    cities: Cities;
    employee_station: EmployeeStation[];
}
