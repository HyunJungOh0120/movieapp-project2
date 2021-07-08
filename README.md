# 🍿 Movie Info App

Simple movie info & search app built with HTML, CSS Module, React.js

## 🌼 Introduction

This is a movie app where you can search the movie title or movie casts/credits and get some details on movie.

## 🚀 Features

There are total 4 pages.

- **Home** (/browse)

  - The webpage fetches the date on popular movies then populates the slider with a selection of movies.
  - Every 4 seconds a movie from this selection is randomly selected and displayed in the background.
  - Below the slider, 5 randomly selected genres are displayed in sliders.
  - By clicking on a movie, the user is directed to the movie's full information page.

- **Genre** (/genre)

  - In the genre section, movies are grouped and displayed based on their genre.
  - By clicking on a movie, the user is directed to the movie's full information page

- **Search** (/search)
  - The user can search a movie via the search bar in the navigation bar. Movies can be searched by title or cast member's name.
  - When the actor's name is searched, similar names will be shown. If user clicks one of these names, the website will automatically search with this name keyword.
    - ex) Daniel => Daniel Bruhl, Daniel Gillies, Daniel Baldwin, Daniel Craig...
  - If the results have same key word, the website will merge the duplicated results.

```javascript
// before
[
  { name: 'Daniel Baldwin', known_for: Array(1) },
  { name: 'Daniel Baldwin', known_for: Array(1) },
  { name: 'Daniel Baldwin', known_for: Array(2) },
][
  // after
  { name: 'Daniel Baldwin', known_for: Array(4) }
];
```

- **Detail** (/detail)
  - In the detail section, casts are displayed in slider.
  - Some recommended movies are displayed in slider as well.
  - Both casts' profile images and movies' posters will lead to search page when clicked.

## 🎨 Visuals

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Links

[MIT](https://choosealicense.com/licenses/mit/)
