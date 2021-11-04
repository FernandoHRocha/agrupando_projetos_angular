import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2017-03-31 oara 31/03/2021', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2017-03-31')).toEqual('31/03/2017');
  });
});
