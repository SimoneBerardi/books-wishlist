function getMockData() {
  const data = {
    wishlists: [{
      id: 1,
      name: "Wishlist 1",
      books: [{
        id: 1,
        isbn: "1931498717",
        title: "Don't think of an elephant!",
        subtitle: "know your values and frame the debate : the essential guide for progressives",
        subjects: [
          "Communication in politics -- United States",
          "Progressivism (United States politics)",
          "United States -- Politics and government -- 2001-"
        ],
        authors: [
          "George Lakoff"
        ],
        publishers: [
          "Chelsea Green Pub. Co."
        ],
        languages: [
          "EN"
        ],
        publishDate: "2006"
      }]
    }]
  }
  return data;
}

export default getMockData;