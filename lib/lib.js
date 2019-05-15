if (typeof mergeInto !== "undefined")
  mergeInto(LibraryManager.library, {
    printjs: function(s) {
      console.log(s);
    },
    reset: function() {
      window.lit = {};
      for (i = 0; i < MAX; i++) {
        window.lit[i] = { r: 0, g: 0, b: 0 };
      }
    },
    delay: function(ms) {
      var curr = new Date().getTime();
      ms += curr;
      while (curr < ms) {
        curr = new Date().getTime();
      }
    },
    light: function(i, r, g, b) {
      if (window.lit == undefined) {
        window.lit = {};
      }
      window.lit[i] = {
        r,
        g,
        b,
      };
    },
    millis: function() {
      return new Date().getTime() - window.init_time;
    },
    digitalRead: function(k) {
      return window.keys[k] ? 1 : 0;
    },
  });
