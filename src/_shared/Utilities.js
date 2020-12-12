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
    },
    {
      id: 2,
      name: "Wishlist 2",
      books: [{
        id: 2,
        isbn: "ISBN 2",
        title: "Title 2",
        subtitle: "Subtitle 2",
        subjects: [
          "Subject 1 book 2",
          "Subject 2 book 2",
          "Subject 3 book 2"
        ],
        authors: [
          "Author 1 book 2"
        ],
        publishers: [
          "Publisher 1 book 2"
        ],
        languages: [
          "EN"
        ],
        publishDate: "2010"
      }, {
        id: 2,
        isbn: "ISBN 3",
        title: "Title 3",
        subtitle: "Subtitle 3",
        subjects: [
          "Subject 1 book 3",
          "Subject 2 book 3",
          "Subject 3 book 3"
        ],
        authors: [
          "Author 1 book 3"
        ],
        publishers: [
          "Publisher 1 book 3"
        ],
        languages: [
          "EN",
          "IT"
        ],
        publishDate: "2011"
      }]
    }]
  }
  return data;
}

export default getMockData;