import { Injectable } from "@nestjs/common";

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from "./create-users.dto";
import { UpdateUserDto } from "./update-users.dto";
import { DeleteUserDto } from "./delete-users.dto";
import { User } from "./user-entity";

@Injectable()
export class UsersService{

    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,){

    }

  
     insertUser(createuserdto:CreateUserDto){
       const newuser=  this.usersRepository.create(createuserdto);
       const user=this.usersRepository.save(newuser);
       return user;
        
    }

    updateUser(updateuserdto:UpdateUserDto, id:number){
        const newuser=  this.usersRepository.update(id, updateuserdto);
        return newuser;
      
         
     }
     remove(deleteuserdto:DeleteUserDto, id:number){
        const newuser=  this.usersRepository.delete(id);
        return newuser;
      
         
     }

    async getUser(){
        return await  this.usersRepository.find();
        
    }

}