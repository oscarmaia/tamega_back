import bcrypt from 'bcrypt';
import userRepository from '../../repositories/user-repository/index.js';
import { invalidCredentialsError } from './errors.js';

async function getUserOrFail(email: string) {
  const user = await userRepository.emailExists(email);
  if (!user) {
    throw invalidCredentialsError();
  }
  return user;
}

async function validatePasswordOrFail(password: string, hashedPassword: string) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  if (!validPassword) {
    throw invalidCredentialsError();
  }
}

async function signIn(email: string, password: string) {
  const user = await getUserOrFail(email);
  await validatePasswordOrFail(password, user.password);
}

const authService = {
  signIn,
};

export default authService;
