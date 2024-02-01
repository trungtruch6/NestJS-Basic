import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      '# There is at least a digit.\n# There is one or more "non word" characters.\n# There is no . or newline.\n# There is at least an upper case letter.\n# There is at least a lower case letter.\n# in a string of any characters.',
  })
  password: string;
}
