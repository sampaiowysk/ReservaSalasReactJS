import CalendarioService from "../services/CalendarioService";
import mockAxios from "axios";

const SALA_TESTE = 'tqv44si5ikhc919fojfboq5fdc';

it('Buscar os eventos', () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
        data: [{}, {}, {}]
        })
    );
        debugger;
    CalendarioService.buscarEventos(SALA_TESTE).then((eventos) => {
        expect(eventos.length).toBeEqual(3);
    });
  });