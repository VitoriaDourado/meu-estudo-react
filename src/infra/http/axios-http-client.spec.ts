import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { mockAxios } from "../test";
import { mockPostRequest } from "../../data/test/mock-http-post";


jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
};

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const {sut, mockedAxios} = makeSut();

    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("Should return the correct response", async () => {
    const {sut, mockedAxios} = makeSut();
    const promise = await sut.post(mockPostRequest());

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
