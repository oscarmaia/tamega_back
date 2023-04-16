import bcrypt from 'bcrypt';
import userRepository from '../../repositories/user-repository/index.js';
import { User } from '@prisma/client';
import { duplicatedEmailError } from './errors.js';

export async function createUser(email: string, password: string): Promise<User> {
  await validateUniqueEmailOrFail(email);
  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.createUser(email, hashedPassword);
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.emailExists(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}
