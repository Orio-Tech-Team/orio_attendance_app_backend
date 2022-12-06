import { GenericEntity } from 'src/generic/generic.entity';
import { Station } from '../../station/entities/station.entity';
export declare class Cities extends GenericEntity {
    city_code: string;
    city_name: string;
    station: Station[];
}
