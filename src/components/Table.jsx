const Table = ({ data }) => {
  return (
    <>
      {
        JSON.stringify(data) == '{}'
          ? ''

          : <table>
            <tr>
              <td>city</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Kelvin</td>
              <td>{data.main?.temp}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{data.weather[0].description}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{data.sys.country}</td>
            </tr>
            <tr>
              <td>Celsius</td>
              <td>{(data.main?.temp - 273.15)}</td>
            </tr>
          </table>
      }

    </>
  );
}

export default Table;