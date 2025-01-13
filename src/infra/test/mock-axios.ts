import { faker } from "@faker-js/faker/.";
import axios from "axios";


export const mockAxios = ():jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mockedAxiosResult = {
    data: { anyField: faker.helpers.arrayElement() }, 
    status: faker.datatype.number({ min: 200, max: 299 }), 
  }
  mockedAxios.post.mockResolvedValue({
    data: { anyField: faker.helpers.arrayElement() }, 
    status: faker.datatype.number({ min: 200, max: 299 }), 
  })
  return mockedAxios
}
