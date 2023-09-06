export async function callAPI(
    endpoint: string,
    method: string,
    body: object,
  ) {
    return method === 'POST'
      ? await (
          await fetch('https://petinder-api.notaroomba.xyz' + endpoint, {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          })
        ).json()
      : await (
          await fetch('https://petinder-api.notaroomba.xyz' + endpoint, {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
        ).json();
  }