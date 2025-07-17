import axios from "axios";

export class PageService {
  readonly headers: { [header: string]: string } = {
    "Service-Ref": "guillerin",
  }

  private baseUrl = process.env.ROOT_API || `http://localhost:4002/media`

  public async getPage(page: string): Promise<any> {
    try {
      const resp = await axios.get(`${this.baseUrl}/page/${page}`, {
        headers: this.headers,
      });
      if (resp && resp.data) {
        resp.data.data.components = JSON.parse(resp.data.data.componentsRaw)
        return resp.data;
      } else {
        return null;
      }
    } catch (e) {
      //TODO - handle error - this might be handled in the http service?
      console.log(e);
      return new Promise((resolve) => resolve(null));
    }
  }

}
