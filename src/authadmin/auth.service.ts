import { Injectable } from "@nestjs/common";
import { loginAdmin } from "./auth.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/user-entity';





@Injectable()
export class AuthService{

    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,){

    }
    
   
   
       async loginAdmin(loginuserdto:loginAdmin){ 
           const Email = loginuserdto.Email;
           const Password = loginuserdto.Password;
           const Position = loginuserdto.Position;
        return this.usersRepository.find({where: { Email: Email, Password: Password, Position: 'Instructor' }});
    }
}
