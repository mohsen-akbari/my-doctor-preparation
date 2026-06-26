import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

export function comparePassword(password, hashed) {
  return bcrypt.compare(password, hashed);
}
