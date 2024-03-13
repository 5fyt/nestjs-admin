import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SysRole from 'src/entities/role.entity';
import SysUserRole from 'src/entities/user-role.entity';
import SysUser from 'src/entities/user.entity';
import SysPerm from 'src/entities/perm.entity';
import SysRolePerm from 'src/entities/role-perm.entity';
import SysTutor from 'src/entities/tutor-info.entity';
import SysCourse from 'src/entities/course.entity';
import { SysUserService } from './user/user.service';
import { SysRoleService } from './role/role.service';
import { SysCourseService } from './course/course.service';
import { SysTutorService } from './tutor/tutor.service';
import { SysCourseController } from './course/course.controller';
import { SysTutorController } from './tutor/tutor.controller';
import { SysRoleController } from './role/role.controller';
import { SysUserController } from './user/user.controller';
import SysReserve from 'src/entities/reserve.entity';
import { SysReserveController } from './reserve/reserve.controller';
import { SysReserveService } from './reserve/reserve.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SysRolePerm,
      SysUser,
      SysPerm,
      SysRole,
      SysUserRole,
      SysCourse,
      SysTutor,
      SysReserve,
    ]),
  ],
  controllers: [
    SysUserController,
    SysRoleController,
    SysCourseController,
    SysTutorController,
    SysReserveController,
  ],
  providers: [
    SysUserService,
    SysRoleService,
    SysCourseService,
    SysTutorService,
    SysReserveService,
  ],
  exports: [TypeOrmModule, SysUserService, SysRoleService, SysTutorService],
})
export class SystemModule {}
