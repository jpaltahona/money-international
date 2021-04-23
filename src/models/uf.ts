export interface Serie{
  fecha: Date,
  valor: number
}

export interface MoneyType{
  version: string,
  autor: string,
  codigo: string,
  nombre: string,
  // eslint-disable-next-line camelcase
  unidad_medida: string,
  serie: Serie[],
  date: string
}
