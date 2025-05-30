import { Role } from '@prisma/client';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  // IsPhoneNumber,
  IsString,
  // IsStrongPassword,
  MinLength,
} from 'class-validator';
// import { EmailIsUnique } from '../validators/email.validator';
// import { PhoneIsUnique } from '../validators/phone.validator';

export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @MinLength(9)
  // @IsPhoneNumber('BR')
  // @PhoneIsUnique({ message: 'phone provided has already been registered' })
  phone!: string;

  @IsDateString()
  birth!: string;

  @IsEmail()
  // @EmailIsUnique({ message: 'email provided has already been registered!' })
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  // @IsStrongPassword()
  password!: string;

  @IsEnum(Role)
  role!: Role;
}
