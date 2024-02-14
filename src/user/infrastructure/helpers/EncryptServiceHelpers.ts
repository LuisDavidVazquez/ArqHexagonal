import { IEncryptService } from "../../application/services/IEncryptService";
import bcrypt from "bcryptjs";


export class EncryptServiceHelpers implements IEncryptService {

  encryptService(password : string) : string {
    const passwordEncrypted  = bcrypt.hashSync(password, 12);
    return passwordEncrypted;
  }
  authPassword(password : string, passCrypted : string) : boolean{
    const passwordAuth = bcrypt.compareSync(password, passCrypted);
    return passwordAuth;
  }
  
}
