import * as bcrypt from 'bcrypt';
const mangmentPassword = (password: string) => {
  const hash = async () => {
    return await bcrypt.hash(password, 10)
  }
  const compare = async (comparePassword: string) => {
    return await bcrypt.compare(password, comparePassword)
  }
  return { hash, compare }
}
export default mangmentPassword

