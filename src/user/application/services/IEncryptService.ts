
export interface IEncryptService {
  encryptService(password : string):  string;
  authPassword(password : string, passCrypted : string) : boolean
}