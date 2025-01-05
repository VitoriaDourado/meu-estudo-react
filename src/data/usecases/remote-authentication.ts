import { Authentication, AuthenticationParams } from "../../domain/usestate/authentication";
import { HttpPostClient } from "../../data/protocols/http/http-post-client";
import { HttpStatusCode } from "../protocols/http/http-response";
import { InvalidCredentialsError } from "../../domain/error/invalid-credentials-error";
import { UnexpectedError } from "../../domain/error/unespected-error";
import { AccountModel } from "@/domain/models/account-model";

export class RemoteAuthentication implements Authentication{
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> { 
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    console.log("HttpRespose: ", HttpResponse);

    switch (HttpResponse.statusCode) {
      case HttpStatusCode.ok:
        return HttpResponse.body  
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
