import Config from '../config/api';

function remoteLinkAddress() {
    const IPaddress = `http://118.24.84.199:8080/sm${Config.BASE_URL}`;
    return IPaddress;
}

export default remoteLinkAddress;
