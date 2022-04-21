import { loginUser} from './auth.dto'
import { AuthService } from "./auth.service";
import { Body, Controller, Get, Patch, Post, Param, Delete } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    constructor(private readonly userService: AuthService){}

  
    @Post()
    loginUser(@Body()loginuserdto:loginUser){
       return this.userService.loginUser(loginuserdto);
      
    }

    
    

}