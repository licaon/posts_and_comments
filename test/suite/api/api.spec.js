import fetchData from 'src/api';

describe('Api', () => {
  it(`should execute fetchData correctly and default to GET method`, () => {
    fetch.mockResponse(JSON.stringify({
      response: 'response',
    }));

    return fetchData({ url: 'url' }).then((data) => {
      expect(fetch).toHaveBeenCalledWith(
        'url',
        {
          body: {},
          headers:
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          method: 'GET',
        },
      );
      expect(data).toMatchSnapshot();
    });
  });
  it(`should execute fetchData correctly with the right arguments`, () => {
    fetch.mockResponse(JSON.stringify({
      response: 'response',
    }));

    return fetchData({
      url: 'url',
      body: {
        content: 'content',
      },
      method: 'POST',
    }).then((data) => {
      expect(fetch).toHaveBeenCalledWith(
        'url',
        {
          body: {
            content: 'content',
          },
          headers:
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          method: 'POST',
        },
      );
      expect(data).toMatchSnapshot();
    });
  });
});
