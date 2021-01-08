const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На  сколько оцените его?',''),
      h = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies [a]=b;
personalMovieDB.movies [h]=d;

console.log(personalMovieDB);