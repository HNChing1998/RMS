import { loginAdmin} from './auth.dto'
import { AuthService } from "./auth.service";
import { Body, Controller, Get, Patch, Post, Param, Delete } from "@nestjs/common";

@Controller('auths')
export class AuthController{
    constructor(private readonly userService: AuthService){}

  
    @Post()
    loginAdmin(@Body()loginuserdto:loginAdmin){
       return this.userService.loginAdmin(loginuserdto);
      
    }

    
    

}