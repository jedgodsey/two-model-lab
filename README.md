On Singer show page, display Singer's Songs (with links).
Advanced
Deleting a Song updates a Singer's Songs list.
Updating a Song updates a Singer's Songs list.
Deleting a Singer should delete the associated Songs (this is what 'destroy' means in REST).
Enable Singer to be changed when editing a Song (use a drop-down). Be sure the 'edits' happen everywhere in the DB.
Hungry for More
Bootstrap and/or Partials (and static assets)
If you haven't yet, spend a few minutes reading about partials (This article and this article look nice). Then, make some partials for the things that are on every page (Such as... the html <head>? maybe a <header> with the links to add song, song index, add artist, and artist index? a <footer>?). This is one of the key features of templating.

Use a little bootstrap to make your app look nice.

Remember: if you wanna do other/additional CSS, that's a static client-side asset. (How to include static assets (i.e. images, CSS, client-side JS) in an Express app)

Implement some cool visual stuff with something like:

CSS easing/transitions
a library like Velocity (remember -- client-side JS is a static asset and can be included in templates with <script>)
