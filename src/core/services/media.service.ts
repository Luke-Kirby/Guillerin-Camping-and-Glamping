import axios from "axios";

export class MediaService {
  readonly headers: { [header: string]: string } = {
    // "Service-Ref": "guillerin",
    "Content-Type": "application/json"
  };

  // private baseUrl = `https://y1ibxcu0nk.execute-api.eu-west-2.amazonaws.com/dev`;
  private baseUrl = `http://localhost:4001/dev`;

  public async getImages(): Promise<string[] | null> {
    try {
      const resp = await axios.get(`${this.baseUrl}`, this.headers)
      console.log(`resp`, resp)
      if (resp && resp.data) {
        return resp.data;
      } else {
        return null;
      }
    } catch (e) {
      console.log(`error`, e)
      //TODO - handle error - this might be handled in the http service?
      return new Promise((resolve) => resolve(null));
    }
  }

  public async deleteImage(key: string): Promise<boolean> {
    try {
      const resp = await axios.post(
        `${this.baseUrl}/delete`,
        {
          keys: [key],
        },
        { headers: this.headers }
      );
      return !!resp;
    } catch (e) {
      console.log(e);
      return new Promise((resolve) => resolve(false));
    }
  }

  public async uploadImage(formData: FormData): Promise<string | null> {
    try {
      const resp = await axios.post(`${this.baseUrl}`, formData);
      if (resp && resp.data && resp.data.key) {
        return `https://ryan-sermons.s3.eu-west-2.amazonaws.com/${resp.data.key}`;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      return new Promise((resolve) => resolve(null));
    }
  }
}
