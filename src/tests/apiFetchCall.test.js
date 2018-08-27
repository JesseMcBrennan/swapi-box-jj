import { mockPeopleData } from '../data/__mocks__/api-call';
import { cleanPeopleData, mockCleanedPersonData} from '../data/apiFetchCall';

describe('apiFetchCall tests', () => {
  console.log(mockCleanedPersonData);
  it('', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ok: true,
            name: 'Leia Organa'

          })
      }));
    const result = await cleanPeopleData(mockPeopleData);
    expect(result).toEqual(mockCleanedPersonData);
  });

});
