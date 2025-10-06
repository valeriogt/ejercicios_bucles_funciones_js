const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let before2000 = 0;
let after2000 = 0;

for (let i = 0; i < movies.length; i++) {
  if (movies[i].releaseYear < 2000) {
    before2000++;
  } else {
    after2000++;
  }
}

console.log('Películas antes del 2000:', before2000);
console.log('Películas del 2000 o posteriores:', after2000);
