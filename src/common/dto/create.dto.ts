import { IsDate } from "class-validator"

class CreateDto {
  @IsDate()
  createAt?: Date
  @IsDate()
  updateAt?: Date

}
export default CreateDto
