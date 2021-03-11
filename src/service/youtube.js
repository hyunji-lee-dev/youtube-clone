class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US&key=${this.key}`,
      this.getRequestOptions
    );
    const json = await response.json();
    return json.items;
  }

  async search(inputValue) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputValue}&regionCode=US&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const json = await response.json();
    return json.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
