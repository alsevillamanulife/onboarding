export function cleanPayloadForGraphQl<T>(variables: T): T {
    return JSON.parse(JSON.stringify(variables), (key, value) => {
      if (key !== '__typename') {
        return value;
      }
    });
  }
  