// $('#cpf-input').mask('000.000.000-00', {placeholder: "123.456.789-10"})
// $('#start-date').mask('00/00/0000', { placeholder: "dd/mm/aaaa"})
new Cleave('#start-date', {
  date: true,
  delimiter: '/',
  dateMax:'2021-08-23',
  dateMin:'1920-01-01',
  datePattern: ['d', 'm', 'Y'],
});
new Cleave('#cpf-input', {
  delimiters:['.', '.', '-'],
  blocks: [3, 3, 3, 2],
  numericOnly: true,

})
