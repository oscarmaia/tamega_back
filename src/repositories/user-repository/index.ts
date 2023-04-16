import prisma from '../../database/index.js';

async function createUser(email: string, password: string) {
  return await prisma.user.create({
    data: {
      email,
      password,
    },
  });
}

async function emailExists(email: string) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

const userRepository = {
  createUser,
  emailExists,
};

export default userRepository;
