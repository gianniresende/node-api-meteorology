
import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWhater3hoursFixture from '@test/fixtures/stormglass_wather_3_hours.json';
import stormGlassNormlized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass Client', () => {
  it('Should return the normalized forecast from the StormGlass service', async() => {
    const lat = -15.000001;
    const lng = 45.584900

    axios.get = jest.fn().mockResolvedValue(stormGlassWhater3hoursFixture);

    const stormGlass = new StormGlass(axios);
    const reponse = await stormGlass.fetchPoint(lat, lng);
    expect(reponse).toEqual(stormGlassNormlized3HoursFixture);
  })
});