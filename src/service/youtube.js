class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'US',
      },
    });
    return response.data.items;
  }

  async search(inputValue) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: inputValue,
        regionCode: 'US',
        type: 'video,',
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async videoById(id) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        id: id,
        regionCode: 'US',
      },
    });
    return response.data.items[0];
  }
}

export default Youtube;
