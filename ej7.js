const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songsByGenre = {};

for (let i = 0; i < tracks.length; i++) {
  const genre = tracks[i].genre;
  if (!songsByGenre[genre]) {
    songsByGenre[genre] = [];
  }
  songsByGenre[genre].push(tracks[i]);
}

console.log(songsByGenre);
