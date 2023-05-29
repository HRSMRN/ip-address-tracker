class IpSearch {
  constructor() {
    this.key = "at_quZXssMbvAnGaCHYhVAYVYFN8q19z";
    this.countryUrl = "https://geo.ipify.org/api/v2/country";
    this.cityUrl = "https://geo.ipify.org/api/v2/country,city";
  }

  async getCountry(ip) {
    try {
      const query = `?apiKey=${this.key}&ipAddress=${ip}`;

      const response = await fetch(this.countryUrl + query);

      if (response.status === 200) {
        const json = await response.json();

        return json;
      }
    } catch (error) {
      console.log(new Error(error));
    }
  }

  async getCity(ip) {
    try {
      const query = `?apiKey=${this.key}&ipAddress=${ip}`;

      const response = await fetch(this.cityUrl + query);

      if (response.status === 200) {
        const json = await response.json();

        return json;
      }
    } catch (error) {
      console.log(new Error(error));
    }
  }
}

export { IpSearch };
