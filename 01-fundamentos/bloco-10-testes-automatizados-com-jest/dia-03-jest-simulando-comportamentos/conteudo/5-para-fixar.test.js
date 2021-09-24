const math = require('./2-math');

const mockSub = jest.spyOn(math, 'subtrair');
describe('Testes das funções do arquivo math', () => {
  it('Função subtrair', () => {
    mockSub(3, 2);
    expect(mockSub).toHaveBeenCalled();
    expect(mockSub).toHaveBeenCalledTimes(1);
    expect(mockSub).toHaveBeenCalledWith(3, 2);
    expect(mockSub(3, 2)).toBe(1);
  })
  it('Função multiplicar', () => {
    const multSpied = jest.spyOn(math, 'multiplicar');
    multSpied.mockReturnValue(10);

    multSpied(1, 2);
    
    expect(multSpied).toHaveBeenCalled();
    expect(multSpied).toHaveBeenCalledTimes(1);
    expect(multSpied).toHaveBeenCalledWith(1, 2);
    expect(multSpied(1, 2)).toBe(10);
  });
  it('Função somar', () => {
    let somar = math.somar
    somar = jest.fn();
    somar.mockImplementation((a, b) => a + b);
    somar(2, 2);

    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledTimes(1);
    expect(somar).toBeCalledWith(2, 2);
    expect(somar(1, 2)).toBe(3);
  });
  it('Função dividir', () => {
    const divSpied = jest.spyOn(math, 'dividir');
    divSpied.mockReturnValue(15);
    divSpied.mockReturnValueOnce(2);
    divSpied.mockReturnValueOnce(5);

    expect(divSpied(1,1)).toBe(2);
    expect(divSpied).toHaveBeenCalled();
    expect(divSpied).toHaveBeenCalledTimes(1);

    expect(divSpied(1, 2)).toBe(5);
    expect(divSpied).toHaveBeenCalledTimes(2);

    expect(divSpied(2, 2)).toBe(15);
    expect(divSpied).toHaveBeenCalledTimes(3);
  });
})

describe('Modifica função subtrair e depois a restaura', () => {
  it('Função subtrair teste 2', () => {
    mockSub.mockClear();
    mockSub.mockImplementation((a, b) => a + b);

    expect(mockSub(1, 1)).toBe(2);
    expect(mockSub).toHaveBeenCalled()

    mockSub.mockReturnValue(20);

    expect(mockSub(1, 2)).toBe(20);
    expect(mockSub).toHaveBeenCalledTimes(2);

    mockSub.mockRestore()
    mockSub.mockReturnValue(3);

    expect(mockSub(6, 6)).toBe(3);
    expect(mockSub).toHaveBeenCalledTimes(1);
  });
})
