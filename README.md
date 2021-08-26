# 🍿 Movie Info App

Simple movie info & search app built with HTML, CSS Module, React.js

## Preview

[Preview](https://movieapp-project2.vercel.app/)

## Table of contents



- [Introduction](#Introduction)
- [Features](#Features)
- [Visuals](#Visuals)
- [Challenging part](#Challenging-part)
- [Technologies](#Technologies)
- [Links](#Links)

## 🌼 Introduction



This is a 'Movie Info' web app which provides some detailed info about movie or creadits of movie. Simplified web app where the user can search and click any movie posters to gain some information about chosen movies, or any credits' profile pictures to see the list of the movie where these credits were acting. Also, user can sort out the movies by clicking different genre buttons.

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
  - Provides the **infinite scroll**!

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



![Home](/ReadmeImages/main.gif)

![genre](/ReadmeImages/genretodetail.gif)

![search](/ReadmeImages/searchtodetail.gif)

![Detail](/ReadmeImages/detailtosearch.gif)

## Challenging part



⓵ Search

- when the use search the movie title or casts, in many cases user does't write full words. In case of searching casts, all related results are listed and clickable for user to search.
- There are some duplicated results which isn't I expected. Made a for-loop function to find & merge all values into one object data.

⓶ Components

- Some re-useable components like Paginator, Button, Poster have their own css.module style. So It was quite challenging when using these on other pages especially in different sizes.

⓷ Infinite scroll

- Since TMDB api provides only 20 results in 1 page, I was considering how to load and show more results. Used Intersection Observer API, useEffect, useRef, useCallback hooks.

## 💻 Technologies



Project is created with:

- HTML
- CSS.module
- REACT.js

## Links

[TMDB API](https://api.themoviedb.org/3/ 'TMDB API')
[OMDB API](http://www.omdbapi.com/ 'OMDB API')
