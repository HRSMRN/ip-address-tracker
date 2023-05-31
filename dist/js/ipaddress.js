class ipAddress {
  constructor() {
    this.ipAddress = "";
  }

  setIpAddress(ipAddress) {
    this.ipAddress = ipAddress;
  }

  getIpAddress() {
    return this.ipAddress;
  }

  validateIpAddress() {
    if (
      this.ipAddress === "" ||
      this.ipAddress === null ||
      this.ipAddress === undefined
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export { ipAddress };
