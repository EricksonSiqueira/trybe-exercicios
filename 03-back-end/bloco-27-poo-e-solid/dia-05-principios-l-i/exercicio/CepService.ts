import FooCepAPI from "./FooCepAPI";

class CepService {
  private readonly _cepApi: FooCepAPI;

  constructor(cepApi: FooCepAPI) {
    this._cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this._cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this._cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
