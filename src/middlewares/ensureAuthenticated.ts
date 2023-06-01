import { AppError } from "@errors/appError";
import { UsersRepository } from "@modules/accounts/repositories/implementations/usersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  
  //Bearer "token"
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "0ed430d59a2c1dd96f192f3126bd9978") as IPayload
    
    const usersRespository = new UsersRepository()
    const user = await usersRespository.findById(user_id)

    if(!user) {
      throw new AppError("User does not exists!", 401)
    }

    next()
  }
  catch {
    throw new AppError("Invalid token!", 401)
  }
}