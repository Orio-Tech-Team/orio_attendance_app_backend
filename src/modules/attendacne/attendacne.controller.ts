import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { EmployeeService } from '../employee/employee.service';
import { AttendacneService } from './attendacne.service';
import { GetAttendanceServerDto } from './dto/get-attendance-server.dto';
import { GetAttendanceDto } from './dto/get-attendance.dto';
import { GetAttendanceDataDto } from './dto/get-attendance-data.dto';

@Controller('attendance')
export class AttendacneController {
    constructor(
        private readonly attendacneService: AttendacneService,
        private readonly employeeService: EmployeeService
    ) {}

    @ApiBearerAuth('JWT-auth')
    @Get()
    async markAttendance(@Req() request) : Promise<any>{
        const employeeNumber = request.user_information.refrence_number
        const employee = await this.employeeService.findByShift(employeeNumber)
        return await this.attendacneService.markAttendance(employee);
    }

    @ApiBearerAuth('JWT-auth')
    @Post()
    async getAttendance(@Body() getAttendanceDto : GetAttendanceDto , @Req() request){
        const employeeNumber = request.user_information.refrence_number
        return await this.attendacneService.getAttendanceByMonth(getAttendanceDto,employeeNumber)
    }

    @Post("server")
    async getAttendanceServer(@Body() getAttenadanceServerData : GetAttendanceServerDto){
        return await this.attendacneService.getAttendanceServerUpdate(getAttenadanceServerData)
    }

    @Post("getattendancedata")
    async function (@Body() getAttendanceDataDto : GetAttendanceDataDto) {
        return await this.attendacneService.getAttendanceDataDto(getAttendanceDataDto)
    }
}
