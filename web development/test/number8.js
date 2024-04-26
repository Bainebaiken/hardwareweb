
const movie = {
    title: "Puff the dragon ",
    duration : " lasts for 30minutes",
    star     : "Puff is 45 years old in uganda",
    id:5566,
    fullName : function() {
        return this.title + " " + this.duration  + " " +this.star;
      }
    };
    console.log(movie);